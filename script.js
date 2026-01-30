// Registration
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("🎉 Patient Registered Successfully!");
});

// Doctor Search
document.getElementById("searchDoctor").addEventListener("keyup", function () {
  let val = this.value.toLowerCase();
  document.querySelectorAll("table tr").forEach((row, i) => {
    if (i === 0) return;
    row.style.display = row.innerText.toLowerCase().includes(val)
      ? ""
      : "none";
  });
});

// Rating
function rate(n) {
  document.querySelectorAll(".stars span").forEach((s, i) => {
    s.style.color = i < n ? "gold" : "gray";
  });
  document.getElementById("ratingText").innerText =
    `You rated ${n} stars`;
}
