var tl = gsap.timeline();
var mainDarkColor = "#1b1717",
  mainColor = "#eeebdd";

tl.from(".line", 2, {
  y: 250,
  skewY: 15,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.out",
});
tl.to("header", 2, {
  delay: 1,
  backgroundColor: mainColor,
});
tl.to(
  ".line",
  2,
  {
    color: mainDarkColor,
  },
  "-=2"
);
tl.from(".nav__list li", 2, {
  opacity: 0,
  y: "-100%",
  stagger: {
    amount: 0.3,
  },
});
tl.from(
  ".nav__links li",
  2,
  {
    opacity: 0,
    y: "-100%",
    stagger: {
      amount: 0.3,
    },
  },
  "-=2"
);

let follower = document.querySelector(".follower"),
  cursor = document.querySelector(".cursor");

posX = 0;
posY = 0;
mouseX = 0;
mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -2,
  onRepeat: function () {
    posX += (mouseX - posX) / 10;
    posY += (mouseY - posY) / 10;

    TweenMax.set(follower, {
      css: {
        left: posX + 9,
        top: posY + 9,
      },
    });
    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

document.addEventListener("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

let links = document.querySelectorAll(".link");

links.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    cursor.classList.add("active");
    follower.classList.add("active");
  });
  el.addEventListener("mouseout", (e) => {
    cursor.classList.remove("active");
    follower.classList.remove("active");
  });
});
