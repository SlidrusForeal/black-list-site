"use strict";

// Регистрация ServiceWorker с использованием async/await
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          "/public/scripts/sw/sw.js"
        );
        console.log("ServiceWorker зарегистрирован:", registration.scope);
      } catch (error) {
        console.error("Ошибка регистрации ServiceWorker:", error);
      }
    });
  }
}

registerServiceWorker();

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
  "Revmatist",
  "AllShab",
  "MrNabuy",
  "Comrade_Tokov",
  "Vocallolonik",
  "Pax_Andronika",
  "Comrade_Mikhail_",
  "Mironelix",
  "Retselv",
  "Efreiter",
  "DIvan2000",
  "DiogEn_7",
  "Ksilexs",
  "semionik",
  "AKPHAK",
  "avale1648",
  "AVTO_LuxShisik",
  "XYWINGS",
  "Kriss_Dark",
  "Lyudvig_94",
  "ZhuravlevX",
  "xKre3cikx",
  "Coconut5364",
  "brookdluffy",
  "Ya_pivas",
  "raymccartan",
  "Tinker_NOD",
  "Markowka_",
  "kwexi",
  "Xinoki",
  "levnemcev",
  "__ZibsiS__",
  "Genvey",
  "Gorynych",
  "MishaOv",
  "cakechalk",
  "Viktorovich_",
  "Gribosvet",
  "Jeleiaka",
  "Ronan_Deilor",
  "_pastich_",
  "Otto_Weiss",
  "Defenber",
  "FenyaII",
  "Meruniti",
  "RenChik_",
  "MaKenToshhh",
  "BJlADblKA_kv777",
  "SVshka",
  "NovaR1k_Orbuz",
  "_Kisel4ik_",
  "tr1color",
  "Alossser",
  "heroedov",
  "utkanavt",
  "KILLIJlAK",
  "fybrfo",
  "Sokich",
  "mainhost",
  "MAKCOH_KBAKCOH",
  "Gnomik_Vasa",
  "ChuyaWhySoSirs",
  "fl3kseer_Orbuz",
  "kriin_",
  "Alexr27",
  "r1zz3",
  "Tashimka",
  "reaftie",
  "XII_enjoyer",
  "Yanva",
  "1_AlexFox_1",
  "Dava_Wasab",
  "SnakerMiner",
  "00ABGz",
  "00Daruma",
  "Semiraxd",
  "AsidSin",
  "Mayzito",
  "BIHGO",
  "Laever",
  "Zadudoderr",
  "l1n1ks",
  "masterskaya_",
  "Moksy44",
  "NotsuruSound",
  "Kitekatura",
  "Ryrver",
  "spacekot",
  "SteamBuildier",
  "TebeNeSvetit",
  "egor__pomidor",
  "Fuyumiki",
  "CyberKpblsa",
  "Prynik71",
  "rezdne_wagner",
  "flaidy42",
  "Fristikon",
  "Assbecov_",
  "BoltozvakGaikoeb",
  "crazysecret",
  "deddda",
  "Dlesti",
  "1_gobnik",
  "flameach",
  "defss_moy_kotik",
  "_ayanokouji",
  "xligenda",
  "LamyRka",
  "analspazm",
  "PaperPank",
  "Vampi_Is_Me",
  "SFastikF",
  "slesar300",
  "solumus_maximus",
  "VesnaF",
  "vPups",
  "ADEKBATbI4",
  "GYTU",
  "apelSINUS",
  "S1r1on",
  "Modjik",
  "alexpoint",
  "MegaByte2H",
  "Molldyn",
  "KolaPro",
  "iwtdie",
  "_Ded_Perdet21_",
  "ZalaForesta",
  "HENDELRINA",
  "UJIFERINA",
  "Xanchyyk",
  "Hvani_femboy",
  "Plazzy_Tw",
  "Pepsik69",
  "CEKT0P",
  "Osel3000",
  "FruREN",
  "ValikWho",
  "MrSidorovich",
  "KaisMais",
  "Nosicov",
  "0Sachalinec0",
  "HikaChino_2233",
  "Ramzey_",
  "lobav",
  "MaxLain",
  "Swino4ka",
  "Nordwain_",
  "00faceless00",
  "SleepWxlker",
  "MopSsiK_Lapo4ka",
  "Zabwenus",
  "Sibistel",
  "Kpaxmall",
  "Xiiaoooo",
  "HutagerBack",
  "DoctorHell666",
  "she2kopr9d",
  "Foxyan4ik42",
  "_Denisiel_",
  "CyberPelmeshik",
  "S1ark_",
  "Block_Peska",
  "forfii",
  "ZertinWard",
  "Mrketchup8841",
  "Pronew_2019",
  "Blarfik",
  "qweire",
  "1SantoLeLb",
  "1NkShizo",
  "UnkVirus",
  "Korobka_1",
  "Kiryaaa",
  "Pengven228",
  "tofa_v_dele",
  "ky1nk1",
  "_boxee_",
  "8strontium8",
  "DimaFyodorov",
  "Irpen",
  "CAMOCYD",
  "AlexBruuh",
  "Kamandar",
  "cutietuk",
  "Ohlamon",
  "markosaft_",
  "Upolnomoch_Kifir",
  "Kissalin",
  "Oulls",
  "Galya_Fontan",
  "railxuy",
  "Mohovidniy",
  "Tsar_poketik",
  "Borsalss",
  "Difub",
  "_Gelzy",
  "monkey1447",
  "TO_MUCH",
  "YeLis64",
  "TPABOMAH_",
  "Ak1ra_Horny",
  "ligofff",
  "firro17",
  "zZov",
  "Tsuk1ii",
  "krytoinosok",
  "4epyx__",
  "Animun4ik",
  "_Venjam1n_",
  "AnderFan",
  "Barlisman",
  "ByR1lt1n",
  "shaizadinov",
  "Yashechka",
  "cpt_weedeye",
  "Differsion",
  "ellipsiso",
  "Foxeoio751",
  "_MrBee_",
  "kakashechka",
  "kirnau17",
  "KutFat",
  "BO_SIN",
  "kymoizi",
  "Lenyks",
  "lhijkb",
  "AugustNV",
  "Lopovski",
  "MamdiKek",
  "Mashukoo",
  "MrCkiland",
  "NaItvInG",
  "0NxQ",
  "NeverLoveSky",
  "00SunRay00",
  "opl69",
  "Oyasima",
  "poopirka",
  "QuartzWaw",
  "Samsami4ed",
  "Shakoraze",
  "ShooxFuzll",
  "_ReadTree_",
  "SoFi4Ka_",
  "SpeeDPuppy",
  "Sychie",
  "TimeSking",
  "Vebstors",
  "vlady_y",
  "WenyaFox",
  "Zannanel",
  "Brigella",
  "Hi_Craft",
  "obebaa",
  "Zinino",
  "GEB0_",
  "over144000",
  "Mr4eboba",
  "Gold1_",
  "Alex_Normalni",
  "korn4pl0d",
  "Kitsune_Kyle",
  "_LuK__",
  "KOPOLb_SARATOVA",
  "ignat_BO_SINN",
  "loloipka",
  "Mo0nRay",
  "F1owering",
  "pgally",
  "kepckuk",
  "Sauhuk",
  "_Neo_Samurai_8_",
  "Terendefloc",
  "Starry_Blick",
  "SnakeRuslan",
  "bitvu",
  "cheharka",
  "EnoKast",
  "Gigiretu",
  "FOXyen",
  "Tamommy",
  "mistrMonstr",
  "TornPaint",
  "kekish_",
  "bergusha",
  "MerayFresh_",
  "janpol_",
  "LolKa255",
  "DmitrySij",
  "layndner",
  "lesaf",
  "Paxd1_",
  "Ilyusha_1",
  "AJleX57",
  "V00bz",
  "12NikitaVins",
  "r0mb_ek",
  "_LegaSyslik_",
  "_Tecxas",
  "Amadela_1",
  "BanananT",
  "biswec",
  "Keorvane",
  "clownya57",
  "dogi_bb",
  "l1zunchik",
  "Forior",
  "Fupnew",
  "Heronchek",
  "HukoJlau_06",
  "KaRozik",
  "Kareux",
  "Lentasy",
  "Makrel3",
  "nurofenchik998",
  "PomeloS__",
  "prosto_anandy",
  "Tekletu",
  "KetClawdeen",
  "DanyaNeyk",
  "Mazir0k",
  "srekko_f",
  "Wioaru",
  "Myatnaya",
  "lobster_dobrias",
  "__Risa",
  "Elae4ik",
  "Joosyaww",
  "Srastich",
  "Kislota",
  "Homura128",
  "prismerr",
  "teflleg57",
  "ByHanko",
  "MitoBBN",
  "A9C3C6",
  "s1ben",
  "miyalvoda",
  "Reamix_",
  "Enarioo",
  "Tefynder",
  "IvTuSTAFF",
  "n_15",
  "A2ananasik",
  "vehers",
  "Artemii023",
  "MiloDer",
  "DeL1TMe",
  "MAUCAT_bb",
  "DranikUwU",
  "Popi171201",
  "MrArekusu",
  "Lanesh_",
  "Mamory",
  "KP0Bb",
  "Dead_soul",
  "PianoCube3703",
  "SergZt2279",
  "Simakin",
  "VolodyaBroBY",
  "deloVVoy",
  "DKinchik",
  "voprosek",
  "AlexKraft8600",
  "Kirmalzz",
  "T_zone_T",
  "Pando4ka079",
  "Soyka82",
  "DrawingKruper",
  "BJlaD_CaBeJlbeB",
  "1_Alexcot_1",
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
