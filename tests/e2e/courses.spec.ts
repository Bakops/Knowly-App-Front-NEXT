import { expect, test } from "@playwright/test";

test.describe("Page des Cours", () => {
  test("devrait afficher une liste de cours", async ({ page }) => {
    await page.goto("/courses");
    const cours = page.locator(".course-item");
    await expect(cours).toHaveCount(5); // Vérifie qu'il y a 5 cours affichés
  });

  test("devrait naviguer vers la page de détail d'un cours", async ({
    page,
  }) => {
    await page.goto("/courses");
    await page.click(".course-item:first-child a");
    await expect(page).toHaveURL(/\/courses\/\d+/); // Vérifie l'URL du détail du cours
    await expect(page.locator("h1")).toContainText("Détails du Cours");
  });
});
