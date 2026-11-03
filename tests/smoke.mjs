import { chromium } from 'playwright';

async function smokeTest() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    
    // Test 1: Home page loads with preloader
    await page.goto('http://localhost:4321/', { waitUntil: 'domcontentloaded' });
    const preloader = await page.$('#site-preloader');
    if (!preloader) throw new Error('Preloader element missing');

    // Test 2: Skip button dismisses preloader
    const skipBtn = await page.$('#preloader-skip-btn');
    if (skipBtn) await skipBtn.click();
    await page.waitForTimeout(1000);
    const isHidden = await page.$eval('#site-preloader', el => window.getComputedStyle(el).display === 'none');
    if (!isHidden) throw new Error('Preloader did not dismiss');

    // Test 3: Hero Carousel active
    const activeSlide = await page.$('.hero-slide.is-active');
    if (!activeSlide) throw new Error('No active hero slide found');

    // Test 4: Navigate to /the-edit
    await page.goto('http://localhost:4321/the-edit', { waitUntil: 'domcontentloaded' });
    const galleryItems = await page.$$('.edit-item');
    if (galleryItems.length === 0) throw new Error('The Edit gallery items empty');

    // Test 5: Navigate to product detail page
    await page.goto('http://localhost:4321/the-edit/emerald-saber-pendant', { waitUntil: 'domcontentloaded' });
    const title = await page.$eval('.pdp-title', el => el.textContent?.trim());
    if (!title || !title.includes('EMERALD SABER PENDANT')) throw new Error('Product detail page failed to load');

    console.log('✓ All smoke tests passed successfully');
  } finally {
    await browser.close();
  }
}

smokeTest().catch(err => {
  console.error('Smoke test failed:', err);
  process.exit(1);
});
