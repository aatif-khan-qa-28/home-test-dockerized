import { test } from "@playwright/test";

export function setupBeforeEach() {
  test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
  });
}

