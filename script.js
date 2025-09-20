const verseEl = document.getElementById("verse");
const refEl = document.getElementById("reference");
const drawBtn = document.getElementById("drawBtn");

let verses = [];

// Wczytanie wersów z verses.json
async function loadVerses() {
  try {
    const res = await fetch("verses.json", { cache: "no-store" });
    if (!res.ok) throw new Error("Nie udało się pobrać verses.json");
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error("Brak danych w JSON");
    verses = data;
  } catch (e) {
    alert("Błąd ładowania wersetu: " + e.message);
    console.error(e);
  }
}

// Losowanie i wyświetlanie wersetu
drawBtn.addEventListener("click", () => {
  if (!verses.length) return alert("Brak wersetu do wyświetlenia!");
  const v = verses[Math.floor(Math.random() * verses.length)];
  verseEl.innerText = v.text;
  refEl.innerText = v.ref || "";
});

// Start
loadVerses();
