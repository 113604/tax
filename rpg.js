(()=>{
const QUESTIONS=[
  {
    "id": 8,
    "category": "房屋稅",
    "scenario": "民眾說：「我的房屋目前空著，如果改成出租，房屋稅會比較便宜嗎？」",
    "options": [
      "只要出租就一律免徵房屋稅",
      "出租並申報租賃所得，且租金達標準，可適用較優惠稅率",
      "出租後一律按營業用3%課徵"
    ],
    "correct": 1,
    "explanation": "出租申報租賃所得且達當地一般租金標準者，可適用1.5%至2.4%的較優惠稅率。"
  },
  {
    "id": 7,
    "category": "房屋稅",
    "scenario": "民眾詢問自住房屋稅率，需要符合哪些基本條件？",
    "options": [
      "只要本人持有房屋即可",
      "無出租營業、本人或親屬實際居住並設籍，且家戶全國3戶內",
      "房屋滿6年且每年提出申請"
    ],
    "correct": 1,
    "explanation": "自住房屋須無出租或營業，供本人、配偶或直系親屬實際居住並設籍，家戶全國合計3戶內。"
  },
  {
    "id": 16,
    "category": "房屋稅",
    "scenario": "民眾問：「房屋稅每年什麼時候繳？」",
    "options": [
      "每年4月1日至4月30日",
      "每年5月1日至5月31日",
      "每年11月1日至11月30日"
    ],
    "correct": 1,
    "explanation": "房屋稅每年徵收1次，繳納期間為5月1日至5月31日。"
  },
  {
    "id": 24,
    "category": "地價稅",
    "scenario": "民眾新買自住房屋，問地價稅自用住宅用地稅率應在何時以前申請？",
    "options": [
      "每年3月22日前",
      "每年9月22日前",
      "收到稅單後再申請即可"
    ],
    "correct": 1,
    "explanation": "應於地價稅開徵40日前，也就是每年9月22日以前提出申請。"
  },
  {
    "id": 27,
    "category": "契稅",
    "scenario": "民眾詢問配偶互贈房屋，是否需要申報契稅？",
    "options": [
      "配偶間贈與完全不需要申報",
      "應於贈與契約成立日起30日內申報契稅",
      "只要辦理贈與稅即可，不涉及契稅"
    ],
    "correct": 1,
    "explanation": "配偶互贈房屋仍應於贈與契約成立日起30日內，向房屋所在地稅捐機關申報贈與契稅。"
  },
  {
    "id": 28,
    "category": "契稅",
    "scenario": "民眾買賣房屋逾期申報契稅，詢問是否會受罰。",
    "options": [
      "不會，只要補申報即可",
      "每逾3日加徵應納稅額1%怠報金，並有上限",
      "一律處房屋現值10%的罰鍰"
    ],
    "correct": 1,
    "explanation": "逾期申報每逾3日加徵應納稅額1%的怠報金，最高以應納稅額為限，且不得超過15,000元。"
  },
  {
    "id": 33,
    "category": "土地增值稅",
    "scenario": "民眾問「一生一屋」是否可以直接申請，不必先使用「一生一次」？",
    "options": [
      "可以，兩種優惠可自由選擇",
      "不可以，須曾使用過「一生一次」優惠",
      "只要持有房屋滿1年就可以"
    ],
    "correct": 1,
    "explanation": "申請「一生一屋」前，必須曾使用過土地增值稅「一生一次」自用住宅用地優惠。"
  },
  {
    "id": 37,
    "category": "土地增值稅",
    "scenario": "重購退稅核准後，民眾想把全家戶籍都遷出新購房屋，會有影響嗎？",
    "options": [
      "沒有影響，退稅核准後就結案",
      "5年內戶籍全部遷出，可能被追繳原退稅款",
      "只要房屋沒有出售就完全不受影響"
    ],
    "correct": 1,
    "explanation": "新購房屋5年內須繼續作自用住宅使用，戶籍不得全部遷出，否則可能追繳原退還的土地增值稅。"
  },
  {
    "id": 40,
    "category": "使用牌照稅",
    "scenario": "民眾問150cc的機車是否需要繳使用牌照稅？",
    "options": [
      "150cc以下不必繳納使用牌照稅",
      "所有機車都要繳",
      "只有電動機車需要繳"
    ],
    "correct": 0,
    "explanation": "機車汽缸總排氣量150cc（含）以下免徵，151cc（含）以上才課徵使用牌照稅。"
  },
  {
    "id": 41,
    "category": "使用牌照稅",
    "scenario": "車輛欠繳使用牌照稅，滯納期滿後仍行駛公共道路被查獲，如何處理？",
    "options": [
      "只要補繳原稅款即可",
      "除補稅外，並處應納稅額1倍以下罰鍰",
      "直接吊銷駕照，不需補稅"
    ],
    "correct": 1,
    "explanation": "除責令補稅外，還會處以應納稅額1倍以下的罰鍰。"
  },
  {
    "id": 47,
    "category": "娛樂稅",
    "scenario": "民眾詢問娛樂稅法修正案自何時生效。",
    "options": [
      "115年5月20日",
      "115年5月21日",
      "115年5月22日"
    ],
    "correct": 2,
    "explanation": "修正案於115年5月20日公布，依規定自115年5月22日起發生效力。"
  },
  {
    "id": 49,
    "category": "娛樂稅",
    "scenario": "115年6月1日舉辦的演唱會，還需要代徵娛樂稅嗎？",
    "options": [
      "仍須全額代徵娛樂稅",
      "不需要，因為是在115年5月22日生效後舉辦",
      "只有臺北市需要代徵"
    ],
    "correct": 1,
    "explanation": "115年5月22日起舉辦的演唱會已非娛樂稅課徵項目，無須代徵或繳納娛樂稅。"
  },
  {
    "id": 1,
    "category": "房屋稅",
    "scenario": "公益出租人詢問，出租房屋的房屋稅優惠稅率是多少？",
    "options": [
      "1%",
      "1.2%",
      "3%"
    ],
    "correct": 1,
    "explanation": "公益出租人出租使用的房屋，房屋稅優惠稅率為1.2%。"
  },
  {
    "id": 1,
    "category": "房屋稅",
    "scenario": "公益出租人出租的土地，地價稅可適用哪一種稅率？",
    "options": [
      "自用住宅用地稅率2‰",
      "一般用地最高稅率",
      "一律免徵"
    ],
    "correct": 0,
    "explanation": "公益出租人出租房地，地價稅可按自用住宅用地稅率2‰課徵。"
  },
  {
    "id": 2,
    "category": "房屋稅",
    "scenario": "取得建築能效第1級、第1+級或第0級標示的房屋，房屋構造標準單價有何優惠？",
    "options": [
      "減價5%",
      "減價20%",
      "完全免稅"
    ],
    "correct": 0,
    "explanation": "首次取得指定建築能效標示的房屋，房屋構造標準單價可減價5%。"
  },
  {
    "id": 3,
    "category": "房屋稅",
    "scenario": "民眾持有全國單一自住房屋，詢問是否一定能適用1%稅率。",
    "options": [
      "只要只有1戶即可",
      "還須符合設籍、實際居住及房屋現值未超過一定金額等條件",
      "房屋滿10年即可"
    ],
    "correct": 1,
    "explanation": "全國單一自住1%稅率仍須符合實際居住、設籍及房屋現值未超過一定金額等條件。"
  },
  {
    "id": 4,
    "category": "房屋稅",
    "scenario": "民眾問老房子住滿30年是否就免繳房屋稅。",
    "options": [
      "是，超過20年都免稅",
      "不是，是否免稅主要看房屋現值及持有戶數",
      "只要沒有出租就免稅"
    ],
    "correct": 1,
    "explanation": "房屋免稅不是依屋齡判斷，而是依房屋現值及法定戶數限制判斷。"
  },
  {
    "id": 5,
    "category": "房屋稅",
    "scenario": "自然人持有超過3戶低現值住家房屋，未申報擇定免稅房屋，稽徵機關如何處理？",
    "options": [
      "全部免稅",
      "全部課稅",
      "依房屋稅額高低主動核定前3戶免稅"
    ],
    "correct": 2,
    "explanation": "逾期未申報者，稽徵機關會依規定主動核定前3戶免稅。"
  },
  {
    "id": 6,
    "category": "房屋稅",
    "scenario": "民眾將房屋作為診所使用，應適用哪類房屋稅率？",
    "options": [
      "自住1.2%",
      "非住家用3%",
      "公益出租1.2%"
    ],
    "correct": 1,
    "explanation": "私人醫院、診所及事務所使用的房屋，屬非住家用，稅率為3%。"
  },
  {
    "id": 9,
    "category": "房屋稅",
    "scenario": "三戶房屋各持分三分之一，計算自住房屋戶數時是否只算1戶？",
    "options": [
      "是，持分相加後算1戶",
      "不是，每一權狀原則各算1戶",
      "只算持分最大的一戶"
    ],
    "correct": 1,
    "explanation": "持分共有房屋不按持分比例折算，每一權狀原則上各計1戶。"
  },
  {
    "id": 10,
    "category": "房屋稅",
    "scenario": "房東把住宅出租給一般房客，就一定是公益出租人嗎？",
    "options": [
      "是，只要有出租就是",
      "不是，須出租給符合租金補貼資格者等並經都發局認定",
      "只要租金低於市價即可"
    ],
    "correct": 1,
    "explanation": "公益出租人須符合出租對象及認定程序，不是所有出租房屋都自動適用。"
  },
  {
    "id": 11,
    "category": "房屋稅",
    "scenario": "兩戶房屋打通使用，但地政權狀仍是兩個建號，房屋稅戶數如何計算？",
    "options": [
      "算1戶",
      "仍算2戶",
      "由納稅人自行選擇"
    ],
    "correct": 1,
    "explanation": "戶數原則依建物權狀或建號認定，未辦理合併仍算2戶。"
  },
  {
    "id": 21,
    "category": "地價稅",
    "scenario": "民眾的土地供本人自住，但本人、配偶或直系親屬都沒有在該處設籍，可否適用自用住宅用地稅率？",
    "options": [
      "可以，只要有居住事實",
      "不可以，原則上須完成戶籍登記",
      "可以，只要房屋沒有出租"
    ],
    "correct": 1,
    "explanation": "地價稅自用住宅用地優惠原則上須有本人、配偶或直系親屬設籍。"
  },
  {
    "id": 22,
    "category": "地價稅",
    "scenario": "民眾在9月23日才申請地價稅自用住宅用地優惠，當年度通常如何適用？",
    "options": [
      "當年度立即適用",
      "通常自次年起適用",
      "永遠不能再申請"
    ],
    "correct": 1,
    "explanation": "超過9月22日申請期限，通常自次年起適用優惠稅率。"
  },
  {
    "id": 23,
    "category": "地價稅",
    "scenario": "地價稅是按哪一天的土地登記資料認定納稅義務人？",
    "options": [
      "每年1月1日",
      "每年8月31日",
      "每年12月31日"
    ],
    "correct": 1,
    "explanation": "地價稅以每年8月31日地政機關土地登記簿所載所有權人為納稅義務人。"
  },
  {
    "id": 24,
    "category": "地價稅",
    "scenario": "民眾問地價稅每年何時開徵。",
    "options": [
      "5月1日至5月31日",
      "11月1日至11月30日",
      "12月1日至12月31日"
    ],
    "correct": 1,
    "explanation": "地價稅一般於每年11月1日至11月30日開徵。"
  },
  {
    "id": 25,
    "category": "地價稅",
    "scenario": "自用住宅用地部分出租作商店，整筆土地仍可全部適用2‰嗎？",
    "options": [
      "可以，只要屋主有設籍",
      "不可以，出租或營業部分應按一般用地稅率課徵",
      "可以，只要商店面積小於一半"
    ],
    "correct": 1,
    "explanation": "供出租或營業使用的土地不符合自用住宅用地要件，應依實際使用情形課稅。"
  },
  {
    "id": 26,
    "category": "地價稅",
    "scenario": "土地所有權人搬家後，想申請新住址的自用住宅用地優惠，最重要應先確認什麼？",
    "options": [
      "是否已在新址完成戶籍登記",
      "房屋是否滿10年",
      "是否繳過契稅"
    ],
    "correct": 0,
    "explanation": "申請自用住宅用地優惠前，應先確認本人、配偶或直系親屬已在該處設籍。"
  },
  {
    "id": 27,
    "category": "契稅",
    "scenario": "買賣房屋應由哪一方申報繳納契稅？",
    "options": [
      "賣方",
      "買方",
      "仲介公司"
    ],
    "correct": 1,
    "explanation": "房屋買賣契稅原則上由取得房屋所有權的買方申報繳納。"
  },
  {
    "id": 28,
    "category": "契稅",
    "scenario": "房屋買賣契約成立後，原則上應於多久內申報契稅？",
    "options": [
      "10日內",
      "30日內",
      "60日內"
    ],
    "correct": 1,
    "explanation": "契稅應於契約成立之日起30日內申報。"
  },
  {
    "id": 29,
    "category": "契稅",
    "scenario": "法院拍賣取得房屋，契稅申報期限應如何計算？",
    "options": [
      "取得權利移轉證書日起30日內",
      "拍定當天起3日內",
      "等收到房屋稅單再申報"
    ],
    "correct": 0,
    "explanation": "標購或拍賣取得房屋，應依取得權利移轉證書等法定日期起算申報期限。"
  },
  {
    "id": 30,
    "category": "契稅",
    "scenario": "承買未辦保存登記的房屋，是否完全不用申報契稅？",
    "options": [
      "不用，沒有權狀就不課稅",
      "仍可能須依規定申報契稅",
      "只需向地政事務所申請"
    ],
    "correct": 1,
    "explanation": "未辦保存登記房屋發生移轉時，仍可能涉及契稅申報。"
  },
  {
    "id": 31,
    "category": "契稅",
    "scenario": "契稅已繳清，但買賣雙方在辦理建物登記前解除契約，可否申請退還契稅？",
    "options": [
      "符合規定可申請撤銷申報並退稅",
      "一律不能退",
      "只能退一半"
    ],
    "correct": 0,
    "explanation": "如尚未完成建物所有權移轉登記並符合規定，可申請撤銷契稅申報及退還已納稅款。"
  },
  {
    "id": 32,
    "category": "契稅",
    "scenario": "民眾只買土地，沒有買房屋，是否要繳契稅？",
    "options": [
      "要，土地移轉一律課契稅",
      "不用，契稅主要針對房屋移轉",
      "土地與房屋都不用繳任何稅"
    ],
    "correct": 1,
    "explanation": "契稅課徵標的是房屋移轉，土地移轉另涉及土地增值稅等稅目。"
  },
  {
    "id": 33,
    "category": "土地增值稅",
    "scenario": "民眾申請「一生一屋」，出售前5年內曾將房屋出租，是否符合優惠條件？",
    "options": [
      "符合，只要出售時自住",
      "不符合，出售前5年內不得出租或供營業使用",
      "符合，只要租期不到1年"
    ],
    "correct": 1,
    "explanation": "一生一屋優惠要求出售前5年內無出租或供營業使用。"
  },
  {
    "id": 33,
    "category": "土地增值稅",
    "scenario": "申請「一生一屋」優惠，土地所有權人或家人須在該地設籍並持有多久？",
    "options": [
      "連續滿1年",
      "連續滿6年",
      "不需設籍"
    ],
    "correct": 1,
    "explanation": "一生一屋優惠條件之一，是土地所有權人或其配偶、未成年子女於該地設籍且持有自用住宅連續滿6年。"
  },
  {
    "id": 35,
    "category": "土地增值稅",
    "scenario": "同一房地分兩次出售，第一次出售後仍保留部分房屋持分，可否於第一次就適用「一生一屋」？",
    "options": [
      "可以，每次都能適用",
      "須出售後已無剩餘持分房屋，才符合規定",
      "只看土地面積，不看房屋持分"
    ],
    "correct": 1,
    "explanation": "分次移轉者，須出售後已無剩餘持分房屋，始得適用一生一屋優惠。"
  },
  {
    "id": 36,
    "category": "土地增值稅",
    "scenario": "土地增值稅重購退稅，出售與重購的時間原則上應相隔多久內？",
    "options": [
      "1年內",
      "2年內",
      "5年內"
    ],
    "correct": 1,
    "explanation": "重購退稅原則上須在出售後2年內重購，或先購地後2年內出售。"
  },
  {
    "id": 36,
    "category": "土地增值稅",
    "scenario": "新購土地價格低於出售土地價格，重購退稅是否一定能退回全部原繳土地增值稅？",
    "options": [
      "一定全退",
      "可能僅能按規定退還部分稅額",
      "完全不能申請"
    ],
    "correct": 1,
    "explanation": "重購退稅金額須依出售及重購土地價格等規定計算，不一定全額退還。"
  },
  {
    "id": 37,
    "category": "土地增值稅",
    "scenario": "重購退稅後5年內將新購房地出租，可能有什麼結果？",
    "options": [
      "沒有影響",
      "可能被追繳原退還稅款",
      "只需補繳房屋稅"
    ],
    "correct": 1,
    "explanation": "重購土地5年內改作其他用途或再行移轉，可能被追繳原退還的土地增值稅。"
  },
  {
    "id": 38,
    "category": "土地增值稅",
    "scenario": "贈與土地是否完全不涉及土地增值稅？",
    "options": [
      "是，贈與只課贈與稅",
      "不是，土地所有權移轉原則上仍應申報土地增值稅",
      "只要親屬間贈與就免稅"
    ],
    "correct": 1,
    "explanation": "土地贈與屬所有權移轉，原則上仍應申報土地增值稅，另可能涉及贈與稅。"
  },
  {
    "id": 39,
    "category": "土地增值稅",
    "scenario": "因繼承取得土地，當次移轉是否課徵土地增值稅？",
    "options": [
      "依法免徵",
      "一律課徵40%",
      "依繼承人人數課稅"
    ],
    "correct": 0,
    "explanation": "因繼承而移轉土地，依法免徵土地增值稅。"
  },
  {
    "id": 40,
    "category": "土地增值稅",
    "scenario": "符合都市計畫公共設施保留地要件的土地移轉，有何土地增值稅優惠？",
    "options": [
      "得依規定免徵",
      "稅率固定10%",
      "只能分期繳納"
    ],
    "correct": 0,
    "explanation": "符合公共設施保留地法定要件者，移轉時得依規定免徵土地增值稅。"
  },
  {
    "id": 40,
    "category": "使用牌照稅",
    "scenario": "排氣量151cc的機車是否要繳使用牌照稅？",
    "options": [
      "不用，250cc以下都免稅",
      "需要，151cc以上即屬課稅範圍",
      "只有營業用機車才要繳"
    ],
    "correct": 1,
    "explanation": "機車汽缸總排氣量151cc（含）以上須課徵使用牌照稅。"
  },
  {
    "id": 41,
    "category": "使用牌照稅",
    "scenario": "車輛已報廢但未向監理機關完成報廢登記，牌照稅是否會自動停止？",
    "options": [
      "會，車子沒開就自動停止",
      "不一定，應完成監理異動手續",
      "只要把車牌拆下即可"
    ],
    "correct": 1,
    "explanation": "車輛停駛、報廢等應向監理機關辦妥異動，稅籍才會依規定停止或調整。"
  },
  {
    "id": 42,
    "category": "使用牌照稅",
    "scenario": "身心障礙者申請使用牌照稅免稅，是否所有名下車輛都能免稅？",
    "options": [
      "是，名下所有車輛皆免稅",
      "不是，須符合身障資格、車輛所有人及使用目的等法定條件",
      "只要排氣量低於2000cc即可"
    ],
    "correct": 1,
    "explanation": "身心障礙免稅須符合身分、車輛所有人、使用目的及限額等規定，並非所有車輛都自動免稅。"
  },
  {
    "id": 43,
    "category": "使用牌照稅",
    "scenario": "民眾想把多張使用牌照稅繳款書集中管理，可申請什麼服務？",
    "options": [
      "繳款書歸戶",
      "房屋稅籍合併",
      "土地分割"
    ],
    "correct": 0,
    "explanation": "可依規定申請使用牌照稅繳款書歸戶，方便集中接收及管理。"
  },
  {
    "id": 44,
    "category": "娛樂稅",
    "scenario": "夾娃娃機或功能類似的選物販賣機，原則上是否課徵娛樂稅？",
    "options": [
      "不課，因為不是表演",
      "應課徵娛樂稅",
      "只有投幣超過100元才課"
    ],
    "correct": 1,
    "explanation": "夾娃娃機及功能類似的選物販賣機，屬提供娛樂設施範圍，應課徵娛樂稅。"
  },
  {
    "id": 47,
    "category": "娛樂稅",
    "scenario": "娛樂稅法修正於115年5月20日公布，為何不是當天立即生效？",
    "options": [
      "依法規施行規定，自公布日起算至115年5月22日生效",
      "因為遇到假日",
      "由業者自行決定日期"
    ],
    "correct": 0,
    "explanation": "修正法規於115年5月20日公布，依規定自115年5月22日起生效。"
  },
  {
    "id": 49,
    "category": "娛樂稅",
    "scenario": "115年5月21日舉辦的演唱會，是否已適用演唱會免徵娛樂稅的新規定？",
    "options": [
      "已適用",
      "尚未適用，新制自115年5月22日起生效",
      "只有室外演唱會適用"
    ],
    "correct": 1,
    "explanation": "新制自115年5月22日起生效，5月21日舉辦者尚未適用。"
  },
  {
    "id": 49,
    "category": "娛樂稅",
    "scenario": "115年5月22日以後舉辦演唱會，承辦人應如何答覆娛樂稅問題？",
    "options": [
      "仍須代徵娛樂稅",
      "已非娛樂稅課徵項目，無須代徵或繳納",
      "僅外國歌手免徵"
    ],
    "correct": 1,
    "explanation": "115年5月22日起舉辦的演唱會已非娛樂稅課徵項目。"
  },
  {
    "id": 75,
    "category": "繳稅方式、電子繳款書及繳納證明",
    "scenario": "房屋稅稅單逾期不久，民眾想用信用卡線上繳納，是否可能辦理？",
    "options": [
      "完全不能線上繳",
      "符合規定且在期限屆滿翌日起30日內，可透過網路繳稅服務網繳納",
      "只能到法院繳納"
    ],
    "correct": 1,
    "explanation": "符合規定的逾期稅單，在繳納期限屆滿翌日起30日內仍可透過網路繳稅服務網繳納。"
  },
  {
    "id": 76,
    "category": "繳稅方式、電子繳款書及繳納證明",
    "scenario": "民眾沒收到稅單，可否到便利商店Kiosk補印後繳稅？",
    "options": [
      "可以，符合規定的地方稅可補印，3萬元以下可於超商繳納",
      "不可以，超商只能繳水電費",
      "只能補印但不能繳納"
    ],
    "correct": 0,
    "explanation": "可於四大超商Kiosk補印符合規定的地方稅繳款書，稅額3萬元以下可於超商繳納。"
  },
  {
    "id": 77,
    "category": "繳稅方式、電子繳款書及繳納證明",
    "scenario": "民眾想用健保卡線上查繳地方稅，應使用哪類服務？",
    "options": [
      "地方稅網路申報作業網站的線上查繳稅服務",
      "戶政事務所人口查詢",
      "監理服務網違規查詢"
    ],
    "correct": 0,
    "explanation": "可至地方稅網路申報作業網站，以已註冊健保卡或憑證登入進行線上查繳稅。"
  },
  {
    "id": 82,
    "category": "繳稅方式、電子繳款書及繳納證明",
    "scenario": "民眾在超商繳完地方稅後，需要正式繳納證明，應如何辦理？",
    "options": [
      "保留收據即可，永遠不能申請證明",
      "可向稅捐處所屬分處申請繳納證明",
      "向超商店員申請加蓋稅捐章"
    ],
    "correct": 1,
    "explanation": "如需正式繳納證明，可向稅捐稽徵機關申請。"
  },
  {
    "id": 87,
    "category": "延分期相關",
    "scenario": "民眾因經濟困難無法一次繳清補徵稅款，單筆或合計達多少金額可能符合申請條件之一？",
    "options": [
      "1萬元以上",
      "10萬元以上",
      "100萬元以上"
    ],
    "correct": 1,
    "explanation": "依題庫內容，補徵應繳稅款單筆或合計達10萬元以上，是申請條件之一。"
  },
  {
    "id": 88,
    "category": "延分期相關",
    "scenario": "申請分期繳納地方稅，是否一律免加計利息？",
    "options": [
      "是，所有分期都免息",
      "不是，原則須加計利息，符合特定經濟困難情形者才可免息",
      "只要分2期就免息"
    ],
    "correct": 1,
    "explanation": "分期繳稅原則上須加計利息，符合失業、中低收入戶等特定經濟困難情形者可申請免息。"
  },
  {
    "id": 98,
    "category": "稅務管理及其他",
    "scenario": "欠稅案件已移送行政執行，民眾因重大財產損失無法一次清償，可向哪裡申請分期？",
    "options": [
      "戶政事務所",
      "行政執行分署，並徵得移送機關同意",
      "地政事務所"
    ],
    "correct": 1,
    "explanation": "欠稅移送後，可向行政執行分署申請分期，並須徵得移送機關同意。"
  },
  {
    "id": 99,
    "category": "稅務管理及其他",
    "scenario": "行政救濟中的罰鍰，在救濟程序終結前是否會立即強制執行？",
    "options": [
      "原則上免依規定強制執行",
      "一律立即扣薪",
      "只要超過1萬元就執行"
    ],
    "correct": 0,
    "explanation": "題庫指出，罰鍰在行政救濟程序終結前，免依稅捐稽徵法第39條規定強制執行。"
  },
  {
    "id": 105,
    "category": "稅務管理及其他",
    "scenario": "民眾要查詢被繼承人的金融遺產，可否線上申請？",
    "options": [
      "可以，可透過相關稅務網站並以憑證或身分驗證方式申請",
      "不可以，只能由銀行申請",
      "只能由律師臨櫃申請"
    ],
    "correct": 0,
    "explanation": "金融遺產查詢可臨櫃或透過相關稅務網站線上申請，並須完成身分驗證。"
  },
  {
    "id": 106,
    "category": "稅務管理及其他",
    "scenario": "申請金融遺產查詢後，可否查詢辦理進度？",
    "options": [
      "可以，可至電子申報繳稅服務網站查詢",
      "不可以，只能等待電話通知",
      "只能向法院查詢"
    ],
    "correct": 0,
    "explanation": "申請人可至財政部電子申報繳稅服務網站查詢金融遺產案件辦理進度。"
  },
  {
    "id": 110,
    "category": "稅務管理及其他",
    "scenario": "委託他人申請地方稅無違章欠稅證明，除申請人資料外還要準備什麼？",
    "options": [
      "代理人的身分證明及委任或授權文件",
      "只要代理人口頭說明",
      "只要帶印章即可"
    ],
    "correct": 0,
    "explanation": "委託辦理應檢附委任書或授權書及代理人身分證明文件。"
  },
  {
    "id": 112,
    "category": "稅務管理及其他",
    "scenario": "民眾想線上查詢臺北市房屋稅或地價稅稅額，可使用哪個平台？",
    "options": [
      "房地稅額e化查詢平台",
      "監理服務網",
      "全國商工行政服務入口網"
    ],
    "correct": 0,
    "explanation": "可使用本處房地稅額e化查詢平台查詢房屋稅、地價稅及進行相關試算。"
  }
];

let round=[],index=0,score=0,lives=3,wrong=[];
let officialQuestionBank=[];

async function loadOfficialQuestionBank(){
  try{
    const response=await fetch('questionBank.json',{cache:'no-store'});
    if(!response.ok)throw new Error('無法讀取 questionBank.json');
    officialQuestionBank=await response.json();
    if(!Array.isArray(officialQuestionBank))officialQuestionBank=[];
  }catch(error){
    console.warn('正式題庫讀取失敗，改用測驗題分類。',error);
    officialQuestionBank=[];
  }
}

const $=s=>document.querySelector(s);
function shuffle(a){
  const result=[...a];
  for(let i=result.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}

async function init(){
  const start=$('#startRpgBtn');
  if(!start)return;

  await loadOfficialQuestionBank();

  // 只顯示實際已有測驗題的分類，避免選到空分類
  const categories=[...new Set(QUESTIONS.map(item=>item.category))];
  let options='<option value="全部">全部（63題）</option>';
  options+=categories.map(category=>{
    const count=QUESTIONS.filter(item=>item.category===category).length;
    return `<option value="${escapeHtml(category)}">${escapeHtml(category)}（${count}題）</option>`;
  }).join('');

  $('#rpgCategory').innerHTML=options;
  start.onclick=startGame;
  $('#nextRpgBtn').onclick=next;
}

function startGame(){
  const category=$('#rpgCategory').value;
  const pool=category==='全部'
    ? QUESTIONS
    : QUESTIONS.filter(item=>item.category===category);

  if(pool.length===0){
    alert(`「${category}」目前尚未建立選擇題。`);
    return;
  }

  round=shuffle(pool).slice(0,Math.min(5,pool.length));
  index=0;
  score=0;
  lives=3;
  wrong=[];

  $('#rpgStart').hidden=true;
  $('#rpgResult').hidden=true;
  $('#rpgGame').hidden=false;
  update();
  render();
}

function update(){
  $('#rpgLives').textContent=lives;
  $('#rpgScore').textContent=score;
  $('#rpgProgress').textContent=Math.min(index+1,round.length||0);
}

function render(){
  const q=round[index];
  update();
  $('#rpgQuestion').textContent=q.scenario;
  $('#rpgOptions').innerHTML=q.options.map((o,i)=>`<button class="rpg-option" data-i="${i}"><span class="rpg-option-letter">${String.fromCharCode(65+i)}</span><span>${escapeHtml(o)}</span></button>`).join('');
  document.querySelectorAll('.rpg-option').forEach(b=>b.onclick=()=>answer(Number(b.dataset.i)));
  $('#rpgFeedback').hidden=true;
  $('#nextRpgBtn').hidden=true;
}

function answer(choice){
  const q=round[index];
  const ok=choice===q.correct;

  document.querySelectorAll('.rpg-option').forEach((b,i)=>{
    b.disabled=true;
    if(i===q.correct)b.classList.add('correct');
    if(i===choice&&!ok)b.classList.add('wrong');
  });

  if(ok)score+=20;
  else{
    lives=Math.max(0,lives-1);
    wrong.push(q);
  }

  update();
  const fb=$('#rpgFeedback');
  fb.hidden=false;
  fb.className='rpg-feedback '+(ok?'good':'bad');
  fb.innerHTML=`<strong>${ok?'✅ 答對了！':'❌ 這個答法還不夠正確'}</strong><span>${escapeHtml(q.explanation)}</span>`;

  const nextBtn=$('#nextRpgBtn');
  nextBtn.hidden=false;
  nextBtn.textContent=(index===round.length-1||lives===0)?'查看本次成績 →':'下一通電話 →';
}

function next(){
  if(index===round.length-1||lives===0)return finish();
  index++;
  render();
}

function finish(){
  $('#rpgGame').hidden=true;
  const result=$('#rpgResult');
  result.hidden=false;

  const medal=score>=80?'🏆':score>=60?'🥈':'📘';
  const review=wrong.length
    ? `<div class="rpg-review"><h4>建議再複習</h4>${wrong.map(q=>`<div class="rpg-review-item"><span><b>${escapeHtml(q.category)}</b>｜${escapeHtml(q.scenario)}</span><button class="small-btn" data-review="${q.id}">查看原題</button></div>`).join('')}</div>`
    : '<p>全部答對，今天的電話服務表現非常穩定！</p>';

  result.innerHTML=`<div class="result-medal">${medal}</div><h3>值勤任務完成</h3><div class="rpg-result-score">${score} 分</div><p>答對 ${Math.round(score/20)} 題，共 ${round.length} 題</p>${review}<div class="rpg-result-actions"><button class="primary-btn" id="rpgAgain">再挑戰一次</button><button class="small-btn" id="rpgBackHome">回到首頁</button></div>`;

  $('#rpgAgain').onclick=()=>{
    result.hidden=true;
    $('#rpgStart').hidden=false;
    $('#rpgProgress').textContent='0';
  };

  $('#rpgBackHome').onclick=()=>{
    if(typeof go==='function')go('home');
  };

  document.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>{
    if(typeof openDetail==='function')openDetail(Number(b.dataset.review));
  });
}

function escapeHtml(s){
  return String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
else init();
})();
