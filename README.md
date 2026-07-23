# Tax AI（Smart Tax Assistant）

## 使用方式
1. 直接雙擊 `index.html` 即可離線使用。
2. 若部署到 GitHub Pages 或任何網站空間，系統會自動讀取 `questionBank.json`。
3. 題庫更新時，請維持 JSON 欄位：`id`、`category`、`question`、`summary`、`answer`、`keywords`、`relatedIds`、`version`。

## 檔案
- index.html：網站頁面
- style.css：Fluent Design 視覺樣式
- app.js：介面、收藏、題庫瀏覽、詳情抽屜
- search.js：自然語言關鍵字、同義詞及排序引擎
- questionBank.json：109 題題庫資料

> 正式上線前，請由業務單位再次核對每題標準答詢。


## 首頁熱門問題短標題
Excel 題庫可新增「熱門顯示名稱」欄位。

- `熱門問題` 填「是」：顯示於首頁熱門問題。
- `熱門顯示名稱`：首頁顯示的短標題，例如「公益出租優惠」。
- 若未填短標題，系統會自動顯示原題目前 18 個字。
- 同時相容欄位名稱：`常用查詢名稱`、`首頁顯示名稱`、`短標題`。


## 本次修正
- 首頁熱門問題會優先讀取 JSON 的 `popularTitle`。
- 同時相容 `popularLabel`、`shortTitle`。
- Excel 匯入時可使用「熱門顯示名稱」、「常用查詢名稱」、「首頁顯示名稱」或「短標題」。
- app.js 的離線備用題庫已同步為本次 questionBank.json，直接雙擊 index.html 也能顯示最新題庫及熱門短標題。


## RPG 電話測試
- 左側選單新增「RPG 電話測試」。
- 每次依選定稅目隨機抽出最多 5 題。
- 答對加 20 分，答錯扣 1 顆愛心，並立即顯示解析。
- 測驗結束可查看錯題並開啟原題庫完整答詢。
- RPG 題目及邏輯放在 `rpg.js`，目前共有 63 題情境選擇題；每次依選定稅目隨機抽出最多 5 題，不影響原本搜尋及 Excel 匯入功能。
