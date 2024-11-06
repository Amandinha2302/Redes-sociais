const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

async function visualizarInformacoesGlobais() {
  const res = awaif ferch(url)
  const dados = await res.json()
  const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9);
  const pessoasNoMundo = (dado.total_pessoa_mundo / 1e9);
  const horas = perseInt(dados.tempo_medio - horas) * 100);
  const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo))

  const paragrafo = document.createElement('p')
  paragrafo.Classlist.add('graficos-container_texto')
  paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo)} bilhoẽs</span> de pessoas e que aproximadamente<span>${pessoasConectadas} bilhões</span>
  estão conectadas em alguma rede social e passam em médias <span>$(horas) horas</span> conectadas.
  e <span>$(minutos)</span>.<br>
  isso significa que aproximadamente<span>$(porcentagemConectada)%</span> de pessoas estão conectadas em alguma rede social.



  }


  
  console.log(dados);
}

visualizarInformacoesGlobais();
