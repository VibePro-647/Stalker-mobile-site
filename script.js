async function loadMods() {
  const res = await fetch("mods.json");
  const data = await res.json();
  displayMods(data.official, "official");
  displayMods(data.user, "user");
}

function displayMods(mods, tabId) {
  const container = document.getElementById(tabId);
  container.innerHTML = "";
  mods.forEach(mod => {
    const el = document.createElement("div");
    el.className = "mod-card";
    el.innerHTML = `
      <h3>${mod.name}</h3>
      <p>${mod.description}</p>
      <p><strong>Игра:</strong> ${mod.version}</p>
      <a href="${mod.download}" download>⬇️ Скачать</a><br>
      <a href="${mod.github}" target="_blank">🌐 GitHub</a>
    `;
    container.appendChild(el);
  });
}

function showTab(id) {
  document.querySelectorAll(".tab").forEach(el => el.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

loadMods();