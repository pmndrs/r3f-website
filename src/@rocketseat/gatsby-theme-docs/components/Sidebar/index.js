import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useSidebar } from "./useSidebar";

import {
  Container,
  LogoContainer,
  List,
  Heading,
  Item,
  SubItem,
} from "./styles";
import { isExternalUrl } from "@rocketseat/gatsby-theme-docs/src/util/url";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";
import Logo from "../Logo";

function ListWithSubItems({ children, text, deep }) {
  console.log(deep);
  return (
    <>
      <Heading
        css={
          deep
            ? `
              color: inherit;  
              margin-top: 0;
              `
            : null
        }
      >
        {text}
      </Heading>
      <SubItem
        css={
          deep
            ? `
              margin-bottom: 0;
              `
            : null
        }
      >
        {children}
      </SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  const {
    site: {
      siteMetadata: { footer, basePath },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          footer
          basePath
        }
      }
    }
  `);

  const data = useSidebar();

  function renderLink(link, label) {
    return isExternalUrl(link) ? (
      <ExternalLink link={link} label={label} />
    ) : (
      <InternalLink link={link} label={label} />
    );
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LogoContainer>
        <Link to={basePath}>
          <Logo />
        </Link>
      </LogoContainer>
      <nav>
        <List>
          {data.map(({ node: { label, link, items, id } }) => {
            if (Array.isArray(items)) {
              const subitems = items.map((item) => {
                if (Array.isArray(item.items)) {
                  return (
                    <ListWithSubItems deep key={id} text={item.label}>
                      {item.items.map((item) => (
                        <Item
                          css={`
                            padding-left: 45px;
                          `}
                          key={item.link}
                        >
                          {renderLink(item.link, item.label)}
                        </Item>
                      ))}
                    </ListWithSubItems>
                  );
                }
                return (
                  <Item key={item.link}>
                    {renderLink(item.link, item.label)}
                  </Item>
                );
              });

              return (
                <ListWithSubItems key={id} text={label}>
                  {subitems}
                </ListWithSubItems>
              );
            }

            return <Item key={id}>{renderLink(link, label)}</Item>;
          })}
        </List>
      </nav>
      <footer>
        <p>{footer}</p>
      </footer>
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
