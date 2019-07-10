const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll('.fade-in');

const sliders = document.querySelectorAll('.slide-in');

const images = document.querySelectorAll("[data-src]");

const sectionOneOptions = {
  rootMargin: "-110px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
  sectionOneOptions
);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const slideOptions = {
  rootMargin: "0px 0px -280px 0px"
};

const slideOnScroll = new IntersectionObserver(function (entries, slideOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      slideOnScroll.unobserve(entry.target);
    }
  });
}, slideOptions);

sliders.forEach(slider => {
  slideOnScroll.observe(slider);
});

function preloadImage(img) {
  const src = img.getAttribute("data-src");

  if (!src) {
    return;
  }

  img.src = src;
}

const imageOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imageOptions);

images.forEach(image => {
  imgObserver.observe(image);
});