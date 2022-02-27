const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {

	interface:{
		type:"string",
		alias:"i",
		desc:"Interface name (Put the name inside qoutations)"
	},
	noBanner:{
		type:"boolean",
		alias:"nb",
		default:true,
		desc:"No banner"
	},
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: true,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
};

const commands = {
	help: { desc: `Print help info` }
};


const helpText = meowHelp({
	name: `wifi`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
