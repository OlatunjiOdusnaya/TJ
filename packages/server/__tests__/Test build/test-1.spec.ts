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

//test.describe('saucedemo auth flows', () => {
  //test.beforeEach(async ({ page }) => {
    //await page.goto('https://www.saucedemo.com/');
  //});

  //test('successful login and logout', async ({ page }: { page: Page }) => {
    //await login(page, 'standard_user', 'secret_sauce');
    //expect(page.locator('[data-test="title"]')).toBeVisible();
    //page.getByRole('button', { name: 'Open Menu' }).click();
    //expect(page.locator('[data-test="logout-sidebar-link"]')).toContainText('Logout');
    //page.locator('[data-test="logout-sidebar-link"]').click();
    //expect(page.locator('[data-test="username"]')).toBeVisible();
  //});

  //test('failed login shows error', async ({ page }: { page: Page }) => {
    //await login(page, 'standard_user', 'wrong_password');
    //expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
  //});
//});

/* Helper utilities */
//async function login(page: Page, username: string, password: string) {
  //await page.locator('[data-test="username"]').click();
  //await page.locator('[data-test="username"]').fill(username);
  //await page.locator('[data-test="password"]').click();
  //await page.locator('[data-test="password"]').fill(password);
  //await page.locator('[data-test="login-button"]').click();
//}