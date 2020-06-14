import React, { useRef, useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Canvas, useFrame } from 'react-three-fiber'
import 'styled-components/macro'

const scope = { Canvas, useFrame, useRef }

const box = `<boxGeometry attach="geometry" args={[1, 1, 1]} />`
const sphere = `<sphereGeometry attach="geometry" args={[1, 32, 16]} />`

const cone = ` <coneGeometry attach="geometry" args={[1, 3, 16]} />`
const dodecahedron = `<dodecahedronGeometry attach="geometry" args={[1, 0]} />`

const positions = [
  [-1, 0, 0],
  [1, 0, 0],
  [3, 0, 0]
]

console.log(positions[0])

const code = (activeGeometry, color, numberOfGeometry) => `
const Mesh = (props) => {
  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

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
    ${[...Array(numberOfGeometry).keys()].map((_, i) => `<Mesh position={[${positions[i]}]} />`)}
  </Canvas>
)

`

const Playground = () => {
  const [activeGeometry, setActiveGeometry] = useState(box)
  const [color, setColor] = useState('#ccc')
  const [numberOfGeometry, setNumberOfGeometry] = useState(1)
  return (
    <section
      css={`
        padding: 20px;
      `}>
      <h2>Try it yourself</h2>
      <p>
        I want to render a{' '}
        <select onChange={(e) => setActiveGeometry(e.target.value)}>
          <option value={box}>Box</option>
          <option value={sphere}>Sphere</option>
          <option value={cone}>Cone</option>
          <option value={dodecahedron}>Dodecahedron</option>
        </select>{' '}
        in a <input type="color" onChange={(e) => setColor(e.target.value)} value={color} /> color
      </p>
      I want to show <input type="number" value={numberOfGeometry} onChange={() => setNumberOfGeometry((a) => a + 1)}></input> geometry
      <LiveProvider scope={scope} noInline code={code(activeGeometry, color, numberOfGeometry)}>
        <div
          css={`
            display: grid;
            grid-template-columns: 1fr 1fr;

            @media screen and (max-width: 900px) {
              grid-template-columns: 1fr;
            }
          `}>
          <LiveEditor />
          <div
            css={`
              height: 100%;
              > div {
                height: 100%;
                min-height: 400px;
              }
            `}>
            <LiveError />
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
    </section>
  )
}

export default Playground
