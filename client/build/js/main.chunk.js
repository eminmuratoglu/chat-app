(this["webpackJsonpchat-app"] = this["webpackJsonpchat-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chat.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Chat.css ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".chat_container {\n\tfont-family: 'Ubuntu', sans-serif;\n\tmargin: 5rem auto 0;\n\tmax-width: 60rem;\n\tdisplay: grid;\n\tgrid-template-columns: 15rem 40rem;\n\tgrid-gap: 1.2rem;\n\tjustify-content: center;\n\talign-items: start;\n}\n\n.chat-users {\n\tpadding: 1rem;\n}\n.chat-users--header {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-gap: 0.3rem;\n\tgap: 0.3rem;\n\tborder-bottom: 1px solid #fff;\n\tmargin-bottom: 1rem;\n}\n.chat-users--header img {\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n}\n.chat-users h3 {\n\tmargin: 0;\n}\n.users-each {\n\tdisplay: flex;\n\t/* justify-content: flex-start; */\n\talign-items: center;\n\tgrid-gap: 0.1rem;\n\tgap: 0.1rem;\n}\n.chat-users p {\n\t/* margin: 0 0 0.5rem; */\n\tmargin: 0;\n}\n.chat-users,\n.chat-message-box {\n\toverflow-y: scroll;\n\tcolor: #fff;\n\theight: 70vh;\n\tbackground: linear-gradient(45deg, rgba(189, 203, 39, 1) 0%, rgba(27, 194, 219, 1) 100%);\n\tborder-radius: 0.5rem;\n}\n\n.chat-message-box {\n\tpadding: 1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.message_container {\n\tmargin: 0 0 0.5rem;\n}\n.message_container .message {\n\twidth: max-content;\n\tmax-width: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 0.7rem 0.4rem;\n\tborder-radius: 0.5rem 0;\n}\n\n.send-message__container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgrid-gap: 0.3rem;\n\tgap: 0.3rem;\n}\n.send-message__input {\n\twidth: 100%;\n}\n@media only screen and (max-width: 900px) {\n\t.chat_container {\n\t\tgrid-template-columns: 95vw;\n\t\tmargin: 4.5rem auto 0;\n\t}\n\t.chat-message-box {\n\t\tgrid-row: 1;\n\t\theight: 80vh;\n\t}\n}\n", "",{"version":3,"sources":["webpack://src/components/Chat.css"],"names":[],"mappings":"AAAA;CACC,iCAAiC;CACjC,mBAAmB;CACnB,gBAAgB;CAChB,aAAa;CACb,kCAAkC;CAClC,gBAAgB;CAChB,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;CACC,aAAa;AACd;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,gBAAW;CAAX,WAAW;CACX,6BAA6B;CAC7B,mBAAmB;AACpB;AACA;CACC,uBAAkB;CAAlB,kBAAkB;AACnB;AACA;CACC,SAAS;AACV;AACA;CACC,aAAa;CACb,iCAAiC;CACjC,mBAAmB;CACnB,gBAAW;CAAX,WAAW;AACZ;AACA;CACC,wBAAwB;CACxB,SAAS;AACV;AACA;;CAEC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,wFAAwF;CACxF,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,8BAA8B;AAC/B;;AAEA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,eAAe;CACf,oCAAoC;CACpC,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,gBAAW;CAAX,WAAW;AACZ;AACA;CACC,WAAW;AACZ;AACA;CACC;EACC,2BAA2B;EAC3B,qBAAqB;CACtB;CACA;EACC,WAAW;EACX,YAAY;CACb;AACD","sourcesContent":[".chat_container {\n\tfont-family: 'Ubuntu', sans-serif;\n\tmargin: 5rem auto 0;\n\tmax-width: 60rem;\n\tdisplay: grid;\n\tgrid-template-columns: 15rem 40rem;\n\tgrid-gap: 1.2rem;\n\tjustify-content: center;\n\talign-items: start;\n}\n\n.chat-users {\n\tpadding: 1rem;\n}\n.chat-users--header {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 0.3rem;\n\tborder-bottom: 1px solid #fff;\n\tmargin-bottom: 1rem;\n}\n.chat-users--header img {\n\twidth: fit-content;\n}\n.chat-users h3 {\n\tmargin: 0;\n}\n.users-each {\n\tdisplay: flex;\n\t/* justify-content: flex-start; */\n\talign-items: center;\n\tgap: 0.1rem;\n}\n.chat-users p {\n\t/* margin: 0 0 0.5rem; */\n\tmargin: 0;\n}\n.chat-users,\n.chat-message-box {\n\toverflow-y: scroll;\n\tcolor: #fff;\n\theight: 70vh;\n\tbackground: linear-gradient(45deg, rgba(189, 203, 39, 1) 0%, rgba(27, 194, 219, 1) 100%);\n\tborder-radius: 0.5rem;\n}\n\n.chat-message-box {\n\tpadding: 1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.message_container {\n\tmargin: 0 0 0.5rem;\n}\n.message_container .message {\n\twidth: max-content;\n\tmax-width: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tpadding: 0.7rem 0.4rem;\n\tborder-radius: 0.5rem 0;\n}\n\n.send-message__container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 0.3rem;\n}\n.send-message__input {\n\twidth: 100%;\n}\n@media only screen and (max-width: 900px) {\n\t.chat_container {\n\t\tgrid-template-columns: 95vw;\n\t\tmargin: 4.5rem auto 0;\n\t}\n\t.chat-message-box {\n\t\tgrid-row: 1;\n\t\theight: 80vh;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Forms.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Forms.css ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home__container {\n\tmargin: 5vh auto 0;\n\tbackground: linear-gradient(225deg, rgba(189, 203, 39, 1) 0%, rgba(27, 194, 219, 1) 100%);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tmax-width: 60rem;\n\tgrid-gap: 1rem;\n\tgap: 1rem;\n\tfont-family: 'Ubuntu', sans-serif;\n\tjustify-items: center;\n\tborder-radius: 0.5rem;\n}\n\n.home__container--form-header {\n\tgrid-column: 1 / -1;\n\tcolor: #fff;\n\tfont-weight: lighter;\n}\n\n.home__container--form {\n\tmargin: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\ttext-align: center;\n\twidth: 85%;\n\tgrid-gap: 1rem;\n\tgap: 1rem;\n}\n.home__container--form p {\n\ttext-align: left;\n\tmargin: 0 0 1rem;\n}\n\n@media only screen and (max-width: 900px) {\n\t.home__container {\n\t\tgrid-template-columns: 1fr;\n\t\talign-items: center;\n\t\tmargin: 0 auto;\n\t\tgrid-gap: 0;\n\t\tgap: 0;\n\t\tborder-radius: 0;\n\t\tbackground: none;\n\t\theight: 100vh;\n\t}\n\t.home__container img {\n\t\twidth: 20rem;\n\t}\n\t.home__container--form {\n\t\talign-self: flex-start;\n\t\twidth: 90%;\n\t}\n\t.home__container--form-header {\n\t\tmargin: 0;\n\t}\n}\n", "",{"version":3,"sources":["webpack://src/components/Forms.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,yFAAyF;CACzF,aAAa;CACb,8BAA8B;CAC9B,gBAAgB;CAChB,cAAS;CAAT,SAAS;CACT,iCAAiC;CACjC,qBAAqB;CACrB,qBAAqB;AACtB;;AAEA;CACC,mBAAmB;CACnB,WAAW;CACX,oBAAoB;AACrB;;AAEA;CACC,SAAS;CACT,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB,UAAU;CACV,cAAS;CAAT,SAAS;AACV;AACA;CACC,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC;EACC,0BAA0B;EAC1B,mBAAmB;EACnB,cAAc;EACd,WAAM;EAAN,MAAM;EACN,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;CACd;CACA;EACC,YAAY;CACb;CACA;EACC,sBAAsB;EACtB,UAAU;CACX;CACA;EACC,SAAS;CACV;AACD","sourcesContent":[".home__container {\n\tmargin: 5vh auto 0;\n\tbackground: linear-gradient(225deg, rgba(189, 203, 39, 1) 0%, rgba(27, 194, 219, 1) 100%);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tmax-width: 60rem;\n\tgap: 1rem;\n\tfont-family: 'Ubuntu', sans-serif;\n\tjustify-items: center;\n\tborder-radius: 0.5rem;\n}\n\n.home__container--form-header {\n\tgrid-column: 1 / -1;\n\tcolor: #fff;\n\tfont-weight: lighter;\n}\n\n.home__container--form {\n\tmargin: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\ttext-align: center;\n\twidth: 85%;\n\tgap: 1rem;\n}\n.home__container--form p {\n\ttext-align: left;\n\tmargin: 0 0 1rem;\n}\n\n@media only screen and (max-width: 900px) {\n\t.home__container {\n\t\tgrid-template-columns: 1fr;\n\t\talign-items: center;\n\t\tmargin: 0 auto;\n\t\tgap: 0;\n\t\tborder-radius: 0;\n\t\tbackground: none;\n\t\theight: 100vh;\n\t}\n\t.home__container img {\n\t\twidth: 20rem;\n\t}\n\t.home__container--form {\n\t\talign-self: flex-start;\n\t\twidth: 90%;\n\t}\n\t.home__container--form-header {\n\t\tmargin: 0;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\n*,\n*::before,\n*::afer {\n\tbox-sizing: border-box;\n}\n@media only screen and (max-width: 900px) {\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground: linear-gradient(225deg, rgba(189, 203, 39, 1) 0%, rgba(27, 194, 219, 1) 100%);\n\t\tbackground-size: cover;\n\t}\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;;;;CAIC,sBAAsB;AACvB;AACA;CACC;EACC,SAAS;EACT,UAAU;EACV,yFAAyF;EACzF,sBAAsB;CACvB;AACD","sourcesContent":["html,\n*,\n*::before,\n*::afer {\n\tbox-sizing: border-box;\n}\n@media only screen and (max-width: 900px) {\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground: linear-gradient(225deg, rgba(189, 203, 39, 1) 0%, rgba(27, 194, 219, 1) 100%);\n\t\tbackground-size: cover;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Chat */ "./src/components/Chat.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/eminm/Desktop/my exercises/JS/portfolio/chat-app/client/src/App.js";





function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "App",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Chat__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App); // const getSecretData = async () => {
// 	try {
// 		const res = await axiosJWT.get('/secret', {
// 			headers: {
// 				authorization: `Bearer ${user.accessToken}`
// 			}
// 		});
// 		setSecret(res.data);
// 		console.log(user);
// 	} catch (error) {
// 		setSecret('not allowed');
// 		console.log('error occured :(', error);
// 		console.log(user);
// 	}
// };

/***/ }),

