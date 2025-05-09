"use client";
import e from"react";import{useTheme as t}from"./ThemeProvider.js";function a({children:a,className:r="",onChange:s,ref:n,rows:l=1,value:m=""}){const{theme:o}=t();return l>1?e.createElement("textarea",{className:`${o.input.text.className} ${r}`,onChange:s,ref:n,rows:l,style:o.input.text.style,value:m}):e.createElement("input",{className:`${o.input.text.className} ${r}`,onChange:s,ref:n,style:o.input.text.style,value:m})}export{a as default};
//# sourceMappingURL=InputText.js.map
