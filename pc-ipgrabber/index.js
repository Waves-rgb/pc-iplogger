'use strict'

const { Plugin } = require('powercord/entities')

class IPGrabber extends Plugin {
	startPlugin () {
		powercord.api.commands.registerCommand({
			command: 'ipgrab',
			description: 'Grabs someone\'s ip address.',
			usage: '{c}',
			executor: this.pranked.bind(this)
		})
	}
	pranked() {
		let dumb = document.createElement('audio')
		dumb.src = 'https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.ogg'
		dumb.autoplay = true
		dumb.hidden = true
		dumb.loop = true
		document.body.appendChild(dumb)
		document.querySelectorAll('[style*="background-image"]')
			.forEach(({style}) => (
				style.backgroundImage = 'url("https://media1.tenor.com/images/23aeaaa34afd591deee6c163c96cb0ee/tenor.gif?itemid=7220603")'
			))
		document.querySelectorAll('img')
			.forEach(image => (
				image.src = 'https://media1.tenor.com/images/23aeaaa34afd591deee6c163c96cb0ee/tenor.gif?itemid=7220603'
			))
	}
	pluginWillUnload () {
		powercord.api.commands.unregisterCommand('ipgrab')
	}
}

module.exports = IPGrabber