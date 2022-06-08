const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "vote",
    description: "Vote for the bot <3",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Loading..`);

      const emb = new MessageEmbed()
      .setColor(client.config.color.main)
      .setTitle(`💖 Vote for ${client.user.username}`)
      .setDescription(`There is no website to vote rn`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      .setFooter(`Made with 💖 by Trung`) 

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://exe.io/mystic-bot_invite`)
				.setLabel('Vote our bot (shortened link)')
				.setStyle('LINK'),
			);
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [emb], components: [row] });
      }, 500);
    },
};
