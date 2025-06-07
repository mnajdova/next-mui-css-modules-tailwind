This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The idea of the project

This project shows how we could implement Material UI components using CSS modules and use Tailwind CSS to customize them. It uses the Slider component as a benchmark.
In order for people to completely remove Emotion, they need to configure their next.js config to contain the following:

``` next.config.ts
const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-noop",
    }
    return config
  },
};
```

This config tells next.js to use the Plain CSS styled engine isntead of the default Emotion one. The second config is specifying the order of the CSS layers:

```diff global.css
+ @layer base, mui-components, components, utilities;
```

That's everything, now developers can use Tailwind CSS to override Mateiral UI components that use CSS modules as a styling strategy.