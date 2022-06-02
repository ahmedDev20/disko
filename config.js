const { BOT_TOKEN } = require('./constants');

module.exports = {
  app: {
    px: '?',
    token: BOT_TOKEN,
    playing: 'DISKO - Music Bot 🎶',
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: 'DJ',
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume'],
    },
    maxVol: 100,
    discordPlayer: {},
  },
};
