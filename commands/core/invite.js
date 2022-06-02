const { MessageEmbed } = require('discord.js');
const { INVITE_LINK } = require('../../constants');

module.exports = {
  name: 'invite',
  aliases: ['inv'],
  showHelp: false,
  utilisation: '{prefix}help',

  execute(client, message, args) {
    const embed = new MessageEmbed().setColor('RANDOM').setDescription(`Click [here](${INVITE_LINK}) to invite the bot`);

    embed.setTimestamp();
    embed.setFooter('DISKO 🎶', client.user.avatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
  },
};
