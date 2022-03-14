<div align="center">
  <a href="./">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Hadith1.png">
  </a>
  <h1 align="center">Hadis API ID</h1>
  <p align="center">
      <strong>REST API Hadis dengan terjemahan Indonesia dari 9 perawi (Abu Dawud, Bukhari, Tirmidzi, Ibnu Majah, dll).</strong>
  </p>
   <p align="center">
    <a href="https://hadis-api-id.vercel.app"><strong>Demo</strong></a> · <a href="https://github.com/renomureza/hadis-api-id/issues"><strong>Lapor Bug</strong></a> · <a href="https://github.com/renomureza/hadis-api-id/issues"><strong>Request Fitur</strong></a>
  </p>
  <a href="https://github.com/renomureza/hadis-api-id/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/renomureza/hadis-api-id">
  </a>
  <a href="https://github.com/renomureza/hadis-api-id/network/members">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/renomureza/hadis-api-id">
  </a>
  <a href="https://github.com/renomureza/hadis-api-id/stargazers">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/renomureza/hadis-api-id">
  </a>
  <a href="https://github.com/renomureza/hadis-api-id/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/renomureza/hadis-api-id">
  </a>
  <a href="https://github.com/renomureza/hadis-api-id/blob/main/LICENSE">
  <img alt="GitHub license" src="https://img.shields.io/github/license/renomureza/hadis-api-id">
  </a>
</div>

## Endpoints

| Endpoint                              | Contoh                                                                                                | Deskripsi                                                                                                                                    |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `/hadith`                             | [`/hadith`](https://hadis-api-id.vercel.app/hadith)                                                   | daftar perawi.                                                                                                                               |
| `/hadith/{perawiSlug}?page=1&limit20` | [`/hadith/abu-dawud?page=1&limit=20`](https://hadis-api-id.vercel.app//hadith/abu-dawud?page=1&limit) | daftar hadis berdasarkan imam. `page` (opsional, default 1) halaman paginasi, `limit` (opsional, default 20) batas jumlah hadis per halaman. |
| `/hadith/{perawiSlug}/{norHadis}`     | [`/hadith/abu-dawud/2`](https://hadis-api-id.vercel.app/hadith/abu-dawud/2)                           | hadis dari berdasarkan imam dan nomor.                                                                                                       |

## Sumber Data

Semua data disimpan di [folder data](https://github.com/renomureza/hadis-api-id/tree/main/data). Berasal dari [hadith-api](https://github.com/sutanlab/hadith-api) (tafsirq.com) dengan beberapa perbaikan.

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
