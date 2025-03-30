document.addEventListener("DOMContentLoaded", () => {
  // Кэширование DOM элементов
  const DOM = {
    splashText: document.getElementById("splashText"),
    playerName: document.getElementById("playerName"),
    result: document.getElementById("result"),
    suggestions: document.getElementById("suggestions"),
    notification: document.getElementById("notification"),
    checkButton: document.querySelector("button")
  };

  // Конфигурационные константы
  const CONFIG = {
    debounceDelay: 300,
    maxSuggestions: 10,
    checkDelay: 1000,
    notificationTimeout: 3000
  };

  const splashes = ["Папа comeback, выбиваю все двери Папа — champagne — поливаю всем fanny Папа so dirty, мне нужен Fairy"];

  // Инициализация приложения
  function init() {
    initSplashText();
    initEventListeners();
  }

  function initSplashText() {
    if (DOM.splashText) {
      DOM.splashText.textContent = getRandomElement(splashes);
    }
  }

  function initEventListeners() {
    if (DOM.playerName) {
      DOM.playerName.addEventListener("input", debounce(updateSuggestions, CONFIG.debounceDelay));
      DOM.playerName.addEventListener("keypress", (e) => {
        if (e.key === "Enter") checkBlacklist();
      });
    }

    if (DOM.checkButton) {
      DOM.checkButton.addEventListener("click", checkBlacklist);
    }
  }

  // Утилиты
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  // Анимации
  const applyAnimation = (element, animationName) => {
    if (!element) return;
    element.style.animation = `${animationName} 0.5s`;
    element.addEventListener(
      "animationend",
      () => (element.style.animation = ""),
      { once: true }
    );
  };

  // Уведомления
  const notificationQueue = [];
  let isNotificationShowing = false;

  const processNotificationQueue = () => {
    if (!notificationQueue.length || !DOM.notification) return;
    isNotificationShowing = true;
    
    const { message, callback } = notificationQueue.shift();
    DOM.notification.textContent = message;
    DOM.notification.style.visibility = "visible";
    DOM.notification.style.animation = "fadeInOut 3s";

    setTimeout(() => {
      DOM.notification.style.visibility = "hidden";
      isNotificationShowing = false;
      if (callback) callback();
      processNotificationQueue();
    }, CONFIG.notificationTimeout);
  };

  const showNotification = (message, callback) => {
    notificationQueue.push({ message, callback });
    if (!isNotificationShowing) processNotificationQueue();
  };

  // Конфетти
  const loadConfetti = () => {
    if (typeof confetti === "undefined") {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
      document.head.appendChild(script);
    }
  };

  const triggerConfetti = () => {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 658,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff0", "#f0f", "#0ff"],
        disableForReducedMotion: true
      });
    }
  };

  // Основная логика
  const checkBlacklist = () => {
    const name = DOM.playerName.value.trim().toLowerCase();
    
    showNotification("Запрос обрабатывается...", () => {
      if (!name) {
        showResult("Введите никнейм для проверки", "orange", "shake");
        return;
      }

      const isInList = blacklist.includes(name);
      const resultMessage = isInList 
        ? `${name}, поздравляем вы в ЧС!` 
        : `${name}, вы не в ЧС! Возможно вы сменили ник?`;

      showResult(resultMessage, isInList ? "red" : "green", isInList ? "shake" : "bounce");
      
      if (isInList) {
        triggerConfetti();
      }
    });
  };

  const showResult = (message, color, animation) => {
    if (DOM.result) {
      DOM.result.textContent = message;
      DOM.result.style.color = color;
      applyAnimation(DOM.result, animation);
    }
  };

  const updateSuggestions = () => {
    if (!DOM.suggestions || !DOM.playerName) return;
    
    const input = DOM.playerName.value.toLowerCase();
    DOM.suggestions.innerHTML = "";
    
    if (input.length > 0) {
      const matches = blacklist
        .filter(name => name.includes(input))
        .slice(0, CONFIG.maxSuggestions);

      matches.forEach(name => {
        const div = document.createElement("div");
        div.textContent = name;
        div.className = "suggestion-item";
        div.onclick = () => {
          DOM.playerName.value = name;
          DOM.suggestions.innerHTML = "";
        };
        DOM.suggestions.appendChild(div);
      });
    }
  };

  // Инициализация при загрузке
  loadConfetti();
  init();
});

