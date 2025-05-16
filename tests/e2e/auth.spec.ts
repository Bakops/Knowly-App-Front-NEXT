import { expect, test } from "@playwright/test";

test.describe("Authentification", () => {
  test("devrait se connecter avec succès", async ({ page }) => {
    await page.goto("/login");
    await page.fill("#username", "utilisateurtest");
    await page.fill("#password", "motdepasse123");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("/");
    await expect(page.locator("text=Bienvenue, utilisateurtest")).toBeVisible();
  });

  test("devrait afficher une erreur pour des identifiants invalides", async ({
    page,
  }) => {
    await page.goto("/login");
    await page.fill("#username", "utilisateurinvalide");
    await page.fill("#password", "mauvaismotdepasse");
    await page.click('button[type="submit"]');
    await expect(page.locator(".error-message")).toContainText(
      "Identifiants invalides"
    );
  });
});
