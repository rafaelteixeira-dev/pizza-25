Pizzaria + Sabor - Versão ajustada para apresentação ao cliente

Ajustes desta versão:
- Usa o ícone/logo enviado pelo usuário
- Usa a imagem do combo 2 salgadas + 1 doce enviada pelo usuário
- Home com combo reposicionado corretamente
- Seção de combos corrigida para não cortar mal a imagem
- HTML, CSS e JavaScript separados
- Responsivo para PC e celular
- Carrinho funcional
- Pedido via WhatsApp

Para publicar no GitHub Pages:
Suba index.html, style.css, script.js, README.txt e a pasta assets na raiz do repositório.


Correções: quantidade negativa bloqueada, total não fica negativo, modal fecha ao clicar fora e com ESC, scroll do fundo bloqueado durante modal.

Revisão final anti-erro do usuário:
- Impede pizza de 2 sabores com sabores iguais.
- Limita quantidade de 1 a 99.
- Reseta quantidade/observação/borda ao abrir modal.
- Sanitiza textos antes de exibir no carrinho.
- Codifica corretamente a mensagem do WhatsApp.
- Valida itens inválidos antes de adicionar ao carrinho.
- Valida carrinho novamente antes de finalizar.
