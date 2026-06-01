# Coffee Street Website - GitHub Copilot Custom Instructions

## Project Overview

Coffee Streetは、コーヒー店を紹介するサイトではありません。

このプロジェクトの本質は、

「マグカップを集めることで街の物語を集める体験」

を提供することです。

ユーザーはコーヒーを目的に訪れるのではなく、

「次のマグカップが欲しい」
「次のストーリーカードを集めたい」

というコレクション欲求によって加盟店を巡ります。

---

## Core Concept

### Story × Street

各店舗には独自の歴史や想いがあります。

Coffee Streetはそれらを一つの「通り（Street）」として繋ぎます。

ユーザーは店舗を巡ることで、

マグカップと共に物語を収集していきます。

---

## User Experience Goals

### Visitor Perspective

サイトを見た人が

「コーヒーを飲みたい」

ではなく

「このマグカップ欲しい」

と思うことを最優先にする。

さらに

「このカードも集めたい」

と思わせる。

---

### Store Owner Perspective

加盟店向けには

* 集客支援
* ブランド価値向上
* コーヒーストリート全体での情報発信

を訴求する。

加盟店になることで単独店舗では難しい広報活動を行えることを伝える。

---

## Design Philosophy

### Emotional Design First

機能性よりも世界観を優先する。

参考イメージ

* 雑誌
* 旅のガイドブック
* コレクターズブック
* スタンプラリー
* トレーディングカード

---

### Visual Direction

キーワード

* Warm
* Craft
* Story
* Collection
* Discovery
* Vintage
* Handmade

色味

* Coffee Brown
* Cream
* Off White
* Dark Green
* Paper Texture

避けるもの

* IT企業っぽさ
* SaaS感
* 無機質なUI
* 過度なアニメーション

---

## Site Structure

### 1. Home Page

目的

世界観を伝える。

構成

#### Hero Section

キャッチコピー例

「マグカップで巡る、街の物語。」

サブコピー

Coffee Streetは、
個性あるコーヒー店の物語を
マグカップとカードに込めて繋ぐ
コレクションプロジェクトです。

CTA

* マグカップを見る
* 加盟店を見る

---

#### Concept Section

Coffee Streetとは何か

* ストーリーを集める
* マグカップを集める
* 店を巡る

という流れを説明

---

#### Featured Shops

加盟店を数件表示

---

#### Join Us Section

加盟店募集導線

---

### 2. Mug Collection Page

目的

マグカップを見て欲しくなる体験を作る。

一覧表示

カード形式

表示内容

* マグカップ画像
* 店舗名
* 地域
* ストーリー冒頭

ストーリーは全文を見せない。

最初の1〜2文のみ表示する。

詳細を読みたくなる構成にする。

---

### 3. Mug Detail Page

目的

マグカップを欲しくさせる。

構成

* 大きなマグカップ写真
* 店舗情報
* ストーリー冒頭
* ショップカード紹介

重要

ストーリー全文は掲載しない。

実店舗で入手できるショップカードの価値を残す。

「続きはカードで」

という導線を作る。

---

### 4. Store Map Page

目的

加盟店を探しやすくする。

機能

* 地図表示
* 店舗一覧
* エリア検索

店舗クリックで

店舗詳細ページへ遷移

詳細ページからも

マップへ戻れるようにする。

GoogleMapsなどを使ってアプリ感覚で見れるようにする。

---

### 5. Store Information Page

目的

加盟店募集

構成

#### Benefits

加盟すると

* サイト掲載
* SNS紹介
* コーヒーストリートブランド参加

などができる。

---

#### Flow

加盟までの流れ

1. 問い合わせ
2. 面談
3. ストーリー作成
4. 参加

---

#### Contact

問い合わせフォーム

またはメールリンク

---

## Technical Requirements

### Framework

Preferred

* Next.js
* TypeScript
* Tailwind CSS

---

### Responsive Design

必須

* Mobile First
* Tablet
* Desktop

---

### Accessibility

* Semantic HTML
* Keyboard Navigation
* Proper Contrast

---

### 注意事項
構造とデザインはファイルを分けてください。

## Content Guidelines

文章は商品説明ではなく物語として書く。

悪い例

「当店は創業20年です。」

良い例

「この街角に小さな焙煎機を置いた日から、
私たちの物語は始まりました。」

---

## Future Expansion

将来的に追加できるよう設計する。

候補

* コレクション管理
* 所持マグ登録
* スタンプラリー
* 加盟店ランキング
* イベント情報
* 会員機能

初期実装では不要。

拡張しやすい構造にする。

---

## Final Goal

このサイトの成功指標は

「コーヒーが飲みたい」

ではなく

「マグカップを集めたい」

と思わせること。

ユーザーが店舗の物語を辿り、
街全体を一つのコレクションとして楽しめる体験を作ること。


# デザイン案
デザイン案は以下Figmaのリンクを参考にしてください。
https://www.figma.com/make/W9z4mzOAKrYjcW9Uzn5P1F/Coffee-Street-Collection-App?t=Iz44Baoq2AYGWsBq-1