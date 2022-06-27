export const PATHS = {
  feed: "/",
  register: "/auth/register",
  login: "/auth/login",
  profile(userName: string = ":username") {
    return `/profiles/${userName}`;
  },

  article(slug: string = ":slug") {
    return `/article/${slug}`;
  },
};
