"use client";
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("./Theme.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=r(e);const a=e.createContext({theme:new t.default({name:"",key:""})});exports.default=({children:e,theme:t})=>u.default.createElement(a.Provider,{value:{theme:t}},e),exports.useTheme=()=>e.useContext(a);
//# sourceMappingURL=ThemeProvider.js.map
