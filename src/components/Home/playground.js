import React, { useRef, useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Canvas, useFrame } from "react-three-fiber";
import "styled-components/macro";
import { ChromePicker } from "react-color";
import useClickOutside from "./../useOutsideClick";
import nightOwl from "prism-react-renderer/themes/nightOwl";

const scope = { Canvas, useFrame, useRef };

const box = `<boxGeometry attach="geometry" args={[0.6, 0.6, 0.6]} />`;
const sphere = `<sphereGeometry attach="geometry" args={[0.6, 32, 16]} />`;

const cone = ` <coneGeometry attach="geometry" args={[0.6, 1.5, 16]} />`;
const dodecahedron = `<dodecahedronGeometry attach="geometry" args={[0.6, 0]} />`;
const positions = [
  [-2, 0, 0],
  [0, 0, 0],
  [2, 0, 0],
  [-2, 2, 0],
  [0, 2, 0],
  [2, 2, 0],
  [-2, -2, 0],
  [0, -2, 0],
  [2, -2, 0],
];

const code = (activeGeometry, color, numberOfGeometry) => `
const Mesh = (props) => {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={mesh}>
      ${activeGeometry}
      <meshStandardMaterial attach="material" color="${color}" />
    </mesh>
  )
}

render(
  <Canvas colorManagement>
    <pointLight position={[10, 10, 10]} />
    ${[...Array(parseInt(numberOfGeometry, 10)).keys()]
      .map((_, i) => `<Mesh position={[${positions[i]}]} /> \n  `)
      .join("  ")}
  </Canvas>
)

`;

const Playground = () => {
  const [activeGeometry, setActiveGeometry] = useState(box);
  const [color, setColor] = useState("#ccc");
  const [numberOfGeometry, setNumberOfGeometry] = useState(1);
  const [picker, showPicker] = useState(false);
  const pickerButton = useRef();
  useClickOutside(pickerButton, () => showPicker(false));
  return (
    <section
      css={`
        padding: 60px 0;
      `}
    >
      <h2>Try it yourself</h2>
      <p
        css={`
          position: relative;
          display: flex;
          align-items: center;
        `}
      >
        I want to render a{" "}
        <select
          css={`
            margin: 0 5px;
          `}
          onChange={(e) => setActiveGeometry(e.target.value)}
        >
          <option value={box}>Box</option>
          <option value={sphere}>Sphere</option>
          <option value={cone}>Cone</option>
          <option value={dodecahedron}>Dodecahedron</option>
        </select>{" "}
        in a{" "}
        <span
          ref={pickerButton}
          css={`
            display: inherit;
          `}
        >
          <button
            aria-label="Show color picker"
            onClick={() => showPicker((s) => !s)}
            css={`
              width: 23px;
              height: 23px;
              margin: 0 5px;
              background: ${color};
              border: 1px solid #ffffff;
            `}
          />
          {picker && (
            <ChromePicker
              css={`
                position: absolute;
                top: 40px;
                z-index: 99;
                left: 180px;
              `}
              color={color}
              onChange={(color) => setColor(color.hex)}
            />
          )}{" "}
        </span>
        color
      </p>
      I want to show{" "}
      <input
        aria-label="How many geometry to show"
        type="number"
        max="6"
        min="1"
        value={numberOfGeometry}
        onChange={(e) => setNumberOfGeometry(e.target.value)}
      ></input>{" "}
      geometry
      <LiveProvider
        theme={nightOwl}
        scope={scope}
        noInline
        code={code(activeGeometry, color, numberOfGeometry)}
      >
        <div
          css={`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 40px;

            @media screen and (max-width: 900px) {
              grid-template-columns: 1fr;
            }
          `}
        >
          <LiveEditor
            css={`
              margin-top: 40px;
            `}
          />
          <div
            css={`
              height: 100%;
              > div {
                height: 100%;
                min-height: 400px;
              }
            `}
          >
            <LiveError />
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
    </section>
  );
};

export default Playground;
