"use client";
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("./ThemeProvider.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);exports.default=function({children:e,href:t,className:s="",ref:l}){const{theme:a}=r.useTheme();return n.default.createElement(a.componentTypes.Link,{className:`hover:underline ${a.link.className} ${s}`,href:t,ref:l,style:a.link.style},e)};
//# sourceMappingURL=Link.js.map
