// Doctor search
document.getElementById("searchDoctor").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll("#doctorTable tr");
  rows.forEach(row => {
    let text = row.innerText.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});

// Table sort
function sortTable(col) {
  let table = document.getElementById("medicineTable");
  let rows = Array.from(table.rows).slice(1);
  rows.sort((a, b) =>
    a.cells[col].innerText.localeCompare(b.cells[col].innerText, undefined, {numeric: true})
  );
  rows.forEach(row => table.appendChild(row));
}

// Rating
function rate(stars) {
  document.querySelectorAll(".stars span").forEach((s, i) => {
    s.style.color = i < stars ? "gold" : "gray";
  });
  document.getElementById("ratingText").innerText = `You rated ${stars} stars`;
}

// Form validation alert
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Patient Registered Successfully!");
});
