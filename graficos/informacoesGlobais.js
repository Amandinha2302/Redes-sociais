const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

async function visualizarInformacoesGlobais() {
  const res = awaif ferch(url)
  const dados = await res.json()
  console.log(dados);
}

visualizarInformacoesGlobais();
