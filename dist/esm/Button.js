"use client";
import e from"react";import{useTheme as t}from"./ThemeProvider.js";function r({children:r,onClick:o,className:n="",ref:s}){const{theme:c}=t();return e.createElement("button",{className:`cursor-pointer ${c.button.className} ${n}`,onClick:o,ref:s,style:c.button.style},r)}export{r as default};
//# sourceMappingURL=Button.js.map
