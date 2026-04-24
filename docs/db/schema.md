# DB Schema Notes

## users

- ログインユーザー
- role を保持する

## refresh_tokens

- refresh token を管理する

## event_store

- 状態変更イベントを時系列で保存する
- 監査性を担保する

## application_read_models

- 一覧・詳細表示用の read model
- query 側はここを見る

## 面談での説明

- `event store は履歴そのものです`
- `read model は画面表示のために最適化した参照用データです`
- `イベント列を毎回そのまま読むのではなく、表示用に整えた read model を使います`
