export {
    debounce, //http://lodashjs.com/docs/#_debouncefunc-wait0-options
    throttle, //http://lodashjs.com/docs/#_throttlefunc-wait0-options
    inRange, //http://lodashjs.com/docs/#_inrangen-start0-end
    random, //http://lodashjs.com/docs/#_randommin0-max1-floating
    isUndefined, //http://lodashjs.com/docs/#_isundefinedvalue
    isString, //http://lodashjs.com/docs/#_isstringvalue
    isNumber, //http://lodashjs.com/docs/#_isnumbervalue
    isFunction, //http://lodashjs.com/docs/#_isfunctionvalue
    isDate, //http://lodashjs.com/docs/#_isdatevalue
    isBoolean, //http://lodashjs.com/docs/#_isbooleanvalue
    isArray, //http://lodashjs.com/docs/#_isarrayvalue
    cloneDeep //http://lodashjs.com/docs/#_clonedeepvalue-customizer-thisarg
}
from 'lodash';

import isFunction from 'lodash';

const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

export const camelCase = function(name) {
    return name.replace(
        SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => offset
        ? letter.toUpperCase()
        : letter).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

export const getStyle = function(element, styleName) {
    if (!element || !styleName)
        return null;

    styleName = camelCase(styleName);

    if (styleName === 'float')
        styleName = 'cssFloat';

    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed
            ? computed[styleName]
            : null;
    } catch (e) {
        return element.style[styleName];
    }
};

export const fullscreen = function(element) {
    var func = element.requestFullscreen || element.msRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullScreen;

    if (isFunction(func)) {
        func.call(element);
    }
}

export const exitfullscreen = function() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
