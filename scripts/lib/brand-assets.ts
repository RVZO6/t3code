export const BRAND_ASSET_PATHS = {
  productionMacIconPng: "assets/devfork/white-macos-1024.png",
  productionLinuxIconPng: "assets/devfork/white-universal-1024.png",
  productionWindowsIconIco: "assets/devfork/t3-white-windows.ico",
  productionWebFaviconIco: "assets/devfork/t3-white-web-favicon.ico",
  productionWebFavicon16Png: "assets/devfork/t3-white-web-favicon-16x16.png",
  productionWebFavicon32Png: "assets/devfork/t3-white-web-favicon-32x32.png",
  productionWebAppleTouchIconPng: "assets/devfork/t3-white-web-apple-touch-180.png",
  developmentWindowsIconIco: "assets/devfork/t3-white-windows.ico",
  developmentWebFaviconIco: "assets/devfork/t3-white-web-favicon.ico",
  developmentWebFavicon16Png: "assets/devfork/t3-white-web-favicon-16x16.png",
  developmentWebFavicon32Png: "assets/devfork/t3-white-web-favicon-32x32.png",
  developmentWebAppleTouchIconPng: "assets/devfork/t3-white-web-apple-touch-180.png",
} as const;

export interface IconOverride {
  readonly sourceRelativePath: string;
  readonly targetRelativePath: string;
}

export const DEVELOPMENT_ICON_OVERRIDES: ReadonlyArray<IconOverride> = [
  {
    sourceRelativePath: BRAND_ASSET_PATHS.developmentWebFaviconIco,
    targetRelativePath: "dist/client/favicon.ico",
  },
  {
    sourceRelativePath: BRAND_ASSET_PATHS.developmentWebFavicon16Png,
    targetRelativePath: "dist/client/favicon-16x16.png",
  },
  {
    sourceRelativePath: BRAND_ASSET_PATHS.developmentWebFavicon32Png,
    targetRelativePath: "dist/client/favicon-32x32.png",
  },
  {
    sourceRelativePath: BRAND_ASSET_PATHS.developmentWebAppleTouchIconPng,
    targetRelativePath: "dist/client/apple-touch-icon.png",
  },
];

export const PUBLISH_ICON_OVERRIDES: ReadonlyArray<IconOverride> = [
  {
    sourceRelativePath: BRAND_ASSET_PATHS.productionWebFaviconIco,
    targetRelativePath: "dist/client/favicon.ico",
  },
  {
    sourceRelativePath: BRAND_ASSET_PATHS.productionWebFavicon16Png,
    targetRelativePath: "dist/client/favicon-16x16.png",
  },
  {
    sourceRelativePath: BRAND_ASSET_PATHS.productionWebFavicon32Png,
    targetRelativePath: "dist/client/favicon-32x32.png",
  },
  {
    sourceRelativePath: BRAND_ASSET_PATHS.productionWebAppleTouchIconPng,
    targetRelativePath: "dist/client/apple-touch-icon.png",
  },
];
