
const startCountAnimation = (e) => {
  let start = 0;
  let end = parseInt(e.dataset.num);
  let duration = 2000;
  
  let count = setInterval(() => {
    start++;
    e.textContent = start + "%";
    if (start >= end) {
      clearInterval(count);
    }
  }, duration / end);
};

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCountAnimation(entry.target);
            observer.unobserve(entry.target);
    }
  });
};

const options = {
  root: null, 
  threshold: 0.5 
};

const observer = new IntersectionObserver(handleIntersection, options);

const numElements = document.querySelectorAll(".num");

numElements.forEach(element => {
  observer.observe(element);
});


document.querySelectorAll(".faq-header").forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        item.classList.toggle("active");
      });
    });



