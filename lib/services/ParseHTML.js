const { JSDOM } = require('jsdom');

module.exports = async function parseHTML(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const elements = document.querySelectorAll('.card-container');
  console.log(elements.textContent);
  return [...elements].map((product) => ({
    title: product.querySelector('div').getAttribute('.card-listing'),
    hours: product.querySelector('div').getAttribute('.card-content')
      .textContent,
  }));
};
