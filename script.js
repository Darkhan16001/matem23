
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Айнымалылары модуль таңбасының ішінде болатын теңдеулер мен теңсіздіктер",
  goal: "Санның модулін түсіну, модульдік теңдеулерді жағдайларға бөліп шешу, модульдік теңсіздіктердің шешімін аралық түрінде жазу және жүйелердің ортақ шешімін табу."
};

// ===================================================
// 5 ТЕОРИЯЛЫҚ ТҮСІНДІРМЕ
// ===================================================

const theory = [
  {
    title: "Санның модулі және оның қасиеттері",
    definition:
      "Санның модулі — сол санның сан осіндегі нөлден қашықтығы. Қашықтық теріс болмайтындықтан, кез келген нақты санның модулі нөлден үлкен немесе нөлге тең болады.",
    explain:
      "Бес саны да, минус бес саны да нөлден бес бірлік қашықтықта орналасқан. Сондықтан олардың модульдері бірдей, яғни беске тең. Оң санның модулі өзгеріссіз қалады. Теріс санның модулін алу үшін оның таңбасын өзгертеміз. Нөлдің модулі нөл. Егер модульдің ішінде x минус үш тұрса, бұл x санының сан осіндегі үш нүктесінен қашықтығын білдіреді. Мысалы, x сегіз болғанда қашықтық беске, x минус екі болғанда да беске тең.",
    rule:
      "Модульдің мәні ешқашан теріс болмайды. Модуль таңбасының ішінде оң өрнек болса, оны өзгертпейміз; теріс болса, таңбасын ауыстырамыз.",
    formula:
      M`|x|=\begin{cases}x,&x\ge0\\-x,&x<0\end{cases}`,
    steps: [
      M`|5|=5`,
      M`|-5|=5`,
      M`|0|=0`,
      M`|8-3|=5`,
      M`|-2-3|=5`
    ],
    warning:
      "Модуль теріс санға тең болмайды. Мысалы, |x| = −4 теңдеуінің нақты шешімі жоқ."
  },

  {
    title: "Қарапайым модульдік теңдеулер",
    definition:
      "Модулі теріс емес тұрақты санға тең теңдеу екі жағдайға бөлінеді. Модуль ішіндегі өрнек тұрақты санға немесе оның қарама-қарсы мәніне тең болуы мүмкін.",
    explain:
      "Мысалы, x минус үш өрнегінің модулі беске тең делік. Бұл x саны үш нүктесінен бес бірлік қашықтықта орналасқанын көрсетеді. Сан осінде үштен оңға қарай бес бірлік жүрсек, сегізге жетеміз. Үштен солға қарай бес бірлік жүрсек, минус екіге жетеміз. Екі мән де бастапқы теңдеуді қанағаттандырады. Сондықтан екі түбір шығады. Егер модуль нөлге тең болса, модуль ішіндегі өрнек те нөлге тең болады.",
    rule:
      "Оң тұрақты сан үшін теңдеуді екіге бөлеміз: өрнек оң тұрақтыға немесе теріс тұрақтыға тең болады.",
    formula:
      M`|A(x)|=b\iff A(x)=b\ \lor\ A(x)=-b,\qquad b\ge0`,
    steps: [
      M`|x-3|=5`,
      M`x-3=5\quad\lor\quad x-3=-5`,
      M`x=8\quad\lor\quad x=-2`,
      M`|8-3|=5`,
      M`|-2-3|=5`
    ],
    warning:
      "Модульді жай алып тастап бір ғана түбір табу — қате. Екі жағдайды қарастыру керек."
  },

  {
    title: "Модулі бар теңсіздіктер: кіші",
    definition:
      "Егер модульдің мәні оң саннан кіші болса, модуль ішіндегі өрнек сол санның теріс мәні мен оң мәнінің арасында жатады.",
    explain:
      "Мысалы, x минус үш өрнегінің модулі бестен кіші болсын. Бұл x саны үш нүктесінен бес бірліктен аз қашықтықта орналасқан дегенді білдіреді. Сан осінде бұл минус екі мен сегіздің аралығы. Мұндай теңсіздікті қос теңсіздікке айналдырамыз: минус бес x минус үштен кіші, ал x минус үш бестен кіші болуы керек. Үш санын барлық бөлікке қоссақ, минус екі x-тен кіші және x сегізден кіші болады.",
    rule:
      "Модуль кіші таңбасымен берілсе, шекаралар арасындағы ортақ аралық алынады. Қатаң теңсіздікте шекаралар кірмейді.",
    formula:
      M`|A(x)|<b\iff-b<A(x)<b,\qquad b>0`,
    steps: [
      M`|x-3|<5`,
      M`-5<x-3<5`,
      M`-2<x<8`,
      M`x\in(-2;8)`
    ],
    warning:
      "Модуль кіші болғанда екі бөлек сыртқы аралықты емес, ортадағы аралықты аламыз."
  },

  {
    title: "Модулі бар теңсіздіктер: үлкен",
    definition:
      "Егер модульдің мәні оң саннан үлкен болса, модуль ішіндегі өрнек сол саннан үлкен немесе оның қарама-қарсы мәнінен кіші болады.",
    explain:
      "Мысалы, x минус екі өрнегінің модулі төрттен үлкен болсын. Бұл x саны екі нүктесінен төрт бірліктен артық қашықтықта орналасқанын білдіреді. Сан осінде екі жақтағы сыртқы аралықтар алынады. Бірінші жағдай: x минус екі төрттен үлкен, осыдан x алтыдан үлкен. Екінші жағдай: x минус екі минус төрттен кіші, осыдан x минус екіден кіші. Сондықтан жауап екі бөлек аралықтың бірігуі болады.",
    rule:
      "Модуль үлкен таңбасымен берілсе, екі жағдайдың бірігуін жазамыз. Теңдік белгісі болса, жарамды шекаралар кіреді.",
    formula:
      M`|A(x)|>b\iff A(x)<-b\ \lor\ A(x)>b,\qquad b\ge0`,
    steps: [
      M`|x-2|>4`,
      M`x-2<-4\quad\lor\quad x-2>4`,
      M`x<-2\quad\lor\quad x>6`,
      M`x\in(-\infty;-2)\cup(6;+\infty)`
    ],
    warning:
      "Үлкен таңбасы бар теңсіздікте аралықтарды біріктіреміз. Оларды бір ғана ортақ аралыққа айналдыруға болмайды."
  },

  {
    title: "Модульдік жүйелер және жағдайлар әдісі",
    definition:
      "Модульдік теңсіздіктер жүйесінің шешімі әр теңсіздіктің шешімдер жиынының қиылысуы арқылы табылады. Күрделі модульдік өрнектерді модуль ішіндегі өрнектің таңбасына қарай жағдайларға да бөлуге болады.",
    explain:
      "Мысалы, x минус екі өрнегінің модулі төрттен кіші немесе тең және x саны нөлден үлкен болсын. Бірінші теңсіздік минус екі мен алты арасындағы жабық аралықты береді. Екінші теңсіздік x нөлден үлкен екенін білдіреді. Екеуінің ортақ бөлігі нөлден үлкен және алтыдан кіші немесе тең болады. Мұндай есептерде әр теңсіздікті жеке шығарып, сан осінде қиылысуын көрсету өте ыңғайлы. Егер екі модульді өрнек қосылса, олардың ішіндегі өрнектердің нөлдерін тауып, аралықтарға бөлу қажет.",
    rule:
      "Алдымен барлық теңсіздікті жеке шешеміз. Кейін шешімдерінің ортақ бөлігін аламыз.",
    formula:
      M`\begin{cases}|x-2|\le4\\x>0\end{cases}`,
    steps: [
      M`-4\le x-2\le4`,
      M`-2\le x\le6`,
      M`x>0`,
      M`0<x\le6`,
      M`x\in(0;6]`
    ],
    warning:
      "Теңсіздіктер жүйесінде бірігу мен қиылысуды шатастырмаңдар."
  }
];

