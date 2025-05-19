
  const track = document.querySelector(".carousel-track");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  let scrollAmount = 0;
  const cardWidth = 320; // includes margin

  next.addEventListener("click", () => {
    scrollAmount += cardWidth;
    track.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  prev.addEventListener("click", () => {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    track.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

