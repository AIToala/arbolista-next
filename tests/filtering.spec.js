/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("filtering", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("filtering", async function () {
    await driver.get("http://localhost:3000/home");
    await driver.manage().window().setRect(1552, 832);
    await driver.findElement(By.css(".mt-0:nth-child(3) > .w-full")).click();
    await driver.sleep(2000);
    let buttons = await driver.findElements(By.css("button"));
    await buttons[4].click();
    await driver.sleep(1000);
    //await driver.findElement(By.className("z-50")).click()
    await driver.findElement(By.id("react-select-3-placeholder")).click();
    await driver.findElement(By.id("react-select-3-option-1")).click();
    await driver.findElement(By.id("react-select-10-placeholder")).click();
    await driver.findElement(By.id("react-select-10-option-2")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css(".hover\\3A bg-blue-700\\/90")).click();
  });
});
