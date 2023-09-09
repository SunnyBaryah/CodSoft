let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 0.7,
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("chair-animation");
    }
  });
};
let observer = new IntersectionObserver(callback, options);
let target = document.querySelector(".chair1");
observer.observe(target);
target = document.querySelector(".chair2");
observer.observe(target);
target = document.querySelector(".chair3");
observer.observe(target);
let obj = { title: "", content: "", author: "" };
let random = Math.floor(3 * Math.random());

let arr = [
  {
    img: "img/customers.jpg",
    title: "We couldn't live without these chairs anymore",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorrepellat at, nesciunt quia cum minima ipsum culpa totam sapienterecusandae earum debitis doloribus in quasi voluptatibus!",
    author: "&mdash; Mary and Sarah Johnson",
  },
  {
    img: "img/customers2.jpg",
    title: "The best product we bought!",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, voluptatem a.Praesentium, perspiciatis pariatur ab itaque odio at quod excepturi quiaaccusamus! Quasi quo deleniti",
    author: "&mdash; John and Stefani White",
  },
  {
    img: "img/customers3.jpg",
    title: "Simply Value for money",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
    author: "&mdash; Sirius Black",
  },
];
document.querySelector(".grid-3-cols2").classList.add("grid-3-cols-anim");
setTimeout(() => {
  document.querySelector(".grid-3-cols2").classList.remove("grid-3-cols-anim");
}, 1000);
document.querySelector(".test-img").src = arr[random].img;
document.querySelector(".testimonial-title").innerHTML = arr[random].title;
document.querySelector(".testimonial-text").innerHTML = arr[random].content;
document.querySelector(".testimonial-author").innerHTML = arr[random].author;
document.querySelector(".grid-3-cols2").classList.toggle("grid-3-cols-anim");
let leftButton = document.querySelector(".btn--left");
let rightButton = document.querySelector(".btn--right");
leftButton.addEventListener("click", () => {
  document.querySelector(".grid-3-cols2").classList.add("grid-3-cols-anim");
  setTimeout(() => {
    document
      .querySelector(".grid-3-cols2")
      .classList.remove("grid-3-cols-anim");
  }, 1000);
  if (random < 1) {
    random = 3;
  }
  document.querySelector(".test-img").src = arr[random - 1].img;
  document.querySelector(".testimonial-title").innerHTML =
    arr[random - 1].title;
  document.querySelector(".testimonial-text").innerHTML =
    arr[random - 1].content;
  document.querySelector(".testimonial-author").innerHTML =
    arr[random - 1].author;
  random--;
});
rightButton.addEventListener("click", () => {
  document.querySelector(".grid-3-cols2").classList.add("grid-3-cols-anim");
  setTimeout(() => {
    document
      .querySelector(".grid-3-cols2")
      .classList.remove("grid-3-cols-anim");
  }, 1000);
  if (random > 1) {
    random = -1;
  }
  document.querySelector(".test-img").src = arr[random + 1].img;
  document.querySelector(".testimonial-title").innerHTML =
    arr[random + 1].title;
  document.querySelector(".testimonial-text").innerHTML =
    arr[random + 1].content;
  document.querySelector(".testimonial-author").innerHTML =
    arr[random + 1].author;
  random = random + 1;
});
