const levels = [
  {
    tag: "新手村",
    title: "課程介紹與介面導覽",
    badge: "入門導覽徽章",
    quest: "先知道課程目標，也認得 ChatGPT 介面",
    story: "這是一條三小時課堂路徑：先看到 ChatGPT 能做什麼，再練習提問、辨識風險，最後把提示詞與課後任務帶回去複習。",
    knowledge: [
      ["學習目標", "判斷哪些生活、行政與學習任務適合交給 ChatGPT 協助"],
      ["操作原則", "回答先當草稿，正式送出前仍需人工確認"],
      ["介面導覽", "先認得網頁版與桌面版的導覽、輸入、工具、回答與設定區"],
      ["課程資源", "提示詞庫與課後練習會作為延伸複習材料"]
    ],
    taskTitle: "建立自己的學習目標",
    taskBody: "請先列出你希望用 ChatGPT 協助的三個日常任務，並判斷是否需要人工確認。",
    prompt: `請幫我整理一份 ChatGPT 學習目標表。

我的常見任務：
1. [請填入任務一]
2. [請填入任務二]
3. [請填入任務三]

請用表格回答，欄位包含：
任務、ChatGPT 可協助的地方、需要人工確認的地方、第一個練習步驟。`
  },
  {
    tag: "第一關",
    title: "先看 ChatGPT 能幫你做什麼",
    badge: "成果想像徽章",
    quest: "從成果開始，而不是從按鈕開始",
    story: "先看行政工作前後比較，知道 ChatGPT 可以協助整理、改寫、統計、檢查缺漏與產生初稿。",
    knowledge: [
      ["文字改寫", "把口語訊息整理成正式通知、Email 或公告"],
      ["會議整理", "從長篇文字抓出摘要、決議、待辦、負責人與期限"],
      ["資料統計", "先整理人數、出席率、缺漏欄位與異常值"],
      ["大綱產出", "從空白頁產生簡報頁面標題、重點與講者備註"]
    ],
    taskTitle: "一句話變正式通知",
    taskBody: "請把一段口語訊息整理成正式校內通知，資訊不足處標示待確認。",
    prompt: `請將以下內容整理成正式的校內會議通知，包含主旨、時間、地點、參加對象、攜帶資料與聯絡方式。資訊不足處請標示「待確認」，不要自行編造。

內容如下：
明天下午兩點在行政大樓三樓開會，請各單位派一人參加，記得帶上次資料。`
  },
  {
    tag: "第二關",
    title: "認識生成式 AI",
    badge: "AI 概念徽章",
    quest: "知道 ChatGPT 擅長什麼，也知道不能取代什麼",
    story: "ChatGPT 是生成式 AI 助理，可以協助整理、改寫、比較、分析與產生初稿，但不能代替最終行政判斷。",
    knowledge: [
      ["擅長任務", "整理文字、產生初稿、比較資料、改語氣、設計流程"],
      ["不擅長任務", "最終法規解釋、核決承諾、未遮蔽個資、正式對外發布"],
      ["錯誤原因", "資料來源不完整、背景太少、問題模糊或模型產生未查證內容"],
      ["使用心法", "把 AI 當助理，不當主管；把回答當草稿，不當定稿"]
    ],
    taskTitle: "判斷哪些任務適合 AI",
    taskBody: "把常見任務分成適合 AI、需要人工確認、不適合直接交給 AI 三類。",
    prompt: `請幫我判斷以下工作是否適合用 ChatGPT 協助，並分成三類：
1. 適合 AI 協助
2. 可以請 AI 先整理，但需要人工確認
3. 不適合直接交給 AI

工作清單：
- 改寫活動通知信
- 整理會議待辦事項
- 設計 Excel 報名表欄位
- 判斷校內規定是否違法
- 決定是否核發研習證明

請用表格回答，並補充每一項原因。`
  },
  {
    tag: "第三關",
    title: "提示詞公式",
    badge: "提示詞公式徽章",
    quest: "把模糊需求變成可執行指令",
    story: "好提示詞等於任務、背景、對象、限制、輸出格式與查核要求。講清楚規格，AI 才能交出可用初稿。",
    knowledge: [
      ["任務", "要 AI 做什麼，例如整理、改寫、分析、產生表格"],
      ["背景與對象", "目前情境、資料來源，以及誰會閱讀這份內容"],
      ["限制與格式", "字數、語氣、不能做什麼，以及表格、條列或 Email 格式"],
      ["查核要求", "資料未提供就說未提供，不要自行補人名、日期、數字或法規"]
    ],
    taskTitle: "補完整提示詞",
    taskBody: "請把「幫我寫通知」改成包含背景、限制、格式與查核要求的提示詞。",
    prompt: `請把以下模糊需求改寫成一段清楚可用的 ChatGPT 提示詞：

模糊需求：
幫我寫通知。

請補上：
1. 任務
2. 背景
3. 對象
4. 限制
5. 輸出格式
6. 查核要求

必加句：
若資料中沒有答案，請回答「資料未提供」。不要自行補寫人名、日期、數字、法規名稱或政策內容。`
  },
  {
    tag: "第四關",
    title: "行政六大應用",
    badge: "行政應用徽章",
    quest: "把同一套流程套用到不同工作場景",
    story: "每個實作單元都可以用同一個模板：情境、原始資料、提示詞、AI 產出、人工檢查重點、進階追問。",
    knowledge: [
      ["公告與 Email", "改寫、縮短、正式化、檢查缺漏"],
      ["會議紀錄", "摘要、決議、待辦、負責人、期限"],
      ["表格與問卷", "統計、分類、異常值、圖表建議"],
      ["簡報與檔案", "大綱、頁面標題、講者備註、摘要與比較"]
    ],
    taskTitle: "用模板完成行政任務",
    taskBody: "請選一個行政應用場景，依照情境、資料、提示詞、檢查與追問完成一輪練習。",
    prompt: `請幫我設計一個行政 AI 實作任務。

應用場景：
[公告與 Email / 會議紀錄 / 表格與問卷 / 簡報與報告 / 檔案摘要與比較 / 活動與教學設計]

請依照以下格式產出：
1. 情境
2. 原始資料
3. 可用提示詞
4. 預期 AI 產出
5. 人工檢查重點
6. 進階追問`
  },
  {
    tag: "第五關",
    title: "ChatGPT 功能選擇",
    badge: "功能選擇徽章",
    quest: "文字實作後，再知道什麼時候該換工具",
    story: "功能介紹放在文字實作之後會比較容易理解：搜尋、檔案分析、圖片、語音、Canvas、Projects 與 Tasks 各有適合情境。",
    knowledge: [
      ["搜尋", "最新資訊、政策、活動、產品；重要資訊仍要回官方來源確認"],
      ["檔案分析", "PDF、Word、Excel、CSV、問卷、報名表、會議資料"],
      ["語音與聽寫", "口述想法、會議後初稿、口說練習；人名日期數字要校對"],
      ["Projects / Canvas", "Projects 管理長期任務與資料脈絡；Canvas 編修長文、企劃書與程式草稿"]
    ],
    taskTitle: "依任務選功能",
    taskBody: "請根據不同工作情境，選擇最適合的 ChatGPT 功能並說明原因。",
    prompt: `請根據以下任務，建議適合使用的 ChatGPT 功能，並說明原因與注意事項。

任務：
1. 查詢最新政策或活動資訊
2. 整理 PDF 會議資料
3. 分析 Excel 報名名單
4. 口述會議後的初步筆記
5. 修改一份長篇企劃書
6. 長期追蹤同一個專案資料
7. 產生活動海報文案或圖片概念

請用表格回答：任務、建議功能、使用方式、注意事項。`
  },
  {
    tag: "第六關",
    title: "資安、查證與責任",
    badge: "資安查證徽章",
    quest: "先守住底線，再提高效率",
    story: "課程三條底線：不貼敏感資料、不直接相信答案、不把 AI 內容直接對外發布。",
    knowledge: [
      ["不貼敏感資料", "學生成績、身分證號、健康資料、人事考績與申訴內容不直接上傳"],
      ["查證三步驟", "來源是什麼、日期是什麼、是否能直接採用"],
      ["責任邊界", "AI 只能協助整理，不能代替核決、採購決定或正式承諾"],
      ["去識別化", "先把姓名、學號、聯絡方式與可識別資訊替換成代稱"]
    ],
    taskTitle: "找出個資與錯誤資訊",
    taskBody: "請檢查一段文字是否有個資、需要查證的資訊或不適合直接發布的內容。",
    prompt: `請幫我檢查以下行政文字是否適合直接貼給 ChatGPT 或對外發布。

請判斷：
1. 是否包含個資或敏感資料
2. 是否有需要查證的日期、數字、法規或政策
3. 是否有 AI 不應代替人決定的事項
4. 如何去識別化
5. 人工確認清單

請用表格回答，並將風險分成：低、中、高。

文字：
[請貼上要檢查的文字]`
  },
  {
    tag: "最終關",
    title: "進階工具與課後資源",
    badge: "課後練功徽章",
    quest: "把課堂練習帶回日常工作",
    story: "最後一關不是結束，而是把提示詞庫、進階工具、最新功能觀念與 5 天練習帶回去，讓 ChatGPT 真的進入日常流程。",
    knowledge: [
      ["進階工具", "Canva、Notion、雲端文件、PDF 工具與資料分析類 GPT 可作為延伸"],
      ["最新功能", "不要背模型名稱，改用任務判斷；依實際帳號介面為準"],
      ["Codex 理解", "一般使用者知道用途即可；工程或網站維護者可延伸了解"],
      ["5 天練習", "改寫公告、整理會議、分析表格、製作簡報大綱、建立提示詞庫"]
    ],
    taskTitle: "設計自己的 5 天練習表",
    taskBody: "請依自己的工作情境，設計 5 天課後練習與完成標準。",
    prompt: `請幫我設計一份 5 天 ChatGPT 課後練習表。

我的工作情境：
[請填入你的工作內容或常見任務]

請安排：
1. Day 1：改寫公告或 Email
2. Day 2：整理會議紀錄
3. Day 3：分析一份表格
4. Day 4：製作簡報或報告大綱
5. Day 5：建立常用提示詞庫

請用表格回答，欄位包含：天數、練習任務、建議提示詞、完成標準、人工檢查重點。`
  }
];

