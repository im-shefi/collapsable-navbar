const navLists = document.querySelectorAll(".nav-list");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", () => {

    navLists.forEach(list => {

        list.classList.toggle("hidden");

    });

});