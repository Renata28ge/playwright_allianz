import { test } from "@playwright/test";

test("Exercise: Get api", async ({ request }) => {
  await request.get("https://www.tredgate.cloud/courses");
});
