import { test, expect, Page } from '@playwright/test';

test('test', async ({ page }: { page: Page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_user');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await expect(page.locator('[data-test="logout-sidebar-link"]')).toContainText('Logout');
});