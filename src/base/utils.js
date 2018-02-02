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
/**
 * 获取元素的样式
 * @param  {[type]} element   [description] 元素标签
 * @param  {[type]} styleName [description] 样式名
 * @return {[type]}           [description]
 */
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
/**
 * 全屏
 * @param  {[type]} element [description] 需要全屏展示的元素
 * @return {[type]}         [description]
 */
export const fullscreen = function(element) {
    var func = element.requestFullscreen || element.msRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullScreen;

    if (isFunction(func)) {
        func.call(element);
    }
}

/**
 * 退出全屏
 * @return {[type]} [description]
 */
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

/**
 * 获取图片的尺寸
 * @param  {[type]}   image    [description] img标签
 * @param  {Function} callback [description] 获取到尺寸后的回调
 * @param  {[type]}   scope    [description] 回调绑定的this
 * @return {[type]}            [description]
 */
export const getImageSize = function(image, callback, scope) {
    var newImage;

    // Modern browsers
    if (image.naturalWidth) {
        return callback.call(scope, image.naturalWidth, image.naturalHeight);
    }

    // IE8: Don't use `new Image()` here
    newImage = document.createElement('img');
    newImage.onload = function() {
        callback.call(scope, this.width, this.height);
    };
    newImage.src = image.src;
}
