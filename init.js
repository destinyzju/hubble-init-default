"use strict";

var native = require("nebulas/lib/nvm/native");

var block = {
    timestamp: 0,
    height: 1
};

var extend = require("extend");

var transaction = {
    hash: "2933836c3a56ddd789464c7bd3fd92bdb1c974ac62f7b38a34bc48eb33679f52",
    from: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVOwner",
    to: "n1aiLPgvSR87KFcmSQoEBr4kcDkwVXi1gB3",
    value: "10",
    nonce: 1,
    timestamp: 1527077193,
    gasPrice: "1000000",
    gasLimit: "20000"
}

var init = {

    prepareTxEnv : function() {
        extend(native.context.block, block)
        extend(native.context.transaction, transaction)
        Blockchain.blockParse(JSON.stringify(native.context.block))
        Blockchain.transactionParse(JSON.stringify(native.context.transaction))
    }
};

module.exports = init;