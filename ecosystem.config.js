module.exports = {
  apps: [
    {
      name: "ui",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_ENV: "prod",
      },
      env_production: {
        NODE_ENV: "production",
        NEXT_PUBLIC_ENV: "prod",
      },
    },
  ],
};
