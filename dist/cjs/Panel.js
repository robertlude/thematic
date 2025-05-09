"use client";
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("./ThemeProvider.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(e);exports.default=function({children:e,className:r="",ref:s}){const{theme:l}=t.useTheme();return a.default.createElement("div",{className:`${l.panel.className} ${r}`,ref:s,style:l.panel.style},e)};
//# sourceMappingURL=Panel.js.map
