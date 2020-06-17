import React from "react";
import { Link } from "gatsby";

import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO";
import Markdown from "react-markdown";

const source = `
# React Three Fiber

React Three Fiber is a React reconciler for Threejs on the web and react-native.

## Why?
Building dynamic scene graphs declaratively with re-usable components makes dealing with Threejs easier and brings order and sanity to your codebase. These components react to state changes, are interactive out of the box and can tap into React's infinite ecosystem.

## Does it have limitations?
None. Everything that works in Threejs will work here. In contrast to "bindings" where a library ships/maintains dozens of wrapper components, it just reconciles JSX to Threejs dynamically: <mesh /> simply is another expression for new THREE.Mesh(). It does not know or target a specific Threejs version nor does it need updates for modified, added or removed upstream features.

## Is it slower than raw Threejs?
No. Rendering performance is up to Threejs and the GPU. Components may participate in the renderloop outside of React, without any additional overhead. React is otherwise very efficient in building and managing component-trees, it could potentially outperform manual/imperative apps at scale.

[Get started now!](/getting-started)
`;

export default function DocsHome() {
  return (
    <Layout>
      <SEO />
      <Markdown source={source} />
    </Layout>
  );
}
