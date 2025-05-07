"use client";
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("./ThemeProvider.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=r(e);exports.default=function({children:e,className:r=""}){const{theme:a}=t.useTheme();return u.default.createElement("body",{className:`${a.body} ${r}`},e)};
//# sourceMappingURL=Body.js.map
