"use client";
import e from"react";import{useTheme as r}from"./ThemeProvider.js";function t({children:t,href:n,className:s="",ref:l}){const{theme:m}=r();return e.createElement(m.componentTypes.Link,{className:`hover:underline ${m.link.className} ${s}`,href:n,ref:l,style:m.link.style},t)}export{t as default};
//# sourceMappingURL=Link.js.map
