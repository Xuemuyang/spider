const puppeteer = require('puppeteer');
const { screenshot } = require('./config/default');
const conf = require('./config/default');

module.exports = async (config) => {
    const url = config ? config : conf.address;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({
        path: `${screenshot}/${Date.now()}.png`
    });
    await browser.close();
};