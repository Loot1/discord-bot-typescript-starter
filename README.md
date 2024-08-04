# TypeScript Discord Bot Basic Starter

## Introduction

This project was created based on the [DiscordJS documentation guide](https://discordjs.guide/creating-your-bot/) and adapted to TypeScript, which the documentation does not offer. It provides a very simple basis to start developing a discord bot with TypeScript.

## .env File

To start the bot, create an environment file (`.env`) and add the necessary variables:

```bash
DISCORD_TOKEN=token of your bot
DISCORD_CLIENT_ID=client id of your bot
DISCORD_GUILD_ID=your discord guild ID for development
```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the build.

### `npm run dev`

Runs the bot in the development mode.

### `npm run build`

Builds the bot for production to the `build` folder. The build is minified, your bot is ready to be deployed!

### `npm run commands-update`

Push your slash commands in the API. Use it when you start the bot for the first time and each time you modify properties of a slash command.