"use client";
import e from"react";import{useTheme as r}from"./ThemeProvider.js";function t({children:t,className:o="",level:n=1}){const{theme:m}=r();if("number"!=typeof n)throw new Error("Level must be a number");if(n<1||n>6)throw new Error("Level must be between 1 and 6");if(Math.floor(n)!==n)throw new Error("Level must be an integer");const s=`h${n}`;return e.createElement(s,{className:`${m[s].className} ${o}`,style:m[s].style},t)}export{t as default};
//# sourceMappingURL=Heading.js.map