/***/ "./src/components/Chat.css":
/*!*********************************!*\
  !*** ./src/components/Chat.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Chat.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chat.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Chat.js":
/*!********************************!*\
  !*** ./src/components/Chat.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopBar */ "./src/components/TopBar.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Send */ "./node_modules/@mui/icons-material/Send.js");
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _Chat_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Chat.css */ "./src/components/Chat.css");
/* harmony import */ var _Chat_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Chat_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Routes */ "./src/components/Routes.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/eminm/Desktop/my exercises/JS/portfolio/chat-app/client/src/components/Chat.js";













function Chat() {
  const [messages, setMessages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [users, setUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [inputText, setInputText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_10__["io"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    socket.on('getMessage', newMsg => {
      setMessages(prev => [...prev, newMsg]);
    });
    getUsers();
    getMessages();
    return () => {
      // socket.emit('disconnect');
      socket.off();
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getUsers();
    getMessages();
  }, [user]);
  const axiosJWT = axios__WEBPACK_IMPORTED_MODULE_9___default.a.create();

  const handleChange = e => {
    setInputText(e.target.value);
  };

  const getMessages = async () => {
    if (user) {
      const response = await axiosJWT.get('api/messages', {
        headers: {
          authorization: `Bearer ${user.accessToken}`
        }
      });
      setMessages(response.data);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (user && inputText.trim()) {
      let newMsg = {
        text: inputText,
        user_id: user.id,
        username: user.username
      };
      axiosJWT.post('api/messages', newMsg, {
        headers: {
          authorization: `Bearer ${user.accessToken}`
        }
      });
      socket.emit('sendMessage', newMsg);
    }

    setInputText('');
  };

  const getUsers = async () => {
    try {
      if (user) {
        const response = await axiosJWT.get('api/users', {
          headers: {
            authorization: `Bearer ${user.accessToken}`
          }
        });
        setUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }; ////////////////////////////////////


  const handleUser = user => {
    setUser(user);
  };

  const fetchRefreshToken = async () => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/api/auth/refresh_token', {
        mode: 'cors',
        credentials: 'include'
      });
      setUser({ ...user,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  axiosJWT.interceptors.request.use(async config => {
    let currentDate = new Date();
    const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_8__["default"])(user.accessToken);

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      const data = await fetchRefreshToken();
      config.headers['authorization'] = `Bearer ${data.accessToken}`;
    }

    return config;
  }, error => {
    return Promise.reject(error);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    children: [user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_TopBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        user: user,
        handleUser: handleUser
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        className: "chat_container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          className: "chat-users",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "chat-users--header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
              src: "https://img.icons8.com/color-glass/48/000000/group.png",
              width: "30",
              alt: "users png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h3", {
              children: "All Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 8
          }, this), users.map(user => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "users-each",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                src: "https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-user-back-to-school-kmg-design-flat-kmg-design.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
                children: user.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 11
              }, this)]
            }, user.id, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 10
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          className: "chat-message-box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "chat-message-box__messages",
            children: messages && messages.map((msg, i) => {
              let currentUser = users.find(user => user.id === msg.user_id);
              let userName = currentUser ? currentUser.username : '!';
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "message_container",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("strong", {
                  className: "username",
                  children: msg.username ? msg.username : userName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  className: "message",
                  children: [" ", msg.text, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 13
                }, this)]
              }, msg.id ? msg.id : `${user.username}-${i}`, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 12
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("form", {
            className: "send-message__container",
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "send-message__input",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
                id: "full-width-text-field",
                placeholder: "Type message",
                variant: "outlined",
                fullWidth: true,
                value: inputText,
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: "submit",
              "aria-label": "send",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      exact: true,
      to: "/login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Routes__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isLoggedOut: !user,
      handleUser: handleUser
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./src/components/Forms.css":
/*!**********************************!*\
  !*** ./src/components/Forms.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Forms.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Forms.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/LoginForm.js":
/*!*************************************!*\
  !*** ./src/components/LoginForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _Forms_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Forms.css */ "./src/components/Forms.css");
/* harmony import */ var _Forms_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Forms_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_web_chat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/web-chat.png */ "./src/components/images/web-chat.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/eminm/Desktop/my exercises/JS/portfolio/chat-app/client/src/components/LoginForm.js";









function LoginForm(props) {
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); // const [ error, setError ] = useState(false);
  // const [ success, setSuccess ] = useState(false);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.handleUser(user);
  }, [user]);

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/auth/login', {
        username,
        password
      });
      setUser(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return !user || props.isLoggedOut ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "home__container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
      src: _images_web_chat_png__WEBPACK_IMPORTED_MODULE_6__["default"],
      alt: "web-chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
      className: "home__container--form",
      onSubmit: handleLogin,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
        className: "home__container--form-header",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        required: true,
        id: "outlined",
        label: "Username",
        type: "text",
        value: username,
        onChange: e => setUsername(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        required: true,
        id: "outlined-password-input",
        label: "Password",
        type: "password",
        value: password,
        onChange: e => setPassword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "contained",
        color: "primary",
        type: "submit",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
        children: ["Don't have an account yet?", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          exact: true,
          to: "/register",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }, this) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/components/RegistrationForm.js":
/*!********************************************!*\
  !*** ./src/components/RegistrationForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _Forms_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Forms.css */ "./src/components/Forms.css");
/* harmony import */ var _Forms_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Forms_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_web_chat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/web-chat.png */ "./src/components/images/web-chat.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/eminm/Desktop/my exercises/JS/portfolio/chat-app/client/src/components/RegistrationForm.js";









function RegistrationForm(_ref) {
  let {
    isLoggedOut
  } = _ref;
  const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [registrationSuccess, setRegistrationSuccess] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isLoggedOut);

  const handleRegister = async e => {
    e.preventDefault();

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/users', {
        username,
        password
      });
      console.log(res.data);
      setRegistrationSuccess(true);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /*#__PURE__*/
    // <div className="registrationContainer">
    // 	<h2>Registration</h2>
    // 	<form className="registrationForm" onSubmit={handleRegister}>
    // 		<label>Username</label>
    // 		<input
    // 			type="text"
    // 			placeholder="username"
    // 			name="username"
    // 			value={username}
    // 			onChange={(e) => setUsername(e.target.value)}
    // 		/>
    // 		<label>Password</label>
    // 		<input
    // 			type="password"
    // 			placeholder="password"
    // 			name="username"
    // 			value={password}
    // 			onChange={(e) => setPassword(e.target.value)}
    // 		/>
    // 		<button type="submit">Register</button>
    // 		<p>
    // 			Already have an account?{' '}
    // 			<NavLink exact to="/login">
    // 				Log in
    // 			</NavLink>
    // 		</p>
    // 		{registrationSuccess ? <Redirect exact to="/login" /> : null}
    // 	</form>
    // </div>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "home__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
        src: _images_web_chat_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        alt: "web-chat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 4
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
        className: "home__container--form",
        onSubmit: handleRegister,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
          className: "home__container--form-header",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
          required: true,
          id: "outlined",
          label: "Username",
          type: "text",
          value: username,
          onChange: e => setUsername(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
          required: true,
          id: "outlined-password-input",
          label: "Password",
          type: "password",
          value: password,
          onChange: e => setPassword(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "contained",
          color: "primary",
          type: "submit",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          children: ["Already have an account?", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
            exact: true,
            to: "/login",
            children: "Log in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 5
        }, this), registrationSuccess ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          exact: true,
          to: "/login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 28
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 3
    }, this)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (RegistrationForm);

