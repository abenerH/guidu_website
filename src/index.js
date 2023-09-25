var elements = document.getElementsByClassName("link");

Object.entries(elements).forEach((entry) => {
  entry[1].addEventListener("click", () => {
    alert("Clicked");
  });
});
