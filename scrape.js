import puppeteer from "puppeteer";

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the Google Images search results page
  await page.goto(
    "https://www.google.com/search?q=스쿼트+illustration&tbm=isch"
  );

  // Wait for a selector that matches the div with the specific jsaction attribute
  await page.waitForSelector('div[jsaction="TMn9y:cJhY7b;;cFWHmd:s370ud;"]');

  // Extract the data-id attribute value
  const dataIdValue = await page.$eval(
    'div[jsaction="TMn9y:cJhY7b;;cFWHmd:s370ud;"]',
    (element) => element.getAttribute("data-id")
  );

  console.log("data-id value:", dataIdValue);

  const url = `https://www.google.com/search?q=스쿼트+illustration&tbm=isch#imgrc=${dataIdValue}`;
  await page.goto(url);
  console.log("url:", url);

  // Wait for the images to load (you may need to adjust the selector and wait time)
  await page.waitForSelector("img.sFlh5c.pT0Scc.iPVvYb");

  // Extract the src data from img tags with jsaction="VQAsE"
  const imgURL = await page.$$eval("img.sFlh5c.pT0Scc.iPVvYb", (images) =>
    images.map((img) => img.getAttribute("src"))
  );

  console.log("imgURL", imgURL);
  await browser.close();
}

run();