/***/ }),

/***/ "./src/components/Routes.js":
/*!**********************************!*\
  !*** ./src/components/Routes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _RegistrationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrationForm */ "./src/components/RegistrationForm.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginForm */ "./src/components/LoginForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/eminm/Desktop/my exercises/JS/portfolio/chat-app/client/src/components/Routes.js";






function Routes(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/register",
      render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_RegistrationForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isLoggedOut: props.isLoggedOut
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 48
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/login",
      render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isLoggedOut: props.isLoggedOut,
        handleUser: props.handleUser
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/components/TopBar.js":
/*!**********************************!*\
  !*** ./src/components/TopBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/eminm/Desktop/my exercises/JS/portfolio/chat-app/client/src/components/TopBar.js";
// import * as React from 'react';








function TopBar(props) {
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.handleUser(user);
  }, [user]);

  const logout = () => {
    deleteToken();
    setUser(null);
  };

  const deleteToken = async () => {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('/api/auth/logout');
    console.log(response.data.message);
    return response;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        backgroundColor: 'rgb(100,150,90'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h6",
        component: "div",
        sx: {
          marginRight: 2
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          width: "40",
          src: "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-chat-multimedia-kiranshastry-gradient-kiranshastry.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          fontWeight: 'lighter'
        },
        variant: "h6",
        component: "div",
        sx: {
          flexGrow: 1
        },
        children: user && `Welcome, ${user.username}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "inherit",
        onClick: logout,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          width: "35",
          src: "https://img.icons8.com/fluency/48/000000/shutdown.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, this), "Logout"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./src/components/images/web-chat.png":
/*!********************************************!*\
  !*** ./src/components/images/web-chat.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "media/web-chat.40fa3d34.png");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/eminm/Desktop/my exercises/JS/portfolio/chat-app/client/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 2
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/eminm/Desktop/my exercises/JS/portfolio/chat-app/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/eminm/Desktop/my exercises/JS/portfolio/chat-app/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map