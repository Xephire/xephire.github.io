function get_age() {
    var current_year = new Date().getFullYear();
    var age = current_year - 2005;

    document.getElementById("age").textContent=age.toString();
}