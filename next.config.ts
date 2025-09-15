import type { NextConfig } from "next";

const compiler = () => {
  const config = {
    styledComponents: true,
  }
  if(process.env.NODE_ENV === 'production') {
    const configProd = {
      // 本番環境ではReact Testing Libraryで使用するdata-testid属性を削除
      reactRemoveProperties: { properties: ['^data-custom$'] },
    }
    Object.assign(config, configProd)
  }
  return config
}

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: compiler(),
};

export default nextConfig;
