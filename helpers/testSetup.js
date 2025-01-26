import { test } from "@playwright/test";

export function setupBeforeEach() {
  test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
  });
}

export function setupAfterEach(){
  test.afterEach(async({page})=>{
    // console.log("tearing down...")
    page.close();
  })
}

