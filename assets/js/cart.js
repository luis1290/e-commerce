/* Carrito */


// #1 Base de datos
const db = [
  {
    id: 1,
    name: "ryzen-9-7900",
    price: 456,
    image: "assets/img/cpu/amd-ryzen-3-3200g-oem.png",
    category: "Procesador",
    quantity: 1,
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
    <article class="products__card hoodies">
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
          <h3 class="cart__title">${product.name} <span class="cart__price">$${product.price
      }</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${product.id
      }">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${product.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${product.id
      }"></i>
            </div>

            <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${product.quantity - article.qty
      } unidades</span>
            <span class="cart__subtotal-price">${product.price * article.qty
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
  window.localStorage.setItem('cartDB', JSON.stringify(cart))
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

        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.modal__close');
        modal.classList.add('modal--show');
        closeModal.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.remove('modal--show');
        });
      }
    } else {
      cart.push({ id, qty });
    }
  } else {

    const modal = document.querySelector('.modal__exhausted');
    const closeModal = document.querySelector('.modal__close-exhausted');
    modal.classList.add('modal--show-exhausted');
    closeModal.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('modal--show-exhausted');
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
  let confirm = false
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",

        });
        confirm = true
      } else {
        swal("Your imaginary file is safe!");
        confirm = false
      }
    });

  return confirm
}

// #5 Remover articulos
function removeFromCart(id, qty = 1) {
  const article = cart.find((a) => a.id === id);

  if (article && article.qty - qty > 0) {
    article.qty--;
  } else {
    const confirm =
      Swal.fire({
        title: '¡Advertencia!',
        text: "¿Estas seguro de eliminar este articulo?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '¡No, Eliminar!',
        confirmButtonText: '¡Si, Eliminar!'
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

  const modalBuys = document.querySelector('.modal__buys');
  const closeModalBuys = document.querySelector('.modal__close-buys');
  modalBuys.classList.add('modal--show-buys');

  closeModalBuys.addEventListener('click', (e) => {
    e.preventDefault();
    modalBuys.classList.remove('modal--show-buys');
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
      title: '¡Advertencia!',
      text: "¿Estas seguro de eliminar este articulo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '¡No, Eliminar!',
      confirmButtonText: '¡Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFromCart(id);
      }
    })
  }
});

const actionButtons = document.getElementById("action-buttons");

actionButtons.addEventListener("click", function (e) {
  const clear = e.target.closest("#cart-empty");
  const buy = e.target.closest("#cart-checkout");

  if (clear) {
    clearCart();
  }

  if (buy) {
    checkout();
  }
});

//Buscar por categoria 

const btnAll = document.getElementById('all')
const btnCpu = document.getElementById('cpu')
const btnMotherCard = document.getElementById('motherCard')
const btnGraphics = document.getElementById('gpu')
const productsContent = document.getElementById('products__content')

btnAll.addEventListener('click', ()=>{
  printProducts()
})

btnCpu.addEventListener('click', ()=>{
    let html = ''
    const cpu = products.filter(product => product.category === 'Procesador')
    for (const product of cpu) {
      html += `
      <article class="products__card hoodies">
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
    `
    }
    productContainer.innerHTML = html
})

btnMotherCard.addEventListener('click', ()=>{
    let html = ''
    const tm = products.filter(product => product.category === 'tm')
    for (const product of tm) {
      html += `
      <article class="products__card hoodies">
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
    `
    }
    productContainer.innerHTML = html
})

btnGraphics.addEventListener('click', ()=>{
  let html = ''
  const gpu = products.filter(product => product.category === 'gpu')
  for (const product of gpu) {
    html += `
    <article class="products__card hoodies">
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
  `
  }
  productContainer.innerHTML = html 
})
