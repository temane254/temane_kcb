const NotifyBiller = require('./NotifyBiller');
const MpesaExpress = require('./MpesaExpress');
const BillQuery = require('./BillQuery');

const controllers = {
    notifyBiller: NotifyBiller,
    mpesaExpress: MpesaExpress,
    billQuery: BillQuery
};

module.exports = controllers;