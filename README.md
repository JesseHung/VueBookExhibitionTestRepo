# Unnotech Front End 徵才小專案


### 執行

1. 首先，先將專案clone至本機

```
git clone https://github.com/JesseHung/unnotechFrontEnd.git
```

2. 進入專案資料夾

```
cd unnotechFrontEnd
```

3. 下載所需library

```
npm install
```

4. 執行專案

```
npm run serve
```


### 專案架構，邏輯說明

本專案利用Vue2來建構，涵蓋四大component，一個main.js和一個utils/request.js。

四大Component分別為：
```
BookList.vue
BookCard.vue
BookDetail.vue
NumberInput.vue
```

主要介面上的切版都在這些component裡，
裡面的class都是用tailwind.css切版出來。
`BookList`顧名思義就是一開始進入網頁，會看到多條書籍資料，另外將`BookCard.vue`分離成一個component，（因將會使用for loop。而`BookDetail`則是顯示來自不同卡的資訊。


### 第三方Library

第一項是Router，能夠更容易地去導向每條路徑，目前使用在將home頁面導回至`/books`。

除此之外，也有將`tailwind css`和`ElementUI`引用至`main.js`。本來希望能將ElementUI使用在提醒使用者是否已更改/更改正確/失敗，但因為某些原因，提示訊息顯示不出來，目前仍在修改中。

最後是`axios`，主要用於發送request至 貴公司提供的api去取得資料/更新資料。


### 專案中遇到的問題

因是第一次使用tailwind，不太習慣新增class的這種機制（前公司使用bootstrap），有很多看起來className過長超過visual studio code寬度的一半，希望未來能引進eslint checker的解決方案。

在製作PATCH的同時其實也有遇到一點小問題，就是在發布request時的資料結構不相同，就會影響到更新的內容。最後測試過不同的資料結構後終於取得解答。

另外是ElementUI的message無法顯示，目前仍在debug中但我覺得應該是軟硬體或是路徑設定不正確。接下來會往這邊仔細查看和排除錯誤。
