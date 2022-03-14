const express = require('express');
const hadithController = require('../controllers/hadiths.controller');

const router = express.Router({ mergeParams: true });

router.get('/', hadithController.getNarrates);
router.get('/:narrator', hadithController.getHadiths);
router.get('/:narrator/:number', hadithController.getHadith);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Hadith
 */

/**
 * @swagger
 *  /hadith:
 *    get:
 *      tags:
 *      - Hadith
 *      summary: Daftar imam
 *      responses:
 *        200:
 *          description: ok
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Narrator'
 *        404:
 *          description: not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 *  /hadith/{slug}:
 *    get:
 *      tags:
 *      - Hadith
 *      summary: Daftar hadits berdasarkan imam
 *      parameters:
 *        - name: slug
 *          in: path
 *          description: imam slug
 *          required: true
 *          example: abu-dawud
 *          schema:
 *            type: string
 *
 *        - name: page
 *          in: query
 *          example: 1
 *          schema:
 *            type: string
 *
 *        - name: limit
 *          in: query
 *          example: 20
 *          schema:
 *            type: string
 *
 *      responses:
 *        200:
 *          description: successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Hadith'
 *        404:
 *          description: not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 *  /hadith/{slug}/{number}:
 *    get:
 *      tags:
 *      - Hadith
 *      summary: Hadits berdasarkan imam dan nomor
 *      parameters:
 *        - name: slug
 *          description: imam slug
 *          in: path
 *          required: true
 *          example: abu-dawud
 *          schema:
 *            type: string
 *        - name: number
 *          description: nomor hadits
 *          in: path
 *          required: true
 *          example: 1
 *          schema:
 *            type: string
 *
 *      responses:
 *        200:
 *          description: successful operation
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  slug:
 *                    type: string
 *                  number:
 *                    type: number
 *                  arab:
 *                    type: string
 *                  id:
 *                    type: string
 *
 *        404:
 *          description: not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
