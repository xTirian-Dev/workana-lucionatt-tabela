fetch("dados.json")
.then(response => response.json())
.then(dados => {
    const corpo = document.getElementById("tabela-corpo");

    dados.forEach(item => {
        corpo.innerHTML += `
        <tr>
            <td>${item.area}</td>
            <td>${item.aplicacao}</td>
            <td>${item.indicadores}</td>
            <td>${item.tipo}</td>
            <td>${item.impactos}</td>
            <td>${item.maturidade}</td>
        </tr>
        `;
    });
});
