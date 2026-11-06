import { chromium } from 'playwright';

const PORT = process.env.PORT || 4322;
const BASE_URL = `http://localhost:${PORT}`;

async function smokeTest() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const errors = [];

  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Test 1: Home page loads with Next.js loading screen
    console.log('Testing Home page and Loading Screen...');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    const loader = await page.$('#site-loading-screen');
    if (!loader) throw new Error('New Next.js loading screen element (#site-loading-screen) missing');

    const loaderLine = await page.$('.loader-line span');
    if (!loaderLine) throw new Error('.loader-line span missing');

    const loaderLogo = await page.$('.loader-logo');
    if (!loaderLogo) throw new Error('.loader-logo missing');

    // Wait for loader to complete and dismiss (1.5s timer + 0.8s transition)
    await page.waitForTimeout(2500);
    const isHidden = await page.$eval('#site-loading-screen', el => {
      const style = window.getComputedStyle(el);
      return style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0';
    });
    if (!isHidden) throw new Error('Loading screen did not dismiss within expected time');

    // Test 2: Hero Carousel on Home page
    console.log('Testing Hero Carousel on Home...');
    const activeSlide = await page.$('.hero-slide.is-active');
    if (!activeSlide) throw new Error('No active hero slide found on Home');

    // Test 3: Navigate to /the-edit
    console.log('Testing /the-edit (Next.js homepage integration)...');
    await page.goto(`${BASE_URL}/the-edit`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    // Verify Hero
    const heroH1 = await page.$eval('.hero-copy h1', el => el.textContent?.trim());
    if (!heroH1 || !heroH1.includes('Wear the')) throw new Error(`Expected hero title 'Wear the unfamiliar', got: ${heroH1}`);

    // Verify Intro
    const introH2 = await page.$eval('.intro h2', el => el.textContent?.trim());
    if (!introH2 || !introH2.includes('look closer')) throw new Error(`Expected intro heading 'For those who look closer', got: ${introH2}`);

    // Verify Interactive Edit Stage / Carousel
    const editStage = await page.$('#edit-stage');
    if (!editStage) throw new Error('#edit-stage interactive slider missing');

    const initialTitle = await page.$eval('#edit-slide-title', el => el.textContent?.trim());
    const initialCounter = await page.$eval('#edit-counter', el => el.textContent?.trim());
    if (initialCounter !== '01 / 08') throw new Error(`Expected counter '01 / 08', got: ${initialCounter}`);

    // Click Next button
    const nextBtn = await page.$('#edit-next-btn');
    if (!nextBtn) throw new Error('#edit-next-btn missing');
    await nextBtn.click();
    await page.waitForTimeout(300);

    const updatedCounter = await page.$eval('#edit-counter', el => el.textContent?.trim());
    if (updatedCounter !== '02 / 08') throw new Error(`Expected counter '02 / 08' after click, got: ${updatedCounter}`);

    const updatedTitle = await page.$eval('#edit-slide-title', el => el.textContent?.trim());
    if (updatedTitle === initialTitle) throw new Error('Slide title did not update on next slide');

    // Test 4: Navigate to /atelier
    console.log('Testing /atelier tab preservation...');
    await page.goto(`${BASE_URL}/atelier`, { waitUntil: 'domcontentloaded' });
    const atelierTitle = await page.$eval('h1', el => el.textContent?.trim());
    if (!atelierTitle || !atelierTitle.includes('Bombay Heritage')) throw new Error('Atelier page failed to load');

    // Test 5: Navigate to /contact
    console.log('Testing /contact tab preservation...');
    await page.goto(`${BASE_URL}/contact`, { waitUntil: 'domcontentloaded' });
    const contactTitle = await page.$eval('h1', el => el.textContent?.trim());
    if (!contactTitle || !contactTitle.includes('Appointments')) throw new Error('Contact page failed to load');

    // Test 6: Direct reload on /the-edit
    console.log('Testing direct reload on /the-edit...');
    await page.goto(`${BASE_URL}/the-edit`, { waitUntil: 'domcontentloaded' });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    const reloadedHero = await page.$eval('.hero-copy h1', el => el.textContent?.trim());
    if (!reloadedHero || !reloadedHero.includes('Wear the')) throw new Error('Failed to reload /the-edit');

    console.log('✓ All smoke tests passed successfully!');
    if (errors.length > 0) {
      console.warn('Console warnings/errors detected:', errors);
    }
  } finally {
    await browser.close();
  }
}

smokeTest().catch(err => {
  console.error('Smoke test failed:', err);
  process.exit(1);
});
