/* Carrito */

// #1 Base de datos
const db = [
  {
    id: 1,
    name: "ryzen-9-7900",
    price: 456,
    image: "assets/img/cpu/amd-ryzen-9-7900.png",
    category: "Procesador",
    quantity: 5,
  },
  {
    id: 2,
    name: "amd-ryzen-3-3200g-oem",
    price: 356,
    image: "assets/img/cpu/amd-ryzen-3-3200g-oem.png",
    category: "Procesador",
    quantity: 8,
  },
  {
    id: 3,
    name: "amd-ryzen-5-7600",
    price: 406,
    image: "assets/img/cpu/amd-ryzen-5-7600.png",
    category: "Procesador",
    quantity: 15,
  },
  {
    id: 4,
    name: "amd-ryzen-7-7700",
    price: 445,
    image: "assets/img/cpu/amd-ryzen-7-7700.png",
    category: "Procesador",
    quantity: 9,
  },
  {
    id: 5,
    name: "intel-core-i5-12400",
    price: 456,
    image: "assets/img/cpu/intel-core-i5-12400.png",
    category: "Procesador",
    quantity: 5,
  },
  {
    id: 6,
    name: "intel-core-i5-13600kf",
    price: 556,
    image: "assets/img/cpu/intel-core-i5-13600kf.png",
    category: "Procesador",
    quantity: 9,
  },
  {
    id: 7,
    name: "intel-core-i7-12700f",
    price: 642,
    image: "assets/img/cpu/intel-core-i7-12700f.png",
    category: "Procesador",
    quantity: 9,
  },
  {
    id: 8,
    name: "asrock-b650-pg-lightning",
    price: 789,
    image: "assets/img/tm/asrock-b650-pg-lightning.png",
    category: "tm",
    quantity: 7,
    categoryName: "Tarjeta Madre"
  },
  {
    id: 9,
    name: "asrock-b660m-steel-legend",
    price: 799,
    image: "assets/img/tm/asrock-b660m-steel-legend.png",
    category: "tm",
    quantity: 5,
  },
  {
    id: 10,
    name: "asus-prime-b650m-a-wifi",
    price: 689,
    image: "assets/img/tm/asus-prime-b650m-a-wifi.png",
    category: "tm",
    quantity: 3,
  },
  {
    id: 11,
    name: "asus-rog-maximus-z790-hero",
    price: 679,
    image: "assets/img/tm/asus-rog-maximus-z790-hero.png",
    category: "tm",
    quantity: 4,
  },
  {
    id: 12,
    name: "gigabyte-b550m-ds3h",
    price: 798,
    image: "assets/img/tm/gigabyte-b550m-ds3h.png",
    category: "tm",
    quantity: 7,
  },
  {
    id: 13,
    name: "gigabyte-b550m-gaming",
    price: 754,
    image: "assets/img/tm/gigabyte-b550m-gaming.png",
    category: "tm",
    quantity: 3,
  },
  {
    id: 14,
    name: "gigabyte-geforce-rtx-3080-gaming-oc-12-gb-oem",
    price: 1350,
    image: "assets/img/GPU/gigabyte-geforce-rtx-3080-gaming-oc-12-gb-oem.png",
    category: "gpu",
    quantity: 4,
  },
  {
    id: 15,
    name: "gigabyte-nvidia-geforce-rtx-4070-ti-gaming-oc-12gb",
    price: 1500,
    image:
      "assets/img/GPU/gigabyte-nvidia-geforce-rtx-4070-ti-gaming-oc-12gb.png",
    category: "gpu",
    quantity: 6,
  },
  {
    id: 16,
    name: "msi-geforce-gtx-1650-d6-ventus-xs-oc",
    price: 1235,
    image: "assets/img/GPU/msi-geforce-gtx-1650-d6-ventus-xs-oc.png",
    category: "gpu",
    quantity: 5,
  },
  {
    id: 17,
    name: "msi-geforce-gtx-1660-super-gaming-x-6-gb",
    price: 1589,
    image: "assets/img/GPU/msi-geforce-gtx-1660-super-gaming-x-6-gb.png",
    category: "gpu",
    quantity: 2,
  },
  {
    id: 18,
    name: "sapphire-amd-radeon-rx-7900-xt-20gb",
    price: 1256,
    image: "assets/img/GPU/sapphire-amd-radeon-rx-7900-xt-20gb.png",
    category: "gpu",
    quantity: 6,
  },
  {
    id: 19,
    name: "sapphire-pulse-radeon-rx-6400-4-gb",
    price: 1500,
    image: "assets/img/GPU/sapphire-pulse-radeon-rx-6400-4-gb.png",
    category: "gpu",
    quantity: 4,
  },
  {
    id: 20,
    name: "zotac-geforce-rtx-3060-twin-edge-8-gb",
    price: 1356,
    image: "assets/img/GPU/zotac-geforce-rtx-3060-twin-edge-8-gb.png",
    category: "gpu",
    quantity: 2,
  },
  {
    id: 21,
    name: "zotac-geforce-rtx-3060ti-twin-edge-8-gb",
    price: 1599,
    image: "assets/img/GPU/zotac-geforce-rtx-3060ti-twin-edge-8-gb.png",
    category: "gpu",
    quantity: 4,
  },
  {
    id: 22,
    name: "zotac-geforce-rtx-3070-twin-edge-oc-8-gb-white-edition",
    price: 1500,
    image:
      "assets/img/GPU/zotac-geforce-rtx-3070-twin-edge-oc-8-gb-white-edition.png",
    category: "gpu",
    quantity: 4,
  },
  {
    id: 23,
    name: "adata-xpg-lancer-8-gb-ddr5-5200-cl38-blanco",
    price: 100,
    image: "assets/img/RAM/adata-xpg-lancer-8-gb-ddr5-5200-cl38-blanco.png",
    category: "ram",
    quantity: 14,
  },
  {
    id: 24,
    name: "adata-xpg-lancer-16-gb-ddr5-5200",
    price: 99,
    image: "assets/img/RAM/adata-xpg-lancer-16-gb-ddr5-5200.png",
    category: "ram",
    quantity: 4,
  },
  {
    id: 25,
    name: "adata-xpg-spectrix-d41-rgb-8-gb-ddr4-3200-negro",
    price: 90,
    image: "assets/img/RAM/adata-xpg-spectrix-d41-rgb-8-gb-ddr4-3200-negro.png",
    category: "ram",
    quantity: 4,
  },
  {
    id: 26,
    name: "gskill-ripjaws-v-8-gb-ddr4-3600-rojo",
    price: 85,
    image: "assets/img/RAM/gskill-ripjaws-v-8-gb-ddr4-3600-rojo.png",
    category: "ram",
    quantity: 14,
  },
  {
    id: 27,
    name: "teamgroup-t-force-delta-tuf-rgb-8-gb-ddr4-3200",
    price: 70,
    image: "assets/img/RAM/teamgroup-t-force-delta-tuf-rgb-8-gb-ddr4-3200.png",
    category: "ram",
    quantity: 24,
  },
  {
    id: 28,
    name: "asus-rog-strix-850w-80-plus-gold",
    price: 70,
    image: "assets/img/fuente/asus-rog-strix-850w-80-plus-gold.png",
    category: "power",
    quantity: 24,
  },
  {
    id: 29,
    name: "cooler-master-mwe-750w-v2-gold",
    price: 85,
    image: "assets/img/fuente/cooler-master-mwe-750w-v2-gold.png",
    category: "power",
    quantity: 14,
  },
  {
    id: 30,
    name: "EVGA-600W-80-Plus",
    price: 95,
    image: "assets/img/fuente/EVGA-600W-80-Plus.png",
    category: "power",
    quantity: 8,
  },
  {
    id: 31,
    name: "seasonic-focus-gm-750-gold-semi-modular",
    price: 70,
    image: "assets/img/fuente/seasonic-focus-gm-750-gold-semi-modular.png",
    category: "power",
    quantity: 24,
  },
  {
    id: 32,
    name: "seasonic-focus-sgx-650-v2-gold-modular-sfx",
    price: 99,
    image: "assets/img/fuente/seasonic-focus-sgx-650-v2-gold-modular-sfx.png",
    category: "power",
    quantity: 24,
  },
  {
    id: 33,
    name: "cooler-master-hyper-212-black-edition-silencio-fan-rgb",
    price: 99,
    image:
      "assets/img/enfriamiento/cooler-master-hyper-212-black-edition-silencio-fan-rgb.png",
    category: "cooler",
    quantity: 24,
  },
  {
    id: 34,
    name: "coolermaster-masterliquid-ml360l-v2-argb",
    price: 105,
    image:
      "assets/img/enfriamiento/coolermaster-masterliquid-ml360l-v2-argb.png",
    category: "cooler",
    quantity: 11,
  },
  {
    id: 35,
    name: "corsair-h55-rgb",
    price: 99,
    image: "assets/img/enfriamiento/corsair-h55-rgb.png",
    category: "cooler",
    quantity: 20,
  },
  {
    id: 36,
    name: "corsair-h100-rgb",
    price: 97,
    image: "assets/img/enfriamiento/corsair-h100-rgb.png",
    category: "cooler",
    quantity: 13,
  },
  {
    id: 37,
    name: "corsair-ml140-rgb-pack-de-2",
    price: 99,
    image: "assets/img/enfriamiento/corsair-ml140-rgb-pack-de-2.png",
    category: "cooler",
    quantity: 24,
  },
  {
    id: 38,
    name: "nzxt-kraken-120",
    price: 103,
    image: "assets/img/enfriamiento/nzxt-kraken-120.png",
    category: "cooler",
    quantity: 8,
  },
  {
    id: 39,
    name: "ventilador-nzxt-f140-rgb-negro-pack-de-2",
    price: 115,
    image:
      "assets/img/enfriamiento/ventilador-nzxt-f140-rgb-negro-pack-de-2.png",
    category: "cooler",
    quantity: 4,
  },
  {
    id: 41,
    name: "case1",
    price: 115,
    image: "assets/img/Case/case1.png",
    category: "case",
    quantity: 4,
  },
  {
    id: 42,
    name: "case2",
    price: 118,
    image: "assets/img/Case/case2.png",
    category: "case",
    quantity: 14,
  },
  {
    id: 43,
    name: "case3",
    price: 125,
    image: "assets/img/Case/case3.png",
    category: "case",
    quantity: 8,
  },
  {
    id: 44,
    name: "Disco1",
    price: 125,
    image: "assets/img/almacenamiento/disco1.png",
    category: "disc",
    quantity: 8,
  },
  {
    id: 45,
    name: "Disco2",
    price: 135,
    image: "assets/img/almacenamiento/disco2.png",
    category: "disc",
    quantity: 18,
  },
  {
    id: 46,
    name: "Disco3",
    price: 105,
    image: "assets/img/almacenamiento/disco3.png",
    category: "disc",
    quantity: 8,
  },
  {
    id: 47,
    name: "Disco4",
    price: 125,
    image: "assets/img/almacenamiento/disco4.png",
    category: "disc",
    quantity: 8,
  },
];

