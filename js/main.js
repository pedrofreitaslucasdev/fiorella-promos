/* ==========================================================================
   Fiorella Promos
   --------------------------------------------------------------------------
   👇 TUDO QUE VOCÊ PRECISA TROCAR ESTÁ AQUI EMBAIXO. Nada mais no site.
   ========================================================================== */

const CONFIG = {

  // 🔴 TROQUE AQUI: link do convite do grupo no WhatsApp.
  // No WhatsApp: abra o grupo > toque no nome > Convidar via link > Copiar link.
  // Quando o grupo lotar (1024 pessoas), crie o grupo 2 e troque só esta linha.
  whatsapp: "https://chat.whatsapp.com/GQi8lhr95as2PYk3Pf4jZ0",

  // Pra onde vai o clique num produto da vitrine:
  //   "grupo" .. abre o convite do WhatsApp (é o que vale hoje: o site de
  //              catálogo da Sarah ainda não existe, e mandar direto pra
  //              Shopee joga a visitante pra fora sem ela entrar no grupo).
  //   "loja" ... abre o link de afiliado do próprio produto.
  // Os links da Shopee continuam guardados em PRODUTOS: no dia que o
  // catálogo nascer, troque esta linha pra "loja" e eles voltam a valer.
  produtoLeva: "grupo",

  // Instagram da Fiorella
  instagram: "https://www.instagram.com/fiorellapromos",

  // 🔴 TROQUE AQUI: numero do pixel da Meta, usado para medir os anuncios.
  // Onde achar: Gerenciador de Eventos > o conjunto de dados > o numero
  // embaixo do nome. So o numero. Deixe "" para o site nao rastrear ninguem.
  //
  // Esta e a pagina OFICIAL, a que as campanhas apontam. Se um dia existir
  // uma copia dela em outro endereco, a copia tem que ficar com "" — dois
  // sites escrevendo no mesmo conjunto de dados estragam o funil.
  pixel: "294171596467632",

};


/* --------------------------------------------------------------------------
   PROVA SOCIAL — quantas mulheres entraram no grupo.

   Aparece embaixo do botão, com o pontinho verde. O número tem que ser o
   de verdade: é isso que separa essa linha do "Fulana entrou agora" que os
   concorrentes inventam.

   · entraram ......... quantas entraram no período. 0 esconde a linha.
   · periodo .......... o recorte de tempo, escrito como entra na frase:
                        "em 4 dias", "só hoje", "esta semana". Curto
                        cabe numa linha só — comprido quebra o selo em duas.
                        Quanto mais específico, mais aperta. Não use
                        "na última hora": o número fica parado e a frase
                        vira mentira em 60 minutos.
   · atualizadoEm ..... a data em que você contou (ANO-MES-DIA).
   · validadePorDias .. depois disso o número SAI de cena sozinho. É de
                        propósito: número velho esquecido no ar é mentira que
                        ninguém percebeu que virou mentira.
   · frases ........... as frases que se revezam no selo quando não há número
                        pra mostrar. Sem elas o espaço embaixo do botão fica
                        vazio.
   -------------------------------------------------------------------------- */

const GRUPO = {
  entraram: 0,
  periodo: "em 4 dias",
  atualizadoEm: "2026-08-29",
  validadePorDias: 7,

  // O que o selo mostra ENQUANTO não houver número (entraram: 0) ou depois
  // que a contagem vencer: estas frases se revezam sozinhas, com o pontinho
  // piscando do lado. Nenhuma promete quantidade, então nenhuma vira mentira
  // parada no ar — e o espaço embaixo do botão nunca fica vazio.
  // Curtas (até ~28 letras) pra caber numa linha só. Lista vazia esconde o selo.
  frases: [
    "Promoção nova todo dia",
    "Venha economizar muito",
    "De beleza a móvel de casa",
    "Só lojas oficiais",
  ],
};


