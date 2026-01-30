function validateRegistration() {
    if (
        name.value === "" ||
        age.value === "" ||
        contact.value === "" ||
        email.value === ""
    ) {
        alert("All fields required");
        return false;
    }
    alert("Registration Successful");
    return true;
}

function filterDoctors() {
    let filter = search.value.toLowerCase();
    let rows = doctorTable.getElementsByTagName("tr");

    for (let row of rows) {
        let spec = row.cells[1].innerText.toLowerCase();
        row.style.display = spec.includes(filter) ? "" : "none";
    }
}

function sortTable(col) {
    let table = medicineTable;
    let rows = Array.from(table.rows);
    rows.sort((a, b) => a.cells[col].innerText.localeCompare(b.cells[col].innerText));
    rows.forEach(row => table.appendChild(row));
}

function validateLogin() {
    if (username.value === "admin" && password.value === "admin123") {
        alert("Login Successful");
        return false;
    }
    alert("Invalid Credentials");
    return false;
}

function rate(stars) {
    ratingResult.innerText = `You rated ${stars} stars`;
}
