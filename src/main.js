// ==UserScript==
// @name         yhykwch 页面样式优化
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动在指定的页面插入自定义 CSS 样式
// @author       George Zhao
// @match        https://user.yhykwch.com/*
// @grant        GM_addStyle
// @run-at       document-end
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

    const Selectors = {
        appRoot: "section.el-drawer__body",
        targetDiv: "section.el-drawer__body>div>div:nth-child(1)>div>div:nth-child(2)",
        span1: "section.el-drawer__body>div>div:nth-child(1)>div>div.explain>div.top>span:nth-child(1)>span",
        span2: "section.el-drawer__body>div>div:nth-child(1)>div>div.explain>div.top>span:nth-child(2)>span"
    };

    function checkAnswer() {
        const targetEl = document.querySelector(Selectors.targetDiv);
        if (!targetEl) return;

        const span1 = document.querySelector(Selectors.span1);
        const span2 = document.querySelector(Selectors.span2);
        if (!span1 || !span2) {
            targetEl.style.backgroundColor = "#ffffff";
        }
        else if (span1.innerText === span2.innerText) {
            targetEl.style.backgroundColor = "#DAF7DB";
        }
        else {
            targetEl.style.backgroundColor = "#f7dcda";
        }
    }
    const observer2 = new MutationObserver((mutationsList, observer) => {
        checkAnswer();
    });
    observer2.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
    checkAnswer();
    
})();
