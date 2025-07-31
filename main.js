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
{ id: 30, name: "Wisperkraut", description: "Flüstert uralte Pflanzengeheimnisse in den Wind." },
{ id: 31, name: "Tanzwurz", description: "Wackelt rhythmisch, wenn Musik spielt." },
{ id: 32, name: "Staubblatt", description: "Verteilt leuchtenden Staub bei jeder Bewegung." },
{ id: 33, name: "Zackenklee", description: "Schneidet sich durch den Boden – und durch alles andere." },
{ id: 34, name: "Froschlilie", description: "Quakt leise, wenn es regnet." },
{ id: 35, name: "Splitterwuchs", description: "Zerbricht in Stücke und wächst dann doppelt nach." },
{ id: 36, name: "Mondtulpe", description: "Öffnet sich nur bei Vollmond." },
{ id: 37, name: "Trauerblatt", description: "Senkt die Blätter, wenn du traurig bist." },
{ id: 38, name: "Staunmoos", description: "Wächst immer nur dort, wo niemand hinsieht." },
{ id: 39, name: "Glockenkraut", description: "Klingt bei jedem neuen Sonnenstrahl." },
{ id: 40, name: "Korkenzieherling", description: "Wächst spiralförmig in den Himmel." },
{ id: 41, name: "Druckknospe", description: "Platzt auf wie ein Luftballon – voller Glitzerstaub." },
{ id: 42, name: "Luftwurz", description: "Schwebt wenige Zentimeter über dem Boden." },
{ id: 43, name: "Raschelrose", description: "Raschelt beim Wachsen – wie Laub im Herbst." },
{ id: 44, name: "Kaktusmütze", description: "Sieht aus wie eine Wollmütze – sticht aber ordentlich!" },
{ id: 45, name: "Seerauch", description: "Bildet Nebelschwaden über dem Topf." },
{ id: 46, name: "Tauschblatt", description: "Ändert täglich Form und Farbe mit anderen Pflanzen." },
{ id: 47, name: "Stachelpuschel", description: "Süß – aber wehe, du berührst ihn!" },
{ id: 48, name: "Lichtfalle", description: "Zieht Insekten an, auch digitale." },
{ id: 49, name: "Herzblattling", description: "Pulsierende Adern zeigen, wie sehr sie dich mag." },
{ id: 50, name: "Klebeknospe", description: "Bleibt überall kleben – auch an deiner Maus." },
{ id: 51, name: "Streifenmoos", description: "Wächst in perfekten Linien – niemand weiß warum." },
{ id: 52, name: "Wolkenkriech", description: "Versucht ständig, sich nach oben zu schleichen." },
{ id: 53, name: "Kristallkeim", description: "Glänzt wie Diamanten – zerbrechlich wie Glas." },
{ id: 54, name: "Zahnblatt", description: "Hat gezackte Blätter wie ein Biss." },
{ id: 55, name: "Spukwurzel", description: "Erscheint manchmal… und verschwindet wieder." },
{ id: 56, name: "Federtang", description: "Fühlt sich an wie Vogelfedern." },
{ id: 57, name: "Knallknolle", description: "Wächst mit einem plötzlichen Plopp." },
{ id: 58, name: "Funkenrebe", description: "Zuckt wie elektrisiert, wenn man sie gießt." },
{ id: 59, name: "Auroria", description: "✨ Die legendäre Pflanze – ihr Leuchten spiegelt alle Farben des Himmels wider. Nur den geduldigsten Gärtnern offenbart sie sich." }
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
    statusEl.textContent = (hour >= 6 && hour < 18) ? "☀️ Tageslicht beschleunigt Wachstum!" : "🌙 Nachts wächst sie normal.";
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
