var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'tpd-vis'
    },
    port: 3000,
    db: 'mongodb://localhost/tpd-vis-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'tpd-vis'
    },
    port: 3000,
    db: 'mongodb://localhost/tpd-vis-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'tpd-vis'
    },
    port: 3000,
    db: 'mongodb://localhost/tpd-vis-production'
  }
};

module.exports = config[env];