// ===================================================
// 10 КОНСПЕКТ, 20 ӨЗІНДІК ЕСЕП
// ===================================================

function makeNote(title,text,formula,example,a,b){
  return {title,text,formula,example,self:[a,b]};
}

function exercise(q,steps,answer){
  return {q,steps,answer};
}

const notes = [
  makeNote(
    "Санның модулі",
    "Модуль санның нөлден қашықтығын білдіреді. Оң сан өзгермейді, теріс сан оң мәнге айналады. Нөлдің модулі нөлге тең.",
    M`|x|=\begin{cases}x,&x\ge0\\-x,&x<0\end{cases}`,
    [M`|-7|=7`,M`|4|=4`,M`|0|=0`],
    exercise(M`|-12|+|3|`,[M`12+3`],M`15`),
    exercise(M`|2-9|`,[M`|-7|`],M`7`)
  ),
  makeNote(
    "Модульдік теңдеудің екі түбірі",
    "Оң санға тең модульдік теңдеу әдетте екі жағдайға бөлінеді. Бір жағдайда ішкі өрнек оң тұрақтыға, екінші жағдайда теріс тұрақтыға тең.",
    M`|A(x)|=b\Rightarrow A(x)=b\ \lor\ A(x)=-b`,
    [M`|x|=6`,M`x=6\quad\lor\quad x=-6`],
    exercise(M`|x|=9`,[M`x=9\lor x=-9`],M`x=-9,\quad x=9`),
    exercise(M`|x-4|=3`,[M`x-4=3\lor x-4=-3`],M`x=1,\quad x=7`)
  ),
  makeNote(
    "Модулі нөлге тең теңдеу",
    "Модуль нөлге тең болуы үшін оның ішіндегі өрнек нөлге тең болуы керек. Ал модуль теріс санға тең бола алмайды.",
    M`|A(x)|=0\iff A(x)=0`,
    [M`|x+5|=0`,M`x+5=0`,M`x=-5`],
    exercise(M`|2x-6|=0`,[M`2x-6=0`],M`x=3`),
    exercise(M`|x+2|=-4`,[M`|x+2|\ge0`],M`\varnothing`)
  ),
  makeNote(
    "Модульдің кіші теңсіздігі",
    "Модуль оң тұрақтыдан кіші болса, ішкі өрнек сол санның теріс және оң мәндерінің арасында орналасады. Жауап бір аралық болады.",
    M`|A(x)|<b\iff-b<A(x)<b`,
    [M`|x|<5`,M`-5<x<5`],
    exercise(M`|x|<7`,[M`-7<x<7`],M`x\in(-7;7)`),
    exercise(M`|x-2|<4`,[M`-4<x-2<4`],M`x\in(-2;6)`)
  ),
  makeNote(
    "Модульдің кіші немесе тең теңсіздігі",
    "Модуль тұрақтыдан кіші немесе тең болса, шекара нүктелері де шешімге кіреді. Сондықтан жабық аралық қолданылады.",
    M`|A(x)|\le b\iff-b\le A(x)\le b`,
    [M`|x+1|\le3`,M`-3\le x+1\le3`,M`-4\le x\le2`],
    exercise(M`|x|\le4`,[M`-4\le x\le4`],M`x\in[-4;4]`),
    exercise(M`|x-5|\le2`,[M`-2\le x-5\le2`],M`x\in[3;7]`)
  ),
  makeNote(
    "Модульдің үлкен теңсіздігі",
    "Модуль тұрақтыдан үлкен болса, шешім екі бөлек сыртқы аралық болады. Оларды бірігу таңбасымен жазамыз.",
    M`|A(x)|>b\iff A(x)<-b\ \lor\ A(x)>b`,
    [M`|x|>3`,M`x<-3\lor x>3`],
    exercise(M`|x|>6`,[M`x<-6\lor x>6`],M`(-\infty;-6)\cup(6;+\infty)`),
    exercise(M`|x-1|>4`,[M`x<-3\lor x>5`],M`(-\infty;-3)\cup(5;+\infty)`)
  ),
  makeNote(
    "Модульдің үлкен немесе тең теңсіздігі",
    "Үлкен немесе тең таңбасында екі сыртқы аралық сақталады, бірақ шекаралар шешімге кіреді. Модуль теріс емес болғандықтан, кей теңсіздіктер барлық нақты сандарда орындалады.",
    M`|A(x)|\ge b\iff A(x)\le-b\ \lor\ A(x)\ge b`,
    [M`|x|\ge2`,M`x\le-2\lor x\ge2`],
    exercise(M`|x-3|\ge5`,[M`x-3\le-5\lor x-3\ge5`],M`(-\infty;-2]\cup[8;+\infty)`),
    exercise(M`|x+2|\ge0`,[M`|x+2|\ge0`],M`\mathbb R`)
  ),
  makeNote(
    "Коэффициенті бар модульдік теңдеу",
    "Модульдің ішінде 2x, 3x немесе басқа сызықтық өрнек болса, екі жағдайды жеке шешеміз. Модуль алдындағы сан болса, алдымен сол санға бөлеміз.",
    M`|ax+b|=c`,
    [M`|2x-4|=6`,M`2x-4=6\lor 2x-4=-6`,M`x=5\lor x=-1`],
    exercise(M`|3x-6|=9`,[M`3x-6=9\lor 3x-6=-9`],M`x=-1,\quad x=5`),
    exercise(M`2|x-1|=8`,[M`|x-1|=4`],M`x=-3,\quad x=5`)
  ),
  makeNote(
    "Екі модульді өрнекті салыстыру",
    "Екі модуль салыстырылғанда оларды квадраттау кейде тиімді. Екі жақ та теріс емес болса, квадраттаудан теңсіздіктің бағыты өзгермейді.",
    M`|x-a|<|x-b|\iff(x-a)^2<(x-b)^2`,
    [M`|x-1|<|x-5|`,M`(x-1)^2<(x-5)^2`,M`x<3`],
    exercise(M`|x-2|<|x-6|`,[M`(x-2)^2<(x-6)^2`],M`x<4`),
    exercise(M`|x+1|>|x-3|`,[M`(x+1)^2>(x-3)^2`],M`x>1`)
  ),
  makeNote(
    "Модульдік теңсіздіктер жүйесі",
    "Жүйенің әр теңсіздігін жеке шешеміз. Содан кейін олардың ортақ шешімін анықтаймыз. Қатаң теңсіздіктерде шекаралар кірмейді.",
    M`\begin{cases}|x|\le5\\x>1\end{cases}`,
    [M`-5\le x\le5`,M`x>1`,M`1<x\le5`],
    exercise(M`\begin{cases}|x-2|<5\\x\ge0\end{cases}`,[M`-3<x<7`,M`x\ge0`],M`x\in[0;7)`),
    exercise(M`\begin{cases}|x+1|\le4\\x<1\end{cases}`,[M`-5\le x\le3`,M`x<1`],M`x\in[-5;1)`)
  )
];

