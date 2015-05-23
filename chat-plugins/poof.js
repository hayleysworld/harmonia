d: 'poof',
	cpoof: 'poof',
	poof: (function () {
		var messages = [
			"got bullied too much by Yuuki!",
			"just got rek't by Vaporeon!",
			"was hit by a Kamehameha!",
			"was warned by BT for RP too much!",
			"died of a broken heart!",
			"is off to pull a Zenji!",
			"got hit by confuse ray!",
			"drowned in bunnies and kitties!",
			"got embarrassed by their low ladder rating!",
			"was taken to Spirit World!",
			"vanished into thin air!",
			"tried having an opinion on the internet and died!",
			"was hugged by a horde of Muk!"
		];

		return function (target, room, user) {
			if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
			if (target && !this.can('broadcast')) return false;
			if (room.id !== 'lobby') return false;
			var message = target || messages[Math.floor(Math.random() * messages.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);
			if (!this.canTalk(message)) return false;

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.disconnectAll();
		};
	})(),

	poofoff: 'nopoof',
	nopoof: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = true;
		return this.sendReply("Poof is now disabled.");
	},

	poofon: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = false;
		return this.sendReply("Poof is now enabled.");
		}
};
	
	
