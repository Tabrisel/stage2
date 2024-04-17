/******/ (() => {
    // webpackBootstrap
    /******/ 'use strict';
    /******/ var __webpack_modules__ = {
        /***/ './src/styles/main.scss':
            /*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                // extracted by mini-css-extract-plugin

                /***/
            },

        /***/ './src/components/InputElement.ts':
            /*!****************************************!*\
  !*** ./src/components/InputElement.ts ***!
  \****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var _creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./creatorElement */ './src/components/creatorElement.ts'
                );

                class InputCreatorElement extends _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default'] {
                    constructor(options) {
                        super(options);
                        if (options.pattern) {
                            this.setAttribute('pattern', options.pattern);
                        }
                        if (options.title) {
                            this.setAttribute('title', options.title);
                        }
                    }
                }
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = InputCreatorElement;

                /***/
            },

        /***/ './src/components/button.ts':
            /*!**********************************!*\
  !*** ./src/components/button.ts ***!
  \**********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var _creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./creatorElement */ './src/components/creatorElement.ts'
                );

                const buttonSubmit = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                    tag: 'button',
                    className: ['button'],
                    attribute: { name: 'type', value: 'submit' },
                    content: 'Login',
                });
                buttonSubmit.setAttribute('disabled', '');
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = buttonSubmit;

                /***/
            },

        /***/ './src/components/creatorElement.ts':
            /*!******************************************!*\
  !*** ./src/components/creatorElement.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ CreatorElement,
                    /* harmony export */
                });
                class CreatorElement {
                    constructor(options) {
                        this.element = document.createElement(options.tag);
                        this.setClass(options.className);
                        if (options.attribute) {
                            this.setAttribute(options.attribute.name, options.attribute.value);
                        }
                        this.setContent(options.content);
                        this.setCallback(options.callback);
                    }
                    getElement() {
                        return this.element;
                    }
                    setContent(content = '') {
                        this.element.textContent = content;
                    }
                    setAttribute(attributeName, attributeValue) {
                        this.element.setAttribute(attributeName, attributeValue || '');
                    }
                    removeAttribute(attributeName) {
                        this.element.removeAttribute(attributeName);
                    }
                    setCallback(callback) {
                        if (callback) {
                            this.element.addEventListener('click', callback);
                        }
                    }
                    setClass(className) {
                        if (className) {
                            this.element.classList.add(...className);
                        }
                    }
                    append(...children) {
                        children.forEach((child) => {
                            this.element.appendChild(child);
                        });
                    }
                    getHTMLInputValue() {
                        if (this.element instanceof HTMLInputElement) {
                            return this.element.value;
                        }
                        return null;
                    }
                }

                /***/
            },

        /***/ './src/components/form.ts':
            /*!********************************!*\
  !*** ./src/components/form.ts ***!
  \********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../service/userPage/localStorage */ './src/service/userPage/localStorage.ts'
                    );
                /* harmony import */ var _creatorElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./creatorElement */ './src/components/creatorElement.ts'
                );
                /* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./inputs */ './src/components/inputs.ts'
                );
                /* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./button */ './src/components/button.ts'
                );

                const formElement = new _creatorElement__WEBPACK_IMPORTED_MODULE_1__['default']({
                    tag: 'form',
                    className: ['loginForm'],
                }).getElement();
                formElement.addEventListener(
                    'submit',
                    _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_0__.handleSubmit
                );
                const elementsToAdd = [
                    _inputs__WEBPACK_IMPORTED_MODULE_2__.labelName,
                    _inputs__WEBPACK_IMPORTED_MODULE_2__.inputName,
                    _inputs__WEBPACK_IMPORTED_MODULE_2__.labelLastName,
                    _inputs__WEBPACK_IMPORTED_MODULE_2__.inputLastName,
                    _button__WEBPACK_IMPORTED_MODULE_3__['default'].getElement(),
                ];
                elementsToAdd.forEach((element) => formElement.appendChild(element));
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = formElement;

                /***/
            },

        /***/ './src/components/gameButtons.ts':
            /*!***************************************!*\
  !*** ./src/components/gameButtons.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ ButtonsGameComponent,
                    /* harmony export */
                });
                /* harmony import */ var _service_gamePage_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../service/gamePage/cards */ './src/service/gamePage/cards.ts'
                );

                class ButtonsGameComponent {
                    constructor() {
                        this.gameButtons = document.createElement('div');
                        this.gameButtons.className = 'gameButtons';
                        const checkButton = document.createElement('button');
                        checkButton.textContent = 'Check';
                        checkButton.className = 'checkButton';
                        checkButton.setAttribute('disabled', '');
                        checkButton.addEventListener(
                            'click',
                            _service_gamePage_cards__WEBPACK_IMPORTED_MODULE_0__.checkSentence
                        );
                        const continueButton = document.createElement('button');
                        continueButton.textContent = 'Continue';
                        continueButton.className = 'continueButton';
                        continueButton.setAttribute('disabled', '');
                        continueButton.addEventListener(
                            'click',
                            _service_gamePage_cards__WEBPACK_IMPORTED_MODULE_0__.handleContinueButtonClick
                        );
                        const autoButton = document.createElement('button');
                        autoButton.textContent = 'Auto-Complete';
                        autoButton.className = 'autoButton';
                        autoButton.addEventListener('click', () =>
                            (0, _service_gamePage_cards__WEBPACK_IMPORTED_MODULE_0__.handleAutoButtonClick)(autoButton)
                        );
                        this.gameButtons.appendChild(continueButton);
                        this.gameButtons.appendChild(checkButton);
                        this.gameButtons.appendChild(autoButton);
                    }
                    render(parent) {
                        parent.appendChild(this.gameButtons);
                    }
                }

                /***/
            },

        /***/ './src/components/header.ts':
            /*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ HeaderComponent,
                    /* harmony export */
                });
                /* harmony import */ var _creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./creatorElement */ './src/components/creatorElement.ts'
                );
                /* harmony import */ var _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../service/userPage/localStorage */ './src/service/userPage/localStorage.ts'
                    );

                class HeaderComponent {
                    constructor() {
                        this.greetings = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'h2',
                            content: `It’s good to see you, ${(0, _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_1__.getUserData)().userName} ${(0, _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_1__.getUserData)().userSurname}!`,
                        }).getElement();
                        this.logoutButton = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'button',
                            className: ['button-exit'],
                            content: 'Logout',
                        }).getElement();
                        this.logoutButton.addEventListener(
                            'click',
                            _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_1__.handleLogout
                        );
                    }
                    render(parent) {
                        let headerElement = parent.querySelector('header');
                        if (!headerElement) {
                            headerElement = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                                tag: 'header',
                            }).getElement();
                            headerElement.appendChild(this.greetings);
                            headerElement.appendChild(this.logoutButton);
                            parent.appendChild(headerElement);
                        }
                    }
                }

                /***/
            },

        /***/ './src/components/hintButtons.ts':
            /*!***************************************!*\
  !*** ./src/components/hintButtons.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ HintButtons,
                    /* harmony export */
                });
                /* harmony import */ var _creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./creatorElement */ './src/components/creatorElement.ts'
                );
                /* harmony import */ var _service_gamePage_hints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../service/gamePage/hints */ './src/service/gamePage/hints.ts'
                );
                /* harmony import */ var _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../service/userPage/localStorage */ './src/service/userPage/localStorage.ts'
                    );

                class HintButtons {
                    constructor() {
                        this.hintButtons = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'div',
                            className: ['hintButtons'],
                        }).getElement();
                        this.logoutButton = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'button',
                            className: ['button-exit'],
                            content: 'Logout',
                        }).getElement();
                        this.logoutButton.addEventListener(
                            'click',
                            _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_2__.handleLogout
                        );
                        this.iconSound = document.createElement('div');
                        this.iconSound.classList.add('iconSound');
                        this.iconTranslate = document.createElement('div');
                        this.iconTranslate.classList.add('iconTranslate');
                        this.iconTranslate.addEventListener('click', () =>
                            (0, _service_gamePage_hints__WEBPACK_IMPORTED_MODULE_1__.translateSwitch)(
                                this.iconTranslate
                            )
                        );
                        this.iconSound.addEventListener('click', () =>
                            (0, _service_gamePage_hints__WEBPACK_IMPORTED_MODULE_1__.soundSwitch)(this.iconSound)
                        );
                        this.hintButtons.append(this.iconSound);
                        this.hintButtons.append(this.iconTranslate);
                        this.hintButtons.append(this.logoutButton);
                    }
                    render(parent) {
                        parent.appendChild(this.hintButtons);
                    }
                }

                /***/
            },

        /***/ './src/components/inputs.ts':
            /*!**********************************!*\
  !*** ./src/components/inputs.ts ***!
  \**********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ inputLastName: () => /* binding */ inputLastName,
                    /* harmony export */ inputName: () => /* binding */ inputName,
                    /* harmony export */ labelLastName: () => /* binding */ labelLastName,
                    /* harmony export */ labelName: () => /* binding */ labelName,
                    /* harmony export */
                });
                /* harmony import */ var _creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./creatorElement */ './src/components/creatorElement.ts'
                );
                /* harmony import */ var _InputElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./InputElement */ './src/components/InputElement.ts'
                );
                /* harmony import */ var _service_loginPage_validation__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(/*! ../service/loginPage/validation */ './src/service/loginPage/validation.ts');
                // inputs.ts

                const labelName = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                    tag: 'label',
                    className: ['label'],
                    content: 'First Name:',
                    attribute: { name: 'for', value: 'inputName' },
                }).getElement();
                const labelLastName = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                    tag: 'label',
                    className: ['label'],
                    content: 'Surname:',
                    attribute: { name: 'for', value: 'inputLastName' },
                }).getElement();
                const inputName = new _InputElement__WEBPACK_IMPORTED_MODULE_1__['default']({
                    tag: 'input',
                    className: ['inputFields'],
                    attribute: { name: 'required' },
                    content: '',
                }).getElement();
                const inputLastName = new _InputElement__WEBPACK_IMPORTED_MODULE_1__['default']({
                    tag: 'input',
                    className: ['inputFields'],
                    attribute: { name: 'required' },
                    content: '',
                }).getElement();
                inputName.setAttribute('id', 'inputName');
                inputName.setAttribute('autocomplete', 'off');
                inputLastName.setAttribute('id', 'inputLastName');
                inputLastName.setAttribute('autocomplete', 'off');
                (0, _service_loginPage_validation__WEBPACK_IMPORTED_MODULE_2__.addInputEventListeners)(
                    inputName,
                    inputLastName
                );

                /***/
            },

        /***/ './src/components/targetContainer.ts':
            /*!*******************************************!*\
  !*** ./src/components/targetContainer.ts ***!
  \*******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ TargetContainer,
                    /* harmony export */
                });
                /* harmony import */ var _creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./creatorElement */ './src/components/creatorElement.ts'
                );

                class TargetContainer {
                    constructor() {
                        this.targetContainer = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'div',
                            className: ['targetContainer'],
                        }).getElement();
                        this.targetFields = [];
                        for (let i = 0; i < 10; i += 1) {
                            const targetField = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                                tag: 'div',
                                className: ['targetField'],
                            }).getElement();
                            this.targetFields.push(targetField);
                            this.targetContainer.appendChild(targetField);
                            this.targetFields[0].classList.add('target_active');
                        }
                    }
                    render(parent) {
                        parent.appendChild(this.targetContainer);
                    }
                    setInnerHTML() {
                        this.targetContainer.innerHTML = '';
                    }
                }

                /***/
            },

        /***/ './src/components/title.ts':
            /*!*********************************!*\
  !*** ./src/components/title.ts ***!
  \*********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ TitleComponent,
                    /* harmony export */
                });
                /* harmony import */ var _creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./creatorElement */ './src/components/creatorElement.ts'
                );

                class TitleComponent {
                    constructor() {
                        this.titleGame = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'div',
                            className: ['titleGame'],
                        }).getElement();
                        this.welcomeHeader = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'h1',
                            content: 'Welcome to RSS Puzzle!',
                        }).getElement();
                        this.describe = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'p',
                            content:
                                "It is an interactive mini-game aimed at enhancing English language skills. Players assemble sentences from jumbled words, inspired by Lingualeo's Phrase Constructor training. The game integrates various levels of difficulty, hint options, and a unique puzzle-like experience with artwork.",
                        }).getElement();
                        this.startButton = new _creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'button',
                            className: ['start-button'],
                            content: 'Start',
                        }).getElement();
                        this.titleGame.appendChild(this.welcomeHeader);
                        this.titleGame.appendChild(this.describe);
                        this.titleGame.appendChild(this.startButton);
                    }
                    render(parent) {
                        const titleGame = parent.querySelector('.titleGame');
                        if (!titleGame) {
                            parent.appendChild(this.titleGame);
                        }
                    }
                }

                /***/
            },

        /***/ './src/controller/app.ts':
            /*!*******************************!*\
  !*** ./src/controller/app.ts ***!
  \*******************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ loginPageView: () => /* binding */ loginPageView,
                    /* harmony export */ userPageView: () => /* binding */ userPageView,
                    /* harmony export */
                });
                /* harmony import */ var _utils_userState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../utils/userState */ './src/utils/userState.ts'
                );
                /* harmony import */ var _service_loginPage_loginPageInstance__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../service/loginPage/loginPageInstance */ './src/service/loginPage/loginPageInstance.ts'
                    );
                /* harmony import */ var _service_userPage_userPageInstance__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../service/userPage/userPageInstance */ './src/service/userPage/userPageInstance.ts'
                    );

                const loginPageView =
                    _service_loginPage_loginPageInstance__WEBPACK_IMPORTED_MODULE_1__['default'].getInstance();
                const userPageView =
                    _service_userPage_userPageInstance__WEBPACK_IMPORTED_MODULE_2__['default'].getInstance();
                if (!(0, _utils_userState__WEBPACK_IMPORTED_MODULE_0__['default'])()) {
                    if (loginPageView) {
                        loginPageView.render();
                    }
                } else {
                    userPageView.render();
                }

                /***/
            },

        /***/ './src/service/gamePage/cards.ts':
            /*!***************************************!*\
  !*** ./src/service/gamePage/cards.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ checkButtonState: () => /* binding */ checkButtonState,
                    /* harmony export */ checkSentence: () => /* binding */ checkSentence,
                    /* harmony export */ gamePageView: () => /* binding */ gamePageView,
                    /* harmony export */ handleAutoButtonClick: () => /* binding */ handleAutoButtonClick,
                    /* harmony export */ handleContinueButtonClick: () => /* binding */ handleContinueButtonClick,
                    /* harmony export */ handleContinueButtonState: () => /* binding */ handleContinueButtonState,
                    /* harmony export */ handleStartButtonClick: () => /* binding */ handleStartButtonClick,
                    /* harmony export */ insertWords: () => /* binding */ insertWords,
                    /* harmony export */
                });
                /* harmony import */ var _views_gamePageView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../../views/gamePageView */ './src/views/gamePageView.ts'
                );
                /* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./dataStorage */ './src/service/gamePage/dataStorage.ts'
                );
                /* harmony import */ var _controller_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../../controller/app */ './src/controller/app.ts'
                );
                /* harmony import */ var _utils_changeNodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../../utils/changeNodes */ './src/utils/changeNodes.ts'
                );
                var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                        function adopt(value) {
                            return value instanceof P
                                ? value
                                : new P(function (resolve) {
                                      resolve(value);
                                  });
                        }
                        return new (P || (P = Promise))(function (resolve, reject) {
                            function fulfilled(value) {
                                try {
                                    step(generator.next(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function rejected(value) {
                                try {
                                    step(generator['throw'](value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function step(result) {
                                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                            }
                            step((generator = generator.apply(thisArg, _arguments || [])).next());
                        });
                    };

                const userArray = [];
                const ACTIVE_CLASS_NAME = 'active';
                const gamePageView = new _views_gamePageView__WEBPACK_IMPORTED_MODULE_0__['default']();
                function handleContinueButtonState(continueButton, iconTranslate) {
                    const notActive = iconTranslate.classList.contains('notActive');
                    const iconSound = document.querySelector('.iconSound');
                    const soundTranslate = document.querySelector('.soundTranslate');
                    const notActiveSound = iconSound.classList.contains('notActive');
                    if (notActive) {
                        gamePageView.sentenceTranslate.classList.toggle('fallFromTop');
                    }
                    if (notActiveSound) {
                        soundTranslate.classList.toggle('appear');
                    }
                }
                function checkButtonState() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const loadedData = (0, _dataStorage__WEBPACK_IMPORTED_MODULE_1__.getLoadedData)();
                            if (loadedData) {
                                const { rightArray } = (0,
                                _dataStorage__WEBPACK_IMPORTED_MODULE_1__.getLoadedData)() || { rightArray: [] };
                                const userArrayLength = userArray.filter((item) => item !== '-').length;
                                const hasEmptyValue = userArray.includes('-');
                                const checkButton = document.querySelector('.checkButton');
                                const continueButton = document.querySelector('.continueButton');
                                if (rightArray.length === userArrayLength && !hasEmptyValue) {
                                    checkButton.disabled = false;
                                    checkButton.classList.add('shake');
                                } else {
                                    checkButton.disabled = true;
                                    checkButton.classList.remove('shake');
                                    continueButton.disabled = true;
                                }
                                const targetField = document.querySelector('.target_active');
                                const playerField = document.querySelector('.player-field');
                                if (targetField && playerField) {
                                    const wordCards = Array.from(targetField.children);
                                    wordCards.forEach((card) => {
                                        card.classList.remove('wrongAnswer');
                                    });
                                    const playerCards = Array.from(playerField.children);
                                    playerCards.forEach((card) => {
                                        card.classList.remove('wrongAnswer');
                                    });
                                }
                            } else {
                                console.error('Error fetching data: No data loaded');
                            }
                        } catch (error) {
                            console.error('Error fetching data:', error);
                        }
                    });
                }
                function disableAuto() {
                    const autoButton = document.querySelector('.autoButton');
                    if (autoButton) {
                        autoButton.disabled = true;
                    }
                }
                function checkSentence() {
                    const { rightArray } = (0, _dataStorage__WEBPACK_IMPORTED_MODULE_1__.getLoadedData)() || {
                        rightArray: [],
                    };
                    const userWordsCopy = [...userArray];
                    const wrongIndices = [];
                    rightArray.forEach((word, index) => {
                        if (userWordsCopy[index] !== word) {
                            wrongIndices.push(index);
                        }
                    });
                    const targetField = document.querySelector('.target_active');
                    if (targetField) {
                        const wordCards = Array.from(targetField.children);
                        wordCards.forEach((card, index) => {
                            if (wrongIndices.includes(index)) {
                                card.classList.add('wrongAnswer');
                            } else {
                                card.classList.remove('wrongAnswer');
                            }
                        });
                    }
                    const continueButton = document.querySelector('.continueButton');
                    const checkButton = document.querySelector('.checkButton');
                    if (continueButton) {
                        continueButton.disabled = wrongIndices.length !== 0;
                    }
                    if (wrongIndices.length === 0) {
                        disableAuto();
                        continueButton.classList.add('showButton');
                        checkButton.classList.add('hideButton');
                        const iconTranslate = document.querySelector('.iconTranslate');
                        handleContinueButtonState(continueButton, iconTranslate);
                    } else {
                        continueButton.classList.remove('showButton');
                        checkButton.classList.remove('hideButton');
                    }
                }
                function searchIndex(field, target) {
                    field.addEventListener('click', (event) => {
                        event.stopImmediatePropagation();
                        const wordCards = Array.from(field.children);
                        const clickedCard = event.target;
                        const index = wordCards.indexOf(clickedCard);
                        const targetActive = document.querySelector('.target_active');
                        if (targetActive) {
                            const firstEmptyElement = Array.from(targetActive.children).find((element) =>
                                element.classList.contains('empty')
                            );
                            if (firstEmptyElement && index !== -1 && clickedCard.classList.contains('wordCard')) {
                                const firstFreeIndex = userArray.indexOf('-');
                                if (firstFreeIndex !== -1) {
                                    userArray[firstFreeIndex] = clickedCard.innerText;
                                } else {
                                    userArray.push(clickedCard.innerText);
                                }
                                (0, _utils_changeNodes__WEBPACK_IMPORTED_MODULE_3__['default'])(
                                    clickedCard,
                                    firstEmptyElement
                                );
                                clickedCard.classList.add('wordCard');
                                clickedCard.classList.remove('empty');
                                firstEmptyElement.classList.add('empty');
                                firstEmptyElement.classList.remove('wordCard');
                                checkButtonState();
                                clickedCard.classList.add('fallFromTop');
                            } else {
                                console.error('Clicked card is not valid or not found.');
                                console.log(target);
                            }
                        } else {
                            console.error('Active targetField not found.');
                        }
                    });
                }
                function searchReverseIndex(field, target) {
                    target.addEventListener('click', (event) => {
                        event.stopImmediatePropagation();
                        const wordCards = Array.from(target.children);
                        const clickedCard = event.target;
                        const indexFindWord = userArray.indexOf(clickedCard.innerText);
                        if (indexFindWord !== -1 && clickedCard.classList.contains('wordCard')) {
                            userArray[indexFindWord] = '-';
                            const index = wordCards.indexOf(clickedCard);
                            if (index !== -1) {
                                const firstFreeIndex = Array.from(field.children).find((element) =>
                                    element.classList.contains('empty')
                                );
                                if (firstFreeIndex) {
                                    (0, _utils_changeNodes__WEBPACK_IMPORTED_MODULE_3__['default'])(
                                        clickedCard,
                                        firstFreeIndex
                                    );
                                    clickedCard.classList.add('wordCard');
                                    clickedCard.classList.remove('empty');
                                    firstFreeIndex.classList.add('empty');
                                    firstFreeIndex.classList.remove('wordCard');
                                }
                            }
                            checkButtonState();
                        }
                    });
                }
                function calculateAverageCardWidth(mixedWords, containerWidth) {
                    return containerWidth / mixedWords.reduce((acc, word) => acc + word.length, 0);
                }
                function createEmptyElement(word, totalExampleWordLength, containerWidth) {
                    const padding = 5;
                    const minCardWidth = 100;
                    const maxCardWidth = 200;
                    const fakeElement = document.createElement('div');
                    fakeElement.className = 'empty';
                    const fakeCardWidth = Math.max(
                        minCardWidth,
                        Math.min(maxCardWidth, (word.length / totalExampleWordLength) * (containerWidth - padding * 2))
                    );
                    fakeElement.style.width = `${fakeCardWidth}px`;
                    fakeElement.style.padding = `0 ${padding}px`;
                    return fakeElement;
                }
                function createWordCard(word, averageCardWidth, minCardWidth, maxCardWidth) {
                    const wordElement = document.createElement('div');
                    wordElement.textContent = word;
                    wordElement.className = 'wordCard';
                    const adjustedCardWidth = Math.min(
                        maxCardWidth,
                        Math.max(minCardWidth, word.length * averageCardWidth)
                    );
                    wordElement.style.width = `${adjustedCardWidth}px`;
                    return wordElement;
                }
                function insertWords(
                    mixedWords,
                    playerField,
                    targetField,
                    textExample,
                    textExampleTranslate,
                    containerWidth
                ) {
                    while (playerField.firstChild) {
                        playerField.removeChild(playerField.firstChild);
                    }
                    while (targetField.firstChild) {
                        targetField.removeChild(targetField.firstChild);
                    }
                    const exampleWords = textExample.split(' ');
                    const totalExampleWordLength = exampleWords.reduce((acc, word) => acc + word.length, 0);
                    const averageCardWidth = calculateAverageCardWidth(mixedWords, containerWidth);
                    exampleWords.forEach((word) => {
                        const fakeElement = createEmptyElement(word, totalExampleWordLength, containerWidth);
                        targetField.appendChild(fakeElement);
                    });
                    mixedWords.forEach((word) => {
                        const wordElement = createWordCard(word, averageCardWidth, 100, 200);
                        wordElement.classList.add('wordCard');
                        playerField.appendChild(wordElement);
                    });
                    gamePageView.sentenceTranslate.textContent = textExampleTranslate;
                    searchIndex(playerField, targetField);
                    searchReverseIndex(playerField, targetField);
                }
                function handleStartButtonClick() {
                    gamePageView.render();
                    (0, _dataStorage__WEBPACK_IMPORTED_MODULE_1__.fetchDataGame)();
                    _controller_app__WEBPACK_IMPORTED_MODULE_2__.userPageView.wrapper.classList.remove(
                        ACTIVE_CLASS_NAME
                    );
                }
                function animateWordCards(wordCards, targetField) {
                    wordCards.forEach((card) => {
                        card.classList.add('fall');
                        card.addEventListener('animationend', () => {
                            targetField.removeChild(card);
                        });
                    });
                }
                function processLoadedData(loadedData) {
                    const { rightArray } = loadedData;
                    const targetField = document.querySelector('.target_active');
                    const playerField = document.querySelector('.player-field');
                    const checkButton = document.querySelector('.checkButton');
                    const continueButton = document.querySelector('.continueButton');
                    if (targetField && playerField && checkButton && continueButton) {
                        const wordCards = Array.from(targetField.children);
                        animateWordCards(wordCards, targetField);
                        targetField.innerHTML = '';
                        setTimeout(() => {
                            rightArray.forEach((word) => {
                                const wordElement = createWordCard(word, 100, 100, 200);
                                wordElement.classList.add('fallFromTop');
                                targetField.appendChild(wordElement);
                            });
                            userArray.length = 0;
                            rightArray.forEach((word) => {
                                userArray.push(word);
                            });
                            checkButtonState();
                            const allElements = document.querySelectorAll('.player-field .wordCard');
                            const target = document.querySelector('.target_active');
                            allElements.forEach((element) => {
                                element.classList.add('cantMoveBlock');
                            });
                            if (target) {
                                target.querySelectorAll('div').forEach((item) => {
                                    item.classList.add('cantMove');
                                });
                            }
                            checkButton.classList.add('hideButton');
                            continueButton.classList.add('showButton');
                            continueButton.disabled = false;
                            const iconTranslate = document.querySelector('.iconTranslate');
                            handleContinueButtonState(continueButton, iconTranslate);
                        }, 500);
                    }
                }
                function handleAutoButtonClick(button) {
                    const loadedData = (0, _dataStorage__WEBPACK_IMPORTED_MODULE_1__.getLoadedData)();
                    const buttonToDisable = button;
                    if (loadedData) {
                        processLoadedData(loadedData);
                    }
                    buttonToDisable.disabled = true;
                }
                function handleContinueButtonClick() {
                    const autoButton = document.querySelector('.autoButton');
                    if (autoButton) {
                        autoButton.disabled = false;
                    }
                    (0, _dataStorage__WEBPACK_IMPORTED_MODULE_1__.nextLevel)();
                    checkButtonState();
                    userArray.length = 0;
                    const currentActiveTarget = document.querySelector('.target_active');
                    if (currentActiveTarget) {
                        currentActiveTarget.classList.remove('target_active');
                        const nextTarget = currentActiveTarget.nextElementSibling;
                        if (nextTarget) {
                            nextTarget.classList.add('target_active');
                        } else {
                            const firstTarget = document.querySelector('.target-field');
                            if (firstTarget) {
                                firstTarget.classList.add('target_active');
                            }
                        }
                    }
                    const checkButton = document.querySelector('.checkButton');
                    const continueButton = document.querySelector('.continueButton');
                    const iconTranslate = document.querySelector('.iconTranslate');
                    handleContinueButtonState(continueButton, iconTranslate);
                    if (checkButton) {
                        checkButton.disabled = true;
                    }
                    continueButton.classList.remove('showButton');
                    checkButton.classList.remove('hideButton');
                }

                /***/
            },

        /***/ './src/service/gamePage/dataStorage.ts':
            /*!*********************************************!*\
  !*** ./src/service/gamePage/dataStorage.ts ***!
  \*********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ clearAllTargetFields: () => /* binding */ clearAllTargetFields,
                    /* harmony export */ fetchDataGame: () => /* binding */ fetchDataGame,
                    /* harmony export */ getLoadedData: () => /* binding */ getLoadedData,
                    /* harmony export */ nextLevel: () => /* binding */ nextLevel,
                    /* harmony export */
                });
                /* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./cards */ './src/service/gamePage/cards.ts'
                );
                /* harmony import */ var _utils_mixArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../../utils/mixArray */ './src/utils/mixArray.ts'
                );
                var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                        function adopt(value) {
                            return value instanceof P
                                ? value
                                : new P(function (resolve) {
                                      resolve(value);
                                  });
                        }
                        return new (P || (P = Promise))(function (resolve, reject) {
                            function fulfilled(value) {
                                try {
                                    step(generator.next(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function rejected(value) {
                                try {
                                    step(generator['throw'](value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function step(result) {
                                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                            }
                            step((generator = generator.apply(thisArg, _arguments || [])).next());
                        });
                    };

                let loadedDataArray = [];
                let currentTargetFieldIndex = 0;
                function getLoadedData() {
                    return loadedDataArray[currentTargetFieldIndex] || null;
                }
                function clearAllTargetFields() {
                    _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.targetContainer.targetFields.forEach((field) => {
                        field.classList.remove('target_active');
                        while (field.firstChild) {
                            field.removeChild(field.firstChild);
                        }
                    });
                    const firstTarget =
                        _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.targetContainer.targetFields[0];
                    if (firstTarget) {
                        firstTarget.classList.add('target_active');
                        const loadedData = getLoadedData();
                        if (loadedData) {
                            const firstSentence = loadedData.textExample;
                            (0, _cards__WEBPACK_IMPORTED_MODULE_0__.insertWords)(
                                loadedData.mixedWords,
                                _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.playerField,
                                firstTarget,
                                firstSentence,
                                loadedData.textExampleTranslate,
                                700
                            );
                        }
                    }
                }
                function loadRandomRound() {
                    return __awaiter(this, void 0, void 0, function* () {
                        const response = yield fetch(
                            'https://raw.githubusercontent.com/Tabrisel/rss-puzzle-data/main/data/wordCollectionLevel1.json'
                        );
                        const { rounds } = yield response.json();
                        const randomRoundIndex = Math.floor(Math.random() * rounds.length);
                        const randomRound = rounds[randomRoundIndex];
                        const sentences = randomRound.words;
                        if (!sentences || sentences.length === 0) {
                            console.error('No sentences found in the round.');
                            return;
                        }
                        const selectedSentences = sentences.slice(0, 10);
                        loadedDataArray = selectedSentences.map((sentence) => {
                            const { textExample, audioExample, textExampleTranslate } = sentence;
                            const rightArray = sentence.textExample.split(' ');
                            const mixedWords = (0, _utils_mixArray__WEBPACK_IMPORTED_MODULE_1__['default'])(rightArray);
                            return { textExample, audioExample, textExampleTranslate, mixedWords, rightArray };
                        });
                    });
                }
                function updateGameView(loadedData) {
                    if (!loadedData) return;
                    _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.sentenceTranslate.textContent = '';
                    _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.sentenceTranslate.textContent =
                        loadedData.textExampleTranslate;
                    const firstSentence = loadedData.textExample;
                    (0, _cards__WEBPACK_IMPORTED_MODULE_0__.insertWords)(
                        loadedData.mixedWords,
                        _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.playerField,
                        _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.targetContainer.targetFields[
                            currentTargetFieldIndex
                        ],
                        firstSentence,
                        loadedData.textExampleTranslate,
                        700
                    );
                }
                function fetchDataGame() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            if (loadedDataArray.length === 0) {
                                yield loadRandomRound();
                                clearAllTargetFields();
                            }
                            const loadedData = loadedDataArray[currentTargetFieldIndex];
                            updateGameView(loadedData);
                            return loadedData;
                        } catch (error) {
                            console.error('Error fetching and parsing data:', error);
                            return null;
                        }
                    });
                }
                function nextLevel() {
                    currentTargetFieldIndex += 1;
                    if (currentTargetFieldIndex < loadedDataArray.length) {
                        const loadedData = loadedDataArray[currentTargetFieldIndex];
                        if (loadedData && loadedData.textExample) {
                            updateGameView(loadedData);
                        } else {
                            console.error('Loaded data or textExample is undefined.');
                        }
                    } else {
                        console.log('All levels completed!');
                        clearAllTargetFields();
                        loadedDataArray.splice(0, 10);
                        currentTargetFieldIndex = 0;
                        if (loadedDataArray.length === 0) {
                            fetchDataGame();
                        } else {
                            const loadedData = loadedDataArray[currentTargetFieldIndex];
                            if (loadedData && loadedData.textExample) {
                                updateGameView(loadedData);
                            } else {
                                console.error('Loaded data or textExample is undefined.');
                            }
                        }
                    }
                }

                /***/
            },

        /***/ './src/service/gamePage/hints.ts':
            /*!***************************************!*\
  !*** ./src/service/gamePage/hints.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ playSound: () => /* binding */ playSound,
                    /* harmony export */ soundSwitch: () => /* binding */ soundSwitch,
                    /* harmony export */ translateSwitch: () => /* binding */ translateSwitch,
                    /* harmony export */
                });
                /* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./cards */ './src/service/gamePage/cards.ts'
                );
                /* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./dataStorage */ './src/service/gamePage/dataStorage.ts'
                );

                function translateSwitch(iconTranslate) {
                    const notActive = iconTranslate.classList.contains('notActive');
                    if (!notActive) {
                        _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.sentenceTranslate.classList.remove(
                            'fallFromTop'
                        );
                        if (
                            _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.sentenceTranslate instanceof
                            HTMLInputElement
                        ) {
                            _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.sentenceTranslate.disabled = true;
                        }
                        iconTranslate.classList.add('notActive');
                    }
                    if (notActive) {
                        _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.sentenceTranslate.classList.add('fallFromTop');
                        if (
                            _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.sentenceTranslate instanceof
                            HTMLInputElement
                        ) {
                            _cards__WEBPACK_IMPORTED_MODULE_0__.gamePageView.sentenceTranslate.disabled = false;
                        }
                        iconTranslate.classList.remove('notActive');
                    }
                }
                function soundSwitch(iconSound) {
                    const notActive = iconSound.classList.contains('notActive');
                    const soundTranslate = document.querySelector('.soundTranslate');
                    if (!notActive) {
                        soundTranslate.classList.remove('appear');
                        if (soundTranslate) {
                            soundTranslate.disabled = true;
                        }
                        iconSound.classList.add('notActive');
                    }
                    if (notActive) {
                        soundTranslate.classList.add('appear');
                        if (soundTranslate) {
                            soundTranslate.disabled = false;
                        }
                        iconSound.classList.remove('notActive');
                    }
                }
                function playSound() {
                    var _a;
                    const audioUrl =
                        (_a = (0, _dataStorage__WEBPACK_IMPORTED_MODULE_1__.getLoadedData)()) === null || _a === void 0
                            ? void 0
                            : _a.audioExample;
                    const baseUrl = 'https://raw.githubusercontent.com/Tabrisel/rss-puzzle-data/main/';
                    const audio = new Audio(baseUrl + audioUrl);
                    const icon = document.querySelector('.soundTranslate');
                    audio.play();
                    audio.addEventListener('play', () => {
                        if (icon) {
                            icon.style.filter = 'brightness(150%)';
                            icon.classList.add('pulse');
                        }
                    });
                    audio.addEventListener('ended', () => {
                        if (icon) {
                            icon.style.filter = 'none';
                            icon.classList.remove('pulse');
                        }
                    });
                }

                /***/
            },

        /***/ './src/service/loginPage/loginPageInstance.ts':
            /*!****************************************************!*\
  !*** ./src/service/loginPage/loginPageInstance.ts ***!
  \****************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var _views_loginPageView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../../views/loginPageView */ './src/views/loginPageView.ts'
                );

                class LoginPageViewInstance {
                    static getInstance() {
                        if (!LoginPageViewInstance.instance) {
                            LoginPageViewInstance.instance = new _views_loginPageView__WEBPACK_IMPORTED_MODULE_0__[
                                'default'
                            ]();
                        }
                        return LoginPageViewInstance.instance;
                    }
                }
                LoginPageViewInstance.instance = null;
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = LoginPageViewInstance;

                /***/
            },

        /***/ './src/service/loginPage/validation.ts':
            /*!*********************************************!*\
  !*** ./src/service/loginPage/validation.ts ***!
  \*********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ addInputEventListeners: () => /* binding */ addInputEventListeners,
                    /* harmony export */ hasMinimumLength: () => /* binding */ hasMinimumLength,
                    /* harmony export */ isFirstLetterUppercase: () => /* binding */ isFirstLetterUppercase,
                    /* harmony export */ isValidEnglishAlphabet: () => /* binding */ isValidEnglishAlphabet,
                    /* harmony export */ showValidationMessage: () => /* binding */ showValidationMessage,
                    /* harmony export */ toggleSubmitButton: () => /* binding */ toggleSubmitButton,
                    /* harmony export */
                });
                /* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../../components/button */ './src/components/button.ts'
                );

                function isValidEnglishAlphabet(input) {
                    return /^[A-Za-z-]+$/.test(input);
                }
                function isFirstLetterUppercase(input) {
                    return /^[A-Z]/.test(input);
                }
                function hasMinimumLength(input, minLength) {
                    return input.length >= minLength;
                }
                function showValidationMessage(input, message) {
                    input.classList.add('noValid');
                    if (input.validationMessage !== message) {
                        input.setCustomValidity(message);
                        input.reportValidity();
                    }
                }
                function toggleSubmitButton(inputNameElement, inputLastNameElement) {
                    if (inputNameElement && inputLastNameElement) {
                        const firstNameValid = inputNameElement.checkValidity();
                        const lastNameValid = inputLastNameElement.checkValidity();
                        if (firstNameValid && lastNameValid) {
                            _components_button__WEBPACK_IMPORTED_MODULE_0__['default'].removeAttribute('disabled');
                            inputNameElement.classList.remove('noValid');
                            inputLastNameElement.classList.remove('noValid');
                        } else {
                            _components_button__WEBPACK_IMPORTED_MODULE_0__['default'].setAttribute('disabled', '');
                        }
                    }
                }
                function addInputEventListeners(inputNameElement, inputLastNameElement) {
                    inputNameElement.addEventListener('input', () => {
                        const inputValue = inputNameElement.value;
                        if (!inputValue.trim()) {
                            inputNameElement.classList.remove('noValid');
                            return;
                        }
                        if (!isValidEnglishAlphabet(inputValue)) {
                            showValidationMessage(
                                inputNameElement,
                                'Only English alphabet letters and hyphen are allowed.'
                            );
                        } else if (!isFirstLetterUppercase(inputValue)) {
                            showValidationMessage(inputNameElement, 'First letter should be uppercase.');
                        } else if (!hasMinimumLength(inputValue, 3)) {
                            showValidationMessage(inputNameElement, 'Minimum length is 3 characters.');
                        } else {
                            inputNameElement.setCustomValidity('');
                            inputNameElement.classList.remove('noValid');
                            toggleSubmitButton(inputNameElement, inputLastNameElement);
                        }
                    });
                    inputLastNameElement.addEventListener('input', () => {
                        const inputValue = inputLastNameElement.value;
                        if (!inputValue.trim()) {
                            inputLastNameElement.classList.remove('noValid');
                            return;
                        }
                        if (!isValidEnglishAlphabet(inputValue)) {
                            showValidationMessage(
                                inputLastNameElement,
                                'Only English alphabet letters and hyphen are allowed.'
                            );
                        } else if (!isFirstLetterUppercase(inputValue)) {
                            showValidationMessage(inputLastNameElement, 'First letter should be uppercase.');
                        } else if (!hasMinimumLength(inputValue, 4)) {
                            showValidationMessage(inputLastNameElement, 'Minimum length is 4 characters.');
                        } else {
                            inputLastNameElement.setCustomValidity('');
                            inputLastNameElement.classList.remove('noValid');
                            toggleSubmitButton(inputNameElement, inputLastNameElement);
                        }
                    });
                }

                /***/
            },

        /***/ './src/service/userPage/localStorage.ts':
            /*!**********************************************!*\
  !*** ./src/service/userPage/localStorage.ts ***!
  \**********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ getUserData: () => /* binding */ getUserData,
                    /* harmony export */ handleLogout: () => /* binding */ handleLogout,
                    /* harmony export */ handleSubmit: () => /* binding */ handleSubmit,
                    /* harmony export */ removeUserPage: () => /* binding */ removeUserPage,
                    /* harmony export */ saveUserDataToLocalStorage: () => /* binding */ saveUserDataToLocalStorage,
                    /* harmony export */
                });
                /* harmony import */ var _components_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../../components/inputs */ './src/components/inputs.ts'
                );
                /* harmony import */ var _views_loginPageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../../views/loginPageView */ './src/views/loginPageView.ts'
                );
                /* harmony import */ var _controller_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../../controller/app */ './src/controller/app.ts'
                );

                function getUserData() {
                    const userDataString = localStorage.getItem('user');
                    let userName = null;
                    let userSurname = null;
                    if (userDataString) {
                        const userData = JSON.parse(userDataString);
                        userName = userData.firstName;
                        userSurname = userData.surname;
                    }
                    return { userName, userSurname };
                }
                function removeFormElement() {
                    document.body.innerHTML = '';
                    _controller_app__WEBPACK_IMPORTED_MODULE_2__.userPageView.render();
                }
                function removeUserPage() {
                    document.body.innerHTML = '';
                    const loginPageView = new _views_loginPageView__WEBPACK_IMPORTED_MODULE_1__['default']();
                    loginPageView.render();
                }
                function saveUserDataToLocalStorage(data) {
                    localStorage.setItem('user', JSON.stringify(data));
                    removeFormElement();
                }
                function deleteUserDataFromLocalStorage() {
                    const userDataString = localStorage.getItem('user');
                    if (userDataString) {
                        try {
                            const userData = JSON.parse(userDataString);
                            if (userData.firstName && userData.surname) {
                                localStorage.removeItem('user');
                            }
                        } catch (error) {
                            console.error('Error parsing user data from local storage:', error);
                        }
                    }
                    window.location.reload();
                }
                function handleLogout() {
                    deleteUserDataFromLocalStorage();
                }
                function handleSubmit(event) {
                    event.preventDefault();
                    const data = {
                        firstName:
                            _components_inputs__WEBPACK_IMPORTED_MODULE_0__.inputName instanceof HTMLInputElement
                                ? _components_inputs__WEBPACK_IMPORTED_MODULE_0__.inputName.value
                                : '',
                        surname:
                            _components_inputs__WEBPACK_IMPORTED_MODULE_0__.inputLastName instanceof HTMLInputElement
                                ? _components_inputs__WEBPACK_IMPORTED_MODULE_0__.inputLastName.value
                                : '',
                    };
                    saveUserDataToLocalStorage(data);
                }

                /***/
            },

        /***/ './src/service/userPage/userPageInstance.ts':
            /*!**************************************************!*\
  !*** ./src/service/userPage/userPageInstance.ts ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var _views_userPageView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../../views/userPageView */ './src/views/userPageView.ts'
                );

                class UserPageViewInstance {
                    static getInstance() {
                        if (!UserPageViewInstance.instance) {
                            UserPageViewInstance.instance = new _views_userPageView__WEBPACK_IMPORTED_MODULE_0__[
                                'default'
                            ]();
                        }
                        return UserPageViewInstance.instance;
                    }
                }
                UserPageViewInstance.instance = null;
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = UserPageViewInstance;

                /***/
            },

        /***/ './src/utils/changeNodes.ts':
            /*!**********************************!*\
  !*** ./src/utils/changeNodes.ts ***!
  \**********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ swapNodes,
                    /* harmony export */
                });
                function swapNodes(node1, node2) {
                    const parent1 = node1.parentNode;
                    const parent2 = node2.parentNode;
                    const nextNode1 = node1.nextSibling;
                    const nextNode2 = node2.nextSibling;
                    if (parent1 && parent2) {
                        if (nextNode1) {
                            parent1.insertBefore(node2, nextNode1);
                        } else {
                            parent1.appendChild(node2);
                        }
                        if (nextNode2) {
                            parent2.insertBefore(node1, nextNode2);
                        } else {
                            parent2.appendChild(node1);
                        }
                    }
                }

                /***/
            },

        /***/ './src/utils/mixArray.ts':
            /*!*******************************!*\
  !*** ./src/utils/mixArray.ts ***!
  \*******************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ mix,
                    /* harmony export */
                });
                function mix(array) {
                    const mixedArray = array.slice();
                    for (let i = mixedArray.length - 1; i > 0; i -= 1) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [mixedArray[i], mixedArray[j]] = [mixedArray[j], mixedArray[i]];
                    }
                    return mixedArray;
                }

                /***/
            },

        /***/ './src/utils/userState.ts':
            /*!********************************!*\
  !*** ./src/utils/userState.ts ***!
  \********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                function checkIsUserLogin() {
                    const userDataString = localStorage.getItem('user');
                    if (userDataString) {
                        try {
                            const userData = JSON.parse(userDataString);
                            return !!userData.firstName && !!userData.surname;
                        } catch (error) {
                            console.error('Error parsing user data from local storage:', error);
                        }
                    }
                    return false;
                }
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = checkIsUserLogin;

                /***/
            },

        /***/ './src/views/gamePageView.ts':
            /*!***********************************!*\
  !*** ./src/views/gamePageView.ts ***!
  \***********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ GamePageView,
                    /* harmony export */
                });
                /* harmony import */ var _components_creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../components/creatorElement */ './src/components/creatorElement.ts'
                );
                /* harmony import */ var _components_targetContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../components/targetContainer */ './src/components/targetContainer.ts'
                );
                /* harmony import */ var _components_gameButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../components/gameButtons */ './src/components/gameButtons.ts'
                );
                /* harmony import */ var _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../service/userPage/localStorage */ './src/service/userPage/localStorage.ts'
                    );
                /* harmony import */ var _components_hintButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ../components/hintButtons */ './src/components/hintButtons.ts'
                );
                /* harmony import */ var _service_gamePage_hints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ../service/gamePage/hints */ './src/service/gamePage/hints.ts'
                );

                const WRAPPER_CLASS_NAME = 'page-wrapper';
                const ACTIVE_CLASS_NAME = 'active';
                class GamePageView {
                    constructor() {
                        this.targetField = null;
                        const wrapperElement = new _components_creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'div',
                            className: ['wrapperGamePage'],
                        });
                        this.wrapper = wrapperElement.getElement();
                        this.wrapper.classList.add(WRAPPER_CLASS_NAME);
                        this.greetings = new _components_creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'h3',
                        }).getElement();
                        this.headerElement = new _components_creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'header',
                        }).getElement();
                        this.sentenceTranslate = document.createElement('p');
                        this.sentenceTranslate.className = 'sentenceTranslate';
                        this.sentenceContainer = document.createElement('div');
                        this.sentenceContainer.className = 'sentence';
                        this.soundTranslate = document.createElement('div');
                        this.soundTranslate.className = 'soundTranslate';
                        this.soundTranslate.classList.add('appear');
                        this.sentenceTranslate.classList.add('fallFromTop');
                        this.soundTranslate.addEventListener(
                            'click',
                            _service_gamePage_hints__WEBPACK_IMPORTED_MODULE_5__.playSound
                        );
                        this.sentenceContainer.append(this.sentenceTranslate, this.soundTranslate);
                        this.playerField = document.createElement('div');
                        this.playerField.className = 'player-field';
                        this.targetContainer = new _components_targetContainer__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ]();
                        this.contentContainer = document.createElement('div');
                        this.contentContainer.className = 'container';
                    }
                    render() {
                        const userData = (0, _service_userPage_localStorage__WEBPACK_IMPORTED_MODULE_3__.getUserData)();
                        if (userData) {
                            this.greetings.textContent = `It’s good to see you, ${userData.userName} ${userData.userSurname}!`;
                        }
                        this.headerElement.appendChild(this.greetings);
                        this.contentContainer.append(this.headerElement, this.sentenceContainer);
                        this.targetContainer.render(this.contentContainer);
                        this.contentContainer.append(this.playerField);
                        this.setupButtons();
                        this.wrapper.append(this.contentContainer);
                        if (this.wrapper) {
                            document.body.appendChild(this.wrapper);
                            if (this.wrapper.classList.contains(ACTIVE_CLASS_NAME)) {
                                this.wrapper.classList.remove(ACTIVE_CLASS_NAME);
                            }
                            setTimeout(() => {
                                this.wrapper.classList.add(ACTIVE_CLASS_NAME);
                            }, 0);
                        }
                    }
                    setupButtons() {
                        const gameButtons = new _components_gameButtons__WEBPACK_IMPORTED_MODULE_2__['default']();
                        gameButtons.render(this.contentContainer);
                        const hintButtons = new _components_hintButtons__WEBPACK_IMPORTED_MODULE_4__['default']();
                        hintButtons.render(this.headerElement);
                    }
                }

                /***/
            },

        /***/ './src/views/loginPageView.ts':
            /*!************************************!*\
  !*** ./src/views/loginPageView.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var _components_creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../components/creatorElement */ './src/components/creatorElement.ts'
                );
                /* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../components/form */ './src/components/form.ts'
                );

                const WRAPPER_CLASS_NAME = 'page-wrapper';
                const ACTIVE_CLASS_NAME = 'active';
                class LoginPageView {
                    constructor() {
                        const wrapperElement = new _components_creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'div',
                            className: ['wrapperLoginPage'],
                        }).getElement();
                        this.wrapper = wrapperElement;
                        this.wrapper.classList.add(WRAPPER_CLASS_NAME);
                        this.formElement = _components_form__WEBPACK_IMPORTED_MODULE_1__['default'];
                        if (this.wrapper) {
                            this.wrapper.appendChild(this.formElement);
                        }
                    }
                    render() {
                        if (this.wrapper) {
                            document.body.appendChild(this.wrapper);
                            setTimeout(() => {
                                this.wrapper.classList.add(ACTIVE_CLASS_NAME);
                            }, 0);
                        }
                    }
                }
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = LoginPageView;

                /***/
            },

        /***/ './src/views/userPageView.ts':
            /*!***********************************!*\
  !*** ./src/views/userPageView.ts ***!
  \***********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => /* binding */ UserPageView,
                    /* harmony export */
                });
                /* harmony import */ var _components_creatorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../components/creatorElement */ './src/components/creatorElement.ts'
                );
                /* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../components/header */ './src/components/header.ts'
                );
                /* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../components/title */ './src/components/title.ts'
                );
                /* harmony import */ var _service_gamePage_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../service/gamePage/cards */ './src/service/gamePage/cards.ts'
                );

                const WRAPPER_CLASS_NAME = 'page-wrapper';
                const ACTIVE_CLASS_NAME = 'active';
                class UserPageView {
                    constructor() {
                        const wrapperElement = new _components_creatorElement__WEBPACK_IMPORTED_MODULE_0__['default']({
                            tag: 'div',
                            className: ['wrapperUserPage'],
                        });
                        this.wrapper = wrapperElement.getElement();
                        this.wrapper.classList.add(WRAPPER_CLASS_NAME);
                    }
                    render() {
                        this.setupElements();
                        this.setupEventListeners();
                        this.appendElementsToDOM();
                        this.addActiveClassToWrapper();
                    }
                    setupElements() {
                        const headerComponent = new _components_header__WEBPACK_IMPORTED_MODULE_1__['default']();
                        headerComponent.render(this.wrapper);
                        const titleComponent = new _components_title__WEBPACK_IMPORTED_MODULE_2__['default']();
                        titleComponent.render(this.wrapper);
                    }
                    setupEventListeners() {
                        const startButton = this.wrapper.querySelector('.start-button');
                        startButton.addEventListener(
                            'click',
                            _service_gamePage_cards__WEBPACK_IMPORTED_MODULE_3__.handleStartButtonClick
                        );
                    }
                    addActiveClassToWrapper() {
                        setTimeout(() => {
                            this.wrapper.classList.add(ACTIVE_CLASS_NAME);
                        }, 0);
                    }
                    appendElementsToDOM() {
                        document.body.appendChild(this.wrapper);
                    }
                }

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
            /******/ Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _controller_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./controller/app */ './src/controller/app.ts'
        );
        /* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./styles/main.scss */ './src/styles/main.scss'
        );
    })();

    /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyREFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNtRDs7Ozs7Ozs7Ozs7Ozs7OztBQ3pERztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNERBQWE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHFCQUFxQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNnSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFN0U7QUFDYjtBQUNGO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0REFBYTtBQUMzQztBQUNBO0FB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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MmZmNCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRFbGVtZW50LnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL2NyZWF0b3JFbGVtZW50LnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9mb3JtLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9nYW1lQnV0dG9ucy50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9oaW50QnV0dG9ucy50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy90YXJnZXRDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3RpdGxlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29udHJvbGxlci9hcHAudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9zZXJ2aWNlL2dhbWVQYWdlL2NhcmRzLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvc2VydmljZS9nYW1lUGFnZS9kYXRhU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3NlcnZpY2UvZ2FtZVBhZ2UvaGludHMudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9zZXJ2aWNlL2xvZ2luUGFnZS9sb2dpblBhZ2VJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3NlcnZpY2UvbG9naW5QYWdlL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9zZXJ2aWNlL3VzZXJQYWdlL2xvY2FsU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3NlcnZpY2UvdXNlclBhZ2UvdXNlclBhZ2VJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3V0aWxzL2NoYW5nZU5vZGVzLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvdXRpbHMvbWl4QXJyYXkudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy91dGlscy91c2VyU3RhdGUudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy92aWV3cy9nYW1lUGFnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy92aWV3cy9sb2dpblBhZ2VWaWV3LnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvdmlld3MvdXNlclBhZ2VWaWV3LnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBDcmVhdG9yRWxlbWVudCBmcm9tICcuL2NyZWF0b3JFbGVtZW50JztcbmNsYXNzIElucHV0Q3JlYXRvckVsZW1lbnQgZXh0ZW5kcyBDcmVhdG9yRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMucGF0dGVybikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCBvcHRpb25zLnBhdHRlcm4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IElucHV0Q3JlYXRvckVsZW1lbnQ7XG4iLCJpbXBvcnQgQ3JlYXRvckVsZW1lbnQgZnJvbSAnLi9jcmVhdG9yRWxlbWVudCc7XG5jb25zdCBidXR0b25TdWJtaXQgPSBuZXcgQ3JlYXRvckVsZW1lbnQoe1xuICAgIHRhZzogJ2J1dHRvbicsXG4gICAgY2xhc3NOYW1lOiBbJ2J1dHRvbiddLFxuICAgIGF0dHJpYnV0ZTogeyBuYW1lOiAndHlwZScsIHZhbHVlOiAnc3VibWl0JyB9LFxuICAgIGNvbnRlbnQ6ICdMb2dpbicsXG59KTtcbmJ1dHRvblN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuZXhwb3J0IGRlZmF1bHQgYnV0dG9uU3VibWl0O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRvckVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLnRhZyk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3Mob3B0aW9ucy5jbGFzc05hbWUpO1xuICAgICAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG9wdGlvbnMuYXR0cmlidXRlLm5hbWUsIG9wdGlvbnMuYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENvbnRlbnQob3B0aW9ucy5jb250ZW50KTtcbiAgICAgICAgdGhpcy5zZXRDYWxsYmFjayhvcHRpb25zLmNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgc2V0Q29udGVudChjb250ZW50ID0gJycpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUgfHwgJycpO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgIH1cbiAgICBzZXRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcHBlbmQoLi4uY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRIVE1MSW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaGFuZGxlU3VibWl0IH0gZnJvbSAnLi4vc2VydmljZS91c2VyUGFnZS9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IENyZWF0b3JFbGVtZW50IGZyb20gJy4vY3JlYXRvckVsZW1lbnQnO1xuaW1wb3J0IHsgbGFiZWxOYW1lLCBpbnB1dE5hbWUsIGxhYmVsTGFzdE5hbWUsIGlucHV0TGFzdE5hbWUgfSBmcm9tICcuL2lucHV0cyc7XG5pbXBvcnQgYnV0dG9uU3VibWl0IGZyb20gJy4vYnV0dG9uJztcbmNvbnN0IGZvcm1FbGVtZW50ID0gbmV3IENyZWF0b3JFbGVtZW50KHtcbiAgICB0YWc6ICdmb3JtJyxcbiAgICBjbGFzc05hbWU6IFsnbG9naW5Gb3JtJ10sXG59KS5nZXRFbGVtZW50KCk7XG5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xuY29uc3QgZWxlbWVudHNUb0FkZCA9IFtsYWJlbE5hbWUsIGlucHV0TmFtZSwgbGFiZWxMYXN0TmFtZSwgaW5wdXRMYXN0TmFtZSwgYnV0dG9uU3VibWl0LmdldEVsZW1lbnQoKV07XG5lbGVtZW50c1RvQWRkLmZvckVhY2goKGVsZW1lbnQpID0+IGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1FbGVtZW50O1xuIiwiaW1wb3J0IHsgY2hlY2tTZW50ZW5jZSwgaGFuZGxlQ29udGludWVCdXR0b25DbGljaywgaGFuZGxlQXV0b0J1dHRvbkNsaWNrIH0gZnJvbSAnLi4vc2VydmljZS9nYW1lUGFnZS9jYXJkcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25zR2FtZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5nYW1lQnV0dG9ucy5jbGFzc05hbWUgPSAnZ2FtZUJ1dHRvbnMnO1xuICAgICAgICBjb25zdCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjaGVja0J1dHRvbi50ZXh0Q29udGVudCA9ICdDaGVjayc7XG4gICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTmFtZSA9ICdjaGVja0J1dHRvbic7XG4gICAgICAgIGNoZWNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIGNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tTZW50ZW5jZSk7XG4gICAgICAgIGNvbnN0IGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRpbnVlJztcbiAgICAgICAgY29udGludWVCdXR0b24uY2xhc3NOYW1lID0gJ2NvbnRpbnVlQnV0dG9uJztcbiAgICAgICAgY29udGludWVCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDb250aW51ZUJ1dHRvbkNsaWNrKTtcbiAgICAgICAgY29uc3QgYXV0b0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhdXRvQnV0dG9uLnRleHRDb250ZW50ID0gJ0F1dG8tQ29tcGxldGUnO1xuICAgICAgICBhdXRvQnV0dG9uLmNsYXNzTmFtZSA9ICdhdXRvQnV0dG9uJztcbiAgICAgICAgYXV0b0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZUF1dG9CdXR0b25DbGljayhhdXRvQnV0dG9uKSk7XG4gICAgICAgIHRoaXMuZ2FtZUJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgICAgICB0aGlzLmdhbWVCdXR0b25zLmFwcGVuZENoaWxkKGNoZWNrQnV0dG9uKTtcbiAgICAgICAgdGhpcy5nYW1lQnV0dG9ucy5hcHBlbmRDaGlsZChhdXRvQnV0dG9uKTtcbiAgICB9XG4gICAgcmVuZGVyKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5nYW1lQnV0dG9ucyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENyZWF0b3JFbGVtZW50IGZyb20gJy4vY3JlYXRvckVsZW1lbnQnO1xuaW1wb3J0IHsgaGFuZGxlTG9nb3V0LCBnZXRVc2VyRGF0YSB9IGZyb20gJy4uL3NlcnZpY2UvdXNlclBhZ2UvbG9jYWxTdG9yYWdlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JlZXRpbmdzID0gbmV3IENyZWF0b3JFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBJdOKAmXMgZ29vZCB0byBzZWUgeW91LCAke2dldFVzZXJEYXRhKCkudXNlck5hbWV9ICR7Z2V0VXNlckRhdGEoKS51c2VyU3VybmFtZX0hYCxcbiAgICAgICAgfSkuZ2V0RWxlbWVudCgpO1xuICAgICAgICB0aGlzLmxvZ291dEJ1dHRvbiA9IG5ldyBDcmVhdG9yRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBbJ2J1dHRvbi1leGl0J10sXG4gICAgICAgICAgICBjb250ZW50OiAnTG9nb3V0JyxcbiAgICAgICAgfSkuZ2V0RWxlbWVudCgpO1xuICAgICAgICB0aGlzLmxvZ291dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUxvZ291dCk7XG4gICAgfVxuICAgIHJlbmRlcihwYXJlbnQpIHtcbiAgICAgICAgbGV0IGhlYWRlckVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgICAgIGlmICghaGVhZGVyRWxlbWVudCkge1xuICAgICAgICAgICAgaGVhZGVyRWxlbWVudCA9IG5ldyBDcmVhdG9yRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnaGVhZGVyJyxcbiAgICAgICAgICAgIH0pLmdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5ncmVldGluZ3MpO1xuICAgICAgICAgICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxvZ291dEJ1dHRvbik7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ3JlYXRvckVsZW1lbnQgZnJvbSAnLi9jcmVhdG9yRWxlbWVudCc7XG5pbXBvcnQgeyB0cmFuc2xhdGVTd2l0Y2gsIHNvdW5kU3dpdGNoIH0gZnJvbSAnLi4vc2VydmljZS9nYW1lUGFnZS9oaW50cyc7XG5pbXBvcnQgeyBoYW5kbGVMb2dvdXQgfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXJQYWdlL2xvY2FsU3RvcmFnZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50QnV0dG9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGludEJ1dHRvbnMgPSBuZXcgQ3JlYXRvckVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogWydoaW50QnV0dG9ucyddLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMubG9nb3V0QnV0dG9uID0gbmV3IENyZWF0b3JFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFsnYnV0dG9uLWV4aXQnXSxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdMb2dvdXQnLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMubG9nb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTG9nb3V0KTtcbiAgICAgICAgdGhpcy5pY29uU291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5pY29uU291bmQuY2xhc3NMaXN0LmFkZCgnaWNvblNvdW5kJyk7XG4gICAgICAgIHRoaXMuaWNvblRyYW5zbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmljb25UcmFuc2xhdGUuY2xhc3NMaXN0LmFkZCgnaWNvblRyYW5zbGF0ZScpO1xuICAgICAgICB0aGlzLmljb25UcmFuc2xhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0cmFuc2xhdGVTd2l0Y2godGhpcy5pY29uVHJhbnNsYXRlKSk7XG4gICAgICAgIHRoaXMuaWNvblNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc291bmRTd2l0Y2godGhpcy5pY29uU291bmQpKTtcbiAgICAgICAgdGhpcy5oaW50QnV0dG9ucy5hcHBlbmQodGhpcy5pY29uU291bmQpO1xuICAgICAgICB0aGlzLmhpbnRCdXR0b25zLmFwcGVuZCh0aGlzLmljb25UcmFuc2xhdGUpO1xuICAgICAgICB0aGlzLmhpbnRCdXR0b25zLmFwcGVuZCh0aGlzLmxvZ291dEJ1dHRvbik7XG4gICAgfVxuICAgIHJlbmRlcihwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuaGludEJ1dHRvbnMpO1xuICAgIH1cbn1cbiIsIi8vIGlucHV0cy50c1xuaW1wb3J0IENyZWF0b3JFbGVtZW50IGZyb20gJy4vY3JlYXRvckVsZW1lbnQnO1xuaW1wb3J0IElucHV0Q3JlYXRvckVsZW1lbnQgZnJvbSAnLi9JbnB1dEVsZW1lbnQnO1xuaW1wb3J0IHsgYWRkSW5wdXRFdmVudExpc3RlbmVycyB9IGZyb20gJy4uL3NlcnZpY2UvbG9naW5QYWdlL3ZhbGlkYXRpb24nO1xuY29uc3QgbGFiZWxOYW1lID0gbmV3IENyZWF0b3JFbGVtZW50KHtcbiAgICB0YWc6ICdsYWJlbCcsXG4gICAgY2xhc3NOYW1lOiBbJ2xhYmVsJ10sXG4gICAgY29udGVudDogJ0ZpcnN0IE5hbWU6JyxcbiAgICBhdHRyaWJ1dGU6IHsgbmFtZTogJ2ZvcicsIHZhbHVlOiAnaW5wdXROYW1lJyB9LFxufSkuZ2V0RWxlbWVudCgpO1xuY29uc3QgbGFiZWxMYXN0TmFtZSA9IG5ldyBDcmVhdG9yRWxlbWVudCh7XG4gICAgdGFnOiAnbGFiZWwnLFxuICAgIGNsYXNzTmFtZTogWydsYWJlbCddLFxuICAgIGNvbnRlbnQ6ICdTdXJuYW1lOicsXG4gICAgYXR0cmlidXRlOiB7IG5hbWU6ICdmb3InLCB2YWx1ZTogJ2lucHV0TGFzdE5hbWUnIH0sXG59KS5nZXRFbGVtZW50KCk7XG5jb25zdCBpbnB1dE5hbWUgPSBuZXcgSW5wdXRDcmVhdG9yRWxlbWVudCh7XG4gICAgdGFnOiAnaW5wdXQnLFxuICAgIGNsYXNzTmFtZTogWydpbnB1dEZpZWxkcyddLFxuICAgIGF0dHJpYnV0ZTogeyBuYW1lOiAncmVxdWlyZWQnIH0sXG4gICAgY29udGVudDogJycsXG59KS5nZXRFbGVtZW50KCk7XG5jb25zdCBpbnB1dExhc3ROYW1lID0gbmV3IElucHV0Q3JlYXRvckVsZW1lbnQoe1xuICAgIHRhZzogJ2lucHV0JyxcbiAgICBjbGFzc05hbWU6IFsnaW5wdXRGaWVsZHMnXSxcbiAgICBhdHRyaWJ1dGU6IHsgbmFtZTogJ3JlcXVpcmVkJyB9LFxuICAgIGNvbnRlbnQ6ICcnLFxufSkuZ2V0RWxlbWVudCgpO1xuaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXROYW1lJyk7XG5pbnB1dE5hbWUuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG5pbnB1dExhc3ROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXRMYXN0TmFtZScpO1xuaW5wdXRMYXN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbmFkZElucHV0RXZlbnRMaXN0ZW5lcnMoaW5wdXROYW1lLCBpbnB1dExhc3ROYW1lKTtcbmV4cG9ydCB7IGlucHV0TmFtZSwgaW5wdXRMYXN0TmFtZSwgbGFiZWxOYW1lLCBsYWJlbExhc3ROYW1lIH07XG4iLCJpbXBvcnQgQ3JlYXRvckVsZW1lbnQgZnJvbSAnLi9jcmVhdG9yRWxlbWVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhcmdldENvbnRhaW5lciA9IG5ldyBDcmVhdG9yRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBbJ3RhcmdldENvbnRhaW5lciddLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMudGFyZ2V0RmllbGRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RmllbGQgPSBuZXcgQ3JlYXRvckVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbJ3RhcmdldEZpZWxkJ10sXG4gICAgICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldEZpZWxkcy5wdXNoKHRhcmdldEZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhcmdldEZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RmllbGRzWzBdLmNsYXNzTGlzdC5hZGQoJ3RhcmdldF9hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnRhcmdldENvbnRhaW5lcik7XG4gICAgfVxuICAgIHNldElubmVySFRNTCgpIHtcbiAgICAgICAgdGhpcy50YXJnZXRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IENyZWF0b3JFbGVtZW50IGZyb20gJy4vY3JlYXRvckVsZW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRpdGxlR2FtZSA9IG5ldyBDcmVhdG9yRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBbJ3RpdGxlR2FtZSddLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMud2VsY29tZUhlYWRlciA9IG5ldyBDcmVhdG9yRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdoMScsXG4gICAgICAgICAgICBjb250ZW50OiAnV2VsY29tZSB0byBSU1MgUHV6emxlIScsXG4gICAgICAgIH0pLmdldEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZSA9IG5ldyBDcmVhdG9yRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdwJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiSXQgaXMgYW4gaW50ZXJhY3RpdmUgbWluaS1nYW1lIGFpbWVkIGF0IGVuaGFuY2luZyBFbmdsaXNoIGxhbmd1YWdlIHNraWxscy4gUGxheWVycyBhc3NlbWJsZSBzZW50ZW5jZXMgZnJvbSBqdW1ibGVkIHdvcmRzLCBpbnNwaXJlZCBieSBMaW5ndWFsZW8ncyBQaHJhc2UgQ29uc3RydWN0b3IgdHJhaW5pbmcuIFRoZSBnYW1lIGludGVncmF0ZXMgdmFyaW91cyBsZXZlbHMgb2YgZGlmZmljdWx0eSwgaGludCBvcHRpb25zLCBhbmQgYSB1bmlxdWUgcHV6emxlLWxpa2UgZXhwZXJpZW5jZSB3aXRoIGFydHdvcmsuXCIsXG4gICAgICAgIH0pLmdldEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbiA9IG5ldyBDcmVhdG9yRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBbJ3N0YXJ0LWJ1dHRvbiddLFxuICAgICAgICAgICAgY29udGVudDogJ1N0YXJ0JyxcbiAgICAgICAgfSkuZ2V0RWxlbWVudCgpO1xuICAgICAgICB0aGlzLnRpdGxlR2FtZS5hcHBlbmRDaGlsZCh0aGlzLndlbGNvbWVIZWFkZXIpO1xuICAgICAgICB0aGlzLnRpdGxlR2FtZS5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaWJlKTtcbiAgICAgICAgdGhpcy50aXRsZUdhbWUuYXBwZW5kQ2hpbGQodGhpcy5zdGFydEJ1dHRvbik7XG4gICAgfVxuICAgIHJlbmRlcihwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgdGl0bGVHYW1lID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZUdhbWUnKTtcbiAgICAgICAgaWYgKCF0aXRsZUdhbWUpIHtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlR2FtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgY2hlY2tJc1VzZXJMb2dpbiBmcm9tICcuLi91dGlscy91c2VyU3RhdGUnO1xuaW1wb3J0IExvZ2luUGFnZVZpZXdJbnN0YW5jZSBmcm9tICcuLi9zZXJ2aWNlL2xvZ2luUGFnZS9sb2dpblBhZ2VJbnN0YW5jZSc7XG5pbXBvcnQgVXNlclBhZ2VWaWV3SW5zdGFuY2UgZnJvbSAnLi4vc2VydmljZS91c2VyUGFnZS91c2VyUGFnZUluc3RhbmNlJztcbmNvbnN0IGxvZ2luUGFnZVZpZXcgPSBMb2dpblBhZ2VWaWV3SW5zdGFuY2UuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IHVzZXJQYWdlVmlldyA9IFVzZXJQYWdlVmlld0luc3RhbmNlLmdldEluc3RhbmNlKCk7XG5pZiAoIWNoZWNrSXNVc2VyTG9naW4oKSkge1xuICAgIGlmIChsb2dpblBhZ2VWaWV3KSB7XG4gICAgICAgIGxvZ2luUGFnZVZpZXcucmVuZGVyKCk7XG4gICAgfVxufVxuZWxzZSB7XG4gICAgdXNlclBhZ2VWaWV3LnJlbmRlcigpO1xufVxuZXhwb3J0IHsgdXNlclBhZ2VWaWV3LCBsb2dpblBhZ2VWaWV3IH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBHYW1lUGFnZVZpZXcgZnJvbSAnLi4vLi4vdmlld3MvZ2FtZVBhZ2VWaWV3JztcbmltcG9ydCB7IGdldExvYWRlZERhdGEsIGZldGNoRGF0YUdhbWUsIG5leHRMZXZlbCB9IGZyb20gJy4vZGF0YVN0b3JhZ2UnO1xuaW1wb3J0IHsgdXNlclBhZ2VWaWV3IH0gZnJvbSAnLi4vLi4vY29udHJvbGxlci9hcHAnO1xuaW1wb3J0IHN3YXBOb2RlcyBmcm9tICcuLi8uLi91dGlscy9jaGFuZ2VOb2Rlcyc7XG5jb25zdCB1c2VyQXJyYXkgPSBbXTtcbmNvbnN0IEFDVElWRV9DTEFTU19OQU1FID0gJ2FjdGl2ZSc7XG5jb25zdCBnYW1lUGFnZVZpZXcgPSBuZXcgR2FtZVBhZ2VWaWV3KCk7XG5mdW5jdGlvbiBoYW5kbGVDb250aW51ZUJ1dHRvblN0YXRlKGNvbnRpbnVlQnV0dG9uLCBpY29uVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgbm90QWN0aXZlID0gaWNvblRyYW5zbGF0ZS5jbGFzc0xpc3QuY29udGFpbnMoJ25vdEFjdGl2ZScpO1xuICAgIGNvbnN0IGljb25Tb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uU291bmQnKTtcbiAgICBjb25zdCBzb3VuZFRyYW5zbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VuZFRyYW5zbGF0ZScpO1xuICAgIGNvbnN0IG5vdEFjdGl2ZVNvdW5kID0gaWNvblNvdW5kLmNsYXNzTGlzdC5jb250YWlucygnbm90QWN0aXZlJyk7XG4gICAgaWYgKG5vdEFjdGl2ZSkge1xuICAgICAgICBnYW1lUGFnZVZpZXcuc2VudGVuY2VUcmFuc2xhdGUuY2xhc3NMaXN0LnRvZ2dsZSgnZmFsbEZyb21Ub3AnKTtcbiAgICB9XG4gICAgaWYgKG5vdEFjdGl2ZVNvdW5kKSB7XG4gICAgICAgIHNvdW5kVHJhbnNsYXRlLmNsYXNzTGlzdC50b2dnbGUoJ2FwcGVhcicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNoZWNrQnV0dG9uU3RhdGUoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZERhdGEgPSBnZXRMb2FkZWREYXRhKCk7XG4gICAgICAgICAgICBpZiAobG9hZGVkRGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmlnaHRBcnJheSB9ID0gZ2V0TG9hZGVkRGF0YSgpIHx8IHsgcmlnaHRBcnJheTogW10gfTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQXJyYXlMZW5ndGggPSB1c2VyQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSAnLScpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNFbXB0eVZhbHVlID0gdXNlckFycmF5LmluY2x1ZGVzKCctJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tCdXR0b24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250aW51ZUJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGlmIChyaWdodEFycmF5Lmxlbmd0aCA9PT0gdXNlckFycmF5TGVuZ3RoICYmICFoYXNFbXB0eVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoYWtlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1maWVsZCcpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRGaWVsZCAmJiBwbGF5ZXJGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JkQ2FyZHMgPSBBcnJheS5mcm9tKHRhcmdldEZpZWxkLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgd29yZENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnd3JvbmdBbnN3ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckNhcmRzID0gQXJyYXkuZnJvbShwbGF5ZXJGaWVsZC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnd3JvbmdBbnN3ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTogTm8gZGF0YSBsb2FkZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBkaXNhYmxlQXV0bygpIHtcbiAgICBjb25zdCBhdXRvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dG9CdXR0b24nKTtcbiAgICBpZiAoYXV0b0J1dHRvbikge1xuICAgICAgICBhdXRvQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBjaGVja1NlbnRlbmNlKCkge1xuICAgIGNvbnN0IHsgcmlnaHRBcnJheSB9ID0gZ2V0TG9hZGVkRGF0YSgpIHx8IHsgcmlnaHRBcnJheTogW10gfTtcbiAgICBjb25zdCB1c2VyV29yZHNDb3B5ID0gWy4uLnVzZXJBcnJheV07XG4gICAgY29uc3Qgd3JvbmdJbmRpY2VzID0gW107XG4gICAgcmlnaHRBcnJheS5mb3JFYWNoKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAodXNlcldvcmRzQ29weVtpbmRleF0gIT09IHdvcmQpIHtcbiAgICAgICAgICAgIHdyb25nSW5kaWNlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHRhcmdldEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldF9hY3RpdmUnKTtcbiAgICBpZiAodGFyZ2V0RmllbGQpIHtcbiAgICAgICAgY29uc3Qgd29yZENhcmRzID0gQXJyYXkuZnJvbSh0YXJnZXRGaWVsZC5jaGlsZHJlbik7XG4gICAgICAgIHdvcmRDYXJkcy5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdyb25nSW5kaWNlcy5pbmNsdWRlcyhpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3dyb25nQW5zd2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nQW5zd2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250aW51ZUJ1dHRvbicpO1xuICAgIGNvbnN0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrQnV0dG9uJyk7XG4gICAgaWYgKGNvbnRpbnVlQnV0dG9uKSB7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmRpc2FibGVkID0gd3JvbmdJbmRpY2VzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG4gICAgaWYgKHdyb25nSW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGlzYWJsZUF1dG8oKTtcbiAgICAgICAgY29udGludWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2hvd0J1dHRvbicpO1xuICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlQnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGljb25UcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvblRyYW5zbGF0ZScpO1xuICAgICAgICBoYW5kbGVDb250aW51ZUJ1dHRvblN0YXRlKGNvbnRpbnVlQnV0dG9uLCBpY29uVHJhbnNsYXRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dCdXR0b24nKTtcbiAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUJ1dHRvbicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlYXJjaEluZGV4KGZpZWxkLCB0YXJnZXQpIHtcbiAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3Qgd29yZENhcmRzID0gQXJyYXkuZnJvbShmaWVsZC5jaGlsZHJlbik7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRDYXJkID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBpbmRleCA9IHdvcmRDYXJkcy5pbmRleE9mKGNsaWNrZWRDYXJkKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldF9hY3RpdmUnKTtcbiAgICAgICAgaWYgKHRhcmdldEFjdGl2ZSkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RFbXB0eUVsZW1lbnQgPSBBcnJheS5mcm9tKHRhcmdldEFjdGl2ZS5jaGlsZHJlbikuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpO1xuICAgICAgICAgICAgaWYgKGZpcnN0RW1wdHlFbGVtZW50ICYmIGluZGV4ICE9PSAtMSAmJiBjbGlja2VkQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3dvcmRDYXJkJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEZyZWVJbmRleCA9IHVzZXJBcnJheS5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0RnJlZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB1c2VyQXJyYXlbZmlyc3RGcmVlSW5kZXhdID0gY2xpY2tlZENhcmQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckFycmF5LnB1c2goY2xpY2tlZENhcmQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dhcE5vZGVzKGNsaWNrZWRDYXJkLCBmaXJzdEVtcHR5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY2xpY2tlZENhcmQuY2xhc3NMaXN0LmFkZCgnd29yZENhcmQnKTtcbiAgICAgICAgICAgICAgICBjbGlja2VkQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgICAgICAgIGZpcnN0RW1wdHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgICAgICAgICAgZmlyc3RFbXB0eUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd29yZENhcmQnKTtcbiAgICAgICAgICAgICAgICBjaGVja0J1dHRvblN0YXRlKCk7XG4gICAgICAgICAgICAgICAgY2xpY2tlZENhcmQuY2xhc3NMaXN0LmFkZCgnZmFsbEZyb21Ub3AnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsaWNrZWQgY2FyZCBpcyBub3QgdmFsaWQgb3Igbm90IGZvdW5kLicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBY3RpdmUgdGFyZ2V0RmllbGQgbm90IGZvdW5kLicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZWFyY2hSZXZlcnNlSW5kZXgoZmllbGQsIHRhcmdldCkge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3Qgd29yZENhcmRzID0gQXJyYXkuZnJvbSh0YXJnZXQuY2hpbGRyZW4pO1xuICAgICAgICBjb25zdCBjbGlja2VkQ2FyZCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgaW5kZXhGaW5kV29yZCA9IHVzZXJBcnJheS5pbmRleE9mKGNsaWNrZWRDYXJkLmlubmVyVGV4dCk7XG4gICAgICAgIGlmIChpbmRleEZpbmRXb3JkICE9PSAtMSAmJiBjbGlja2VkQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3dvcmRDYXJkJykpIHtcbiAgICAgICAgICAgIHVzZXJBcnJheVtpbmRleEZpbmRXb3JkXSA9ICctJztcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gd29yZENhcmRzLmluZGV4T2YoY2xpY2tlZENhcmQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0RnJlZUluZGV4ID0gQXJyYXkuZnJvbShmaWVsZC5jaGlsZHJlbikuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdEZyZWVJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzd2FwTm9kZXMoY2xpY2tlZENhcmQsIGZpcnN0RnJlZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZENhcmQuY2xhc3NMaXN0LmFkZCgnd29yZENhcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RGcmVlSW5kZXguY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RGcmVlSW5kZXguY2xhc3NMaXN0LnJlbW92ZSgnd29yZENhcmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja0J1dHRvblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNhbGN1bGF0ZUF2ZXJhZ2VDYXJkV2lkdGgobWl4ZWRXb3JkcywgY29udGFpbmVyV2lkdGgpIHtcbiAgICByZXR1cm4gY29udGFpbmVyV2lkdGggLyBtaXhlZFdvcmRzLnJlZHVjZSgoYWNjLCB3b3JkKSA9PiBhY2MgKyB3b3JkLmxlbmd0aCwgMCk7XG59XG5mdW5jdGlvbiBjcmVhdGVFbXB0eUVsZW1lbnQod29yZCwgdG90YWxFeGFtcGxlV29yZExlbmd0aCwgY29udGFpbmVyV2lkdGgpIHtcbiAgICBjb25zdCBwYWRkaW5nID0gNTtcbiAgICBjb25zdCBtaW5DYXJkV2lkdGggPSAxMDA7XG4gICAgY29uc3QgbWF4Q2FyZFdpZHRoID0gMjAwO1xuICAgIGNvbnN0IGZha2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmFrZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2VtcHR5JztcbiAgICBjb25zdCBmYWtlQ2FyZFdpZHRoID0gTWF0aC5tYXgobWluQ2FyZFdpZHRoLCBNYXRoLm1pbihtYXhDYXJkV2lkdGgsICh3b3JkLmxlbmd0aCAvIHRvdGFsRXhhbXBsZVdvcmRMZW5ndGgpICogKGNvbnRhaW5lcldpZHRoIC0gcGFkZGluZyAqIDIpKSk7XG4gICAgZmFrZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtmYWtlQ2FyZFdpZHRofXB4YDtcbiAgICBmYWtlRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gYDAgJHtwYWRkaW5nfXB4YDtcbiAgICByZXR1cm4gZmFrZUVsZW1lbnQ7XG59XG5mdW5jdGlvbiBjcmVhdGVXb3JkQ2FyZCh3b3JkLCBhdmVyYWdlQ2FyZFdpZHRoLCBtaW5DYXJkV2lkdGgsIG1heENhcmRXaWR0aCkge1xuICAgIGNvbnN0IHdvcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd29yZEVsZW1lbnQudGV4dENvbnRlbnQgPSB3b3JkO1xuICAgIHdvcmRFbGVtZW50LmNsYXNzTmFtZSA9ICd3b3JkQ2FyZCc7XG4gICAgY29uc3QgYWRqdXN0ZWRDYXJkV2lkdGggPSBNYXRoLm1pbihtYXhDYXJkV2lkdGgsIE1hdGgubWF4KG1pbkNhcmRXaWR0aCwgd29yZC5sZW5ndGggKiBhdmVyYWdlQ2FyZFdpZHRoKSk7XG4gICAgd29yZEVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHthZGp1c3RlZENhcmRXaWR0aH1weGA7XG4gICAgcmV0dXJuIHdvcmRFbGVtZW50O1xufVxuZnVuY3Rpb24gaW5zZXJ0V29yZHMobWl4ZWRXb3JkcywgcGxheWVyRmllbGQsIHRhcmdldEZpZWxkLCB0ZXh0RXhhbXBsZSwgdGV4dEV4YW1wbGVUcmFuc2xhdGUsIGNvbnRhaW5lcldpZHRoKSB7XG4gICAgd2hpbGUgKHBsYXllckZpZWxkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGxheWVyRmllbGQucmVtb3ZlQ2hpbGQocGxheWVyRmllbGQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHdoaWxlICh0YXJnZXRGaWVsZC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhcmdldEZpZWxkLnJlbW92ZUNoaWxkKHRhcmdldEZpZWxkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBleGFtcGxlV29yZHMgPSB0ZXh0RXhhbXBsZS5zcGxpdCgnICcpO1xuICAgIGNvbnN0IHRvdGFsRXhhbXBsZVdvcmRMZW5ndGggPSBleGFtcGxlV29yZHMucmVkdWNlKChhY2MsIHdvcmQpID0+IGFjYyArIHdvcmQubGVuZ3RoLCAwKTtcbiAgICBjb25zdCBhdmVyYWdlQ2FyZFdpZHRoID0gY2FsY3VsYXRlQXZlcmFnZUNhcmRXaWR0aChtaXhlZFdvcmRzLCBjb250YWluZXJXaWR0aCk7XG4gICAgZXhhbXBsZVdvcmRzLmZvckVhY2goKHdvcmQpID0+IHtcbiAgICAgICAgY29uc3QgZmFrZUVsZW1lbnQgPSBjcmVhdGVFbXB0eUVsZW1lbnQod29yZCwgdG90YWxFeGFtcGxlV29yZExlbmd0aCwgY29udGFpbmVyV2lkdGgpO1xuICAgICAgICB0YXJnZXRGaWVsZC5hcHBlbmRDaGlsZChmYWtlRWxlbWVudCk7XG4gICAgfSk7XG4gICAgbWl4ZWRXb3Jkcy5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmRFbGVtZW50ID0gY3JlYXRlV29yZENhcmQod29yZCwgYXZlcmFnZUNhcmRXaWR0aCwgMTAwLCAyMDApO1xuICAgICAgICB3b3JkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3b3JkQ2FyZCcpO1xuICAgICAgICBwbGF5ZXJGaWVsZC5hcHBlbmRDaGlsZCh3b3JkRWxlbWVudCk7XG4gICAgfSk7XG4gICAgZ2FtZVBhZ2VWaWV3LnNlbnRlbmNlVHJhbnNsYXRlLnRleHRDb250ZW50ID0gdGV4dEV4YW1wbGVUcmFuc2xhdGU7XG4gICAgc2VhcmNoSW5kZXgocGxheWVyRmllbGQsIHRhcmdldEZpZWxkKTtcbiAgICBzZWFyY2hSZXZlcnNlSW5kZXgocGxheWVyRmllbGQsIHRhcmdldEZpZWxkKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVN0YXJ0QnV0dG9uQ2xpY2soKSB7XG4gICAgZ2FtZVBhZ2VWaWV3LnJlbmRlcigpO1xuICAgIGZldGNoRGF0YUdhbWUoKTtcbiAgICB1c2VyUGFnZVZpZXcud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKEFDVElWRV9DTEFTU19OQU1FKTtcbn1cbmZ1bmN0aW9uIGFuaW1hdGVXb3JkQ2FyZHMod29yZENhcmRzLCB0YXJnZXRGaWVsZCkge1xuICAgIHdvcmRDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZmFsbCcpO1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldEZpZWxkLnJlbW92ZUNoaWxkKGNhcmQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NMb2FkZWREYXRhKGxvYWRlZERhdGEpIHtcbiAgICBjb25zdCB7IHJpZ2h0QXJyYXkgfSA9IGxvYWRlZERhdGE7XG4gICAgY29uc3QgdGFyZ2V0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0X2FjdGl2ZScpO1xuICAgIGNvbnN0IHBsYXllckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1maWVsZCcpO1xuICAgIGNvbnN0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrQnV0dG9uJyk7XG4gICAgY29uc3QgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGludWVCdXR0b24nKTtcbiAgICBpZiAodGFyZ2V0RmllbGQgJiYgcGxheWVyRmllbGQgJiYgY2hlY2tCdXR0b24gJiYgY29udGludWVCdXR0b24pIHtcbiAgICAgICAgY29uc3Qgd29yZENhcmRzID0gQXJyYXkuZnJvbSh0YXJnZXRGaWVsZC5jaGlsZHJlbik7XG4gICAgICAgIGFuaW1hdGVXb3JkQ2FyZHMod29yZENhcmRzLCB0YXJnZXRGaWVsZCk7XG4gICAgICAgIHRhcmdldEZpZWxkLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJpZ2h0QXJyYXkuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmRFbGVtZW50ID0gY3JlYXRlV29yZENhcmQod29yZCwgMTAwLCAxMDAsIDIwMCk7XG4gICAgICAgICAgICAgICAgd29yZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFsbEZyb21Ub3AnKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRGaWVsZC5hcHBlbmRDaGlsZCh3b3JkRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVzZXJBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcmlnaHRBcnJheS5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgdXNlckFycmF5LnB1c2god29yZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uU3RhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1maWVsZCAud29yZENhcmQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXRfYWN0aXZlJyk7XG4gICAgICAgICAgICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYW50TW92ZUJsb2NrJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2NhbnRNb3ZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlQnV0dG9uJyk7XG4gICAgICAgICAgICBjb250aW51ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaG93QnV0dG9uJyk7XG4gICAgICAgICAgICBjb250aW51ZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgaWNvblRyYW5zbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uVHJhbnNsYXRlJyk7XG4gICAgICAgICAgICBoYW5kbGVDb250aW51ZUJ1dHRvblN0YXRlKGNvbnRpbnVlQnV0dG9uLCBpY29uVHJhbnNsYXRlKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoYW5kbGVBdXRvQnV0dG9uQ2xpY2soYnV0dG9uKSB7XG4gICAgY29uc3QgbG9hZGVkRGF0YSA9IGdldExvYWRlZERhdGEoKTtcbiAgICBjb25zdCBidXR0b25Ub0Rpc2FibGUgPSBidXR0b247XG4gICAgaWYgKGxvYWRlZERhdGEpIHtcbiAgICAgICAgcHJvY2Vzc0xvYWRlZERhdGEobG9hZGVkRGF0YSk7XG4gICAgfVxuICAgIGJ1dHRvblRvRGlzYWJsZS5kaXNhYmxlZCA9IHRydWU7XG59XG5mdW5jdGlvbiBoYW5kbGVDb250aW51ZUJ1dHRvbkNsaWNrKCkge1xuICAgIGNvbnN0IGF1dG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0b0J1dHRvbicpO1xuICAgIGlmIChhdXRvQnV0dG9uKSB7XG4gICAgICAgIGF1dG9CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgbmV4dExldmVsKCk7XG4gICAgY2hlY2tCdXR0b25TdGF0ZSgpO1xuICAgIHVzZXJBcnJheS5sZW5ndGggPSAwO1xuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0X2FjdGl2ZScpO1xuICAgIGlmIChjdXJyZW50QWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgIGN1cnJlbnRBY3RpdmVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndGFyZ2V0X2FjdGl2ZScpO1xuICAgICAgICBjb25zdCBuZXh0VGFyZ2V0ID0gY3VycmVudEFjdGl2ZVRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmIChuZXh0VGFyZ2V0KSB7XG4gICAgICAgICAgICBuZXh0VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RhcmdldF9hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldC1maWVsZCcpO1xuICAgICAgICAgICAgaWYgKGZpcnN0VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZmlyc3RUYXJnZXQuY2xhc3NMaXN0LmFkZCgndGFyZ2V0X2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrQnV0dG9uJyk7XG4gICAgY29uc3QgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGludWVCdXR0b24nKTtcbiAgICBjb25zdCBpY29uVHJhbnNsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25UcmFuc2xhdGUnKTtcbiAgICBoYW5kbGVDb250aW51ZUJ1dHRvblN0YXRlKGNvbnRpbnVlQnV0dG9uLCBpY29uVHJhbnNsYXRlKTtcbiAgICBpZiAoY2hlY2tCdXR0b24pIHtcbiAgICAgICAgY2hlY2tCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjb250aW51ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93QnV0dG9uJyk7XG4gICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUJ1dHRvbicpO1xufVxuZXhwb3J0IHsgaW5zZXJ0V29yZHMsIGNoZWNrQnV0dG9uU3RhdGUsIGhhbmRsZVN0YXJ0QnV0dG9uQ2xpY2ssIGdhbWVQYWdlVmlldywgY2hlY2tTZW50ZW5jZSwgaGFuZGxlQ29udGludWVCdXR0b25DbGljaywgaGFuZGxlQXV0b0J1dHRvbkNsaWNrLCBoYW5kbGVDb250aW51ZUJ1dHRvblN0YXRlLCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnYW1lUGFnZVZpZXcsIGluc2VydFdvcmRzIH0gZnJvbSAnLi9jYXJkcyc7XG5pbXBvcnQgbWl4ZWRBcnJheSBmcm9tICcuLi8uLi91dGlscy9taXhBcnJheSc7XG5sZXQgbG9hZGVkRGF0YUFycmF5ID0gW107XG5sZXQgY3VycmVudFRhcmdldEZpZWxkSW5kZXggPSAwO1xuZnVuY3Rpb24gZ2V0TG9hZGVkRGF0YSgpIHtcbiAgICByZXR1cm4gbG9hZGVkRGF0YUFycmF5W2N1cnJlbnRUYXJnZXRGaWVsZEluZGV4XSB8fCBudWxsO1xufVxuZnVuY3Rpb24gY2xlYXJBbGxUYXJnZXRGaWVsZHMoKSB7XG4gICAgZ2FtZVBhZ2VWaWV3LnRhcmdldENvbnRhaW5lci50YXJnZXRGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgndGFyZ2V0X2FjdGl2ZScpO1xuICAgICAgICB3aGlsZSAoZmllbGQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZmllbGQucmVtb3ZlQ2hpbGQoZmllbGQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBmaXJzdFRhcmdldCA9IGdhbWVQYWdlVmlldy50YXJnZXRDb250YWluZXIudGFyZ2V0RmllbGRzWzBdO1xuICAgIGlmIChmaXJzdFRhcmdldCkge1xuICAgICAgICBmaXJzdFRhcmdldC5jbGFzc0xpc3QuYWRkKCd0YXJnZXRfYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGxvYWRlZERhdGEgPSBnZXRMb2FkZWREYXRhKCk7XG4gICAgICAgIGlmIChsb2FkZWREYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFNlbnRlbmNlID0gbG9hZGVkRGF0YS50ZXh0RXhhbXBsZTtcbiAgICAgICAgICAgIGluc2VydFdvcmRzKGxvYWRlZERhdGEubWl4ZWRXb3JkcywgZ2FtZVBhZ2VWaWV3LnBsYXllckZpZWxkLCBmaXJzdFRhcmdldCwgZmlyc3RTZW50ZW5jZSwgbG9hZGVkRGF0YS50ZXh0RXhhbXBsZVRyYW5zbGF0ZSwgNzAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGxvYWRSYW5kb21Sb3VuZCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVGFicmlzZWwvcnNzLXB1enpsZS1kYXRhL21haW4vZGF0YS93b3JkQ29sbGVjdGlvbkxldmVsMS5qc29uJyk7XG4gICAgICAgIGNvbnN0IHsgcm91bmRzIH0gPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IHJhbmRvbVJvdW5kSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3VuZHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmFuZG9tUm91bmQgPSByb3VuZHNbcmFuZG9tUm91bmRJbmRleF07XG4gICAgICAgIGNvbnN0IHNlbnRlbmNlcyA9IHJhbmRvbVJvdW5kLndvcmRzO1xuICAgICAgICBpZiAoIXNlbnRlbmNlcyB8fCBzZW50ZW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBzZW50ZW5jZXMgZm91bmQgaW4gdGhlIHJvdW5kLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU2VudGVuY2VzID0gc2VudGVuY2VzLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgbG9hZGVkRGF0YUFycmF5ID0gc2VsZWN0ZWRTZW50ZW5jZXMubWFwKChzZW50ZW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB0ZXh0RXhhbXBsZSwgYXVkaW9FeGFtcGxlLCB0ZXh0RXhhbXBsZVRyYW5zbGF0ZSB9ID0gc2VudGVuY2U7XG4gICAgICAgICAgICBjb25zdCByaWdodEFycmF5ID0gc2VudGVuY2UudGV4dEV4YW1wbGUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IG1peGVkV29yZHMgPSBtaXhlZEFycmF5KHJpZ2h0QXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgdGV4dEV4YW1wbGUsIGF1ZGlvRXhhbXBsZSwgdGV4dEV4YW1wbGVUcmFuc2xhdGUsIG1peGVkV29yZHMsIHJpZ2h0QXJyYXkgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB1cGRhdGVHYW1lVmlldyhsb2FkZWREYXRhKSB7XG4gICAgaWYgKCFsb2FkZWREYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZ2FtZVBhZ2VWaWV3LnNlbnRlbmNlVHJhbnNsYXRlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZ2FtZVBhZ2VWaWV3LnNlbnRlbmNlVHJhbnNsYXRlLnRleHRDb250ZW50ID0gbG9hZGVkRGF0YS50ZXh0RXhhbXBsZVRyYW5zbGF0ZTtcbiAgICBjb25zdCBmaXJzdFNlbnRlbmNlID0gbG9hZGVkRGF0YS50ZXh0RXhhbXBsZTtcbiAgICBpbnNlcnRXb3Jkcyhsb2FkZWREYXRhLm1peGVkV29yZHMsIGdhbWVQYWdlVmlldy5wbGF5ZXJGaWVsZCwgZ2FtZVBhZ2VWaWV3LnRhcmdldENvbnRhaW5lci50YXJnZXRGaWVsZHNbY3VycmVudFRhcmdldEZpZWxkSW5kZXhdLCBmaXJzdFNlbnRlbmNlLCBsb2FkZWREYXRhLnRleHRFeGFtcGxlVHJhbnNsYXRlLCA3MDApO1xufVxuZnVuY3Rpb24gZmV0Y2hEYXRhR2FtZSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGxvYWRlZERhdGFBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBsb2FkUmFuZG9tUm91bmQoKTtcbiAgICAgICAgICAgICAgICBjbGVhckFsbFRhcmdldEZpZWxkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9hZGVkRGF0YSA9IGxvYWRlZERhdGFBcnJheVtjdXJyZW50VGFyZ2V0RmllbGRJbmRleF07XG4gICAgICAgICAgICB1cGRhdGVHYW1lVmlldyhsb2FkZWREYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBsb2FkZWREYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYW5kIHBhcnNpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gbmV4dExldmVsKCkge1xuICAgIGN1cnJlbnRUYXJnZXRGaWVsZEluZGV4ICs9IDE7XG4gICAgaWYgKGN1cnJlbnRUYXJnZXRGaWVsZEluZGV4IDwgbG9hZGVkRGF0YUFycmF5Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBsb2FkZWREYXRhID0gbG9hZGVkRGF0YUFycmF5W2N1cnJlbnRUYXJnZXRGaWVsZEluZGV4XTtcbiAgICAgICAgaWYgKGxvYWRlZERhdGEgJiYgbG9hZGVkRGF0YS50ZXh0RXhhbXBsZSkge1xuICAgICAgICAgICAgdXBkYXRlR2FtZVZpZXcobG9hZGVkRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdMb2FkZWQgZGF0YSBvciB0ZXh0RXhhbXBsZSBpcyB1bmRlZmluZWQuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBbGwgbGV2ZWxzIGNvbXBsZXRlZCEnKTtcbiAgICAgICAgY2xlYXJBbGxUYXJnZXRGaWVsZHMoKTtcbiAgICAgICAgbG9hZGVkRGF0YUFycmF5LnNwbGljZSgwLCAxMCk7XG4gICAgICAgIGN1cnJlbnRUYXJnZXRGaWVsZEluZGV4ID0gMDtcbiAgICAgICAgaWYgKGxvYWRlZERhdGFBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZldGNoRGF0YUdhbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZERhdGEgPSBsb2FkZWREYXRhQXJyYXlbY3VycmVudFRhcmdldEZpZWxkSW5kZXhdO1xuICAgICAgICAgICAgaWYgKGxvYWRlZERhdGEgJiYgbG9hZGVkRGF0YS50ZXh0RXhhbXBsZSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUdhbWVWaWV3KGxvYWRlZERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTG9hZGVkIGRhdGEgb3IgdGV4dEV4YW1wbGUgaXMgdW5kZWZpbmVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHsgZmV0Y2hEYXRhR2FtZSwgZ2V0TG9hZGVkRGF0YSwgbmV4dExldmVsLCBjbGVhckFsbFRhcmdldEZpZWxkcyB9O1xuIiwiaW1wb3J0IHsgZ2FtZVBhZ2VWaWV3IH0gZnJvbSAnLi9jYXJkcyc7XG5pbXBvcnQgeyBnZXRMb2FkZWREYXRhIH0gZnJvbSAnLi9kYXRhU3RvcmFnZSc7XG5mdW5jdGlvbiB0cmFuc2xhdGVTd2l0Y2goaWNvblRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IG5vdEFjdGl2ZSA9IGljb25UcmFuc2xhdGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3RBY3RpdmUnKTtcbiAgICBpZiAoIW5vdEFjdGl2ZSkge1xuICAgICAgICBnYW1lUGFnZVZpZXcuc2VudGVuY2VUcmFuc2xhdGUuY2xhc3NMaXN0LnJlbW92ZSgnZmFsbEZyb21Ub3AnKTtcbiAgICAgICAgaWYgKGdhbWVQYWdlVmlldy5zZW50ZW5jZVRyYW5zbGF0ZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGdhbWVQYWdlVmlldy5zZW50ZW5jZVRyYW5zbGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWNvblRyYW5zbGF0ZS5jbGFzc0xpc3QuYWRkKCdub3RBY3RpdmUnKTtcbiAgICB9XG4gICAgaWYgKG5vdEFjdGl2ZSkge1xuICAgICAgICBnYW1lUGFnZVZpZXcuc2VudGVuY2VUcmFuc2xhdGUuY2xhc3NMaXN0LmFkZCgnZmFsbEZyb21Ub3AnKTtcbiAgICAgICAgaWYgKGdhbWVQYWdlVmlldy5zZW50ZW5jZVRyYW5zbGF0ZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGdhbWVQYWdlVmlldy5zZW50ZW5jZVRyYW5zbGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGljb25UcmFuc2xhdGUuY2xhc3NMaXN0LnJlbW92ZSgnbm90QWN0aXZlJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gc291bmRTd2l0Y2goaWNvblNvdW5kKSB7XG4gICAgY29uc3Qgbm90QWN0aXZlID0gaWNvblNvdW5kLmNsYXNzTGlzdC5jb250YWlucygnbm90QWN0aXZlJyk7XG4gICAgY29uc3Qgc291bmRUcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291bmRUcmFuc2xhdGUnKTtcbiAgICBpZiAoIW5vdEFjdGl2ZSkge1xuICAgICAgICBzb3VuZFRyYW5zbGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdhcHBlYXInKTtcbiAgICAgICAgaWYgKHNvdW5kVHJhbnNsYXRlKSB7XG4gICAgICAgICAgICBzb3VuZFRyYW5zbGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWNvblNvdW5kLmNsYXNzTGlzdC5hZGQoJ25vdEFjdGl2ZScpO1xuICAgIH1cbiAgICBpZiAobm90QWN0aXZlKSB7XG4gICAgICAgIHNvdW5kVHJhbnNsYXRlLmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICAgICAgICBpZiAoc291bmRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgIHNvdW5kVHJhbnNsYXRlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWNvblNvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ25vdEFjdGl2ZScpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBsYXlTb3VuZCgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgYXVkaW9VcmwgPSAoX2EgPSBnZXRMb2FkZWREYXRhKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hdWRpb0V4YW1wbGU7XG4gICAgY29uc3QgYmFzZVVybCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVGFicmlzZWwvcnNzLXB1enpsZS1kYXRhL21haW4vJztcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhiYXNlVXJsICsgYXVkaW9VcmwpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291bmRUcmFuc2xhdGUnKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigncGxheScsICgpID0+IHtcbiAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgIGljb24uc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMTUwJSknO1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdwdWxzZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChpY29uKSB7XG4gICAgICAgICAgICBpY29uLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgncHVsc2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IHsgdHJhbnNsYXRlU3dpdGNoLCBzb3VuZFN3aXRjaCwgcGxheVNvdW5kIH07XG4iLCJpbXBvcnQgTG9naW5QYWdlVmlldyBmcm9tICcuLi8uLi92aWV3cy9sb2dpblBhZ2VWaWV3JztcbmNsYXNzIExvZ2luUGFnZVZpZXdJbnN0YW5jZSB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIUxvZ2luUGFnZVZpZXdJbnN0YW5jZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgTG9naW5QYWdlVmlld0luc3RhbmNlLmluc3RhbmNlID0gbmV3IExvZ2luUGFnZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTG9naW5QYWdlVmlld0luc3RhbmNlLmluc3RhbmNlO1xuICAgIH1cbn1cbkxvZ2luUGFnZVZpZXdJbnN0YW5jZS5pbnN0YW5jZSA9IG51bGw7XG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2VWaWV3SW5zdGFuY2U7XG4iLCJpbXBvcnQgYnV0dG9uU3VibWl0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbmZ1bmN0aW9uIGlzVmFsaWRFbmdsaXNoQWxwaGFiZXQoaW5wdXQpIHtcbiAgICByZXR1cm4gL15bQS1aYS16LV0rJC8udGVzdChpbnB1dCk7XG59XG5mdW5jdGlvbiBpc0ZpcnN0TGV0dGVyVXBwZXJjYXNlKGlucHV0KSB7XG4gICAgcmV0dXJuIC9eW0EtWl0vLnRlc3QoaW5wdXQpO1xufVxuZnVuY3Rpb24gaGFzTWluaW11bUxlbmd0aChpbnB1dCwgbWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGlucHV0Lmxlbmd0aCA+PSBtaW5MZW5ndGg7XG59XG5mdW5jdGlvbiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5wdXQsIG1lc3NhZ2UpIHtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdub1ZhbGlkJyk7XG4gICAgaWYgKGlucHV0LnZhbGlkYXRpb25NZXNzYWdlICE9PSBtZXNzYWdlKSB7XG4gICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpO1xuICAgICAgICBpbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRvZ2dsZVN1Ym1pdEJ1dHRvbihpbnB1dE5hbWVFbGVtZW50LCBpbnB1dExhc3ROYW1lRWxlbWVudCkge1xuICAgIGlmIChpbnB1dE5hbWVFbGVtZW50ICYmIGlucHV0TGFzdE5hbWVFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TmFtZVZhbGlkID0gaW5wdXROYW1lRWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGNvbnN0IGxhc3ROYW1lVmFsaWQgPSBpbnB1dExhc3ROYW1lRWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGlmIChmaXJzdE5hbWVWYWxpZCAmJiBsYXN0TmFtZVZhbGlkKSB7XG4gICAgICAgICAgICBidXR0b25TdWJtaXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgaW5wdXROYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdub1ZhbGlkJyk7XG4gICAgICAgICAgICBpbnB1dExhc3ROYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdub1ZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBidXR0b25TdWJtaXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZElucHV0RXZlbnRMaXN0ZW5lcnMoaW5wdXROYW1lRWxlbWVudCwgaW5wdXRMYXN0TmFtZUVsZW1lbnQpIHtcbiAgICBpbnB1dE5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXROYW1lRWxlbWVudC52YWx1ZTtcbiAgICAgICAgaWYgKCFpbnB1dFZhbHVlLnRyaW0oKSkge1xuICAgICAgICAgICAgaW5wdXROYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdub1ZhbGlkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1ZhbGlkRW5nbGlzaEFscGhhYmV0KGlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICBzaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5wdXROYW1lRWxlbWVudCwgJ09ubHkgRW5nbGlzaCBhbHBoYWJldCBsZXR0ZXJzIGFuZCBoeXBoZW4gYXJlIGFsbG93ZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzRmlyc3RMZXR0ZXJVcHBlcmNhc2UoaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHNob3dWYWxpZGF0aW9uTWVzc2FnZShpbnB1dE5hbWVFbGVtZW50LCAnRmlyc3QgbGV0dGVyIHNob3VsZCBiZSB1cHBlcmNhc2UuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWhhc01pbmltdW1MZW5ndGgoaW5wdXRWYWx1ZSwgMykpIHtcbiAgICAgICAgICAgIHNob3dWYWxpZGF0aW9uTWVzc2FnZShpbnB1dE5hbWVFbGVtZW50LCAnTWluaW11bSBsZW5ndGggaXMgMyBjaGFyYWN0ZXJzLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5wdXROYW1lRWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgICAgICBpbnB1dE5hbWVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vVmFsaWQnKTtcbiAgICAgICAgICAgIHRvZ2dsZVN1Ym1pdEJ1dHRvbihpbnB1dE5hbWVFbGVtZW50LCBpbnB1dExhc3ROYW1lRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpbnB1dExhc3ROYW1lRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0TGFzdE5hbWVFbGVtZW50LnZhbHVlO1xuICAgICAgICBpZiAoIWlucHV0VmFsdWUudHJpbSgpKSB7XG4gICAgICAgICAgICBpbnB1dExhc3ROYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdub1ZhbGlkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1ZhbGlkRW5nbGlzaEFscGhhYmV0KGlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICBzaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5wdXRMYXN0TmFtZUVsZW1lbnQsICdPbmx5IEVuZ2xpc2ggYWxwaGFiZXQgbGV0dGVycyBhbmQgaHlwaGVuIGFyZSBhbGxvd2VkLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc0ZpcnN0TGV0dGVyVXBwZXJjYXNlKGlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICBzaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5wdXRMYXN0TmFtZUVsZW1lbnQsICdGaXJzdCBsZXR0ZXIgc2hvdWxkIGJlIHVwcGVyY2FzZS4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaGFzTWluaW11bUxlbmd0aChpbnB1dFZhbHVlLCA0KSkge1xuICAgICAgICAgICAgc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGlucHV0TGFzdE5hbWVFbGVtZW50LCAnTWluaW11bSBsZW5ndGggaXMgNCBjaGFyYWN0ZXJzLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5wdXRMYXN0TmFtZUVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICAgICAgaW5wdXRMYXN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm9WYWxpZCcpO1xuICAgICAgICAgICAgdG9nZ2xlU3VibWl0QnV0dG9uKGlucHV0TmFtZUVsZW1lbnQsIGlucHV0TGFzdE5hbWVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IHsgaXNWYWxpZEVuZ2xpc2hBbHBoYWJldCwgaXNGaXJzdExldHRlclVwcGVyY2FzZSwgaGFzTWluaW11bUxlbmd0aCwgc2hvd1ZhbGlkYXRpb25NZXNzYWdlLCB0b2dnbGVTdWJtaXRCdXR0b24sIGFkZElucHV0RXZlbnRMaXN0ZW5lcnMsIH07XG4iLCJpbXBvcnQgeyBpbnB1dE5hbWUsIGlucHV0TGFzdE5hbWUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0cyc7XG5pbXBvcnQgTG9naW5QYWdlVmlldyBmcm9tICcuLi8uLi92aWV3cy9sb2dpblBhZ2VWaWV3JztcbmltcG9ydCB7IHVzZXJQYWdlVmlldyB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvYXBwJztcbmZ1bmN0aW9uIGdldFVzZXJEYXRhKCkge1xuICAgIGNvbnN0IHVzZXJEYXRhU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICBsZXQgdXNlck5hbWUgPSBudWxsO1xuICAgIGxldCB1c2VyU3VybmFtZSA9IG51bGw7XG4gICAgaWYgKHVzZXJEYXRhU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZSh1c2VyRGF0YVN0cmluZyk7XG4gICAgICAgIHVzZXJOYW1lID0gdXNlckRhdGEuZmlyc3ROYW1lO1xuICAgICAgICB1c2VyU3VybmFtZSA9IHVzZXJEYXRhLnN1cm5hbWU7XG4gICAgfVxuICAgIHJldHVybiB7IHVzZXJOYW1lLCB1c2VyU3VybmFtZSB9O1xufVxuZnVuY3Rpb24gcmVtb3ZlRm9ybUVsZW1lbnQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICB1c2VyUGFnZVZpZXcucmVuZGVyKCk7XG59XG5mdW5jdGlvbiByZW1vdmVVc2VyUGFnZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGxvZ2luUGFnZVZpZXcgPSBuZXcgTG9naW5QYWdlVmlldygpO1xuICAgIGxvZ2luUGFnZVZpZXcucmVuZGVyKCk7XG59XG5mdW5jdGlvbiBzYXZlVXNlckRhdGFUb0xvY2FsU3RvcmFnZShkYXRhKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgcmVtb3ZlRm9ybUVsZW1lbnQoKTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVVzZXJEYXRhRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCB1c2VyRGF0YVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgaWYgKHVzZXJEYXRhU3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UodXNlckRhdGFTdHJpbmcpO1xuICAgICAgICAgICAgaWYgKHVzZXJEYXRhLmZpcnN0TmFtZSAmJiB1c2VyRGF0YS5zdXJuYW1lKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgdXNlciBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufVxuZnVuY3Rpb24gaGFuZGxlTG9nb3V0KCkge1xuICAgIGRlbGV0ZVVzZXJEYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xufVxuZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBmaXJzdE5hbWU6IGlucHV0TmFtZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgPyBpbnB1dE5hbWUudmFsdWUgOiAnJyxcbiAgICAgICAgc3VybmFtZTogaW5wdXRMYXN0TmFtZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgPyBpbnB1dExhc3ROYW1lLnZhbHVlIDogJycsXG4gICAgfTtcbiAgICBzYXZlVXNlckRhdGFUb0xvY2FsU3RvcmFnZShkYXRhKTtcbn1cbmV4cG9ydCB7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlTG9nb3V0LCBzYXZlVXNlckRhdGFUb0xvY2FsU3RvcmFnZSwgcmVtb3ZlVXNlclBhZ2UsIGdldFVzZXJEYXRhIH07XG4iLCJpbXBvcnQgVXNlclBhZ2VWaWV3IGZyb20gJy4uLy4uL3ZpZXdzL3VzZXJQYWdlVmlldyc7XG5jbGFzcyBVc2VyUGFnZVZpZXdJbnN0YW5jZSB7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIVVzZXJQYWdlVmlld0luc3RhbmNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBVc2VyUGFnZVZpZXdJbnN0YW5jZS5pbnN0YW5jZSA9IG5ldyBVc2VyUGFnZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVXNlclBhZ2VWaWV3SW5zdGFuY2UuaW5zdGFuY2U7XG4gICAgfVxufVxuVXNlclBhZ2VWaWV3SW5zdGFuY2UuaW5zdGFuY2UgPSBudWxsO1xuZXhwb3J0IGRlZmF1bHQgVXNlclBhZ2VWaWV3SW5zdGFuY2U7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzd2FwTm9kZXMobm9kZTEsIG5vZGUyKSB7XG4gICAgY29uc3QgcGFyZW50MSA9IG5vZGUxLnBhcmVudE5vZGU7XG4gICAgY29uc3QgcGFyZW50MiA9IG5vZGUyLnBhcmVudE5vZGU7XG4gICAgY29uc3QgbmV4dE5vZGUxID0gbm9kZTEubmV4dFNpYmxpbmc7XG4gICAgY29uc3QgbmV4dE5vZGUyID0gbm9kZTIubmV4dFNpYmxpbmc7XG4gICAgaWYgKHBhcmVudDEgJiYgcGFyZW50Mikge1xuICAgICAgICBpZiAobmV4dE5vZGUxKSB7XG4gICAgICAgICAgICBwYXJlbnQxLmluc2VydEJlZm9yZShub2RlMiwgbmV4dE5vZGUxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudDEuYXBwZW5kQ2hpbGQobm9kZTIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0Tm9kZTIpIHtcbiAgICAgICAgICAgIHBhcmVudDIuaW5zZXJ0QmVmb3JlKG5vZGUxLCBuZXh0Tm9kZTIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Mi5hcHBlbmRDaGlsZChub2RlMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXgoYXJyYXkpIHtcbiAgICBjb25zdCBtaXhlZEFycmF5ID0gYXJyYXkuc2xpY2UoKTtcbiAgICBmb3IgKGxldCBpID0gbWl4ZWRBcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgW21peGVkQXJyYXlbaV0sIG1peGVkQXJyYXlbal1dID0gW21peGVkQXJyYXlbal0sIG1peGVkQXJyYXlbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gbWl4ZWRBcnJheTtcbn1cbiIsImZ1bmN0aW9uIGNoZWNrSXNVc2VyTG9naW4oKSB7XG4gICAgY29uc3QgdXNlckRhdGFTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICAgIGlmICh1c2VyRGF0YVN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKHVzZXJEYXRhU3RyaW5nKTtcbiAgICAgICAgICAgIHJldHVybiAhIXVzZXJEYXRhLmZpcnN0TmFtZSAmJiAhIXVzZXJEYXRhLnN1cm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2U6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNoZWNrSXNVc2VyTG9naW47XG4iLCJpbXBvcnQgQ3JlYXRvckVsZW1lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9jcmVhdG9yRWxlbWVudCc7XG5pbXBvcnQgVGFyZ2V0Q29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvdGFyZ2V0Q29udGFpbmVyJztcbmltcG9ydCBCdXR0b25zR2FtZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2dhbWVCdXR0b25zJztcbmltcG9ydCB7IGdldFVzZXJEYXRhIH0gZnJvbSAnLi4vc2VydmljZS91c2VyUGFnZS9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IEhpbnRCdXR0b25zIGZyb20gJy4uL2NvbXBvbmVudHMvaGludEJ1dHRvbnMnO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSAnLi4vc2VydmljZS9nYW1lUGFnZS9oaW50cyc7XG5jb25zdCBXUkFQUEVSX0NMQVNTX05BTUUgPSAncGFnZS13cmFwcGVyJztcbmNvbnN0IEFDVElWRV9DTEFTU19OQU1FID0gJ2FjdGl2ZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGFnZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhcmdldEZpZWxkID0gbnVsbDtcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSBuZXcgQ3JlYXRvckVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogWyd3cmFwcGVyR2FtZVBhZ2UnXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXJFbGVtZW50LmdldEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoV1JBUFBFUl9DTEFTU19OQU1FKTtcbiAgICAgICAgdGhpcy5ncmVldGluZ3MgPSBuZXcgQ3JlYXRvckVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnaDMnLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuaGVhZGVyRWxlbWVudCA9IG5ldyBDcmVhdG9yRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdoZWFkZXInLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuc2VudGVuY2VUcmFuc2xhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRoaXMuc2VudGVuY2VUcmFuc2xhdGUuY2xhc3NOYW1lID0gJ3NlbnRlbmNlVHJhbnNsYXRlJztcbiAgICAgICAgdGhpcy5zZW50ZW5jZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnNlbnRlbmNlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZW50ZW5jZSc7XG4gICAgICAgIHRoaXMuc291bmRUcmFuc2xhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5zb3VuZFRyYW5zbGF0ZS5jbGFzc05hbWUgPSAnc291bmRUcmFuc2xhdGUnO1xuICAgICAgICB0aGlzLnNvdW5kVHJhbnNsYXRlLmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICAgICAgICB0aGlzLnNlbnRlbmNlVHJhbnNsYXRlLmNsYXNzTGlzdC5hZGQoJ2ZhbGxGcm9tVG9wJyk7XG4gICAgICAgIHRoaXMuc291bmRUcmFuc2xhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5U291bmQpO1xuICAgICAgICB0aGlzLnNlbnRlbmNlQ29udGFpbmVyLmFwcGVuZCh0aGlzLnNlbnRlbmNlVHJhbnNsYXRlLCB0aGlzLnNvdW5kVHJhbnNsYXRlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnBsYXllckZpZWxkLmNsYXNzTmFtZSA9ICdwbGF5ZXItZmllbGQnO1xuICAgICAgICB0aGlzLnRhcmdldENvbnRhaW5lciA9IG5ldyBUYXJnZXRDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGdldFVzZXJEYXRhKCk7XG4gICAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5ncmVldGluZ3MudGV4dENvbnRlbnQgPSBgSXTigJlzIGdvb2QgdG8gc2VlIHlvdSwgJHt1c2VyRGF0YS51c2VyTmFtZX0gJHt1c2VyRGF0YS51c2VyU3VybmFtZX0hYDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5ncmVldGluZ3MpO1xuICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyRWxlbWVudCwgdGhpcy5zZW50ZW5jZUNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMudGFyZ2V0Q29udGFpbmVyLnJlbmRlcih0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kKHRoaXMucGxheWVyRmllbGQpO1xuICAgICAgICB0aGlzLnNldHVwQnV0dG9ucygpO1xuICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kKHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKEFDVElWRV9DTEFTU19OQU1FKSkge1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKEFDVElWRV9DTEFTU19OQU1FKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKEFDVElWRV9DTEFTU19OQU1FKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldHVwQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgZ2FtZUJ1dHRvbnMgPSBuZXcgQnV0dG9uc0dhbWVDb21wb25lbnQoKTtcbiAgICAgICAgZ2FtZUJ1dHRvbnMucmVuZGVyKHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGhpbnRCdXR0b25zID0gbmV3IEhpbnRCdXR0b25zKCk7XG4gICAgICAgIGhpbnRCdXR0b25zLnJlbmRlcih0aGlzLmhlYWRlckVsZW1lbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDcmVhdG9yRWxlbWVudCBmcm9tICcuLi9jb21wb25lbnRzL2NyZWF0b3JFbGVtZW50JztcbmltcG9ydCBmb3JtRWxlbWVudCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0nO1xuY29uc3QgV1JBUFBFUl9DTEFTU19OQU1FID0gJ3BhZ2Utd3JhcHBlcic7XG5jb25zdCBBQ1RJVkVfQ0xBU1NfTkFNRSA9ICdhY3RpdmUnO1xuY2xhc3MgTG9naW5QYWdlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gbmV3IENyZWF0b3JFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFsnd3JhcHBlckxvZ2luUGFnZSddLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXJFbGVtZW50O1xuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChXUkFQUEVSX0NMQVNTX05BTUUpO1xuICAgICAgICB0aGlzLmZvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmZvcm1FbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKEFDVElWRV9DTEFTU19OQU1FKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlVmlldztcbiIsImltcG9ydCBDcmVhdG9yRWxlbWVudCBmcm9tICcuLi9jb21wb25lbnRzL2NyZWF0b3JFbGVtZW50JztcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IFRpdGxlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGUnO1xuaW1wb3J0IHsgaGFuZGxlU3RhcnRCdXR0b25DbGljayB9IGZyb20gJy4uL3NlcnZpY2UvZ2FtZVBhZ2UvY2FyZHMnO1xuY29uc3QgV1JBUFBFUl9DTEFTU19OQU1FID0gJ3BhZ2Utd3JhcHBlcic7XG5jb25zdCBBQ1RJVkVfQ0xBU1NfTkFNRSA9ICdhY3RpdmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclBhZ2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSBuZXcgQ3JlYXRvckVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogWyd3cmFwcGVyVXNlclBhZ2UnXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXJFbGVtZW50LmdldEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoV1JBUFBFUl9DTEFTU19OQU1FKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnNldHVwRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuYXBwZW5kRWxlbWVudHNUb0RPTSgpO1xuICAgICAgICB0aGlzLmFkZEFjdGl2ZUNsYXNzVG9XcmFwcGVyKCk7XG4gICAgfVxuICAgIHNldHVwRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlckNvbXBvbmVudCA9IG5ldyBIZWFkZXJDb21wb25lbnQoKTtcbiAgICAgICAgaGVhZGVyQ29tcG9uZW50LnJlbmRlcih0aGlzLndyYXBwZXIpO1xuICAgICAgICBjb25zdCB0aXRsZUNvbXBvbmVudCA9IG5ldyBUaXRsZUNvbXBvbmVudCgpO1xuICAgICAgICB0aXRsZUNvbXBvbmVudC5yZW5kZXIodGhpcy53cmFwcGVyKTtcbiAgICB9XG4gICAgc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ1dHRvbicpO1xuICAgICAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVN0YXJ0QnV0dG9uQ2xpY2spO1xuICAgIH1cbiAgICBhZGRBY3RpdmVDbGFzc1RvV3JhcHBlcigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChBQ1RJVkVfQ0xBU1NfTkFNRSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbiAgICBhcHBlbmRFbGVtZW50c1RvRE9NKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29udHJvbGxlci9hcHAnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
