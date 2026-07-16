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
      ["課程資源", "提示詞庫與課後練習會作為延伸複習材料"],
      ["介面導覽", "先認得網頁版與桌面版的導覽、輸入、工具、回答與設定區"],
      {
        title: "GPT-5.6 模型速覽",
        body: "2026 年 7 月 GPT-5.6 開放後，模型拆成 Sol、Terra、Luna 三個版本。付費聊天主力以 Sol 為主；免費版聊天暫時仍以 5.5 線為主，選工具時仍建議先看任務需求與實際帳號介面。",
        points: [
          "Sol：旗艦版本，適合複雜任務、長文件、深度整理與高品質產出。",
          "Terra：均衡版本，適合資料整理、工作流程與成本效益較平衡的任務。",
          "Luna：輕量版本，適合速度優先、成本較低或大量簡單任務。"
        ],
        details: {
          title: "查看 Sol / Terra / Luna 差異",
          headers: ["版本", "定位", "API 價格（每百萬 token）", "聊天版誰能用"],
          rows: [
            ["Sol", "旗艦", "$5 進 / $30 出", "Plus 以上，付費聊天新主力"],
            ["Terra", "均衡", "$2.50 進 / $15 出", "聊天沒有；免費層可在 ChatGPT Work / Codex 用"],
            ["Luna", "輕量", "$1 進 / $6 出", "聊天沒有；主要走 API"]
          ]
        }
      }
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
    story: "",
    knowledge: [
      {
        type: "compare",
        rows: [
          ["雜亂訊息要人工改成正式通知", "先整理成主旨、時間、地點、對象、待確認事項"],
          ["會議紀錄要從長篇文字慢慢抓重點", "先產生摘要、決議、待辦、負責人、期限"],
          ["報名資料要人工統計", "先整理人數、出席率、缺漏欄位、異常值"],
          ["簡報大綱從空白頁開始", "先產生頁面標題、重點、講者備註"],
          ["公告或 Email 不確定是否完整", "請 AI 檢查是否遺漏時間、地點、對象、期限、聯絡方式"]
        ]
      }
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
      {
        title: "ChatGPT 擅長什麼？",
        points: [
          "把雜亂文字整理成條列、表格或正式版本。",
          "幫公告、Email、會議紀錄、簡報產生初稿。",
          "比較不同資料、找出重點與待確認事項。",
          "將口語內容改成正式、親切或簡短版本。",
          "協助設計課程、活動流程、問卷與學習練習。"
        ]
      },
      {
        title: "ChatGPT 不擅長或不能直接代替人的地方",
        points: [
          "不是校內法規資料庫，也不保證永遠正確。",
          "不能代替承辦人做最終行政判斷。",
          "不適合直接處理未去識別化的個資與敏感資料。",
          "不應直接代替主管核決、承諾經費或發布正式對外內容。"
        ]
      },
      {
        title: "為什麼 AI 可能回答錯誤？",
        points: [
          "資料來源不完整或過時。",
          "使用者給的背景太少。",
          "問題太模糊，AI 只能猜測意圖。",
          "模型可能產生看似合理但未經查證的內容。"
        ]
      }
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
      {
        type: "formula",
        title: "提示詞公式",
        formula: "好提示詞 = 任務 + 背景 + 對象 + 限制 + 輸出格式 + 查核要求",
        rows: [
          ["任務", "要 AI 做什麼", "請整理成校內研習通知"],
          ["背景", "目前情境與資料來源", "這是給行政同仁的研習活動"],
          ["對象", "誰會看這份內容", "收件人是各單位行政人員"],
          ["限制", "字數、語氣、不能做什麼", "200 字以內，正式但親切"],
          ["輸出格式", "要表格、條列、Email 或大綱", "請用主旨、說明、注意事項呈現"],
          ["查核要求", "不確定時如何處理", "資訊不足請標示待確認，不要自行編造"]
        ]
      }
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
    story: "每個實作單元都可以用同一個教學模板：情境 → 原始資料 → 提示詞 → AI 產出 → 人工檢查重點 → 進階追問。",
    knowledge: [
      {
        title: "公告與 Email",
        body: "適合情境：校內通知、活動提醒、會議通知。可練習任務：改寫、縮短、正式化、檢查缺漏",
        prompt: `請將以下內容整理成正式的校內通知或 Email。

情境：[請填入通知目的與對象]
原始資料：[貼上原始文字]

請協助：
1. 改寫成正式、清楚、禮貌的語氣
2. 檢查是否缺少時間、地點、對象、聯絡方式或附件
3. 資訊不足處請標示「待確認」
4. 請提供主旨與正文`
      },
      {
        title: "會議紀錄",
        body: "適合情境：逐字稿、討論筆記、訪談紀錄。可練習任務：摘要、決議、待辦、負責人、期限",
        prompt: `請根據以下會議文字整理成會議紀錄。

情境：[請填入會議名稱與目的]
原始資料：[貼上逐字稿或討論筆記]

請輸出：
1. 會議摘要
2. 主要討論重點
3. 決議事項
4. 待辦事項表格，欄位包含：事項、負責人、期限、待確認資訊
5. 若資料沒有提到，請標示「未提供」`
      },
      {
        title: "表格與問卷",
        body: "適合情境：報名表、出席表、滿意度調查。可練習任務：統計、分類、異常值、圖表建議",
        prompt: `請協助整理以下表格或問卷資料。

情境：[請填入資料用途，例如活動報名或滿意度調查]
原始資料：[貼上表格資料或欄位內容]

請分析：
1. 主要統計結果
2. 分類整理重點
3. 可能的缺漏欄位或異常值
4. 適合製作哪些圖表
5. 需要人工確認的地方`
      },
      {
        title: "簡報與報告",
        body: "適合情境：活動成果、主管簡報、課程教材。可練習任務：大綱、頁面標題、講者備註、報告摘要",
        prompt: `請將以下資料整理成簡報或報告大綱。

情境：[請填入簡報或報告用途]
原始資料：[貼上活動成果、課程內容或主管需要看的資料]

請輸出：
1. 建議標題
2. 6 到 8 頁簡報大綱或報告段落
3. 每頁重點
4. 講者備註或補充說明
5. 主管最需要先看到的摘要`
      },
      {
        title: "檔案摘要與比較",
        body: "適合情境：PDF、Word、規章、會議資料。可練習任務：摘要、比較差異、列出待確認問題",
        prompt: `請協助摘要與比較以下文件內容。

情境：[請填入文件用途，例如規章修訂、會議資料或方案比較]
原始資料：[貼上文件內容，或說明已上傳的檔案]

請輸出：
1. 文件重點摘要
2. 重要條件、日期、金額、人名或單位
3. 與另一份資料的差異比較
4. 待確認問題清單
5. 不能直接判斷的地方請標示「需要人工確認」`
      },
      {
        title: "活動與教學設計",
        body: "適合情境：活動流程、學習單、宣傳素材。可練習任務：流程規劃、題目設計、海報文案、課後練習",
        prompt: `請協助設計一個活動或教學流程。

情境：[請填入活動或課程主題、對象、人數、時間]
原始資料：[貼上目前已有的構想或限制]

請提供：
1. 活動或課程流程
2. 每個階段的目標與時間安排
3. 可使用的互動題目或學習單題目
4. 宣傳文案或海報文字
5. 課後練習或延伸任務`
      }
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
    story: "功能介紹放在文字實作之後會比較容易理解：Plus 版常見入口包含建立圖像、編寫或編輯、查資料、加號上傳、語音、專案與排程。",
    knowledge: [
      {
        title: "查資料",
        icon: "globe",
        body: "適合情境：最新資訊、政策、活動、產品查詢。可練習任務：查找資料、整理來源、比對重點、列出待確認問題",
        prompt: `請協助我查資料並整理成可判斷的重點。

情境：[請填入要查詢的主題，例如最新政策、活動資訊、產品資料]
我想知道：[請填入具體問題]

請輸出：
1. 重點摘要
2. 可能的資料來源類型
3. 需要回官方來源確認的地方
4. 可能過時或不確定的資訊
5. 下一步我應該查證什麼`
      },
      {
        title: "加號與檔案",
        icon: "plus",
        body: "適合情境：PDF、Word、Excel、CSV、問卷、報名表、會議資料。可練習任務：摘要、分類、比較、找缺漏、整理表格",
        prompt: `我已準備上傳或貼上一份資料，請協助分析。

資料類型：[PDF / Word / Excel / CSV / 問卷 / 報名表 / 會議資料]
分析目的：[請填入你要整理、比較或檢查什麼]

請輸出：
1. 資料重點摘要
2. 分類或統計結果
3. 缺漏欄位或異常值
4. 可以製作的表格或圖表建議
5. 需要人工確認的地方`
      },
      {
        title: "建立圖像",
        icon: "image",
        body: "適合情境：海報概念、活動視覺、社群素材、課程封面。可練習任務：圖像構想、風格設定、文案搭配、版面方向",
        prompt: `請幫我設計一張活動或課程視覺圖的生成提示詞。

主題：[請填入活動或課程主題]
對象：[請填入受眾]
用途：[海報 / 社群貼文 / 簡報封面 / 網頁主視覺]
風格：[專業 / 溫暖 / 科技感 / 校園感 / 活潑]

請輸出：
1. 圖像生成提示詞
2. 建議色系
3. 主要視覺元素
4. 避免出現的元素
5. 可搭配的標題文字`
      },
      {
        title: "編寫或編輯",
        icon: "compose",
        body: "適合情境：公告、Email、企劃書、簡報文字、長文修改。可練習任務：改寫、潤飾、縮短、正式化、調整語氣",
        prompt: `請協助我編寫或編輯以下文字。

情境：[請填入用途，例如公告、Email、企劃書、簡報文字]
對象：[請填入讀者]
原始文字：[貼上文字]

請協助：
1. 改寫成清楚、正式、易讀的版本
2. 保留原意，不自行增加未提供資訊
3. 標示資訊不足或需要確認的地方
4. 提供一版精簡版
5. 提供一版較完整版本`
      },
      {
        title: "語音與語言",
        icon: "mic",
        body: "適合情境：口述想法、會議後初稿、口說練習、跨語言溝通。可練習任務：口述整理、逐字稿修正、語氣調整、翻譯初稿",
        prompt: `請將我的口述內容整理成可使用的文字。

情境：[會議後整理 / 口述筆記 / 口說練習 / 翻譯初稿]
口述內容：[貼上語音轉文字結果]

請輸出：
1. 條理化摘要
2. 可直接使用的正式文字
3. 人名、日期、數字與地點的校對清單
4. 需要我補充的資訊
5. 可追問的下一步`
      },
      {
        title: "專案與排程",
        icon: "schedule",
        body: "適合情境：長期任務、課程籌備、例行提醒、定期追蹤。可練習任務：建立工作脈絡、整理資料、提醒事項、週期任務",
        prompt: `請幫我規劃一個可長期追蹤的專案或排程任務。

任務名稱：[請填入專案或例行工作]
目標：[請填入希望完成的成果]
相關資料：[請列出已有資料或檔案]
頻率或期限：[一次性 / 每週 / 每月 / 指定日期]

請輸出：
1. 專案資料夾或對話應保存哪些內容
2. 每次追蹤要檢查的項目
3. 可設定的提醒或排程
4. 每次回報格式
5. 風險與待確認事項`
      }
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
      {
        title: "不貼敏感資料",
        body: "學生成績、身分證號、健康資料、人事考績與申訴內容不直接上傳；若要請 AI 協助，先去識別化。",
        points: [
          "先把姓名、學號、電話、Email、地址與可識別資訊替換成代稱。",
          "保留任務判斷需要的背景，但移除能指向特定個人的線索。"
        ],
        example: {
          title: "去識別化範例",
          beforeTitle: "原始資料，不建議直接貼上",
          before: "王小明，學號 11312345，因家庭經濟困難申請補助，需要協助確認資料是否齊全。",
          afterTitle: "去識別化後再使用",
          after: "學生 A，某學年度新生，因家庭因素申請補助，需要協助確認資料是否齊全。"
        }
      },
      {
        title: "資安風險提醒",
        body: "教育版或校園授權帳號通常比個人免費版更適合教學使用，但不代表 100% 安全。即使資料不作為模型訓練素材，只要內容上傳到雲端，就仍可能涉及管理權限、短暫留存、第三方工具與外洩風險。",
        points: [
          "先問自己：這份資料如果明天出現在公開社群或競爭對手手上，會不會出事？",
          "可以使用：已公開教材、通用知識、虛構範例資料、去識別化後的練習素材。",
          "不要使用：真實個資、未發表研究、系統帳密、原始碼、合約、公文、預算與法律敏感資料。"
        ]
      },
      {
        title: "5 個高風險操作情境",
        body: "看似只是整理、翻譯或摘要，實際上可能已經把個資、研究成果、系統資訊或校務機密交給外部雲端服務。",
        details: {
          title: "查看高風險情境表",
          headers: ["情境", "高風險操作", "主要風險"],
          rows: [
            ["個資處理", "上傳學生名冊、成績單、教職員聯絡資訊或會議簽到表，請 AI 分組、調分或寫評語。", "可能違反個資保護要求；真實身分資料一旦上傳，就有外洩風險。"],
            ["研究與實驗數據", "上傳未發表 Excel 原始數據、問卷結果或實驗資料，請 AI 統計、畫圖或找趨勢。", "研究成果在發表前離開本機，可能造成提前外洩或影響專利與發表。"],
            ["程式碼除錯", "貼上校園系統、實驗室網站或後端腳本，請 AI 抓 Bug 或改寫程式。", "程式碼可能含 API Key、資料庫密碼、伺服器位置或系統漏洞。"],
            ["敏感公文與合約", "貼上採購合約、產學合作草案、校務機密公文，請 AI 潤飾或翻譯。", "可能暴露商業機密、預算金額、法律條款與校務決策。"],
            ["錄音與逐字稿", "上傳校務會議、評鑑會議或個別指導錄音，請 AI 轉文字與摘要。", "語音可能包含人事、未公開決策與特定人士隱私，風險高於一般文字。"]
          ]
        }
      },
      {
        title: "隱藏風險也要留意",
        body: "安全不只看模型是否訓練資料，也要看帳號管理、資料留存、第三方工具與輸出內容是否可公開使用。",
        details: {
          title: "查看隱藏風險表",
          headers: ["風險來源", "為什麼重要", "避險做法"],
          rows: [
            ["學校管理權限", "教育版帳號多由學校管理，管理者可能依權限查看使用紀錄、指令或上傳檔案。", "不要輸入個人隱私、校務機密或未發表論文內容。"],
            ["雲端短暫留存", "即使不訓練模型，資料仍可能因安全、稽核或服務需求短暫保留。", "能不傳就不傳；必要時先去識別化與刪除敏感欄位。"],
            ["GPTs / 外掛程式", "第三方 GPTs 或 Actions 可能把資料送到外部開發者服務，未必受校方合約保護。", "只在確認可信來源與資料範圍後使用；敏感資料不要交給第三方工具。"],
            ["智慧財產權", "AI 生成文字、圖表或架構可能與既有內容相似，直接公開可能引發著作權或學術倫理問題。", "公開前查核來源、改寫成自己的內容，並保留人工審閱流程。"]
          ]
        }
      },
      {
        title: "查證三步驟",
        points: [
          "來源是什麼？是否來自官方網站、校內規章或正式文件。",
          "日期是什麼？是否為最新版本。",
          "是否能直接採用？是否仍需承辦人、主管或權責單位確認。"
        ],
        details: {
          title: "常見需要查證的內容",
          items: ["校內規章", "教育部政策", "報名截止日期", "採購規定", "差旅費標準"]
        }
      },
      {
        title: "責任邊界",
        body: "AI 只能協助整理，不能代替核決、採購決定或正式承諾。正式對外發布前，仍需由承辦人或主管確認。"
      }
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
      {
        title: "最新功能",
        body: "功能名稱與入口會隨帳號方案、版本與介面更新而不同。使用前先判斷任務需要什麼：搜尋、整理檔案、產生圖片、語音輸入、專案管理或排程，再到實際帳號中找對應入口。"
      },
      {
        title: "Codex 理解",
        body: "OpenAI 目前將 Codex 描述為 ChatGPT 中的 coding agent，可跨 ChatGPT、編輯器與終端機使用，並由 ChatGPT 帳號連接。對本課而言，可以用一句話理解：ChatGPT 幫你處理文字與資料，Codex 幫工程師處理程式與軟體專案。"
      },
      {
        title: "5 天練習",
        body: "改寫公告、整理會議、分析表格、製作簡報大綱、建立提示詞庫。",
        details: {
          title: "查看 5 天練習表",
          headers: ["天數", "練習任務", "完成標準"],
          rows: [
            ["Day 1", "改寫公告或 Email", "產出正式版、親切版、簡短版。"],
            ["Day 2", "整理會議紀錄", "產出摘要、決議、待辦、期限。"],
            ["Day 3", "分析一份表格", "找出趨勢、異常值、圖表建議。"],
            ["Day 4", "製作簡報大綱", "產出 5 頁標題、重點、講者備註。"],
            ["Day 5", "建立提示詞庫", "把常用提示詞依用途分類保存。"]
          ]
        }
      }
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
    "建議入口：查資料、加號上傳、建立圖像、編寫或編輯、語音、專案、排程。方法：先看任務型態，再選入口。",
    "最新政策或活動資訊用「查資料」，但仍要回官方來源確認。",
    "PDF、Word、Excel、CSV 可從輸入框左側「＋」加入檔案，再請 ChatGPT 摘要、比較或分析。",
    "長文、企劃書與公告可用「編寫或編輯」；會議後初步整理可用語音，但人名、日期、地點、數字一定要校對。"
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
    ["查資料適合查最新資訊，但重要內容仍要回官方來源確認。", true],
    ["PDF、Word、Excel 或 CSV 等資料可從輸入框左側加號加入，再請 ChatGPT 分析。", true],
    ["語音或聽寫產出的日期、人名與數字不需要校對。", false],
    ["編寫或編輯適合長文、企劃書或需要反覆修改的內容。", true],
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
    title: "新手俠",
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
    title: "任務指揮官",
    note: "取得裝備：金色冠冕，能把任務拆解成可執行流程。",
    image: "./assets/characters/level-7-commander.png",
    equipment: ["資安盾牌", "金色冠冕"]
  },
  {
    min: 800,
    rank: 8,
    title: "AI 練功師",
    note: "最高級裝備完成：能整合提問、文書、會議、Excel 與查核。",
    image: "./assets/characters/level-8-master.png",
    equipment: ["全套裝備", "練功星章"]
  }
];

const interfaceTopics = {
  nav: {
    title: "1 左側導覽區",
    body: "Plus 版左側導覽通常包含新對話、搜尋、資料庫、排程、外掛程式、更多工具、專案與聊天紀錄。不同任務最好開不同對話，避免上下文混在一起。",
    items: [
      ["新對話", "開一個新的聊天主題，適合開始新的任務。", "compose"],
      ["搜尋對話", "快速找回之前的聊天內容，適合查找舊紀錄或關鍵字。", "search"],
      ["資料庫", "集中查看或管理可用資料、檔案或知識來源；實際功能依帳號與版本而定。", "library"],
      ["排程", "查看或管理已設定的提醒、排程或自動化任務。", "schedule"],
      ["外掛程式", "連接其他工具或服務，依任務選擇是否啟用。", "plugin"],
      ["更多", "展開圖像、GPT、網站等更多工具入口。", "more"],
      ["專案", "把同一主題的對話、檔案與指令集中管理。", "project"],
      ["聊天", "一般對話紀錄會放在這裡，可用於回到先前任務。", "chat"]
    ]
  },
  top: {
    title: "2 工具入口與快捷工具",
    body: "Plus 版首頁常見工具入口包含輸入框左側的加號、輸入框右側的語音與語言設定，以及畫面下方的快捷工具。Chat / Work 已移到第 6 點獨立說明。",
    visual: "plusHome",
    items: [
      ["2-1 加號", "輸入框左側的加號可加入檔案、圖片或開啟其他可用工具。適合把 PDF、Word、Excel、CSV 或圖片交給 ChatGPT 分析。"],
      ["2-2 建立圖像", "畫面下方的快捷工具，可用來產生活動主視覺、海報概念、社群素材或教學插圖。"],
      ["2-3 編寫或編輯", "畫面下方的快捷工具，適合撰寫、改寫、潤飾公告、Email、企劃書、文案或長篇內容。"],
      ["2-4 查資料", "畫面下方的快捷工具，適合搜尋、整理來源或做資料查詢；重要資訊仍需回到官方或可靠來源確認。"],
      ["2-5 語音 / 語言", "輸入框右側可切換語言、使用麥克風或語音模式，適合口述想法、練習口說或快速輸入初稿。"],
      ["2-6 分享", "分享按鈕常在對話右上方或更多選單裡；分享前要確認沒有個資、帳密、未公開資料或敏感資訊。", "share"],
      ["2-7 更多選單", "部分功能會因視窗寬度、帳號方案或版本被收合，可從更多選單尋找其他隱藏操作。"]
    ]
  },
  modeSwitch: {
    title: "6 Chat / Work 模式",
    body: "7 月改版後，部分帳號會在畫面上方看到 Chat / Work 切換。使用前先判斷任務是單次問答，還是需要整理資料、產出文件與長流程工作。",
    items: [
      ["Chat 模式", "適合快速問答、改寫一句話、翻譯、摘要、靈感發想與一般對話。範例：請把這段口語訊息改成正式通知。"],
      ["Work 模式", "適合較完整的工作流程，例如研究資料、整理檔案、產出文件、表格、簡報大綱或報告。範例：請根據這份活動資料整理成果報告架構。"],
      ["怎麼選", "任務短、資料少、只要快速回覆時用 Chat；資料多、需要檔案整理或產出正式成果時，優先嘗試 Work。"],
      ["課堂練習範例", "同一段活動通知先在 Chat 要求改寫，再在 Work 要求整理成公告、Email、簡報大綱三種輸出，比較兩者差異。"]
    ]
  },
  input: {
    title: "3 輸入與送出區",
    body: "這是提示詞與素材進入 ChatGPT 的地方。好的輸入通常包含任務、背景、限制、格式與語氣。",
    items: [
      ["訊息輸入框", "輸入任務、背景、限制、格式與希望的語氣。"],
      ["附件 / 上傳", "加入文件、表格、圖片或資料檔；上傳前先確認資安。"],
      ["語音 / Dictation", "用口述輸入想法、會議重點或初步筆記。"],
      ["送出 / 停止", "送出提示詞；生成中若方向不對，可停止再修正。"]
    ]
  },
  answer: {
    title: "4 回答操作區",
    body: "ChatGPT Plus 的回答下方通常會出現一排操作圖示，部分功能會收在「更多」選單中。注意：實際按鈕可能依版本、裝置與回答類型略有不同。",
    visual: "answerActions",
    items: [
      ["複製", "把回答複製到文件、信件、表格或簡報草稿中。"],
      ["分享 / 匯出", "將回答或對話分享出去；分享前要確認沒有敏感資訊。"],
      ["重新生成", "請 ChatGPT 換一版答案，適合比較不同寫法。"],
      ["更多選單", "點「…」可看到額外功能，例如檢視資料來源、在新聊天中分支或大聲朗讀。"],
      ["檢視資料來源", "若回答有引用來源，可用來回查資料依據；重要內容仍要人工確認。"],
      ["在新聊天中分支 / 大聲朗讀", "分支可保留原對話再開新方向；朗讀適合聽稿、檢查語氣或輔助閱讀。"]
    ]
  },
  account: {
    title: "5 帳號與設定區",
    body: "Plus 版帳號選單通常可管理方案、個人化、個人檔案、設定、說明與登出。這裡也適合提醒：帳號方案與設定會影響可用功能、資料處理與安全性。",
    items: [
      ["升級方案", "查看目前方案與升級選項；不同方案會影響模型、工具與使用額度。", "sparkle"],
      ["個人化", "設定偏好語氣、工作情境或回應風格，讓回答更貼近常用需求。", "personalize"],
      ["個人檔案", "管理帳號名稱、頭像或個人資料；教學時可提醒不要放敏感資訊。", "profile"],
      ["設定", "管理一般設定、資料控制、記憶、通知與其他帳號偏好。", "settings"],
      ["說明", "開啟說明中心、版本說明、下載應用程式、鍵盤快速鍵與回報問題。", "help"],
      ["登出", "離開公用或教室電腦前務必登出，避免帳號被他人使用。", "logout"],
      ["下載應用程式", "可安裝桌面版或行動版，方便日常工作中快速叫出 ChatGPT。", "download"],
      ["隱私權政策 / 服務條款", "查看資料使用、服務規範與隱私相關說明。", "info"]
    ]
  }
};

const inlineIcons = {
  compose: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/></svg>',
  library: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V6a2 2 0 0 1 2-2h3v15"/><path d="M9 19V4h5v15"/><path d="M14 19V5h4a2 2 0 0 1 2 2v12"/></svg>',
  schedule: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  plugin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8a4 4 0 0 1 8 0v2h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1Z"/><path d="M8 10h8"/></svg>',
  more: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
  project: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h6l2 2h8v10a2 2 0 0 1-2 2H4Z"/><path d="M4 6v14"/></svg>',
  chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14v10H8l-3 3Z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  image: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m6 17 4-4 3 3 2-2 3 3"/></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3.2 3 14.8 0 18"/><path d="M12 3c-3 3.2-3 14.8 0 18"/></svg>',
  mic: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/><path d="M8 21h8"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/></svg>',
  personalize: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M8 16c1.2 1 2.5 1.5 4 1.5s2.8-.5 4-1.5"/></svg>',
  profile: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M5 20c1.5-4 12.5-4 14 0"/></svg>',
  settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a8 8 0 0 0 .1-2l2-1.5-2-3.5-2.4 1a8 8 0 0 0-1.7-1L15 5.5h-4L10.6 8a8 8 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a8 8 0 0 0 .1 2l-2.1 1.5 2 3.5 2.4-1a8 8 0 0 0 1.7 1l.4 2.5h4l.4-2.5a8 8 0 0 0 1.7-1l2.4 1 2-3.5Z"/></svg>',
  help: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.8 2.8 0 1 1 4.8 2c-.9.8-1.8 1.3-1.8 2.8"/><path d="M12 17h.01"/></svg>',
  logout: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M14 4h5v16h-5"/></svg>',
  download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 20h14"/></svg>',
  info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 10v6"/><path d="M12 7h.01"/></svg>',
  share: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 14v5h14v-5"/></svg>'
};

const interfaceVisuals = {
  plusHome: `
    <div class="plus-home-map" aria-label="Plus 首頁工具位置示意圖">
      <div class="plus-sidebar">
        <strong>ChatGPT Plus</strong>
        <span>新對話</span>
        <span>搜尋對話</span>
        <span>資料庫</span>
        <span>排程</span>
        <span>外掛程式</span>
      </div>
      <div class="plus-main">
        <div class="share-dot"><b>2-6</b><span>分享</span></div>
        <div class="hero-question">我可以幫你什麼忙？</div>
        <div class="plus-input">
          <b>2-1</b>
          <span class="input-text">詢問 ChatGPT</span>
          <span class="lang-dot">中</span>
          <span class="voice-dot">2-5</span>
        </div>
        <div class="quick-tool tool-image"><b>2-2</b><span>建立圖像</span></div>
        <div class="quick-tool tool-write"><b>2-3</b><span>編寫或編輯</span></div>
        <div class="quick-tool tool-search"><b>2-4</b><span>查資料</span></div>
        <div class="more-dot"><b>2-7</b><span>更多</span></div>
      </div>
    </div>
  `,
  answerActions: `
    <div class="answer-action-map" aria-label="回答操作區示意圖">
      <div class="answer-bubble">
        <span></span>
        <span></span>
        <span class="short"></span>
      </div>
      <div class="answer-toolbar">
        <div class="answer-action-item"><b>1</b><span>複製</span></div>
        <div class="answer-action-item"><b>2</b><span>分享 / 匯出</span></div>
        <div class="answer-action-item"><b>3</b><span>重新生成</span></div>
        <div class="answer-action-item active"><b>4</b><span>更多</span></div>
        <div class="answer-action-item source"><b>5</b><span>資料來源</span></div>
      </div>
      <div class="answer-more-menu">
        <strong>更多動作</strong>
        <span><b>6</b>在新聊天中分支</span>
        <span><b>7</b>大聲朗讀</span>
      </div>
      <p>回答不是終點，常用操作都在回答下方或「更多」選單中。</p>
    </div>
  `
};

const instructorProfile = [
  ["講師姓名", "林仁傑"],
  [
    "主要經歷",
    '健豪印刷-設計企劃；上品綜合-專案管理/平面設計；<a href="https://www.instagram.com/ashunhouse/" target="_blank" rel="noopener noreferrer">Ashun+客製化</a>-主理人'
  ],
  ["教學經歷", "聯成電腦-講師；苗栗縣社區培力育成中心-講師"],
  [
    "專長",
    "Adobe軟體 應用教學、專注於平面設計、活動企劃、AI工具應用與執行效率提升等務實面工作，也擅長將工作上寶貴經驗轉化為淺顯易懂的課程"
  ],
  [
    "本課特色",
    "以初學者能立即上手為目標，透過生活化案例、行政情境、提示詞卡片與課後練習，協助學員把 ChatGPT 變成日常工作助理。"
  ]
];

const planComparison = [
  {
    plan: "Free",
    audience: "偶爾使用的一般使用者",
    feature: "可使用基本 ChatGPT 功能，但使用額度與部分工具可能有限制",
    useCase: "日常問答、簡單翻譯、摘要、基礎文案"
  },
  {
    plan: "Plus",
    audience: "經常使用 ChatGPT 的個人使用者",
    feature: "通常可使用更多模型與工具，使用額度也比免費版高",
    useCase: "行政文書、資料整理、圖片生成、檔案分析"
  },
  {
    plan: "Pro",
    audience: "高頻率或重度使用者",
    feature: "通常提供較高的使用額度，適合長時間處理複雜任務",
    useCase: "深度研究、大量文件、複雜資料分析、進階工作流程"
  },
  {
    plan: "Business",
    audience: "公司、部門或小型團隊",
    feature: "提供團隊工作區、帳號管理與較完整的商務使用環境",
    useCase: "團隊協作、公司文件、共用 GPT、部門工作流程"
  },
  {
    plan: "ChatGPT Edu",
    audience: "大專院校與教育機構",
    feature: "適合教學、研究與校園組織管理，實際功能依校方授權與設定而定",
    useCase: "課程教學、研究整理、報告分析、校務行政"
  },
  {
    plan: "Enterprise",
    audience: "大型企業與組織",
    feature: "強調權限管理、安全治理、資料控管與組織規模部署",
    useCase: "跨部門協作、內部知識管理、大型組織 AI 導入"
  }
];

const state = {
  current: Number(localStorage.getItem("aiGameCurrent") || 0),
  done: JSON.parse(localStorage.getItem("aiGameDone") || "[]"),
  quizScores: JSON.parse(localStorage.getItem("aiGameQuizScores") || "{}")
};

state.current = Math.min(Math.max(state.current, 0), levels.length - 1);
state.done = state.done.filter((index) => Number.isInteger(index) && index >= 0 && index < levels.length);
state.quizScores = Object.fromEntries(
  Object.entries(state.quizScores).filter(([index]) => Number(index) >= 0 && Number(index) < levels.length)
);

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
const modelGuideResource = document.getElementById("modelGuideResource");
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
const victoryDialog = document.getElementById("victoryDialog");
const victoryExp = document.getElementById("victoryExp");
const victoryBadges = document.getElementById("victoryBadges");
const versionFooter = document.getElementById("versionFooter");
const appVersion = "V1.3";

function renderVersionInfo() {
  versionFooter.textContent = `JARVISLIN ${appVersion}`;
}

function save() {
  localStorage.setItem("aiGameCurrent", String(state.current));
  localStorage.setItem("aiGameDone", JSON.stringify(state.done));
  localStorage.setItem("aiGameQuizScores", JSON.stringify(state.quizScores));
}

async function copyText(content) {
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
  questStory.hidden = !level.story;
  quickStart.hidden = state.current !== 0;
  beginnerRules.hidden = state.current !== 0;
  interfaceGuide.hidden = state.current !== 0;
  knowledgeList.hidden = state.current === 0;
  modeResource.hidden = state.current !== 1;
  modelGuideResource.hidden = state.current !== 5;
  exampleLinks.hidden = state.current !== 5;
  taskTitle.textContent = level.taskTitle;
  taskBody.textContent = level.taskBody;
  promptText.textContent = level.prompt;
  answerHint.innerHTML = `<ul>${answerHints[state.current].map((hint) => `<li>${hint}</li>`).join("")}</ul>`;
  renderQuiz();

  knowledgeList.innerHTML = level.knowledge
    .map((item, index) => {
      if (!Array.isArray(item) && item.type === "compare") {
        return `
          <div class="compare-workflow-table" role="table" aria-label="原本做法與 ChatGPT 可協助比較">
            <div class="compare-workflow-row compare-workflow-head" role="row">
              <span role="columnheader">原本做法</span>
              <span role="columnheader">ChatGPT 可協助</span>
            </div>
            ${item.rows
              .map(
                ([before, after]) => `
                  <div class="compare-workflow-row" role="row">
                    <span role="cell" data-label="原本做法">${before}</span>
                    <span role="cell" data-label="ChatGPT 可協助">${after}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        `;
      }
      if (!Array.isArray(item) && item.type === "formula") {
        return `
          <div class="prompt-formula-card">
            <h4>${item.title}</h4>
            <p class="formula-line">${item.formula}</p>
            <div class="formula-table" role="table" aria-label="${item.title}">
              <div class="formula-row formula-head" role="row">
                <span role="columnheader">元素</span>
                <span role="columnheader">說明</span>
                <span role="columnheader">範例</span>
              </div>
              ${item.rows
                .map(
                  ([element, description, example]) => `
                    <div class="formula-row" role="row">
                      <span role="cell" data-label="元素">${element}</span>
                      <span role="cell" data-label="說明">${description}</span>
                      <span role="cell" data-label="範例">${example}</span>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        `;
      }
      const title = Array.isArray(item) ? item[0] : item.title;
      const body = Array.isArray(item) ? item[1] : item.body;
      const prompt = Array.isArray(item) ? "" : item.prompt;
      const icon = Array.isArray(item) ? "" : item.icon;
      const points = Array.isArray(item) ? null : item.points;
      const example = Array.isArray(item) ? null : item.example;
      const details = Array.isArray(item) ? null : item.details;
      return `
        <div class="info-card ${prompt ? "with-prompt" : ""} ${points ? "with-points" : ""} ${
        example || details ? "with-extra" : ""
      }">
          <strong class="${icon ? "with-inline-icon" : ""}">
            ${inlineIcons[icon] || ""}
            <span>${title}</span>
          </strong>
          ${
            points
              ? `<ul>${points.map((point) => `<li>${point}</li>`).join("")}</ul>`
              : `<span>${body}</span>`
          }
          ${
            example
              ? `
                <div class="deidentify-example">
                  <h5>${example.title}</h5>
                  <section>
                    <strong>${example.beforeTitle}</strong>
                    <p>${example.before}</p>
                  </section>
                  <section>
                    <strong>${example.afterTitle}</strong>
                    <p>${example.after}</p>
                  </section>
                </div>
              `
              : ""
          }
          ${
            details
              ? `
                <details class="info-card-details">
                  <summary>${details.title}</summary>
                  ${
                    details.rows
                      ? `
                        <div class="detail-table detail-cols-${details.headers.length}" role="table" aria-label="${details.title}">
                          <div class="detail-row detail-head" role="row">
                            ${details.headers.map((header) => `<span role="columnheader">${header}</span>`).join("")}
                          </div>
                          ${details.rows
                            .map(
                              (row) => `
                                <div class="detail-row" role="row">
                                  ${row
                                    .map((cell, cellIndex) => `<span role="cell" data-label="${details.headers[cellIndex]}">${cell}</span>`)
                                    .join("")}
                                </div>
                              `
                            )
                            .join("")}
                        </div>
                      `
                      : `<ul>${details.items.map((detail) => `<li>${detail}</li>`).join("")}</ul>`
                  }
                </details>
              `
              : ""
          }
          ${
            prompt
              ? `
                <div class="mini-prompt">
                  <div class="mini-prompt-head">
                    <span>範例提示詞</span>
                    <button type="button" class="copy-mini-prompt" data-prompt-index="${index}">複製</button>
                  </div>
                  <pre>${prompt}</pre>
                </div>
              `
              : ""
          }
        </div>
      `;
    })
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
        <button class="badge ${earned ? "earned" : ""}" type="button" data-badge-level="${index}" aria-label="前往${item.title}">
          <span class="badge-icon">${earned ? "✓" : icons[levelThemes[index]]}</span>
          <span>${item.badge}</span>
        </button>
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

badgeGrid.addEventListener("click", (event) => {
  const badge = event.target.closest("[data-badge-level]");
  if (!badge) return;
  state.current = Number(badge.dataset.badgeLevel);
  save();
  render();
  document.querySelector(".game-stage").scrollIntoView({ behavior: "smooth", block: "start" });
});

completeButton.addEventListener("click", () => {
  if (!state.done.includes(state.current)) {
    const completingFinalLevel = state.current === levels.length - 1;
    state.done.push(state.current);
    if (state.current < levels.length - 1) state.current += 1;
    save();
    render();
    document.querySelector(".game-stage").scrollIntoView({ behavior: "smooth", block: "start" });
    if (completingFinalLevel && state.done.length === levels.length) {
      victoryExp.textContent = `${xp()} / ${levels.length * 100}`;
      victoryBadges.textContent = `${state.done.length} / ${levels.length}`;
      victoryDialog.showModal();
    }
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
  await copyText(promptText.textContent);
  const button = document.getElementById("copyPrompt");
  button.textContent = "已複製";
  setTimeout(() => {
    button.textContent = "複製";
  }, 1200);
});

knowledgeList.addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-mini-prompt");
  if (!button) return;
  const item = levels[state.current].knowledge[Number(button.dataset.promptIndex)];
  if (!item?.prompt) return;
  await copyText(item.prompt);
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

const interfaceDialog = document.getElementById("interfaceDialog");
const interfaceDialogTitle = document.getElementById("interfaceDialogTitle");
const interfaceDialogBody = document.getElementById("interfaceDialogBody");
const interfaceDialogContent = document.getElementById("interfaceDialogContent");

document.querySelectorAll("[data-interface-topic]").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = interfaceTopics[button.dataset.interfaceTopic];
    if (!topic) return;
    interfaceDialogTitle.textContent = topic.title;
    interfaceDialogBody.textContent = topic.body;
    const visual = topic.visual ? interfaceVisuals[topic.visual] || "" : "";
    const cards = topic.items
      .map(
        ([title, body, icon]) => `
          <article>
            <strong class="${icon ? "with-inline-icon" : ""}">
              ${inlineIcons[icon] || ""}
              <span>${title}</span>
            </strong>
            <p>${body}</p>
          </article>
        `
      )
      .join("");
    interfaceDialogContent.innerHTML = `${visual}<div class="interface-dialog-cards">${cards}</div>`;
    interfaceDialog.showModal();
  });
});

document.querySelector(".close-interface-dialog").addEventListener("click", () => interfaceDialog.close());
interfaceDialog.addEventListener("click", (event) => {
  if (event.target === interfaceDialog) interfaceDialog.close();
});

const instructorDialog = document.getElementById("instructorDialog");
const instructorDialogContent = document.getElementById("instructorDialogContent");

instructorDialogContent.innerHTML = instructorProfile
  .map(
    ([label, content]) => `
      <article>
        <strong>${label}</strong>
        <p>${content}</p>
      </article>
    `
  )
  .join("");

document.getElementById("instructorButton").addEventListener("click", () => instructorDialog.showModal());
document.querySelector(".close-instructor-dialog").addEventListener("click", () => instructorDialog.close());
instructorDialog.addEventListener("click", (event) => {
  if (event.target === instructorDialog) instructorDialog.close();
});

const planDialog = document.getElementById("planDialog");
const planDialogContent = document.getElementById("planDialogContent");

planDialogContent.innerHTML = `
  <div class="plan-row plan-head">
    <span>方案</span>
    <span>適合對象</span>
    <span>主要特色</span>
    <span>常見使用情境</span>
  </div>
  ${planComparison
    .map(
      (item) => `
        <div class="plan-row">
          <strong>${item.plan}</strong>
          <span>${item.audience}</span>
          <span>${item.feature}</span>
          <span>${item.useCase}</span>
        </div>
      `
    )
    .join("")}
`;

modeResource.addEventListener("click", () => planDialog.showModal());
modeResource.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    planDialog.showModal();
  }
});
modeResource.querySelector("a").addEventListener("click", (event) => event.stopPropagation());
document.querySelector(".close-plan-dialog").addEventListener("click", () => planDialog.close());
planDialog.addEventListener("click", (event) => {
  if (event.target === planDialog) planDialog.close();
});

