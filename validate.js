const COMM = require('./comm')

/**
 * 是否是邮箱
 * @param email
 * @returns {boolean}
 */
function isEmail(email){
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)
}

/**
 * 是否是网站链接
 * @param url
 * @returns {boolean}
 */
function isUrl(url){
    return /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(url)
}

/**
 * 是否是手机号码
 * @param phone
 * @returns {boolean}
 */
function isPhone(phone){
    return COMM.phone.test(phone)
}

/**
 * 是否是身份证
 * @param idCard
 * @returns {boolean}
 */
function isIdCard(idCard){
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(idCard)
}

/**
 * 是否是邮编
 * @param postalCode
 * @returns {boolean}
 */
function isPostalCode(postalCode){
    return /^[1-9]\d{5}(?!\d)$/.test(postalCode)
}

module.exports = {
    isEmail,
    isUrl,
    isPhone,
    isIdCard,
    isPostalCode
}

