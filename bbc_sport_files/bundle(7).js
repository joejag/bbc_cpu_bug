Morph.versions["bbc-morph-gs-promo-summary@2.0.2"]={"bbc-morph-classnames":"1.0.2",react:"0.14.7"},function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){Morph.modules["bbc-morph-gs-promo-summary@2.0.2"]=r(1)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r(2),i=o(u),l=r(3),c=o(l),f=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=(0,c.default)("gs-c-promo-summary",this.props.typographyClass,this.props.summaryClasses);return i.default.createElement("p",{className:e},this.props.text)}}]),t}(i.default.Component);t.default=f,f.displayName="PromoSummary",f.propTypes={text:i.default.PropTypes.string.isRequired,summaryClasses:i.default.PropTypes.array,typographyClass:i.default.PropTypes.string},f.defaultProps={typographyClass:"gel-long-primer",summaryClasses:[]},e.exports=t.default},function(e,t){e.exports=React},function(e,t){e.exports=Morph.modules["bbc-morph-classnames@1.0.2"]}]);