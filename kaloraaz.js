
function arvuta() {
    var vanus = parseFloat(document.getElementById("vanus").value);
    var kaal = parseFloat(document.getElementById("kaal").value);
    var pikkus = parseFloat(document.getElementById("pikkus").value);
    var Aktiivsustase = parseFloat(document.getElementById("Aktiivsustase").value);
    var tulemus = Math.round((10 * kaal + 6.25 * pikkus - 5 * vanus + 5) * Aktiivsustase);

    var vastus = document.getElementById("tulemus");
    vastus.innerHTML = "Arvutatud tulemus: " + tulemus + "kcal";
}
