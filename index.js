(function () {
    'use strict';
    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        const facebookLink = document.querySelector('[data-js="facebook"]')
        facebookLink.href = 'fb://facebook.com/235732303149322'
    }
})();