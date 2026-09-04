function showMessage() {

  alert("Welcome to Eyes On Society! 🎉");

}



function showNews() {

  alert(
    "Eyes On Society সমাজের মানুষের পাশে থাকার জন্য বিভিন্ন কার্যক্রম পরিচালনা করে।"
  );

}



function contactMessage() {

  alert(
    "Thank you for contacting Eyes On Society!"
  );

}


/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById(
  "backToTop"
);


window.addEventListener(
  "scroll",
  function () {

    if (window.scrollY > 300) {

      backToTop.style.display = "block";

    } else {

      backToTop.style.display = "none";

    }

  }
);



backToTop.addEventListener(
  "click",
  function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);



/* =========================
   GALLERY IMAGE MODAL
========================= */

const galleryImages =
  document.querySelectorAll(
    ".gallery-item img"
  );


const imageModal =
  document.getElementById(
    "imageModal"
  );


const modalImage =
  document.getElementById(
    "modalImage"
  );


const closeImage =
  document.getElementById(
    "closeImage"
  );



galleryImages.forEach(
  function (image) {

    image.addEventListener(
      "click",
      function () {

        modalImage.src =
          image.src;


        imageModal.style.display =
          "flex";

      }
    );

  }
);



/* Close button */

closeImage.addEventListener(
  "click",
  function () {

    imageModal.style.display =
      "none";

  }
);



/* Click background to close */

imageModal.addEventListener(
  "click",
  function (event) {

    if (
      event.target === imageModal
    ) {

      imageModal.style.display =
        "none";

    }

  }
);



/* Click image again to close */

modalImage.addEventListener(
  "click",
  function () {

    imageModal.style.display =
      "none";

  }
);


/* =========================
   NEWS READ MORE
========================= */

const readMoreBtn =
  document.getElementById("readMoreBtn");


const moreNews =
  document.getElementById("moreNews");


readMoreBtn.addEventListener(
  "click",
  function () {

    if (
      moreNews.style.display === "block"
    ) {

      moreNews.style.display =
        "none";


      readMoreBtn.innerText =
        "Read More";

    } else {

      moreNews.style.display =
        "block";


      readMoreBtn.innerText =
        "Show Less";

    }

  }
);



// Mobile Menu
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Menu link-এ touch করলে automatically close হবে
const menuItems = navLinks.querySelectorAll("a");

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});