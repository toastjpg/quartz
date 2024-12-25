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
        lightMode: {
          light: "#f9f9f7", // page background
          lightgray: "#e2e3e0", // borders + search box bg
          gray: "#414844", // graph links + heavier borders 
          darkgray: "#1a1c1b", // body text
          dark: "#1a1c1b", // header text + icons
          secondary: "#416655", // link color + current graph node
          tertiary: "#416655", // hover states + visited graph node
          highlight: "#e2e3e0", // internal link background
          textHighlight: "#505f7b", // markdown highlighted text background
        },
        darkMode: {
          light: "#1a1a1b", // page background
          lightgray: "#393639", // borders + search box bg
          gray: "#646464", // graph links + heavier borders 
          darkgray: "#e2e3e0", // body text
          dark: "#e2e3e0", // header text + icons
          secondary: "#769d8a", // link color + current graph node
          tertiary: "#769d8a", // hover states + visited graph node
          highlight: "#393639", // internal link background
          textHighlight: "#b3aa0288", // markdown highlighted text background
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
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
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
