# AliExpress Search API

Search AliExpress products and get prices, discounts, ratings, order counts and shipping info as JSON.

Powered by [Serpent API](https://apiserpent.com). Full reference: **[AliExpress Search API docs](https://apiserpent.com/aliexpress-api)**.

## Quick start

1. Get an API key at [apiserpent.com](https://apiserpent.com). Every account starts with 10 free API calls.
2. Call the endpoint with your key in the `X-API-Key` header:

```bash
curl -G "https://apiserpent.com/api/aliexpress/search" \
  --data-urlencode "q=mechanical keyboard" \
  --data-urlencode "sort=orders" \
  -H "X-API-Key: $SERPENT_API_KEY"
```

## Endpoint

`GET https://apiserpent.com/api/aliexpress/search`

| Parameter | Required | Description |
| --- | --- | --- |
| `q` | Yes | Search text in any language, up to 200 characters |
| `page` | No | 1 to 60, default 1 |
| `sort` | No | `best_match` (default), `orders`, `price_asc`, `price_desc` |

## Response

`query`, `page`, `sort`, `total_results`, `currency`, `products[]` (up to 60). Each product has `position`, `id`, `url`, `title`, `image`, `price`, `original_price`, `discount_percent`, `rating`, `sold`, `free_shipping`, `badges[]`, `sponsored`.

See the [docs](https://apiserpent.com/aliexpress-api) for the complete field list and sample responses.

## Examples

| File | Language | Run |
| --- | --- | --- |
| [`example.py`](example.py) | Python 3 (`pip install requests`) | `SERPENT_API_KEY=sk_live_... python example.py` |
| [`example.mjs`](example.mjs) | Node.js 18+ (no dependencies) | `SERPENT_API_KEY=sk_live_... node example.mjs` |

## Use cases

- Dropshipping product research
- Price and discount tracking
- Supplier and competitor monitoring

## More from Serpent API

- [Serpent API docs](https://apiserpent.com/docs) - Google, Bing, Yahoo, DuckDuckGo and Brave search, plus AI rank tracking
- [All SDKs and tools on GitHub](https://github.com/apiserpent)

## License

MIT
