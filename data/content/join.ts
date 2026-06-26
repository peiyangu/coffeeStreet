// homeContent.joinUs からも参照するため、先にデータを定義する
const JOIN_BENEFITS = [
  { title: "サイト掲載", desc: "Coffee Street 公式サイトでの店舗紹介" },
  { title: "SNS 紹介", desc: "公式 SNS アカウントでの定期的な情報発信" },
  { title: "コレクター来店", desc: "マグカップとカードを求める新規顧客の獲得" },
  { title: "ブランディング支援", desc: "店舗の物語を魅力的に伝える制作サポート" },
];

const JOIN_FLOW = [
  { num: "1", title: "お問い合わせ", desc: "下記フォームよりご連絡ください" },
  { num: "2", title: "面談", desc: "応募の想いや背景をお伺いします" },
  { num: "3", title: "ストーリー作成", desc: "店舗の物語をカードと Web に" },
  { num: "4", title: "参加", desc: "Coffee Street の一員として掲載開始" },
];

export const joinContent = {
  hero: {
    heading: "加盟店募集",
    body: "Coffee Street の一員として、\nあなたの店舗の物語を多くの人に届けませんか。",
  },
  benefits: {
    heading: "加盟のメリット",
    items: JOIN_BENEFITS,
  },
  flow: {
    heading: "加盟の流れ",
    steps: JOIN_FLOW,
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
