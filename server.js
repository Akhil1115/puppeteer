const puppeteer = require('puppeteer');




async function run() {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();




  // Perform actions on the page

  await page.goto('https://swap.defillama.com');

  await page.waitForTimeout(20000); // Wait for 2 seconds

  await page.screenshot({ path: 'example.png' });




  // Close the browser

  await browser.close();
}

run();
