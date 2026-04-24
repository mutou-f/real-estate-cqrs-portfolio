# Real Estate CQRS Portfolio

不動産申込・審査システムを題材に、`認証` `CQRS` `Event Sourcing` を理解するためのポートフォリオです。

## 目的

- JWT 認証とロール制御を実装する
- Command と Query を分離する
- 状態変更をイベントとして保存する
- Read Model を使って一覧・詳細を表示する

## 想定構成

- `apps/web`: Next.js フロントエンド
- `apps/api`: NestJS API
- `packages/shared-types`: 共有型
- `docs`: 設計メモ

## 完成形のイメージ

このポートフォリオでは次を説明できる状態を目指します。

- JWT 認証でログインできる
- 申込者と審査担当で権限が分かれる
- 更新系は Command、参照系は Query で分ける
- 状態変更は event store に保存する
- 一覧や詳細は read model から取得する
- イベント履歴を画面で見られる

## 主要ディレクトリ

```text
apps/
  web/
    src/app/
      login/
      applications/
      review/
  api/
    src/
      auth/
      users/
      applications/
        commands/
        queries/
        read-models/
      events/
        projectors/
      database/
        prisma/
packages/
  shared-types/
docs/
  architecture.md
  api/routes.md
  db/schema.md
  answers/
    interview-cqrs.md
    interview-event-sourcing.md
    interview-auth.md
```

## 面談で言えること

- `認証は JWT ベースで、ロールに応じて操作制御する構成です`
- `CQRS は更新と参照で責務を分け、変更しやすさと読みやすさを分離するために使っています`
- `Event Sourcing は状態変更イベントを保存して、監査性と履歴追跡を持たせるために入れています`
- `read model は一覧や詳細表示に使い、イベント列を毎回なめなくてよい形にしています`
