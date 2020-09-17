'use strict'

const sifuRegular = require('./validate')

module.exports = {
    isEmail: sifuRegular.isEmail,
    isUrl: sifuRegular.isUrl,
    isPhone: sifuRegular.isPhone,
    isIdCard: sifuRegular.isIdCard,
    isPostalCode: sifuRegular.isPostalCode
}
