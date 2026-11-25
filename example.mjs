// AliExpress Search API - Node.js example (Node 18+, no dependencies).
// Docs: https://apiserpent.com/aliexpress-api
// Run:  SERPENT_API_KEY=sk_live_... node example.mjs

const apiKey = process.env.SERPENT_API_KEY;
if (!apiKey) {
  console.error("Set the SERPENT_API_KEY environment variable first.");
  process.exit(1);
}

const url = new URL("https://apiserpent.com/api/aliexpress/search");
const params = {"q": "mechanical keyboard", "sort": "orders"};
for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);

const response = await fetch(url, { headers: { "X-API-Key": apiKey } });
if (!response.ok) {
  console.error(`Request failed: ${response.status} ${await response.text()}`);
  process.exit(1);
}
const data = await response.json();

for (const item of data.products ?? []) {
  console.log(["title", "price_text", "sold_text", "url"].map((k) => item[k]).join(" | "));
}