const levelThemes = [
  "village",
  "dojo",
  "latest",
  "dojo",
  "scribe",
  "excel",
  "security",
  "boss"
];

const answerHints = [
  [
    "建議工具：ChatGPT 網頁版或桌面版。方法：先列出自己的三個常見任務，再判斷 AI 可以協助與需要人工確認的地方。",
    "可從公告、Email、會議紀錄、表格、簡報大綱等任務開始。",
    "完成標準：每個任務都要有「AI 可協助」與「人工確認」兩欄。",
    "提醒：不同帳號介面可能不同，課堂以自己實際看到的功能為準。"
  ],
  [
    "建議工具：一般 ChatGPT 對話。方法：貼入口語訊息，要求整理成正式通知並標示待確認。",
    "注意「明天」要改成實際日期或標待確認，會議室名稱、攜帶資料與聯絡窗口也要確認。",
    "可追問：請改成 150 字以內簡短版，並保留待確認欄位。",
    "完成標準：產出主旨、時間、地點、對象、攜帶資料與待確認事項。"
  ],
  [
    "建議工具：一般 ChatGPT 對話。方法：把任務逐條貼上，請 AI 判斷適合 AI、需要人工確認、不適合直接交給 AI。",
    "適合 AI：改寫活動通知信、整理會議待辦、設計 Excel 報名表欄位。",
    "不適合直接交給 AI：核定證明、法規最終解釋、經費承諾、未遮蔽個資。",
    "判斷原則：AI 可以協助產出與整理，但政策、法規、承諾與責任由人確認。"
  ],
  [
    "建議工具：一般 ChatGPT 對話。方法：把模糊需求拆成任務、背景、對象、限制、輸出格式、查核要求。",
    "必加句：若資料中沒有答案，請回答「資料未提供」，不要自行補寫。",
    "可要求固定格式，讓不同學員產出更一致。",
    "完成標準：提示詞中至少包含任務、背景、格式與查核要求。"
  ],
  [
    "建議工具：ChatGPT 對話、Canvas、檔案上傳。方法：用「情境、原始資料、提示詞、AI 產出、人工檢查、進階追問」完成一輪。",
    "可選應用：公告 Email、會議紀錄、表格問卷、簡報報告、檔案摘要、活動教學設計。",
    "人工檢查重點：是否遺漏時間、地點、對象、期限、聯絡方式、責任歸屬。",
    "完成標準：能說出 AI 產出後還需要人檢查什麼。"
  ],
  [
    "建議工具：搜尋、檔案分析、語音、Canvas、Projects、圖片。方法：先看任務型態，再選工具。",
    "最新政策或活動資訊用搜尋，但仍要回官方來源確認。",
    "PDF、Word、Excel、CSV 可用檔案分析；長文與企劃書適合 Canvas。",
    "會議後初步整理可用語音或聽寫，但人名、日期、地點、數字一定要校對。"
  ],
  [
    "建議工具：一般 ChatGPT 對話。方法：要求 AI 先當資安檢查員，而不是直接改寫。",
    "查證三問：來源是什麼？日期是什麼？是否能直接採用？",
    "高風險：學生成績、身分證號、健康資料、人事考績、申訴內容、採購與經費決定。",
    "安全做法：先去識別化，再請 AI 整理；正式發布前由承辦人或主管確認。"
  ],
  [
    "建議工具：ChatGPT、提示詞庫、Notion、Canva、雲端文件或 PDF 工具。方法：把課堂任務改成自己的 5 天練習。",
    "Day 1 公告 Email，Day 2 會議紀錄，Day 3 表格分析，Day 4 簡報大綱，Day 5 建提示詞庫。",
    "最新功能不用背名稱，改用任務判斷：要研究、整理、建頁面、語音、圖表還是程式。",
    "完成標準：每一天都有練習任務、建議提示詞、完成標準與人工檢查重點。"
  ]
];

