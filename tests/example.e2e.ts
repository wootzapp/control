import { test, expect } from 'playwright/test';

test('home page has Get started text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('text=Get started')).toBeVisible();
});
