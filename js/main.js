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

  // 🔴 TROQUE AQUI: o catálogo de achadinhos. Aparece como um link discreto
  // embaixo da vitrine — os cards continuam levando pro grupo, porque é o
  // grupo que a campanha otimiza. Deixe "" para o link sumir da página.
  catalogo: "https://achadinhos-fiorella.vercel.app",

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
   URGÊNCIA — quantas vagas ainda restam no grupo.

   Aparece embaixo do botão, com o pontinho verde. Atualize o número sempre
   que a quantidade de vagas disponíveis mudar.

   · vagasRestantes ... quantidade mostrada quando a página abre.
   · minimoDeVagas .... limite até onde o contador pode descer.
   · frases ........... as frases que se revezam no selo quando não há número
                        pra mostrar. Sem elas o espaço embaixo do botão fica
                        vazio.
   -------------------------------------------------------------------------- */

const GRUPO = {
  vagasRestantes: 11,
  minimoDeVagas: 1,

  // De quanto em quanto tempo cai uma vaga, em segundos (sorteia entre os
  // dois). Antes a vaga caía junto com o aviso de participante: as dez vagas
  // sumiam em 60 segundos e o número travava em 1 na cara de quem continuasse
  // lendo. Nesse ritmo o contador dura o tempo de uma visita inteira.
  quedaMin: 45,
  quedaMax: 90,

  // O que o selo mostra quando não houver vagas (vagasRestantes: 0): estas frases
  // se revezam sozinhas, com o pontinho
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
   PARTICIPANTES — use aqui somente nomes autorizados.

   Mantenha abaixo apenas a lista aprovada. Se ela ficar vazia, o aviso não
   aparece.
   -------------------------------------------------------------------------- */

const PARTICIPANTES = [
  "Mariana",
  "Camila",
  "Juliana",
  "Beatriz",
  "Larissa",
  "Amanda",
  "Isabela",
  "Fernanda",
  "Vitória",
  "Letícia",
  "Gabriela",
];


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
    nome: "Mesa de jantar de vidro + 4 cadeiras",
    foto: "assets/produtos/mesa-jantar.jpg",
    por:  "R$ 684,77",
    loja: "Shopee",
    link: "https://s.shopee.com.br/112NNTxbzr"
  },
  {
    nome: "Penteadeira de canto com vidros de correr",
    foto: "assets/produtos/penteadeira.jpg",
    por:  "R$ 502,90",
    loja: "Shopee",
    link: "https://s.shopee.com.br/8fRoat77Ei"
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
    nome: "Kit 4 potes herméticos com tampa de bambu",
    foto: "assets/produtos/potes-hermeticos.jpg",
    por:  "R$ 39,99",
    loja: "Shopee",
    link: "https://s.shopee.com.br/6VNMtZWwuw"
  },
  {
    nome: "Air fryer 3,5 litros 1400W",
    foto: "assets/produtos/air-fryer.jpg",
    por:  "R$ 188,90",
    loja: "Shopee",
    link: "https://s.shopee.com.br/40g3iq3dqQ"
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
    nome: "Blusa de amarração costas nuas",
    foto: "assets/produtos/blusa.jpg",
    por:  "R$ 31,95",
    loja: "Shopee",
    link: "https://s.shopee.com.br/2LXq4gj63s"
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

  const prova = document.getElementById("prova");
  const provaTexto = document.getElementById("prova-texto");
  const provaRotulo = document.getElementById("prova-rotulo");
  const provaLegenda = document.getElementById("prova-legenda");

  /* O número fica guardado no aparelho junto com o dia de hoje. Sem isso ele
     voltava pro cheio a cada F5 — quem recarregasse via as vagas ressuscitarem
     na frente dela. Guardado, a contagem continua de onde parou, e vira um dia
     novo sozinha quando a data muda. */
  const CHAVE_VAGAS = "fiorella:vagas";
  const hoje = new Date().toISOString().slice(0, 10);
  const vagasCheio = Math.max(0, Number(GRUPO.vagasRestantes) || 0);

  let vagas = (function () {
    try {
      const salvo = JSON.parse(window.localStorage.getItem(CHAVE_VAGAS) || "null");
      if (salvo && salvo.dia === hoje && typeof salvo.vagas === "number") {
        return Math.min(vagasCheio, Math.max(0, salvo.vagas));
      }
    } catch (e) {
      /* aba anônima ou armazenamento bloqueado: só não guarda, nada quebra */
    }
    return vagasCheio;
  })();

  const guardarVagas = function () {
    try {
      window.localStorage.setItem(
        CHAVE_VAGAS,
        JSON.stringify({ dia: hoje, vagas: vagas })
      );
    } catch (e) { /* idem: sem armazenamento, o contador só não sobrevive ao F5 */ }
  };

  const atualizarVagas = function () {
    if (!prova || !provaTexto || vagas <= 0) return;

    prova.classList.remove("agora--frase");
    if (provaRotulo) provaRotulo.hidden = false;
    if (provaLegenda) {
      provaLegenda.hidden = false;
      provaLegenda.textContent = vagas === 1
        ? "vaga disponível hoje"
        : "vagas disponíveis hoje";
    }
    provaTexto.textContent = String(vagas);
    prova.hidden = false;
  };

  /* ---- Participante autorizada: aparece no canto inferior da tela ---- */

  const memberToast = document.getElementById("member-toast");
  const memberToastName = document.getElementById("member-toast-name");

  if (memberToast && memberToastName && PARTICIPANTES.length) {
    let anterior = -1;

    const mostrarParticipante = function () {
      let indice = Math.floor(Math.random() * PARTICIPANTES.length);

      if (PARTICIPANTES.length > 1 && indice === anterior) {
        indice = (indice + 1) % PARTICIPANTES.length;
      }

      anterior = indice;
      memberToastName.textContent = PARTICIPANTES[indice];
      memberToast.hidden = false;

      requestAnimationFrame(function () {
        memberToast.classList.add("show");
      });

      window.setTimeout(function () {
        memberToast.classList.remove("show");
      }, 4500);

      window.setTimeout(
        mostrarParticipante,
        Math.floor(Math.random() * 3000) + 5000
      );
    };

    window.setTimeout(mostrarParticipante, 1500);
  }

  /* ---- 1. Preenche todos os links da página a partir do CONFIG ---- */

  document.querySelectorAll("[data-link]").forEach(function (el) {
    const destino = CONFIG[el.dataset.link];
    if (!destino) return;

    el.href = destino;
    el.target = "_blank";
  });

  /* ---- 2. Urgência: mostra quantas vagas ainda restam ---- */

  if (prova && provaTexto) {
    if (vagas > 0) {
      atualizarVagas();

      /* A queda anda no ritmo do bloco GRUPO, sozinha. Antes ela vinha
         pendurada no aviso de participante: como o aviso aparece a cada ~6
         segundos, o contador despencava de 11 pra 1 em um minuto e depois
         ficava travado em "1 vaga" pelo resto da visita. */
      const piso = Math.max(0, Number(GRUPO.minimoDeVagas) || 0);
      const minEspera = Math.max(1, Number(GRUPO.quedaMin) || 45);
      const maxEspera = Math.max(minEspera, Number(GRUPO.quedaMax) || minEspera);

      const agendarQueda = function () {
        if (vagas <= piso) return;

        window.setTimeout(function () {
          if (vagas <= piso) return;
          vagas--;
          guardarVagas();
          atualizarVagas();
          agendarQueda();
        }, (Math.random() * (maxEspera - minEspera) + minEspera) * 1000);
      };

      agendarQueda();

    } else if (GRUPO.frases && GRUPO.frases.length) {
      /* Sem número, o selo não fica vazio: as frases se revezam ali.
         Quem pediu menos movimento no sistema vê só a primeira, parada. */
      prova.classList.add("agora--frase");
      if (provaRotulo) provaRotulo.hidden = true;
      if (provaLegenda) provaLegenda.hidden = true;
      provaTexto.textContent = GRUPO.frases[0];
      prova.hidden = false;

      if (GRUPO.frases.length > 1 && !semMovimento) {
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

  /* ---- 3. Link pro catálogo, embaixo da vitrine ----
     O catálogo mora em outro endereço e NÃO tem pixel: quem sai daqui some
     da medição. Por isso o clique é contado aqui, antes de a pessoa ir
     embora — como ViewContent, nunca como Lead, que significa "entrou no
     grupo" e é o evento que a campanha usa pra otimizar. */

  const verCatalogo = document.getElementById("ver-catalogo");

  if (verCatalogo && CONFIG.catalogo) {
    verCatalogo.href = CONFIG.catalogo;
    verCatalogo.target = "_blank";
    verCatalogo.hidden = false;

    verCatalogo.addEventListener("click", function () {
      if (window.fbq) fbq("track", "ViewContent", { content_name: "catalogo" });
    });
  }

  /* ---- 4. Monta a vitrine ---- */

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

    /* A setinha promete pra onde o toque leva. Enquanto o destino for o
       grupo, ela nao pode dizer o nome da loja: seria mandar a pessoa
       esperando a Shopee e entregar um convite de WhatsApp. */
    const loja = document.createElement("span");
    loja.className = "produto__loja";
    loja.textContent = paraOGrupo
      ? "pegar no grupo →"
      : (item.loja || "ver na loja") + " →";
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

    /* A cópia é enfeite: existe só pra emendar a volta da esteira. Escondida
       da árvore de acessibilidade e fora da ordem do TAB, senão o leitor de
       tela lê os dez produtos duas vezes e o teclado passa por vinte links
       pra atravessar dez. */
    Array.prototype.forEach.call(copia.children, function (item) {
      item.setAttribute("aria-hidden", "true");
      const elo = item.querySelector("a");
      if (elo) elo.tabIndex = -1;
    });

    while (copia.firstChild) trilho.appendChild(copia.firstChild);

    vitrine.hidden = false;

    /* ---- 5. A esteira anda sozinha, e para quando a pessoa encosta ---- */

    if (!semMovimento) {
      let parada = 0;                 // enquanto for > 0, a esteira fica parada
      let pos = 0;                    // posição de verdade, em fração de pixel
      const passo = 0.7;              // pixels por quadro (~42px/s)

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

      /* O ponto de reinício é onde a CÓPIA começa — não metade do scrollWidth.
         O trilho tem padding lateral (.25rem 1rem no CSS) e esse padding entra
         na conta do scrollWidth: metade dele cai fora do lugar e a esteira dá
         um salto visível a cada volta, pequeno no celular e grande no monitor.
         Medindo do primeiro card original até o primeiro card da cópia, o
         corte cai exatamente onde o desenho se repete. */
      let periodo = 0;

      const medirPeriodo = function () {
        const primeiro = trilho.children[0];
        const inicioDaCopia = trilho.children[PRODUTOS.length];

        periodo = (primeiro && inicioDaCopia)
          ? inicioDaCopia.offsetLeft - primeiro.offsetLeft
          : trilho.scrollWidth / 2;
      };

      medirPeriodo();
      window.addEventListener("load", medirPeriodo);
      window.addEventListener("resize", medirPeriodo);

      const andar = function () {
        if (parada > 0) {
          if (parada !== Infinity) parada--;
        } else {
          pos += passo;
          if (periodo > 0 && pos >= periodo) pos -= periodo;
          janela.scrollLeft = pos;
        }
        requestAnimationFrame(andar);
      };

      requestAnimationFrame(andar);
    }
  }

  /* ---- 6. Barra fixa: aparece quando o cartão da dobra sai da tela ---- */

  const barra = document.getElementById("barrafixa");
  const cartao = document.querySelector(".cartao");

  if (barra && cartao && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      const cartaoVisivel = entries[0].isIntersecting;

      barra.classList.toggle("is-visible", !cartaoVisivel);
      barra.setAttribute("aria-hidden", String(cartaoVisivel));

      /* A barra some com transform, então o link continuava vivo lá fora: o
         TAB caía num botão invisível dentro de um aria-hidden. `inert` tira
         ele do foco e da leitura enquanto a barra estiver escondida. */
      barra.inert = cartaoVisivel;
    }, { threshold: 0 }).observe(cartao);
  }

  /* ---- 7. Ano do rodapé ---- */

  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- 8. Pixel da Meta ----
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

      /* Enquanto CONFIG.produtoLeva for "grupo", o card abre o MESMO convite
         de WhatsApp que o botão verde — então o clique nele é um Lead igual.
         Sem esta linha, toda visitante que entrava pela vitrine sumia da
         contagem que a campanha usa pra otimizar. */
      if (CONFIG.produtoLeva !== "loja") fbq("track", "Lead");
    });

    /* ---- Ate onde ela desce a pagina ----
       Existe pra responder UMA pergunta: quem nao clica, desiste na dobra
       ou desiste depois de ver as ofertas? Sem isto o pixel so diz que ela
       nao clicou, nunca por que — e a gente fica escolhendo conserto no
       chute.

       Sao eventos CUSTOMIZADOS (trackCustom), nunca padrao. Evento padrao e
       o que a campanha otimiza: criar um novo jogaria os conjuntos de volta
       pra aprendizagem e queimaria orcamento. Estes aqui so olham.

       O funil que sai no Gerenciador de Eventos:
         PageView ..... chegou na pagina
         ViuVitrine ... rolou e viu produto com preco na tela
         ViuFinal ..... chegou no fim da pagina
         Lead ......... clicou pra entrar no grupo

       Como ler: se ViuVitrine for perto de PageView, ela ve tudo e mesmo
       assim nao entra — o problema e o pedido, nao a pagina. Se ViuVitrine
       for muito menor, ela desiste sem nunca ver um preco — o problema e a
       dobra. */

    if ("IntersectionObserver" in window) {
      [["#vitrine", "ViuVitrine"], [".fechamento", "ViuFinal"]].forEach(function (par) {
        const alvo = document.querySelector(par[0]);
        if (!alvo || alvo.hasAttribute("hidden")) return;

        const olho = new IntersectionObserver(function (entradas) {
          if (!entradas[0].isIntersecting) return;
          fbq("trackCustom", par[1]);
          olho.disconnect();   /* uma vez por visita, nao a cada rolagem */
        }, { threshold: 0.5 });

        olho.observe(alvo);
      });
    }
  }

  /* ---- 9. Aviso no console se o link do grupo não tiver cara de convite ----
     Antes esta linha procurava o texto "COLE-O-CODIGO", que não existe mais em
     lugar nenhum: ela nunca disparava e dava uma sensação falsa de proteção.
     Agora confere o formato do convite de verdade — é o que pega link cortado
     na hora de copiar, que é o erro que realmente acontece. */

  if (!/^https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9_-]{10,}$/.test(CONFIG.whatsapp)) {
    console.warn(
      "⚠️ Fiorella: CONFIG.whatsapp não parece um convite de grupo válido. " +
      "Esperado: https://chat.whatsapp.com/XXXXXXXXXX — veja js/main.js."
    );
  }

})();
