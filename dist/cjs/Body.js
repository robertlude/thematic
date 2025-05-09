"use client";
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("./ThemeProvider.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=r(e);exports.default=function({children:e,className:r="",ref:a}){const{theme:u}=t.useTheme();return s.default.createElement("body",{className:`${u.body.className} ${r}`,style:u.body.style,ref:a},e)};
//# sourceMappingURL=Body.js.map