const quizQuestions = [
  [
    ["ChatGPT 的回答可以直接當作正式文件送出，不需要人工確認。", false],
    ["使用 ChatGPT 前，先知道自己的任務與目標會讓結果更好。", true],
    ["不同帳號看到的 ChatGPT 功能與介面可能略有差異。", true],
    ["新手可以先從公告、Email、會議紀錄等小任務開始練習。", true],
    ["只要會按送出，就不需要理解 ChatGPT 介面區域。", false]
  ],
  [
    ["ChatGPT 可以協助把口語訊息整理成正式通知。", true],
    ["原始資料沒有提供會議室名稱時，AI 應該自行補一個合理地點。", false],
    ["「明天」這類相對時間，正式通知前需要改成明確日期或標示待確認。", true],
    ["暖身任務的重點是先看到 AI 能產出可修改的初稿。", true],
    ["AI 整理出的通知不需要再檢查聯絡窗口與攜帶資料。", false]
  ],
  [
    ["ChatGPT 適合協助整理、改寫、比較與產生初稿。", true],
    ["ChatGPT 可以代替承辦人做最終行政判斷。", false],
    ["問題太模糊時，AI 可能只能猜測使用者意圖。", true],
    ["AI 回答看起來合理，就一定代表內容正確。", false],
    ["使用 ChatGPT 時，把回答當草稿會比直接當定稿更安全。", true]
  ],
  [
    ["好提示詞通常包含任務、背景、對象、限制、輸出格式與查核要求。", true],
    ["提示詞越短越好，所以不需要提供背景。", false],
    ["要求 AI 標示「資料未提供」可以降低自行編造的風險。", true],
    ["固定輸出格式有助於讓不同學員的產出更一致。", true],
    ["提示詞中不需要說明要給誰看。", false]
  ],
  [
    ["行政六大應用可以用「情境、原始資料、提示詞、AI 產出、人工檢查、進階追問」來教學。", true],
    ["會議紀錄任務只要產生摘要，不需要列待辦、負責人與期限。", false],
    ["表格與問卷資料可以請 AI 協助找出缺漏與異常值。", true],
    ["簡報與報告可以先請 AI 產生大綱與講者備註。", true],
    ["AI 產出行政內容後，不需要再檢查時間、地點與對象。", false]
  ],
  [
    ["搜尋功能適合查最新資訊，但重要內容仍要回官方來源確認。", true],
    ["檔案分析適合 PDF、Word、Excel 或 CSV 等資料。", true],
    ["語音或聽寫產出的日期、人名與數字不需要校對。", false],
    ["Canvas 適合長文、企劃書或需要反覆修改的內容。", true],
    ["所有任務都只需要一般對話，不需要依情境選工具。", false]
  ],
  [
    ["學生成績、身分證號、健康資料等內容不應直接貼進一般 AI 對話。", true],
    ["查證時可以問：來源是什麼、日期是什麼、是否能直接採用。", true],
    ["AI 可以代替主管核決經費或做採購決定。", false],
    ["去識別化是把姓名、學號、聯絡方式等可識別資訊替換成代稱。", true],
    ["AI 產出的對外公告可以不經人工確認直接發布。", false]
  ],
  [
    ["課後練習可以安排改寫公告、整理會議、分析表格、製作簡報大綱與建立提示詞庫。", true],
    ["進階工具越多越好，初學者一開始就必須全部學會。", false],
    ["最新功能不一定要背名稱，可以依任務判斷該用什麼工具。", true],
    ["Notion、Canva、雲端文件與 PDF 工具都可以作為課後延伸。", true],
    ["建立常用提示詞庫有助於下次替換情境後重複使用。", true]
  ]
];
const icons = {
  village:
    '<svg viewBox="0 0 24 24"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9 20v-6h6v6"/></svg>',
  latest:
    '<svg viewBox="0 0 24 24"><path d="M12 3v5"/><path d="M12 16v5"/><path d="M4.8 6.8l3.5 3.5"/><path d="M15.7 13.7l3.5 3.5"/><path d="M3 12h5"/><path d="M16 12h5"/><path d="M4.8 17.2l3.5-3.5"/><path d="M15.7 10.3l3.5-3.5"/><circle cx="12" cy="12" r="3"/></svg>',
  dojo:
    '<svg viewBox="0 0 24 24"><path d="M4 19h16"/><path d="M6 15 17 4l3 3L9 18H6v-3Z"/><path d="m14 7 3 3"/></svg>',
  scribe:
    '<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M9.5 12h5"/><path d="M9.5 16h5"/></svg>',
  meeting:
    '<svg viewBox="0 0 24 24"><path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M3.5 20a4.5 4.5 0 0 1 9 0"/><path d="M11.5 20a4.5 4.5 0 0 1 9 0"/></svg>',
  excel:
    '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 10h16"/><path d="M9 5v14"/><path d="M14 5v14"/><path d="M7 14h10"/></svg>',
  security:
    '<svg viewBox="0 0 24 24"><path d="M12 3 20 7v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="m9 12 2 2 4-4"/></svg>',
  boss:
    '<svg viewBox="0 0 24 24"><path d="M12 3 15 9l6 .8-4.5 4.3 1.1 6.1L12 17.2 6.4 20.2l1.1-6.1L3 9.8 9 9z"/></svg>',
  tone:
    '<svg viewBox="0 0 24 24"><path d="M4 6h16"/><path d="M4 12h10"/><path d="M4 18h7"/><path d="M17 14l3 3-3 3"/></svg>',
  table:
    '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 10h16"/><path d="M9 5v14"/><path d="M15 5v14"/></svg>',
  audit:
    '<svg viewBox="0 0 24 24"><path d="M9 11l2 2 4-4"/><path d="M5 4h14v16H5z"/><path d="M8 17h8"/></svg>',
  summary:
    '<svg viewBox="0 0 24 24"><path d="M5 5h14"/><path d="M5 10h14"/><path d="M5 15h9"/><path d="M5 20h6"/></svg>',
  mask:
    '<svg viewBox="0 0 24 24"><path d="M12 3 20 7v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M8 12h8"/><path d="M10 15h4"/></svg>',
  variation:
    '<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0-3 11.2V17h6v-2.8A6 6 0 0 0 12 3Z"/><path d="M9 21h6"/><path d="M10 17h4"/><path d="M4 12H2"/><path d="M22 12h-2"/><path d="m5 5-1.5-1.5"/><path d="M20.5 3.5 19 5"/></svg>'
};

