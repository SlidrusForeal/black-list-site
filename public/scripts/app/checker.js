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
const blacklist = [  ].map(name => name.toLowerCase());