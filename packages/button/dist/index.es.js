import*as r from"react";import{styled as e}from"@zeerna-ui/theme";import{forwardRef as o}from"@zeerna-ui/utils";import{useButtonType as t}from"@zeerna-ui/hooks";var n=function(){return n=Object.assign||function(r){for(var e,o=1,t=arguments.length;o<t;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},n.apply(this,arguments)};var a=e("button",{padding:"$small2 $medium3",borderRadius:"$medium",fontWeight:"$bold",cursor:"pointer",transition:"all ease 0.2s",variants:{variationType:{primary:{backgroundColor:"$accent9",color:"$accent12",border:"1px solid transparent","&:hover":{backgroundColor:"$accent8"}},secondary:{backgroundColor:"transparent",border:"1px solid $accent9",color:"$accent9","&:hover":{backgroundColor:"$accent4"}},rounded:{borderRadius:"$circle",backgroundColor:"$accent9",color:"$accent12",border:"1px solid transparent",padding:"$small2 $medium1","&:hover":{backgroundColor:"$accent8"}},ghost:{backgroundColor:"transparent",border:"1px solid transparent",color:"$accent9","&:hover":{backgroundColor:"$accent4"}}}}}),c=o((function(e,o){var c=e.type,l=e.variationType,p=void 0===l?"primary":l,d=e.children,u=e.as,s=function(r,e){var o={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(r);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(r,t[n])&&(o[t[n]]=r[t[n]])}return o}(e,["type","variationType","children","as"]),m={children:d},b=t(u);b.ref;var y=b.type;return r.createElement(a,n({ref:o,variationType:p,as:u,type:null!=c?c:y},s),r.createElement(i,n({},m)))})),i=function(e){var o=e.children;return r.createElement(r.Fragment,null,o)};export{c as Button};
