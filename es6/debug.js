import debug from 'debug';

export default (name = 'user') => debug(`loopback:mixins:${name}`);
