# Hadits API ID

<div align="center">
  <a href="./">
    <img src="./assets/logo.png">
  </a>
  <h1 align="center">Hadits API ID</h1>
  <p align="center">
      <strong>REST API Hadits dengan terjemahan Indonesia dari 9 perawi (Abu Dawud, Bukhari, Tirmidzi, Ibnu Majah, dll).</strong>
  </p>
   <p align="center">
    <a href="https://hadits-api-id.vercel.app"><strong>Demo</strong></a> · <a href="https://github.com/renomureza/hadits-api-id/issues"><strong>Lapor Bug</strong></a> · <a href="https://github.com/renomureza/hadits-api-id/issues"><strong>Request Fitur</strong></a>
  </p>
  <a href="https://github.com/renomureza/hadits-api-id/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/renomureza/hadits-api-id">
  </a>
  <a href="https://github.com/renomureza/hadits-api-id/network/members">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/renomureza/hadits-api-id">
  </a>
  <a href="https://github.com/renomureza/hadits-api-id/stargazers">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/renomureza/hadits-api-id">
  </a>
  <a href="https://github.com/renomureza/hadits-api-id/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/renomureza/hadits-api-id">
  </a>
  <a href="https://github.com/renomureza/hadits-api-id/blob/main/LICENSE">
  <img alt="GitHub license" src="https://img.shields.io/github/license/renomureza/hadits-api-id">
  </a>
</div>

## Endpoints

| Endpoint                              | Contoh                                                                                                 | Deskripsi                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/hadith`                             | [`/hadith`](https://hadits-api-id.vercel.app/hadith)                                                   | daftar perawi.                                                                                                                                   |
| `/hadith/{perawiSlug}?page=1&limit20` | [`/hadith/abu-dawud?page=1&limit=20`](https://hadits-api-id.vercel.app//hadith/abu-dawud?page=1&limit) | daftar hadiths berdasarkan imam. `page` (opsional, default 1) halaman paginasi, `limit` (opsional, default 20) batas jumlah hadiths per halaman. |
| `/hadith/{perawiSlug}/{norHadits}`    | [`/hadith/abu-dawud/2`](https://hadits-api-id.vercel.app/hadith/abu-dawud/2)                           | hadits dari berdasarkan imam dan nomor.                                                                                                          |

## Sumber Data

Semua data disimpan di [folder data](https://github.com/renomureza/hadits-api-id/tree/main/data). Berasal dari [hadith-api](https://github.com/sutanlab/hadith-api) (tafsirq.com) dengan beberapa perbaikan.

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