const tools = {
  tone: {
    title: "語氣轉換卡",
    body: "把同一段文字改成正式、親切、簡短、主管版或公告版。",
    prompt: "請保留原意，將以下文字改成「正式但清楚」的行政語氣，並另外提供 100 字內簡短版。"
  },
  table: {
    title: "表格化卡",
    body: "把一段散亂內容整理成欄位明確、可追蹤的表格。",
    prompt: "請將以下內容整理成表格，欄位包含：事項、負責單位、期限、狀態、備註。"
  },
  audit: {
    title: "查核卡",
    body: "請 AI 先找問題，再由人決定是否採用。",
    prompt: "請檢查以下內容是否有資訊缺漏、前後矛盾、日期地點需確認、個資或不當承諾。"
  },
  summary: {
    title: "主管摘要卡",
    body: "把長內容壓縮成主管一分鐘能掌握的版本。",
    prompt: "請將以下內容整理成主管 1 分鐘可讀摘要，包含：重點、風險、待決事項、建議下一步。"
  },
  mask: {
    title: "資安遮蔽卡",
    body: "在貼上 AI 前先去識別化，降低個資與敏感資訊風險。",
    prompt: "請協助我將以下資料去識別化，保留工作判斷需要的資訊，但移除姓名、電話、學號、私人信箱與敏感原因。"
  },
  variation: {
    title: "小提醒：同樣提示詞，回答也可能不同",
    body: "同樣的提示詞，不同人使用後很可能得到不一樣的回答，這是正常現象。常見原因包括對話脈絡不同、帳號設定不同、模型與功能不同、AI 本身有變化性，以及填入的背景不同。",
    prompt: `可能原因與說明：

1. 對話脈絡不同
ChatGPT 會參考目前聊天中的上下文。

2. 帳號設定不同
記憶、偏好、常用語氣可能不一樣。

3. 模型與功能不同
是否搜尋、是否上傳檔案，都會影響結果。

4. AI 本身有變化性
可能換不同措辭、例子或排序。

5. 填入背景不同
對象、用途、限制不同，結果自然不同。

不追求得到一模一樣的答案，而是練習判斷答案是否可用、是否需要查核、是否需要修正。`
  }
};

