let historiArray = [];
const teksInput = document.getElementById("teksInput");

// Load histori dari localStorage saat halaman dibuka
window.onload = function () {
  const data = localStorage.getItem("historiBalikKata");
  if (data) {
    historiArray = JSON.parse(data);
    tampilkanHistori();
  }
};

function balikKata() {
  let teks = document.getElementById("teksInput").value.trim();
  if (teks === "") {
    document.getElementById("hasil").textContent = "Hasil: ";
    return;
  }

  let dibalik = teks.split("").reverse().join("");
  document.getElementById("hasil").textContent = "Hasil: " + dibalik;

  historiArray.push({ awal: teks, balik: dibalik });
  simpanKeLocalStorage();
  tampilkanHistori();
}

function tampilkanHistori() {
  let historiDiv = document.getElementById("histori");
  historiDiv.innerHTML = "<h3>Histori:</h3>";
  historiArray.forEach((item, index) => {
    let p = document.createElement("p");
    p.textContent = `${index + 1}. ${item.awal} = ${item.balik}`;
    historiDiv.appendChild(p);
  });
}

function hapusHistori() {
  historiArray = [];
  simpanKeLocalStorage();
  tampilkanHistori();
}

function simpanKeLocalStorage() {
  localStorage.setItem("historiBalikKata", JSON.stringify(historiArray));
}

function hapusKabeh() {
  teksInput.value = "";
}