require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn pulse gesture only fresh story'; 
let testAccounts = [
"0xc1ee01a3aca0bdf4c4c506c8c9240efb28f30c16bd6462b77cb8ca920752b355",
"0x15042749717ea1cabb609685c8ecb03b64632ef0d635846ae18cad96217c0c7d",
"0x778bac593d1d35f5c30a244e46394236473fe49e997dc5076309be62c9ca5bde",
"0xbb82c87b6747294b52543e993ed0e54b1a272edf17decb4ff0173d3fd69b15c1",
"0x173c54e9bacdde6d8f4a36e8db0572cb60a4144077ccdbfe16cd170c3cc12e33",
"0x33053b2d68945214c81c9f4818e1080b1d9d9cd9789d9f334dbaae27df12e8c4",
"0xe009014fd8bbc03e2bded0c2630e97f87d0b38bdf5273810e0d87c79297658f7",
"0x5946b9e044544b09b8122d976a09a62d3438412634a22b86339b5a89bdc1a4b1",
"0xe7f3a87452f85b9ca4b3108be1bb878a7a468f222a1b7be4ee643daa9c345398",
"0x2e6cd390b9af5d90b125d517546df31648558352f06a37b27b67fa0703539414"
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
            version: '^0.8.0'
        }
    }
};

