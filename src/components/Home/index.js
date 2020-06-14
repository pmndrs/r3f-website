import React from "react";
import Hero from "./Hero";
import Logo from "./logo";
import Playground from "./playground";
import styled from "styled-components/macro";

const Title = styled.div`
  background: black;
  position: absolute;
  color: white;
  font-size: 2.4em;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0.4em 0;
  padding: 20px;
  margin-bottom: 0;
  line-height: 0.9;
  bottom: 0;
  width: 40%;
  max-width: 300px;
  font-size: 55px;
  left: 50%;
  transform: translateX(-50%);

  span {
    font-size: 1rem;
    display: block;
    line-height: 1.2;
    margin-top: 20px;
    font-weight: normal;
  }
`;

export default function Home() {
  return (
    <>
      <div style={{ position: "relative", height: "100vh", padding: 20 }}>
        <header
          css={`
            position: absolute;
            top: 30px;
            z-index: 20000;
            left: 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: calc(100% - 40px);
          `}
        >
          <Logo width="54px" height="27px" />

          <nav>
            <ul
              css={`
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 20px;
                font-size: 24px;
                list-style: none;
                margin: 0;

                a {
                  color: white;
                }
              `}
            >
              <li>
                <a href="https://github.com/react-spring/react-three-fiber">
                  Github
                </a>
              </li>
              <li>
                <a href="/docs">Docs</a>
              </li>
            </ul>
          </nav>
        </header>
        <Hero />
        <Title>
          REACT THREE FIBER<span> is a react renderer for three.js</span>
        </Title>
      </div>
      <div
        css={`
          background: black;
          color: white;
        `}
      >
        <main
          css={`
            max-width: 90%;
            width: 1002px;
            margin: auto;
          `}
        >
          <Playground />
        </main>
      </div>
    </>
  );
}
