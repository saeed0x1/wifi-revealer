const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `wifi-revealer`,
		tagLine: `by Saeed`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#299b7f',
		color: '#000000',
		bold: true,
		clear
	});
};
