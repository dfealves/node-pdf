const pdf = require("html-pdf");
const fs = require("fs");

function create() {
  const html = fs.readFileSync("./index.html", "utf8");
  let vendas = 500;
  let nome = Danilo;
  let valorTotal = 2000;

  const content = `  <h1>Relatório</h1>
<hr />
<h2>Informações</h2>
<ul>
  Vendas
</ul>
<li>Quantidade de Vendas: ${vendas}</li>
<li>Valor total das vendas: ${valorTotal}</li>
<li>Vendedor: ${nome}</li>
<li>info</li>`;

  const options = {
    format: "Letter",
  };

  pdf.create(content, options).toFile("./primeiropdf.pdf", (err, res) => {
    if (err) {
      console.log("existem erros");
    } else {
      console.log(res);
    }
  });
}
