import React from "react";
import { Link } from "gatsby";

import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO";
import Markdown from "react-markdown";

const source = `
# Introduction

A complete and awesome Gatsby Theme for documentation websites.

Forget about other things and focus on what matters: **writing .**

## Features

- 📝 MDX for docs;
- 🛣 Yaml-based sidebar navigation;
- 📱 Responsive and mobile friendly;
- 🖥 Code highlighting with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) and [react-live](https://github.com/FormidableLabs/react-live) support;
- 🥇 SEO (Sitemap, schema.org data, Open Graph and Twitter tags).
- 📈 Google Analytics support;
- 📄 Custom docs schema;
- ⚡️ Offline Support & WebApp Manifest;
- and much more 🔥

<br />

[Get started now!](/getting-started)

`;

export default function NotFound() {
  return (
    <Layout>
      <SEO />
      <Markdown source={source} />
    </Layout>
  );
}
