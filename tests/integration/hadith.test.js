const request = require('supertest');
const app = require('../../src/app');
const httpStatus = require('../../src/utils/httpStatus');

describe('GET /v1/hadith', () => {
  describe('when correct path', () => {
    test('should return http status 200', async () => {
      const res = await request(app).get('/v1/hadith');

      expect(res.statusCode).toBe(httpStatus.OK);
    });

    test('should return correct array of object', async () => {
      const res = await request(app).get('/v1/hadith');

      expect(res.statusCode).toBe(httpStatus.OK);
      res.body.forEach((narrator) => {
        expect(narrator).toMatchObject({
          name: expect.any(String),
          slug: expect.any(String),
          total: expect.any(Number),
        });
      });
    });
  });

  describe('when wrong path', () => {
    test('should return http status 404', async () => {
      const res = await request(app).get('/v1/hadithh');

      expect(res.statusCode).toBe(httpStatus.NOT_FOUND);
    });

    test('should return error object', async () => {
      const res = await request(app).get('/v1/hadithh');

      expect(res.body).toMatchObject({
        message: expect.any(String),
        code: expect.any(Number),
      });
    });
  });
});

describe('GET /v1/hadith/:narrator', () => {
  describe('when correct path', () => {
    test('should return http status 200', async () => {
      const res = await request(app).get('/v1/hadith/abu-dawud');

      expect(res.statusCode).toBe(httpStatus.OK);
    });

    test('should return correct object', async () => {
      const res = await request(app).get('/v1/hadith/abu-dawud');

      expect(res.body).toMatchObject({
        name: expect.any(String),
        slug: expect.any(String),
        total: expect.any(Number),
        pagination: {
          currentPage: 1,
          totalItems: expect.any(Number),
          pageSize: 20,
          startPage: 1,
          startIndex: 0,
          endIndex: 19,
          totalPages: expect.any(Number),
          endPage: expect.any(Number),
          pages: expect.arrayContaining([expect.any(Number)]),
        },
        items: expect.arrayContaining([
          expect.objectContaining({
            number: expect.any(Number),
            id: expect.any(String),
            arab: expect.any(String),
          }),
        ]),
      });
    });
  });

  describe('when limit page size 50', () => {
    test('should return 50 items', async () => {
      const res = await request(app).get('/v1/hadith/abu-dawud?limit=50');
      expect(res.body.items.length).toBe(50);
    });
  });

  describe('when page out of total page', () => {
    test('should return http status 404', async () => {
      const res = await request(app).get('/v1/hadith/abu-dawud?page=1000');

      expect(res.statusCode).toBe(404);
      expect(res.body).toMatchObject({
        code: 404,
        message: expect.any(String),
      });
    });
  });
});

describe('GET /v1/hadith/:narrator/:number', () => {
  describe('when number hadits is exists', () => {
    test('should return http status 200', async () => {
      const res = await request(app).get('/v1/hadith/abu-dawud/1');

      expect(res.statusCode).toBe(httpStatus.OK);
    });

    test('should return correct object', async () => {
      const res = await request(app).get('/v1/hadith/abu-dawud/1');

      expect(res.body).toMatchObject({
        name: expect.any(String),
        number: expect.any(Number),
        arab: expect.any(String),
        id: expect.any(String),
      });
    });
  });

  describe('when number hadits not exists', () => {
    test('should return http status 200', async () => {
      const res = await request(app).get('/v1/hadith/abu-dawud/0');

      expect(res.statusCode).toBe(httpStatus.NOT_FOUND);
    });

    test('should return correct object', async () => {
      const res = await request(app).get('/v1/hadith/abu-dawud/0');

      expect(res.body).toMatchObject({
        message: expect.any(String),
        code: expect.any(Number),
      });
    });
  });
});
