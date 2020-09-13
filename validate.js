/**
 * 是否是邮箱
 * @param email
 * @returns {boolean}
 */
export function isEmail(email){
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)
}

/**
 * 是否是网站链接
 * @param url
 * @returns {boolean}
 */
export function isUrl(url){
    return /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(url)
}

/**
 * 是否是手机号码
 * @param phone
 * @returns {boolean}
 */
export function isPhone(phone){
    return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phone)
}

/**
 * 是否是身份证
 * @param idCard
 * @returns {boolean}
 */
export function isIdCard(idCard){
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(idCard)
}

/**
 * 是否是邮编
 * @param postalCode
 * @returns {boolean}
 */
export function isPostalCode(postalCode){
    return /^[1-9]\d{5}(?!\d)$/.test(postalCode)
}

export function is(){
    return
}