const characterTiers = [
  {
    min: 0,
    rank: 0,
    title: "新手行政俠",
    note: "目前裝備：空手入門，先學會安全使用 AI。",
    image: "./assets/characters/level-0-novice.png",
    equipment: ["空手入門"]
  },
  {
    min: 100,
    rank: 1,
    title: "功能導航員",
    note: "取得裝備：功能指南針，知道先選入口再開始。",
    image: "./assets/characters/level-1-navigator.png",
    equipment: ["功能指南針"]
  },
  {
    min: 200,
    rank: 2,
    title: "提問修煉者",
    note: "取得裝備：提問筆，能把模糊需求改成清楚任務。",
    image: "./assets/characters/level-2-prompt.png",
    equipment: ["功能指南針", "提問筆"]
  },
  {
    min: 300,
    rank: 3,
    title: "文書術士",
    note: "取得裝備：文書卷軸，能產出通知、公告與摘要草稿。",
    image: "./assets/characters/level-3-document.png",
    equipment: ["提問筆", "文書卷軸"]
  },
  {
    min: 400,
    rank: 4,
    title: "會議紀錄師",
    note: "取得裝備：會議徽記，能整理逐字稿、決議與待辦事項。",
    image: "./assets/characters/level-4-meeting.png",
    equipment: ["文書卷軸", "會議徽記"]
  },
  {
    min: 500,
    rank: 5,
    title: "Excel 工坊師",
    note: "取得裝備：表格工具，能把資料整理成表格與分析方向。",
    image: "./assets/characters/level-5-excel.png",
    equipment: ["會議徽記", "表格工具"]
  },
  {
    min: 600,
    rank: 6,
    title: "資安守門人",
    note: "取得裝備：資安盾牌，能判斷哪些資料不能直接交給 AI。",
    image: "./assets/characters/level-6-security.png",
    equipment: ["表格工具", "資安盾牌"]
  },
  {
    min: 700,
    rank: 7,
    title: "行政任務指揮官",
    note: "取得裝備：金色冠冕，能把行政任務拆解成可執行流程。",
    image: "./assets/characters/level-7-commander.png",
    equipment: ["資安盾牌", "金色冠冕"]
  },
  {
    min: 800,
    rank: 8,
    title: "行政 AI 練功師",
    note: "最高級裝備完成：能整合提問、文書、會議、Excel 與查核。",
    image: "./assets/characters/level-8-master.png",
    equipment: ["全套裝備", "練功星章"]
  }
];

