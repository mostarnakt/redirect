'use strict'

require('dotenv').config();    // to read the environment variables (process.env.ENV_VAR)

var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
	user: "mostarnakt",
	//password: "password",    // Password optional, prompted if none given
	host: "ftp.sweb.cz",
	port: 21,
	localRoot: "_dist",
	remoteRoot: ".",
	include: ["*", "**/*"],    // this would upload everything except dot files
	//exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
	deleteRemote: true,    // delete ALL existing files at destination before uploading, if true
	forcePasv: true,    // Passive mode is forced (EPSV command is not sent)
	sftp: false    // use sftp or ftp
}

// if password not given in parametrs, try to read it from FTP_PASSWORD environment variable 
if (!config.password && process.env.FTP_PASSWORD) {
	config.password = process.env.FTP_PASSWORD;
}

ftpDeploy
    .deploy(config)
    .then(res => console.log("FTP finished: ", res))
    .catch(err => console.log("FTP error: ", err));

