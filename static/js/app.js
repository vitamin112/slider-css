var bannerItem = document.querySelector(".item.first");
var bannerBtnNext = document.querySelector(".control-btn .next-btn");
var bannerBtnPrev = document.querySelector(".control-btn .prev-btn");
var controler = document.querySelectorAll(".controler span");

var counter = 0;

bannerBtnNext.addEventListener("click", () => {
    counter += 1;
    handleBanner();
});

bannerBtnPrev.addEventListener("click", () => {
    counter -= 1;
    handleBanner();
});

function handleBanner() {
    if (counter < 0) {
        counter = 2;
    } if (counter == 3) {
        counter = 0;
    }
    controler.forEach((item, index) => {
        item.classList.remove("active");
    });
    controler[counter].classList.add("active");
    bannerItem.style.marginLeft = `-${counter * 100}%`;
}

controler.forEach((item, index) => {
    controler[index].addEventListener("click", () => {
        counter = index;
        handleBanner();
    });
});

setInterval(() => {
    counter++;
    handleBanner();
}, 4000);


var closeBtn = document.querySelector(".close-btn");
var menuChild = document.querySelectorAll(".nav ul li");
var menuBtn = document.querySelector(".users img ");


menuBtn.onclick = () => {
    document.getElementById("nav").classList.toggle("active");
}
menuChild.forEach(item => {
    item.onclick = () => {
        document.getElementById("nav").classList.toggle("active");
    }
})
closeBtn.onclick = () => {
    document.getElementById("nav").classList.remove("active");
}

var searchBtn = document.querySelector(".search-btn");
var searchButton = document.querySelector(".btn-search");
searchBtn.onclick = () => {
    document.querySelector(".search-box").classList.toggle("active");
}
searchButton.onclick = () => {
    document.querySelector(".search-box").classList.toggle("active");
    alert("Chưa thể thực hiện tìm kiếm !");
}
