import { joinContent } from "./join";

export const homeContent = {
  hero: {
    heading: "マグカップで巡る、\n街の物語。",
    body: "Coffee Streetは、\n個性あるコーヒー店の物語を\nマグカップとカードに込めて繋ぐ\nコレクションプロジェクトです。",
    ctaPrimary: "マグカップを見る",
    ctaSecondary: "コンセプトを知る",
  },
  stats: [
    { label: "加盟店", dataKey: "shops" as const },
    { label: "マグカップ", dataKey: "mugs" as const },
    { label: "ストーリー", dataKey: "mugs" as const },
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
    benefits: joinContent.benefits.items,
    flow: joinContent.flow.steps,
    cta: "加盟についてお問い合わせ",
  },
};
