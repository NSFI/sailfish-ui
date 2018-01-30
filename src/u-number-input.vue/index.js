/**
 * @class NumberInput
 * @extend Input2
 * @param {object}                  options                    =  绑定属性
 * @param {string=0}                options.value              <=> 文本框的值
 * @param {string=''}               options.state              <=> 文本框的状态
 * @param {number}                  options.min                 => 最小值
 * @param {number}                  options.max                 => 最大值
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {string='140'}            options.width               => 输入框宽度
 * @param {string='34'}             options.width               => 输入框高度
 */
const NumberInput = {
    name: 'u-number-input',
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        format: String,
        placeholder: String,
        autofocus: [String, Boolean],
        readonly: [String, Boolean],
        disabled: [String, Boolean],
        min: [String, Number],
        max: [String, Number],
        width: {
            type: [String, Number],
            default: '140',
        },
        height: {
            type: [String, Number],
            default: '34',
        },
    },
    data() {
        return {
            showValue: this.formatNumber(this.value),
        };
    },
    watch: {
        value(newValue) {
            // 如果超出数值范围，则设置为范围边界的数值
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange !== false)
                return this.showValue = this.formatNumber(isOutOfRange);
            this.showValue = this.formatNumber(newValue);
        },
        showValue(newValue, oldValue) {
            if (typeof newValue === 'string') {
                const _newValue = +newValue;
                if (isNaN(_newValue))
                    this.showValue = this.formatNumber(this.value);
                else
                    this.showValue = this.formatNumber(_newValue);
            }

            // 如果超出数值范围，则设置为范围边界的数值
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange !== false)
                return this.showValue = this.formatNumber(isOutOfRange);

            // this.showValue = this.formatNumber(newValue);

            /**
             * @event change 数值改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} value 改变后的数值
             */
            this.$emit('change', {
                sender: this,
                value: this.showValue,
            });
        },
        min(newValue, oldValue) {
            const _max = this.max;
            if (!isNaN(newValue) && newValue - _max > 0)
                throw new NumberInput.NumberRangeError(newValue, _max);

            // 如果超出数值范围，则设置为范围边界的数值
            const isOutOfRange = this.isOutOfRange(this.showValue);
            if (isOutOfRange !== false)
                return this.showValue = isOutOfRange;
        },
        max(newValue, oldValue) {
            const _min = this.min;
            if (!isNaN(newValue) && _min - newValue > 0)
                throw new NumberInput.NumberRangeError(_min, newValue);

            // 如果超出数值范围，则设置为范围边界的数值
            const isOutOfRange = this.isOutOfRange(this.showValue);
            if (isOutOfRange !== false)
                return this.showValue = isOutOfRange;
        },
    },
    methods: {
        /**
         * @method add(value) 调整数值
         * @public
         * @param  {number=0} value 加/减的值
         * @return {number} value 计算后的值
         */
        add(value) {
            let _showValue = +this.showValue;
            if (this.readonly || this.disabled || !value)
                return;

            if (isNaN(value))
                throw new TypeError(value + ' is not a number!');

            _showValue += value;
            this.showValue = this.formatNumber(_showValue);
        },
        /**
         * @method isOutOfRange(value) 是否超出规定的数值范围
         * @public
         * @param {number} value 待测的值
         * @return {boolean|number} number 如果没有超出数值范围，则返回false；如果超出数值范围，则返回范围边界的数值
         */
        isOutOfRange(value) {
            const min = +this.min;
            const max = +this.max;

            // min && value < min && min，先判断是否为空，再判断是否超出数值范围，如果超出则返回范围边界的数值
            if (!isNaN(min) && value < min)
                return this.formatNumber(min);
            else if (!isNaN(max) && value > max)
                return this.formatNumber(max);
            else
                return false;
        },
        formatNumber(value) {
            value = '' + (value || 0);
            if (this.format)
                return this.format.replace(new RegExp('\\d{0,' + value.length + '}$'), value);
            return value;
        },
    },
};

const NumberRangeError = function (min, max) {
    this.type = 'NumberRangeError';
    this.message = 'Wrong Number Range where `min` is ' + min + ' and `max` is ' + max + '!';
};
NumberRangeError.prototype = Object.create(RangeError.prototype);
NumberInput.NumberRangeError = NumberRangeError.prototype.constructor = NumberRangeError;

export default NumberInput;
