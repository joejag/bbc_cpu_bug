Morph.versions["bbc-morph-gs-promo-image@8.0.1"]={"bbc-morph-classnames":"1.0.2","bbc-morph-image-chef-url-transformer":"2.1.0","bbc-morph-responsive-image-srcset":"3.0.1","bbc-morph-ws-typography-info":"1.0.6","morph-require":"5.2.1","prop-types":"15.7.2","react":"0.14.7"};
!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=9)}([function(e,r,t){e.exports=t(7)()},function(e,r){e.exports=React},function(e,r){e.exports=Morph.modules["bbc-morph-classnames@1.0.2"]},function(e,r){e.exports=Morph.modules["bbc-morph-responsive-image-srcset@3.0.1"]},function(e,r){e.exports=Morph.modules["bbc-morph-image-chef-url-transformer@2.1.0"]},function(e,r){e.exports=Morph.modules["bbc-morph-ws-typography-info@1.0.6"]},function(e,r){e.exports={transitive:function(e,r){return Morph.requireTransitiveWithCaller("bbc-morph-gs-promo-image@8.0.1",e,r)},selfTransitive:function(e,r){return Morph.requireTransitiveWithCaller("bbc-morph-gs-promo-image@8.0.1",e,r,!0)},transitiveThenUpdate:function(e,r){return Morph.requireTransitiveWithCallerThenUpdate("bbc-morph-gs-promo-image@8.0.1",e,r)},selfTransitiveThenUpdate:function(e,r){return Morph.requireTransitiveWithCallerThenUpdate("bbc-morph-gs-promo-image@8.0.1",e,r,!0)}}},function(e,r,t){"use strict";var n=t(8);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},function(e,r,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),i=t(0),a=t.n(i),s=t(3),c=t.n(s),p=t(4),u=t.n(p),l=t(2),f=t.n(l),m=t(5),y=t.n(m),g=t(6),h=t.n(g);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function v(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,r){return!r||"object"!==b(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,r){return(P=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var _=function(e){function r(){return d(this,r),T(this,O(r).apply(this,arguments))}var t,n,i;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&P(e,r)}(r,e),t=r,(n=[{key:"componentWillMount",value:function(){var e=this.props.serviceName,r=y.a.getDirectionality(e);h.a.selfTransitiveThenUpdate(r.toLowerCase(),this)}},{key:"imageProps",value:function(e,r){var t=this.props,n=t.chefSizes,o=t.ichefRecipe,i=t.product,a=t.ichefExcludeType,s=t.alt,c=t.width,p=t.sizes,l=t.delayed;return o||r?{src:r||u.a.transform(o,i,a),alt:s,width:c,chefSizes:n,sizes:p,className:f()(e),delayed:l}:{}}},{key:"render",value:function(){var e=this.props,r=e.className,t=e.image,n=e.imgClassName,i=e.imageOnly,a=e.imageSibling,s=e.children,p=e.responsiveImageRatio,u=e.responsiveImageClasses,l=this.imageProps(n,t),m=o.a.createElement(c.a,l);if(i)return m;var y=f()("gs-c-promo-image",r),g=f()("gs-o-responsive-image",p,u);return o.a.createElement("div",{className:y},o.a.createElement("div",{className:"gs-o-media-island"},o.a.createElement("div",{className:g},m,a),s))}}])&&v(t.prototype,n),i&&v(t,i),r}(o.a.Component);_.displayName="PromoImage",_.propTypes={alt:a.a.string,chefSizes:a.a.arrayOf(a.a.number),children:a.a.node,className:a.a.arrayOf(a.a.string),delayed:a.a.oneOfType([o.a.PropTypes.bool,o.a.PropTypes.string]),ichefRecipe:a.a.string,image:a.a.string,imgClassName:a.a.oneOfType([o.a.PropTypes.arrayOf(o.a.PropTypes.string),o.a.PropTypes.string]),imageOnly:a.a.bool,product:a.a.string,responsiveImageRatio:a.a.string,responsiveImageClasses:a.a.string,imageSibling:a.a.node,sizes:a.a.string,ichefExcludeType:a.a.bool,width:a.a.number,serviceName:a.a.string},_.defaultProps={alt:"",chefSizes:[240,320,480,624,800],children:null,className:[],delayed:!1,ichefRecipe:null,image:null,imgClassName:[],product:null,responsiveImageClasses:null,imageSibling:null,sizes:null,width:null,serviceName:null,ichefExcludeType:!1,imageOnly:!1,responsiveImageRatio:"gs-o-responsive-image--16by9"},Morph.modules["bbc-morph-gs-promo-image@8.0.1"]=_}]);
//# sourceMappingURL=bundle.js.map