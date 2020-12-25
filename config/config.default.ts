import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606811621413_9707';

  // add your egg config in here
  config.middleware = [];
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'P@ssw0rd',
      database: 'test',
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    password: 'P@ssw0rd',
    database: 'test',
    // define: {
    //   // 使用自定义的表名
    //   freezeTableName: true,
    //   // 自动生成时间戳 -小驼峰式
    //   timestamps: true,
    //   // 表名小驼峰
    //   underscored: false,
    // },
  };


  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${ appInfo.name }`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};

