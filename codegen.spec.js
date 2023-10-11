import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavan');
  await page.getByLabel('Log in').getByLabel('Close').click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('7997486114');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('manikumar123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
});