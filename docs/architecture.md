# Architecture

## Domain

- applicant
- reviewer
- admin
- application
- event

## CQRS

- Command: 作成、提出、承認、却下
- Query: 一覧、詳細、履歴

## Event Sourcing

- `ApplicationCreated`
- `ApplicationSubmitted`
- `ApplicationApproved`
- `ApplicationRejected`
