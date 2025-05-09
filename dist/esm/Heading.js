"use client";
import e from"react";import{useTheme as r}from"./ThemeProvider.js";function t({children:t,className:o="",level:n=1,ref:m}){const{theme:s}=r();if("number"!=typeof n)throw new Error("Level must be a number");if(n<1||n>6)throw new Error("Level must be between 1 and 6");if(Math.floor(n)!==n)throw new Error("Level must be an integer");const a=`h${n}`;return e.createElement(a,{className:`${s[a].className} ${o}`,style:s[a].style,ref:m},t)}export{t as default};
//# sourceMappingURL=Heading.js.map
