var init = require("../init");
var BankVaultContract = require("../contracts/bank_vault_contract")

beforeEach(() => {
    return localStorage.clear()
})

test('balance', () => {
    var contract = new BankVaultContract();
    init.prepareTxEnv();
    contract.save(1);
    expect(contract.balanceOf("n1dAmstUGQ3YB4EVokmRdrvvVCNfJVOwner").balance)
        .toEqual(new BigNumber(10))
})