/* --------------------------------------------------------------------------
   A VITRINE — os produtos que ficam passando na esteira.

   Enquanto esta lista estiver VAZIA, a vitrine inteira fica escondida no site.
   Para ligar, preencha assim (copie o bloco quantas vezes quiser):

     {
       nome:     "Secador de cabelo Mondial 2000W",
       foto:     "assets/produtos/secador.jpg",   // baixe a foto do anúncio
       por:      "R$ 89,90",                      // o preço que aparece na loja
       obs:      "no Pix",                        // só se o preço for de Pix
       desconto: "-46%",                          // o selo, igual ao da loja
       de:       "R$ 189,90",                     // preço cheio, se a loja mostrar
       loja:     "Shopee",                        // Shopee, Mercado Livre ou Amazon
       link:     "https://s.shopee.com.br/xxxxx"  // SEU link de afiliada
     },

   Regras que evitam dor de cabeça:
   · a foto tem que ser quadrada (o site corta em quadrado de qualquer jeito);
   · salve as fotos em assets/produtos/ — não use o link da imagem da Shopee,
     ela bloqueia e a foto some do site;
   · quando a oferta acabar, apague o bloco. Vitrine com preço velho derruba
     a confiança mais rápido do que vitrine vazia;
   · se o preço só vale no Pix, `obs: "no Pix"` não é opcional — preço sem essa
     ressalva vira promessa quebrada na hora do pagamento.
   -------------------------------------------------------------------------- */

const PRODUTOS = [

  /* Os móveis vêm primeiro de propósito: os anúncios que trazem essa gente
     são de móveis, e a primeira coisa que ela precisa ver aqui é o que a
     fez clicar lá. */

  {
    nome: "Escrivaninha industrial 110cm",
    foto: "assets/produtos/escrivaninha.jpg",
    por:  "R$ 157,08",
    obs:  "no Pix",
    desconto: "-21%",
    loja: "Shopee",
    link: "https://s.shopee.com.br/30nXvtztzs"
  },
  {
    nome: "Jogo de travessas 3 peças",
    foto: "assets/produtos/travessas.jpg",
    por:  "R$ 39,99",
    desconto: "-45%",
    loja: "Shopee",
    link: "https://s.shopee.com.br/3B6xGhFFaL"
  },
  {
    nome: "Vestido longo estampado com bojo",
    foto: "assets/produtos/vestido.jpg",
    por:  "R$ 79,92",
    desconto: "-46%",
    loja: "Shopee",
    link: "https://s.shopee.com.br/1gIAs7wP6y"
  },
  {
    nome: "Massageador de pescoço e ombros 3D",
    foto: "assets/produtos/massageador.jpg",
    por:  "R$ 113,05",
    obs:  "no Pix",
    desconto: "-40%",
    loja: "Shopee",
    link: "https://s.shopee.com.br/40g57aV8gk"
  },
  {
    nome: "Lola Densidade Acidificante 250g",
    foto: "assets/produtos/lola-densidade.jpg",
    por:  "R$ 39,99",
    desconto: "-49%",
    loja: "Shopee",
    link: "https://s.shopee.com.br/6L3z2e8yAZ"
  },

];


/* ==========================================================================
   Daqui pra baixo é a mecânica. Você não precisa mexer.
   ========================================================================== */

