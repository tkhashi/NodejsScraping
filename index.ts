require('dotenv').config();
import { Page } from './page';
const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const url = process.env.URL;
  console.log(url)

  if (!url) {
    throw new Error('URL is not defined');
  }

  const entryPage = new Page(url, undefined);
  await entryPage.visit(page);

  await browser.close();
})();
