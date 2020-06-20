import { graphql, useStaticQuery } from "gatsby";
import { resolveLink } from "@rocketseat/gatsby-theme-docs-core/util/url";

export function useSidebar() {
  const data = useStaticQuery(graphql`
    {
      allSidebarItems {
        edges {
          node {
            label
            link
            items {
              label
              link
              items {
                label
                link
              }
            }
            id
          }
        }
      }
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);

  const { basePath } = data.site.siteMetadata;

  const {
    allSidebarItems: { edges },
  } = data;

  if (basePath) {
    const normalizedSidebar = edges.map(
      ({ node: { label, link, items, id } }) => {
        if (Array.isArray(items)) {
          items = items.map((item) => {
            if (Array.isArray(item.items)) {
              const items = item.items.map((i) => ({
                label: i.label,
                link: resolveLink(i.link, basePath),
              }));

              return {
                label: item.label,
                link: resolveLink(item.link, basePath),
                items,
              };
            }
            return {
              label: item.label,
              link: resolveLink(item.link, basePath),
            };
          });
        }

        return {
          node: {
            id,
            label,
            items,
            link: resolveLink(link, basePath),
          },
        };
      }
    );

    return normalizedSidebar;
  }

  return edges;
}
