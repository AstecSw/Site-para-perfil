function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/avatar-light.png",
      "alt",
      "imagem de perfil do tema light"
    )
  } else {
    // se tiver sem light mode, mater a imagem normal
    img.setAttribute(
      "src",
      "./assets/avatar.png",
      "alt",
      "imagem de perfil do tema dark"
    )
  }
}