// ===================================================
// 4 ДЕҢГЕЙ — 20 ТАПСЫРМА
// ===================================================

function task(q,options,correct,steps){
  return {q,options,correct,steps};
}

const levels = [
  {
    name:"I деңгей — Жеңіл",
    points:5,
    tasks:[
      task(M`|x|=5`,
        ["x = 5","x = −5","x = −5 немесе 5","Шешімі жоқ"],2,
        [M`x=5\lor x=-5`]),
      task(M`|x|=0`,
        ["x = 0","x = 1","x = −1","Барлық x"],0,
        [M`|x|=0\Rightarrow x=0`]),
      task(M`|x-2|=3`,
        ["x = 5","x = −1 және 5","x = −5 және 1","x = 1"],1,
        [M`x-2=\pm3`,M`x=-1\lor x=5`]),
      task(M`|x+4|=2`,
        ["x = 2","x = −2","x = −4","x = −6 және −2"],3,
        [M`x+4=2\lor x+4=-2`,M`x=-2\lor x=-6`]),
      task(M`|2x|=8`,
        ["x = 4","x = −4","x = −4 немесе 4","x = 8"],2,
        [M`2x=8\lor 2x=-8`,M`x=-4\lor x=4`])
    ]
  },
  {
    name:"II деңгей — Орташа",
    points:10,
    tasks:[
      task(M`|x|<4`,
        ["−4 < x < 4","x < −4 немесе x > 4","−4 ≤ x ≤ 4","x > 4"],0,
        [M`-4<x<4`]),
      task(M`|x-3|\le2`,
        ["−1 ≤ x ≤ 5","1 ≤ x ≤ 5","1 < x < 5","x ≤ 1 немесе x ≥ 5"],1,
        [M`-2\le x-3\le2`,M`1\le x\le5`]),
      task(M`|x+1|>3`,
        ["−4 < x < 2","x ≤ −4 немесе x ≥ 2","x < −4 немесе x > 2","x > 2"],2,
        [M`x+1<-3\lor x+1>3`,M`x<-4\lor x>2`]),
      task(M`|2x-4|=6`,
        ["x = −1","x = 5","x = −5 және 1","x = −1 және 5"],3,
        [M`2x-4=6\lor2x-4=-6`,M`x=-1\lor x=5`]),
      task(M`|x|=-2`,
        ["Шешімі жоқ","x = −2","x = 2","x = ±2"],0,
        [M`|x|\ge0`,M`\varnothing`])
    ]
  },
  {
    name:"III деңгей — Қиын",
    points:15,
    tasks:[
      task(M`2|x-1|=8`,
        ["x = −4 және 4","x = −3 және 5","x = 3 және 5","x = −3"],1,
        [M`|x-1|=4`,M`x=-3\lor x=5`]),
      task(M`|3x-6|\le9`,
        ["−5 ≤ x ≤ 5","−1 < x < 5","−1 ≤ x ≤ 5","x ≤ −1 немесе x ≥ 5"],2,
        [M`-9\le3x-6\le9`,M`-1\le x\le5`]),
      task(M`|x-2|\ge5`,
        ["−3 < x < 7","x ≤ −3","x ≥ 7","x ≤ −3 немесе x ≥ 7"],3,
        [M`x-2\le-5\lor x-2\ge5`,M`x\le-3\lor x\ge7`]),
      task(M`|x-1|<|x-5|`,
        ["x < 3","x > 3","x ≤ 3","x < 6"],0,
        [M`(x-1)^2<(x-5)^2`,M`8x<24`,M`x<3`]),
      task(M`|x+2|=|x-4|`,
        ["x = −1","x = 1","x = 3","Шешімі жоқ"],1,
        [M`(x+2)^2=(x-4)^2`,M`12x=12`,M`x=1`])
    ]
  },
  {
    name:"IV деңгей — Өте қиын",
    points:20,
    tasks:[
      task(M`\begin{cases}|x-2|\le4\\x>0\end{cases}`,
        ["−2 ≤ x ≤ 6","0 ≤ x ≤ 6","0 < x ≤ 6","x > 6"],2,
        [M`-2\le x\le6`,M`x>0`,M`0<x\le6`]),
      task(M`|x-3|+|x+1|=4`,
        ["x = −1 немесе 3","x < −1 немесе x > 3","x = 1","−1 ≤ x ≤ 3"],3,
        [M`x<-1\Rightarrow 2-2x>4`,
         M`-1\le x\le3\Rightarrow |x-3|+|x+1|=4`,
         M`x>3\Rightarrow 2x-2>4`,
         M`-1\le x\le3`]),
      task(M`|x-2|+|x+2|=6`,
        ["x = −3 немесе 3","−2 ≤ x ≤ 2","x = −6 немесе 6","Шешімі жоқ"],0,
        [M`x\le-2:\ -2x=6\Rightarrow x=-3`,
         M`-2\le x\le2:\ |x-2|+|x+2|=4`,
         M`x\ge2:\ 2x=6\Rightarrow x=3`]),
      task(M`\begin{cases}|x+1|<4\\|x-2|\le3\end{cases}`,
        ["−3 < x < 5","−1 ≤ x < 3","−1 < x ≤ 3","−3 < x ≤ 5"],2,
        [M`-5<x<3`,M`-1\le x\le5`,M`-1\le x<3`]),
      task(M`||x|-3|=1`,
        ["x = −4 немесе 4","x = −2 немесе 2",
         "x = −3, −1, 1, 3","x = −4, −2, 2, 4"],3,
        [M`|x|-3=1\lor |x|-3=-1`,
         M`|x|=4\lor |x|=2`,
         M`x=-4,-2,2,4`])
    ]
  }
];

