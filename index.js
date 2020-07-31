const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
	if (msg.content.includes('comida')) {
		msg.reply('woff');
	}
	if (msg.content === ('canela')) {
		msg.reply('woff woff:  canela habla ,  comida');
	}
	if (msg.content.startsWith('canela habla')) {
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
			 stream = ytdl('https://www.youtube.com/watch?v=lTRiuFIWV54', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);
			msg.reply('<#'+voiceChannel.id+'> woff');
			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
});


client.on('message', message => {
	if (message.content === '!play') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=lTRiuFIWV54', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
});

client.login('token');
