export const defaultLanguage: string = "en"

export const common = {
  domain: "https://astro-air-bento.deven.tw",
  meta: {
    favicon: "/avatar.jpg",
    url: "https://blog.deven.tw",
  },
  googleAnalyticsId: "",
  social: [
    // {
    //   icon: Twitter,
    //   label: "X",
    //   link: "https://x.com/",
    // },
    // {
    //   icon: Github,
    //   label: "GitHub",
    //   link: "https://github.com/",
    // },
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

export const en = {
  ...common,
  siteName: "jdw.dev",
  meta: {
    ...common.meta,
    title: "jdw.dev",
    slogan: "Software Engineer",
    description: "Software, Technology, Cooking",
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
