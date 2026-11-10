
/* =========================================
   MENU HAMBÚRGUER - ANIMAL PLANET
========================================= */

// 1. Seleciona o botão do menu hamburguer
const menuHamburguer = document.getElementById("menu-hamburguer");

// 2. Seleciona o menu de navegação
const nav = document.querySelector("nav");

// 3. Escuta o evento de clique no botão
menuHamburguer.addEventListener("click", function () {

    // 4. Alterna a classe "active" no menu
    // Se estiver fechado, abre.
    // Se estiver aberto, fecha.
    nav.classList.toggle("active");

});
