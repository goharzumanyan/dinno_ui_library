"use strict";(self.webpackChunkdinno_ui_lib=self.webpackChunkdinno_ui_lib||[]).push([[1850],{"./src/stories/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal,ModalConfirmation:()=>ModalConfirmation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),_components_SVGIcons_IconDelete__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/SVGIcons/IconDelete.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Modal",component:_index__WEBPACK_IMPORTED_MODULE_2__.aFV,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}},type:{options:["secondary","danger","warning","success","brand","information"],control:{type:"radio"}}}};var Template=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.A)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],closeModal=function closeModal(){return setIsOpen(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{onClick:function openModal(){return setIsOpen(!0)},children:"click here "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.aFV,_objectSpread(_objectSpread({},args),{},{onClose:closeModal,isOpen,onSubmit:function onSubmit(){closeModal(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:"Modal content"})}))]})};Template.displayName="Template";var Modal=Template.bind({});Modal.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};var ModalConfirmationTemplate=function ModalConfirmationTemplate(args){var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState4=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.A)(_useState3,2),isOpen=_useState4[0],setIsOpen=_useState4[1],closeModal=function closeModal(){return setIsOpen(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{onClick:function openModal(){return setIsOpen(!0)},children:"click here "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.pfk,_objectSpread(_objectSpread({},args),{},{iconProps:{Component:_components_SVGIcons_IconDelete__WEBPACK_IMPORTED_MODULE_3__.A,type:"warning"},onClose:closeModal,isOpen,onSubmit:function onSubmit(){closeModal(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}}))]})};ModalConfirmationTemplate.displayName="ModalConfirmationTemplate";var ModalConfirmation=ModalConfirmationTemplate.bind({});ModalConfirmation.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};const __namedExportsOrder=["Modal","ModalConfirmation"]}}]);