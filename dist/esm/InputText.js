"use client";
import e from"react";import{useTheme as t}from"./ThemeProvider.js";function a({className:a="",onChange:s,ref:r,rows:n=1,value:l=""}){const{theme:m}=t();return n>1?e.createElement("textarea",{className:`${m.input.text.className} ${a}`,onChange:s,ref:r,rows:n,style:m.input.text.style,value:l}):e.createElement("input",{className:`${m.input.text.className} ${a}`,onChange:s,ref:r,style:m.input.text.style,value:l})}export{a as default};
//# sourceMappingURL=InputText.js.map
