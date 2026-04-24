# Interview Notes: Event Sourcing

## 一言説明

`Event Sourcing は、現在の状態だけでなく、状態変更のイベントを保存する考え方です`

## イベント

- `ApplicationCreated`
- `ApplicationSubmitted`
- `ApplicationApproved`
- `ApplicationRejected`

## 説明例

`このシステムでは、申込の状態そのものだけを持つのではなく、作成・提出・承認・却下の状態変更イベントを event store に保存しています。そのうえで一覧や詳細は read model を使って返す形にしていて、履歴追跡と監査性を持たせることを意識しました`

## 話す時の注意

- `完全なイベントソーシング基盤を実務運用した` とは言わない
- `履歴追跡と監査性を意識して構成した` と言う
- `履歴や監査性が重要な場面に向く` と言う
