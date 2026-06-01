// ─────────────────────────────────────────────
// Coffee Street — コンテンツ定義ファイル
// デザイン・ロジックとは分離して文章をここで管理する
// ─────────────────────────────────────────────

export const siteConfig = {
  name: "Coffee Street",
  tagline: "マグカップで巡る、街の物語。",
  description:
    "Coffee Streetは、個性あるコーヒー店の物語をマグカップとカードに込めて繋ぐコレクションプロジェクトです。",
  email: "info@coffeestreet.jp",
  instagram: "coffee_storreet",
};

export const nav = {
  mugs: "マグカップ",
  concept: "コンセプト",
  stores: "加盟店",
  join: "加盟店募集",
};

// ── Home ──────────────────────────────────────

export const homeContent = {
  hero: {
    heading: "マグカップで巡る、\n街の物語。",
    body: "Coffee Streetは、\n個性あるコーヒー店の物語を\nマグカップとカードに込めて繋ぐ\nコレクションプロジェクトです。",
    ctaPrimary: "マグカップを見る",
    ctaSecondary: "コンセプトを知る",
  },
  stats: [
    { label: "加盟店" },
    { label: "マグカップ" },
    { label: "ストーリー" },
  ],
  concept: {
    heading: "Coffee Street とは",
    subheading:
      "コーヒーを飲むためではなく、\nマグカップとストーリーを集めるための旅。",
    items: [
      {
        title: "ストーリーを集める",
        body: "各店舗には、オーナーの想いや、器が生まれた背景があります。ストーリーカードに記された物語は、店舗でしか手に入りません。",
      },
      {
        title: "マグカップを集める",
        body: "加盟店オリジナルのマグカップは、それぞれが一点もの。作家やオーナーの想いが形になった、コレクションアイテムです。",
      },
      {
        title: "店を巡る",
        body: "マグカップとカードを集めるために、街を巡る。その過程で出会う、新しい場所と人々が、あなたの日常を豊かにします。",
      },
    ],
    quote: {
      heading:
        "「コーヒーを飲みたい」ではなく、\n「このマグカップが欲しい」と思う体験。",
      body: "Coffee Streetは、コレクション欲求を通じて\n街の物語と人々を繋ぐプロジェクトです。",
    },
  },
  featuredMugs: {
    heading: "マグカップコレクション",
    body: "それぞれのマグカップには、店主と作家の物語が込められています。\n気になるマグカップを見つけて、実際に店舗を訪れてみませんか。",
    cta: "すべてのマグカップを見る",
    cardCta: "続きはカードで",
  },
  joinUs: {
    heading: "加盟店募集",
    body: "Coffee Streetの一員として、\nあなたの店舗の物語を多くの人に届けませんか。",
    benefits: [
      { title: "サイト掲載", desc: "Coffee Street 公式サイトでの店舗紹介" },
      { title: "SNS 紹介", desc: "公式 SNS アカウントでの定期的な情報発信" },
      {
        title: "コレクター来店",
        desc: "マグカップとカードを求める新規顧客の獲得",
      },
      {
        title: "ブランディング支援",
        desc: "店舗の物語を魅力的に伝える制作サポート",
      },
    ],
    flow: [
      { num: "1", title: "お問い合わせ", desc: "下記フォームよりご連絡ください" },
      { num: "2", title: "面談", desc: "応募の想いや背景をお伺いします" },
      { num: "3", title: "ストーリー作成", desc: "店舗の物語をカードと Web に" },
      { num: "4", title: "参加", desc: "Coffee Street の一員として掲載開始" },
    ],
    cta: "加盟についてお問い合わせ",
  },
};

// ── Mugs ──────────────────────────────────────

export const mugsContent = {
  heading: "マグカップコレクション",
  body: "それぞれのマグカップには、店主と作家の物語が込められています。\n気になるマグカップを見つけて、実際に店舗を訪れてみませんか。",
  cardCta: "続きはカードで",
};

// ── Mug Detail ────────────────────────────────

export const mugDetailContent = {
  backLink: "← マグカップ一覧へ",
  cardTeaser: {
    heading: "続きはカードで",
    body: "このマグカップの物語の全文は、実店舗で入手できるストーリーカードに記されています。ぜひ店舗を訪れて、直接受け取ってください。",
  },
  shopInfoLabel: "店舗情報",
  mapLink: "マップで確認する",
};

// ── Map ───────────────────────────────────────

export const mapContent = {
  heading: "加盟店マップ",
  body: "Coffee Street 加盟店を地図と一覧で探せます。気になる店舗を選んでみてください。",
  listLabel: "加盟店一覧",
  mugLink: "マグを見る",
};

// ── Join ──────────────────────────────────────

export const joinContent = {
  hero: {
    heading: "加盟店募集",
    body: "Coffee Street の一員として、\nあなたの店舗の物語を多くの人に届けませんか。",
  },
  benefits: {
    heading: "加盟のメリット",
    items: [
      { title: "サイト掲載", desc: "Coffee Street 公式サイトでの店舗紹介" },
      { title: "SNS 紹介", desc: "公式 SNS アカウントでの定期的な情報発信" },
      {
        title: "コレクター来店",
        desc: "マグカップとカードを求める新規顧客の獲得",
      },
      {
        title: "ブランディング支援",
        desc: "店舗の物語を魅力的に伝える制作サポート",
      },
    ],
  },
  flow: {
    heading: "加盟の流れ",
    steps: [
      {
        num: "1",
        title: "お問い合わせ",
        desc: "下記フォームよりご連絡ください",
      },
      { num: "2", title: "面談", desc: "応募の想いや背景をお伺いします" },
      { num: "3", title: "ストーリー作成", desc: "店舗の物語をカードと Web に" },
      {
        num: "4",
        title: "参加",
        desc: "Coffee Street の一員として掲載開始",
      },
    ],
  },
  form: {
    heading: "加盟についてお問い合わせ",
    fields: {
      shopName: { label: "店舗名", placeholder: "珈琲工房 〇〇" },
      contactName: { label: "ご担当者名", placeholder: "山田 太郎" },
      email: { label: "メールアドレス", placeholder: "hello@example.com" },
      address: { label: "店舗の所在地", placeholder: "東京都渋谷区〇〇" },
      message: {
        label: "お問い合わせ内容",
        placeholder: "店舗の紹介や、気になる点などをご記入ください。",
      },
    },
    submit: "送信する",
    required: "*",
  },
};

// ── Footer ────────────────────────────────────

export const footerContent = {
  tagline: "マグカップで巡る、街の物語。",
  description:
    "個性あるコーヒー店の物語をマグカップとカードに込めて繋ぐコレクションプロジェクト。",
  pagesLabel: "Pages",
  links: [
    { label: "マグカップ", href: "/mugs" },
    { label: "加盟店マップ", href: "/map" },
    { label: "加盟店募集", href: "/join" },
  ],
  copyright: `© ${new Date().getFullYear()} Coffee Street. All rights reserved.`,
};
