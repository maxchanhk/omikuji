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
    title: "鳳舞龍飛",
    poem:
`鳳舞九天展瑞氣
龍飛萬里得佳機
順風順水行其道
福至心靈喜自知`,
    explain: {
      overall: "吉象，吉祥如意。",
      career: "工作有成，前途可期。",
      love: "感情穩定甜蜜。",
      wealth: "財運穩健，適合進取。"
    }
  },
  {
    id: 3,
    level: "上吉",
    title: "花開富貴",
    poem:
`百花盛開富貴來
色彩繽紛照心懷
吉星高照平安至
喜氣洋洋滿門開`,
    explain: {
      overall: "大吉，喜事盈門。",
      career: "有好運加持，事業順遂。",
      love: "感情有進展的機會。",
      wealth: "財運上升，投資可得益。"
    }
  },
  {
    id: 4,
    level: "中上",
    title: "春風得意",
    poem:
`春風得意萬象新
舊事卸下向前行
努力耕耘成果好
鴻運當頭福自生`,
    explain: {
      overall: "順利運勢，心想事成。",
      career: "表現良好，可期待晉升。",
      love: "合作默契佳，感情融洽。",
      wealth: "小有進帳，保持穩定。"
    }
  },
  {
    id: 5,
    level: "中吉",
    title: "鵲橋會",
    poem:
`銀漢迢迢隔不停
鵲橋架起情意深
若守初心不放棄
佳人朝夕共吟吟`,
    explain: {
      overall: "吉象，凡事宜守正。",
      career: "努力肯定有回報。",
      love: "良緣可成，需耐心。",
      wealth: "財務穩健，不宜冒險。"
    }
  },
  {
    id: 6,
    level: "中吉",
    title: "雲開見月",
    poem:
`雲開見月照乾坤
陰霾散去見光明
守正持心時機到
柳暗花明又一村`,
    explain: {
      overall: "運勢漸好，渡過難關。",
      career: "阻礙解除，迎來新機會。",
      love: "感情誤會將化解。",
      wealth: "財運漸進，宜守中求進。"
    }
  },
  {
    id: 7,
    level: "中上",
    title: "龍騰四海",
    poem:
`龍騰四海氣勢宏
四方迎福瑞百重
步步順遂皆如願
金榜題名福自衷`,
    explain: {
      overall: "佳象，可成大事。",
      career: "工作運佳，佳績可現。",
      love: "感情穩健有進展。",
      wealth: "多方得利，財運良好。"
    }
  },
  {
    id: 8,
    level: "中平",
    title: "雁過留聲",
    poem:
`雁過留聲千里外
跡留心念不曾回
凡事當珍惜眼前
勿讓機會消散去`,
    explain: {
      overall: "平順無奇，宜慎重行事。",
      career: "事業穩定但無大波動。",
      love: "感情需用心經營。",
      wealth: "財務平穩，宜節制消費。"
    }
  },
  {
    id: 9,
    level: "中平",
    title: "風和日麗",
    poem:
`東風和暖日初升
萬物生長勢漸迎
行事不急求穩健
守正方得福氣臨`,
    explain: {
      overall: "平穩之象，宜穩健行事。",
      career: "事業循序漸進。",
      love: "感情平和。",
      wealth: "財務平穩。"
    }
  },
  {
    id: 10,
    level: "下吉",
    title: "落葉歸根",
    poem:
`落葉歸根秋意重
生命循環道不窮
時運未順宜退守
來日復生更有功`,
    explain: {
      overall: "下吉，需守成不宜衝動。",
      career: "暫時受阻，不宜冒險。",
      love: "感情需包容理解。",
      wealth: "財運衰退，宜節制。"
    }
  },
  {
    id: 11,
    level: "下平",
    title: "秋雨淒清",
    poem:
`秋雨淒清入心間
萬事難遂意難安
風雨過後方見日
守望時機勿心煩`,
    explain: {
      overall: "下平，小不順，宜忍耐。",
      career: "遭遇瓶頸，需調整策略。",
      love: "感情易受情緒影響。",
      wealth: "財務波動大，宜謹慎。"
    }
  },
  {
    id: 12,
    level: "下下",
    title: "寒夜孤燈",
    poem:
`寒夜孤燈照歸路
行人茫然步履苦
風雨再至心更冷
宜慎退守莫輕行`,
    explain: {
      overall: "下下之象，宜慎守、不宜進。",
      career: "事業阻滯多困難。",
      love: "感情多爭執不順。",
      wealth: "財運貧弱，勿投資。"
    }
  },
  {
    id: 13,
    level: "上平",
    title: "松柏常青",
    poem:
`松柏常青根不動
歲月無言心自寧
守正持心安無恙
福祿自然滿門盈`,
    explain: {
      overall: "上平，穩健之象。",
      career: "工作穩步發展。",
      love: "感情穩定平順。",
      wealth: "財務平衡。"
    }
  },
  {
    id: 14,
    level: "中上",
    title: "碧海清風",
    poem:
`碧海清風送遠情
心如明鏡不迷惘
識得時機方出手
前途光明樂無窮`,
    explain: {
      overall: "吉象，須把握機會。",
      career: "事業迎來新機遇。",
      love: "感情有望發展。",
      wealth: "財運良好。"
    }
  },
  {
    id: 15,
    level: "中吉",
    title: "春光普照",
    poem:
`春光普照萬物生
心懷喜悅向前行
積善修德多助力
榮華富貴總相迎`,
    explain: {
      overall: "吉象，凡事宜進。",
      career: "工作順利，有合作機會。",
      love: "感情穩步上升。",
      wealth: "多方財運佳。"
    }
  },
  {
    id: 16,
    level: "中平",
    title: "雨過天晴",
    poem:
`雨過天晴雲自散
心境恢復見光明
守正持心勿急躁
時機未到耐心行`,
    explain: {
      overall: "平順之象，宜耐心。",
      career: "等待時機最佳時。",
      love: "感情誤會漸解。",
      wealth: "財務尚穩。"
    }
  },
  {
    id: 17,
    level: "下吉",
    title: "驟雨驚雷",
    poem:
`驟雨驚雷勢難停
震動心神莫輕行
待雨休歇方可出
安然無恙在眼前`,
    explain: {
      overall: "下吉，宜守勿動。",
      career: "暫停大計，觀察再行。",
      love: "感情易波動。",
      wealth: "不宜大投資。"
    }
  },
  {
    id: 18,
    level: "下平",
    title: "孤舟夜泊",
    poem:
`孤舟夜泊風更急
水波不定心惶惶
暫避風頭穩坐定
守成時機再出發`,
    explain: {
      overall: "下平，小阻滯需守成。",
      career: "工作進展緩慢。",
      love: "感情不穩定。",
      wealth: "財運低迷。"
    }
  },
  {
    id: 19,
    level: "中吉",
    title: "桃李爭春",
    poem:
`桃李不言自成蹊
名利皆由真本事
守正待時方有成
榮華富貴在眼前`,
    explain: {
      overall: "吉象，實力帶來成功。",
      career: "實力提升，可得成就。",
      love: "感情真誠得佳緣。",
      wealth: "正財穩健增加。"
    }
  },
  {
    id: 20,
    level: "中上",
    title: "雲程萬里",
    poem:
`雲程萬里志氣高
一帆風順駛夢舟
順勢而行心不疑
前途無限在眼前`,
    explain: {
      overall: "吉象，志氣帶來順利。",
      career: "事業前景看好。",
      love: "感情進展順利。",
      wealth: "財運良好穩健。"
    }
  },
  {
    id: 21,
    level: "上上",
    title: "日麗風和",
    poem:
`陽光普照天地間
萬物欣欣向榮生
順天應時多吉祥
福氣安康永長久`,
    explain: {
      overall: "大吉，順利平安。",
      career: "工作順暢，貴人相助。",
      love: "感情和睦，甜蜜如意。",
      wealth: "財運亨通，宜進取。"
    }
  },
  {
    id: 22,
    level: "上吉",
    title: "青雲直上",
    poem:
`青雲直上任逍遙
努力奮進步步高
貴人相助吉星照
前途無量福自來`,
    explain: {
      overall: "吉象，順利可期。",
      career: "晉升機會大，工作順遂。",
      love: "感情平順，宜坦誠。",
      wealth: "財運穩健，可小幅投資。"
    }
  },
  {
    id: 23,
    level: "中上",
    title: "春回大地",
    poem:
`春風吹拂大地暖
萬物復蘇生意盎
守正待時收效佳
努力方能見成就`,
    explain: {
      overall: "順利運勢，需守正。",
      career: "工作穩步進展。",
      love: "感情有進展機會。",
      wealth: "財務平穩，有小利。"
    }
  },
  {
    id: 24,
    level: "中吉",
    title: "柳暗花明",
    poem:
`陰霾消散見光明
柳暗花明再起航
耐心行事成正果
吉運隨時福自來`,
    explain: {
      overall: "吉象，耐心可得福。",
      career: "阻礙解除，迎來新機會。",
      love: "感情緩解，宜耐心。",
      wealth: "財務穩定，有小收穫。"
    }
  },
  {
    id: 25,
    level: "中平",
    title: "雲淡風輕",
    poem:
`雲淡風輕心無憂
凡事守正方得安
不急不躁多觀察
時運漸到福自來`,
    explain: {
      overall: "平順之象，守正宜耐心。",
      career: "事業穩定，但需觀察。",
      love: "感情平淡，需用心。",
      wealth: "財務平穩，宜守中。"
    }
  },
  {
    id: 26,
    level: "下吉",
    title: "寒梅孤芳",
    poem:
`寒梅傲雪獨自開
世事多阻不宜急
守正持心時機到
吉運方來福自來`,
    explain: {
      overall: "下吉，宜守正不宜冒進。",
      career: "工作有阻礙，勿操之過急。",
      love: "感情需忍耐。",
      wealth: "財務需節制開支。"
    }
  },
  {
    id: 27,
    level: "下平",
    title: "江水滔滔",
    poem:
`江水滔滔不息流
心緒浮動莫輕動
靜待時機方可行
守正保福自安康`,
    explain: {
      overall: "下平，小阻滯需守成。",
      career: "工作緩慢進展。",
      love: "感情不穩，需謹慎。",
      wealth: "財務不順，勿投資。"
    }
  },
  {
    id: 28,
    level: "下下",
    title: "夜行迷途",
    poem:
`夜深路暗行人迷
風雨交加步難行
退守勿冒一時意
待時而動保平安`,
    explain: {
      overall: "下下，凶象，多退守。",
      career: "事業受阻，宜忍耐。",
      love: "感情不順，慎言慎行。",
      wealth: "財運衰退，不宜投資。"
    }
  },
  {
    id: 29,
    level: "上平",
    title: "碧波漣漪",
    poem:
`碧波漣漪映日光
心境安和順自長
守正持心福自來
前程可期吉星照`,
    explain: {
      overall: "平順之象，心安順遂。",
      career: "工作平穩，守正可得。",
      love: "感情和睦順利。",
      wealth: "財運穩定。"
    }
  },
  {
    id: 30,
    level: "中上",
    title: "鳳凰朝陽",
    poem:
`鳳凰朝陽展瑞光
事業平順步步高
守正持心吉星照
前途光明福自長`,
    explain: {
      overall: "吉象，事業順利。",
      career: "工作運佳，有貴人助力。",
      love: "感情平順，宜守正。",
      wealth: "財運穩健。"
    }
  },
  {
    id: 31,
    level: "中平",
    title: "松風幽徑",
    poem:
`松風幽徑自逍遙
凡事循序心安然
守正持心得安福
時機成熟再出發`,
    explain: {
      overall: "平順之象，宜耐心行事。",
      career: "工作穩定，勿操之過急。",
      love: "感情平和。",
      wealth: "財運平穩。"
    }
  },
  {
    id: 32,
    level: "下吉",
    title: "枯木逢春",
    poem:
`枯木逢春再發芽
困境暫時勿氣餒
守正持心時機到
福運自會隨之來`,
    explain: {
      overall: "下吉，守正可化凶為吉。",
      career: "工作遇阻，宜退守。",
      love: "感情有波折，需耐心。",
      wealth: "財務暫時不順，宜節制。"
    }
  },
  {
    id: 33,
    level: "下平",
    title: "落霞孤鶩",
    poem:
`落霞孤鶩影相隨
時運不順心勿浮
守正持心可保安
待時而動福自來`,
    explain: {
      overall: "下平，小阻滯需守正。",
      career: "工作受阻，勿冒進。",
      love: "感情平淡，需耐心。",
      wealth: "財運不穩，宜守財。"
    }
  },
  {
    id: 34,
    level: "下下",
    title: "寒霜枯藤",
    poem:
`寒霜枯藤覆舊枝
萬事難遂心更迷
退守勿進保平安
時運不順耐心行`,
    explain: {
      overall: "下下，凶象，需守成。",
      career: "事業受阻，勿冒險。",
      love: "感情受阻，宜退守。",
      wealth: "財運衰退，慎行理財。"
    }
  },
  {
    id: 35,
    level: "上平",
    title: "青松挺立",
    poem:
`青松挺立不畏風
心境平和福自隆
守正持心吉自來
前程穩定安康通`,
    explain: {
      overall: "平順之象，宜守正。",
      career: "事業穩定順利。",
      love: "感情平穩和諧。",
      wealth: "財運平穩。"
    }
  },
  {
    id: 36,
    level: "中上",
    title: "紅日初升",
    poem:
`紅日初升照大地
萬象更新心喜悅
順勢而行收穫多
吉星高照福滿門`,
    explain: {
      overall: "吉象，順利可期。",
      career: "工作順利，有發展。",
      love: "感情有新機會。",
      wealth: "財運良好。"
    }
  },
  {
    id: 37,
    level: "中吉",
    title: "花影婆娑",
    poem:
`花影婆娑映月光
時運雖緩莫焦躁
守正持心吉自來
福運將臨喜滿堂`,
    explain: {
      overall: "吉象，宜守正等待時機。",
      career: "工作平順，勿操之過急。",
      love: "感情漸順，需耐心。",
      wealth: "財務穩定，宜理財。"
    }
  },
  {
    id: 38,
    level: "中平",
    title: "流水無痕",
    poem:
`流水無痕心自靜
凡事循序勿急進
守正持心安無事
時運未到勿輕行`,
    explain: {
      overall: "平順之象，宜耐心守正。",
      career: "工作平穩，勿冒險。",
      love: "感情平和，勿衝動。",
      wealth: "財務平穩。"
    }
  },
  {
    id: 39,
    level: "下吉",
    title: "孤峰寒煙",
    poem:
`孤峰寒煙覆山巔
時運不順多阻礙
守成退守保安泰
吉運將至勿急躁`,
    explain: {
      overall: "下吉，需退守不宜急行。",
      career: "工作受阻，宜守成。",
      love: "感情需忍耐。",
      wealth: "財運衰退，宜節制。"
    }
  },
  {
    id: 40,
    level: "下平",
    title: "荒野迷途",
    poem:
`荒野迷途步難行
困境當前心惶惶
退守靜觀莫輕舉
時機未到方出發`,
    explain: {
      overall: "下平，凡事需退守。",
      career: "事業阻礙多，勿冒進。",
      love: "感情不順，宜耐心。",
      wealth: "財務低迷，宜節制。"
    }
  },
  {
    id: 41,
    level: "上上",
    title: "金玉滿堂",
    poem:
`金玉滿堂福氣長
家宅平安喜洋洋
萬事順遂皆如意
財祿雙全樂無央`,
    explain: {
      overall: "大吉，福運亨通。",
      career: "工作順利，吉星高照。",
      love: "感情甜蜜，良緣可期。",
      wealth: "財運旺盛，收穫豐厚。"
    }
  },
  {
    id: 42,
    level: "上吉",
    title: "春光明媚",
    poem:
`春光明媚照人間
萬象更新喜盈門
凡事順遂皆可期
吉星高照福自臻`,
    explain: {
      overall: "吉象，凡事順利。",
      career: "工作運佳，有貴人助力。",
      love: "感情順遂，甜蜜幸福。",
      wealth: "財運穩定，可小幅投資。"
    }
  },
  {
    id: 43,
    level: "中上",
    title: "祥雲瑞氣",
    poem:
`祥雲瑞氣繞門庭
平安喜樂福滿盈
凡事守正不貪多
吉運自來樂無窮`,
    explain: {
      overall: "順利之象，宜守正行事。",
      career: "工作穩步，貴人相助。",
      love: "感情平順，需耐心經營。",
      wealth: "財務穩定，有小收穫。"
    }
  },
  {
    id: 44,
    level: "中吉",
    title: "鳳凰來儀",
    poem:
`鳳凰來儀福自臨
吉星高照順心情
守正持心凡事順
福運漸至喜盈門`,
    explain: {
      overall: "吉象，需守正等待機會。",
      career: "工作順利，有機遇。",
      love: "感情和睦，良緣可期。",
      wealth: "財運良好，可小幅理財。"
    }
  },
  {
    id: 45,
    level: "中平",
    title: "雲深不知處",
    poem:
`雲深不知遠近天
行事宜守不宜冒
凡事循序耐心做
吉運將至自平安`,
    explain: {
      overall: "平順之象，宜循序行事。",
      career: "事業平穩，勿冒進。",
      love: "感情平淡，需耐心。",
      wealth: "財務平穩，宜守財。"
    }
  },
  {
    id: 46,
    level: "下吉",
    title: "寒霜凋木",
    poem:
`寒霜凋木葉落盡
時運不順勿輕舉
守成退守安無恙
福運將至耐心行`,
    explain: {
      overall: "下吉，宜退守勿輕動。",
      career: "工作阻滯，勿冒險。",
      love: "感情易波折，宜守正。",
      wealth: "財運低迷，宜節制。"
    }
  },
  {
    id: 47,
    level: "下平",
    title: "孤雁遠飛",
    poem:
`孤雁遠飛天際間
行程崎嶇心勿急
守正持心安無事
時運未到勿輕行`,
    explain: {
      overall: "下平，小阻滯需守正。",
      career: "事業進展緩慢。",
      love: "感情不穩，需耐心。",
      wealth: "財務平穩，勿投資。"
    }
  },
  {
    id: 48,
    level: "下下",
    title: "夜寒孤燈",
    poem:
`夜寒孤燈照行路
風雨交加步難行
退守靜觀勿輕舉
安然無恙待時機`,
    explain: {
      overall: "下下，凶象，宜退守。",
      career: "事業受阻，勿冒進。",
      love: "感情受挫，需忍耐。",
      wealth: "財運不順，宜節制。"
    }
  },
  {
    id: 49,
    level: "上平",
    title: "松柏長青",
    poem:
`松柏長青歲月深
心境安和福自臨
守正持心皆平安
前程穩定福盈門`,
    explain: {
      overall: "平順之象，宜守正。",
      career: "事業穩定，逐步進展。",
      love: "感情平順，宜守正。",
      wealth: "財運穩定。"
    }
  },
  {
    id: 50,
    level: "中上",
    title: "朝陽初升",
    poem:
`朝陽初升照乾坤
萬象更新心喜悅
順勢而行收穫多
吉星高照福滿門`,
    explain: {
      overall: "吉象，順利可期。",
      career: "事業運佳，貴人助力。",
      love: "感情順利，宜守正。",
      wealth: "財運良好穩定。"
    }
  },
  {
    id: 51,
    level: "中吉",
    title: "春水潺潺",
    poem:
`春水潺潺潤心田
凡事循序不貪多
守正持心吉自來
福運漸至喜盈門`,
    explain: {
      overall: "吉象，需守正等待時機。",
      career: "事業穩步進展。",
      love: "感情平順，耐心可得良緣。",
      wealth: "財運穩定，有小收穫。"
    }
  },
  {
    id: 52,
    level: "中平",
    title: "雲淡風輕",
    poem:
`雲淡風輕心自靜
凡事循序勿急進
守正持心安無事
時運未到勿輕行`,
    explain: {
      overall: "平順之象，宜耐心守正。",
      career: "事業穩定，勿冒進。",
      love: "感情平和，需耐心。",
      wealth: "財務平穩。"
    }
  },
  {
    id: 53,
    level: "下吉",
    title: "孤峰寒煙",
    poem:
`孤峰寒煙覆山巔
時運不順多阻礙
守成退守保安泰
吉運將至勿急躁`,
    explain: {
      overall: "下吉，需退守不宜急行。",
      career: "工作受阻，宜守成。",
      love: "感情需忍耐。",
      wealth: "財運衰退，宜節制。"
    }
  },
  {
    id: 54,
    level: "下平",
    title: "迷霧幽谷",
    poem:
`迷霧幽谷路不明
步履艱難心忐忑
退守靜觀莫輕舉
時機未到方可行`,
    explain: {
      overall: "下平，宜退守勿輕動。",
      career: "事業進展緩慢。",
      love: "感情不穩，需忍耐。",
      wealth: "財務低迷，宜節制。"
    }
  },
  {
    id: 55,
    level: "中上",
    title: "旭日東昇",
    poem:
`旭日東昇照大地
萬象更新心歡喜
守正持心皆順利
前程可期福滿門`,
    explain: {
      overall: "吉象，順利可期。",
      career: "工作運佳，有貴人助力。",
      love: "感情順利，宜守正。",
      wealth: "財運良好，收穫可期。"
    }
  },
  {
    id: 56,
    level: "中吉",
    title: "花開並蒂",
    poem:
`花開並蒂映春光
美景如畫福自臨
守正持心凡事順
吉運將臨喜盈門`,
    explain: {
      overall: "吉象，凡事宜守正。",
      career: "工作順利，有小成果。",
      love: "感情甜蜜，宜耐心經營。",
      wealth: "財運穩定，適宜理財。"
    }
  },
  {
    id: 57,
    level: "中平",
    title: "流水無聲",
    poem:
`流水無聲心自安
凡事循序勿急躁
守正持心可得福
時運未到勿輕行`,
    explain: {
      overall: "平順之象，宜守正耐心。",
      career: "工作平穩，勿操之過急。",
      love: "感情平淡，宜守正。",
      wealth: "財務平穩。"
    }
  },
  {
    id: 58,
    level: "下吉",
    title: "寒風凜冽",
    poem:
`寒風凜冽夜漫長
行事不順心勿慌
退守靜觀保安泰
吉運將至宜耐心`,
    explain: {
      overall: "下吉，宜退守勿冒進。",
      career: "工作受阻，宜守正。",
      love: "感情易波折，需忍耐。",
      wealth: "財運低迷，宜節制。"
    }
  },
  {
    id: 59,
    level: "下平",
    title: "孤舟夜渡",
    poem:
`孤舟夜渡水茫茫
路途艱難心莫慌
退守靜觀勿輕舉
時機未到方可行`,
    explain: {
      overall: "下平，小阻滯需退守。",
      career: "事業緩慢，勿冒進。",
      love: "感情不穩，宜忍耐。",
      wealth: "財務低迷，宜節制。"
    }
  },
  {
    id: 60,
    level: "中上",
    title: "雲開見日",
    poem:
`雲開見日照乾坤
陰霾消散心喜悅
順勢而行收穫多
吉星高照福滿門`,
    explain: {
      overall: "吉象，順利可期。",
      career: "工作順利，有貴人助力。",
      love: "感情平順，宜守正。",
      wealth: "財運良好穩定。"
    }
  },
  {
    id: 61,
    level: "上上",
    title: "福星高照",
    poem:
`福星高照遍四方
家宅平安喜洋洋
凡事順遂皆如意
財祿雙全樂無央`,
    explain: {
      overall: "大吉，福運亨通。",
      career: "工作順利，吉星高照。",
      love: "感情甜蜜，良緣可期。",
      wealth: "財運旺盛，收穫豐厚。"
    }
  },
  {
    id: 62,
    level: "上吉",
    title: "春回大地",
    poem:
`春回大地萬象新
萬物復甦喜盈門
順天應時皆順利
吉星高照福自臻`,
    explain: {
      overall: "吉象，凡事順利。",
      career: "工作運佳，有貴人助力。",
      love: "感情順遂，甜蜜幸福。",
      wealth: "財運穩定，可小幅投資。"
    }
  },
  {
    id: 63,
    level: "中上",
    title: "瑞氣盈門",
    poem:
`瑞氣盈門福自臨
凡事守正不貪多
吉星高照心歡喜
福運將至喜盈門`,
    explain: {
      overall: "順利之象，宜守正行事。",
      career: "工作穩步，貴人相助。",
      love: "感情平順，需耐心經營。",
      wealth: "財務穩定，有小收穫。"
    }
  },
  {
    id: 64,
    level: "中吉",
    title: "鳳舞九天",
    poem:
`鳳舞九天展瑞光
順勢而行吉星照
凡事守正皆順利
福運漸至喜盈門`,
    explain: {
      overall: "吉象，需守正等待機會。",
      career: "工作順利，有機遇。",
      love: "感情和睦，良緣可期。",
      wealth: "財運良好，可小幅理財。"
    }
  },
  {
    id: 65,
    level: "中平",
    title: "雲行雨施",
    poem:
`雲行雨施潤萬物
凡事循序不宜急
守正持心皆順利
吉運將至福自來`,
    explain: {
      overall: "平順之象，宜循序行事。",
      career: "事業平穩，勿冒進。",
      love: "感情平淡，需耐心。",
      wealth: "財務平穩，宜守財。"
    }
  },
  {
    id: 66,
    level: "下吉",
    title: "寒梅傲雪",
    poem:
`寒梅傲雪獨自開
行事不順勿冒進
守成退守保安泰
福運將至耐心行`,
    explain: {
      overall: "下吉，宜退守勿輕動。",
      career: "工作阻滯，勿冒險。",
      love: "感情易波折，宜守正。",
      wealth: "財運低迷，宜節制。"
    }
  },
  {
    id: 67,
    level: "下平",
    title: "孤雁長空",
    poem:
`孤雁長空遠飛行
步履艱難心莫慌
退守靜觀莫輕舉
時機未到方可行`,
    explain: {
      overall: "下平，小阻滯需守正。",
      career: "事業進展緩慢。",
      love: "感情不穩，需耐心。",
      wealth: "財務平穩，勿投資。"
    }
  },
  {
    id: 68,
    level: "下下",
    title: "夜雨孤燈",
    poem:
`夜雨孤燈照行路
風雨交加步難行
退守靜觀勿輕舉
安然無恙待時機`,
    explain: {
      overall: "下下，凶象，宜退守。",
      career: "事業受阻，勿冒進。",
      love: "感情受挫，需忍耐。",
      wealth: "財運不順，宜節制。"
    }
  },
  {
    id: 69,
    level: "上平",
    title: "松林清風",
    poem:
`松林清風吹心安
守正持心福自臨
凡事循序皆順利
前程穩定福盈門`,
    explain: {
      overall: "平順之象，宜守正。",
      career: "事業穩定，逐步進展。",
      love: "感情平順，宜守正。",
      wealth: "財運穩定。"
    }
  },
  {
    id: 70,
    level: "中上",
    title: "旭日東昇",
    poem:
`旭日東昇照大地
萬象更新心歡喜
守正持心皆順利
前程可期福滿門`,
    explain: {
      overall: "吉象，順利可期。",
      career: "工作運佳，有貴人助力。",
      love: "感情順利，宜守正。",
      wealth: "財運良好，收穫可期。"
    }
  },
  {
    id: 71,
    level: "中吉",
    title: "春花爛漫",
    poem:
`春花爛漫映日光
心境平和福自臨
凡事守正皆順利
吉運將至喜盈門`,
    explain: {
      overall: "吉象，凡事宜守正。",
      career: "工作順利，有小成果。",
      love: "感情甜蜜，宜耐心經營。",
      wealth: "財運穩定，適宜理財。"
    }
  },
  {
    id: 72,
    level: "中平",
    title: "流水靜心",
    poem:
`流水靜心心自安
凡事循序勿急躁
守正持心可得福
時運未到勿輕行`,
    explain: {
      overall: "平順之象，宜守正耐心。",
      career: "工作平穩，勿操之過急。",
      love: "感情平淡，宜守正。",
      wealth: "財務平穩。"
    }
  },
  {
    id: 73,
    level: "下吉",
    title: "寒風孤影",
    poem:
`寒風孤影夜漫長
行事不順心勿慌
退守靜觀保安泰
吉運將至宜耐心`,
    explain: {
      overall: "下吉，宜退守勿冒進。",
      career: "工作受阻，宜守正。",
      love: "感情易波折，需忍耐。",
      wealth: "財運低迷，宜節制。"
    }
  },
  {
    id: 74,
    level: "下平",
    title: "迷霧山谷",
    poem:
`迷霧山谷路不明
步履艱難心忐忑
退守靜觀莫輕舉
時機未到方可行`,
    explain: {
      overall: "下平，宜退守勿輕動。",
      career: "事業進展緩慢。",
      love: "感情不穩，需忍耐。",
      wealth: "財務低迷，宜節制。"
    }
  },
  {
    id: 75,
    level: "上平",
    title: "碧空長虹",
    poem:
`碧空長虹掛天邊
心境安和福自臨
守正持心皆平安
前程穩定福盈門`,
    explain: {
      overall: "平順之象，宜守正。",
      career: "事業穩定，逐步進展。",
      love: "感情平順，宜守正。",
      wealth: "財運穩定。"
    }
  },
  {
    id: 76,
    level: "中上",
    title: "旭光普照",
    poem:
`旭光普照遍大地
萬象更新心歡喜
守正持心皆順利
前程可期福滿門`,
    explain: {
      overall: "吉象，順利可期。",
      career: "工作運佳，有貴人助力。",
      love: "感情順利，宜守正。",
      wealth: "財運良好，收穫可期。"
    }
  },
  {
    id: 77,
    level: "中吉",
    title: "花影搖曳",
    poem:
`花影搖曳映日光
心境平和福自臨
凡事守正皆順利
吉運將至喜盈門`,
    explain: {
      overall: "吉象，凡事宜守正。",
      career: "工作順利，有小成果。",
      love: "感情甜蜜，宜耐心經營。",
      wealth: "財運穩定，適宜理財。"
    }
  },
  {
    id: 78,
    level: "中平",
    title: "清泉石上流",
    poem:
`清泉石上流不息
凡事循序勿急躁
守正持心可得福
時運未到勿輕行`,
    explain: {
      overall: "平順之象，宜守正耐心。",
      career: "工作平穩，勿操之過急。",
      love: "感情平淡，宜守正。",
      wealth: "財務平穩。"
    }
  },
  {
    id: 79,
    level: "下吉",
    title: "孤峰煙霧",
    poem:
`孤峰煙霧覆山巔
時運不順多阻礙
守成退守保安泰
吉運將至勿急躁`,
    explain: {
      overall: "下吉，需退守不宜急行。",
      career: "工作受阻，宜守成。",
      love: "感情需忍耐。",
      wealth: "財運衰退，宜節制。"
    }
  },
  {
    id: 80,
    level: "下平",
    title: "暗夜長路",
    poem:
`暗夜長路步艱難
行程崎嶇心忐忑
退守靜觀勿輕舉
時機未到方可行`,
    explain: {
      overall: "下平，宜退守勿輕動。",
      career: "事業進展緩慢。",
      love: "感情不穩，需忍耐。",
      wealth: "財務低迷，宜節制。"
    }
  },
  {
    id: 81,
    level: "上上",
    title: "玉堂金閣",
    poem:
`玉堂金閣福滿門
家宅安康喜洋洋
凡事順遂皆如意
財祿雙全樂無央`,
    explain: {
      overall: "大吉，福運亨通。",
      career: "工作順利，吉星高照。",
      love: "感情甜蜜，良緣可期。",
      wealth: "財運旺盛，收穫豐厚。"
    }
  },
  {
    id: 82,
    level: "上吉",
    title: "春色滿園",
    poem:
`春色滿園花爛漫
萬象更新喜盈門
順天應時皆順利
吉星高照福自臻`,
    explain: {
      overall: "吉象，凡事順利。",
      career: "工作運佳，有貴人助力。",
      love: "感情順遂，甜蜜幸福。",
      wealth: "財運穩定，可小幅投資。"
    }
  },
  {
    id: 83,
    level: "中上",
    title: "祥光普照",
    poem:
`祥光普照福自臨
凡事守正不貪多
吉星高照心歡喜
福運將至喜盈門`,
    explain: {
      overall: "順利之象，宜守正行事。",
      career: "工作穩步，貴人相助。",
      love: "感情平順，需耐心經營。",
      wealth: "財務穩定，有小收穫。"
    }
  },
  {
    id: 84,
    level: "中吉",
    title: "鳳凰朝陽",
    poem:
`鳳凰朝陽展瑞光
順勢而行吉星照
凡事守正皆順利
福運漸至喜盈門`,
    explain: {
      overall: "吉象，需守正等待機會。",
      career: "工作順利，有機遇。",
      love: "感情和睦，良緣可期。",
      wealth: "財運良好，可小幅理財。"
    }
  },
  {
    id: 85,
    level: "中平",
    title: "雲淡天高",
    poem:
`雲淡天高心自靜
凡事循序不宜急
守正持心皆順利
吉運將至福自來`,
    explain: {
      overall: "平順之象，宜循序行事。",
      career: "事業平穩，勿冒進。",
      love: "感情平淡，需耐心。",
      wealth: "財務平穩，宜守財。"
    }
  },
  {
    id: 86,
    level: "下吉",
    title: "寒梅獨傲",
    poem:
`寒梅獨傲雪中開
行事不順勿冒進
守成退守保安泰
福運將至耐心行`,
    explain: {
      overall: "下吉，宜退守勿輕動。",
      career: "工作阻滯，勿冒險。",
      love: "感情易波折，宜守正。",
      wealth: "財運低迷，宜節制。"
    }
  },
  {
    id: 87,
    level: "下平",
    title: "孤雁遠飛",
    poem:
`孤雁遠飛天際間
行程崎嶇心勿急
守正持心安無事
時運未到勿輕行`,
    explain: {
      overall: "下平，小阻滯需守正。",
      career: "事業進展緩慢。",
      love: "感情不穩，需耐心。",
      wealth: "財務平穩，勿投資。"
    }
  },
  {
    id: 88,
    level: "下下",
    title: "夜寒孤燈",
    poem:
`夜寒孤燈照行路
風雨交加步難行
退守靜觀勿輕舉
安然無恙待時機`,
    explain: {
      overall: "下下，凶象，宜退守。",
      career: "事業受阻，勿冒進。",
      love: "感情受挫，需忍耐。",
      wealth: "財運不順，宜節制。"
    }
  },
  {
    id: 89,
    level: "上平",
    title: "松柏長青",
    poem:
`松柏長青歲月深
心境安和福自臨
守正持心皆平安
前程穩定福盈門`,
    explain: {
      overall: "平順之象，宜守正。",
      career: "事業穩定，逐步進展。",
      love: "感情平順，宜守正。",
      wealth: "財運穩定。"
    }
  },
  {
    id: 90,
    level: "中上",
    title: "旭日初升",
    poem:
`旭日初升照乾坤
萬象更新心喜悅
順勢而行收穫多
吉星高照福滿門`,
    explain: {
      overall: "吉象，順利可期。",
      career: "工作運佳，貴人助力。",
      love: "感情順利，宜守正。",
      wealth: "財運良好穩定。"
    }
  },
  {
    id: 91,
    level: "中吉",
    title: "春水潺潺",
    poem:
`春水潺潺潤心田
凡事循序不貪多
守正持心吉自來
福運漸至喜盈門`,
    explain: {
      overall: "吉象，需守正等待時機。",
      career: "事業穩步進展。",
      love: "感情平順，耐心可得良緣。",
      wealth: "財運穩定，有小收穫。"
    }
  },
  {
    id: 92,
    level: "中平",
    title: "雲淡風輕",
    poem:
`雲淡風輕心自靜
凡事循序勿急進
守正持心安無事
時運未到勿輕行`,
    explain: {
      overall: "平順之象，宜耐心守正。",
      career: "事業穩定，勿冒進。",
      love: "感情平和，需耐心。",
      wealth: "財務平穩。"
    }
  },
  {
    id: 93,
    level: "下吉",
    title: "孤峰寒煙",
    poem:
`孤峰寒煙覆山巔
時運不順多阻礙
守成退守保安泰
吉運將至勿急躁`,
    explain: {
      overall: "下吉，需退守不宜急行。",
      career: "工作受阻，宜守成。",
      love: "感情需忍耐。",
      wealth: "財運衰退，宜節制。"
    }
  },
  {
    id: 94,
    level: "下平",
    title: "迷霧幽谷",
    poem:
`迷霧幽谷路不明
步履艱難心忐忑
退守靜觀莫輕舉
時機未到方可行`,
    explain: {
      overall: "下平，宜退守勿輕動。",
      career: "事業進展緩慢。",
      love: "感情不穩，需忍耐。",
      wealth: "財務低迷，宜節制。"
    }
  },
  {
    id: 95,
    level: "中上",
    title: "旭日東昇",
    poem:
`旭日東昇照大地
萬象更新心歡喜
守正持心皆順利
前程可期福滿門`,
    explain: {
      overall: "吉象，順利可期。",
      career: "工作運佳，有貴人助力。",
      love: "感情順利，宜守正。",
      wealth: "財運良好，收穫可期。"
    }
  },
  {
    id: 96,
    level: "中吉",
    title: "花開並蒂",
    poem:
`花開並蒂映春光
美景如畫福自臨
守正持心凡事順
吉運將臨喜盈門`,
    explain: {
      overall: "吉象，凡事宜守正。",
      career: "工作順利，有小成果。",
      love: "感情甜蜜，宜耐心經營。",
      wealth: "財運穩定，適宜理財。"
    }
  },
  {
    id: 97,
    level: "中平",
    title: "流水無聲",
    poem:
`流水無聲心自安
凡事循序勿急躁
守正持心可得福
時運未到勿輕行`,
    explain: {
      overall: "平順之象，宜守正耐心。",
      career: "工作平穩，勿操之過急。",
      love: "感情平淡，宜守正。",
      wealth: "財務平穩。"
    }
  },
  {
    id: 98,
    level: "下吉",
    title: "寒風凜冽",
    poem:
`寒風凜冽夜漫長
行事不順心勿慌
退守靜觀保安泰
吉運將至宜耐心`,
    explain: {
      overall: "下吉，宜退守勿冒進。",
      career: "工作受阻，宜守正。",
      love: "感情易波折，需忍耐。",
      wealth: "財運低迷，宜節制。"
    }
  },
  {
    id: 99,
    level: "下平",
    title: "孤舟夜渡",
    poem:
`孤舟夜渡水茫茫
路途艱難心莫慌
退守靜觀勿輕舉
時機未到方可行`,
    explain: {
      overall: "下平，小阻滯需退守。",
      career: "事業緩慢，勿冒進。",
      love: "感情不穩，宜忍耐。",
      wealth: "財務低迷，宜節制。"
    }
  },
  {
    id: 100,
    level: "中上",
    title: "雲開見日",
    poem:
`雲開見日照乾坤
陰霾消散心喜悅
順勢而行收穫多
吉星高照福滿門`,
    explain: {
      overall: "吉象，順利可期。",
      career: "工作順利，有貴人助力。",
      love: "感情平順，宜守正。",
      wealth: "財運良好穩定。"
    }
  }
];