const state = {
  current: Number(localStorage.getItem("aiGameCurrent") || 0),
  done: JSON.parse(localStorage.getItem("aiGameDone") || "[]"),
  quizScores: JSON.parse(localStorage.getItem("aiGameQuizScores") || "{}")
};

const stageTitle = document.getElementById("stageTitle");
const stageTag = document.getElementById("stageTag");
const stageBadge = document.getElementById("stageBadge");
const questTitle = document.getElementById("questTitle");
const questIcon = document.getElementById("questIcon");
const questStory = document.getElementById("questStory");
const quickStart = document.getElementById("quickStart");
const beginnerRules = document.getElementById("beginnerRules");
const interfaceGuide = document.getElementById("interfaceGuide");
const knowledgeList = document.getElementById("knowledgeList");
const modeResource = document.getElementById("modeResource");
const exampleLinks = document.getElementById("exampleLinks");
const taskTitle = document.getElementById("taskTitle");
const taskBody = document.getElementById("taskBody");
const promptText = document.getElementById("promptText");
const answerHint = document.getElementById("answerHint");
const completeButton = document.getElementById("completeButton");
const quizForm = document.getElementById("quizForm");
const quizScore = document.getElementById("quizScore");
const submitQuiz = document.getElementById("submitQuiz");
const xpLabel = document.getElementById("xpLabel");
const xpBar = document.getElementById("xpBar");
const levelLabel = document.getElementById("levelLabel");
const characterScene = document.getElementById("characterScene");
const characterImage = document.getElementById("characterImage");
const characterNote = document.getElementById("characterNote");
const equipmentRow = document.getElementById("equipmentRow");
const badgeGrid = document.getElementById("badgeGrid");

