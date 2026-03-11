({
  katexConfig: {
  "globalGroup": true,
  "throwOnError": false,
  "macros": {
      "\\*": "\\mathbf{#1}",
      "\\+": "\\mathcal{#1}",
      "\\-": "\\mathrm{#1}",
      "\\^": "\\mathbb{#1}",
      "\\!": "\\mathtt{#1}",
      "\\bb": "\\mathbb{#1}",
      "\\@": "\\mathscr{#1}",
      "\\norm": "\\left\\Vert#1\\right\\Vert",
      "\\abs": "\\left\\vert#1\\right\\vert",
      "\\set": "\\left\\{#1\\right\\}",
      "\\tuple": "\\left(#1\\right)",
      "\\eps": "\\varepsilon",
      "\\inner": "\\langle #1,#2\\rangle",
      "\\tp": "\\tuple",
      "\\cmid": "\\,:\\,",
      "\\numP": "\\#\\mathbf{P}",
      "\\P": "\\mathbf{P}",
      "\\defeq": ":=",
      "\\d": "\\,\\-d",
      "\\ol": "\\overline",
      "\\Var": "\\mathbf{Var}_{#1}\\left[#2\\right]",
      "\\Pr": "\\mathbb{P}_{#1}\\left[#2\\right]",
      "\\E": "\\mathbf{E}_{#1}\\left[#2\\right]",
      "\\emptyset": "\\varnothing",
      "\\dd": "\\,\\mathrm{d}#1",
      "\\dv": "\\frac{\\mathrm{d}^{#1}#2}{\\mathrm{d}#3^{#1}}",
      "\\pdv": "\\frac{\\partial^{#1}#2}{\\partial#3^{#1}}",
      "\\argmin": "\\mathop{\\arg\\min}",
      "\\argmax": "\\mathop{\\arg\\max}",
      "\\wh": "\\widehat",
      "\\D": "\\!{deg}",
    },
  },
  
  mathjaxConfig: {
  "tex": {},
  "options": {},
  "loader": {}
  },
  
  mermaidConfig: {
  "startOnLoad": false
  },

})