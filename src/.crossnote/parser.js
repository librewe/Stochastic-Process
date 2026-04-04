({
  // Please visit the URL below for more information:
  // https://shd101wyy.github.io/markdown-preview-enhanced/#/extend-parser

  onWillParseMarkdown: async function(markdown) {
    return markdown.replace(/:::\s*spoiler\s+\*{0,2}([^\*\n]+)\*{0,2}([\s\S]*?)\s*:::/g, ($0, $1, $2) => {
        return `<details><summary><b>${$1}</b></summary>${$2}</details>`;
    });
  },

  onDidParseMarkdown: async function(html) {
    return html;
  },
})