const products = window.localStorage.getItem("productsDB")
  ? JSON.parse(window.localStorage.getItem("productsDB"))
  : db;

// #2 Pintar los productos en el DOM
const productContainer = document.getElementById("products__content");
const productGpu = document.getElementById("home");

function printProducts() {
  let html = "";
  for (const product of products) {
    html += `
    <article class="products__card mix ${product.category}">
      <div class="products__shape">
        <img src="${product.image}" alt="${product.name}" class="products__img">
      </div>

      <div class="products__data">
        <h2 class="products__name">${product.name}</h2>
        <div class="">
          <h3 class="products__price">$${product.price}</h3>
          <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
        </div>
        <button type="button" class="button products__button addToCart" data-id="${product.id}">
          <i class="bx bx-plus"></i>
        </button>
      </div>
    </article>
    `;
  }
  productContainer.innerHTML = html;
  window.localStorage.setItem("productsDB", JSON.stringify(products));
}

printProducts();

// #3 Carrito
let cart = window.localStorage.getItem("cartDB")
  ? JSON.parse(window.localStorage.getItem("cartDB"))
  : [];
const cartContainer = document.getElementById("cart__container");
const cartCount = document.getElementById("cart-count");
const itemsCount = document.getElementById("items-count");
const cartTotal = document.getElementById("cart-total");