// ===================================================
// 15 КОМАНДАЛЫҚ СҰРАҚ
// ===================================================

const quiz = [
  {q:"Модуль нені білдіреді?",a:["Санның квадраты","Нөлден қашықтық","Санның түбірі","Санның дәрежесі"],c:1},
  {q:"|−7| мәні?",a:["7","−7","0","14"],c:0},
  {q:"|x| = 5 теңдеуінің түбірлері?",a:["Тек 5","Тек −5","−5 және 5","Шешімі жоқ"],c:2},
  {q:"|x| = −3 теңдеуінің шешімі?",a:["3","−3","0","Шешімі жоқ"],c:3},
  {q:"|x| < 4 теңсіздігінің жауабы?",a:["x > 4","−4 < x < 4","x ≤ −4","x ≥ 4"],c:1},
  {q:"|x| > 2 теңсіздігі нені береді?",a:["x < −2 немесе x > 2","−2 < x < 2","x = ±2","Барлық x"],c:0},
  {q:"|x−3| = 0 болса, x нешеге тең?",a:["0","−3","3","6"],c:2},
  {q:"|x+2| = 3 теңдеуінің түбірлері?",a:["−2 және 3","−3 және 3","−2 және 1","−5 және 1"],c:3},
  {q:"|x| ≤ 3 аралығы?",a:["(−3;3)","[−3;3]","x > 3","x < −3"],c:1},
  {q:"|x−4| < 2 шешімі?",a:["2 < x < 6","x < 2 немесе x > 6","2 ≤ x ≤ 6","x > 6"],c:0},
  {q:"|x| ≥ 0 теңсіздігі?",a:["Тек оң сандар","Тек нөл","Барлық нақты сандар","Шешімі жоқ"],c:2},
  {q:"|x−1| > 3 шешімі?",a:["−2 < x < 4","−2 ≤ x ≤ 4","x > 4","x < −2 немесе x > 4"],c:3},
  {q:"Модуль теңсіздіктер жүйесінде не табамыз?",a:["Бірігуін","Қиылысуын","Көбейтіндісін","Қосындысын"],c:1},
  {q:"|2x| = 6 теңдеуінің түбірлері?",a:["−3 және 3","−6 және 6","0 және 3","Тек 3"],c:0},
  {q:"||x|−2| = 0 теңдеуінің түбірлері?",a:["Тек 2","Тек −2","−2 және 2","0"],c:2}
];

// ===================================================
// ҮЙ ЖҰМЫСЫ
// ===================================================

const homework = [
  {
    title:"1. Модульдік теңдеулер",
    text:"Үш теңдеуді дәптерге толық шығарыңдар. Әр теңдеуді жағдайларға бөліп шешіңдер, барлық түбірін бастапқы теңдеуге қойып тексеріңдер.",
    formulas:[
      M`|2x-7|=9`,
      M`|3x+4|=8`,
      M`||x|-5|=2`
    ]
  },
  {
    title:"2. Модульдік теңсіздіктер мен жүйелер",
    text:"Теңсіздіктерді шешіп, жауаптарын сан аралығы түрінде жазыңдар. Жүйеде жеке шешімдердің қиылысуын анықтаңдар.",
    formulas:[
      M`|x+3|<6`,
      M`|2x-1|\ge5`,
      M`\begin{cases}|x-2|\le6\\x>-1\end{cases}`
    ]
  },
  {
    title:"3. Шығармашылық түсіндіру",
    text:"«Модуль — сан осіндегі қашықтық» тақырыбында 8–10 сөйлемдік түсіндірме жазыңдар. Модуль теңдеуі мен теңсіздігінің айырмашылығын салыстырып, бір мысалды тақтада қорғаңдар.",
    formulas:[
      M`|x-a|=b`,
      M`|x-a|<b`,
      M`|x-a|>b`
    ]
  }
];

// ===================================================
// §22 — ИНТЕРФЕЙС ЖӘНЕ БАСҚАРУ
// ===================================================

// IV деңгейдің 4-есебінде дұрыс аралық:
// -1 ≤ x < 3
levels[3].tasks[3].options[2] = "−1 ≤ x < 3";

// ===================================================
// 37 СЛАЙД
// ===================================================

const slides = [{type:"intro",title:"Кіріспе"}];

theory.forEach((_,i)=>{
  slides.push({
    type:"theory",index:i,title:`Түсіндірме ${i+1}`
  });
});

notes.forEach((_,i)=>{
  slides.push({
    type:"note",index:i,title:`Конспект ${i+1}`
  });
});

levels.forEach((_,i)=>{
  slides.push({
    type:"level",index:i,title:`${i+1}-деңгей`
  });
});

quiz.forEach((_,i)=>{
  slides.push({
    type:"game",index:i,
    title:`${i%3+1}-топ • ${i+1}-сұрақ`
  });
});

slides.push(
  {type:"homework",title:"Үй жұмысы"},
  {type:"finish",title:"Қорытынды"}
);

// ===================================================
// САЙТ КҮЙІ
// ===================================================

let page=0;
let individualScore=0;
let teamScores=[0,0,0];

const levelAnswers=new Map();
const gameAnswers=new Map();

const TOTAL_SECONDS=4800;
let remainingSeconds=TOTAL_SECONDS;
let timerID=null;
let deadline=0;

