document.addEventListener("DOMContentLoaded", () => {
  const splashes = [
    "У нас нет defss_KPACABA!",
    "Kislota был добавлен ради пасхалки!",
    "Ой забаненных не чистим...",
    "Нас уже 345!",
    "Welcome to Sosmark!",
    "А у вашего города есть чекер чс?)",
    "3 самолёта против толпы людей в топках  — 16.06.2024",
    "Век соси - век пересасывай",
    "Нельзя сжечь то что хранится в шести копиях",
    "Надёжнее всего писать не город а НИК!",
    "Моджанг запретило мне автоматически менять ники!",
    "Чтобы изменить мир, нужна красивая ложь и море крови.",
    "Одна строчка в ЧС становится причиной ярости некого rezdne_wagner.",
    "Да мы титры из звёздных войн!",
    "Кто прочитает быстрее всех все ники в чс тот попадёт в рандомные надписи!",
    "Чтобы попасть в ЧС напишите сюда sosmarkblacklist@gmail.com (нет)",
    "Спросите у defss_KPACABA как он вышел из ЧС (если он помнит ещё..)",
    "AVE SOS, DEUS OVA",
    "Наш бюджет 1500 АР!",
    "1984",
    "100% Сосский",
    "Помянем",
    "Tobey Maguire got bit by a spider, but see, me, it was a goat",
    "😈",
    "🥚🥚🥚",
    "Мы добавили конфетти!",
    "17% Сосмарка в бане..",
    "Я не думаю что в мунвиле в смехе и в дистопии весь или половина СПм..",
    "Весь СПм аллегория на FNAF",
  ];

  const getRandomSplash = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  const displayRandomSplash = () => {
    const splashTextElement = document.getElementById("splashText");
    if (splashTextElement) {
      splashTextElement.textContent = getRandomSplash(splashes);
    }
  };

  displayRandomSplash();
});

// Массив blacklist с приведением к нижнему регистру (лишняя запятая удалена)
const blacklist = [
  "DrawingKruper",
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
].map((name) => name.toLowerCase());

// Функция для применения CSS-анимаций к элементу
const applyAnimation = (element, animationName) => {
  if (!element) return;
  element.style.animation = `${animationName} 0.5s`;
  element.addEventListener(
    "animationend",
    () => {
      element.style.animation = "";
    },
    { once: true }
  );
};

// Функция для показа уведомлений
const showNotification = (message) => {
  const notification = document.getElementById("notification");
  if (!notification) return;
  notification.textContent = message;
  notification.style.visibility = "visible";
  notification.style.animation = "fadeInOut 3s";

  setTimeout(() => {
    notification.style.visibility = "hidden";
  }, 3000);
};

// Функция для запуска эффекта конфетти (если библиотека доступна)
const triggerConfetti = () => {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 658,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0", "#f0f", "#0ff"],
    });
  } else {
    console.warn("Confetti функция не найдена.");
  }
};

// Функция для проверки наличия никнейма в blacklist
const checkBlacklist = () => {
  const playerInput = document.getElementById("playerName");
  const resultDiv = document.getElementById("result");
  if (!playerInput || !resultDiv) return;

  const playerName = playerInput.value.trim().toLowerCase();
  showNotification("Запрос обрабатывается...");

  setTimeout(() => {
    if (playerName === "") {
      resultDiv.textContent =
        "Строка ввода пуста. Пожалуйста, введите никнейм.";
      resultDiv.style.color = "orange";
      applyAnimation(resultDiv, "shake");
    } else if (blacklist.includes(playerName)) {
      resultDiv.textContent = `${playerName}, поздравляем вы в ЧС!`;
      resultDiv.style.color = "red";
      applyAnimation(resultDiv, "shake");
    } else {
      resultDiv.textContent = `${playerName}, вы не в ЧС! Возможно вы сменили ник?`;
      resultDiv.style.color = "green";
      applyAnimation(resultDiv, "bounce");
    }
  }, 1000);
};

// Функция для обновления подсказок (suggestions) при вводе
const updateSuggestions = () => {
  const inputField = document.getElementById("playerName");
  const suggestions = document.getElementById("suggestions");
  if (!inputField || !suggestions) return;

  const inputValue = inputField.value.toLowerCase();
  suggestions.innerHTML = "";
  if (inputValue.length > 0) {
    const matches = blacklist.filter((name) =>
      name.startsWith(inputValue)
    );
    matches.forEach((match) => {
      const option = document.createElement("option");
      option.value = match;
      suggestions.appendChild(option);
    });
  }
};
