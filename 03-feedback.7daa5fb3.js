!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,p=function(){return d.Date.now()};function g(e,t,n){var i,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(h,t),s?g(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?y(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?g(e):(i=o=void 0,a)}function T(){var e=p(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(h,t),g(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=S(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};var j="feedback-form-state",O={},h=document.querySelector(".feedback-form"),w=document.querySelector('[type="email"]'),T=document.querySelector('[name="message"]'),x=document.querySelector('[type="submit"]');!function(){var e=localStorage.getItem(j),t=JSON.parse(e);w.value?w.value=t.email:T.value&&(T.value=t.message)}(),h.addEventListener("input",e(t)((function(e){e.preventDefault(),O.email=h.elements.email.value,O.message=h.elements.message.value,localStorage.setItem(j,JSON.stringify(O))}),500)),x.addEventListener("reset",(function(e){localStorage.removeItem(j)}))}();
//# sourceMappingURL=03-feedback.7daa5fb3.js.map
