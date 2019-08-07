"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function s(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,o){return t&&s(e.prototype,t),o&&s(e,o),e}}(),_get=function e(t,o,s){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,o,s)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(s):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../npm/classnames/index.js"),_index4=_interopRequireDefault(_index3),_base=require("../../../bases/base.js"),_base2=_interopRequireDefault(_base);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var EditBox=(_temp2=_class=function(){function i(){var e,t,o;_classCallCheck(this,i);for(var s=arguments.length,r=Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=o=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r)))).$usedState=["colorInfo","sizeInfo","wpClass","aniClass","sku","colorValue","sizeValue","showColorValue","showSizeValue","isClose","editSkuData"],o.customComponents=[],_possibleConstructorReturn(o,t)}return _inherits(i,_base2.default),_createClass(i,[{key:"_constructor",value:function(){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).apply(this,arguments),this.state={showColorValue:"",showSizeValue:"",isClose:!1},this.$$refs=[]}},{key:"onAnimationEnd",value:function(){this.state.isClose&&(this.setState({isClose:!1}),this.props.onHideEditBox())}},{key:"runCloseAni",value:function(){this.setState({isClose:!0})}},{key:"selectAttr",value:function(e,t){"color"===e?this.setState({showColorValue:t}):"size"===e&&this.setState({showSizeValue:t})}},{key:"changeCartAttr",value:function(){var e=this.props.editSkuData,t=this.state,o=t.showColorValue,s=t.showSizeValue,r=e.sku,n=[{skuId:r.skuId,color:o||r.colorInfo.value,size:s||r.sizeInfo.value}];this.runCloseAni(),(o||s)&&_index2.default.eventCenter.trigger("onFetchChangeAttr",n)}},{key:"_createData",value:function(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;var s=this.__state,r=s.isClose,n=s.showColorValue,i=s.showSizeValue,a=this.__props.editSkuData,u=a.showEidtBox,l=a.sku,c=l||{},p=c.colorInfo,_=c.sizeInfo,f=n||p&&p.value,h=i||_&&_.value,d=(0,_index4.default)("editbox bg_shade",{show:u},{fade:r}),C=(0,_index4.default)("editbox_content",{show_wp:!r&&u},{hide_wp:r});return Object.assign(this.__state,{colorInfo:p,sizeInfo:_,wpClass:d,aniClass:C,sku:l,colorValue:f,sizeValue:h}),this.__state}}]),i}(),_class.$$events=["onAnimationEnd","runCloseAni","selectAttr","changeCartAttr"],_class.$$componentPath="components/cart/edit-box/index",_temp2);EditBox.defaultProps={editSkuData:{showEidtBox:!1}},exports.default=EditBox,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(EditBox));