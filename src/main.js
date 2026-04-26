// ==UserScript==
// @name         yhykwch 页面样式优化
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动在指定的页面插入自定义 CSS 样式
// @author       George Zhao
// @match        https://user.yhykwch.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const customStyle = `
    section.el-drawer__body>div>div:nth-child(1)>div {
        display: flex;
    }

    section.el-drawer__body>div>div:nth-child(1)>div>div:nth-child(2) {
        max-width: 40%;
        width: stretch;
    }

    section.el-drawer__body>div>div:nth-child(1)>div>div.explain {
        max-width: 40%;
        width: stretch;
    }

    section.el-drawer__body>div>div:nth-child(1)>div>div.el-divider--horizontal {
        display: none;
    }

    section.el-drawer__body>div>div:nth-child(1)>div>div[data-v-ce3d029e] {
        max-width: 20%;
        width: stretch;
    }

    section.el-drawer__body>div>div:nth-child(1)>div>div.btn {
        position: absolute;
        top: 65px;
        left: 10%;
        z-index: 9999;
    }
    `;

    GM_addStyle(customStyle);
})();
