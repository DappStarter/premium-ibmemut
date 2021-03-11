require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note pitch ethics grace hill fringe giant'; 
let testAccounts = [
"0x730349a345e1f1a999d0701a4511f25dc67ff193099d1e19e525d97d679394b9",
"0xabd085509fbe67483d7cac66b0d22c55aa74c14caa9dcecca0fad0b75cc632d8",
"0x5df66d1be37589bd04fd8842378ac4b827c53ce4e29245c8c81c1ccb120bfd0e",
"0x68e5c628f8eb045fdb1348506c0ee4c3459961f3abe10674dcd6b36d01c8b156",
"0xa714fe9040f092516d9fa934bdc8db4d616f93b3f47850f21641a2c11042d0cb",
"0x40810840ddb6d4eefe2a964085ccf342146f162eec217ab80dea4d37c06596b3",
"0xedbf75c763cb7494e4f075b314745fe02da1953eac116306373229f22e1bd6df",
"0xb54229716d260b07db3b0966251a849adf4859180d7747ab28680511620e546b",
"0x751c64a32c4a71f777ee71f52ff7a88341c9ddabda5c5e53e141c856fe8e5624",
"0x80b74be0e51dec50203c9158167f39522364368528c1b25e40698f848ff2cac3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
