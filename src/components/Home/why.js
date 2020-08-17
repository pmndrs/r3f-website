import React from "react";
import "styled-components/macro";

const Why = () => {
  return (
    <div
      css={`
        padding: 100px 0;
        grid-gap: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 100vh;

        @media screen and (max-width: 900px) {
          grid-template-columns: 1fr;
        }
      `}
    >
      <section>
        <h2>Why?</h2>
        <p>
          Building dynamic scene graphs declaratively with re-usable components
          makes dealing with Threejs easier and brings order and sanity to your
          codebase. These components react to state changes, are interactive out
          of the box and can tap into React's infinite ecosystem.
        </p>
      </section>
      <section>
        <h2>Does it have limitations?</h2>
        <p>
          None. Everything that works in Threejs will work here. In contrast to
          "bindings" where a library ships/maintains dozens of wrapper
          components, it just reconciles JSX to Threejs dynamically: &lt;mesh /&gt;
          simply is another expression for new THREE.Mesh(). It does not know or
          target a specific Threejs version nor does it need updates for
          modified, added or removed upstream features.
        </p>
      </section>
      <section>
        <h2>Is it slower than raw Threejs?</h2>
        <p>
          No. Rendering performance is up to Threejs and the GPU. Components may
          participate in the renderloop outside of React, without any additional
          overhead. React is otherwise very efficient in building and managing
          component-trees, it could potentially outperform manual/imperative
          apps at scale.
        </p>
      </section>
    </div>
  );
};

export default Why;
