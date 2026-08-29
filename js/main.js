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

  // Instagram da Fiorella
  instagram: "https://www.instagram.com/fiorellapromos",

  // 🔴 TROQUE AQUI: número do pixel da Meta, usado para medir os anúncios.
  // Onde achar: Gerenciador de Eventos > o conjunto de dados > o número embaixo do nome.
  // Só o número, sem mais nada. Deixe "" para o site não rastrear ninguém.
  pixel: "294171596467632",

};

/* --------------------------------------------------------------------------
   Prova social — prints reais de quem aproveitou.
   Enquanto esta lista estiver VAZIA, a seção inteira fica escondida no site.
   Para ativar: salve as imagens em assets/ e adicione aqui, assim:

     { img: "assets/print-1.jpg", alt: "Cliente mostrando o secador que comprou" },

   -------------------------------------------------------------------------- */

const DEPOIMENTOS = [
  // ainda vazio — a seção aparece sozinha quando você preencher
];


/* ==========================================================================
   Daqui pra baixo é a mecânica. Você não precisa mexer.
   ========================================================================== */

(function () {
  "use strict";

  /* ---- 1. Preenche todos os links da página a partir do CONFIG ---- */

  document.querySelectorAll("[data-link]").forEach(function (el) {
    const destino = CONFIG[el.dataset.link];
    if (!destino) return;

    el.href = destino;
    el.target = "_blank";
  });

  /* ---- 2. Monta a prova social, se houver ---- */

  const secaoProva = document.getElementById("prova-social");
  const listaProva = document.getElementById("proofs");

  if (secaoProva && listaProva && DEPOIMENTOS.length > 0) {
    DEPOIMENTOS.forEach(function (item) {
      const li = document.createElement("li");
      const img = document.createElement("img");

      img.src = item.img;
      img.alt = item.alt || "Print de uma promoção aproveitada";
      img.loading = "lazy";

      li.appendChild(img);
      listaProva.appendChild(li);
    });

    secaoProva.hidden = false;
  }

  /* ---- 3. Barra fixa: aparece quando o hero sai da tela ---- */

  const barra = document.getElementById("stickybar");
  const hero = document.querySelector(".hero");

  if (barra && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      const heroVisivel = entries[0].isIntersecting;

      barra.classList.toggle("is-visible", !heroVisivel);
      barra.setAttribute("aria-hidden", String(heroVisivel));
    }, { threshold: 0 }).observe(hero);
  }

  /* ---- 4. Cards entram suavemente conforme você rola ---- */

  const aparecer = document.querySelectorAll(".reveal");

  if (aparecer.length && "IntersectionObserver" in window) {
    const observador = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-in");
        obs.unobserve(entry.target);
      });
    }, { threshold: .15 });

    aparecer.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 80 + "ms";
      observador.observe(el);
    });
  } else {
    aparecer.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- 5. Ano do rodapé ---- */

  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- 6. Pixel da Meta ----
     Só liga se CONFIG.pixel estiver preenchido. Mede duas coisas:
     quem chegou na página (PageView) e quem clicou para entrar no
     grupo (Lead) — é o Lead que diz se o anúncio está funcionando. */

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
  }

  /* ---- 7. Aviso no console se o link ainda for o placeholder ---- */

  if (CONFIG.whatsapp.includes("COLE-O-CODIGO")) {
    console.warn(
      "⚠️ Fiorella: o link do grupo do WhatsApp ainda é o placeholder. " +
      "Troque CONFIG.whatsapp em js/main.js antes de publicar."
    );
  }

})();
