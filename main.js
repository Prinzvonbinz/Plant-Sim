const allPlants = [
  { id: 0, name: "Glühblatt", description: "Leuchtet im Dunkeln wie ein kleiner Stern." },
  { id: 1, name: "Flammenranke", description: "Ihre Blätter züngeln wie Feuerzungen." },
  { id: 2, name: "Frostling", description: "Eiskalt beim Berühren – selbst im Sommer." },
  { id: 3, name: "Kicherklee", description: "Gibt beim Wachsen kichernde Geräusche von sich." },
  { id: 4, name: "Dämmerblume", description: "Öffnet ihre Blüte nur bei Sonnenuntergang." },
  { id: 5, name: "Stinkpuschel", description: "Riecht grässlich – aber heilt angeblich alles." },
  { id: 6, name: "Traumtulpe", description: "Führt zu verrückten Träumen, wenn man daran riecht." },
  { id: 7, name: "Nebelschimmer", description: "Kaum sichtbar, fast wie aus Glas." },
  { id: 8, name: "Wolkenwinde", description: "Bildet winzige Wölkchen über ihren Blättern." },
  { id: 9, name: "Flüstermoos", description: "Gibt flüsternde Geräusche von sich – niemand versteht sie." },
  { id: 10, name: "Schattentang", description: "Wächst am liebsten in vollkommener Dunkelheit." },
  { id: 11, name: "Regenknospe", description: "Fängt Wasser aus der Luft – selbst bei Sonne." },
  { id: 12, name: "Blitzgras", description: "Knistert bei Berührung wie Strom." },
  { id: 13, name: "Seufzerblüte", description: "Seufzt beim Öffnen. Melancholisch schön." },
  { id: 14, name: "Funkelfarn", description: "Glitzert bei Mondlicht wie Sternenstaub." },
  { id: 15, name: "Zitterzunge", description: "Zittert, sobald es windstill wird." },
  { id: 16, name: "Schnarchbeere", description: "Gibt leise Schnarchgeräusche von sich." },
  { id: 17, name: "Spiegelblatt", description: "Reflektiert dein Gesicht – aber leicht verändert." },
  { id: 18, name: "Magnetmoos", description: "Zieht Münzen an. Niemand weiß warum." },
  { id: 19, name: "Schattenschote", description: "Erzeugt einen kühlen Fleck – ideal im Sommer." },
  { id: 20, name: "Pfeifblüte", description: "Pfeift bei Wind in unterschiedlichen Tonlagen." },
  { id: 21, name: "Glimmergras", description: "Wirkt harmlos, glüht aber bei Berührung." },
  { id: 22, name: "Flatterling", description: "Ihre Blätter flattern auch ohne Wind." },
  { id: 23, name: "Schleimranke", description: "Hinterlässt eine glibberige Spur beim Wachsen." },
  { id: 24, name: "Himmelswurz", description: "Riecht nach Luft und Leichtigkeit." },
  { id: 25, name: "Nachtleuchte", description: "Wird bei Dunkelheit hellgrün." },
  { id: 26, name: "Funkengras", description: "Produziert kleine, harmlose Funken." },
  { id: 27, name: "Pustelpilz", description: "Wirkt unangenehm, heilt aber Hautprobleme." },
  { id: 28, name: "Rätselranke", description: "Wächst nie gleich – immer neues Muster." },
  { id: 29, name: "Ewigblüte", description: "Verblüht nie – auch nicht in der Kälte." }
];

let state = JSON.parse(localStorage.getItem("plantState")) || {
  plantedAt: null,
  harvested: false,
  pokedex: [],
  lastPlantId: null
};

const pot = document.getElementById("pot");
const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");
const pokedexEl = document.getElementById("pokedex");

function saveState() {
  localStorage.setItem("plantState", JSON.stringify(state));
}

function plantSeed() {
  if (!state.plantedAt || state.harvested) {
    state.plantedAt = Date.now();
    state.harvested = false;
    state.lastPlantId = null;
    saveState();
    updateUI();
  }
}

function updateUI() {
  const now = Date.now();
  if (!state.plantedAt) {
    timerEl.textContent = "⏱️ 60:00";
    statusEl.textContent = "Keine Pflanze aktiv.";
    document.getElementById("plant-text").textContent = "🪴 Klicke zum Pflanzen";
    return;
  }

  const hour = new Date().getHours();
  const speedMultiplier = (hour >= 6 && hour < 18) ? 1.5 : 1;
  const elapsed = (now - state.plantedAt) * speedMultiplier;
  const total = 60 * 60 * 1000;
  const remaining = Math.max(0, total - elapsed);

  if (!state.harvested && remaining <= 0) {
    state.harvested = true;
    const random = Math.floor(Math.random() * allPlants.length);
    const plant = allPlants[random];
    state.lastPlantId = plant.id;
    if (!state.pokedex.includes(plant.id)) state.pokedex.push(plant.id);
    saveState();
    document.getElementById("plant-text").textContent = `🌼 ${plant.name}`;
    statusEl.textContent = "Neue Pflanze gezüchtet!";
    timerEl.textContent = "⏱️ Fertig!";
  } else if (!state.harvested) {
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    timerEl.textContent = `⏱️ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById("plant-text").textContent = "🌱 Pflanze wächst...";
    statusEl.textContent = (hour >= 6 && hour < 18) ? "☀️ Tageslicht beschleunigt Wachstum!" : "🌙 Nachts wächst sie langsamer.";
  } else {
    document.getElementById("plant-text").textContent = "🪴 Klicke zum Pflanzen";
    statusEl.textContent = "Pflanze geerntet – du kannst neu pflanzen!";
  }
}

function togglePokedex() {
  pokedexEl.classList.toggle("hidden");
  if (!pokedexEl.classList.contains("hidden")) renderPokedex();
}

function renderPokedex() {
  pokedexEl.innerHTML = "";
  allPlants.forEach(plant => {
    const div = document.createElement("div");
    div.classList.add("pokedex-entry");

    if (state.pokedex.includes(plant.id)) {
      div.innerHTML = `<strong>${plant.name}</strong><br>${plant.description}`;
    } else {
      div.innerHTML = `<div class="locked">❓ ???<br>– noch nicht entdeckt –</div>`;
    }

    pokedexEl.appendChild(div);
  });
}

setInterval(updateUI, 1000);
updateUI();
