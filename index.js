#!/usr/bin/env node

/**
 * wifi-revealer
 * A cli to get wifi password.
 *
 * @author Saeed <https://www.twitter.com/zerodayrat>
 */

const chalk = require("chalk");
const wifi = require("wifi-password");
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug, interface, noBanner } = flags;

const purple = chalk.hex("#b057d6");

(async () => {
	init({ clear });
	
	input.includes(`help`) && cli.showHelp(0);

	if(!interface){
		wifi().then(password=>{
			console.log(`${purple(`Interface: Currently connected.`)} \n${chalk.green(`Password :`)} ${chalk.green(`${password}`)}\n`);
		})
	}
	else
	wifi([interface]).then(password => {
		
		console.log(`${purple(`Interface: ${interface}`)} \n${chalk.green(`Password :`)} ${chalk.green(`${password}`)}\n`);
	});

	debug && log(flags);
})();
