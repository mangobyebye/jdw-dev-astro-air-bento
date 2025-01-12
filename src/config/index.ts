import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
  domain: "https://astro-air-bento.deven.tw",
  meta: {
    favicon: "/avatar.jpg",
    url: "https://blog.deven.tw",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [],
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: true,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const zh = {
  ...common,
  siteName: "霍洛",
  meta: {
    ...common.meta,
    title: "霍洛",
    slogan: "一位探索者",
    description: "藝術、科技、設計、旅行",
  },
  navigation: {
    ...common.navigation,
    custom: [],
  },
  pageMeta: {
    archive: {
      title: "歸檔",
      description: "霍洛的所有文章",
      ogImage: "/images/page-meta/zh/archive.png",
    },
    links: {
      title: "朋友們",
      description: "霍洛的朋友們",
      ogImage: "/images/page-meta/zh/links.png",
    },
    about: {
      title: "關於我",
      description: "霍洛的自我介紹",
      ogImage: "/images/page-meta/zh/about.png",
    },
  },
}

export const en = {
  ...common,
  siteName: "Holo",
  meta: {
    ...common.meta,
    title: "Holo",
    slogan: "An Explorer",
    description: "Art, Technology, Design, Traveling",
  },
  navigation: {
    ...common.navigation,
    custom: [],
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are Holo's all posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "My Friends",
      description: "Here are Holo's friends",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About Me",
      description: "Here is Holo's self-introduction",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
