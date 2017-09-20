// ==UserScript==
// @name                            ZSH Documentation Enhancer
// @version                         0.1
// @description                     Make ZSH Documentation more readable
// @require                         http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js
// @resource highlight_CSS          http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css
// @resource bootstrap_darkly_CSS   https://bootswatch.com/darkly/bootstrap.min.css
// @author                          rjf89
// @match                           http://zsh.sourceforge.net/Doc/*
// @grant                           GM_addStyle
// @grant                           GM_getResourceText
// ==/UserScript==

const STYLE_TWEAKS = `dd { border-width: thin; border-style: groove; margin: 0em 1em 1em 1em; }
dt > tt { margin: 0em 1em 1em 1em; color: chartreuse; }
dt > var { color: khaki; }
dd > p { margin: 1em 1em 1em 1em; }`;

(function() {
  "use strict";
  GM_addStyle(GM_getResourceText("highlight_CSS"));
  GM_addStyle(GM_getResourceText("bootstrap_darkly_CSS"));
  GM_addStyle(STYLE_TWEAKS);
  Array.from(document.getElementsByTagName("pre")).forEach(pre => {
    pre.innerHTML = '<code class="bash">' + pre.innerText + "</code>";
    hljs.highlightBlock(pre);
  });
})();