function save() {
  localStorage.setItem("aiGameCurrent", String(state.current));
  localStorage.setItem("aiGameDone", JSON.stringify(state.done));
  localStorage.setItem("aiGameQuizScores", JSON.stringify(state.quizScores));
}

function xp() {
  return state.done.length * 100;
}

function characterTier(totalXp) {
  return [...characterTiers].reverse().find((tier) => totalXp >= tier.min) || characterTiers[0];
}

function renderQuiz() {
  const questions = quizQuestions[state.current] || [];
  const saved = state.quizScores[state.current];

  quizScore.textContent =
    saved == null ? "尚未作答" : `${saved.score} / ${questions.length} 題`;
  quizScore.classList.toggle("passed", saved?.score === questions.length);

  quizForm.innerHTML = questions
    .map(
      ([question, correctAnswer], index) => {
        const selectedAnswer = saved?.answers?.[index];
        const answered = selectedAnswer != null;
        const isCorrect = answered && selectedAnswer === correctAnswer;
        const explanation = correctAnswer
          ? "正確觀念：這項說法是安全且建議採用的做法。"
          : "正確觀念：這項說法不適合直接採用，仍需要人工確認或避免這樣操作。";

        return `
        <fieldset class="quiz-question ${answered ? (isCorrect ? "correct" : "incorrect") : ""}">
          <legend>${index + 1}. ${question}</legend>
          <label>
            <input type="radio" name="quiz-${index}" value="true" ${selectedAnswer === true ? "checked" : ""} />
            是
          </label>
          <label>
            <input type="radio" name="quiz-${index}" value="false" ${selectedAnswer === false ? "checked" : ""} />
            否
          </label>
          ${
            answered
              ? `<p class="quiz-explanation">${isCorrect ? explanation : `答錯了。正確答案是「${correctAnswer ? "是" : "否"}」。`}</p>`
              : ""
          }
        </fieldset>
      `;
      }
    )
    .join("");
}

