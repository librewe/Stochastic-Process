({
  onWillParseMarkdown: async function(markdown) {
    // :::spoiler 处理
    markdown = markdown.replace(/:::\s*spoiler\s+\*{0,2}([^\*\n]+)\*{0,2}([\s\S]*?)\s*:::/g, ($0, $1, $2) => {
        const summary = $1.replace(/^\*{1,2}(.*)\*{1,2}$/, '$1');
        // 手动处理内容中的加粗
        const content = $2.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return `<details><summary><b>${summary}</b></summary>${content}</details>`;
    });

    // :::info 处理
    markdown = markdown.replace(/:::\s*info\s*\n([\s\S]*?)\n\s*:::/g, ($0, $1) => {
        // 手动处理加粗
        const content = $1.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return `<div class="alert alert-info">${content}</div>`;
    });

    // :::success 处理
    markdown = markdown.replace(/:::\s*success\s*\n([\s\S]*?)\n\s*:::/g, ($0, $1) => {
        const content = $1.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return `<div class="alert alert-success">${content}</div>`;
    });

    return markdown;
  },

  onDidParseMarkdown: async function(html) {
    return html;
  },
})