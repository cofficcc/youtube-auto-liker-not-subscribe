// ==UserScript==
// @name         YouTube autoliker with out subscribe
// @namespace    https://github.com/cofficcc/youtube-auto-liker-not-subscribe
// @version      1.0.1
// @description  Auto-liker YouTube video
// @author       cofficcc
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var watcher = null;
    var likeSelector = '#segmented-like-button button';
    var subscribeSelector = '#subscribe-button button';

    function getObjectProperty(obj, keyStr) {
        var keys = keyStr.split('.');

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (obj && Array.isArray(obj)) {
                key = parseInt(key);
                if (isNaN(key) || typeof obj[key] === 'undefined') {
                    return undefined;
                }
            } else if (!obj || !obj.hasOwnProperty(key)) {
                return undefined;
            }
            obj = obj[key];
        }
        return obj;
    }

    function isLiked() {
        var btn = document.querySelector(likeSelector);
        return btn ? btn.getAttribute('aria-pressed') == 'true' : false;
    }
    function autoLike() {
        var likeBtn = document.querySelector(likeSelector);

        if (likeBtn && !isLiked()) {
            likeBtn.click();
            return true;
        }

    return false;
    }

    function isVisible(el) {
        return !!( el.offsetWidth || el.offsetHeight || el.getClientRects().length );
    }

    function startWatcher() {
        if (watcher === null) {
            watcher = setInterval(function () {
                if (document.querySelector(subscribeSelector)) {
                    if (isLiked() || autoLike()) {
                        clearInterval(watcher);
                        watcher = null;
                    }
                }
            }, 1000);
        }
    }

    window.addEventListener("yt-navigate-finish", startWatcher, true);
})();
