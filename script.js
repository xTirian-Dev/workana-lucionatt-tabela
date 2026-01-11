fetch("dados.json")
.then(r => r.json())
.then(dados => {

    const headerRow = document.getElementById("header-row");
    const corpo = document.getElementById("tabela-corpo");

    // cria colunas com áreas
    dados.forEach(item => {
        headerRow.innerHTML += `<th>${item.area}</th>`;
    });

    const campos = [
        { label: "Aplicação", key: "aplicacao" },
        { label: "Indicadores", key: "indicadores" },
        { label: "Tipo de risco", key: "tipo" },
        { label: "Resultados e impactos", key: "impactos" },
        { label: "Maturidade / Barreiras / Integração", key: "maturidade" }
    ];

    campos.forEach(campo => {
        let linha = `<tr><th>${campo.label}</th>`;

        dados.forEach(item => {
            linha += `<td>${item[campo.key]}</td>`;
        });

        linha += `</tr>`;
        corpo.innerHTML += linha;
    });

});