function printCart() {
  let html = "";
  for (const article of cart) {
    const product = products.find((p) => p.id === article.id);
    html += `
    <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">${product.name} <span class="cart__price">$${
      product.price
    }</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${
                product.id
              }">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${product.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${
              product.id
            }"></i>
            </div>

            <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${
              product.quantity - article.qty
            } unidades</span>
            <span class="cart__subtotal-price">${
              product.price * article.qty
            }</span>
            </span>
            </div>
            </article>
            `;
  }
  cartContainer.innerHTML = html;
  cartCount.innerHTML = totalArticles();
  itemsCount.innerHTML = totalArticles();
  cartTotal.innerHTML = numberToCurrency(totalAmount());
  checkButtons();
  window.localStorage.setItem("cartDB", JSON.stringify(cart));
}

// const gpuContainer = document.getElementById("cart__container");
printCart();
// #4 Agragar al carrito
function addToCart(id, qty = 1) {
  const product = products.find((p) => p.id === id);
  if (product && product.quantity > 0) {
    const article = cart.find((a) => a.id === id);

    if (article) {
      if (checkStock(id, qty + article.qty)) {
        article.qty++;
      } else {
        const modal = document.querySelector(".modal");
        const closeModal = document.querySelector(".modal__close");
        modal.classList.add("modal--show");
        closeModal.addEventListener("click", (e) => {
          e.preventDefault();
          modal.classList.remove("modal--show");
        });
      }
    } else {
      cart.push({ id, qty });
    }
  } else {
    const modal = document.querySelector(".modal__exhausted");
    const closeModal = document.querySelector(".modal__close-exhausted");
    modal.classList.add("modal--show-exhausted");
    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("modal--show-exhausted");
    });
  }
  printCart();
}

