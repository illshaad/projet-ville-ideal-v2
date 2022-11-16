module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/authentification",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};
