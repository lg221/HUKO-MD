const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'HUKO-MD=vgAFiSra#PaetRHSfrObtiR76QVE2ger7UhiIqDTkGAKUabuWGU0' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
SUDO: process.env.SUDO === undefined ? '94728132970' : process.env.SUDO,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS
};
