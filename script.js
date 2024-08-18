// ==UserScript==
// @name         edu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enable copy and paste in Monaco Editor by setting forbidCopy to false automatically
// @author       You
// @match        https://www.educoder.net/tasks/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const originalAddEventListener = window.addEventListener;
    window.addEventListener = function(type, listener, options) {
        if (type === 'paste') {
            originalAddEventListener.call(this, type, listener, options);
        } else if (type === 'keydown' && (event.ctrlKey || event.metaKey) && event.key === 'v') {
            originalAddEventListener.call(this, type, listener, options);
        } else {
            originalAddEventListener.call(this, type, listener, options);
        }
    };
})();
