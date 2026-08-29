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

Esse é o **único** lugar do projeto com o link. Os quatro botões da página
(hero, atalho, CTA final e barra fixa do celular) são preenchidos a partir dele.

Depois de editar, publique:

```bash
git add -A
git commit -m "troca o link do grupo"
git push
```

A Vercel está conectada a este repositório: **todo push na `main` publica
sozinho**. Não é preciso rodar nada da Vercel na mão.

---

## Trocar o número de mulheres no grupo

Embaixo do botão do hero aparece **"25 mulheres já entraram no grupo"**. Esse
número também mora no `CONFIG` de `js/main.js`:

```js
const CONFIG = {
  membros: 25,
};
```

Atualize conforme o grupo cresce — é o que mostra pra visitante que já tem
gente dentro. Se colocar `0`, a linha some da página.

---

## Ativar a seção de prova social

A seção "Quem já aproveitou" fica escondida enquanto não houver prints reais.
Para ligá-la, salve as imagens em `assets/` e preencha a lista em `js/main.js`:

```js
const DEPOIMENTOS = [
  { img: "assets/print-1.jpg", alt: "Cliente mostrando o secador que comprou" },
  { img: "assets/print-2.jpg", alt: "Print da promoção de perfume aproveitada" },
];
```

A seção aparece sozinha assim que a lista tiver pelo menos um item.

---

## Estrutura

```
fiorella-promos/
├── index.html          # a página inteira
├── css/style.css       # estilos (mobile-first)
├── js/main.js          # ⚙️ configuração + comportamento
├── assets/logo.jpg     # logo da marca
└── README.md
```

Sem framework, sem build, sem dependência. É HTML, CSS e JavaScript puro.

---

## Design

Mobile-first de verdade — quase todo o público acessa pelo celular, então o
layout é desenhado para a tela pequena e o desktop se adapta depois.

**O arco é a assinatura.** A logo da Fiorella tem um arco rosa com um círculo
pêssego encostando no ombro direito. O hero reencena essa composição em escala
de página: um arco de traço fino com o sol atrás. Tudo que vive dentro dele
(título, subtítulo, botão e a nota) respeita a variável `--dentro-arco`, para
nada encostar na linha.

Paleta tirada direto dos pixels da logo:

| Cor | Hex | Uso |
|---|---|---|
| Rosa fundo | `#FDDEE1` | fundo da página |
| Rosa arco | `#FBC9CF` | blocos e cards |
| Rosa forte | `#DE6A80` | botões e destaques |
| Marrom taupe | `#6E4C3D` | textos e títulos |
| Pêssego | `#FBCE96` | o sol, acentos |

Tipografia: **Fraunces** (títulos) + **Jost** (corpo).

Os logos das lojas ficam em cinza quente por padrão e voltam à cor original
ao toque — assim as marcas são reconhecíveis sem quebrar a paleta.

---

## Rodar localmente

```bash
node -e "require('http').createServer((q,s)=>require('fs').createReadStream(q.url==='/'?'index.html':'.'+q.url).pipe(s)).listen(4321)"
```

Depois abra <http://localhost:4321>.

---

## Licença

Projeto pessoal. Logo e identidade visual pertencem à Fiorella Promos.
