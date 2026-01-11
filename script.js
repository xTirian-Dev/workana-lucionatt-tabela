fetch("dados.json")
.then(r=>r.json())
.then(dados=>{

  const header = document.getElementById("header-row");
  const corpo = document.getElementById("tabela-corpo");

  dados.forEach(d=>{
    header.innerHTML += `<th>${d.area}</th>`;
  });

  const campos = [
    ["Aplicação específica","aplicacao"],
    ["Tecnologia utilizada","tecnologia"],
    ["Indicadores monitorados","indicadores"],
    ["Tipo de risco","tipo"],
    ["Resultado esperado","resultado"],
    ["Impacto na segurança do profissional","impacto_prof"],
    ["Impacto na segurança do paciente","impacto_paciente"],
    ["Nível de maturidade","maturidade"],
    ["Barreiras para adoção","barreiras"],
    ["Risco ético e de privacidade","risco_etico"],
    ["Escalabilidade e custo-efetividade","escalabilidade"],
    ["Exemplo prático","exemplo"],
    ["Integração com ecossistema digital","integracao"]
  ];

  campos.forEach(c=>{
    let linha=`<tr><th>${c[0]}</th>`;
    dados.forEach(d=>{
      linha+=`<td>${d[c[1]]}</td>`;
    });
    linha+=`</tr>`;
    corpo.innerHTML+=linha;
  });

});