function render() {
  const level = levels[state.current];
  document.body.dataset.theme = levelThemes[state.current];
  const currentIcon = icons[levelThemes[state.current]];
  stageTitle.textContent = level.title;
  stageTag.textContent = level.tag;
  stageBadge.textContent = level.badge;
  questTitle.textContent = level.quest;
  questIcon.innerHTML = currentIcon;
  questStory.textContent = level.story;
  quickStart.hidden = state.current !== 0;
  beginnerRules.hidden = state.current !== 0;
  interfaceGuide.hidden = state.current !== 0;
  modeResource.hidden = state.current !== 1;
  exampleLinks.hidden = state.current !== 5;
  taskTitle.textContent = level.taskTitle;
  taskBody.textContent = level.taskBody;
  promptText.textContent = level.prompt;
  answerHint.innerHTML = `<ul>${answerHints[state.current].map((hint) => `<li>${hint}</li>`).join("")}</ul>`;
  renderQuiz();

  knowledgeList.innerHTML = level.knowledge
    .map(
      ([title, body]) => `
        <div class="info-card">
          <strong>${title}</strong>
          <span>${body}</span>
        </div>
      `
    )
    .join("");

  document.querySelectorAll(".level-button").forEach((button) => {
    const index = Number(button.dataset.level);
    button.querySelector(".level-icon").innerHTML = icons[levelThemes[index]];
    button.classList.toggle("active", index === state.current);
    button.classList.toggle("done", state.done.includes(index));
  });

  document.querySelectorAll(".map-node").forEach((node) => {
    const index = Number(node.dataset.mapNode);
    const circle = node.querySelector("circle");
    let symbol = node.querySelector(".map-symbol");
    if (!symbol && circle) {
      const cx = Number(circle.getAttribute("cx"));
      const cy = Number(circle.getAttribute("cy"));
      symbol = document.createElementNS("http://www.w3.org/2000/svg", "g");
      symbol.setAttribute("class", "map-symbol");
      symbol.setAttribute("transform", `translate(${cx - 11} ${cy - 11})`);
      node.appendChild(symbol);
    }
    if (symbol) {
      symbol.innerHTML = icons[levelThemes[index]].replace("<svg ", '<svg x="0" y="0" width="22" height="22" ');
    }
    node.classList.toggle("active", index === state.current);
    node.classList.toggle("done", state.done.includes(index));
  });

  const completed = state.done.includes(state.current);
  completeButton.textContent = completed ? "本關已完成" : "完成本關";
  completeButton.classList.toggle("completed", completed);

  const totalXp = xp();
  const maxXp = levels.length * 100;
  xpLabel.textContent = `${totalXp} / ${maxXp}`;
  xpBar.style.width = `${Math.min(100, (totalXp / maxXp) * 100)}%`;
  const tier = characterTier(totalXp);
  levelLabel.textContent = tier.title;
  characterNote.textContent = tier.note;
  characterScene.dataset.rank = String(tier.rank);
  characterImage.src = tier.image;
  characterImage.alt = `${tier.title}角色圖`;
  equipmentRow.innerHTML = tier.equipment.map((item) => `<span>${item}</span>`).join("");

  badgeGrid.innerHTML = levels
    .map((item, index) => {
      const earned = state.done.includes(index);
      return `
        <div class="badge ${earned ? "earned" : ""}">
          <span class="badge-icon">${earned ? "✓" : icons[levelThemes[index]]}</span>
          <span>${item.badge}</span>
        </div>
      `;
    })
    .join("");
}

document.querySelectorAll(".level-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.current = Number(button.dataset.level);
    save();
    render();
  });
});

completeButton.addEventListener("click", () => {
  if (!state.done.includes(state.current)) {
    state.done.push(state.current);
    if (state.current < levels.length - 1) state.current += 1;
    save();
    render();
  }
});

submitQuiz.addEventListener("click", () => {
  const questions = quizQuestions[state.current] || [];
  const answers = [];

  for (let index = 0; index < questions.length; index += 1) {
    const selected = quizForm.querySelector(`input[name="quiz-${index}"]:checked`);
    if (!selected) {
      quizScore.textContent = "尚有題目未作答";
      quizScore.classList.remove("passed");
      return;
    }
    answers.push(selected.value === "true");
  }

  const score = answers.reduce((total, answer, index) => {
    return total + (answer === questions[index][1] ? 1 : 0);
  }, 0);

  state.quizScores[state.current] = { score, answers };
  save();
  renderQuiz();
});

document.getElementById("copyPrompt").addEventListener("click", async () => {
  const content = promptText.textContent;
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(content);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = content;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  const button = document.getElementById("copyPrompt");
  button.textContent = "已複製";
  setTimeout(() => {
    button.textContent = "複製";
  }, 1200);
});

document.getElementById("resetButton").addEventListener("click", () => {
  state.current = 0;
  state.done = [];
  state.quizScores = {};
  save();
  render();
});

const dialog = document.getElementById("toolDialog");
document.querySelectorAll(".tool-card").forEach((button) => {
  button.querySelector(".tool-icon").innerHTML = icons[button.dataset.tool];
  button.addEventListener("click", () => {
    const tool = tools[button.dataset.tool];
    document.getElementById("toolTitle").textContent = tool.title;
    document.getElementById("toolBody").textContent = tool.body;
    document.getElementById("toolPrompt").textContent = tool.prompt;
    dialog.showModal();
  });
});

document.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

render();

