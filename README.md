# 🌸 Fiorella Promos

Landing page da **Fiorella Promos** — canal de curadoria de achadinhos e promoções
de Shopee, Mercado Livre e Amazon.

O objetivo da página é um só: **levar a visitante para o grupo de promoções no WhatsApp.**

🔗 **No ar:** [fiorella-promos.vercel.app](https://fiorella-promos.vercel.app)
📷 **Instagram:** [@fiorellapromos](https://www.instagram.com/fiorellapromos)

---

## Como funciona

```
Instagram (bio) → este site → grupo do WhatsApp
```

O link da bio aponta para o site, **nunca direto pro WhatsApp**. Isso importa
porque grupo do WhatsApp lota em 1024 pessoas: quando isso acontecer, basta
trocar o link aqui no código e todo post antigo, story e print compartilhado
continua funcionando.

---

## Trocar o link do grupo

Abra `js/main.js` e edite a primeira propriedade:

```js
const CONFIG = {
  whatsapp: "https://chat.whatsapp.com/SEU-CODIGO-AQUI",
  instagram: "https://www.instagram.com/fiorellapromos",
};
```

Esse é o **único** lugar do projeto com o link. Os três botões da página
(dobra, fechamento e barra fixa do celular) são preenchidos a partir dele.

Depois de editar, publique:

```bash
git add -A
git commit -m "troca o link do grupo"
git push
```

A Vercel está conectada a este repositório: **todo push na `main` publica
sozinho**. Não é preciso rodar nada da Vercel na mão.

---

## Ligar a vitrine de achadinhos

A esteira de produtos fica **escondida** enquanto a lista estiver vazia. Para
ligá-la, salve as fotos em `assets/produtos/` e preencha `PRODUTOS` em
`js/main.js`:

```js
const PRODUTOS = [
  {
    nome:     "Secador de cabelo Mondial 2000W",
    foto:     "assets/produtos/secador.jpg",
    por:      "R$ 89,90",     // o preço que aparece na loja
    obs:      "no Pix",       // só quando o preço for de Pix
    desconto: "-46%",         // o selo, igual ao da loja
    loja:     "Shopee",
    link:     "https://s.shopee.com.br/xxxxx"
  },
];
```

A Shopee mostra o desconto em selo e **não** mostra o preço cheio riscado, então
a vitrine segue o mesmo padrão: preço atual + selo. Se a loja mostrar o preço
cheio, dá pra passar `de: "R$ 189,90"` que ele aparece riscado.

Três regras que evitam dor de cabeça:

- a foto precisa ser **quadrada** — o site corta em quadrado de qualquer jeito;
- **baixe** a imagem do anúncio e salve em `assets/produtos/`. Link direto pra
  imagem da Shopee não funciona: ela bloqueia e a foto some do site;
- **oferta vencida sai da lista.** Vitrine com preço velho derruba a confiança
  mais rápido do que vitrine vazia.

Cada clique num produto vira um evento `ViewContent` no pixel — é assim que dá
pra saber se a vitrine está ajudando ou tirando gente do botão do grupo.

---

## Estrutura

```
fiorella-promos/
├── index.html          # a página inteira
├── css/style.css       # estilos (mobile-first)
├── js/main.js          # ⚙️ configuração + comportamento
├── assets/logo.jpg     # logo da marca (favicon e compartilhamento)
├── assets/foto-hero.jpg # o rosto da dobra
├── assets/produtos/    # fotos da vitrine (você cria)
└── README.md
```

Sem framework, sem build, sem dependência. É HTML, CSS e JavaScript puro.

---

## Design

Mobile-first de verdade — quase todo o público chega pelo celular vindo de
anúncio, então o layout é desenhado para a tela pequena e o desktop se adapta.

**A página inteira defende uma decisão só:** entrar no grupo. Por isso ela é
um cartão branco centralizado, sem menu, sem link pra fora e sem segunda porta.
Tudo que a visitante precisa pra decidir cabe na primeira tela: rosto, promessa,
botão, as lojas de onde vêm as ofertas e a resposta pra pergunta que ela faz
sozinha ("isso é confiável?").

**O botão é verde, não rosa.** Verde de WhatsApp é reconhecido antes de ser
lido: a pessoa sabe pra onde vai antes de encostar o dedo. É a única cor da
página que não vem da marca, e é de propósito.

Paleta:

| Cor | Hex | Uso |
|---|---|---|
| Rosa fundo | `#FDDEE1` | fundo da página |
| Rosa suave | `#FFF1F3` | bloco de confiança, número dos passos |
| Rosa forte | `#DE6A80` | faixa do topo, destaques, preço |
| Marrom | `#5A3E32` | títulos e texto |
| Verde WhatsApp | `#22B15C` | o botão, e só ele |

Tipografia: **Fraunces** (títulos) + **Jost** (corpo), carregadas fora do
caminho crítico — a página pinta com a fonte do sistema e troca depois, em vez
de segurar a tela em branco esperando o Google responder.

A foto da dobra é uma imagem gerada, usada como rosto da marca. Se um dia
houver uma foto real de quem toca o canal, é só trocar `assets/foto-hero.jpg`:
ela vale mais que qualquer imagem gerada.

---

## Rodar localmente

```bash
node -e "require('http').createServer((q,s)=>require('fs').createReadStream(q.url==='/'?'index.html':'.'+q.url).pipe(s)).listen(4321)"
```

Depois abra <http://localhost:4321>.

---

## Licença

Projeto pessoal. Logo e identidade visual pertencem à Fiorella Promos.
