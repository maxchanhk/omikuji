const fortunes = [
  {
    id: 1,
    level: "上吉",
    title: "姜太公渭水",
    poem:
`時來風送好消息
潛龍出水遇明時
一朝得志展宏願
萬里前程在此期`,
    explain: {
      overall: "大吉之象，時運已至，諸事順遂。",
      career: "得貴人提攜，宜積極進取。",
      love: "良緣將現，感情順利。",
      wealth: "正偏財皆有收穫。"
    }
  },
  {
    id: 2,
    level: "上吉",
    title: "張良遇黃石公",
    poem:
`多年忍耐志未移
暗中指引有高人
不須急進求成果
福祿終將到眼前`,
    explain: {
      overall: "守得雲開見月明。",
      career: "宜累積實力，後勢看好。",
      love: "慢慢發展，自有結果。",
      wealth: "財運穩中有升。"
    }
  },
  {
    id: 3,
    level: "中吉",
    title: "魯班造木鳶",
    poem:
`巧手匠心志不凡
勤勞自有後人談
若能守正行其道
名利雙收在眼前`,
    explain: {
      overall: "努力可得回報。",
      career: "專業技能可發揮。",
      love: "感情穩定成長。",
      wealth: "靠實力得財。"
    }
  },
  {
    id: 4,
    level: "中平",
    title: "文王訪賢",
    poem:
`行路迢迢未見光
但憑誠意守初心
若問前程何所向
耐心之後見分明`,
    explain: {
      overall: "時機未成熟，宜靜待。",
      career: "暫未顯現成果。",
      love: "需多觀察。",
      wealth: "宜守不宜進。"
    }
  },
  {
    id: 5,
    level: "中吉",
    title: "韓信受辱",
    poem:
`低頭忍耐非為輸
一朝得志眾人服
今日受屈終成福
來日聲名自遠揚`,
    explain: {
      overall: "先難後易。",
      career: "忍耐將換來成就。",
      love: "包容為要。",
      wealth: "後運較佳。"
    }
  },
  {
    id: 6,
    level: "中平",
    title: "孔明借東風",
    poem:
`萬事俱備欠東風
天時未到莫強攻
若能靜候時機轉
一舉成功在此中`,
    explain: {
      overall: "差臨門一腳。",
      career: "等待關鍵時機。",
      love: "暫緩推進。",
      wealth: "不宜急進。"
    }
  },
  {
    id: 7,
    level: "中吉",
    title: "董永遇仙",
    poem:
`平生行善不求名
天賜良緣在此生
一念誠心感天地
自然福報降人間`,
    explain: {
      overall: "善有善報。",
      career: "得人暗助。",
      love: "良緣天定。",
      wealth: "財來自然。"
    }
  },
  {
    id: 8,
    level: "中平",
    title: "樂廣杯弓蛇影",
    poem:
`疑心暗起自生憂
本是無端妄自愁
若能釋懷看分明
心安理得福長留`,
    explain: {
      overall: "多慮成憂。",
      career: "勿過度猜疑。",
      love: "坦誠溝通。",
      wealth: "守財即可。"
    }
  },
  {
    id: 9,
    level: "中吉",
    title: "岳飛遇知音",
    poem:
`丹心一片向明君
忠義終將得世聞
莫問功名何日顯
青史留名在後人`,
    explain: {
      overall: "正道而行。",
      career: "付出終被看見。",
      love: "重視承諾。",
      wealth: "名勝於利。"
    }
  },
  {
    id: 10,
    level: "下吉",
    title: "塞翁失馬",
    poem:
`得失之間未可知
禍福相倚轉為奇
眼前不必多憂慮
日後或成好轉機`,
    explain: {
      overall: "吉凶未定。",
      career: "短暫挫折。",
      love: "起伏不定。",
      wealth: "勿貪偏財。"
    }
  },
  {
    id: 11,
    level: "中吉",
    title: "周文王拘羑里",
    poem:
`困厄之中志不移
暗藏生機在此時
若能堅守持正道
終見光明出險夷`,
    explain: {
      overall: "困中有轉機。",
      career: "暫時受限。",
      love: "需耐心。",
      wealth: "守成為上。"
    }
  },
  {
    id: 12,
    level: "中吉",
    title: "月出雲開",
    poem:
`浮雲遮月未能明
片刻風來自散清
若問前途何日好
耐心守候見光明`,
    explain: {
      overall: "漸入佳境。",
      career: "阻礙將解。",
      love: "誤會可解。",
      wealth: "漸有起色。"
    }
  },
  {
    id: 13,
    level: "中平",
    title: "田單復國",
    poem:
`局勢紛紜未可量
臨危應變智為良
若能隨機行巧策
轉危為安在此章`,
    explain: {
      overall: "變中求穩。",
      career: "需靈活應對。",
      love: "避免固執。",
      wealth: "小心規劃。"
    }
  },
  {
    id: 14,
    level: "下吉",
    title: "廉頗負荊",
    poem:
`剛強易折理難全
退讓三分福自添
若問前途何所向
低頭之後路更寬`,
    explain: {
      overall: "宜退不宜爭。",
      career: "放下身段。",
      love: "需多體諒。",
      wealth: "守財為主。"
    }
  },
  {
    id: 15,
    level: "中吉",
    title: "蘇武牧羊",
    poem:
`寒風久立志猶堅
歲月磨人不改賢
一旦歸來天地闊
從前辛苦化雲煙`,
    explain: {
      overall: "苦盡甘來。",
      career: "長期努力將有回報。",
      love: "感情需等待。",
      wealth: "後運轉佳。"
    }
  },
  {
    id: 16,
    level: "中平",
    title: "夜行遇雨",
    poem:
`夜路行人步履艱
風雨交加意不安
若能暫歇尋明日
天朗之時路自寬`,
    explain: {
      overall: "暫時不順。",
      career: "宜暫停。",
      love: "情緒影響判斷。",
      wealth: "不宜冒險。"
    }
  },
  {
    id: 17,
    level: "中吉",
    title: "伯樂相馬",
    poem:
`良駒未遇暫沉淪
一見伯樂價自增
莫嘆眼前無人識
終有知音賞此身`,
    explain: {
      overall: "機會將至。",
      career: "終遇賞識。",
      love: "有人欣賞你。",
      wealth: "價值提升。"
    }
  },
  {
    id: 18,
    level: "中平",
    title: "望梅止渴",
    poem:
`空想難解眼前愁
實事方能化作舟
若問前途何所據
腳踏實地莫空求`,
    explain: {
      overall: "不可空想。",
      career: "務實為要。",
      love: "少幻想，多行動。",
      wealth: "實幹得財。"
    }
  },
  {
    id: 19,
    level: "中吉",
    title: "燕昭築臺",
    poem:
`廣納賢才志在高
基業經營自不搖
若能虛心行正道
他年成就必驚濤`,
    explain: {
      overall: "遠景可期。",
      career: "適合建立基礎。",
      love: "重視長遠。",
      wealth: "慢慢累積。"
    }
  },
  {
    id: 20,
    level: "中平",
    title: "守株待兔",
    poem:
`舊法難求新結果
時移勢轉要變通
若仍固守從前路
恐怕空等一場空`,
    explain: {
      overall: "需改變思路。",
      career: "不可因循守舊。",
      love: "需主動。",
      wealth: "尋找新機會。"
    }
  },
  {
    id: 21,
    level: "中吉",
    title: "管仲相齊",
    poem:
`一身才略暫沉埋
時未逢兮志未灰
若得明君來賞識
青雲直上展雄才`,
    explain: {
      overall: "時機將至。",
      career: "有被重用之象。",
      love: "感情漸入佳境。",
      wealth: "財運轉旺。"
    }
  },
  {
    id: 22,
    level: "中平",
    title: "周瑜打黃蓋",
    poem:
`表裡不一事難明
甘苦其中自分清
若問前途成與敗
還須忍耐待時行`,
    explain: {
      overall: "表面順利，內藏辛苦。",
      career: "需承擔壓力。",
      love: "易有誤會。",
      wealth: "得失參半。"
    }
  },
  {
    id: 23,
    level: "下吉",
    title: "掩耳盜鈴",
    poem:
`自欺欺人事難成
掩耳偷鈴反害身
若不回頭尋正道
前途恐怕更艱辛`,
    explain: {
      overall: "不利，宜自省。",
      career: "不可投機取巧。",
      love: "誠實為上。",
      wealth: "避免風險。"
    }
  },
  {
    id: 24,
    level: "中吉",
    title: "劉琨聞雞起舞",
    poem:
`黎明聞鼓志先醒
奮發圖強在此行
若肯勤修真本事
前程自可步高程`,
    explain: {
      overall: "努力得吉。",
      career: "勤奮有回報。",
      love: "共同成長。",
      wealth: "靠努力得財。"
    }
  },
  {
    id: 25,
    level: "中平",
    title: "畫龍點睛",
    poem:
`萬事俱全欠一筆
功虧一簣在須臾
若能細察補其缺
成功就在眼前期`,
    explain: {
      overall: "臨門一腳。",
      career: "注意細節。",
      love: "關鍵在溝通。",
      wealth: "小心疏漏。"
    }
  },
  {
    id: 26,
    level: "中吉",
    title: "范仲淹斷齏",
    poem:
`清貧歲月志猶堅
苦讀寒窗不怨天
一旦功成名立後
從前辛勞化雲煙`,
    explain: {
      overall: "苦盡甘來。",
      career: "努力終得回報。",
      love: "感情需耐心。",
      wealth: "後運轉佳。"
    }
  },
  {
    id: 27,
    level: "中平",
    title: "李廣難封",
    poem:
`勞苦功高未見酬
時運不濟莫強求
若能放下心中怨
平安自在勝封侯`,
    explain: {
      overall: "付出未即見回報。",
      career: "不宜過度比較。",
      love: "勿強求結果。",
      wealth: "平穩即可。"
    }
  },
  {
    id: 28,
    level: "中吉",
    title: "張騫通西域",
    poem:
`遠行萬里志難移
歷盡艱辛始見奇
若問前途何所向
開疆闢土在今時`,
    explain: {
      overall: "開創之象。",
      career: "適合拓展新方向。",
      love: "遠距或異地緣分。",
      wealth: "新財源出現。"
    }
  },
  {
    id: 29,
    level: "下吉",
    title: "覆水難收",
    poem:
`一時失足恨難追
往事如流水不回
若欲重來須另計
莫在舊處再徘徊`,
    explain: {
      overall: "需接受現實。",
      career: "不宜回頭。",
      love: "舊情難續。",
      wealth: "避免追回損失。"
    }
  },
  {
    id: 30,
    level: "中吉",
    title: "蘇秦刺股",
    poem:
`一念奮發改前程
痛定思痛志更堅
若能立志勤修業
功名終可在眼前`,
    explain: {
      overall: "振作則吉。",
      career: "重新努力有成。",
      love: "改善自我。",
      wealth: "勤奮得財。"
    }
  },
  {
    id: 31,
    level: "中平",
    title: "夜讀兵書",
    poem:
`燈下苦讀未成名
靜待時機暗自耕
若問前途何日顯
厚積之後自然明`,
    explain: {
      overall: "仍在累積期。",
      career: "不宜急進。",
      love: "慢熱型關係。",
      wealth: "暫無突破。"
    }
  },
  {
    id: 32,
    level: "中吉",
    title: "蘇秦六國封相",
    poem:
`困龍得水好運交
不由喜氣上眉梢
一切謀望皆如意
向後時運漸漸高`,
    explain: {
      overall: "轉運之象。",
      career: "地位提升。",
      love: "關係改善。",
      wealth: "財運漸旺。"
    }
  },
  {
    id: 33,
    level: "中平",
    title: "望洋興嘆",
    poem:
`志高力薄暫難伸
眼見機會未能親
若能充實自身力
來日方可展其能`,
    explain: {
      overall: "能力尚待提升。",
      career: "宜進修。",
      love: "勿自卑。",
      wealth: "實力未足。"
    }
  },
  {
    id: 34,
    level: "中吉",
    title: "孟母三遷",
    poem:
`環境更移志亦新
良機轉換在於人
若能擇善而居處
前途自此漸光明`,
    explain: {
      overall: "變動帶來好轉。",
      career: "適合轉換環境。",
      love: "關係改善。",
      wealth: "新機會出現。"
    }
  },
  {
    id: 35,
    level: "下吉",
    title: "刻舟求劍",
    poem:
`世事多變理難同
固守成法反成空
若仍不肯隨時變
恐怕前途一場空`,
    explain: {
      overall: "不利守舊。",
      career: "需調整策略。",
      love: "觀念需更新。",
      wealth: "避免死守。"
    }
  },
  {
    id: 36,
    level: "中平",
    title: "借東牆補西牆",
    poem:
`拆東補西暫解危
終非長久之良規
若不從根求正解
反覆周旋更心疲`,
    explain: {
      overall: "治標不治本。",
      career: "需長遠規劃。",
      love: "問題未解。",
      wealth: "財務需整頓。"
    }
  },
  {
    id: 37,
    level: "中吉",
    title: "蕭何月下追韓信",
    poem:
`良才一去幾難尋
慧眼方知價值深
若能及早回頭看
重用之時勝萬金`,
    explain: {
      overall: "識人得吉。",
      career: "重視人才。",
      love: "珍惜眼前人。",
      wealth: "重點投資。"
    }
  },
  {
    id: 38,
    level: "中平",
    title: "臨淵羨魚",
    poem:
`空羨他人獲利多
自身未動奈如何
若能親自下場試
收穫自然在其中`,
    explain: {
      overall: "行動勝於空想。",
      career: "需實際投入。",
      love: "主動為要。",
      wealth: "付出才有得。"
    }
  },
  {
    id: 39,
    level: "中吉",
    title: "孔子周遊列國",
    poem:
`奔波勞碌志未休
大道難行亦不愁
若能守正行其道
後世流芳萬古留`,
    explain: {
      overall: "堅持正道。",
      career: "成就未即現。",
      love: "重精神契合。",
      wealth: "名重於利。"
    }
  },
  {
    id: 40,
    level: "中平",
    title: "磨杵成針",
    poem:
`鐵杵經年可化針
功夫全在日常深
若能持續勤修煉
小事終成大事情`,
    explain: {
      overall: "貴在持續。",
      career: "長期投入見效。",
      love: "慢慢培養。",
      wealth: "積少成多。"
    }
  },
  {
    id: 41,
    level: "中吉",
    title: "趙雲單騎救阿斗",
    poem:
`孤身勇往志不移
險境之中顯忠義
若能穩守智與勇
平安康泰在眼前`,
    explain: {
      overall: "危中有機。",
      career: "展現勇氣與能力。",
      love: "忠誠是關鍵。",
      wealth: "財運穩定。"
    }
  },
  {
    id: 42,
    level: "中平",
    title: "曹操煮酒論英雄",
    poem:
`英雄相爭各有志
局勢難測勿輕言
若能沉心觀世事
方可明辨真豪傑`,
    explain: {
      overall: "宜觀察形勢。",
      career: "小心權衡決策。",
      love: "勿輕信新認識。",
      wealth: "避免衝動投資。"
    }
  },
  {
    id: 43,
    level: "中吉",
    title: "伍子胥過昭關",
    poem:
`千里奔波志不改
遇險困難心自開
若能耐心行正道
終得名聲顯四海`,
    explain: {
      overall: "堅持得名。",
      career: "努力最終受賞識。",
      love: "真心可得回應。",
      wealth: "逐步累積財運。"
    }
  },
  {
    id: 44,
    level: "中平",
    title: "東施效顰",
    poem:
`盲目模仿徒勞功
宜從自身尋良方
若能發揮真本性
好運自會隨之來`,
    explain: {
      overall: "勿盲目模仿。",
      career: "發揮優勢最重要。",
      love: "保持真我。",
      wealth: "量力而行。"
    }
  },
  {
    id: 45,
    level: "下吉",
    title: "夜半無燈",
    poem:
`黑暗中行路難
方向迷失心更煩
若能靜心尋光明
前途方可再安然`,
    explain: {
      overall: "暫時困境。",
      career: "需等待機會。",
      love: "小心誤會。",
      wealth: "財務不宜冒險。"
    }
  },
  {
    id: 46,
    level: "中吉",
    title: "項羽破釜沉舟",
    poem:
`破釜沉舟勇氣揚
決心已定無回望
若能專心圖大事
勝利最終在眼前`,
    explain: {
      overall: "決心之吉。",
      career: "果斷行動有收穫。",
      love: "關係中需勇氣。",
      wealth: "大膽投資可行。"
    }
  },
  {
    id: 47,
    level: "中平",
    title: "曹沖稱象",
    poem:
`智慧巧思解難題
方法正確事自宜
若能靜觀明智行
事事順遂不費力`,
    explain: {
      overall: "智謀之吉。",
      career: "用心思考能解決問題。",
      love: "理性溝通。",
      wealth: "善用計劃。"
    }
  },
  {
    id: 48,
    level: "中吉",
    title: "荊軻刺秦",
    poem:
`孤身赴險志氣高
雖有風險亦壯懷
若能謹慎衡利弊
行動得當亦無憂`,
    explain: {
      overall: "小心行事。",
      career: "風險需評估。",
      love: "行動需謹慎。",
      wealth: "不宜冒險投資。"
    }
  },
  {
    id: 49,
    level: "中平",
    title: "孔明七擒孟獲",
    poem:
`柔中帶剛智謀全
勝利不在於一戰
若能耐心循序進
終能化險為夷安`,
    explain: {
      overall: "耐心為上。",
      career: "循序漸進最安全。",
      love: "關係需要磨合。",
      wealth: "慢慢積累。"
    }
  },
  {
    id: 50,
    level: "中吉",
    title: "文天祥就義",
    poem:
`忠義兩全心不悔
風雨飄搖志自傾
若能堅守正道行
後世敬仰福自臨`,
    explain: {
      overall: "忠誠之吉。",
      career: "正道行事受敬重。",
      love: "堅守原則。",
      wealth: "平穩為佳。"
    }
  },
  {
    id: 51,
    level: "中平",
    title: "韓信背水一戰",
    poem:
`退無可退戰方行
決斷之時顯英勇
若能智勇兼備施
勝利才可到眼前`,
    explain: {
      overall: "須謀略與勇氣並行。",
      career: "戰略決策須謹慎。",
      love: "須理智面對。",
      wealth: "冒險需小心。"
    }
  },
  {
    id: 52,
    level: "中吉",
    title: "黃巾起義",
    poem:
`民心所向勢不可
動亂之中出新機
若能順應正時運
變局之中見榮光`,
    explain: {
      overall: "動中有吉。",
      career: "把握時機可受益。",
      love: "順其自然。",
      wealth: "尋找機會財運佳。"
    }
  },
  {
    id: 53,
    level: "下吉",
    title: "破鏡重圓難",
    poem:
`碎裂之物難復原
昔日恩怨不可攀
若問未來何以成
需忍耐自安然`,
    explain: {
      overall: "不利重續。",
      career: "不可回頭重作。",
      love: "分離難復合。",
      wealth: "避免追舊損失。"
    }
  },
  {
    id: 54,
    level: "中平",
    title: "李白遊江",
    poem:
`自由漂泊心自寬
浮雲之志各自安
若能隨遇而行事
生活自然得歡顏`,
    explain: {
      overall: "平穩之象。",
      career: "宜隨緣而行。",
      love: "心態放寬。",
      wealth: "守財為上。"
    }
  },
  {
    id: 55,
    level: "中吉",
    title: "岳飛精忠報國",
    poem:
`丹心赤膽志不渝
忠義之心耀千古
若能專心守正道
名利終可得眼前`,
    explain: {
      overall: "忠誠得吉。",
      career: "專心事業最有成。",
      love: "守心則吉。",
      wealth: "守正得財。"
    }
  },
  {
    id: 56,
    level: "中平",
    title: "晉文公三年不覓",
    poem:
`忍耐時日未即成
時運未到勿焦急
若能耐心持正心
成功方來眼前明`,
    explain: {
      overall: "須耐心等待。",
      career: "不可急功近利。",
      love: "慢慢發展。",
      wealth: "財運尚平。"
    }
  },
  {
    id: 57,
    level: "中吉",
    title: "陳涉世家起義",
    poem:
`微末起身志不凡
波濤暗中有良機
若能行動持正念
終可成就在眼前`,
    explain: {
      overall: "起事有望。",
      career: "抓住機會可成。",
      love: "需耐心。",
      wealth: "逐步累積。"
    }
  },
  {
    id: 58,
    level: "中平",
    title: "晏子使楚",
    poem:
`言辭巧妙顯智慧
處事需謹守正道
若能誠實而行事
名聲自然漸顯高`,
    explain: {
      overall: "守正有利。",
      career: "言行一致得人尊。",
      love: "坦誠可增情分。",
      wealth: "小心為佳。"
    }
  },
  {
    id: 59,
    level: "中吉",
    title: "劉邦入關",
    poem:
`順勢而為機遇生
謀略巧施見功名
若能穩守大局觀
成功自然在眼前`,
    explain: {
      overall: "抓住機會。",
      career: "全盤思考得佳績。",
      love: "情感穩定。",
      wealth: "守中有利。"
    }
  },
  {
    id: 60,
    level: "中平",
    title: "孔明草船借箭",
    poem:
`巧謀運用渡危機
天時地利助成功
若能細察機會時
勝利就在眼前期`,
    explain: {
      overall: "謀略之吉。",
      career: "善用資源達成目標。",
      love: "巧思可化解爭端。",
      wealth: "善用資源得財。"
    }
  },
  {
    id: 61,
    level: "中吉",
    title: "韓信破楚",
    poem:
`智勇兼施戰無敵
險境之中顯英姿
若能謀略與行動
勝利最終在眼前`,
    explain: {
      overall: "行動與智謀並重。",
      career: "善用策略會成功。",
      love: "合作需智慧。",
      wealth: "投資須謹慎。"
    }
  },
  {
    id: 62,
    level: "中平",
    title: "蘇武牧羊",
    poem:
`忠心守節志不移
寒苦孤身亦自持
若能堅守正道心
困境亦能自安然`,
    explain: {
      overall: "守正自安。",
      career: "保持耐心。",
      love: "守信可長久。",
      wealth: "財務平穩。"
    }
  },
  {
    id: 63,
    level: "中吉",
    title: "黃帝戰蚩尤",
    poem:
`兵強勇猛智略高
戰場之中顯英雄
若能穩守正道行
勝利自會隨之至`,
    explain: {
      overall: "正道致勝。",
      career: "行事謹慎有回報。",
      love: "誠信是關鍵。",
      wealth: "守正得利。"
    }
  },
  {
    id: 64,
    level: "中平",
    title: "文王拘周",
    poem:
`遭遇困厄志未灰
沉潛之中積德才
若能忍耐而修身
時機成熟必見來`,
    explain: {
      overall: "忍耐等待。",
      career: "暫時低調最合適。",
      love: "耐心為佳。",
      wealth: "守財為上。"
    }
  },
  {
    id: 65,
    level: "下吉",
    title: "杞人憂天",
    poem:
`多疑多慮徒自煩
天災未至心先寒
若能安心修德行
風雨過後見光明`,
    explain: {
      overall: "勿過度憂慮。",
      career: "勿自亂陣腳。",
      love: "放寬心態。",
      wealth: "莫擔心未來。"
    }
  },
  {
    id: 66,
    level: "中吉",
    title: "岳飛精忠",
    poem:
`忠心耿耿志不渝
風雨之中顯英姿
若能堅守正道行
名利終可到眼前`,
    explain: {
      overall: "忠誠之吉。",
      career: "專心事業受肯定。",
      love: "守心則吉。",
      wealth: "財運平穩。"
    }
  },
  {
    id: 67,
    level: "中平",
    title: "張良借羽扇",
    poem:
`智者巧計解困難
順勢而為可成事
若能謹慎行正道
成果終會隨之至`,
    explain: {
      overall: "智謀之象。",
      career: "策略得宜有回報。",
      love: "謹慎行事。",
      wealth: "守財有利。"
    }
  },
  {
    id: 68,
    level: "中吉",
    title: "劉備三顧茅廬",
    poem:
`誠心邀才顯真意
耐心等待見知己
若能合作志同道
成功自會到眼前`,
    explain: {
      overall: "誠意得吉。",
      career: "誠心可獲人才相助。",
      love: "誠心對待感情。",
      wealth: "守正可得。"
    }
  },
  {
    id: 69,
    level: "中平",
    title: "曹操挾天子以令諸侯",
    poem:
`權謀之道難自測
形勢多變須謹行
若能沉著觀局勢
順利可免損傷生`,
    explain: {
      overall: "需謹慎處事。",
      career: "策略需觀察。",
      love: "勿輕信他人。",
      wealth: "財務小心。"
    }
  },
  {
    id: 70,
    level: "中吉",
    title: "諸葛亮草船借箭",
    poem:
`巧謀運用渡危機
天時地利助成功
若能細察機會時
勝利就在眼前期`,
    explain: {
      overall: "智慧行事之吉。",
      career: "善用資源達成目標。",
      love: "巧思化解爭端。",
      wealth: "資源得財。"
    }
  },
  {
    id: 71,
    level: "中平",
    title: "周瑜赤壁",
    poem:
`風雲變幻局難測
謀略智勇兩俱全
若能從容觀時勢
勝利自可到眼前`,
    explain: {
      overall: "需觀時機。",
      career: "策略與智慧並行。",
      love: "理智處理感情。",
      wealth: "守財為上。"
    }
  },
  {
    id: 72,
    level: "中吉",
    title: "張飛長坂橋",
    poem:
`勇猛無比戰場上
單騎衝鋒顯英姿
若能穩守正道行
平安康泰在眼前`,
    explain: {
      overall: "勇氣得吉。",
      career: "展現能力可成功。",
      love: "忠誠與勇氣並重。",
      wealth: "守財平穩。"
    }
  },
  {
    id: 73,
    level: "中平",
    title: "劉備入川",
    poem:
`順勢而行事可成
時機成熟見功名
若能沉穩持正念
成功自會隨之至`,
    explain: {
      overall: "時機尚未到。",
      career: "耐心等待機會。",
      love: "慢熱為佳。",
      wealth: "守財平穩。"
    }
  },
  {
    id: 74,
    level: "中吉",
    title: "孔明借東風",
    poem:
`時機風向助良謀
巧計運用皆順利
若能乘勢而行事
勝利自然在眼前`,
    explain: {
      overall: "順勢得吉。",
      career: "利用有利條件成功。",
      love: "機會適時出現。",
      wealth: "守正得財。"
    }
  },
  {
    id: 75,
    level: "中平",
    title: "孫子兵法",
    poem:
`知己知彼百戰勝
策略謀略不可少
若能詳察形勢時
行事方可少失誤`,
    explain: {
      overall: "策略重要。",
      career: "謹慎規劃最安全。",
      love: "理性處事。",
      wealth: "小心投資。"
    }
  },
  {
    id: 76,
    level: "中吉",
    title: "韓信點兵",
    poem:
`兵分巧布有條理
策略運用顯智慧
若能持正心行事
成功自然隨之至`,
    explain: {
      overall: "謀略之吉。",
      career: "計劃周詳會成功。",
      love: "智慧應對。",
      wealth: "守財有利。"
    }
  },
  {
    id: 77,
    level: "中平",
    title: "曹操挾制群雄",
    poem:
`權謀之中須小心
局勢難測宜沉穩
若能從容觀形勢
可免損失平安身`,
    explain: {
      overall: "慎行為佳。",
      career: "策略需觀察。",
      love: "勿衝動決定。",
      wealth: "守財為上。"
    }
  },
  {
    id: 78,
    level: "中吉",
    title: "關羽過五關",
    poem:
`忠義之行顯英勇
險境之中心不亂
若能堅守正道行
平安順遂到眼前`,
    explain: {
      overall: "忠勇得吉。",
      career: "展現能力有回報。",
      love: "守信得情分。",
      wealth: "守財平穩。"
    }
  },
  {
    id: 79,
    level: "中平",
    title: "張良三計",
    poem:
`智者多謀巧安排
機會得時方為利
若能謹慎而行事
成功自然在眼前`,
    explain: {
      overall: "策略需謹慎。",
      career: "計劃周全最穩妥。",
      love: "謹慎為佳。",
      wealth: "守財為上。"
    }
  },
  {
    id: 80,
    level: "中吉",
    title: "文天祥正氣歌",
    poem:
`正氣凜然志不移
風雨飄搖心自持
若能堅守正道行
後世敬仰福自臨`,
    explain: {
      overall: "正道得吉。",
      career: "專心事業受肯定。",
      love: "守心則吉。",
      wealth: "平穩為佳。"
    }
  },
  {
    id: 81,
    level: "中平",
    title: "呂布虎牢關",
    poem:
`勇猛之姿震敵膽
危險之中心自安
若能謹慎行正道
平安自會隨之來`,
    explain: {
      overall: "勇而謹慎。",
      career: "表現能力但須小心。",
      love: "守信得吉。",
      wealth: "穩健為佳。"
    }
  },
  {
    id: 82,
    level: "中吉",
    title: "諸葛亮七擒孟獲",
    poem:
`柔中帶剛智謀全
勝利不在一戰間
若能耐心循序進
終能化險為夷安`,
    explain: {
      overall: "耐心致吉。",
      career: "循序漸進最安全。",
      love: "關係需要磨合。",
      wealth: "慢慢累積。"
    }
  },
  {
    id: 83,
    level: "中平",
    title: "張良計謀",
    poem:
`智者巧計解困難
順勢而為可成事
若能謹慎行正道
成果終會隨之至`,
    explain: {
      overall: "策略需謹慎。",
      career: "計劃周全有回報。",
      love: "耐心為佳。",
      wealth: "守財平穩。"
    }
  },
  {
    id: 84,
    level: "中吉",
    title: "劉備三顧茅廬",
    poem:
`誠心邀才顯真意
耐心等待見知己
若能合作志同道
成功自會到眼前`,
    explain: {
      overall: "誠意得吉。",
      career: "誠心可獲助力。",
      love: "真心可得回應。",
      wealth: "守正可得利。"
    }
  },
  {
    id: 85,
    level: "中平",
    title: "曹操挾天子",
    poem:
`權謀之道難自測
形勢多變須謹行
若能沉著觀局勢
順利可免損傷生`,
    explain: {
      overall: "需謹慎行事。",
      career: "觀察形勢為佳。",
      love: "勿輕信他人。",
      wealth: "守財為上。"
    }
  },
  {
    id: 86,
    level: "中吉",
    title: "關羽過五關",
    poem:
`忠義之行顯英勇
險境之中心不亂
若能堅守正道行
平安順遂到眼前`,
    explain: {
      overall: "忠勇之吉。",
      career: "展現能力得回報。",
      love: "守信則吉。",
      wealth: "穩健為佳。"
    }
  },
  {
    id: 87,
    level: "中平",
    title: "張飛長坂橋",
    poem:
`勇猛無比戰場上
單騎衝鋒顯英姿
若能穩守正道行
平安康泰在眼前`,
    explain: {
      overall: "勇氣與謹慎並重。",
      career: "表現能力可獲肯定。",
      love: "守信得吉。",
      wealth: "守財平穩。"
    }
  },
  {
    id: 88,
    level: "中吉",
    title: "韓信點兵",
    poem:
`兵分巧布有條理
策略運用顯智慧
若能持正心行事
成功自然隨之至`,
    explain: {
      overall: "謀略致吉。",
      career: "計劃周詳會成功。",
      love: "智慧應對。",
      wealth: "守財有利。"
    }
  },
  {
    id: 89,
    level: "中平",
    title: "周瑜赤壁",
    poem:
`風雲變幻局難測
謀略智勇兩俱全
若能從容觀時勢
勝利自可到眼前`,
    explain: {
      overall: "需觀時機。",
      career: "策略與智慧並行。",
      love: "理智處理感情。",
      wealth: "守財為上。"
    }
  },
  {
    id: 90,
    level: "中吉",
    title: "文天祥正氣歌",
    poem:
`正氣凜然志不移
風雨飄搖心自持
若能堅守正道行
後世敬仰福自臨`,
    explain: {
      overall: "正道得吉。",
      career: "專心事業受肯定。",
      love: "守心則吉。",
      wealth: "平穩為佳。"
    }
  },
  {
    id: 91,
    level: "中平",
    title: "岳飛精忠報國",
    poem:
`丹心赤膽志不渝
忠義之心耀千古
若能專心守正道
名利終可得眼前`,
    explain: {
      overall: "忠誠之吉。",
      career: "專心事業最有成。",
      love: "守心則吉。",
      wealth: "守正得財。"
    }
  },
  {
    id: 92,
    level: "中吉",
    title: "孔明七擒孟獲",
    poem:
`柔中帶剛智謀全
勝利不在一戰間
若能耐心循序進
終能化險為夷安`,
    explain: {
      overall: "耐心致吉。",
      career: "循序漸進最安全。",
      love: "關係需要磨合。",
      wealth: "慢慢累積。"
    }
  },
  {
    id: 93,
    level: "中平",
    title: "劉備入川",
    poem:
`順勢而行事可成
時機成熟見功名
若能沉穩持正念
成功自會隨之至`,
    explain: {
      overall: "時機尚未到。",
      career: "耐心等待機會。",
      love: "慢熱為佳。",
      wealth: "守財平穩。"
    }
  },
  {
    id: 94,
    level: "中吉",
    title: "諸葛亮借東風",
    poem:
`時機風向助良謀
巧計運用皆順利
若能乘勢而行事
勝利自然在眼前`,
    explain: {
      overall: "順勢得吉。",
      career: "利用有利條件成功。",
      love: "機會適時出現。",
      wealth: "守正得財。"
    }
  },
  {
    id: 95,
    level: "中平",
    title: "孫子兵法",
    poem:
`知己知彼百戰勝
策略謀略不可少
若能詳察形勢時
行事方可少失誤`,
    explain: {
      overall: "策略重要。",
      career: "謹慎規劃最安全。",
      love: "理性處事。",
      wealth: "小心投資。"
    }
  },
  {
    id: 96,
    level: "中吉",
    title: "張良三計",
    poem:
`智者多謀巧安排
機會得時方為利
若能謹慎而行事
成功自然在眼前`,
    explain: {
      overall: "策略需謹慎。",
      career: "計劃周全最穩妥。",
      love: "謹慎為佳。",
      wealth: "守財為上。"
    }
  },
  {
    id: 97,
    level: "中平",
    title: "關羽單刀赴會",
    poem:
`孤身赴險心自安
忠義之行見英勇
若能穩守正道行
平安康泰在眼前`,
    explain: {
      overall: "忠勇並重。",
      career: "展現能力有回報。",
      love: "守信則吉。",
      wealth: "守財平穩。"
    }
  },
  {
    id: 98,
    level: "中吉",
    title: "劉邦入關",
    poem:
`順勢而為機遇生
謀略巧施見功名
若能穩守大局觀
成功自然在眼前`,
    explain: {
      overall: "抓住機會。",
      career: "全盤思考得佳績。",
      love: "情感穩定。",
      wealth: "守中有利。"
    }
  },
  {
    id: 99,
    level: "中平",
    title: "韓信背水一戰",
    poem:
`退無可退戰方行
決斷之時顯英勇
若能智勇兼備施
勝利才可到眼前`,
    explain: {
      overall: "須謀略與勇氣並行。",
      career: "戰略決策須謹慎。",
      love: "須理智面對。",
      wealth: "冒險需小心。"
    }
  },
  {
    id: 100,
    level: "中吉",
    title: "黃帝戰蚩尤",
    poem:
`兵強勇猛智略高
戰場之中顯英雄
若能穩守正道行
勝利自會隨之至`,
    explain: {
      overall: "正道致勝。",
      career: "行事謹慎有回報。",
      love: "誠信是關鍵。",
      wealth: "守正得利。"
    }
  }
];