// const loader = document.querySelector(".preloader");
// const main = document.querySelector(".main");

// function init() {
//   setTimeout(() => {
//     loader.style.opacity = 0;
//     loader.style.display = "none";

//     main.style.display = "block";
//     setTimeout(() => (main.style.opacity = 1), 50);
//   }, 4500);
// }

// init();

// const loader = document.querySelector(".preloader");
// const main = document.querySelector(".main");

// function init() {
//   // Verifica se o preloader já rodou nesta sessão
//   if (sessionStorage.getItem("preloaderExecutado") === "true") {
//     // Se já rodou, esconde o loader e mostra o conteúdo imediatamente
//     if (loader) loader.style.display = "none";
//     if (main) {
//       main.style.display = "block";
//       main.style.opacity = 1;
//     }
//   } else {
//     // Se for o primeiro acesso, roda a sua animação normal de 4.5s
//     setTimeout(() => {
//       if (loader) {
//         loader.style.opacity = 0;
//         loader.style.display = "none";
//       }

//       if (main) {
//         main.style.display = "block";
//         setTimeout(() => (main.style.opacity = 1), 50);
//       }

//       // Salva no navegador que o preloader já foi executado
//       sessionStorage.setItem("preloaderExecutado", "true");
//     }, 4500);
//   }
// }

// init();
// const loader = document.querySelector(".preloader");
// const main = document.querySelector(".main");

// function init() {
//   // Se a classe estiver ativa, significa que é o primeiro acesso e precisamos rodar o timer
//   if (document.body.classList.contains("com-loader")) {
//     setTimeout(() => {
//       // 1. Desvanece o loader mudando a opacidade
//       if (loader) loader.style.opacity = 0;

//       // 2. Espera o tempo do fade-out para tirar o loader do fluxo e mostrar o main
//       setTimeout(() => {
//         document.body.classList.remove("com-loader");
//         // Salva para não repetir nas próximas páginas
//         sessionStorage.setItem("preloaderExecutado", "true");
//       }, 500); // 500ms é o tempo da transition que colocamos no CSS do .preloader
//     }, 4500);
//   }
// }

// init();
const loader = document.querySelector(".preloader");

function init() {
  // Verifica se a classe de bloqueio está ativa
  if (document.documentElement.classList.contains("com-loader")) {
    // Após 4.5 segundos, começa o sumiço
    setTimeout(() => {
      if (loader) loader.style.opacity = 0;

      // Espera a transição de opacidade acabar (500ms) para liberar o main
      setTimeout(() => {
        document.documentElement.classList.remove("com-loader");
        // Grava na sessão para não repetir
        sessionStorage.setItem("preloaderExecutado", "true");
      }, 500);
    }, 4500);
  }
}

init();
