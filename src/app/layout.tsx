'use client';
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./globals.css";

const theme = createTheme({
  cssVariables: true,
  experimental_modularCssLayers: true,
})

function jsStylesToCss(stylesArray) {
  const mergedStyles = Object.assign({}, ...stylesArray);

  function processStyles(styleObj, selector = '') {
    let css = '';

    const baseProps = {};
    const nestedSelectors = {};

    for (const key in styleObj) {
      if (typeof styleObj[key] === 'object') {
        nestedSelectors[key] = styleObj[key];
      } else {
        baseProps[key] = styleObj[key];
      }
    }

    if (Object.keys(baseProps).length > 0 && selector) {
      css += `${selector} {\n`;
      css += Object.entries(baseProps)
        .map(([prop, val]) => {
          const kebab = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
          const unitless = ['zIndex', 'lineHeight', 'opacity', 'flex', 'fontWeight'];
          const value = typeof val === 'number' && !unitless.includes(prop)
            ? `${val}px`
            : val;
          return `  ${kebab}: ${value};`;
        })
        .join('\n');
      css += `\n}\n`;
    }

    for (const nested in nestedSelectors) {
      const newSelector = 
        nested.startsWith('@') 
          ? nested 
          : nested.startsWith('&') && selector
            ? selector + nested.slice(1)
            : selector 
              ? `${selector} ${nested}`
              : nested;

      css += processStyles(nestedSelectors[nested], newSelector);
    }

    return css;
  }

  return processStyles(mergedStyles).trim();
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style id="CSS-variables">
          {/* @ts-ignore */}
          {jsStylesToCss(theme.generateStyleSheets())}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
