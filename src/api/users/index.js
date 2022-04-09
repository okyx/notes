const UsersHandler = require('./handler');
const routes = require('./routes');

const plugin = {
  name: 'users',
  version: '1.0.0',
  register: (server, { service, validator }) => {
    const userhandler = new UsersHandler(service, validator);
    server.route(routes(userhandler));
  },
};

module.exports = plugin;
