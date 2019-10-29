(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Profile"],{4526:function(t,e,r){},"59ca":function(t,e,r){"use strict";function n(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}var o=n(r("c23d"));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.exports=o},a792:function(t,e,r){"use strict";var n=r("fc2d"),o=r.n(n);o.a},abfd:function(t,e,r){"use strict";r.r(e),r.d(e,"LogLevel",function(){return n}),r.d(e,"Logger",function(){return s}),r.d(e,"setLogLevel",function(){return u});
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n,o=[];(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(n||(n={}));var i=n.INFO,a=function(t,e){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];if(!(e<t.logLevel)){var i=(new Date).toISOString();switch(e){case n.DEBUG:console.log.apply(console,["["+i+"]  "+t.name+":"].concat(r));break;case n.VERBOSE:console.log.apply(console,["["+i+"]  "+t.name+":"].concat(r));break;case n.INFO:console.info.apply(console,["["+i+"]  "+t.name+":"].concat(r));break;case n.WARN:console.warn.apply(console,["["+i+"]  "+t.name+":"].concat(r));break;case n.ERROR:console.error.apply(console,["["+i+"]  "+t.name+":"].concat(r));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}}},s=function(){function t(t){this.name=t,this._logLevel=i,this._logHandler=a,o.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in n))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!0,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,n.DEBUG].concat(t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,n.VERBOSE].concat(t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,n.INFO].concat(t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,n.WARN].concat(t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,n.ERROR].concat(t))},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(t){o.forEach(function(e){e.logLevel=t})}},c23d:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r("df41"),i=r("cd51"),a=r("abfd"),s=(n={},n["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",n["bad-app-name"]="Illegal App name: '{$appName}",n["duplicate-app"]="Firebase App named '{$appName}' already exists",n["app-deleted"]="Firebase App named '{$appName}' already deleted",n["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",n),u=new i.ErrorFactory("app","Firebase",s),c="[DEFAULT]",l=function(){function t(t,e,r){var n=this;this.firebase_=r,this.isDeleted_=!1,this.services_={},this.tokenListeners_=[],this.analyticsEventRequests_=[],this.name_=e.name,this.automaticDataCollectionEnabled_=e.automaticDataCollectionEnabled||!1,this.options_=i.deepCopy(t);var o=this;this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(t){n.tokenListeners_.push(t),setTimeout(function(){return t(null)},0)},removeAuthTokenListener:function(t){n.tokenListeners_=n.tokenListeners_.filter(function(e){return e!==t})},analytics:{logEvent:function(){o.analyticsEventRequests_.push(arguments)}}}}return Object.defineProperty(t.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(t){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),t.prototype.delete=function(){var t=this;return new Promise(function(e){t.checkDestroyed_(),e()}).then(function(){t.firebase_.INTERNAL.removeApp(t.name_);for(var e=[],r=0,n=Object.keys(t.services_);r<n.length;r++)for(var o=n[r],i=0,a=Object.keys(t.services_[o]);i<a.length;i++){var s=a[i];e.push(t.services_[o][s])}return Promise.all(e.filter(function(t){return"INTERNAL"in t}).map(function(t){return t.INTERNAL.delete()}))}).then(function(){t.isDeleted_=!0,t.services_={}})},t.prototype._getService=function(t,e){if(void 0===e&&(e=c),this.checkDestroyed_(),this.services_[t]||(this.services_[t]={}),!this.services_[t][e]){var r=e!==c?e:void 0,n=this.firebase_.INTERNAL.factories[t](this,this.extendApp.bind(this),r);this.services_[t][e]=n}return this.services_[t][e]},t.prototype._removeServiceInstance=function(t,e){void 0===e&&(e=c),this.services_[t]&&this.services_[t][e]&&delete this.services_[t][e]},t.prototype.extendApp=function(t){if(i.deepExtend(this,t),t.INTERNAL){if(t.INTERNAL.addAuthTokenListener){for(var e=0,r=this.tokenListeners_;e<r.length;e++){var n=r[e];this.INTERNAL.addAuthTokenListener(n)}this.tokenListeners_=[]}if(t.INTERNAL.analytics){for(var o=0,a=this.analyticsEventRequests_;o<a.length;o++){var s=a[o];this.INTERNAL.analytics.logEvent.apply(void 0,s)}this.analyticsEventRequests_=[]}}},t.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw u.create("app-deleted",{appName:this.name_})},t}();l.prototype.name&&l.prototype.options||l.prototype.delete||console.log("dc");var p="7.0.0",f=new a.Logger("@firebase/app");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(t){var e={},r={},n={},o={__esModule:!0,initializeApp:l,app:s,apps:null,SDK_VERSION:p,INTERNAL:{registerService:d,removeApp:a,factories:r,useAsService:_}};function a(t){var r=e[t];v(r,"delete"),delete e[t]}function s(t){if(t=t||c,!i.contains(e,t))throw u.create("no-app",{appName:t});return e[t]}function l(r,n){if(void 0===n&&(n={}),"object"!==typeof n||null===n){var a=n;n={name:a}}var s=n;void 0===s.name&&(s.name=c);var l=s.name;if("string"!==typeof l||!l)throw u.create("bad-app-name",{appName:String(l)});if(i.contains(e,l))throw u.create("duplicate-app",{appName:l});var p=new t(r,s,o);return e[l]=p,v(p,"create"),p}function h(){return Object.keys(e).map(function(t){return e[t]})}function d(e,a,c,l,p){if(void 0===p&&(p=!1),r[e])return f.debug("There were multiple attempts to register service "+e+"."),o[e];function d(t){if(void 0===t&&(t=s()),"function"!==typeof t[e])throw u.create("invalid-app-argument",{appName:e});return t[e]()}return r[e]=a,l&&(n[e]=l,h().forEach(function(t){l("create",t)})),void 0!==c&&i.deepExtend(d,c),o[e]=d,t.prototype[e]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=this._getService.bind(this,e);return n.apply(this,p?t:[])},d}function v(t,e){for(var o=0,i=Object.keys(r);o<i.length;o++){var a=i[o],s=_(t,a);if(null===s)return;n[s]&&n[s](e,t)}}function _(t,e){if("serverAuth"===e)return null;var r=e;return r}return o["default"]=o,Object.defineProperty(o,"apps",{get:h}),s["App"]=t,o}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){var t=h(l);function e(e){i.deepExtend(t,e)}return t.INTERNAL=o.__assign({},t.INTERNAL,{createFirebaseNamespace:d,extendNamespace:e,createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend}),t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(i.isBrowser()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var v=self.firebase.SDK_VERSION;v&&v.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var _=d(),m=_.initializeApp;_.initializeApp=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return i.isNode()&&f.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),m.apply(void 0,t)};var b=_;e.default=b,e.firebase=b},c437:function(t,e,r){"use strict";var n=r("4526"),o=r.n(n);o.a},c66d:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile container-fluid db-border"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-2-sm"},[r("figure",{staticClass:"snip1515"},[r("div",{staticClass:"profile-image"},[r("img",{staticClass:"card-img-top rounded-circle m-auto img-fluid",attrs:{src:t.profile.picture}})]),r("figcaption",[r("h2",{staticClass:"displayRole"},[t._v(t._s(t.user.name))]),"Admin"==t.user.role?r("i",{staticClass:"ra ra-shield ra-2x ml-1"}):t._e(),"Athlete"==t.user.role?r("i",{staticClass:"ra ra-muscle-fat ra-2x ml-1"}):t._e(),"Judge"==t.user.role?r("i",{staticClass:"ra ra-gavel ra-2x ml-1"}):t._e(),r("h3",[r("b",[t._v("Nickname:")]),t._v("\n            "+t._s(t.profile.nickname)+"\n          ")]),r("h6",[r("b",[t._v("Class:")]),t._v("\n            "+t._s(t.profile.class)+"\n          ")]),r("h6",[r("b",[t._v("Location:")]),t._v("\n            "+t._s(t.profile.location)+"\n          ")]),t._m(0),r("h6",[t._v(t._s(t.profile.bio))]),r("h6",[r("b",[t._v("Phone #:")]),t._v("\n            "+t._s(t.profile.phone)+"\n          ")]),t._m(1)])])]),r("EditProfileModal"),r("PR",{staticClass:"col"}),r("history",{staticClass:"col-2"})],1)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",[r("b",[t._v("Bio:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"icons"},[r("button",{staticClass:"btn btn-warning m-2",attrs:{"data-toggle":"modal","data-target":"#Edit-Profile-Modal"}},[r("i",{staticClass:"fas fa-edit fa-sm"}),t._v("\n              Edit\n            ")])])}],i=r("8a79"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal",attrs:{id:"Edit-Profile-Modal",tabindex:"-1",role:"dialog"}},[t.profile._id?r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(0),r("div",{staticClass:"modal-body"},[r("form",[t.newEdit.picture?r("img",{attrs:{src:t.newEdit.picture,height:"100",alt:""}}):t._e(),r("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.upload}})]),r("form",{on:{submit:function(e){e.preventDefault(),t.editProfile()}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"nickname"}},[t._v("Nickname:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.nickname,expression:"newEdit.nickname"}],staticClass:"form-control",attrs:{type:"text",id:"nickname",placeholder:"Enter Nickname"},domProps:{value:t.newEdit.nickname},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"nickname",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"picture"}},[t._v("Profile Picture:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.picture,expression:"newEdit.picture"}],staticClass:"form-control",attrs:{type:"text",id:"picture",placeholder:"Enter Profile Picture URL"},domProps:{value:t.newEdit.picture},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"picture",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"bio"}},[t._v("Profile Bio:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.bio,expression:"newEdit.bio"}],staticClass:"form-control",attrs:{type:"text",id:"bio",placeholder:"Enter Profile Bio"},domProps:{value:t.newEdit.bio},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"bio",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"location"}},[t._v("Location:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.location,expression:"newEdit.location"}],staticClass:"form-control",attrs:{type:"text",id:"location",placeholder:"Enter Location"},domProps:{value:t.newEdit.location},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"location",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone"}},[t._v("Phone Number:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.phone,expression:"newEdit.phone"}],staticClass:"form-control",attrs:{type:"number",id:"phone",placeholder:"Enter in Telephone Number"},domProps:{value:t.newEdit.phone},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"phone",e.target.value)}}})]),r("div",{staticClass:"input-group mb-3"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.class,expression:"newEdit.class"}],staticClass:"custom-select",attrs:{id:"inputGroupSelect02"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.newEdit,"class",e.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:""}},[t._v("Choose...")]),r("option",{attrs:{value:"Pros"}},[t._v("Pros")]),r("option",{attrs:{value:"A"}},[t._v("A")]),r("option",{attrs:{value:"B"}},[t._v("B")]),r("option",{attrs:{value:"C"}},[t._v("C")]),r("option",{attrs:{value:"Master 40-49"}},[t._v("Master 40-49")]),r("option",{attrs:{value:"Master 50-59"}},[t._v("Master 50-59")]),r("option",{attrs:{value:"Master 60+"}},[t._v("Master 60+")]),r("option",{attrs:{value:"Women's Open"}},[t._v("Women's Open")]),r("option",{attrs:{value:"Women's Master"}},[t._v("Women's Master")]),r("option",{attrs:{value:"Women's Pro"}},[t._v("Women's Pro")]),r("option",{attrs:{value:"Lightweight"}},[t._v("Lightweight")])]),t._m(1)]),r("div",{staticClass:"modal-footer"},[r("div",{staticClass:"form-group d-flex align-item-center"},[r("hr"),r("input",{staticClass:"btn btn-danger mt-3",attrs:{type:"button",value:"Reset Password"},on:{click:t.resetPassword}}),r("hr")]),t.profile._id?r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")]):t._e()])])]),t._m(2)])]):t._e(),t.profile._id?t._e():r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(3),r("div",{staticClass:"modal-body"},[r("form",[t.newEdit.picture?r("img",{attrs:{src:t.newEdit.picture,height:"100",alt:""}}):t._e(),r("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.upload}})]),r("form",{on:{submit:function(e){e.preventDefault(),t.createProfile()}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"nickname"}},[t._v("Nickname:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.nickname,expression:"newEdit.nickname"}],staticClass:"form-control",attrs:{type:"text",id:"nickname",placeholder:"Enter Nickname"},domProps:{value:t.newEdit.nickname},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"nickname",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"picture"}},[t._v("Profile Picture:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.picture,expression:"newEdit.picture"}],staticClass:"form-control",attrs:{type:"text",id:"picture",placeholder:"Enter Profile Picture URL"},domProps:{value:t.newEdit.picture},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"picture",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"bio"}},[t._v("Profile Bio:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.bio,expression:"newEdit.bio"}],staticClass:"form-control",attrs:{type:"text",id:"bio",placeholder:"Enter Profile Bio"},domProps:{value:t.newEdit.bio},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"bio",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"location"}},[t._v("Location:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.location,expression:"newEdit.location"}],staticClass:"form-control",attrs:{type:"text",id:"location",placeholder:"Enter Location"},domProps:{value:t.newEdit.location},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"location",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone"}},[t._v("Phone Number:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.phone,expression:"newEdit.phone"}],staticClass:"form-control",attrs:{type:"number",id:"phone",placeholder:"Enter in Telephone Number"},domProps:{value:t.newEdit.phone},on:{input:function(e){e.target.composing||t.$set(t.newEdit,"phone",e.target.value)}}})]),r("div",{staticClass:"input-group mb-3"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.newEdit.class,expression:"newEdit.class"}],staticClass:"custom-select",attrs:{id:"inputGroupSelect02"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.newEdit,"class",e.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:""}},[t._v("Choose...")]),r("option",{attrs:{value:"Pros"}},[t._v("Pros")]),r("option",{attrs:{value:"A"}},[t._v("A")]),r("option",{attrs:{value:"B"}},[t._v("B")]),r("option",{attrs:{value:"C"}},[t._v("C")]),r("option",{attrs:{value:"Master 40-49"}},[t._v("Master 40-49")]),r("option",{attrs:{value:"Master 50-59"}},[t._v("Master 50-59")]),r("option",{attrs:{value:"Master 60+"}},[t._v("Master 60+")]),r("option",{attrs:{value:"Women's Open"}},[t._v("Women's Open")]),r("option",{attrs:{value:"Women's Master"}},[t._v("Women's Master")]),r("option",{attrs:{value:"Women's Pro"}},[t._v("Women's Pro")]),r("option",{attrs:{value:"Lightweight"}},[t._v("Lightweight")])]),t._m(4)]),r("button",{staticClass:"btn btn-primary"},[t._v("Create Profile")])])]),t._m(5)])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header"},[r("div",{staticClass:"modal-title"},[r("h1",[t._v("\n            Edit Your Profile\n            "),r("button",{staticClass:"btn btn-outline-danger xButton",attrs:{"data-dismiss":"modal"}},[t._v("x")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group-append"},[r("label",{staticClass:"input-group-text",attrs:{for:"inputGroupSelect02"}},[t._v("Classes")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-outline-danger float-right",attrs:{id:"close",type:"button","data-dismiss":"modal"}},[t._v("Cancel")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header"},[r("div",{staticClass:"modal-title"},[r("h1",[t._v("\n            Edit Your Profile\n            "),r("button",{staticClass:"btn btn-outline-danger xButton",attrs:{"data-dismiss":"modal"}},[t._v("x")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group-append"},[r("label",{staticClass:"input-group-text",attrs:{for:"inputGroupSelect02"}},[t._v("Classes")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-outline-danger",attrs:{id:"close",type:"button","data-dismiss":"modal"}},[t._v("Cancel")])])}],u=r("59ca"),c=r.n(u),l=r("c23d"),p=r.n(l);function f(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{u(n.next(t))}catch(e){i(e)}}function s(t){try{u(n["throw"](t))}catch(e){i(e)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,s)}u((n=n.apply(t,e||[])).next())})}function h(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return u([t,e])}}function u(i){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(o=2&i[0]?n["return"]:i[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var d="firebasestorage.googleapis.com",v="storageBucket",_=12e4,m=6e4,b=-9007199254740991,y=function(){function t(t,e){this.code_=w(t),this.message_="Firebase Storage: "+e,this.serverResponse_=null,this.name_="FirebaseError"}return t.prototype.codeProp=function(){return this.code},t.prototype.codeEquals=function(t){return w(t)===this.codeProp()},t.prototype.serverResponseProp=function(){return this.serverResponse_},t.prototype.setServerResponseProp=function(t){this.serverResponse_=t},Object.defineProperty(t.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),t}(),g={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function w(t){return"storage/"+t}function E(){var t="An unknown error occurred, please check the error payload for server response.";return new y(g.UNKNOWN,t)}function R(t){return new y(g.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function O(t){return new y(g.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function A(){var t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new y(g.UNAUTHENTICATED,t)}function C(t){return new y(g.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function N(){return new y(g.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function S(){return new y(g.CANCELED,"User canceled the upload/download.")}function T(t){return new y(g.INVALID_URL,"Invalid URL '"+t+"'.")}function k(t){return new y(g.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function P(){return new y(g.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+v+"' property when initializing the app?")}function x(){return new y(g.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function U(){return new y(g.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function I(){return new y(g.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function L(t,e,r){return new y(g.INVALID_ARGUMENT,"Invalid argument in `"+e+"` at index "+t+": "+r)}function D(t,e,r,n){var o,i;return t===e?(o=t,i=1===t?"argument":"arguments"):(o="between "+t+" and "+e,i="arguments"),new y(g.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+r+"`: Expected "+o+" "+i+", received "+n+".")}function j(){return new y(g.APP_DELETED,"The Firebase app was deleted.")}function M(t){return new y(g.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function B(t,e){return new y(g.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function W(t){throw new y(g.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function G(t){switch(t){case F.RAW:case F.BASE64:case F.BASE64URL:case F.DATA_URL:return;default:throw"Expected one of the event types: ["+F.RAW+", "+F.BASE64+", "+F.BASE64URL+", "+F.DATA_URL+"]."}}var H=function(){function t(t,e){this.data=t,this.contentType=e||null}return t}();function z(t,e){switch(t){case F.RAW:return new H(q(e));case F.BASE64:case F.BASE64URL:return new H(X(t,e));case F.DATA_URL:return new H(J(e),Z(e));default:}throw E()}function q(t){for(var e=[],r=0;r<t.length;r++){var n=t.charCodeAt(r);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|63&n);else if(55296===(64512&n)){var o=r<t.length-1&&56320===(64512&t.charCodeAt(r+1));if(o){var i=n,a=t.charCodeAt(++r);n=65536|(1023&i)<<10|1023&a,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else e.push(239,191,189)}else 56320===(64512&n)?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(e)}function V(t){var e;try{e=decodeURIComponent(t)}catch(r){throw B(F.DATA_URL,"Malformed data URL.")}return q(e)}function X(t,e){switch(t){case F.BASE64:var r=-1!==e.indexOf("-"),n=-1!==e.indexOf("_");if(r||n){var o=r?"-":"_";throw B(t,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case F.BASE64URL:var i=-1!==e.indexOf("+"),a=-1!==e.indexOf("/");if(i||a){o=i?"+":"/";throw B(t,"Invalid character '"+o+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break;default:}var s;try{s=atob(e)}catch(l){throw B(t,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var K=function(){function t(t){this.base64=!1,this.contentType=null;var e=t.match(/^data:([^,]+)?,/);if(null===e)throw B(F.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=e[1]||null;null!=r&&(this.base64=Y(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=t.substring(t.indexOf(",")+1)}return t}();function J(t){var e=new K(t);return e.base64?X(F.BASE64,e.rest):V(e.rest)}function Z(t){var e=new K(t);return e.contentType}function Y(t,e){var r=t.length>=e.length;return!!r&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q,tt={STATE_CHANGED:"state_changed"},et={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},rt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function nt(t){switch(t){case et.RUNNING:case et.PAUSING:case et.CANCELING:return rt.RUNNING;case et.PAUSED:return rt.PAUSED;case et.SUCCESS:return rt.SUCCESS;case et.CANCELED:return rt.CANCELED;case et.ERROR:return rt.ERROR;default:return rt.ERROR}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return null!=t}function it(t){return void 0!==t}function at(t){return"function"===typeof t}function st(t){return"object"===typeof t}function ut(t){return st(t)&&null!==t}function ct(t){return st(t)&&!Array.isArray(t)}function lt(t){return"string"===typeof t||t instanceof String}function pt(t){return ft(t)&&Number.isInteger(t)}function ft(t){return"number"===typeof t||t instanceof Number}function ht(t){return dt()&&t instanceof Blob}function dt(){return"undefined"!==typeof Blob}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(Q||(Q={}));
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vt=function(){function t(){var t=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Q.NO_ERROR,this.sendPromise_=new Promise(function(e){t.xhr_.addEventListener("abort",function(){t.errorCode_=Q.ABORT,e(t)}),t.xhr_.addEventListener("error",function(){t.errorCode_=Q.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(){e(t)})})}return t.prototype.send=function(t,e,r,n){if(this.sent_)throw W("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),ot(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return ot(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},t.prototype.getErrorCode=function(){if(!this.sent_)throw W("cannot .getErrorCode() before sending");return this.errorCode_},t.prototype.getStatus=function(){if(!this.sent_)throw W("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}},t.prototype.getResponseText=function(){if(!this.sent_)throw W("cannot .getResponseText() before sending");return this.xhr_.responseText},t.prototype.abort=function(){this.xhr_.abort()},t.prototype.getResponseHeader=function(t){return this.xhr_.getResponseHeader(t)},t.prototype.addUploadProgressListener=function(t){ot(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",t)},t.prototype.removeUploadProgressListener=function(t){ot(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",t)},t}(),_t=function(){function t(){}return t.prototype.createXhrIo=function(){return new vt},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function bt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=mt();if(void 0!==r){for(var n=new r,o=0;o<t.length;o++)n.append(t[o]);return n.getBlob()}if(dt())return new Blob(t);throw Error("This browser doesn't seem to support creating Blobs")}function yt(t,e,r){return t.webkitSlice?t.webkitSlice(e,r):t.mozSlice?t.mozSlice(e,r):t.slice?t.slice(e,r):null}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt=function(){function t(t,e){var r=0,n="";ht(t)?(this.data_=t,r=t.size,n=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=n}return t.prototype.size=function(){return this.size_},t.prototype.type=function(){return this.type_},t.prototype.slice=function(e,r){if(ht(this.data_)){var n=this.data_,o=yt(n,e,r);return null===o?null:new t(o)}var i=new Uint8Array(this.data_.buffer,e,r-e);return new t(i,!0)},t.getBlob=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(dt()){var n=e.map(function(e){return e instanceof t?e.data_:e});return new t(bt.apply(null,n))}var o=e.map(function(t){return lt(t)?z(F.RAW,t).data:t.data_}),i=0;o.forEach(function(t){i+=t.byteLength});var a=new Uint8Array(i),s=0;return o.forEach(function(t){for(var e=0;e<t.length;e++)a[s++]=t[e]}),new t(a,!0)},t.prototype.uploadData=function(){return this.data_},t}(),wt=function(){function t(t,e){this.bucket=t,this.path_=e}return Object.defineProperty(t.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),t.prototype.fullServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)},t.prototype.bucketOnlyServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"},t.makeFromBucketSpec=function(e){var r;try{r=t.makeFromUrl(e)}catch(n){return new t(e,"")}if(""===r.path)return r;throw k(e)},t.makeFromUrl=function(e){var r=null,n="([A-Za-z0-9.\\-_]+)";function o(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}var i="(/(.*))?$",a="(/([^?#]*).*)?$",s=new RegExp("^gs://"+n+i,"i"),u={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}for(var l="v[A-Za-z0-9_]+",p=d.replace(/[.]/g,"\\."),f=new RegExp("^https?://"+p+"/"+l+"/b/"+n+"/o"+a,"i"),h={bucket:1,path:3},v=[{regex:s,indices:u,postModify:o},{regex:f,indices:h,postModify:c}],_=0;_<v.length;_++){var m=v[_],b=m.regex.exec(e);if(b){var y=b[m.indices.bucket],g=b[m.indices.path];g||(g=""),r=new t(y,g),m.postModify(r);break}}if(null==r)throw T(e);return r},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(t){var e;try{e=JSON.parse(t)}catch(r){return null}return ct(e)?e:null}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){if(0===t.length)return null;var e=t.lastIndexOf("/");if(-1===e)return"";var r=t.slice(0,e);return r}function Ot(t,e){var r=e.split("/").filter(function(t){return t.length>0}).join("/");return 0===t.length?r:t+"/"+r}function At(t){var e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){return"https://"+d+"/v0"+t}function Nt(t){var e=encodeURIComponent,r="?";for(var n in t)if(t.hasOwnProperty(n)){var o=e(n)+"="+e(t[n]);r=r+o+"&"}return r=r.slice(0,-1),r}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){return e}var Tt=function(){function t(t,e,r,n){this.server=t,this.local=e||t,this.writable=!!r,this.xform=n||St}return t}(),kt=null;function Pt(t){return!lt(t)||t.length<2?t:At(t)}function xt(){if(kt)return kt;var t=[];function e(t,e){return Pt(e)}t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));var r=new Tt("name");function n(t,e){return ot(e)?Number(e):e}r.xform=e,t.push(r);var o=new Tt("size");return o.xform=n,t.push(o),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),kt=t,kt}function Ut(t,e){function r(){var r=t["bucket"],n=t["fullPath"],o=new wt(r,n);return e.makeStorageReference(o)}Object.defineProperty(t,"ref",{get:r})}function It(t,e,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,e[a.server])}return Ut(n,t),n}function Lt(t,e,r){var n=Et(e);if(null===n)return null;var o=n;return It(t,o,r)}function Dt(t,e){var r=Et(e);if(null===r)return null;if(!lt(r["downloadTokens"]))return null;var n=r["downloadTokens"];if(0===n.length)return null;var o=encodeURIComponent,i=n.split(","),a=i.map(function(e){var r=t["bucket"],n=t["fullPath"],i="/b/"+o(r)+"/o/"+o(n),a=Ct(i),s=Nt({alt:"media",token:e});return a+s});return a[0]}function jt(t,e){for(var r={},n=e.length,o=0;o<n;o++){var i=e[o];i.writable&&(r[i.server]=t[i.local])}return JSON.stringify(r)}function Mt(t){if(!st(t)||!t)throw"Expected Metadata object.";for(var e in t)if(t.hasOwnProperty(e)){var r=t[e];if("customMetadata"===e){if(!st(r))throw"Expected object for 'customMetadata' mapping."}else if(ut(r))throw"Mapping for '"+e+"' cannot be an object."}}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt="maxResults",Wt=1e3,Ft="pageToken",Gt="prefixes",Ht="items";function zt(t,e){var r={prefixes:[],items:[],nextPageToken:e["nextPageToken"]},n=t.bucket();if(null===n)throw P();if(e[Gt])for(var o=0,i=e[Gt];o<i.length;o++){var a=i[o],s=a.replace(/\/$/,""),u=t.makeStorageReference(new wt(n,s));r.prefixes.push(u)}if(e[Ht])for(var c=0,l=e[Ht];c<l.length;c++){var p=l[c];u=t.makeStorageReference(new wt(n,p["name"]));r.items.push(u)}return r}function qt(t,e){var r=Et(e);if(null===r)return null;var n=r;return zt(t,n)}function Vt(t){if(!st(t)||!t)throw"Expected ListOptions object.";for(var e in t)if(e===Bt){if(!pt(t[Bt])||t[Bt]<=0)throw"Expected maxResults to be a positive number.";if(t[Bt]>1e3)throw"Expected maxResults to be less than or equal to "+Wt+"."}else{if(e!==Ft)throw"Unknown option: "+e;if(t[Ft]&&!lt(t[Ft]))throw"Expected pageToken to be string."}}var $t=function(){function t(t,e,r,n){this.url=t,this.method=e,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t){if(!t)throw E()}function Kt(t,e){function r(r,n){var o=Lt(t,n,e);return Xt(null!==o),o}return r}function Jt(t){function e(e,r){var n=qt(t,r);return Xt(null!==n),n}return e}function Zt(t,e){function r(r,n){var o=Lt(t,n,e);return Xt(null!==o),Dt(o,n)}return r}function Yt(t){function e(e,r){var n;return n=401===e.getStatus()?A():402===e.getStatus()?O(t.bucket):403===e.getStatus()?C(t.path):r,n.setServerResponseProp(r.serverResponseProp()),n}return e}function Qt(t){var e=Yt(t);function r(r,n){var o=e(r,n);return 404===r.getStatus()&&(o=R(t.path)),o.setServerResponseProp(n.serverResponseProp()),o}return r}function te(t,e,r){var n=e.fullServerUrl(),o=Ct(n),i="GET",a=t.maxOperationRetryTime(),s=new $t(o,i,Kt(t,r),a);return s.errorHandler=Qt(e),s}function ee(t,e,r,n,o){var i={};e.isRoot?i["prefix"]="":i["prefix"]=e.path+"/",r&&r.length>0&&(i["delimiter"]=r),n&&(i["pageToken"]=n),o&&(i["maxResults"]=o);var a=e.bucketOnlyServerUrl(),s=Ct(a),u="GET",c=t.maxOperationRetryTime(),l=new $t(s,u,Jt(t),c);return l.urlParams=i,l.errorHandler=Yt(e),l}function re(t,e,r){var n=e.fullServerUrl(),o=Ct(n),i="GET",a=t.maxOperationRetryTime(),s=new $t(o,i,Zt(t,r),a);return s.errorHandler=Qt(e),s}function ne(t,e,r,n){var o=e.fullServerUrl(),i=Ct(o),a="PATCH",s=jt(r,n),u={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime(),l=new $t(i,a,Kt(t,n),c);return l.headers=u,l.body=s,l.errorHandler=Qt(e),l}function oe(t,e){var r=e.fullServerUrl(),n=Ct(r),o="DELETE",i=t.maxOperationRetryTime();function a(t,e){}var s=new $t(n,o,a,i);return s.successCodes=[200,204],s.errorHandler=Qt(e),s}function ie(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function ae(t,e,r){var n=Object.assign({},r);return n["fullPath"]=t.path,n["size"]=e.size(),n["contentType"]||(n["contentType"]=ie(null,e)),n}function se(t,e,r,n,o){var i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var t="",e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=ae(e,n,o),l=jt(c,r),p="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",f="\r\n--"+u+"--",h=gt.getBlob(p,n,f);if(null===h)throw x();var d={name:c["fullPath"]},v=Ct(i),_="POST",m=t.maxUploadRetryTime(),b=new $t(v,_,Kt(t,r),m);return b.urlParams=d,b.headers=a,b.body=h.uploadData(),b.errorHandler=Yt(e),b}var ue=function(){function t(t,e,r,n){this.current=t,this.total=e,this.finalized=!!r,this.metadata=n||null}return t}();function ce(t,e){var r=null;try{r=t.getResponseHeader("X-Goog-Upload-Status")}catch(o){Xt(!1)}var n=e||["active"];return Xt(!!r&&-1!==n.indexOf(r)),r}function le(t,e,r,n,o){var i=e.bucketOnlyServerUrl(),a=ae(e,n,o),s={name:a["fullPath"]},u=Ct(i),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},p=jt(a,r),f=t.maxUploadRetryTime();function h(t){var e;ce(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(r){Xt(!1)}return Xt(lt(e)),e}var d=new $t(u,c,h,f);return d.urlParams=s,d.headers=l,d.body=p,d.errorHandler=Yt(e),d}function pe(t,e,r,n){var o={"X-Goog-Upload-Command":"query"};function i(t){var e=ce(t,["active","final"]),r=null;try{r=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){Xt(!1)}r||Xt(!1);var o=Number(r);return Xt(!isNaN(o)),new ue(o,n.size(),"final"===e)}var a="POST",s=t.maxUploadRetryTime(),u=new $t(r,a,i,s);return u.headers=o,u.errorHandler=Yt(e),u}var fe=262144;function he(t,e,r,n,o,i,a,s){var u=new ue(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw U();var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var p=u.current,f=p+l,h=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":h,"X-Goog-Upload-Offset":u.current},v=n.slice(p,f);if(null===v)throw x();function _(t,r){var o,a=ce(t,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?Kt(e,i)(t,r):null,new ue(s,c,"final"===a,o)}var m="POST",b=e.maxUploadRetryTime(),y=new $t(r,m,_,b);return y.headers=d,y.body=v.uploadData(),y.progressCallback=s||null,y.errorHandler=Yt(t),y}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de=function(){function t(t,e,r){var n=at(t)||ot(e)||ot(r);if(n)this.next=t,this.error=e||null,this.complete=r||null;else{var o=t;this.next=o.next||null,this.error=o.error||null,this.complete=o.complete||null}}return t}(),ve=function(){function t(t,e,r,n,o,i){this.bytesTransferred=t,this.totalBytes=e,this.state=r,this.metadata=n,this.task=o,this.ref=i}return t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(t,e,r){for(var n=e.length,o=e.length,i=0;i<e.length;i++)if(e[i].optional){n=i;break}var a=n<=r.length&&r.length<=o;if(!a)throw D(n,o,t,r.length);for(i=0;i<r.length;i++)try{e[i].validator(r[i])}catch(s){throw s instanceof Error?L(i,t,s.message):L(i,t,s)}}var me=function(){function t(t,e){var r=this;this.validator=function(e){r.optional&&!it(e)||t(e)},this.optional=!!e}return t}();function be(t,e){return function(r){t(r),e(r)}}function ye(t,e){function r(t){if(!lt(t))throw"Expected string."}var n;return n=t?be(r,t):r,new me(n,e)}function ge(){function t(t){var e=t instanceof Uint8Array||t instanceof ArrayBuffer||dt()&&t instanceof Blob;if(!e)throw"Expected Blob or File."}return new me(t)}function we(t){return new me(Mt,t)}function Ee(t){return new me(Vt,t)}function Re(){function t(t){var e=ft(t)&&t>=0;if(!e)throw"Expected a number 0 or greater."}return new me(t)}function Oe(t,e){function r(e){var r=null===e||ot(e)&&e instanceof Object;if(!r)throw"Expected an Object.";void 0!==t&&null!==t&&t(e)}return new me(r,e)}function Ae(t){function e(t){var e=null===t||at(t);if(!e)throw"Expected a Function."}return new me(e,t)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];Promise.resolve().then(function(){return t.apply(void 0,e)})}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne=function(){function t(t,e,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=t,this.authWrapper_=e,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=et.RUNNING,this.errorHandler_=function(t){a.request_=null,a.chunkMultiplier_=1,t.codeEquals(g.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=t,a.transition_(et.ERROR))},this.metadataErrorHandler_=function(t){a.request_=null,t.codeEquals(g.CANCELED)?a.completeTransitions_():(a.error_=t,a.transition_(et.ERROR))},this.promise_=new Promise(function(t,e){a.resolve_=t,a.reject_=e,a.start_()}),this.promise_.then(null,function(){})}return t.prototype.makeProgressCallback_=function(){var t=this,e=this.transferred_;return function(r){return t.updateProgress_(e+r)}},t.prototype.shouldDoResumable_=function(t){return t.size()>262144},t.prototype.start_=function(){this.state_===et.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},t.prototype.resolveToken_=function(t){var e=this;this.authWrapper_.getAuthToken().then(function(r){switch(e.state_){case et.RUNNING:t(r);break;case et.CANCELING:e.transition_(et.CANCELED);break;case et.PAUSING:e.transition_(et.PAUSED);break;default:}})},t.prototype.createResumable_=function(){var t=this;this.resolveToken_(function(e){var r=le(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),n=t.authWrapper_.makeRequest(r,e);t.request_=n,n.getPromise().then(function(e){t.request_=null,t.uploadUrl_=e,t.needToFetchStatus_=!1,t.completeTransitions_()},t.errorHandler_)})},t.prototype.fetchStatus_=function(){var t=this,e=this.uploadUrl_;this.resolveToken_(function(r){var n=pe(t.authWrapper_,t.location_,e,t.blob_),o=t.authWrapper_.makeRequest(n,r);t.request_=o,o.getPromise().then(function(e){e=e,t.request_=null,t.updateProgress_(e.current),t.needToFetchStatus_=!1,e.finalized&&(t.needToFetchMetadata_=!0),t.completeTransitions_()},t.errorHandler_)})},t.prototype.continueUpload_=function(){var t=this,e=fe*this.chunkMultiplier_,r=new ue(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_(function(o){var i;try{i=he(t.location_,t.authWrapper_,n,t.blob_,e,t.mappings_,r,t.makeProgressCallback_())}catch(s){return t.error_=s,void t.transition_(et.ERROR)}var a=t.authWrapper_.makeRequest(i,o);t.request_=a,a.getPromise().then(function(e){t.increaseMultiplier_(),t.request_=null,t.updateProgress_(e.current),e.finalized?(t.metadata_=e.metadata,t.transition_(et.SUCCESS)):t.completeTransitions_()},t.errorHandler_)})},t.prototype.increaseMultiplier_=function(){var t=fe*this.chunkMultiplier_;t<33554432&&(this.chunkMultiplier_*=2)},t.prototype.fetchMetadata_=function(){var t=this;this.resolveToken_(function(e){var r=te(t.authWrapper_,t.location_,t.mappings_),n=t.authWrapper_.makeRequest(r,e);t.request_=n,n.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.transition_(et.SUCCESS)},t.metadataErrorHandler_)})},t.prototype.oneShotUpload_=function(){var t=this;this.resolveToken_(function(e){var r=se(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),n=t.authWrapper_.makeRequest(r,e);t.request_=n,n.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.updateProgress_(t.blob_.size()),t.transition_(et.SUCCESS)},t.errorHandler_)})},t.prototype.updateProgress_=function(t){var e=this.transferred_;this.transferred_=t,this.transferred_!==e&&this.notifyObservers_()},t.prototype.transition_=function(t){if(this.state_!==t)switch(t){case et.CANCELING:this.state_=t,null!==this.request_&&this.request_.cancel();break;case et.PAUSING:this.state_=t,null!==this.request_&&this.request_.cancel();break;case et.RUNNING:var e=this.state_===et.PAUSED;this.state_=t,e&&(this.notifyObservers_(),this.start_());break;case et.PAUSED:this.state_=t,this.notifyObservers_();break;case et.CANCELED:this.error_=S(),this.state_=t,this.notifyObservers_();break;case et.ERROR:this.state_=t,this.notifyObservers_();break;case et.SUCCESS:this.state_=t,this.notifyObservers_();break;default:}},t.prototype.completeTransitions_=function(){switch(this.state_){case et.PAUSING:this.transition_(et.PAUSED);break;case et.CANCELING:this.transition_(et.CANCELED);break;case et.RUNNING:this.start_();break;default:break}},Object.defineProperty(t.prototype,"snapshot",{get:function(){var t=nt(this.state_);return new ve(this.transferred_,this.blob_.size(),t,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),t.prototype.on=function(t,e,r,n){function o(){if(t!==tt.STATE_CHANGED)throw"Expected one of the event types: ["+tt.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=Ae(!0).validator,s=Oe(null,!0).validator;function u(t){try{return void a(t)}catch(r){}try{s(t);var e=it(t["next"])||it(t["error"])||it(t["complete"]);if(!e)throw"";return}catch(r){throw i}}var c=[ye(o),Oe(u,!0),Ae(!0),Ae(!0)];_e("on",c,arguments);var l=this;function p(t){function e(e,r,o){null!==t&&_e("on",t,arguments);var i=new de(e,r,n);return l.addObserver_(i),function(){l.removeObserver_(i)}}return e}function f(t){if(null===t)throw i;u(t)}var h=[Oe(f),Ae(!0),Ae(!0)],d=!(it(e)||it(r)||it(n));return d?p(h):p(null)(e,r,n)},t.prototype.then=function(t,e){return this.promise_.then(t,e)},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.addObserver_=function(t){this.observers_.push(t),this.notifyObserver_(t)},t.prototype.removeObserver_=function(t){var e=this.observers_.indexOf(t);-1!==e&&this.observers_.splice(e,1)},t.prototype.notifyObservers_=function(){var t=this;this.finishPromise_();var e=this.observers_.slice();e.forEach(function(e){t.notifyObserver_(e)})},t.prototype.finishPromise_=function(){if(null!==this.resolve_){var t=!0;switch(nt(this.state_)){case rt.SUCCESS:Ce(this.resolve_.bind(null,this.snapshot))();break;case rt.CANCELED:case rt.ERROR:var e=this.reject_;Ce(e.bind(null,this.error_))();break;default:t=!1;break}t&&(this.resolve_=null,this.reject_=null)}},t.prototype.notifyObserver_=function(t){var e=nt(this.state_);switch(e){case rt.RUNNING:case rt.PAUSED:t.next&&Ce(t.next.bind(t,this.snapshot))();break;case rt.SUCCESS:t.complete&&Ce(t.complete.bind(t))();break;case rt.CANCELED:case rt.ERROR:t.error&&Ce(t.error.bind(t,this.error_))();break;default:t.error&&Ce(t.error.bind(t,this.error_))()}},t.prototype.resume=function(){_e("resume",[],arguments);var t=this.state_===et.PAUSED||this.state_===et.PAUSING;return t&&this.transition_(et.RUNNING),t},t.prototype.pause=function(){_e("pause",[],arguments);var t=this.state_===et.RUNNING;return t&&this.transition_(et.PAUSING),t},t.prototype.cancel=function(){_e("cancel",[],arguments);var t=this.state_===et.RUNNING||this.state_===et.PAUSING;return t&&this.transition_(et.CANCELING),t},t}(),Se=function(){function t(t,e){this.authWrapper=t,this.location=e instanceof wt?e:wt.makeFromUrl(e)}return t.prototype.toString=function(){return _e("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},t.prototype.newRef=function(e,r){return new t(e,r)},t.prototype.mappings=function(){return xt()},t.prototype.child=function(t){_e("child",[ye()],arguments);var e=Ot(this.location.path,t),r=new wt(this.location.bucket,e);return this.newRef(this.authWrapper,r)},Object.defineProperty(t.prototype,"parent",{get:function(){var t=Rt(this.location.path);if(null===t)return null;var e=new wt(this.location.bucket,t);return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var t=new wt(this.location.bucket,"");return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return At(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,e){return void 0===e&&(e=null),_e("put",[ge(),we(!0)],arguments),this.throwIfRoot_("put"),new Ne(this,this.authWrapper,this.location,this.mappings(),new gt(t),e)},t.prototype.putString=function(t,e,r){void 0===e&&(e=F.RAW),_e("putString",[ye(),ye(G,!0),we(!0)],arguments),this.throwIfRoot_("putString");var n=z(e,t),o=Object.assign({},r);return!ot(o["contentType"])&&ot(n.contentType)&&(o["contentType"]=n.contentType),new Ne(this,this.authWrapper,this.location,this.mappings(),new gt(n.data,!0),o)},t.prototype.delete=function(){var t=this;return _e("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then(function(e){var r=oe(t.authWrapper,t.location);return t.authWrapper.makeRequest(r,e).getPromise()})},t.prototype.listAll=function(){_e("listAll",[],arguments);var t={prefixes:[],items:[]};return this.listAllHelper(t).then(function(){return t})},t.prototype.listAllHelper=function(t,e){return f(this,void 0,void 0,function(){var r,n,o,i;return h(this,function(a){switch(a.label){case 0:return r={pageToken:e},[4,this.list(r)];case 1:return n=a.sent(),(o=t.prefixes).push.apply(o,n.prefixes),(i=t.items).push.apply(i,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(t,n.nextPageToken)];case 2:a.sent(),a.label=3;case 3:return[2]}})})},t.prototype.list=function(t){_e("list",[Ee(!0)],arguments);var e=this;return this.authWrapper.getAuthToken().then(function(r){var n=t||{},o=ee(e.authWrapper,e.location,"/",n.pageToken,n.maxResults);return e.authWrapper.makeRequest(o,r).getPromise()})},t.prototype.getMetadata=function(){var t=this;return _e("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then(function(e){var r=te(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(r,e).getPromise()})},t.prototype.updateMetadata=function(t){var e=this;return _e("updateMetadata",[we()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then(function(r){var n=ne(e.authWrapper,e.location,t,e.mappings());return e.authWrapper.makeRequest(n,r).getPromise()})},t.prototype.getDownloadURL=function(){var t=this;return _e("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then(function(e){var r=re(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(r,e).getPromise().then(function(t){if(null===t)throw I();return t})})},t.prototype.throwIfRoot_=function(t){if(""===this.location.path)throw M(t)},t}(),Te=function(){function t(t){this.promise_=Promise.reject(t)}return t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){},t}(),ke=function(){function t(){this.map=new Map,this.id=b}return t.prototype.addRequest=function(t){var e=this,r=this.id;this.id++,this.map.set(r,t),t.getPromise().then(function(){return e.map.delete(r)},function(){return e.map.delete(r)})},t.prototype.clear=function(){this.map.forEach(function(t){t&&t.cancel(!0)}),this.map.clear()},t}(),Pe=function(){function t(e,r,n,o,i){if(this.bucket_=null,this.deleted_=!1,this.app_=e,null!==this.app_){var a=this.app_.options;ot(a)&&(this.bucket_=t.extractBucket_(a))}this.storageRefMaker_=r,this.requestMaker_=n,this.pool_=i,this.service_=o,this.maxOperationRetryTime_=_,this.maxUploadRetryTime_=m,this.requestMap_=new ke}return t.extractBucket_=function(t){var e=t[v]||null;if(null==e)return null;var r=wt.makeFromBucketSpec(e);return r.bucket},t.prototype.getAuthToken=function(){return null!==this.app_&&ot(this.app_.INTERNAL)&&ot(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then(function(t){return null!==t?t.accessToken:null},function(){return null}):Promise.resolve(null)},t.prototype.bucket=function(){if(this.deleted_)throw j();return this.bucket_},t.prototype.service=function(){return this.service_},t.prototype.makeStorageReference=function(t){return this.storageRefMaker_(this,t)},t.prototype.makeRequest=function(t,e){if(this.deleted_)return new Te(j());var r=this.requestMaker_(t,e,this.pool_);return this.requestMap_.addRequest(r),r},t.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},t.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},t.prototype.setMaxUploadRetryTime=function(t){this.maxUploadRetryTime_=t},t.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},t.prototype.setMaxOperationRetryTime=function(t){this.maxOperationRetryTime_=t},t}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xe(t,e,r){var n=1,o=null,i=!1,a=0;function s(){return 2===a}var u=!1;function c(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];u||(u=!0,e.apply(null,t))}function l(e){o=setTimeout(function(){o=null,t(p,s())},e)}function p(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(!u)if(t)c.call.apply(c,[null,t].concat(e));else{var o,p=s()||i;if(p)c.call.apply(c,[null,t].concat(e));else n<64&&(n*=2),1===a?(a=2,o=0):o=1e3*(n+Math.random()),l(o)}}var f=!1;function h(t){f||(f=!0,u||(null!==o?(t||(a=2),clearTimeout(o),l(0)):t||(a=1)))}return l(0),setTimeout(function(){i=!0,h(!0)},r),h}function Ue(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie=function(){function t(t,e,r,n,o,i,a,s,u,c,l){var p=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise(function(t,e){p.resolve_=t,p.reject_=e,p.start_()})}return t.prototype.start_=function(){var t=this;function e(e,r){if(r)e(!1,new Le(!1,null,!0));else{var n=t.pool_.createXhrIo();t.pendingXhr_=n,null!==t.progressCallback_&&n.addUploadProgressListener(o),n.send(t.url_,t.method_,t.body_,t.headers_).then(function(r){null!==t.progressCallback_&&r.removeUploadProgressListener(o),t.pendingXhr_=null,r=r;var n=r.getErrorCode()===Q.NO_ERROR,i=r.getStatus();if(n&&!t.isRetryStatusCode_(i)){var a=-1!==t.successCodes_.indexOf(i);e(!0,new Le(a,r))}else{var s=r.getErrorCode()===Q.ABORT;e(!1,new Le(!1,null,s))}})}function o(e){var r=e.loaded,n=e.lengthComputable?e.total:-1;null!==t.progressCallback_&&t.progressCallback_(r,n)}}function r(e,r){var n=t.resolve_,o=t.reject_,i=r.xhr;if(r.wasSuccessCode)try{var a=t.callback_(i,i.getResponseText());it(a)?n(a):n()}catch(u){o(u)}else if(null!==i){var s=E();s.setServerResponseProp(i.getResponseText()),t.errorCallback_?o(t.errorCallback_(i,s)):o(s)}else if(r.canceled){s=t.appDelete_?j():S();o(s)}else{s=N();o(s)}}this.canceled_?r(!1,new Le(!1,null,!0)):this.backoffId_=xe(e,r,this.timeout_)},t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&Ue(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},t.prototype.isRetryStatusCode_=function(t){var e=t>=500&&t<600,r=[408,429],n=-1!==r.indexOf(t),o=-1!==this.additionalRetryCodes_.indexOf(t);return e||n||o},t}(),Le=function(){function t(t,e,r){this.wasSuccessCode=t,this.xhr=e,this.canceled=!!r}return t}();function De(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function je(t){var e="undefined"!==typeof p.a?p.a.SDK_VERSION:"AppManager";t["X-Firebase-Storage-Version"]="webjs/"+e}function Me(t,e,r){var n=Nt(t.urlParams),o=t.url+n,i=Object.assign({},t.headers);return De(i,e),je(i),new Ie(o,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be=function(){function t(t,e,r){function n(t,e){return new Se(t,e)}if(this.bucket_=null,this.authWrapper_=new Pe(t,n,Me,this,e),this.app_=t,null!=r)this.bucket_=wt.makeFromBucketSpec(r);else{var o=this.authWrapper_.bucket();null!=o&&(this.bucket_=new wt(o,""))}this.internals_=new We(this)}return t.prototype.ref=function(t){function e(t){if("string"!==typeof t)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."}if(_e("ref",[ye(e,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new Se(this.authWrapper_,this.bucket_);return null!=t?r.child(t):r},t.prototype.refFromURL=function(t){function e(t){if("string"!==typeof t)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead.";try{wt.makeFromUrl(t)}catch(e){throw"Expected valid full URL but got an invalid one."}}return _e("refFromURL",[ye(e,!1)],arguments),new Se(this.authWrapper_,t)},Object.defineProperty(t.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxUploadRetryTime=function(t){_e("setMaxUploadRetryTime",[Re()],arguments),this.authWrapper_.setMaxUploadRetryTime(t)},t.prototype.setMaxOperationRetryTime=function(t){_e("setMaxOperationRetryTime",[Re()],arguments),this.authWrapper_.setMaxOperationRetryTime(t)},Object.defineProperty(t.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),t}(),We=function(){function t(t){this.service_=t}return t.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},t}(),Fe="storage";function Ge(t,e,r){return new Be(t,new _t,r)}function He(t){var e={TaskState:rt,TaskEvent:tt,StringFormat:F,Storage:Be,Reference:Se};t.INTERNAL.registerService(Fe,Ge,e,void 0,!0)}He(p.a);var ze={apiKey:"AIzaSyCvdfYoMzEZ474OzhVYM8-f4_wVaUTiiSg",authDomain:"highlandauthority.firebaseapp.com",databaseURL:"https://highlandauthority.firebaseio.com",projectId:"highlandauthority",storageBucket:"highlandauthority.appspot.com",messagingSenderId:"662208193024",appId:"1:662208193024:web:292f70ea75f09dd9c9eee5",measurementId:"G-RQXG3X27RF"};c.a.initializeApp(ze);const qe=c.a.storage();async function Ve(t,e,r={}){let n=qe.ref(e+"/"+t.name),o=await n.put(t,r),i=await o.ref.getDownloadURL();return{snapshot:o,url:i}}var $e={name:"EditProfileModal",data(){return{newEdit:{picture:this.$store.state.activeProfile.picture}}},computed:{profile(){return this.$store.state.activeProfile},user(){return this.$store.state.user}},methods:{editProfile(){this.$store.dispatch("editProfile",{_id:this.profile._id,nickname:this.newEdit.nickname,location:this.newEdit.location,class:this.newEdit.class,bio:this.newEdit.bio,picture:this.newEdit.picture,phone:this.newEdit.phone}),$("#close").click()},async upload(){let t=event.target.files[0],e=await Ve(t,"profile-images/"+this.profile.userId._id,{owner:this.profile.userId.name});this.newEdit.picture=e.url},createProfile(){this.$store.dispatch("createProfile",{nickname:this.newEdit.nickname,location:this.newEdit.location,class:this.newEdit.class,bio:this.newEdit.bio,picture:this.newEdit.picture,phone:this.newEdit.phone,userId:this.user._id}),$("#close").click()},resetPassword(){this.$router.push({name:"forgot"}),$("#close").click()}}},Xe=$e,Ke=(r("c437"),r("2877")),Je=Object(Ke["a"])(Xe,a,s,!1,null,"26a4b6f6",null),Ze=Je.exports,Ye=r("f7b5"),Qe={name:"profile",mounted(){this.getMyProfile(),this.setHistory("open-stone")},computed:{profile(){return this.$store.state.activeProfile},user(){return this.$store.state.user}},props:[],methods:{getMyProfile(){this.$store.dispatch("getMyProfile",this.user._id)},setHistory(t){this.$store.dispatch("getOneEventScores",{userId:this.$route.params.userId,eventName:t})}},components:{PR:i["a"],EditProfileModal:Ze,history:Ye["a"]}},tr=Qe,er=(r("a792"),Object(Ke["a"])(tr,n,o,!1,null,"6620c330",null));e["default"]=er.exports},cd51:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=r("fbb0"),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(t,e){if(!t)throw a(e)},a=function(t){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},s=function(t){for(var e=[],r=0,n=0;n<t.length;n++){var o=t.charCodeAt(n);o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=63&o|128):55296===(64512&o)&&n+1<t.length&&56320===(64512&t.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++n)),e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=63&o|128):(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=63&o|128)}return e},u=function(t){var e=[],r=0,n=0;while(r<t.length){var o=t[r++];if(o<128)e[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=t[r++];e[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){i=t[r++];var a=t[r++],s=t[r++],u=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(1023&u))}else{i=t[r++],a=t[r++];e[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<t.length;o+=3){var i=t[o],a=o+1<t.length,s=a?t[o+1]:0,u=o+2<t.length,c=u?t[o+2]:0,l=i>>2,p=(3&i)<<4|s>>4,f=(15&s)<<2|c>>6,h=63&c;u||(h=64,a||(f=64)),n.push(r[l],r[p],r[f],r[h])}return n.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):u(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<t.length;){var i=r[t.charAt(o++)],a=o<t.length,s=a?r[t.charAt(o)]:0;++o;var u=o<t.length,c=u?r[t.charAt(o)]:64;++o;var l=o<t.length,p=l?r[t.charAt(o)]:64;if(++o,null==i||null==s||null==c||null==p)throw Error();var f=i<<2|s>>4;if(n.push(f),64!==c){var h=s<<4&240|c>>2;if(n.push(h),64!==p){var d=c<<6&192|p;n.push(d)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},l=function(t){var e=s(t);return c.encodeByteArray(e,!0)},p=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(t){return h(void 0,t)}function h(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var r=e;return new Date(r.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(var n in e)e.hasOwnProperty(n)&&(t[n]=h(t[n],e[n]));return t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(e,r){t.resolve=e,t.reject=r})}return t.prototype.wrapCallback=function(t){var e=this;return function(r,n){r?e.reject(r):e.resolve(n),"function"===typeof t&&(e.promise.catch(function(){}),1===t.length?t(r):t(r,n))}},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function m(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function b(){return"object"===typeof self&&self.self===self}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w="FirebaseError",E=function(t){function e(r,n){var o=t.call(this,n)||this;return o.code=r,o.name=w,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,R.prototype.create),o}return n.__extends(e,t),e}(Error),R=function(){function t(t,e,r){this.service=t,this.serviceName=e,this.errors=r}return t.prototype.create=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=e[0]||{},o=this.service+"/"+t,i=this.errors[t],a=i?O(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",u=new E(o,s),c=0,l=Object.keys(n);c<l.length;c++){var p=l[c];"_"!==p.slice(-1)&&(p in u&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),u[p]=n[p])}return u},t}();function O(t,e){return t.replace(A,function(t,r){var n=e[r];return null!=n?n.toString():"<"+r+"?>"})}var A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){return JSON.parse(t)}function N(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S=function(t){var e={},r={},n={},o="";try{var i=t.split(".");e=C(p(i[0])||""),r=C(p(i[1])||""),o=i[2],n=r["d"]||{},delete r["d"]}catch(a){}return{header:e,claims:r,data:n,signature:o}},T=function(t){var e=S(t).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"===typeof e&&(e.hasOwnProperty("nbf")?n=e["nbf"]:e.hasOwnProperty("iat")&&(n=e["iat"]),o=e.hasOwnProperty("exp")?e["exp"]:n+86400),!!r&&!!n&&!!o&&r>=n&&r<=o},k=function(t){var e=S(t).claims;return"object"===typeof e&&e.hasOwnProperty("iat")?e["iat"]:null},P=function(t){var e=S(t),r=e.claims;return!!r&&"object"===typeof r&&r.hasOwnProperty("iat")},x=function(t){var e=S(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function I(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function L(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function D(t,e,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=e.call(r,t[o],o,t));return n}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){for(var e=[],r=function(t,r){Array.isArray(r)?r.forEach(function(r){e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))},n=0,o=Object.entries(t);n<o.length;n++){var i=o[n],a=i[0],s=i[1];r(a,s)}return e.length?"&"+e.join("&"):""}function M(t){var e={},r=t.replace(/^\?/,"").split("&");return r.forEach(function(t){if(t){var r=t.split("=");e[r[0]]=r[1]}}),e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B=function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}return t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var r=this.W_;if("string"===typeof t)for(var n=0;n<16;n++)r[n]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(n=0;n<16;n++)r[n]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],u=this.chain_[1],c=this.chain_[2],l=this.chain_[3],p=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=l^u&(c^l),a=1518500249):(i=u^c^l,a=1859775393):n<60?(i=u&c|l&(u|c),a=2400959708):(i=u^c^l,a=3395469782);o=(s<<5|s>>>27)+i+p+a+r[n]&4294967295;p=l,l=c,c=4294967295&(u<<30|u>>>2),u=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);var r=e-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;while(n<e){if(0===i)while(n<=r)this.compress_(t,n),n+=this.blockSize;if("string"===typeof t){while(n<e)if(o[i]=t.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}else while(n<e)if(o[i]=t[n],++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)t[n]=this.chain_[r]>>o&255,++n;return t},t}();function W(t,e){var r=new F(t,e);return r.subscribe.bind(r)}var F=function(){function t(t,e){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(function(){t(r)}).catch(function(t){r.error(t)})}return t.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},t.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},t.prototype.complete=function(){this.forEachObserver(function(t){t.complete()}),this.close()},t.prototype.subscribe=function(t,e,r){var n,o=this;if(void 0===t&&void 0===e&&void 0===r)throw new Error("Missing Observer.");n=H(t,["next","error","complete"])?t:{next:t,error:e,complete:r},void 0===n.next&&(n.next=z),void 0===n.error&&(n.error=z),void 0===n.complete&&(n.complete=z);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(t){}}),this.observers.push(n),i},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[t])try{e(r.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(function(){e.observers=void 0,e.onNoObservers=void 0}))},t}();function G(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then(function(){t.apply(void 0,r)}).catch(function(t){e&&e(t)})}}function H(t,e){if("object"!==typeof t||null===t)return!1;for(var r=0,n=e;r<n.length;r++){var o=n[r];if(o in t&&"function"===typeof t[o])return!0}return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q=function(t,e,r,n){var o;if(n<e?o="at least "+e:n>r&&(o=0===r?"none":"no more than "+r),o){var i=t+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".";throw new Error(i)}};function V(t,e,r){var n="";switch(e){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=t+" failed: ";return o+=n+" argument ",o}function $(t,e,r,n){if((!n||r)&&"string"!==typeof r)throw new Error(V(t,e,n)+"must be a valid firebase namespace.")}function X(t,e,r,n){if((!n||r)&&"function"!==typeof r)throw new Error(V(t,e,n)+"must be a valid function.")}function K(t,e,r,n){if((!n||r)&&("object"!==typeof r||null===r))throw new Error(V(t,e,n)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J=function(t){for(var e=[],r=0,n=0;n<t.length;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319){var a=o-55296;n++,i(n<t.length,"Surrogate pair missing trail surrogate.");var s=t.charCodeAt(n)-56320;o=65536+(a<<10)+s}o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=63&o|128):o<65536?(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=63&o|128):(e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=63&o|128)}return e},Z=function(t){for(var e=0,r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,r++):e+=3}return e};e.CONSTANTS=o,e.Deferred=d,e.ErrorFactory=R,e.FirebaseError=E,e.Sha1=B,e.assert=i,e.assertionError=a,e.async=G,e.base64=c,e.base64Decode=p,e.base64Encode=l,e.contains=U,e.createSubscribe=W,e.decode=S,e.deepCopy=f,e.deepExtend=h,e.errorPrefix=V,e.getUA=v,e.isAdmin=x,e.isBrowser=b,e.isEmpty=L,e.isMobileCordova=_,e.isNode=m,e.isNodeSdk=g,e.isReactNative=y,e.isValidFormat=P,e.isValidTimestamp=T,e.issuedAtTime=k,e.jsonEval=C,e.map=D,e.querystring=j,e.querystringDecode=M,e.safeGet=I,e.stringLength=Z,e.stringToByteArray=J,e.stringify=N,e.validateArgCount=q,e.validateCallback=X,e.validateContextObject=K,e.validateNamespace=$}).call(this,r("c8ba"))},df41:function(t,e,r){"use strict";r.r(e),r.d(e,"__extends",function(){return o}),r.d(e,"__assign",function(){return i}),r.d(e,"__rest",function(){return a}),r.d(e,"__decorate",function(){return s}),r.d(e,"__param",function(){return u}),r.d(e,"__metadata",function(){return c}),r.d(e,"__awaiter",function(){return l}),r.d(e,"__generator",function(){return p}),r.d(e,"__exportStar",function(){return f}),r.d(e,"__values",function(){return h}),r.d(e,"__read",function(){return d}),r.d(e,"__spread",function(){return v}),r.d(e,"__spreadArrays",function(){return _}),r.d(e,"__await",function(){return m}),r.d(e,"__asyncGenerator",function(){return b}),r.d(e,"__asyncDelegator",function(){return y}),r.d(e,"__asyncValues",function(){return g}),r.d(e,"__makeTemplateObject",function(){return w}),r.d(e,"__importStar",function(){return E}),r.d(e,"__importDefault",function(){return R});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)};function o(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function a(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function s(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}function u(t,e){return function(r,n){e(r,n,t)}}function c(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{u(n.next(t))}catch(e){i(e)}}function s(t){try{u(n["throw"](t))}catch(e){i(e)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,s)}u((n=n.apply(t,e||[])).next())})}function p(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return u([t,e])}}function u(i){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(o=2&i[0]?n["return"]:i[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function f(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}function h(t){var e="function"===typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function d(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{while((void 0===e||e-- >0)&&!(n=i.next()).done)a.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=i["return"])&&r.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(d(arguments[e]));return t}function _(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function m(t){return this instanceof m?(this.v=t,this):new m(t)}function b(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){i.push([t,e,r,n])>1||s(t,e)})})}function s(t,e){try{u(o[t](e))}catch(r){p(i[0][3],r)}}function u(t){t.value instanceof m?Promise.resolve(t.value.v).then(c,l):p(i[0][2],t)}function c(t){s("next",t)}function l(t){s("throw",t)}function p(t,e){t(e),i.shift(),i.length&&s(i[0][0],i[0][1])}}function y(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:m(t[n](e)),done:"return"===n}:o?o(e):e}:o}}function g(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"===typeof h?h(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise(function(n,i){e=t[r](e),o(n,i,e.done,e.value)})}}function o(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function E(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function R(t){return t&&t.__esModule?t:{default:t}}},fbb0:function(t,e,r){"use strict";r.r(e),r.d(e,"__extends",function(){return o}),r.d(e,"__assign",function(){return i}),r.d(e,"__rest",function(){return a}),r.d(e,"__decorate",function(){return s}),r.d(e,"__param",function(){return u}),r.d(e,"__metadata",function(){return c}),r.d(e,"__awaiter",function(){return l}),r.d(e,"__generator",function(){return p}),r.d(e,"__exportStar",function(){return f}),r.d(e,"__values",function(){return h}),r.d(e,"__read",function(){return d}),r.d(e,"__spread",function(){return v}),r.d(e,"__spreadArrays",function(){return _}),r.d(e,"__await",function(){return m}),r.d(e,"__asyncGenerator",function(){return b}),r.d(e,"__asyncDelegator",function(){return y}),r.d(e,"__asyncValues",function(){return g}),r.d(e,"__makeTemplateObject",function(){return w}),r.d(e,"__importStar",function(){return E}),r.d(e,"__importDefault",function(){return R});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)};function o(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function a(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function s(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}function u(t,e){return function(r,n){e(r,n,t)}}function c(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{u(n.next(t))}catch(e){i(e)}}function s(t){try{u(n["throw"](t))}catch(e){i(e)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,s)}u((n=n.apply(t,e||[])).next())})}function p(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return u([t,e])}}function u(i){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(o=2&i[0]?n["return"]:i[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function f(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}function h(t){var e="function"===typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function d(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{while((void 0===e||e-- >0)&&!(n=i.next()).done)a.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=i["return"])&&r.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(d(arguments[e]));return t}function _(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function m(t){return this instanceof m?(this.v=t,this):new m(t)}function b(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){i.push([t,e,r,n])>1||s(t,e)})})}function s(t,e){try{u(o[t](e))}catch(r){p(i[0][3],r)}}function u(t){t.value instanceof m?Promise.resolve(t.value.v).then(c,l):p(i[0][2],t)}function c(t){s("next",t)}function l(t){s("throw",t)}function p(t,e){t(e),i.shift(),i.length&&s(i[0][0],i[0][1])}}function y(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:m(t[n](e)),done:"return"===n}:o?o(e):e}:o}}function g(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"===typeof h?h(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise(function(n,i){e=t[r](e),o(n,i,e.done,e.value)})}}function o(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function E(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function R(t){return t&&t.__esModule?t:{default:t}}},fc2d:function(t,e,r){}}]);
//# sourceMappingURL=Profile.5c89956d.js.map