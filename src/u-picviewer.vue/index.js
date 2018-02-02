const CON_MAX_WIDTH = 1024, //容器最大宽度
    CON_MIN_WIDTH = 360, //容器最小宽度
    CON_MAX_HEIGHT = 722, //容器最大高度
    CON_MIN_HEIGHT = 360, //容器最小高度
    MAX_RATIO = 5, //最大的图片显示比例
    MIN_RATIO = 0.1, //最小的图片显示比例
    DEFAULT_RATIO = 0.8; //默认的图片显示比例

//工具函数
function num2px(num) {
    return num + 'px';
}

function px2num(str) {
    return Number(str.replace('px', '')) || 0;
}

function setStyle(ele, css) {

    for (var key in css) {
        ele.style[key] = css[key];
    }
}

/**
 * el1元素的区域是否超过el2元素
 * @param  {[type]}  el1 [description]
 * @param  {[type]}  el2 [description]
 * @return {Boolean}     [description]
 */
function isLargger(el1, el2) {
    return el1.clientHeight > el2.clientHeight || el1.clientWidth > el2.clientWidth;
}

//导入工具函数集中的工具函数
import {throttle, fullscreen, exitfullscreen, getImageSize, getStyle} from '../base/utils';

export default {
    name: 'u-picviewer',
    props: {
        pics: {
            type: Array,
            default: function() {
                return [
                    {
                        name: 'aaa.jpg',
                        src: 'http://aa.bb.cc/aaa.jpg'
                    }
                ]; //待查看的图片信息数组
            }
        },
        show: { //是否显示图片查看器
            type: Boolean,
            default: false
        },
        index: { //要显示图片的索引
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            container: {
                style: null,
                isFull: false //是否全屏
            },
            image: {
                el: null,
                ratio: 0 //图片的缩放比例
            },
            current: this.index || 0,
            visible: this.show || false,
            shown: false, //标记是否显示过，第一次显示时居中显示
            moving: '' //表示移动的目标  'img'表示正在移动图片 'con'表示正在移动容器 ''表示没有移动
        };
    },
    computed: {
        /**
         * 是否具有全屏显示的能力
         * @return {[type]} [description]
         */
        isFullEnabled() {
            return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled
        },
        /**
         * 当前是否是1:1的缩放比例
         * @return {Boolean} [description]
         */
        isOne2One() {
            return Math.round(this.image.ratio * 100) === 100;
        }
    },
    watch: {
        /**
         * 监听父组件的变量  props.index
         * @param  {[type]} index [description]变成的值
         * @param  {[type]} old   [description]之前的值
         * @return {[type]}       [description]
         */
        index(index, old) {
            this.current = index;
        },
        /**
         * 监听父组件的变量  props.show
         * @param  {[type]} show [description]变成的值
         * @param  {[type]} old  [description]之前的值
         * @return {[type]}      [description]
         */
        show(show, old) {
            this.visible = show;
        },
        /**
         * 当前显示的图片索引变化时
         * @param  {[type]} current [description]
         * @param  {[type]} old     [description]
         * @return {[type]}         [description]
         */
        current(current, old) {
            this.$emit('update:index', current); //更新父组件的数据

            this.image.el = this.$refs['imgs'][current];

            this.setContainerStyle();
        },
        visible(visible, old) {
            this.$emit('update:show', visible); //更新父组件的数据

            if (visible) {
                this.$nextTick(() => this.$el.focus());
                document.addEventListener('mousemove', this.onMouseMove);
                document.addEventListener('mouseup', this.onMouseUp);
                this.shown = true;
            } else {
                document.removeEventListener('mousemove', this.onMouseMove);
                document.removeEventListener('mouseup', this.onMouseUp);
            }
        }
    },
    methods: {
        close() {
            this.visible = false;
            this.container.isFull && exitfullscreen();
        },
        /**
         * 缩放图片
         * @param  {[type]} ratio [description] 缩放的比例
         * @return {[type]}       [description]
         */
        zoom(ratio) {
            var image = this.image,
                conel = this.$el;

            if (ratio === 1 && this.isOne2One) //已经是1:1的情况下，不处理
                return;

            //缩放比例限定范围在0.1和5之间
            ratio = Math.min(ratio, MAX_RATIO);
            ratio = Math.max(ratio, MIN_RATIO);

            image.ratio = ratio;

            var width = image.naturalWidth * ratio,
                height = image.naturalHeight * ratio;

            image.marginL = (conel.clientWidth - width) / 2;
            image.marginT = (conel.clientHeight - height) / 2;

            setStyle(image.el, {
                'margin-left': num2px(image.marginL),
                'margin-top': num2px(image.marginT),
                width: num2px(width),
                height: num2px(height)
            });
        },
        /**
         * 旋转图片
         * @return {[type]} [description]
         */
        rotate() {
            var old = this.image.el.rotateValue || 0,
                rotate = old + 90,
                transform = 'rotate(' + rotate + 'deg)';

            this.image.el.rotateValue = rotate;
            setStyle(this.image.el, {
                '-webkit-ransform': transform,
                '-ms-transform': transform,
                'transform': transform
            });
        },
        /**
         * 切换全屏显示
         * @return {[type]} [description]
         */
        switchFull() {

            if (!this.isFullEnabled)
                return;

            this.container.isFull
                ? exitfullscreen()
                : fullscreen(this.$el);
        },
        /**
         * 设置容器的样式，用于切换图片时，根据图片大小，确定容器的尺寸以及位置
         */
        setContainerStyle() {

            getImageSize(this.image.el, (naturalWidth, naturalHeight) => {

                this.image.naturalWidth = naturalWidth;
                this.image.naturalHeight = naturalHeight;

                //计算容器的宽度
                var width = naturalWidth * DEFAULT_RATIO; //默认0.8倍显示图片
                if (width > CON_MAX_WIDTH)
                    width = CON_MAX_WIDTH;
                if (width < CON_MIN_WIDTH)
                    width = CON_MIN_WIDTH;

                //计算图片的缩放比例
                this.image.ratio = width / naturalWidth;

                //计算容器的高度
                var height = naturalHeight * this.image.ratio;
                if (height > CON_MAX_HEIGHT)
                    height = CON_MAX_HEIGHT;
                if (height < CON_MIN_HEIGHT)
                    height = CON_MIN_HEIGHT;

                var css = '';
                if (!this.shown) {
                    css = {
                        width: num2px(width),
                        height: num2px(height),
                        left: num2px((window.innerWidth - width) / 2),
                        top: num2px((window.innerHeight - height) / 2)
                    };
                    this.container.style = css;
                } else if (!this.container.isFull) {
                    var oriTop = px2num(getStyle(this.$el, 'top')),
                        oriLeft = px2num(getStyle(this.$el, 'left')),
                        oriWidth = px2num(getStyle(this.$el, 'width')),
                        oriHeight = px2num(getStyle(this.$el, 'height'));

                    css = {
                        width: num2px(width),
                        height: num2px(height),
                        left: num2px(oriLeft + (oriWidth - width) / 2),
                        top: num2px(oriTop + (oriHeight - height) / 2)
                    };
                    this.container.style = css;
                }

                //等视图更新后，再缩放，要用到con的尺寸
                this.$nextTick(() => this.zoom(this.image.ratio));
            });
        },
        /**
         * 全屏变化事件
         * @param  {[type]} e [description]
         * @return {[type]}       [description]
         */
        onFullChange(e) {
            var con = this.container;

            if (con.isFull) {
                this.shown = false; //从全屏退出到非全屏时，认为是没有显示过，让图片居中显示
                this.setContainerStyle();
                this.shown = true;
            } else {
                con.style = {
                    left: '0px',
                    top: '0px',
                    width: '100%',
                    height: '100%'
                };
                //等视图更新后，再缩放，要用到con的尺寸
                this.$nextTick(() => this.zoom(this.image.ratio));
            }
            con.isFull = !con.isFull;
        },
        /**
         * 鼠标滚轮滚动事件，增加节流函数，每50毫秒变化一次缩放比例
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
        onWheel: throttle(function(e) {
            var delta = 1;
            if (e.deltaY) {
                delta = e.deltaY > 0
                    ? -1
                    : 1;
            } else if (e.wheelDelta) {
                delta = e.wheelDelta / 120;
            } else if (e.detail) {
                delta = e.detail > 0
                    ? -1
                    : 1;
            }
            this.zoom(this.image.ratio + (
                delta > 0
                ? 0.1
                : -0.1));
        }, 50),
        /**
         * 鼠标按下事件，用于拖动时，记录拖动前的相关信息
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
        onMouseDown(e) {
            var con = this.container,
                image = this.image,
                el = this.$el,
                tar = e.target;

            if (tar === image.el && (con.isFull || isLargger(image.el, el))) {
                //点击在图片上，并且是全屏模式或者图片比容器大，此时移动图片
                this.moving = 'img';
                image.startX = event.pageX;
                image.startY = event.pageY;
                image.marginL = px2num(getStyle(image.el, 'margin-left'));
                image.marginT = px2num(getStyle(image.el, 'margin-top'));
            } else if (!con.isFull) {
                //非全屏模式下，移动容器
                this.moving = 'con';
                con.rect = this.$el.getBoundingClientRect();
                con.startX = event.clientX;
                con.startY = event.clientY;
            } else {
                e.preventDefault();
            }
        },
        /**
         * 鼠标移动事件
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
        onMouseMove(e) {
            var con = this.container,
                image = this.image;

            if (this.moving) {
                e.preventDefault();

                if (this.moving === 'img') {
                    setStyle(image.el, {
                        'margin-left': num2px(event.pageX - image.startX + image.marginL),
                        'margin-top': num2px(event.pageY - image.startY + image.marginT)
                    });
                } else if (this.moving === 'con') {
                    con.style.left = num2px(event.pageX - con.startX + con.rect.left);
                    con.style.top = num2px(event.pageY - con.startY + con.rect.top);
                }
            }
        },
        /**
         * 鼠标松开，将拖动标记，置为初始值
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
        onMouseUp(e) {
            this.moving = '';
        }
    },
    mounted() {
        this.$el && document.body.appendChild(this.$el);
    },
    destroyed() {
        if (this.$el && this.$el.parentNode === document.body)
            document.body.removeChild(this.$el);
        }
    }
