({
  katexConfig: {
  "globalGroup": true,
  "throwOnError": false,
  // "displayMode": true,
  "macros": {
    },
  },
  
  mathjaxConfig: {
  "tex": {
    "inlineMath": [["$", "$"], ["\\(", "\\)"]],
    "displayMath": [["$$", "$$"], ["\\[", "\\]"]],
    packages: {'[+]': ["ams","amsmath","amssymb"]},
    },
  "options": {linebreaks: { automatic: true }},
  "loader": {}
  },
  
  mermaidConfig: {
  "startOnLoad": false
  },

})