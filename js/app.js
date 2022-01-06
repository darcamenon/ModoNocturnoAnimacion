let body = document.body;
let modoNocturno = document.querySelector("#modo");
let loading = document.querySelector("#loading");
let noche = document.querySelector("#noche");
console.log(noche);
console.log(modoNocturno);
modoNocturno.addEventListener("click", () => {
   body.classList.add("modoDia");
   loading.style.color = "#000";
   modoNocturno.style.display = "none";

   noche.style.display = "inline";
   noche.classList.add("modoUno");
   // const html =
   //     `
   //   <i id="noche" class="fas fa-sun"></i>
   //   `

   // let divDia = document.createElement('div');
   // divDia.innerHTML = html;
   // divDia.classList.add('modoUno');
   // divDia.style.color = '#000';

   // console.log(divDia);
   // body.appendChild(divDia);
});
noche.addEventListener("click", () => {
   document.location.reload();
});
