const allsideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");
allsideMenu.forEach((item) => {
  const li = item.parentElement;
  item.addEventListener("click", function () {
    allsideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// sidebar
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");
menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});

if (window.innerWidth < 768) {
  sidebar.classList.add("hide");
}

const searchBotton = document.querySelector(
  "#content nav form .form-input button"
);
const searchBottonIcon = document.querySelector(
  "#content nav form .form-input button .bx"
);
const searchForm = document.querySelector("#content nav form");
searchBotton.addEventListener("click", function (e) {});