function checkStock(id, qty) {
  const product = products.find((p) => p.id === id);
  return product.quantity - qty >= 0;
}

// funcion de mensaje de confirmacion
function confirmRemove() {
  let confirm = false;
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
      confirm = true;
    } else {
      swal("Your imaginary file is safe!");
      confirm = false;
    }
  });

  return confirm;
}

// #5 Remover articulos
function removeFromCart(id, qty = 1) {
  const article = cart.find((a) => a.id === id);

  if (article && article.qty - qty > 0) {
    article.qty--;
  } else {
    const confirm = Swal.fire({
      title: "¡Advertencia!",
      text: "¿Estas seguro de eliminar este articulo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "¡No, Eliminar!",
      confirmButtonText: "¡Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        cart = cart.filter((a) => a.id !== id);
        printCart();
      }
    });
  }
  printCart();
}

// #6 Eliminar del carrito
function deleteFromCart(id) {
  const article = cart.find((a) => a.id === id);
  cart.splice(cart.indexOf(article), 1);
  printCart();
}

// #7 Contar Artículos
function totalArticles() {
  return cart.reduce((acc, article) => acc + article.qty, 0);
}

// #8 El total
function totalAmount() {
  return cart.reduce((acc, article) => {
    /* Primero recorre los productos, la base de datos para traer las propiedades y luego busca al producto por su id y lo hace
    coincidir con el articulo, si lo encuntra multiplica el precio del producto por la cantidad de artículos del carrito*/
    const product = products.find((p) => p.id === article.id);
    return acc + product.price * article.qty;
  }, 0);
}

