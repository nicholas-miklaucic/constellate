// This file defines themes that control how Constellations look.
const themes = {
  // The default theme.
  default: {
    // React node added to the head of each document. Use this to import CSS, fonts, or whatever else you need.
    head: (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* <link rel="stylesheet" href="https:use.typekit.net/ush4rsn.css" /> { /\* test Typekit *\/} */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Fira+Code:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`@import url('/CascadiaCode.woff2'); @import url('/CascadiaCodeItalic.woff2');`}
        </style>
      </>
    ),
    site_title: "Constellate",
    site_logo: "/star.svg",
    global: {
      "#essay-title": {
        fontSize: "1.563rem",
        fontWeight: 700,
      },
    },
    // text_font: "'Source Serif Pro', serif",
    eui: {
      colors: {
        LIGHT: {
          primary: "#215DB0",
          accent: "#007067",
        },
        DARK: {
          primary: "#4C90F0",
          accent: "#13C9BA",
        },
      },
      font: {
        family: "'Source Sans 3`, sans-serif",
        familyCode: "'Cascadia Code', 'Fira Code', monospace",
      },
    },
  },

  rho: {
    head: (
      <>
        <link rel="stylesheet" href="https://use.typekit.net/rkc4ciw.css" />
      </>
    ),
    site_title: "Pollard's Rho",

    site_logo: "/pollardsrho.svg",
    global: {
      "#essay-title": {
        fontSize: "1.563rem",
        fontWeight: 700,
      },
    },
    eui: {
      colors: {
        LIGHT: {
          primary: "#634DBF",
          accent: "#7C327C",
        },
        DARK: {
          primary: "#9881F3",
          accent: "#BD6BBD",
        },
      },
      font: {
        family: "effra-cc, sans-serif",
        familyCode: "'Cascadia Code', monospace",
        featureSettings: "'liga' 1, 'kern' 1, 'pnum' 1",
      },
    },
  },
};

export default themes;