const modelGuideDialog = document.getElementById("modelGuideDialog");
modelGuideResource.addEventListener("click", () => modelGuideDialog.showModal());
modelGuideResource.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    modelGuideDialog.showModal();
  }
});
document.querySelector(".close-model-guide-dialog").addEventListener("click", () => modelGuideDialog.close());
modelGuideDialog.addEventListener("click", (event) => {
  if (event.target === modelGuideDialog) modelGuideDialog.close();
});

const desktopDialog = document.getElementById("desktopDialog");
document.getElementById("desktopGuideButton").addEventListener("click", () => desktopDialog.showModal());
document.querySelector(".close-desktop-dialog").addEventListener("click", () => desktopDialog.close());
desktopDialog.addEventListener("click", (event) => {
  if (event.target === desktopDialog) desktopDialog.close();
});

document.querySelector(".close-victory-dialog").addEventListener("click", () => victoryDialog.close());
document.querySelector(".close-victory-action").addEventListener("click", () => victoryDialog.close());
document.querySelector(".replay-victory-action").addEventListener("click", () => {
  victoryDialog.close();
  state.current = 0;
  state.done = [];
  state.quizScores = {};
  save();
  render();
  document.querySelector(".game-stage").scrollIntoView({ behavior: "smooth", block: "start" });
});
victoryDialog.addEventListener("click", (event) => {
  if (event.target === victoryDialog) victoryDialog.close();
});

render();
renderVersionInfo();

