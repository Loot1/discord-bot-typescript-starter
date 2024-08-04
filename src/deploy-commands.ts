import { REST, Routes } from 'discord.js';
import { config } from "./config";
import fs from 'node:fs';
import path from 'node:path';
import { RestApiResponse } from './types/RestApiResponse';

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(foldersPath).filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
    const filePath = path.join(foldersPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST().setToken(config.DISCORD_TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		const data: any = await rest.put(
			Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, config.DISCORD_GUILD_ID),
			{ body: commands },
		) as RestApiResponse[];
		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();