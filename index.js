const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options().headless();

(async function getGiphyViews(imageId) {
  console.log('Analyzing Giphy views...');
  console.time();
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  await driver.get('https://giphy.com/gifs/' + imageId);
  const views = await driver
    .findElement(By.css('.SectionHeader-sc-1pfpmo6'))
    .getText();
  console.log(views);
  await driver.quit();
  console.log('Done');
  console.timeEnd();
})();
