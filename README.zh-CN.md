[English](README.md) | **简体中文**

# AliExpress（速卖通）商品搜索 API

搜索 AliExpress 商品，以 JSON 返回价格、折扣、评分、销量和物流信息。

由 [Serpent API](https://apiserpent.com) 提供。完整文档：**[AliExpress Search API 文档](https://apiserpent.com/aliexpress-api)**。

## 快速开始

1. 在 [apiserpent.com](https://apiserpent.com) 注册并获取 API Key，每个账号赠送 10 次免费调用。
2. 在请求头 `X-API-Key` 中带上你的 Key 调用接口：

```bash
curl -G "https://apiserpent.com/api/aliexpress/search" \
  --data-urlencode "q=mechanical keyboard" \
  --data-urlencode "sort=orders" \
  -H "X-API-Key: $SERPENT_API_KEY"
```

## 接口

`GET https://apiserpent.com/api/aliexpress/search`

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `q` | 是 | 搜索关键词，支持任意语言，最长 200 个字符 |
| `page` | 否 | 页码，1 到 60，默认 1 |
| `sort` | 否 | `best_match`（默认）、`orders`、`price_asc`、`price_desc` |

## 返回结果

顶层字段：`query`、`page`、`sort`、`total_results`、`currency`、`products[]`（最多 60 条）。每个商品包含 `position`、`id`、`url`、`title`、`image`、`price`、`original_price`、`discount_percent`、`rating`、`sold`、`free_shipping`、`badges[]`、`sponsored`。

完整字段列表和响应示例请参阅[文档](https://apiserpent.com/aliexpress-api)。

## 示例代码

| 文件 | 语言 | 运行方式 |
| --- | --- | --- |
| [`example.py`](example.py) | Python 3（`pip install requests`） | `SERPENT_API_KEY=sk_live_... python example.py` |
| [`example.mjs`](example.mjs) | Node.js 18+（无需依赖） | `SERPENT_API_KEY=sk_live_... node example.mjs` |

## 应用场景

- 跨境电商与一件代发选品
- 价格与折扣跟踪
- 供应商和竞品监控

## Serpent API 的更多能力

- [Serpent API 文档](https://apiserpent.com/docs)：Google、Bing、Yahoo、DuckDuckGo 和 Brave 搜索结果，以及 AI 引用排名跟踪
- [GitHub 上的全部 SDK 与工具](https://github.com/apiserpent)

## 许可证

MIT
