document.addEventListener("DOMContentLoaded", () => {
  const blacklist = [
    {
      "name": "IM STEVE",
      "uuid": "51a95f4d89c440238e036fb6d68eff53"
  },];

  // Sort blacklist alphabetically by name
  blacklist.sort((a, b) => a.name.localeCompare(b.name));

  function addSearch() {
    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Поиск по нику...';
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('#blacklist li').forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(term) ? '' : 'none';
      });
    });
    document.querySelector('.container').prepend(searchInput);
  }

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
