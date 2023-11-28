'use strict'

const _ = require('lodash');  //lodash is _

const getInfoData = ({ fileds = [], object = {} }) => {
    return _.pick( object, fileds)
}

module.exports = {
    getInfoData
}

