export function setupDropdownLogin() {
    document.addEventListener("click", function (event) {
        const dropdown = document.getElementById("loginDropdown");
        const button = document.getElementById("login-btn");
        if (!dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.classList.add("hidden");
        }
    });

    document.getElementById("login-btn").addEventListener("click", function (event) {
        const dropdown = document.getElementById("loginDropdown");
        dropdown.classList.toggle("hidden");
        event.stopPropagation();
    });
}