(function () {
  "use strict";

  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1. Preenche todos os links da página a partir do CONFIG ---- */

  document.querySelectorAll("[data-link]").forEach(function (el) {
    const destino = CONFIG[el.dataset.link];
    if (!destino) return;

    el.href = destino;
    el.target = "_blank";
  });

  /* ---- 2. Prova social: só entra no ar se o número for recente ---- */

  const prova = document.getElementById("prova");
  const provaTexto = document.getElementById("prova-texto");

  if (prova && provaTexto) {
    const contado = new Date(GRUPO.atualizadoEm + "T12:00:00");
    const dias = (Date.now() - contado.getTime()) / 86400000;
    const numeroVale = GRUPO.entraram > 0 && dias <= GRUPO.validadePorDias;

    if (GRUPO.entraram > 0 && !numeroVale) {
      console.warn(
        "Fiorella: a contagem de entradas é de " + GRUPO.atualizadoEm +
        " e passou da validade, então o número não apareceu. " +
        "Atualize GRUPO em js/main.js."
      );
    }

    if (numeroVale) {
      const n = GRUPO.entraram;
      provaTexto.innerHTML = "";
      const forte = document.createElement("strong");
      forte.textContent = n === 1 ? "1 mulher" : n + " mulheres";
      provaTexto.appendChild(forte);
      provaTexto.append(
        (n === 1 ? " entrou " : " entraram ") + GRUPO.periodo
      );
      prova.hidden = false;

    } else if (GRUPO.frases && GRUPO.frases.length) {
      /* Sem número, o selo não fica vazio: as frases se revezam ali.
         Quem pediu menos movimento no sistema vê só a primeira, parada. */
      provaTexto.textContent = GRUPO.frases[0];
      prova.hidden = false;

      const paradoDeProposito =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (GRUPO.frases.length > 1 && !paradoDeProposito) {
        provaTexto.classList.add("agora__texto");

        let atual = 0;
        setInterval(function () {
          provaTexto.classList.add("is-saindo");

          /* troca a frase escondida, pra largura do selo não pular na cara */
          setTimeout(function () {
            atual = (atual + 1) % GRUPO.frases.length;
            provaTexto.textContent = GRUPO.frases[atual];
            provaTexto.classList.remove("is-saindo");
          }, 260);
        }, 3600);
      }
    }
  }

  /* ---- 3. Monta a vitrine ---- */

  const vitrine = document.getElementById("vitrine");
  const trilho = document.getElementById("vitrine-trilho");
  const janela = document.getElementById("vitrine-janela");

  function montarProduto(item) {
    const li = document.createElement("li");

    /* Enquanto CONFIG.produtoLeva for "grupo", o card inteiro leva pro
       WhatsApp — e aí não é link patrocinado, é convite. O `sponsored` só
       entra quando o clique for mesmo pro link de afiliado. */
    const paraOGrupo = CONFIG.produtoLeva !== "loja";

    const a = document.createElement("a");
    a.className = "produto";
    a.href = (paraOGrupo ? CONFIG.whatsapp : item.link) || "#";
    a.target = "_blank";
    a.rel = paraOGrupo ? "noopener" : "noopener sponsored";
    a.dataset.produto = item.nome || "";

    const moldura = document.createElement("div");
    moldura.className = "produto__moldura";

    const foto = document.createElement("img");
    foto.className = "produto__foto";
    foto.src = item.foto || "";
    foto.alt = item.nome || "Produto em promoção";
    foto.loading = "lazy";
    foto.width = 200;
    foto.height = 200;
    moldura.appendChild(foto);

    if (item.desconto) {
      const selo = document.createElement("span");
      selo.className = "produto__selo";
      selo.textContent = item.desconto;
      moldura.appendChild(selo);
    }

    a.appendChild(moldura);

    const corpo = document.createElement("div");
    corpo.className = "produto__corpo";

    const nome = document.createElement("p");
    nome.className = "produto__nome";
    nome.textContent = item.nome || "";
    corpo.appendChild(nome);

    if (item.de) {
      const de = document.createElement("p");
      de.className = "produto__de";
      de.textContent = item.de;
      corpo.appendChild(de);
    }

    const por = document.createElement("p");
    por.className = "produto__por";
    por.textContent = item.por || "";

    /* "no Pix" é obrigatório quando o preço só vale no Pix — preço sem essa
       ressalva é promessa que a loja não cumpre na hora do pagamento. */
    if (item.obs) {
      const obs = document.createElement("span");
      obs.className = "produto__obs";
      obs.textContent = " " + item.obs;
      por.appendChild(obs);
    }

    corpo.appendChild(por);

    const loja = document.createElement("span");
    loja.className = "produto__loja";
    loja.textContent = (item.loja || "ver na loja") + " →";
    corpo.appendChild(loja);

    a.appendChild(corpo);
    li.appendChild(a);
    return li;
  }

  if (vitrine && trilho && janela && PRODUTOS.length > 0) {
    PRODUTOS.forEach(function (item) {
      trilho.appendChild(montarProduto(item));
    });

    /* A esteira precisa de uma segunda cópia da lista: quando a primeira
       termina, a segunda já está na tela e o rolo volta ao início sem que
       ninguém perceba o corte. */
    const copia = trilho.cloneNode(true);
    while (copia.firstChild) trilho.appendChild(copia.firstChild);

    vitrine.hidden = false;

    /* ---- 4. A esteira anda sozinha, e para quando a pessoa encosta ---- */

    if (!semMovimento) {
      let parada = 0;                 // enquanto for > 0, a esteira fica parada
      let pos = 0;                    // posição de verdade, em fração de pixel
      const passo = 0.45;             // pixels por quadro (~27px/s)

      /* A conta é feita aqui e só o resultado vai pro scrollLeft. Se a gente
         somasse direto no scrollLeft, o navegador arredondaria 0,45 pra zero
         a cada quadro e a esteira nunca sairia do lugar. */

      const pausar = function (quadros) { parada = Math.max(parada, quadros); };

      ["pointerdown", "touchstart", "wheel"].forEach(function (evento) {
        janela.addEventListener(evento, function () { pausar(240); }, { passive: true });
      });

      janela.addEventListener("mouseenter", function () { pausar(Infinity); });
      janela.addEventListener("mouseleave", function () { parada = 60; });
      janela.addEventListener("focusin", function () { pausar(Infinity); });
      janela.addEventListener("focusout", function () { parada = 60; });

      /* Se a pessoa arrastou com o dedo, a esteira continua de onde ela parou */
      janela.addEventListener("scroll", function () {
        if (parada > 0) pos = janela.scrollLeft;
      }, { passive: true });

      const andar = function () {
        if (parada > 0) {
          if (parada !== Infinity) parada--;
        } else {
          const metade = trilho.scrollWidth / 2;
          pos += passo;
          if (pos >= metade) pos -= metade;
          janela.scrollLeft = pos;
        }
        requestAnimationFrame(andar);
      };

      requestAnimationFrame(andar);
    }
  }

  /* ---- 5. Barra fixa: aparece quando o cartão da dobra sai da tela ---- */

  const barra = document.getElementById("barrafixa");
  const cartao = document.querySelector(".cartao");

  if (barra && cartao && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      const cartaoVisivel = entries[0].isIntersecting;

      barra.classList.toggle("is-visible", !cartaoVisivel);
      barra.setAttribute("aria-hidden", String(cartaoVisivel));
    }, { threshold: 0 }).observe(cartao);
  }

  /* ---- 6. Ano do rodapé ---- */

  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- 7. Pixel da Meta ----
     Só liga se CONFIG.pixel estiver preenchido. Mede três coisas:
     quem chegou (PageView), quem clicou pra entrar no grupo (Lead) e
     quem clicou num produto da vitrine (ViewContent) — é assim que a
     gente descobre se a vitrine ajuda ou atrapalha. */

  if (CONFIG.pixel) {

    /* Trecho oficial da Meta. Não mexa aqui: só carrega o fbevents.js. */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    fbq("init", CONFIG.pixel);
    fbq("track", "PageView");

    /* Cada botão que leva ao grupo conta como um Lead. */
    document.querySelectorAll('[data-link="whatsapp"]').forEach(function (el) {
      el.addEventListener("click", function () {
        fbq("track", "Lead");
      });
    });

    /* Cliques na vitrine. Usa delegação porque os cards nascem pelo JS. */
    document.addEventListener("click", function (evento) {
      const card = evento.target.closest(".produto");
      if (!card) return;

      fbq("track", "ViewContent", { content_name: card.dataset.produto || "" });
    });
  }

  /* ---- 8. Aviso no console se o link ainda for o placeholder ---- */

  if (CONFIG.whatsapp.includes("COLE-O-CODIGO")) {
    console.warn(
      "⚠️ Fiorella: o link do grupo do WhatsApp ainda é o placeholder. " +
      "Troque CONFIG.whatsapp em js/main.js antes de publicar."
    );
  }

})();
