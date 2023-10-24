export const apiUrls = {
  umami: {
    get: (id: string) => `https://sajjadshaikh.vercel.app/api/umami?id=${id}`,
  },
  darkspace: { get: "https://darkspace.vercel.app/api/fetch/stats" },
};
