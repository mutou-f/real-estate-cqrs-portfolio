# API Routes

## Auth

- `POST /auth/signup`
- `POST /auth/login`
- `POST /auth/refresh`

## Commands

- `POST /applications`
- `POST /applications/:id/submit`
- `POST /applications/:id/approve`
- `POST /applications/:id/reject`

## Queries

- `GET /applications`
- `GET /applications/:id`
- `GET /applications/:id/events`

## 面談での説明

- `更新系は POST 系の command API に寄せています`
- `参照系は GET 系の query API から read model を返します`
