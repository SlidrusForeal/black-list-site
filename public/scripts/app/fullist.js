document.addEventListener("DOMContentLoaded", () => {
  const blacklist = [
    {
      name: "Revmatist",
      uuid: "012f15357e9044ed8920da3e036cf004",
    },
    {
      name: "AllShab",
      uuid: "148005f94cfe46d8bbe20edabfcb8c0a",
    },
    {
      name: "MrNabuy",
      uuid: "cdaca5fff6664581ba0f7a9c9f29eff0",
    },
    {
      name: "Comrade_Tokov",
      uuid: "613aff0a909a422c9e814ff60671b55d",
    },
    {
      name: "Vocallolonik",
      uuid: "36dfd0bd7b3d4b358a160239b6ef3a37",
    },
    {
      name: "Pax_Andronika",
      uuid: "1d8a79bf173d48f196c603147e08f292",
    },
    {
      name: "Comrade_Mikhail_",
      uuid: "1189acc10bd84d509d3ec879c778a095",
    },
    {
      name: "Mironelix",
      uuid: "09057c4acaf24b53ac85bc3977452387",
    },
    {
      name: "Retselv",
      uuid: "85d4ab4e1d1b44d2859c44a769984eaf",
    },
    {
      name: "Efreiter",
      uuid: "1a4c764e3ed6445a8a55ad1800de2b3f",
    },
    {
      uuid: "ac8ced5ee1cf487a9ea750f4736d9d1c",
      name: "DIvan2000",
    },
    {
      name: "DiogEn_7",
      uuid: "27fd650e7dd746048d4ce3f08a1994f8",
    },
    {
      name: "Ksilexs",
      uuid: "210c35a74b0a41aab4279b80e39f748d",
    },
    {
      uuid: "acf3b52fd9f14259831708b66175bbbb",
      name: "semionik",
    },
    {
      name: "AKPHAK",
      uuid: "137c19860f254ead924e3cd80e9aa659",
    },
    {
      name: "avale1648",
      uuid: "f2a47505149e40a583fd1015538193bd",
    },
    {
      name: "AVTO_LuxShisik",
      uuid: "1b47eeafdc4d4fb1853c17b0687e3e64",
    },
    {
      name: "XYWINGS",
      uuid: "19c081024d57425f9fd798fde7ed66ba",
    },
    {
      name: "Kriss_Dark",
      uuid: "0ce322e4ec7042c5bfefceba62c3d18d",
    },
    {
      name: "Lyudvig_94",
      uuid: "b99dabc03eaf49fc91bf211aa95606f2",
    },
    {
      name: "ZhuravlevX",
      uuid: "769250ba11fd47b7ac720829c1a99e42",
    },
    {
      name: "xKre3cikx",
      uuid: "f12ff30fca864563bd33f7a7f13d1cf4",
    },
    {
      name: "Coconut5364",
      uuid: "a8754948a90f4b3cac400e45efa73cc5",
    },
    {
      name: "brookdluffy",
      uuid: "e742efd9c8d9451fb781f320a60e3ccc",
    },
    {
      name: "Ya_pivas",
      uuid: "fbba09aa6b984de485e986170abaf066",
    },
    {
      name: "raymccartan",
      uuid: "f43167a58abd4fa4839669d7bf803bf2",
    },
    {
      name: "Tinker_NOD",
      uuid: "73b301921b3c4ca897c20d336a446000",
    },
    {
      name: "Markowka_",
      uuid: "10b146d065664118aa639129cd5269b2",
    },
    {
      name: "kwexi",
      uuid: "e997a7cde4d24af6b44e4cb8c02ed74d",
    },
    {
      name: "Xinoki",
      uuid: "48d29b42f3114a6ba677c488f6d3169c",
    },
    {
      name: "levnemcev",
      uuid: "163ab93076204ae3852414227de1f9da",
    },
    {
      name: "__ZibsiS__",
      uuid: "12fa6497414a4e03bb7cc085e99eee3f",
    },
    {
      name: "Genvey",
      uuid: "285b3002dd0c49ea8c50e53f1d78dcd6",
    },
    {
      name: "Gorynych",
      uuid: "e61c0845c0a54c389c921855ea6bb8b1",
    },
    {
      name: "MishaOv",
      uuid: "f88443029ae8461c80f33f7a6b82abf8",
    },
    {
      name: "cakechalk",
      uuid: "642914770101481fb0e14ce81f7d9cfa",
    },
    {
      name: "Viktorovich_",
      uuid: "5f2d5059744e4515a565e80bc5219ff1",
    },
    {
      name: "Gribosvet",
      uuid: "3513d5f81e9344b599eba6d1fd757b55",
    },
    {
      name: "Jeleiaka",
      uuid: "0c48504ad0e040c5912a795983f3fcf1",
    },
    {
      uuid: "d78f8f35c2794e2685a9abf98957f2fd",
      name: "Ronan_Deilor",
    },
    {
      name: "_pastich_",
      uuid: "a19acf0c96f547e4a1cbf41472a2a009",
    },
    {
      name: "Otto_Weiss",
      uuid: "fc2d357784664328b675157ab76f439d",
    },
    {
      name: "Defenber",
      uuid: "62ff77c6783b42dd956f9a79428181f8",
    },
    {
      name: "FenyaII",
      uuid: "56289e6096cc42c988bb69146f254310",
    },
    {
      name: "Meruniti",
      uuid: "5af3e8833310430399525db4b49730b6",
    },
    {
      name: "RenChik_",
      uuid: "75a290c0b3084e71b412fea94c4d7aa7",
    },
    {
      name: "MaKenToshhh",
      uuid: "b6aa7ddac7cb45d0924940171559c97c",
    },
    {
      name: "BJlADblKA_kv777",
      uuid: "0283361a7dca4cb793942adc5c426775",
    },
    {
      name: "SVshka",
      uuid: "dc0a33f4b17c4e828c7f1cac4789a06a",
    },
    {
      uuid: "978cff81fbbc46ce9bb8f074324f7157",
      name: "NovaR1k_Orbuz",
    },
    {
      name: "_Kisel4ik_",
      uuid: "9c126e01d7104849992d88c2d7aac455",
    },
    {
      name: "tr1color",
      uuid: "68886802547e442189eeedfc61311b2f",
    },
    {
      name: "Alossser",
      uuid: "14c048bb9614460baa5e4b68724d284e",
    },
    {
      uuid: "29e2f7a4440c4949a27d6bf4131dc67e",
      name: "heroedov",
    },
    {
      name: "utkanavt",
      uuid: "a6ed480c553b42ffa59e5a5e0a087b2a",
    },
    {
      name: "KILLIJlAK",
      uuid: "7c73512ae06344479c6a9a0ad308ba63",
    },
    {
      name: "fybrfo",
      uuid: "62a1cd43648343deb93925a606fa8e52",
    },
    {
      name: "Sokich",
      uuid: "4d0ebf0d08e24142b2fa84cb1118c9b1",
    },
    {
      name: "mainhost",
      uuid: "0124a831ec7047abbd4fa0bfd7289a0f",
    },
    {
      uuid: "4e2d695edb164702b0d29a397178d3c7",
      name: "MAKCOH_KBAKCOH",
    },
    {
      name: "Gnomik_Vasa",
      uuid: "083baa73ddf4484bad2928633bdc2970",
    },
    {
      uuid: "f993d4e5ce704b3598e7aa6bd9cbfbc2",
      name: "ChuyaWhySoSirs",
    },
    {
      name: "fl3kseer_Orbuz",
      uuid: "251d2a69400441f399e2df13a79dcd30",
    },
    {
      name: "kriin_",
      uuid: "17ac504edb4b42918e9a65fab77d1153",
    },
    {
      name: "Alexr27",
      uuid: "7b702b54c3684eb2ad9220928f781969",
    },
    {
      name: "r1zz3",
      uuid: "216dd10ce96e492c89e554d3647da1e3",
    },
    {
      name: "Tashimka",
      uuid: "7198f34d865a4d12bb0e9c715853fe9f",
    },
    {
      name: "reaftie",
      uuid: "177f9dfd8101431e8872aa777392efb3",
    },
    {
      uuid: "a8770b210d944aa3b1fd32d173dabbf7",
      name: "XII_enjoyer",
    },
    {
      name: "Yanva",
      uuid: "28ded6e698c6447d9acbd8d791d3a609",
    },
    {
      uuid: "8fbc5754a9df4591a29d14ce2db70139",
      name: "1_AlexFox_1",
    },
    {
      name: "Dava_Wasab",
      uuid: "510430ac412343079563a41d19de55a2",
    },
    {
      uuid: "425716d5e85e4e37aaa82e7190c0dfa7",
      name: "SnakerMiner",
    },
    {
      name: "00ABGz",
      uuid: "0219a406a2f744ec88aa2e6935e9821d",
    },
    {
      name: "00Daruma",
      uuid: "80c8ced30f5c4d438e2f0c404bc5685a",
    },
    {
      name: "Semiraxd",
      uuid: "d9537fa70387445195a9c90809b26481",
    },
    {
      name: "AsidSin",
      uuid: "ee86da3bb7a142d0917979685df34ca5",
    },
    {
      name: "Mayzito",
      uuid: "92533624fcb34992901ff85df189d8b2",
    },
    {
      name: "BIHGO",
      uuid: "6d631029672741b1bfa31685569fb055",
    },
    {
      name: "Laever",
      uuid: "5d3547d9bb124c86830a827ce7f978f1",
    },
    {
      name: "Zadudoderr",
      uuid: "0902f9a991ae467aab15f64bec8dfb98",
    },
    {
      name: "l1n1ks",
      uuid: "eb905adb4286490f8b689d0b51099df0",
    },
    {
      name: "masterskaya_",
      uuid: "34b8196da4a24f6a894296e4ef2423e0",
    },
    {
      name: "Moksy44",
      uuid: "5fc747ae2f9a43c3884d2ffbf0d8a86a",
    },
    {
      name: "NotsuruSound",
      uuid: "1880a0ba687640f0898c735fcb10131c",
    },
    {
      uuid: "ccb80c7095ec4bd2b4e3439e83ab7963",
      name: "Kitekatura",
    },
    {
      name: "Ryrver",
      uuid: "2d47d181871d4b5696e9b2cc2942b0d0",
    },
    {
      name: "spacekot",
      uuid: "e3cd977a79f64d8fb9c12843a48e61e5",
    },
    {
      name: "SteamBuildier",
      uuid: "b8271cb7842c42fc9573dd045c8743cd",
    },
    {
      name: "TebeNeSvetit",
      uuid: "0fa4702d4f2e47ac967a739166cac098",
    },
    {
      name: "egor__pomidor",
      uuid: "857342df486e4399a808fa2c93f00553",
    },
    {
      name: "Fuyumiki",
      uuid: "13f9578e7779409592d9cebaaf995933",
    },
    {
      name: "CyberKpblsa",
      uuid: "5634d98b3bf64c91a1adacd1ac02f40d",
    },
    {
      name: "Prynik71",
      uuid: "e42b48f90d0a48e6b7173625bc62b45d",
    },
    {
      name: "rezdne_wagner",
      uuid: "959be0265a904762841dd9e652f09e20",
    },
    {
      name: "flaidy42",
      uuid: "6eedc5294a394a7e8fe8ceda49dd44d4",
    },
    {
      name: "Fristikon",
      uuid: "9d47d77b0763481e9e70b3d0550007bf",
    },
    {
      name: "Assbecov_",
      uuid: "ca8f6ebb3f1b4c8487604199a0a5fb88",
    },
    {
      name: "BoltozvakGaikoeb",
      uuid: "5c71524190d240d680481d08ce15d83c",
    },
    {
      name: "crazysecret",
      uuid: "8272ed5e5e6742aab9f9ba7dfb6eb457",
    },
    {
      name: "deddda",
      uuid: "94aaba37ffff4305af042013346013a4",
    },
    {
      name: "Dlesti",
      uuid: "7bfba1c9372143b0afada6dd306355e2",
    },
    {
      name: "1_gobnik",
      uuid: "9d4faf23f0e64ec5bd4694ad601796b8",
    },
    {
      name: "flameach",
      uuid: "91e35e2c66584ab29e203f87395ab970",
    },
    {
      uuid: "cb33de7b7b2743459695702d5f253778",
      name: "defss_moy_kotik",
    },
    {
      name: "_ayanokouji",
      uuid: "7a49cef9cc7c4fb9bf2f342e754aa6ab",
    },
    {
      name: "xligenda",
      uuid: "bec8a88f04fc4b56aa5bec1d3e0ccb66",
    },
    {
      name: "LamyRka",
      uuid: "a65ecc7583114c6a853892f46debef14",
    },
    {
      name: "analspazm",
      uuid: "58e32f00ed994b5bbfee03318856b27b",
    },
    {
      name: "PaperPank",
      uuid: "cacfa7dbf9b84404bac479d20bf70050",
    },
    {
      uuid: "8ecb67eec518464f97584b06c74968a2",
      name: "Vampi_Is_Me",
    },
    {
      name: "SFastikF",
      uuid: "04da62b30bf249948eeaa6908cd9aa06",
    },
    {
      name: "slesar300",
      uuid: "8570d30d6786446c883523c176f3866b",
    },
    {
      name: "solumus_maximus",
      uuid: "fe583547ec044ffa8f344e7494abf692",
    },
    {
      name: "VesnaF",
      uuid: "df4a075139f34436a6bb3461ad9c0991",
    },
    {
      name: "vPups",
      uuid: "11f6ce8ebf3940f7b29b03f1ed621246",
    },
    {
      uuid: "37f6f565feac4fb3bb52258cb51a2287",
      name: "ADEKBATbI4",
    },
    {
      name: "GYTU",
      uuid: "0671eeb9d6804043889b216c65016bb2",
    },
    {
      name: "apelSINUS",
      uuid: "a8c992d1ce4645f982f0d63e1545c3fe",
    },
    {
      name: "S1r1on",
      uuid: "c40b01e0836b42fb8792b60e465b0245",
    },
    {
      name: "Modjik",
      uuid: "ebb062dff4aa4a87b46b0e89eed11f98",
    },
    {
      name: "alexpoint",
      uuid: "548e511976364e7399e2185573566b01",
    },
    {
      name: "MegaByte2H",
      uuid: "c39a881ad4d14e51939f458951a6bb3d",
    },
    {
      name: "Molldyn",
      uuid: "f5f2e09e0a8a4dd5ab3c3cbf1648f0cc",
    },
    {
      uuid: "5dfce5841eaf46fc8536ab6eaed76cde",
      name: "KolaPro",
    },
    {
      name: "iwtdie",
      uuid: "2c3ee92b700640839ab15c90b21b7d2f",
    },
    {
      name: "_Ded_Perdet21_",
      uuid: "95259662e2f64200942bd784519dd8dc",
    },
    {
      name: "ZalaForesta",
      uuid: "79f48fc5e464451eb6d8dd859965c98f",
    },
    {
      uuid: "753b81a605004e87bdce3c9a24e35183",
      name: "HENDELRINA",
    },
    {
      name: "UJIFERINA",
      uuid: "22ca965a734447b4b215a0be1332ca85",
    },
    {
      name: "Xanchyyk",
      uuid: "93cd95d42e754b71a6a231508b02455d",
    },
    {
      name: "Hvani_femboy",
      uuid: "3a407637dcc1458fba009635490f225f",
    },
    {
      name: "Plazzy_Tw",
      uuid: "fc0d4293baac40af8e62a2a9cd163232",
    },
    {
      name: "Pepsik69",
      uuid: "ff8f54f9a1b448d8917f18cd39c0fd8a",
    },
    {
      name: "CEKT0P",
      uuid: "14c0a9728d0b4da195ccd077c1d2ed12",
    },
    {
      uuid: "f123c128d8da4ff7a09c82e3ad81b96f",
      name: "Osel3000",
    },
    {
      name: "FruREN",
      uuid: "1949bb845b5842d2bab7285336b16b9a",
    },
    {
      name: "ValikWho",
      uuid: "bad44e76b9214074ace10ed1d0a8e3e5",
    },
    {
      name: "MrSidorovich",
      uuid: "76c91a67ac2e4f6ba1f174fcfe1a6c2d",
    },
    {
      uuid: "84166df2157d4daab13f804c425371ad",
      name: "KaisMais",
    },
    {
      name: "Nosicov",
      uuid: "56ee72deec094d5c9968983dbd56b967",
    },
    {
      name: "0Sachalinec0",
      uuid: "13820da4b4384242a74e2ccda0185b18",
    },
    {
      name: "HikaChino_2233",
      uuid: "014295d81438403eac122be8d3220e32",
    },
    {
      name: "Ramzey_",
      uuid: "924e882266914a94a59532d7612c1919",
    },
    {
      name: "lobav",
      uuid: "74ed3a801c494f8190901bf170d1c6f8",
    },
    {
      name: "MaxLain",
      uuid: "82e86ac4c7d342e69d3f24e3f017e814",
    },
    {
      name: "Swino4ka",
      uuid: "61a3421ff63342dea9b96e7d58c94fcf",
    },
    {
      name: "Nordwain_",
      uuid: "0a20778e0f294010bc74eed15813ddde",
    },
    {
      name: "00faceless00",
      uuid: "09bef26c6c95446ebecd0fd1a057dd5e",
    },
    {
      name: "SleepWxlker",
      uuid: "f642e149b61f48b19e84a1f9945bd075",
    },
    {
      name: "MopSsiK_Lapo4ka",
      uuid: "9037cb9f52ce41b592dc87e01f7b815f",
    },
    {
      name: "Zabwenus",
      uuid: "a29d0f82874d4fb58aaa857a8951bf05",
    },
    {
      name: "Sibistel",
      uuid: "93a166cd4f604e8ea885c44ec2448ee4",
    },
    {
      name: "Kpaxmall",
      uuid: "2d6cf9fc0eab4a7f9c320d97a69002ae",
    },
    {
      name: "Xiiaoooo",
      uuid: "4208b44448a74e0889f7a541994582a6",
    },
    {
      name: "HutagerBack",
      uuid: "65b7da8285b641599c0a9b9d624d8666",
    },
    {
      name: "DoctorHell666",
      uuid: "b61b32a161ef4fd3a7751a760b69b198",
    },
    {
      name: "she2kopr9d",
      uuid: "5221afbe27ae4b43a4904bb633d63e4a",
    },
    {
      name: "Foxyan4ik42",
      uuid: "20fd1c92595c4442bf43ebc9e520df6e",
    },
    {
      name: "_Denisiel_",
      uuid: "03c76a2124134b38b8d8e503538d6597",
    },
    {
      name: "CyberPelmeshik",
      uuid: "82cce820758d4f6e897e589fcbe058d5",
    },
    {
      name: "S1ark_",
      uuid: "c58a0e67dd8a4ba0a2ffc79defcc9a43",
    },
    {
      name: "Block_Peska",
      uuid: "4698cffd808346cfa2e7ec12f5406ece",
    },
    {
      name: "forfii",
      uuid: "5737d07db2e74b569efb2d6a57abc26e",
    },
    {
      name: "ZertinWard",
      uuid: "450308d9a9f54dfe947946af8172cd42",
    },
    {
      name: "Mrketchup8841",
      uuid: "900206a8c9544bd5b5f416c23a86e513",
    },
    {
      name: "Pronew_2019",
      uuid: "1b8227a98c734af8b255cbbecbdf5993",
    },
    {
      name: "Blarfik",
      uuid: "f8b6edc0b17a4357bdb02fce7e864719",
    },
    {
      name: "qweire",
      uuid: "fb89c9e0acd64f3bb437473847156dd5",
    },
    {
      uuid: "90c05e9c3b9c4fab8baf0d313cf19ab2",
      name: "1SantoLeLb",
    },
    {
      name: "1NkShizo",
      uuid: "54f0621c84cb4284a18efb07f4af061a",
    },
    {
      name: "UnkVirus",
      uuid: "445fe0eb7c304579b626223dc130f371",
    },
    {
      name: "Korobka_1",
      uuid: "1b820875828542fe9f211d33bf0bc6a6",
    },
    {
      name: "Kiryaaa",
      uuid: "5d10cfbc5c1140a7b948adb3dbff6553",
    },
    {
      name: "Pengven228",
      uuid: "dbecc28bfc744bd3aa464197ebad5bb0",
    },
    {
      uuid: "2871a36a599c420da0235815c779ac23",
      name: "tofa_v_dele",
    },
    {
      name: "ky1nk1",
      uuid: "7b947458b39d496bb7259e58950d16fb",
    },
    {
      name: "_boxee_",
      uuid: "51a6c5a539224678aa3dac0b927431a9",
    },
    {
      name: "8strontium8",
      uuid: "bb145863ee554360b276384db67cb842",
    },
    {
      name: "DimaFyodorov",
      uuid: "193d41983d344ce3929f27f0940e3973",
    },
    {
      name: "Irpen",
      uuid: "68de102a5f22452f9f2439687623da8d",
    },
    {
      uuid: "09b55a0f3d034a72b0c541d0b7c5d371",
      name: "CAMOCYD",
    },
    {
      name: "AlexBruuh",
      uuid: "593f470acc8c4d5b9c0734aa4ad7809c",
    },
    {
      name: "Kamandar",
      uuid: "eaa9cb7e00e7495aa40e797e8ab35dc4",
    },
    {
      uuid: "77d308f4ab9047e886425fad397475d9",
      name: "cutietuk",
    },
    {
      name: "Ohlamon",
      uuid: "d988981e590149e196cef03716c42003",
    },
    {
      name: "markosaft_",
      uuid: "674f553c99d04a2ab7216fd881f4c965",
    },
    {
      name: "Upolnomoch_Kifir",
      uuid: "e976cd66fd17480f94b01e2563acc788",
    },
    {
      name: "Kissalin",
      uuid: "9870330a703d40019d1c117a14ff7870",
    },
    {
      name: "Oulls",
      uuid: "10c1daa9bfe94c839426139b29d423ef",
    },
    {
      name: "Galya_Fontan",
      uuid: "aaafcd6d1dce4c4caa7ddff678d5a49d",
    },
    {
      name: "railxuy",
      uuid: "3de42823aa1a46a8b8d6f9534584de17",
    },
    {
      name: "Mohovidniy",
      uuid: "6d7ab972a6b24b459ac1cb72f88af1e4",
    },
    {
      name: "Tsar_poketik",
      uuid: "dcddf16b64884611a31b6c885d4f980d",
    },
    {
      name: "Borsalss",
      uuid: "3921f98c95aa4f4583ee9f53159d00c6",
    },
    {
      name: "Difub",
      uuid: "3bfbf94628334275be54da098c237013",
    },
    {
      name: "_Gelzy",
      uuid: "757c66858da5429d9da56d33c6ac6478",
    },
    {
      name: "monkey1447",
      uuid: "e741abd7e5c64c9297dc7abe12473021",
    },
    {
      name: "TO_MUCH",
      uuid: "86574560c2944fc09f355d47b5bda457",
    },
    {
      name: "YeLis64",
      uuid: "492be0893c1c415c8b3bc8c70ef0a14c",
    },
    {
      name: "TPABOMAH_",
      uuid: "37d1bfa556a74b218237ad1baf9130b9",
    },
    {
      name: "Ak1ra_Horny",
      uuid: "3d00600ef1ad47b5b79a99d720ed4060",
    },
    {
      name: "ligofff",
      uuid: "5e17525475ff4ba7ab2041159d99a524",
    },
    {
      name: "firro17",
      uuid: "341b0a3f368d4561a31621aaa3901bb3",
    },
    {
      uuid: "e8b0b55bd68a4490a1becf2b7c5dad1b",
      name: "zZov",
    },
    {
      name: "Tsuk1ii",
      uuid: "511610cb51bd478a800f3db7d1b7282d",
    },
    {
      name: "krytoinosok",
      uuid: "f5f3665b35db46a09fff4a5c5a0f175a",
    },
    {
      name: "4epyx__",
      uuid: "69a5b6477ee5484c83660d532a1f2940",
    },
    {
      name: "Animun4ik",
      uuid: "efd34b3a9c92402e9a6b8ad063492b86",
    },
    {
      name: "_Venjam1n_",
      uuid: "e2f3cb0fc74243ffbf4cc6dcef30879e",
    },
    {
      name: "AnderFan",
      uuid: "5735d1ecb7634c769d7eee0dfd68c596",
    },
    {
      name: "Barlisman",
      uuid: "1a6b28e706694b238b4321696cfe841b",
    },
    {
      name: "ByR1lt1n",
      uuid: "1ad45d08010f40c6b0ef57d67d811204",
    },
    {
      name: "shaizadinov",
      uuid: "a253345153154cbc9e2da75c4e43d6d9",
    },
    {
      name: "Yashechka",
      uuid: "466bb6abe5444e23857a2986ad02e1bc",
    },
    {
      name: "cpt_weedeye",
      uuid: "8b77b22fc28147c89a3bd5711f7a565d",
    },
    {
      name: "Differsion",
      uuid: "7815b54142774d8ab9ba74d183b153a3",
    },
    {
      name: "ellipsiso",
      uuid: "c196af1b65ae43728730cce8b32e308a",
    },
    {
      name: "Foxeoio751",
      uuid: "ad252c2a08284783a8ea7dfe1336e3ba",
    },
    {
      name: "_MrBee_",
      uuid: "e0ad6b8c668a4ed7aae853a3a8900bc9",
    },
    {
      name: "kakashechka",
      uuid: "6828201b08114a3bb8e48a68acc91ead",
    },
    {
      uuid: "3b1257b3f69c4243997c61b5c7ee9bbb",
      name: "kirnau17",
    },
    {
      name: "KutFat",
      uuid: "f06cb42610d84c9786e384aeb57f9c0e",
    },
    {
      uuid: "12162ab297f64298a0c12e5e7deed834",
      name: "BO_SIN",
    },
    {
      name: "kymoizi",
      uuid: "d0657291f5de484a9561b34f4e5b791e",
    },
    {
      name: "Lenyks",
      uuid: "c3ca37a5b68a414cb8683b5e9b3f0414",
    },
    {
      name: "lhijkb",
      uuid: "b81334ad6c034afb834091284d537d87",
    },
    {
      name: "AugustNV",
      uuid: "293b57e0b9ac4e3ca07573223acb3d97",
    },
    {
      name: "Lopovski",
      uuid: "6d7c100b752c4c29aa2479a8083c531a",
    },
    {
      name: "MamdiKek",
      uuid: "4c5de79e082643128daf30c3f17557d4",
    },
    {
      name: "Mashukoo",
      uuid: "1806d23b9cbd4ab5af8a60035ba9e953",
    },
    {
      name: "MrCkiland",
      uuid: "3ec581d6cfdd44d5bdffc28c44bfeef5",
    },
    {
      name: "NaItvInG",
      uuid: "48a3d1a3f1974725aad0c19074ed0d11",
    },
    {
      uuid: "e74c08fc4fc646c19f943e1bc8a87d70",
      name: "0NxQ",
    },
    {
      name: "NeverLoveSky",
      uuid: "60b9c6b288ca42ce80d76ba5877b8f01",
    },
    {
      name: "00SunRay00",
      uuid: "225954d6297b4728aa53c5c4a77a08c1",
    },
    {
      name: "opl69",
      uuid: "ce8f43a8023d46ac84ee051eeb188e38",
    },
    {
      name: "Oyasima",
      uuid: "8b27a03ff32042b28866a2c952f30fd7",
    },
    {
      name: "poopirka",
      uuid: "312756d090684738b6654521cfc0a299",
    },
    {
      name: "QuartzWaw",
      uuid: "8e29347c442b411da3267d988eadfc47",
    },
    {
      name: "Samsami4ed",
      uuid: "45498eeefa10487b855ec07267a65790",
    },
    {
      name: "Shakoraze",
      uuid: "559d1447954549689aaf67255dd88b76",
    },
    {
      name: "ShooxFuzll",
      uuid: "48cf5e1490e84a54a97c7adcbcf3fd7b",
    },
    {
      name: "_ReadTree_",
      uuid: "8730a1594221453eb68663f660c6ed62",
    },
    {
      name: "SoFi4Ka_",
      uuid: "2ad8a7f4c58d4e42996207c0a450ee14",
    },
    {
      name: "SpeeDPuppy",
      uuid: "814fcd71cf714e6da1b5087340e7c4db",
    },
    {
      name: "Sychie",
      uuid: "0451310f1c9945d0a874937d8c99d3a7",
    },
    {
      name: "TimeSking",
      uuid: "7807c206c5b641339b0c49a78dd82de8",
    },
    {
      name: "Vebstors",
      uuid: "60891a00ea204a04a7c17308b13b8d01",
    },
    {
      name: "vlady_y",
      uuid: "659fc009a56d4c5f90e091eea5143df2",
    },
    {
      name: "WenyaFox",
      uuid: "4435c07561e64db895d26b0b1b53171e",
    },
    {
      name: "Zannanel",
      uuid: "7f1e5c08ddc440678427aed1e7c33946",
    },
    {
      name: "Brigella",
      uuid: "beee8cb321d343b4bbac28bd6eebe12e",
    },
    {
      uuid: "a26a0e55fad54debb3b2856f23813f50",
      name: "Hi_Craft",
    },
    {
      name: "obebaa",
      uuid: "3b5e419101e7426b8c976423725ff877",
    },
    {
      name: "Zinino",
      uuid: "9556a7bdf75d403d803c89a43bee7e47",
    },
    {
      name: "GEB0_",
      uuid: "a52321a2c98c4b62a044bb72bee8befc",
    },
    {
      name: "over144000",
      uuid: "e595f45992474038b947f6b4dfc43ed5",
    },
    {
      uuid: "fff912f22420469ea00a1e1385c16ba0",
      name: "Mr4eboba",
    },
    {
      name: "Gold1_",
      uuid: "13ab1b046c3e4c40b1ac90da74f0c5f4",
    },
    {
      name: "Alex_Normalni",
      uuid: "43ac2b74edcf46988c5b8d13cb31455d",
    },
    {
      name: "korn4pl0d",
      uuid: "ac5f2e859f2e462790be8d94a1b59b61",
    },
    {
      uuid: "6659a7b0124b42f0b45d73b4168b1ff9",
      name: "Kitsune_Kyle",
    },
    {
      uuid: "918ed0f17e5145ec8ab86d0949f54068",
      name: "_LuK__",
    },
    {
      uuid: "a3bf121750844dd99d9af2233b3ee018",
      name: "KOPOLb_SARATOVA",
    },
    {
      uuid: "f925689cee394ed7a9ae6f3c108943b1",
      name: "ignat_BO_SINN",
    },
    {
      name: "loloipka",
      uuid: "5af7f70f955d4cd1a46518e9d12f1cd3",
    },
    {
      name: "Mo0nRay",
      uuid: "ae53da5c226742ff803b600124ce6b14",
    },
    {
      name: "F1owering",
      uuid: "ac46ba890194475e92768331ece4eecd",
    },
    {
      name: "pgally",
      uuid: "b480e7896ba94be9af66e8263fa39652",
    },
    {
      name: "kepckuk",
      uuid: "be2035f04c0d44ba9a9f4b15fdb234ba",
    },
    {
      name: "Sauhuk",
      uuid: "f95ee0fba30d46768691b91af109fc97",
    },
    {
      name: "_Neo_Samurai_8_",
      uuid: "cadcd17821d04376ac8370f41a1e3728",
    },
    {
      name: "Terendefloc",
      uuid: "8fdb10cf72134dd588a684704a076c6a",
    },
    {
      name: "Starry_Blick",
      uuid: "3a961ad2d0d044d08dbd406137af9bba",
    },
    {
      name: "SnakeRuslan",
      uuid: "25a67e6e93644273b0733dca187ab126",
    },
    {
      name: "bitvu",
      uuid: "b37c8ffe020e4678abd4937df0676453",
    },
    {
      name: "cheharka",
      uuid: "499f1ac1f94f448e9cf1a4d51e8986e7",
    },
    {
      name: "EnoKast",
      uuid: "8a6e20d47a7240a79d4804c2adba315a",
    },
    {
      name: "Gigiretu",
      uuid: "1385afbece5a45d884f067d988138889",
    },
    {
      uuid: "0698041fbfc644e5999f99c6f8135c65",
      name: "FOXyen",
    },
    {
      name: "Tamommy",
      uuid: "d2b4621036064a1cbfc110f2595e7d08",
    },
    {
      name: "mistrMonstr",
      uuid: "9f6579d1fa9a4c2493cffd3849958f0b",
    },
    {
      name: "TornPaint",
      uuid: "71952f50f59c41148f96c52f8ad5a0d8",
    },
    {
      name: "kekish_",
      uuid: "90db908e346849f89cdc60178120717c",
    },
    {
      name: "bergusha",
      uuid: "8f39ec8fc4fe4eec86b150c9e608b7d3",
    },
    {
      name: "MerayFresh_",
      uuid: "37ac61658280457594651d63781824e3",
    },
    {
      name: "janpol_",
      uuid: "fd2f04a140e541888bbee317cc3f58d0",
    },
    {
      name: "LolKa255",
      uuid: "4fdea00af6dc4e59a674f6a7ba436290",
    },
    {
      name: "DmitrySij",
      uuid: "4b5ab1ec03eb4d74b2708954175338d8",
    },
    {
      name: "layndner",
      uuid: "789339f94efd474fbb974916dd6c2464",
    },
    {
      name: "lesaf",
      uuid: "7e198360f1e14f50a6da0ec44ea7cf9f",
    },
    {
      name: "Paxd1_",
      uuid: "e8629b7c299f4ad4b7cfefbfd76a1a0c",
    },
    {
      uuid: "75e3b018ad4e438780b4c684c5a045be",
      name: "Ilyusha_1",
    },
    {
      uuid: "fd934e8544a248f4b97f0c5854e6fe1d",
      name: "AJleX57",
    },
    {
      name: "V00bz",
      uuid: "8db0da07a0584b9c9844b24741bd88ba",
    },
    {
      name: "12NikitaVins",
      uuid: "45091dcea4994a6fa924f8d6d551d5f6",
    },
    {
      name: "r0mb_ek",
      uuid: "42a13915e8f54a1a86059503ae658573",
    },
    {
      name: "_LegaSyslik_",
      uuid: "c2c2074340dd4a889165aaddc67ab358",
    },
    {
      name: "_Tecxas",
      uuid: "21085ff13afe4dcfb5eac2307a501f06",
    },
    {
      name: "Amadela_1",
      uuid: "ec949390f075437fa6326e2fe16b9def",
    },
    {
      name: "BanananT",
      uuid: "703bc268d61642fa98fb4d1db2e69eb1",
    },
    {
      name: "biswec",
      uuid: "39765d06930447d6b0723a4971183fea",
    },
    {
      name: "Keorvane",
      uuid: "66c2c687cea34a97bc02fefe6ed66f7b",
    },
    {
      name: "clownya57",
      uuid: "f6c706aca3704ffe89ee82e2d040996f",
    },
    {
      name: "dogi_bb",
      uuid: "55e13a9064ec41aea5f50381bfd6422a",
    },
    {
      uuid: "c3d66ae3c8c740269432b8e9c77127d0",
      name: "l1zunchik",
    },
    {
      name: "Forior",
      uuid: "112e453de83146cf9c18f4ad3d9ade5e",
    },
    {
      name: "Fupnew",
      uuid: "fd0848e5cced4b49b65c63077332035c",
    },
    {
      name: "Heronchek",
      uuid: "d261b9b95c434e3491bd47ec4a175e22",
    },
    {
      name: "HukoJlau_06",
      uuid: "2c2f49b1763b4c678c1286d11215925c",
    },
    {
      name: "KaRozik",
      uuid: "03fdeeefd4eb4795b792e258c58e7762",
    },
    {
      name: "Kareux",
      uuid: "8eedf86af0894c98b551f988d5e27848",
    },
    {
      name: "Lentasy",
      uuid: "abc88f7ab73c44e69f98e61755b33fc7",
    },
    {
      name: "Makrel3",
      uuid: "7664b8a09d7e4f7786710c6fca0a0d24",
    },
    {
      name: "nurofenchik998",
      uuid: "fe80dacb0d3a44ca978dc094fced4412",
    },
    {
      name: "PomeloS__",
      uuid: "665d2efb81194144acd35ebff11b0e85",
    },
    {
      name: "prosto_anandy",
      uuid: "341d8b9aaccf4f1e8ac7ae95fa9c6387",
    },
    {
      name: "Tekletu",
      uuid: "08980e6f67634daeaa251377940d7e9b",
    },
    {
      uuid: "695ba8d6d8c14c458e15e506632e837a",
      name: "KetClawdeen",
    },
    {
      name: "DanyaNeyk",
      uuid: "e0fa3f79fa954336b9eeb8d5564c7792",
    },
    {
      name: "Mazir0k",
      uuid: "7478692e3cd54b5682f4b825ee43d81f",
    },
    {
      name: "srekko_f",
      uuid: "7818a8378f9d4770a49b44af72d86c42",
    },
    {
      name: "Wioaru",
      uuid: "9cd265c7c9d243d7bc95ae4313ecbbbd",
    },
    {
      name: "Myatnaya",
      uuid: "91c2a650e2bf4c47a91f1b4cea1e8ea1",
    },
    {
      name: "lobster_dobrias",
      uuid: "7d849d97f5664d608a6d6ee7344f3466",
    },
    {
      name: "__Risa",
      uuid: "ea478380a8ba425d8155117f89f86263",
    },
    {
      name: "Elae4ik",
      uuid: "08da1b7f768a48dfb438dce588e7caef",
    },
    {
      name: "Joosyaww",
      uuid: "7e24cbc742eb4a439a670a4dbbf757be",
    },
    {
      name: "Srastich",
      uuid: "bb4b1f038ac64279b4cef0df48b3dfb9",
    },
    {
      name: "Kislota",
      uuid: "13c7a572357043f99d64c8dbbde75529",
    },
    {
      name: "Homura128",
      uuid: "dbfaf31afec144fcbd45e7d53632bdba",
    },
    {
      name: "prismerr",
      uuid: "58c59d97edf0400cb716362bf1f694ea",
    },
    {
      uuid: "0bb9755387be4296ba2d13365cd107a8",
      name: "teflleg57",
    },
    {
      name: "ByHanko",
      uuid: "cfce21800994414d8512a59be2776810",
    },
    {
      name: "MitoBBN",
      uuid: "7b50b49f7f204c8cbaec669239a2b340",
    },
    {
      uuid: "43715455d51e460c8058ff2d8029059e",
      name: "A9C3C6",
    },
    {
      name: "s1ben",
      uuid: "4c9c7a5f404840ab95363ae272ef6ac1",
    },
    {
      name: "miyalvoda",
      uuid: "76067eb34f9744b8b9eb6793e60d993a",
    },
    {
      name: "Reamix_",
      uuid: "69ab2d347744447899c00b95ed3d59a8",
    },
    {
      name: "Enarioo",
      uuid: "4d1f0f482d8a46dea80c219a2eafba5d",
    },
    {
      name: "Tefynder",
      uuid: "61e41f638df34de0a4bccb77a1b7e9ac",
    },
    {
      name: "IvTuSTAFF",
      uuid: "37e85a1bc5e8474596639a91cd3dd517",
    },
    {
      name: "n_15",
      uuid: "e8693feef27748449156b168415e6d4d",
    },
    {
      name: "A2ananasik",
      uuid: "d92db210a1a7414889b1bfcb1c9f1320",
    },
    {
      name: "vehers",
      uuid: "581db42b6c6442d6a9ae5949110d03f9",
    },
    {
      name: "Artemii023",
      uuid: "c65be684db7646d68471fc094f7c82ec",
    },
    {
      name: "MiloDer",
      uuid: "95b1c97d0d724518a7555531e3a2f8ef",
    },
    {
      name: "DeL1TMe",
      uuid: "6a640b6787f0456a8f4da65aeb55f4f4",
    },
    {
      name: "MAUCAT_bb",
      uuid: "28a9431c097d46a1b393fde3802fba22",
    },
    {
      name: "DranikUwU",
      uuid: "98ce571614ed41fbaa5440b36c39cabe",
    },
    {
      name: "Popi171201",
      uuid: "1dd9e06879e94a0dbe37ab738eac20ef",
    },
    {
      name: "MrArekusu",
      uuid: "5c5bc23da48142e28fb2f15f859fb394",
    },
    {
      name: "Lanesh_",
      uuid: "1ec910e340dc4184939cfb58bd6d927f",
    },
    {
      uuid: "b89694185b5649debd6de17373f1e64b",
      name: "Mamory",
    },
    {
      uuid: "58c366f95bff4c4e8685f1877c983f06",
      name: "KP0Bb",
    },
    {
      name: "Dead_soul",
      uuid: "57ee180f4a0a44c7bb427969a17df0cc",
    },
    {
      name: "PianoCube3703",
      uuid: "2c3193e6e9774c93af1ffd7463878c81",
    },
    {
      name: "SergZt2279",
      uuid: "9547165d66014ab698c8a4e026d1a4d8",
    },
    {
      name: "Simakin",
      uuid: "75a478b8eb1b41b7ad610144617ec5d8",
    },
    {
      uuid: "d8568d18-89cd-4676-bcee-924851155b25",
      name: "VolodyaBroBY",
    },
    {
      name: "deloVVoy",
      UUID: "e36ff74a-fbed-449f-ae92-deaec8562550",
    },
    {
      name: "DKinchik",
      uuid: "f4c896656fae46bf999f34fe87cca1da",
    },
    {
      name: "voprosek",
      uuid: "74a3c6f7c65f4ddd999f4462dffbe919",
    },
    {
      name: "AlexKraft8600",
      uuid: "2ec194d84ce64b28ad9673c486f2c2e3",
    },
    {
      name: "Kirmalzz",
      uuid: "6abe086df7104984bcb4dc19d9c43a8b",
    },
    {
      name: "T_zone_T",
      uuid: "b48338cad80c4f848e1761524dfb472f",
    },
    {
      name: "Pando4ka079",
      uuid: "7579264480414773b0203d25c5fcc15e",
    },
    {
      name: "Soyka82",
      uuid: "4df0fd3822934e77ac7393ed5e265950",
    },
    {
      name: "BJlaD_CaBeJlbeB",
      uuid: "09f3c210854d45559066a258585e15c6",
    },
    {
      name: "DrawingKruper",
      uuid: "09f3c210854d45559066a258585e15c6",
    },
    {
      name: "1_AlexCot_1",
      uuid: "98ea52fad4824283a0aa155936e28330",
    },
  ];

  // Sort blacklist alphabetically by name
  blacklist.sort((a, b) => a.name.localeCompare(b.name));

  function loadBlacklist() {
    const blacklistUl = document.getElementById("blacklist");
    const fragment = document.createDocumentFragment();

    blacklist.forEach((player) => {
      const li = document.createElement("li");
      li.style.animation = "fadeIn 1s ease-in-out";

      const img = document.createElement("img");
      img.src = `https://mc-heads.net/avatar/${player.uuid}`;
      img.alt = `${player.name}'s face`;
      img.loading="lazy";
      img.onload = () => img.classList.add('loaded');

      const link = document.createElement("a");
      link.href = `https://namemc.com/profile/${player.uuid}`;
      link.target = "_blank";
      link.rel="noopener noreferrer";
      link.textContent = player.name;

      li.appendChild(img);
      li.appendChild(link);
      fragment.appendChild(li);
    });

    blacklistUl.appendChild(fragment);
    showNotification("Черный список загружен");
  }

  function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.visibility = "visible";
    setTimeout(() => {
      notification.style.visibility = "hidden";
    }, 3000);
  }

  loadBlacklist();
});
