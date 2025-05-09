"use client";
import e from"react";import{useTheme as t}from"./ThemeProvider.js";function r({children:r,className:o="",onClick:n,ref:s}){const{theme:c}=t();return e.createElement("button",{className:`cursor-pointer ${c.button.className} ${o}`,onClick:n,ref:s,style:c.button.style},r)}export{r as default};
//# sourceMappingURL=Button.js.map
