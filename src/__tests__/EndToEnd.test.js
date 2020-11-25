import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  // const wsChromeEndpointurl =
  //   "ws://127.0.0.1:9222/devtools/browser/d53cd82c-d498-4115-b7d8-8735fed6ad5c";
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      // browserWSEndpoint: wsChromeEndpointurl,
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ["--disable-extensions"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  // afterAll(() => {
  //   browser.close();
  // });

  test("An event element is collapsed by default", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
    const eventDetails = await page.$(".event .event-details");

    expect(eventDetails).toBeNull();
    browser.close();
  });
});
