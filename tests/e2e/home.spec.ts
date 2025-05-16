import { expect, test } from "@playwright/test";

test.describe("Page d'Accueil", () => {
  test("devrait afficher la page d'accueil", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Knowly/); // Vérifie le titre de la page
    await expect(page.locator("h1")).toContainText("Bienvenue sur Knowly");
  });

  test("devrait naviguer vers la page de contact", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Contact");
    await expect(page).toHaveURL("/contact"); // Vérifie l'URL de la page de contact
    await expect(page.locator("h1")).toContainText("Contactez-nous");
  });
});
