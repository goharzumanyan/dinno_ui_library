"use strict";(self.webpackChunkdinno_ui_lib=self.webpackChunkdinno_ui_lib||[]).push([[5172],{"./src/stories/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Avatar:()=>Avatar,AvatarGroup:()=>AvatarGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/assets/images/avatar.jpg")),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var image={src:_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__,alt:"my image"};const __WEBPACK_DEFAULT_EXPORT__={title:"Avatar",component:_index__WEBPACK_IMPORTED_MODULE_3__.euF,argTypes:{color:{options:["default","purple","blue","green","red"],control:{type:"radio"}},type:{options:["","count"],control:{type:"radio"}},size:{options:["xlarge","large","medium","small","xsmall","xxsmall"],control:{type:"radio"}}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.euF,_objectSpread({},args))};Template.displayName="Template";var Avatar=Template.bind({});Avatar.args={initials:"AG",color:"default",size:"large",isEditable:!0,imagePath:image.src,onAvatarChange:function onAvatarChange(file){console.log(file)}};var Avatars=[{initials:"G M",tooltipContent:"G M"},{imagePath:image.src,tooltipContent:"AVATAR"},{initials:"T M",tooltipContent:"T M"},{imagePath:image.src},{initials:"T M"},{imagePath:image.src},{initials:"T M"},{imagePath:image.src},{imagePath:image.src,tooltipContent:"AVATAR"},{initials:"T M",tooltipContent:"T M"}],AvatarGroupTemplate=function AvatarGroupTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z73,_objectSpread({},args))};AvatarGroupTemplate.displayName="AvatarGroupTemplate";var AvatarGroup=AvatarGroupTemplate.bind({});AvatarGroup.args={maxCount:0,size:"medium",onAddUser:function onAddUser(){console.log("add user")},avatarGroup:Avatars};const __namedExportsOrder=["Avatar","AvatarGroup"]},"./src/assets/images/avatar.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/avatar.bf272857.jpg"}}]);