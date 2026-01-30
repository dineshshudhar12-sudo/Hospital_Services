// Patient Registration
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Patient Registered Successfully!");
});

// Doctor Search
document.getElementById("searchDoctor").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let rows = document.querySelectorAll("#doctorTable tr");

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";
    });
});

// Sort Medicine Table
function sortTable(col) {
    let table = document.getElementById("medicineTable");
    let rows = Array.from(table.rows).slice(1);

    rows.sort((a, b) =>
        a.cells[col].innerText.localeCompare(
            b.cells[col].innerText,
            undefined,
            { numeric: true }
        )
    );

    rows.forEach(row => table.appendChild(row));
}

// Rating System
function rate(stars) {
    let allStars = document.querySelectorAll(".stars span");
    allStars.forEach((star, index) => {
        star.style.color = index < stars ? "gold" : "gray";
    });
    document.getElementById("ratingText").innerText =
        "You rated " + stars + " stars";
}

