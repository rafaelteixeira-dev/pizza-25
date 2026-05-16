const sabores = [
  {codigo:"01",nome:"Alho",desc:"Mussarela, alho, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"02",nome:"Calabresa",desc:"Calabresa, cebola, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"03",nome:"Milho",desc:"Mussarela, milho, molho, azeitona e orégano / Milho, catupiry, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"04",nome:"Mussarela",desc:"Mussarela, tomate, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"05",nome:"Atum",desc:"Atum, cebola, molho, azeitona e orégano / Atum, catupiry, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"06",nome:"Bauru",desc:"Mussarela, presunto, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"07",nome:"Catupiresa",desc:"Catupiry, calabresa, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"08",nome:"Frango",desc:"Frango, catupiry, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"09",nome:"Marguerita",desc:"Mussarela, parmesão, molho, tomate, manjericão, azeitona e orégano",tipo:"salgada"},
  {codigo:"10",nome:"Toscana",desc:"Mussarela, calabresa, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"11",nome:"2 Queijos",desc:"Mussarela, catupiry, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"12",nome:"4 Queijos",desc:"Mussarela, catupiry, parmesão, provolone, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"13",nome:"Bacon",desc:"Mussarela, bacon, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"14",nome:"Caipira",desc:"Frango, milho, catupiry, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"15",nome:"Carijó",desc:"Mussarela, frango, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"16",nome:"Escarola",desc:"Escarola, mussarela, alho, bacon, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"17",nome:"A Moda da Casa",desc:"Mussarela, presunto, catupiry, palmito, bacon, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"18",nome:"A Pizzaiolo",desc:"Mussarela, palmito, atum, bacon, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"19",nome:"Alface",desc:"Mussarela, molho, bacon, alface temperado, azeitona e orégano",tipo:"salgada"},
  {codigo:"20",nome:"Aliche",desc:"Mussarela, aliche, escarola, parmesão, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"21",nome:"Baiana",desc:"Calabresa, mussarela, pimenta, pimentão, ovos, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"22",nome:"Brócolis",desc:"Brócolis, catupiry, bacon, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"23",nome:"Canadense",desc:"Lombo canadense, cebola, mussarela, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"24",nome:"Carne Seca",desc:"Carne seca, cebola, catupiry, mandioca cozida, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"25",nome:"Especial",desc:"Mussarela, atum, bacon, tomate, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"26",nome:"Frango e Palmito",desc:"Mussarela, frango, palmito, milho, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"27",nome:"Lombo Especial",desc:"Lombo canadense, provolone, bacon, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"28",nome:"Mais Sabor",desc:"Mussarela, bacon, presunto, ovos, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"29",nome:"Nordestina",desc:"Carne seca, cebola, mussarela, mandioca cozida, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"30",nome:"Palmito",desc:"Palmito, mussarela, bacon, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"31",nome:"Paulista",desc:"Presunto, palmito, catupiry, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"32",nome:"Peito de Peru",desc:"Mussarela, peito de peru, catupiry, tomate, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"33",nome:"Pepperoni",desc:"Mussarela, pepperoni, pimentão, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"34",nome:"Portuguesa",desc:"Mussarela, presunto, palmito, ervilha, ovos, cebola, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"35",nome:"Primavera",desc:"Mussarela, molho, brócolis, tomate, milho, alho, azeitona e orégano",tipo:"salgada"},
  {codigo:"36",nome:"Roma",desc:"Mussarela, presunto, palmito, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"37",nome:"Sardinha",desc:"Mussarela, molho, sardinha, tomate, azeitona e orégano",tipo:"salgada"},
  {codigo:"38",nome:"Siciliana",desc:"Mussarela, presunto, champignon, tomate, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"39",nome:"Vegetariana",desc:"Milho, ervilha, palmito, catupiry, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"40",nome:"Veneza",desc:"Mussarela, presunto, champignon, molho, creme de leite, bacon, azeitona e orégano",tipo:"salgada"},
  {codigo:"41",nome:"Salame",desc:"Mussarela, salame, tomate, molho, azeitona e orégano",tipo:"salgada"},
  {codigo:"42",nome:"Do Chef",desc:"Mussarela, frango, molho, catupiry, atum, palmito, milho, azeitona e orégano",tipo:"salgada"},
  {codigo:"43",nome:"Romeu e Julieta",desc:"Mussarela e goiabada",tipo:"doce"},
  {codigo:"44",nome:"Confeti",desc:"Chocolate e confeti",tipo:"doce"},
  {codigo:"45",nome:"Brigadeiro",desc:"Chocolate e granulados",tipo:"doce"},
  {codigo:"46",nome:"Banana",desc:"Banana, chocolate e canela",tipo:"doce"},
  {codigo:"47",nome:"Dois Amores",desc:"Chocolate ao leite e chocolate branco",tipo:"doce"},
  {codigo:"48",nome:"Charge",desc:"Chocolate ao leite, amendoim e doce de leite",tipo:"doce"}
];

let filtroAtual = "todos";
let pedido = [];

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function moeda(valor) {
  return "R$ " + Number(valor).toFixed(2).replace(".", ",");
}

function filtrarSabores(tipo) {
  filtroAtual = tipo;
  renderSabores();
}

function renderSabores() {
  const lista = document.getElementById("listaSabores");
  if (!lista) return;

  lista.innerHTML = "";

  sabores
    .filter(sabor => filtroAtual === "todos" || sabor.tipo === filtroAtual)
    .forEach(sabor => {
      const div = document.createElement("div");
      div.className = "flavor";
      div.innerHTML = `
        <div class="flavor-top">
          <h3>${sabor.nome}</h3>
          <span>${sabor.codigo}</span>
        </div>
        <p>${sabor.desc}</p>
      `;
      lista.appendChild(div);
    });
}

function carregarSelects() {
  const sabor1 = document.getElementById("sabor1");
  const sabor2 = document.getElementById("sabor2");

  sabor1.innerHTML = "";
  sabor2.innerHTML = "";

  sabores.forEach((sabor, index) => {
    const option1 = document.createElement("option");
    option1.value = index;
    option1.textContent = `${sabor.codigo} - ${sabor.nome}`;
    sabor1.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = index;
    option2.textContent = `${sabor.codigo} - ${sabor.nome}`;
    sabor2.appendChild(option2);
  });

  if (sabores.length > 1) {
    sabor2.value = "1";
  }
}

function abrirModal() {
  carregarSelects();
  const quantidade = document.getElementById("quantidade");
  const obs = document.getElementById("obs");
  const borda = document.getElementById("borda");
  if (quantidade) quantidade.value = 1;
  if (obs) obs.value = "";
  if (borda) borda.value = "";
  document.body.style.overflow = "hidden";
  document.getElementById("modal").classList.add("active");
  atualizarModal();
}

function fecharModal() {
  document.getElementById("modal").classList.remove("active");
  document.body.style.overflow = "";
}

function montagemSelecionada() {
  return document.querySelector('input[name="montagem"]:checked').value;
}

function atualizarModal() {
  const tipo = montagemSelecionada();
  const boxSabor2 = document.getElementById("boxSabor2");
  boxSabor2.style.display = tipo === "2" ? "block" : "none";

  const sabor1 = sabores[Number(document.getElementById("sabor1").value || 0)];
  const sabor2 = sabores[Number(document.getElementById("sabor2").value || 0)];
  const borda = textoSeguro(document.getElementById("borda").value);
  const quantidade = obterQuantidade();

  const precoUnitario = 32 + (borda ? 8 : 0);
  const total = precoUnitario * quantidade;

  let linhaSabores = sabor1 ? sabor1.nome : "Selecione um sabor";

  if (tipo === "2") {
    linhaSabores = sabor1 && sabor2
      ? `Meia ${sabor1.nome} / Meia ${sabor2.nome}`
      : "Selecione dois sabores";
  }

  document.getElementById("resumoModal").innerHTML = `
    <strong>Resumo:</strong><br>
    Pizza grande 8 pedaços<br>
    ${linhaSabores}<br>
    Borda: ${borda || "Sem borda"}<br>
    Quantidade: ${quantidade}<br>
    Total: <strong>${moeda(total)}</strong>
  `;
}

function adicionarPizza() {
  if (!camposModalValidos()) return;

  const tipo = montagemSelecionada();
  const sabor1 = sabores[Number(document.getElementById("sabor1").value)];
  const sabor2 = sabores[Number(document.getElementById("sabor2").value)];
  const borda = textoSeguro(document.getElementById("borda").value);
  const quantidade = obterQuantidade();
  const observacao = textoSeguro(document.getElementById("obs").value).slice(0, 120);
  const preco = 32 + (borda ? 8 : 0);

  pedido.push({
    nome: "Pizza Grande 8 pedaços",
    desc: tipo === "2" ? `Meia ${sabor1.nome} / Meia ${sabor2.nome}` : sabor1.nome,
    borda,
    quantidade,
    preco,
    observacao
  });

  normalizarPedido();
  fecharModal();
  atualizarCarrinho();
  document.getElementById("carrinho").scrollIntoView({ behavior: "smooth", block: "start" });
}

function adicionarProduto(nome, preco) {
  const nomeSeguro = textoSeguro(nome);
  const precoSeguro = Math.max(0, Number(preco) || 0);

  if (!nomeSeguro || precoSeguro <= 0) {
    mostrarAviso("Item inválido. Tente novamente.");
    return;
  }

  pedido.push({
    nome: nomeSeguro,
    desc: "Item promocional / bebida",
    borda: "",
    quantidade: 1,
    preco: precoSeguro,
    observacao: ""
  });

  normalizarPedido();
  atualizarCarrinho();
  document.getElementById("carrinho").scrollIntoView({ behavior: "smooth", block: "start" });
}

function removerItem(index) {
  if (!Number.isInteger(index) || index < 0 || index >= pedido.length) return;
  pedido.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  normalizarPedido();

  const itens = document.getElementById("itensPedido");
  const vazio = document.getElementById("pedidoVazio");

  itens.innerHTML = "";
  vazio.style.display = pedido.length ? "none" : "block";

  let subtotal = 0;

  pedido.forEach((item, index) => {
    const quantidade = Math.max(1, Number(item.quantidade) || 1);
    const preco = Math.max(0, Number(item.preco) || 0);
    const valor = preco * quantidade;
    subtotal += valor;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <h4>${textoSeguro(item.nome)}</h4>
      <p>${textoSeguro(item.desc)}</p>
      <p>Borda: ${textoSeguro(item.borda) || "Sem borda"}</p>
      <p>Quantidade: ${quantidade}</p>
      ${item.observacao ? `<p>Obs: ${textoSeguro(item.observacao)}</p>` : ""}
      <p><strong>${moeda(valor)}</strong></p>
      <button onclick="removerItem(${index})">Remover</button>
    `;

    itens.appendChild(div);
  });

  document.getElementById("subtotal").textContent = moeda(subtotal);
  document.getElementById("taxa").textContent = "R$ 0,00";
  document.getElementById("total").textContent = moeda(subtotal);
}

function finalizarWhatsApp() {
  normalizarPedido();

  if (!pedido.length) {
    mostrarAviso("Adicione algo ao pedido antes de finalizar.");
    return;
  }

  let msg = "Olá! Quero fazer um pedido na Pizzaria + Sabor:\n\n";
  let total = 0;

  pedido.forEach((item, index) => {
    const quantidade = Math.max(1, Number(item.quantidade) || 1);
    const preco = Math.max(0, Number(item.preco) || 0);
    const valor = preco * quantidade;
    total += valor;

    msg += `${index + 1}. ${textoSeguro(item.nome)}\n`;
    msg += `${textoSeguro(item.desc)}\n`;
    msg += `Borda: ${textoSeguro(item.borda) || "Sem borda"}\n`;
    msg += `Quantidade: ${quantidade}\n`;
    if (item.observacao) msg += `Obs: ${textoSeguro(item.observacao)}\n`;
    msg += `Subtotal: ${moeda(valor)}\n\n`;
  });

  msg += `Total: ${moeda(total)}\n\n`;
  msg += "Entrega ou retirada?\nEndereço: ";

  window.open(`https://wa.me/5516996273247?text=${encodeURIComponent(msg)}`, "_blank");
}

document.addEventListener("change", (e) => {
  if (["sabor1", "sabor2", "borda", "quantidade"].includes(e.target.id)) {
    atualizarModal();
  }
});

renderSabores();


function obterQuantidade() {
  const campo = document.getElementById("quantidade");
  if (!campo) return 1;

  let valor = parseInt(campo.value, 10);

  if (!Number.isFinite(valor) || valor < 1) valor = 1;
  if (valor > 99) valor = 99;

  campo.value = valor;
  return valor;
}

function validarQuantidade() {
  obterQuantidade();
  atualizarModal();
}

function fecharModalFundo(event) {
  if (event.target.id === "modal") fecharModal();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") fecharModal();
});


function textoSeguro(valor) {
  return String(valor ?? "").replace(/[<>]/g, "").trim();
}

function mostrarAviso(mensagem) {
  alert(mensagem);
}

function normalizarPedido() {
  pedido = pedido
    .filter(item => item && item.nome && Number(item.preco) >= 0)
    .map(item => ({
      ...item,
      quantidade: Math.max(1, Math.min(99, Number(item.quantidade) || 1)),
      preco: Math.max(0, Number(item.preco) || 0),
      observacao: textoSeguro(item.observacao || "")
    }));
}

function camposModalValidos() {
  const tipo = montagemSelecionada();
  const sabor1Index = Number(document.getElementById("sabor1").value);
  const sabor2Index = Number(document.getElementById("sabor2").value);
  const quantidade = obterQuantidade();

  if (!Number.isInteger(sabor1Index) || !sabores[sabor1Index]) {
    mostrarAviso("Escolha o primeiro sabor.");
    return false;
  }

  if (tipo === "2" && (!Number.isInteger(sabor2Index) || !sabores[sabor2Index])) {
    mostrarAviso("Escolha o segundo sabor.");
    return false;
  }

  if (tipo === "2" && sabor1Index === sabor2Index) {
    mostrarAviso("Para pizza de 2 sabores, escolha sabores diferentes. Para repetir o mesmo sabor, use Grande 1 sabor.");
    return false;
  }

  if (quantidade < 1 || quantidade > 99) {
    mostrarAviso("A quantidade precisa ser entre 1 e 99.");
    return false;
  }

  return true;
}
