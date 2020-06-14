const path = require(`path`);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const home = path.resolve(`src/pages/docs.js`);

  createPage({
    // Path for this page — required
    path: `/docs`,
    component: home,
  });
};