// ===================================================
// HTML ЖӘНЕ ФОРМУЛАЛАРДЫ ҚОРҒАУ
// ===================================================

function safe(value){
  return String(value).replace(/[&<>"']/g,c=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[c]);
}

function math(tex){
  return `<div class="math" data-tex="${
    encodeURIComponent(String(tex))
  }"></div>`;
}

let formulaVersion=0;
let formulaQueue=Promise.resolve();

// Формула жасырын тұрса, ашылған кезде ғана
// SVG-ға айналады. Бұл ресурсты үнемдейді.

function drawFormulas(){
  const version=++formulaVersion;

  const elements=[
    ...$("content").querySelectorAll(".math[data-tex]")
  ].filter(el=>!el.closest("[hidden]"));

  elements.forEach(el=>{
    el.textContent=decodeURIComponent(el.dataset.tex);
    el.classList.add("fallback");
  });

  formulaQueue=formulaQueue.then(async()=>{
    if(!window.MathJax)return;

    await MathJax.startup.promise;

    if(typeof MathJax.tex2svgPromise!=="function"){
      return;
    }

    for(const el of elements){
      if(version!==formulaVersion || !el.isConnected)return;

      const encoded=el.getAttribute("data-tex");
      if(!encoded)continue;

      const tex=decodeURIComponent(encoded);

      try{
        const node=await MathJax.tex2svgPromise(
          tex,{display:true}
        );

        if(version!==formulaVersion || !el.isConnected)return;

        el.replaceChildren(node);
        el.classList.remove("fallback");
        el.removeAttribute("data-tex");

      }catch(error){
        el.textContent=tex;
        el.classList.add("fallback");
        console.warn("Формула қатесі:",tex,error);
      }
    }
  }).catch(error=>{
    console.warn("MathJax қатесі:",error);
  });
}

// ===================================================
// КАРТОЧКАЛАР
// ===================================================

function card(color,title,body){
  return `<section class="card ${color}">
    <h3>${safe(title)}</h3>
    ${body}
  </section>`;
}

function stepsHTML(items){
  return items.map((s,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${math(s)}
    </div>
  `).join("");
}

function selfHTML(items,index){
  return items.map((t,i)=>{
    const id=`self_${index}_${i}`;

    return `<section class="self-task">
      <h3>✏️ ${i+1}-өзіндік есеп</h3>
      ${math(t.q)}
      <p>Алдымен дәптерге шешіңдер.</p>

      <button class="action" data-toggle="${id}">
        Шешу жолын көрсету
      </button>

      <div class="solution" id="${id}" hidden>
        ${stepsHTML(t.steps)}
        <h3>Дұрыс жауап</h3>
        ${math(t.answer)}
      </div>
    </section>`;
  }).join("");
}

// ===================================================
// КІРІСПЕ
// ===================================================

function introHTML(){
  return `<div class="slide">
    <div class="eyebrow">МАТЕМАТИКА • 1 КУРС • 80 МИНУТ</div>

    <h1 class="gradient">§22. ${safe(lesson.title)}</h1>

    ${card("blue","Сабақ мақсаты",`
      <p>${safe(lesson.goal)}</p>
    `)}

    ${card("gold","Модуль теңдеуі",math(
      M`|x-a|=b`
    ))}

    ${card("purple","Модуль теңсіздігі",math(
      M`|x-a|<b`
    ))}

    ${card("green","Сабақ мазмұны",`
      <p>5 толық түсіндірме</p>
      <p>10 конспект және 20 өзіндік есеп</p>
      <p>4 деңгейдегі 20 тапсырма</p>
      <p>3 топқа 15 командалық сұрақ</p>
      <p>Үй жұмысы және қорытынды</p>
    `)}

    ${card("blue","80 минуттық жоспар",`
      <p>Кіріспе — 5 минут</p>
      <p>Түсіндірме — 20 минут</p>
      <p>Конспект — 15 минут</p>
      <p>Деңгейлік есептер — 20 минут</p>
      <p>Командалық ойын — 15 минут</p>
      <p>Үй жұмысы және қорытынды — 5 минут</p>
    `)}
  </div>`;
}

// ===================================================
// ТЕОРИЯ ЖӘНЕ КОНСПЕКТ
// ===================================================

function theoryHTML(i){
  const t=theory[i];

  return `<div class="slide">
    <div class="eyebrow">ТҮСІНДІРМЕ ${i+1} / 5</div>
    <h2>${safe(t.title)}</h2>
    ${card("blue","Анықтама",`<p>${safe(t.definition)}</p>`)}
    ${card("purple","Толық түсіндірме",`<p>${safe(t.explain)}</p>`)}
    ${card("green","Негізгі ереже",`<p>${safe(t.rule)}</p>`)}
    ${card("gold","Формула",math(t.formula))}
    ${card("green","Шығарылған мысал",stepsHTML(t.steps))}
    ${card("red","Маңызды ескерту",`<p>${safe(t.warning)}</p>`)}
  </div>`;
}

function noteHTML(i){
  const n=notes[i];

  return `<div class="slide">
    <div class="eyebrow">КОНСПЕКТ ${i+1} / 10</div>
    <h2>${safe(n.title)}</h2>

    <div class="notebook">
      <h3>✍ Дәптерге жазып алыңдар</h3>
      <p>${safe(n.text)}</p>
    </div>

    ${card("gold","Формула",math(n.formula))}
    ${card("green","Шығарылған мысал",stepsHTML(n.example))}

    <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>
    <h2>Екі есеп</h2>
    ${selfHTML(n.self,i)}
  </div>`;
}

// ===================================================
// ДЕҢГЕЙЛІК ЕСЕПТЕР
// ===================================================

function levelHTML(i){
  const level=levels[i];

  return `<div class="slide">
    <div class="eyebrow">ДЕҢГЕЙ ${i+1} / 4</div>
    <h2>📐 ${safe(level.name)}</h2>

    <div class="level-header">
      <span>5 есеп</span>
      <span>Дұрыс жауап: +${level.points} ұпай</span>
    </div>

    <p>Есепті дәптерге шығарып, дұрыс нұсқаны таңдаңдар.</p>

    <div class="level-grid">
      ${level.tasks.map((t,j)=>{
        const key=`${i}_${j}`;
        const saved=levelAnswers.get(key);

        return `<section class="level-task">
          <h3>${j+1}-есеп</h3>
          ${math(t.q)}

          <div class="answers">
            ${t.options.map((answer,k)=>{
              let cls="";
              if(saved!==undefined){
                if(k===t.correct)cls="correct";
                else if(k===saved)cls="wrong";
              }

              return `<button
                data-task="${key}"
                data-option="${k}"
                class="${cls}"
                ${saved!==undefined?"disabled":""}>
                ${"ABCD"[k]}. ${safe(answer)}
              </button>`;
            }).join("")}
          </div>

          <p class="feedback ${
            saved===t.correct?"correct":""
          }">
            ${saved===undefined
              ?"Дұрыс нұсқаны таңдаңдар."
              :saved===t.correct
                ?`✓ Дұрыс! +${level.points} ұпай`
                :"Қате. Дұрыс нұсқа белгіленді."}
          </p>

          <button class="action"
            data-toggle="solution_${key}">
            Шешу жолын көрсету
          </button>

          <div class="solution" id="solution_${key}" hidden>
            ${stepsHTML(t.steps)}
            <h3>Дұрыс жауап</h3>
            <p>${safe(t.options[t.correct])}</p>
          </div>
        </section>`;
      }).join("")}
    </div>
  </div>`;
}

// ===================================================
// КОМАНДАЛЫҚ ОЙЫН
// ===================================================

function gameHTML(i){
  const q=quiz[i];
  const team=i%3;
  const chosen=gameAnswers.get(i);

  return `<div class="slide">
    <div class="eyebrow">ТОПТЫҚ ОЙЫН ${i+1} / 15</div>
    <h2>🏆 ${team+1}-топ жауап береді</h2>

    <div class="scores">
      ${teamScores.map((v,j)=>`
        <div class="team ${team===j?"current":""}">
          ${j+1}-топ <strong>${v}</strong>
        </div>
      `).join("")}
    </div>

    ${card("gold",`${i+1}-сұрақ`,`
      <p>${safe(q.q)}</p>
      <div class="answers">
        ${q.a.map((answer,k)=>{
          let cls="";
          if(chosen!==undefined){
            if(k===q.c)cls="correct";
            else if(k===chosen)cls="wrong";
          }

          return `<button data-choice="${k}" class="${cls}"
            ${chosen!==undefined?"disabled":""}>
            ${"ABCD"[k]}. ${safe(answer)}
          </button>`;
        }).join("")}
      </div>

      <p>${chosen===undefined
        ?"Төрт жауаптың біреуін таңдаңдар."
        :chosen===q.c
          ?"✓ Дұрыс! +10 ұпай."
          :"Дұрыс жауап: "+safe(q.a[q.c])}
      </p>
    `)}

    ${card("blue","Ойын ережесі",`
      <p>Кезек: 1-топ → 2-топ → 3-топ.</p>
      <p>Дұрыс жауапқа 10 ұпай беріледі.</p>
      <p>Жауап бергеннен кейін «Келесі» батырмасын басыңдар.</p>
    `)}
  </div>`;
}

// ===================================================
// ҮЙ ЖҰМЫСЫ
// ===================================================

function homeworkHTML(){
  return `<div class="slide">
    <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
    <h2>📚 Үй жұмысы</h2>

    ${homework.map((h,i)=>card(
      ["blue","gold","green"][i],
      h.title,
      `<p>${safe(h.text)}</p>`+
      h.formulas.map(math).join("")
    )).join("")}
  </div>`;
}

// ===================================================
// ҚОРЫТЫНДЫ
// ===================================================

function finishHTML(){
  const max=Math.max(...teamScores);
  const finished=gameAnswers.size===quiz.length;
  const winners=teamScores
    .map((v,i)=>v===max?`${i+1}-топ`:null)
    .filter(Boolean);

  const correctLevels=[...levelAnswers].filter(([key,answer])=>{
    const [i,j]=key.split("_").map(Number);
    return answer===levels[i].tasks[j].correct;
  }).length;

  return `<div class="slide">
    <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>
    <h1 class="gradient">Сабақ аяқталды!</h1>

    <div class="scores">
      ${teamScores.map((v,i)=>`
        <div class="team">${i+1}-топ<strong>${v}</strong></div>
      `).join("")}
    </div>

    ${card("green","Командалық ойын",`
      <p>Жауап берілген сұрақтар: ${gameAnswers.size}/15</p>
      <p>${finished
        ?winners.join(", ")+(winners.length===1
          ?" — жеңімпаз!":" — тең ұпай жинады!")
        :"Ойын әлі толық аяқталмаған."}
      </p>
    `)}

    ${card("blue","Деңгейлік тапсырмалар",`
      <p>Жауап берілген есептер: ${levelAnswers.size}/20</p>
      <p>Дұрыс жауаптар: ${correctLevels}/20</p>
      <p>Жеке ұпай: ${individualScore}</p>
    `)}

    ${card("gold","Бүгін не үйрендік?",`
      <p>Сан модулінің анықтамасын меңгердік.</p>
      <p>Модуль теңдеулерін екі жағдайға бөлдік.</p>
      <p>Модуль теңсіздіктерінің аралықтарын таптық.</p>
      <p>Бірігу және қиылысу амалдарын ажыраттық.</p>
      <p>Жүйелерді шешуді үйрендік.</p>
    `)}

    <h2>Сау болыңыздар!</h2>
  </div>`;
}

// ===================================================
// СЛАЙДТАРДЫ КӨРСЕТУ
// ===================================================

function updateScore(){
  $("totalScore").textContent=
    individualScore+teamScores.reduce((s,v)=>s+v,0);
}

function render(){
  const s=slides[page];
  formulaVersion++;

  const views={
    intro:()=>introHTML(),
    theory:()=>theoryHTML(s.index),
    note:()=>noteHTML(s.index),
    level:()=>levelHTML(s.index),
    game:()=>gameHTML(s.index),
    homework:()=>homeworkHTML(),
    finish:()=>finishHTML()
  };

  $("content").innerHTML=views[s.type]();
  $("content").scrollTop=0;

  $("pageCounter").textContent=
    `${page+1} / ${slides.length}`;
  $("pageTitle").textContent=s.title;

  $("pageProgress").style.width=
    `${(page+1)/slides.length*100}%`;

  $("prevPage").disabled=page===0;
  $("nextPage").disabled=page===slides.length-1;

  document.querySelectorAll("[data-section]")
    .forEach(btn=>{
      btn.classList.toggle(
        "active",btn.dataset.section===s.type
      );
    });

  updateScore();
  drawFormulas();
}

// ===================================================
// НАВИГАЦИЯ
// ===================================================

$("nextPage").addEventListener("click",()=>{
  if(page<slides.length-1){page++;render();}
});

$("prevPage").addEventListener("click",()=>{
  if(page>0){page--;render();}
});

document.querySelectorAll("[data-section]")
  .forEach(btn=>{
    btn.addEventListener("click",()=>{
      const index=slides.findIndex(
        s=>s.type===btn.dataset.section
      );

      if(index>=0){
        page=index;
        render();
      }
    });
  });

// ===================================================
// БАТЫРМАЛАР
// ===================================================

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");

  if(toggle){
    const el=$(toggle.dataset.toggle);

    if(el){
      el.hidden=!el.hidden;
      if(!el.hidden)drawFormulas();
    }
    return;
  }

  const taskButton=event.target.closest("[data-task]");

  if(taskButton){
    const key=taskButton.dataset.task;

    if(levelAnswers.has(key))return;

    const answer=Number(taskButton.dataset.option);
    const [i,j]=key.split("_").map(Number);

    levelAnswers.set(key,answer);

    if(answer===levels[i].tasks[j].correct){
      individualScore+=levels[i].points;
    }

    render();
    return;
  }

  const choice=event.target.closest("[data-choice]");

  if(choice){
    const s=slides[page];

    if(s.type!=="game"||gameAnswers.has(s.index)){
      return;
    }

    const answer=Number(choice.dataset.choice);
    gameAnswers.set(s.index,answer);

    if(answer===quiz[s.index].c){
      teamScores[s.index%3]+=10;
    }

    render();
  }
});

// ===================================================
// ОЙЫНДЫ ЖАҢАРТУ
// ===================================================

$("resetGame").addEventListener("click",()=>{
  gameAnswers.clear();
  teamScores=[0,0,0];
  render();
});

// ===================================================
// ТОЛЫҚ ЭКРАН
// ===================================================

$("fullscreenBtn").addEventListener("click",async()=>{
  try{
    if(document.fullscreenElement){
      await document.exitFullscreen();
    }else{
      await document.documentElement.requestFullscreen();
    }
  }catch(error){
    console.warn("Толық экран қатесі:",error);
  }
});

// ===================================================
// 80 МИНУТТЫҚ ТАЙМЕР
// ===================================================

function formatTime(seconds){
  return String(Math.floor(seconds/60)).padStart(2,"0")
    +":"+String(seconds%60).padStart(2,"0");
}

function updateTimer(){
  $("remaining").textContent=formatTime(remainingSeconds);
  $("elapsed").textContent=
    formatTime(TOTAL_SECONDS-remainingSeconds);

  $("timeProgress").style.width=
    `${(TOTAL_SECONDS-remainingSeconds)/TOTAL_SECONDS*100}%`;
}

function pauseTimer(){
  if(timerID!==null){
    remainingSeconds=Math.max(
      0,Math.ceil((deadline-Date.now())/1000)
    );
    clearInterval(timerID);
    timerID=null;
    updateTimer();
  }
}

function startTimer(){
  if(timerID!==null||remainingSeconds<=0)return;

  deadline=Date.now()+remainingSeconds*1000;

  timerID=setInterval(()=>{
    remainingSeconds=Math.max(
      0,Math.ceil((deadline-Date.now())/1000)
    );

    updateTimer();

    if(remainingSeconds===0){
      clearInterval(timerID);
      timerID=null;
    }
  },250);
}

function resetTimer(){
  if(timerID!==null)clearInterval(timerID);
  timerID=null;
  remainingSeconds=TOTAL_SECONDS;
  updateTimer();
}

$("timerStart").addEventListener("click",startTimer);
$("timerPause").addEventListener("click",pauseTimer);
$("timerReset").addEventListener("click",resetTimer);

// ===================================================
// АЛМАТЫ САҒАТЫ
// ===================================================

function updateClock(){
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// ===================================================
// ЕКІ КАЛЬКУЛЯТОР
// ===================================================

const calcValues={basic:"",science:""};

const calcKeys={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  science:[
    "C","⌫","(",")",
    "sin","cos","tan","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ]
};

const calcMap={
  "×":"*","÷":"/","−":"-",
  "sin":"sin(","cos":"cos(",
  "tan":"tan(","ctg":"ctg(",
  "√":"sqrt(","∛":"cbrt(",
  "log":"log(","ln":"ln(",
  "π":"pi","x²":"^2","xʸ":"^"
};

function createCalculator(type){
  const grid=$("keys-"+type);
  grid.replaceChildren();

  calcKeys[type].forEach(key=>{
    const btn=document.createElement("button");
    btn.type="button";
    btn.textContent=key;

    if(key==="C")btn.classList.add("clear");
    if(key==="=")btn.classList.add("equal");

    if(["sin","cos","tan","ctg","log","ln"].includes(key)){
      btn.classList.add("trig");
    }

    if(["×","÷","−","+","√","∛","x²","xʸ"].includes(key)){
      btn.classList.add("op");
    }

    btn.addEventListener("click",()=>{
      pressCalculator(type,key);
    });

    grid.appendChild(btn);
  });
}

function pressCalculator(type,key){
  let value=calcValues[type];

  if(key==="C"){
    value="";
  }else if(key==="⌫"){
    value=value==="Қате"?"":value.slice(0,-1);
  }else if(key==="="){
    try{
      value=String(Number(calculate(value).toPrecision(12)));
    }catch(error){
      value="Қате";
    }
  }else{
    if(value==="Қате")value="";
    value+=calcMap[key]??key;
  }

  calcValues[type]=value;

  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// ===================================================
// ЕСЕПТЕУ ҚОЗҒАЛТҚЫШЫ
// eval() ПАЙДАЛАНЫЛМАЙДЫ
// ===================================================

function calculate(input){
  const source=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".")
    .replace(/−/g,"-")
    .replace(/×/g,"*")
    .replace(/÷/g,"/");

  let pos=0;
  const rad=x=>x*Math.PI/180;

  const funcs={
    sin:x=>Math.sin(rad(x)),
    cos:x=>Math.cos(rad(x)),
    tan:x=>{
      if(Math.abs(Math.cos(rad(x)))<1e-12){
        throw Error("Тангенс анықталмаған");
      }
      return Math.tan(rad(x));
    },
    ctg:x=>{
      if(Math.abs(Math.sin(rad(x)))<1e-12){
        throw Error("Котангенс анықталмаған");
      }
      return Math.cos(rad(x))/Math.sin(rad(x));
    },
    sqrt:x=>Math.sqrt(x),
    cbrt:x=>Math.cbrt(x),
    log:x=>Math.log10(x),
    ln:x=>Math.log(x)
  };

  function take(c){
    if(source[pos]===c){
      pos++;
      return true;
    }
    return false;
  }

  function atom(){
    if(take("(")){
      const value=expression();

      if(!take(")"))throw Error("Жақша жабылмаған");
      return value;
    }

    const rest=source.slice(pos);
    const number=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(number){
      pos+=number[0].length;
      return Number(number[0]);
    }

    for(const name of Object.keys(funcs)){
      if(rest.startsWith(name+"(")){
        pos+=name.length+1;

        const argument=expression();
        if(!take(")"))throw Error("Жақша жабылмаған");

        const result=funcs[name](argument);
        if(!Number.isFinite(result))throw Error("Анықталмаған");

        return result;
      }
    }

    if(rest.startsWith("pi")){
      pos+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")){
      pos++;
      return Math.E;
    }

    throw Error("Қате өрнек");
  }

  function postfix(){
    let v=atom();
    while(take("%"))v/=100;
    return v;
  }

  function power(){
    let v=postfix();
    if(take("^"))v=Math.pow(v,unary());
    return v;
  }

  function unary(){
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function term(){
    let v=unary();

    while(true){
      if(take("*")){
        v*=unary();
      }else if(take("/")){
        const d=unary();
        if(d===0)throw Error("Нөлге бөлу");
        v/=d;
      }else{
        break;
      }
    }
    return v;
  }

  function expression(){
    let v=term();

    while(true){
      if(take("+"))v+=term();
      else if(take("-"))v-=term();
      else break;
    }
    return v;
  }

  if(!source)throw Error("Бос өрнек");

  const result=expression();

  if(pos!==source.length||!Number.isFinite(result)){
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result)<1e-12?0:result;
}

// ===================================================
// КАЛЬКУЛЯТОРДЫ АШУ ЖӘНЕ ЖАБУ
// ===================================================

function toggleCalculator(type){
  const el=$("calc-"+type);
  const opening=!el.classList.contains("visible");

  el.classList.toggle("visible",opening);

  if(opening){
    const rect=el.getBoundingClientRect();
    const maxX=Math.max(0,innerWidth-el.offsetWidth);
    const maxY=Math.max(0,innerHeight-el.offsetHeight);

    el.style.left=
      Math.max(0,Math.min(maxX,rect.left))+"px";

    el.style.top=
      Math.max(0,Math.min(maxY,rect.top))+"px";
  }
}

$("basicOpen").addEventListener("click",()=>{
  toggleCalculator("basic");
});

$("scienceOpen").addEventListener("click",()=>{
  toggleCalculator("science");
});

document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $("calc-"+btn.dataset.close).classList.remove("visible");
  });
});

// ===================================================
// КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// ===================================================

function makeDraggable(el){
  const head=el.querySelector(".calc-head");
  let drag=null;

  head.addEventListener("pointerdown",event=>{
    if(event.target.closest("button"))return;
    if(event.pointerType==="mouse"&&event.button!==0)return;

    const rect=el.getBoundingClientRect();

    drag={
      id:event.pointerId,
      x:event.clientX,
      y:event.clientY,
      left:rect.left,
      top:rect.top
    };

    head.setPointerCapture(event.pointerId);
  });

  head.addEventListener("pointermove",event=>{
    if(!drag||event.pointerId!==drag.id)return;

    const maxX=Math.max(0,innerWidth-el.offsetWidth);
    const maxY=Math.max(0,innerHeight-el.offsetHeight);

    el.style.left=Math.max(0,Math.min(
      maxX,drag.left+event.clientX-drag.x
    ))+"px";

    el.style.top=Math.max(0,Math.min(
      maxY,drag.top+event.clientY-drag.y
    ))+"px";
  });

  head.addEventListener("pointerup",()=>drag=null);
  head.addEventListener("pointercancel",()=>drag=null);
}

// ===================================================
// БАСТАПҚЫ ТЕКСЕРУЛЕР
// ===================================================

function runChecks(){
  function test(ok,message){
    if(!ok)throw Error(message);
  }

  test(theory.length===5,"5 түсіндірме қажет");
  test(notes.length===10,"10 конспект қажет");
  test(notes.every(n=>n.self.length===2),
    "20 өзіндік есеп қажет");
  test(levels.length===4,"4 деңгей қажет");
  test(levels.every(l=>l.tasks.length===5),
    "20 деңгейлік есеп қажет");
  test(quiz.length===15,"15 ойын сұрағы қажет");
  test(slides.length===37,"37 слайд қажет");

  levels.forEach((level,i)=>{
    level.tasks.forEach((t,j)=>{
      test(t.options.length===4,
        `${i+1}-деңгей, ${j+1}-есепте 4 жауап қажет`);
      test(Number.isInteger(t.correct)&&
        t.correct>=0&&t.correct<4,
        `${i+1}-деңгей, ${j+1}-есеп индексі қате`);
    });
  });

  quiz.forEach((q,i)=>{
    test(q.a.length===4&&
      Number.isInteger(q.c)&&q.c>=0&&q.c<4,
      `${i+1}-ойын сұрағы қате`);
  });

  test(levels[3].tasks[3].options[2]==="−1 ≤ x < 3",
    "IV деңгей, 4-есеп жауабы қате");

  test(calculate("2^5")===32,"Дәреже қатесі");
  test(calculate("8/4")===2,"Бөлу қатесі");
  test(calculate("log(100)")===2,"log қатесі");
  test(calculate("ln(e)")===1,"ln қатесі");
  test(Math.abs(calculate("sin(30)")-0.5)<1e-10,
    "sin қатесі");

  const formulas=[
    ...theory.flatMap(t=>[t.formula,...t.steps]),
    ...notes.flatMap(n=>[
      n.formula,...n.example,
      ...n.self.flatMap(s=>[s.q,...s.steps,s.answer])
    ]),
    ...levels.flatMap(l=>l.tasks.flatMap(t=>[t.q,...t.steps])),
    ...homework.flatMap(h=>h.formulas)
  ];

  test(formulas.every(f=>typeof f==="string"),
    "Формула түрі қате");
  test(formulas.every(f=>!f.includes("\\boxed")),
    "Формулада бос төртбұрыш бар");

  console.log("§22: құрылымдық тексерулер орындалды.");
}

// ===================================================
// САЙТТЫ ІСКЕ ҚОСУ
// ===================================================

runChecks();
createCalculator("basic");
createCalculator("science");
makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));
updateTimer();
render();
