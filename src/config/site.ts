export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Darkspace",
  description: "Dive and Experience the power of decentralization and never worry about your stuff being lost or snooped.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  url: "https://darkspacev2.vercel.app/",
  domain: "darkspacev2.vercel.app",
  mail: "samaralishaikh212@gmail.com",
  ogImage: "https://darkspacev2.vercel.app/opengraph-image.jpg",
  links: {
    twitter: "https://twitter.com/sajjads72619701",
    github: "https://github.com/Darkrove/darkspacev2",
  },
};

const SITE_DOMAIN = siteConfig.domain;

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${SITE_DOMAIN}`
    : "http://localhost:3000";