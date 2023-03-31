let itemsel = document.querySelector(".elements");
let cartitemsel = document.querySelector(".cartitems");
let subtotalel = document.querySelector(".subtotal");
let itemsincartel = document.querySelector(".btn-white sup")
const grocery = [
  {
    id: 1,
    name: "coconut, Indonesia (piece)",
    desc: "Fruits and Vegetables",
    price: 2.99,
    stock: 10,
    qty: 0,
  },
  {
    id: 2,
    name: "Soft Creme Cheese (200g)",
    desc: "Dairy and egg",
    price: 3.99,
    stock: 8,
    qty: 0,
  },
  {
    id: 3,
    name: "Pepsi Soda Can (33ml)",
    desc: "Soft drinkss and Juice",
    price: 1.1,
    stock: 5,
    qty: 0,
  },
  {
    id: 4,
    name: "Fresh Orange, spain (1kg)",
    desc: "Fruits and Vegetables",
    price: 1.75,
    stock: 7,
    qty: 0,
  },
  {
    id: 5,
    name: "Moisture Body Lotion",
    desc: "Personal Hygiene",
    price: 5.2,
    stock: 8,
    qty: 0,
  },
  {
    id: 6,
    name: "Nut Choclate Paste (750g)",
    desc: "Snacks, Sweets and Chips",
    price: 7.5,
    stock: 6,
    qty: 0,
  },
  {
    id: 7,
    name: "Mozzarella Mini Cheese",
    desc: "Dairy and eggs",
    price: 4.99,
    stock: 5,
    qty: 0,
  },
  {
    id: 8,
    name: "Mozzarella Cheese(125g)",
    desc: "Dairy and eggs",
    price: 4.3,
    stock: 5,
    qty: 0,
  },
  {
    id: 9,
    name: "Mens shampoo(400ml)",
    desc: "Personal Hygiene",
    price: 5.99,
    stock: 10,
    qty: 0,
  },
  {
    id: 10,
    name: "Frozen Oven-ready Poultry",
    desc: "Meat and Poultry",
    price: 12.99,
    stock: 7,
    qty: 0,
  },
  {
    id: 11,
    name: "Dark Chocolate with nuts",
    desc: "Snacks, Sweets and Chips",
    price: 2.0,
    stock: 6,
    qty: 0,
  },
  {
    id: 12,
    name: "Corn oil bottle(500ml)",
    desc: "Canned Food and oil",
    price: 3.75,
    stock: 4,
    qty: 0,
  },
  {
    id: 13,
    name: "Steak Salmon Fillet (1kg)",
    desc: "Fish and Seafood",
    price: 17.2,
    stock: 9,
    qty: 0,
  },
  {
    id: 14,
    name: "Sardine in Tomato sauce",
    desc: "Canned Food and oil",
    price: 3.5,
    stock: 7,
    qty: 0,
  },
  {
    id: 15,
    name: "Italian Pasta (500g)",
    desc: "Packets, Cereals",
    price: 2.99,
    stock: 5,
    qty: 0,
  },
  {
    id: 16,
    name: "Rice Cakes with chia Seeds",
    desc: "Packets, Cereals",
    price: 1.3,
    stock: 4,
    qty: 0,
  },
];
function displayitems() {
  grocery.forEach((product) => {
    itemsel.innerHTML += `
    <div class="col">
    <div class="card shadow">
    <button type="button" class="btn btn-light " data-bs-toggle="tooltip" data-bs-placement="left"
        title="Add to Wishlist" style="height: 40px;width: 40px; border-radius: 50%; margin-left: auto;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-suit-heart" viewBox="0 0 16 16">
          <path
            d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
        </svg>
      </button>
      <a href="product.html"><img src="images/${product.id}.jpg" class="card-img-top" alt="..."></a>
      <div class="card-body">
        <p class="card-text text-muted">${product.desc}</p>
        <h5 class="card-title">${product.name}</h5>
        <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-2 bd-highlight flex-grow-1">
            <p class="text-primary">$${product.price}</p>
          </div>
          <div class="p-2 bd-highlight hide">
            <button type="button" class="btn btn-danger" onclick="addtocart(${product.id})">+<svg xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg></button>
          </div>
        </div>

      </div>
    </div>
  </div>`;
  });
}
displayitems();
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updatecart();
function addtocart(id)
 {
  //check if product already exist
  if (cart.some((item) => item.id === id)) {
    changeqty("plus", id);
  }
  else {
    const item = grocery.find((product) => product.id === id);
    cart.push({
      ...item,
      qty: 1
    });
  }
  updatecart();
}
function updatecart() 
{
   rendercartitems();
   rendersubtotal();
   localStorage.setItem("CART",JSON.stringify(cart));
}
function rendercartitems()
{
  cartitemsel.innerHTML = "";
  cart.forEach((item) => {
    cartitemsel.innerHTML += `
    <table class="table" style="width:75vh;">
    <tbody>
      <tr>
        <td><img src="images/${item.id}.jpg" height="60"  width="60"></td>
        <td><p style="font-size: 15px;">${item.name}</p></td>
        <td>$${item.price}</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.id})">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
          </svg> ${item.qty}
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.id})">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg></td>
          <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeitem(${item.id})">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg></td>
      </tr>
    </tbody>
</table>`

  })
}
function changeqty(action, id) {
  cart = cart.map((item) => {
    let qty = item.qty;
    if (item.id === id) {
      if (action === "minus" && qty > 1) {
        qty--;
      }
      else if (action === "plus" && qty < item.stock) {
        qty++;
      }
    }
    return {
      ...item,
      qty,
    };
  })
  updatecart();
}
function rendersubtotal() {
  let totalprice = 0, totalitems = 0;
  cart.forEach((item) => {
    totalprice += item.price * item.qty;
    totalitems += item.qty;
  });
  subtotalel.innerHTML = `$${totalprice.toFixed(2)}`
  itemsincartel.innerHTML = totalitems;
}
function removeitem(id) {
  cart = cart.filter((item) => item.id!== id);
  updatecart();
}