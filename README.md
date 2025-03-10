[![Netlify Status](https://api.netlify.com/api/v1/badges/79006a77-455d-4a88-b3b5-e8c638e4bdc9/deploy-status)](https://app.netlify.com/sites/sosmark/deploys)
# Чёрный список игроков

Веб-приложение для проверки игроков в чёрном списке Сосмаркской Империи на сервере СПмакси.

## Возможности

- 🔍 Поиск игрока по никнейму
- 📜 Просмотр полного алфавитного списка
- 👤 Автоматическая загрузка аватарок с NameMC
- 📱 Адаптивный дизайн для мобильных устройств
- 🎉 Анимации и визуальные эффекты
- 🔔 Система уведомлений
- 📌 PWA-поддержка (установка на устройство)

## Установка

1. Клонировать репозиторий:
```bash
git clone https://github.com/yourusername/sosmark.git
cd sosmark
```

2. Запустить через веб-сервер. Например, используя Live Server в VS Code.

## Использование

### Главная страница
- Введите ник в поле поиска
- Получите мгновенный результат:
  - 🟢 Не в чёрном списке
  - 🔴 Находится в ЧС
- Случайные пасхалки в заголовке

### Полный список
- Алфавитная сортировка
- Аватарки игроков
- Ссылки на профили NameMC
- Ленивая загрузка изображений

## Особенности реализации

### Технологии
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Анимации**: CSS-анимации и ключевые кадры
- **Оптимизация**: Lazy Loading изображений
- **PWA**: Service Workers, Manifest

### Интеграции
- Minecraft API: `mc-heads.net` для аватарок
- NameMC: ссылки на профили игроков

### Стили
- CSS-переменные для цветов
- Адаптивная вёрстка
- Эффекты наведения
- Мобильная оптимизация

## Лицензия
Проект распространяется под лицензией MIT. Полный текст лицензии доступен в файле [LICENSE](LICENSE).

## Благодарности
- Сервису [MC-Heads](https://mc-heads.net) за API аватарок
- Сообществу Minecraft SPWorlds
- Разработчикам [canvas-confetti](https://github.com/catdad/canvas-confetti)

## Возможные улучшения
- Добавление поиска в полном списке
- Реализация бэкенда для динамического обновления списка
- Экспорт списка в PDF/CSV
- Система апелляций
- Мультиязычная поддержка

---
