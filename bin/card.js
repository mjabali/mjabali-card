#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require( "chalk" );
const boxen = require( "boxen" );

const newline = "\n";
const banner = "\n";

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round"
};

// Text + chalk definitions
const data = {
	name: chalk.white( "Marcelo Jabali" ),
	handle: chalk.cyan( "mjabali" ),
	work: chalk.white( "Principal Product Manager at Oracle" ),
	workUrl: chalk.cyan( "https://www.oracle.com" ),
	twitter: chalk.cyan( "https://twitter.com/mjabali" ),
	github: chalk.cyan( "https://github.com/mjabali" ),
	linkedin: chalk.cyan( "https://linkedin.com/in/jabali" ),
	web: chalk.cyan( "https://marcelojabali.blogspot.com" ),
	npx: chalk.white( "npx @mjabali/card" ),
	labelWork: chalk.white.bold( "      Work:" ),
	labelWorkUrl: chalk.white.bold( "           " ),
	labelTwitter: chalk.white.bold( "   Twitter:" ),
	labelGitHub: chalk.white.bold( "    GitHub:" ),
	labelLinkedIn: chalk.white.bold( "  LinkedIn:" ),
	labelWeb: chalk.white.bold( "       Web:" ),
	labelCard: chalk.white.bold( "      Card:" )
};

// Actual strings we're going to output
const heading = `             ${ data.name }`;
const working = `\n${ data.labelWork }  ${ data.work }`;
const workingUrl = `${ data.labelWorkUrl }  ${ data.workUrl }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const githubing = `${ data.labelGitHub }  ${ data.github }`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }`;
const webing = `${ data.labelWeb }  ${ data.web }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;

const card = [
	banner, heading, working, workingUrl, twittering, githubing, linkedining, webing, carding
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( chalk.green( boxen( output, options ) ) ); // eslint-disable-line no-console
