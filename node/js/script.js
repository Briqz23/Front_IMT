const protocolo = "http://";
const baseURL = "localhost:3000";
const filmesEndpoint = "/filmes";
function obterFilmes() {
    const urlCompleta = `${protocolo}://${baseURL} ${filmesEndpoint}`
  //promise
  axious.get(urlCompleta).then((res) => {
    
  })

  //assync func: função funciona sem esperar a resposta do backend (res
}
