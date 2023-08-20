/* eslint-disable eqeqeq */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("test-case-login", function () {
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
  it("test-case-login", async function () {
    await driver.get("https://arbolista-deploytester.vercel.app//home");
    await driver.manage().window().setRect(1552, 832);
    await driver.sleep(2000);
    await driver.findElement(By.css(".hidden > .px-5")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("email")).click();
    await driver.findElement(By.id("email")).sendKeys("sadmin@arbolista.com");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("satest");
    await driver.findElement(By.css(".relative:nth-child(3)")).click();
    await driver.sleep(2000);
    await driver
      .findElement(By.css("#user-menu-button > .rounded-full"))
      .click();
    assert(
      (await driver.findElement(By.css(".px-4 > .text-gray-900")).getText()) ==
        "SuperAdmin"
    );
    assert(
      (await driver.findElement(By.css(".truncate")).getText()) ==
        "sadmin@arbolista.com"
    );
  });
});
