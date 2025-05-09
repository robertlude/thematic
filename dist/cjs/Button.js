"use client";
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("./ThemeProvider.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=r(e);exports.default=function({children:e,className:r="",onClick:n,ref:o}){const{theme:s}=t.useTheme();return u.default.createElement("button",{className:`cursor-pointer ${s.button.className} ${r}`,onClick:n,ref:o,style:s.button.style},e)};
//# sourceMappingURL=Button.js.map