// Чёрный список (нижний регистр)
const blacklist = [  "DrawingKruper",
  "MegaByte2H",
  "Plazzy_Tw",
  "railxuy",
  "Meruniti",
  "ligofff",
  "prosto_anandy",
  "4epyx__",
  "mistrMonstr",
  "_Venjam1n_",
  "SoFi4Ka_",
  "r0mb_ek",
  "Mrketchup8841",
  "spacekot",
  "NaItvInG",
  "Mamory",
  "Gigiretu",
  "vlady_y",
  "dogi_bb",
  "NotSnaker",
  "forfii",
  "Lanesh_",
  "l1n1ks",
  "voprosek",
  "kekish_",
  "Sauhuk",
  "n_15",
  "MopSsiK_Lapo4ka",
  "Shakoraze",
  "_Tecxas",
  "CAMOCYD",
  "VENOM_2011",
  "MaKenToshhh",
  "Ramzey_",
  "_pastich_",
  "Markowka_",
  "HukoJlau_06",
  "Mashukoo",
  "brookdluffy",
  "ZertinWard",
  "solumus_maximus",
  "Xinoki",
  "reaftie",
  "cpt_weedeye",
  "_LegaSyslik_",
  "MiloDer",
  "BanananT",
  "AsidSin",
  "Pronew_2019",
  "qweire",
  "raymccartan",
  "FOXyen",
  "0Sachalinec0",
  "masterskaya",
  "Coconut5364",
  "Nosicov",
  "CEKT0P",
  "Vampi_Is_Me",
  "Efreiter",
  "Homura128",
  "SnakeRuslan",
  "ky1nk1",
  "CyberKpblsa",
  "TimeSking",
  "alexpoint",
  "DanyaNeyk",
  "Molldyn",
  "Vocallolonik",
  "DKinchik",
  "prismerr",
  "Gorynych",
  "h1plex_my_kitten",
  "Tefynder",
  "monkey1447",
  "lobav",
  "Paxd1_",
  "Defenber",
  "srekko_f",
  "clownya57",
  "GEB0_",
  "EnoKast",
  "MerayFresh_",
  "Pax_Andronika",
  "AJleX57",
  "Kamandar",
  "TO_MUCH",
  "Vebstors",
  "SteamBuildier",
  "xligenda",
  "V00bz",
  "Hvani_femboy",
  "Alossser",
  "TPABOMAH_",
  "over144000",
  "Terendefloc",
  "lhijkb",
  "Nabuy",
  "firro17",
  "NeverLoveSky",
  "Lenyks",
  "analspazm",
  "HikaChinoowo",
  "Swino4ka",
  "opl69",
  "Forior",
  "_Kisel4ik_",
  "kriin_",
  "Mironelix",
  "CKyqp_B_nuBe",
  "Fristikon",
  "BoltozvakGaikoeb",
  "peesk",
  "Block_Peska",
  "layndner",
  "WenyaFox",
  "teflleg57",
  "Tsar_poketik",
  "TornPaint",
  "pgally",
  "Tinker_NOD",
  "A2ananasik",
  "00ABGz",
  "ShooxFuzll",
  "BIHGO",
  "Artemii023",
  "Semiraxd",
  "Sibistel",
  "DimaFyodorov",
  "s1ben",
  "ValikWho",
  "AVTO_LuxShisik",
  "deddda",
  "SergZt2279",
  "Kpaxmall",
  "Retselv",
  "LolKa255",
  "Korobka_1",
  "MrSidorovich",
  "dobrias",
  "DeL1TMe",
  "_boxee_",
  "12NikitaVins",
  "1_AlexCot_1",
  "UnkVirus",
  "cakechalk",
  "Xomkaaaaaa",
  "SpeeDPuppy",
  "00Daruma",
  "__Risa",
  "KolaPro",
  "Pepsik69",
  "jagermeisterADHP",
  "Assbecov_",
  "Oyasima",
  "kymoizi",
  "Lentasy",
  "vPups",
  "HENDELRINA",
  "Myatnaya",
  "Tashimka",
  "AllShab",
  "armorclub",
  "Hi_Craft",
  "ellipsiso",
  "kepckuk",
  "Mo0nRay",
  "Makrel3",
  "Sokich",
  "S1ark_",
  "Mayzito",
  "DiogEn_7",
  "KaisMais",
  "PianoCube3703",
  "Enarioo",
  "kirnau17",
  "Soyka82",
  "Foxyan4ik42",
  "Iaur",
  "__ZibsiS__",
  "Moksy44",
  "Ya_pivas",
  "Xanchyyk",
  "Elae4ik",
  "Comrade_Mikhail_",
  "she2kopr9d",
  "PaperPank",
  "Gnomik_Vasa",
  "fl3kseer92DOMA",
  "00SunRay00",
  "Kitekatura",
  "MaxLain",
  "mainhost",
  "NotsuruSound",
  "XYWINGS",
  "Oulls",
  "Pengven228",
  "vehers",
  "Differsion",
  "Starry_Blick",
  "IvTuSTAFF",
  "Upolnomoch_Kifir",
  "Irpen",
  "Pando4ka079",
  "AnderFan",
  "Brigella",
  "Kiryaaa",
  "ByR1lt1n",
  "flameach",
  "MAUCAT_bb",
  "krytoinosok",
  "Alexr27",
  "xKre3cikx",
  "semionik",
  "ADEKBATbI4",
  "0NxQ",
  "Tekletu",
  "SFastikF",
  "avale1648",
  "Prynik71",
  "kwexi",
  "Simakin",
  "_Denisiel_",
  "TebeNeSvetit",
  "Laever",
  "tr1color",
  "Genvey",
  "F1owering",
  "CyberPelmeshik",
  "rezdne_wagner",
  "_LuK__",
  "SVshka",
  "KOPOLb_SARATOVA",
  "MamdiKek",
  "obebaa",
  "Amadela_1",
  "povich92DOMA",
  "_ReadTree_",
  "AlexKraft8600",
  "T_zone_T",
  "janpol_",
  "Lopovski",
  "VesnaF",
  "Wioaru",
  "Yrent",
  "GYTU",
  "FenyaII",
  "loloipka",
  "Popi171201",
  "Osel3000",
  "MrCkiland",
  "ZalaForesta",
  "Kareux",
  "Srastich",
  "bergusha",
  "Kissalin",
  "Ohlamon",
  "utkanavt",
  "Barlisman",
  "MitoBBN",
  "noyuuuki",
  "KaRozik",
  "MrKodlin",
  "levnemcev",
  "PomeloS__",
  "biswec",
  "RenChik_",
  "Ak1ra_Horny",
  "shaizadinov",
  "MishaOv",
  "1_AlexFox_1",
  "Nordwain_",
  "Dava_Wasab",
  "Zadudoderr",
  "Ryrver",
  "Ksilexs",
  "YeLis64",
  "FruREN",
  "AlexBruuh",
  "fybrfo",
  "l1zunchik",
  "S1r1on",
  "DmitrySij",
  "CAPMAT",
  "SnrChuya",
  "Zannanel",
  "crazysecret",
  "Foxeoio751",
  "nurofenchik998",
  "_Neo_Samurai_8_",
  "Zabwenus",
  "1NkShizo",
  "Kitsune_Kyle",
  "NovaR1k92kB",
  "Tamommy",
  "BJlaD_CaBeJlbeB",
  "Samsami4ed",
  "egor__pomidor",
  "Modjik",
  "HutagerBack",
  "DIvan2000",
  "markosaft_",
  "Heronchek",
  "Mazir0k",
  "cheharka",
  "Ilyusha_1",
  "KutFat",
  "Zinino",
  "vpr_ru4_demo2023",
  "ZhuravlevX",
  "Fupnew",
  "Borsalss",
  "nekaede",
  "Sychie",
  "SleepWxlker",
  "_Gelzy",
  "_MrBee_",
  "_Ded_Perdet21_",
  "Jeleiaka",
  "1SantoLeLb",
  "Keorvane",
  "MrArekusu",
  "AKPHAK",
  "TRIPTOF4n",
  "UJIFERINA",
  "ByHanko",
  "Kislota",
  "Blarfik",
  "Revmatist",
  "flaidy42",
  "Ronan_Deilor",
  "lesaf",
  "1_gobnik",
  "kakashechka",
  "Joosyaww",
  "QuartzWaw",
  "Yashechka",
  "DranikUwU",
  "Comrade_Tokov",
  "LamyRka",
  "cutietuk",
  "iwtdie",
  "Gold1_",
  "korn4pl0d",
  "BO_SIN",
  "miyalvoda",
  "ignat_BO_SINN",
  "Dlesti",
  "Otto_Weiss",
  "Tsuk1ii",
  "Gribosvet",
  "Viktorovich_",
  "Xiiaoooo",
  "Dead_soul",
  "bitvu",
  "Animun4ik",
  "Cond1x01",
  "Kriss_Dark",
  "Fuyumiki",
  "apelSINUS",
  "Mohovidniy",
  "Galya_Fontan",
  "Difub",
  "Reamix_",
  "highiqmoney",
  "DoctorHell666",
  "Yanva",
  "Alex_Normalni",
  "A9C3C6",
  "poopirka",
  "AugustNV"
].map(name => name.toLowerCase());