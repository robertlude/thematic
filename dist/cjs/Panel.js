"use client";
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("./ThemeProvider.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e);exports.default=function({children:e,className:t="",ref:u}){const{theme:n}=r.useTheme();return a.default.createElement("div",{className:`${n.panel} ${t}`,ref:u},e)};
//# sourceMappingURL=Panel.js.map
