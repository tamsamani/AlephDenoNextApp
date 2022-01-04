

const blockChainConfigs = {
  name: 'byteCoin',
  symbol: 'BYTC',
  total: 512, // total chain bits
  key: 'SPECIAL_KEY_TOKEN', // used for prevent create each time new instance and save db for this key in server cache
  install () {},
  init () {}
};

const blockChainServer = new BlockChain(blockChainConfigs);

const { Seeder } = blockChainServer;

const personA = new Seeder("A");