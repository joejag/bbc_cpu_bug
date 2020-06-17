Morph.versions["bbc-morph-gs-timestamp@2.2.5"]={"bbc-morph-classnames":"1.0.2",react:"0.14.7"},function(e){function t(a){if(r[a])return r[a].exports;var s=r[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){Morph.modules["bbc-morph-gs-timestamp@2.2.5"]=r(1)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=r(2),i=a(l),u=r(3),c=a(u),f=function(e){function t(){return s(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"renderIcon",value:function(){var e=(0,c.default)("gs-o-bullet__icon","gel-icon",this.props.iconClasses);return this.props.includeIcon?i.default.createElement("span",{className:e},i.default.createElement("svg",{focusable:"false",viewBox:"0 0 32 32"},i.default.createElement("polygon",{points:"17,15.4 17,6 15,6 15,16.6 23.8,21.7 24.8,19.9"}),i.default.createElement("path",{d:"M16,4c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12S4,22.6,4,16C4,9.4,9.4,4,16,4 M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C32,7.2,24.8,0,16,0L16,0z"}))):null}},{key:"render",value:function(){var e=(0,c.default)("gs-c-timestamp","gs-o-bullet","gs-o-bullet-",this.props.className,this.props.timestampClasses),t=(0,c.default)("gs-o-bullet__text",this.props.typographyClasses,"qa-status-date","gs-u-align-middle","gs-u-display-inline"),r={className:t,dateTime:this.props.dateTime,"data-seconds":this.props.unixTimestamp,"data-datetime":this.props.onScreenDateTime};return i.default.createElement("span",{className:e},this.renderIcon(),i.default.createElement("time",r,i.default.createElement("span",{"aria-hidden":"true",className:"qa-status-date-output"},this.props.onScreenDateTime),i.default.createElement("span",{className:"gs-u-vh"},this.props.offScreenDateTime)))}}]),t}(i.default.Component);t.default=f,f.displayName="Timestamp",f.propTypes={className:i.default.PropTypes.array,dateTime:i.default.PropTypes.string,unixTimestamp:i.default.PropTypes.string,includeIcon:i.default.PropTypes.bool,iconClasses:i.default.PropTypes.array,onScreenDateTime:i.default.PropTypes.string.isRequired,offScreenDateTime:i.default.PropTypes.string.isRequired,typographyClasses:i.default.PropTypes.array,timestampClasses:i.default.PropTypes.array},f.defaultProps={includeIcon:!0},e.exports=t.default},function(e,t){e.exports=React},function(e,t){e.exports=Morph.modules["bbc-morph-classnames@1.0.2"]}]);