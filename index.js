const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
	if (msg.content.includes('comida')) {
		msg.reply('http://gph.is/1PAiJgM');
	}
	if (msg.content === ('canela help')) {
		msg.reply('woff woff:  canela habla [yt code], canela callate*, *comida*, canela muerde [user]');
	}
	if (msg.content.startsWith('canela habla') || msg.content.startsWith('canela ladra')) {
		if (msg.channel.type !== 'text') return;
		const voiceChannel =msg.member.voice.channel;

		if (!voiceChannel) {
			return msg.reply('grrrr');
		}
		var song = msg.content.split(' ');
		song = song[2];
		voiceChannel.join().then(connection => {
			var stream;
			if(typeof song != "undefined")
				stream = ytdl('https://www.youtube.com/watch?v='+song, { filter: 'audioonly' });
			else
				stream = ytdl('https://www.youtube.com/watch?v=9sLR0vgpeWI', { filter: '' });
			const dispatcher = connection.play(stream);
			msg.reply('<#'+voiceChannel.id+'> woff');
			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
	if (msg.content.startsWith('canela callate')) {
		if (msg.channel.type !== 'text') return;
		const voiceChannel =msg.member.voice.channel;

		if (!voiceChannel) {
			return msg.reply('grrrr');
		}
		var song = msg.content.split(' ');
		song = song[2];
		voiceChannel.join().then(connection => {
			var stream;
			stream = ytdl('https://www.youtube.com/watch?v=18e4XNUxo6k', { filter: '' });
			const dispatcher = connection.play(stream);
			msg.reply('<#'+voiceChannel.id+'> woff');
			dispatcher.on('finish', () => voiceChannel.leave());

	});
	}
	if (msg.content.startsWith("canela muerde")) {
		if (msg.member.hasPermission("KICK_MEMBERS")) {
			 if (msg.mentions.users.first()) {
				 msg.mentions.members.first().kick("grrr").then((member) => {
					msg.channel.send("grrr " + member.displayName );
				}).catch(() => {
					msg.channel.send("zzzzzzz");
				});
			}
		}else{
				 msg.reply('http://gph.is/1UW9uLn');
		}
	}
});
                client.login('');
