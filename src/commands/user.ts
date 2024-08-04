import { SlashCommandBuilder, CommandInteraction, GuildMember } from "discord.js";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction : CommandInteraction) {
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${(interaction.member as GuildMember).joinedAt}.`);
	},
};