let recorder = document.getElementById("recorder");
let clothes__wrapper = document.getElementById("clothes__wrapper");
let checkoutEl = document.getElementById("checkout");
let findEl = document.getElementById("find");
let buy = document.getElementById("buy");

// variables

let userBalance = 200000;
let number = -1;
let img=document.createElement('img');
let clothes = [
  {
    kiyim: "Shorts",
    price: 1000,
    type: "clothe",
    region: "England",
    item: 5,
    url: `https://www.amazon.co.uk/PROJECT-Summer-Shorts-Cotton-Combat/dp/B07CZP8PB6?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A5B43TV7OCTNN`,
  },
  {
    kiyim: "Cap",
    price: 1,
    type: "clothe",
    region: "Uzbekistan",
    item: 5,
    url: `https://capterone.com/products/black?variant=40036519051423&currency=EUR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic`,
  },
  {
    kiyim: "Sweatshort",
    price: 3000,
    type: "clothe",
    region: "Turkish",
    item: 2,
    url: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.kickgame.co.uk%2Fcdn%2Fshop%2Fproducts%2Ffear-of-god-essentials-core-collection-sweatshort-stretch-limo_1.png%3Fv%3D1641292470%26width%3D1024&tbnid=VSmOAOSDn8WhbM&vet=12ahUKEwinoeyMltiCAxXhRaQEHUKuBhUQ94IIKAJ6BAgBEHs..i&imgrefurl=https%3A%2F%2Fwww.kickgame.co.uk%2Fproducts%2Ffear-of-god-essentials-sweat-short-black-160su212040f&docid=UGqmptXttwqVKM&w=1024&h=1024&itg=1&q=sweatshort&ved=2ahUKEwinoeyMltiCAxXhRaQEHUKuBhUQ94IIKAJ6BAgBEHs`,
  },
];

let random = Math.floor(Math.random * 3);
findEl.addEventListener("click", () => {
  number ++;
  let li = document.createElement("li");
  if (number == 3) {
    number.disabled=true;
  }
  li.innerHTML = `
    <img src="${clothes[number].url}" alt:"there is nothing" width:300 height:300></img>
    <h3>Kiyim: ${clothes[number].kiyim}</h3>
    <h4>Price: ${clothes[number].price}$</h4>
    <h4>Region: ${clothes[number].region}</h4>
    <h4>${clothes[number].item} left</h4>
    <button id:"buy">Buy</button>
    `;
  clothes__wrapper.appendChild(li);
  balance.textContent = `Your balance: ${userBalance}$`;
});

