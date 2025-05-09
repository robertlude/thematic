"use client";
import e from"react";import{useTheme as t}from"./ThemeProvider.js";function o({children:o,className:r="",onClick:n}){const{theme:s}=t();return e.createElement("button",{className:`${s.button.className} ${r}`,onClick:n,style:s.button.style},o)}export{o as default};
//# sourceMappingURL=Button.js.map
