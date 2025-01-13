import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "johnny mai",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        // Using material theme builder w/ default source color of:( #769CDF)
        lightMode: {
          light: "#f9f9ff", // page background (surface)
          lightgray: "#e2e2e9", // borders + search box bg (surface container highest)
          gray: "#ffffff", // graph links + heavier borders 
          darkgray: "#191c20", // body text (on surface)
          dark: "#191c20", // header text + icons (on surface)
          secondary: "#415f91", // link color + current graph node (primary on light palette)
          tertiary: "#769cdf", // hover states + visited graph node (primary)
          highlight: "#ededf4", // internal link background (surface container)
          textHighlight: "#565f71", // markdown highlighted text background (?? secondary)
        },
        darkMode: {
          light: "#111318", // page background (surface)
          lightgray: "#33353a", // borders + search box bg (surface container highest)
          gray: "#ffffff", // graph links + heavier borders (??? unused)
          darkgray: "#e2e2e9", // body text (on surface)
          dark: "#e2e2e9", // header text + icons (on surface)
          secondary: "#769cdf", // link color + current graph node (primary)
          tertiary: "#aac7ff", // hover states + visited graph node (primary on dark palette)
          highlight: "#1d2024", // internal link background (surface container)
          textHighlight: "#bec6dc", // markdown highlighted text background (?? secondary)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", openLinksInNewTab: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
