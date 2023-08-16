const form = document.getElementById('form-atividade');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNome = document.getElementById('Nome-Contato');
    const inputNumero = document.getElementById('Numero-Contato');

   

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;

    linhas +=linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
});