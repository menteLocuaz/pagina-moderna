const imagenes = document.querySelectorAll(".img-gallery");
const imagenesLigth = document.querySelector(".agregar-imagen");
const containerLIgh = document.querySelector(".imagen-light");

const aparecerImagrn = (imagen) => {
  imagenesLigth.src = imagen;
  containerLIgh.classList.toggle("shhow");
  imagenesLigth.classList.toggle("showImage");
};
imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagrn(imagen.getAttribute("src"));
  });
});