// #9 Limpiar Carrito
function clearCart() {
  cart = [];
  printCart();
}

// #10 Comprar
function checkout() {
  cart.forEach((article) => {
    const product = products.find((p) => p.id === article.id);

    product.quantity -= article.qty;
  });
  clearCart();
  printProducts();
  printCart();
  countProducts();

  const modalBuys = document.querySelector(".modal__buys");
  const closeModalBuys = document.querySelector(".modal__close-buys");
  modalBuys.classList.add("modal--show-buys");

  closeModalBuys.addEventListener("click", (e) => {
    e.preventDefault();
    modalBuys.classList.remove('modal--show-buys');
    location.reload();
  });
}

function checkButtons() {
  if (cart.length > 0) {
    document.getElementById("cart-checkout").removeAttribute("disabled");
    document.getElementById("cart-empty").removeAttribute("disabled");
  } else {
    document
      .getElementById("cart-checkout")
      .setAttribute("disabled", "disabled");
    document.getElementById("cart-empty").setAttribute("disabled", "disabled");
  }
}

function numberToCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/* Agregando eventos a nuestros botones */
productContainer.addEventListener("click", function (e) {
  const add = e.target.closest(".addToCart");

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }
});

// agregar al carrito GPU
productGpu.addEventListener("click", function (e) {
  const add = e.target.closest(".addToCartGPU");

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }
});

cartContainer.addEventListener("click", function (e) {
  const remove = e.target.closest(".removeToCart");
  const add = e.target.closest(".addToCart");
  const deleteCart = e.target.closest(".deleteToCart");

  if (remove) {
    const id = +remove.dataset.id;
    removeFromCart(id);
  }

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }

  if (deleteCart) {
    const id = +deleteCart.dataset.id;
    Swal.fire({
      title: "¡Advertencia!",
      text: "¿Estas seguro de eliminar este articulo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "¡No, Eliminar!",
      confirmButtonText: "¡Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFromCart(id);
      }
    });
  }
});

const actionButtons = document.getElementById("action-buttons");

actionButtons.addEventListener("click", function (e) {
  const clear = e.target.closest("#cart-empty");
  const buy = e.target.closest("#cart-checkout");

  if (clear) {
    Swal.fire({
      title: '¡Advertencia!',
      text: "¿Estas seguro de eliminar este articulo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      cancelButtonText: '¡No, Eliminar!',
      confirmButtonText: '¡Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
      }
    });
  }

  if (buy) {
    checkout();
  }
});


const container = document.getElementById('container__categories')

function countProducts() {
  const obj = {}
  const namesCategories = ['Procesador','Tarjeta Madre','Grafica','Ram','Power','Enfriamiento','Case','Almacenamiento']
  for(let i = 0; i < products.length; i++){
    let num = products[i].quantity
    if(obj[products[i].category]){
        obj[products[i].category] += num
    }else{
        obj[products[i].category] = num
    }
  }
  const arr = Object.entries(obj)
  for(let j = 0; j < namesCategories.length; j++) {
    arr[j].push(namesCategories[j])
  }
  console.log(arr)
  let html = `
    <li class="products__item products__line filter" data-filter="all">
    <h3 class="products__title">
      Mostrar todo
    </h3>
    <span class="products__stock">
      Mostrar todos los productos
    </span>
    </li>
  `
  for (const item of arr) {
    html += `
    <li class="products__item products__line filter" data-filter=".${item[0]}">
      <h3 class="products__title">
        ${item[2]}
      </h3>
      <span class="products__stock">
        ${item[1]} productos
      </span>
    </li>
    `
  }
  container.innerHTML = html
}


countProducts()

function closeCart(){
  const btnBuy = document.getElementById('cart-checkout')
  const cart = document.getElementById('cart')
  btnBuy.addEventListener('click', ()=>{
    cart.classList.remove('show-cart')
  })
}

closeCart()
