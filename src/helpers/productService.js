export const ProductService = {
  isEmpty,
  isExisting,
  getProductFromLocalStorage,
  saveProductFavToLocalStorage,
  addProductCartByQteToLocalStorage,
  deleteProductFromLocalStorage,
  deleteAllProductFromLocalStorage,
};

/** delete the productFav from localStorage */
function deleteProductFromLocalStorage(product, id) {
  let products = JSON.parse(localStorage.getItem(product) || "[]");
  let productIds = products.map((item) => item.id);
  const index = productIds.indexOf(id);
  if (index > -1) {
    products.splice(index, 1);
    localStorage.setItem(product, JSON.stringify(products));
    return products;
  }
}

/** delete the productFav from localStorage */
function deleteAllProductFromLocalStorage() {
  localStorage.setItem("product_cart", JSON.stringify([]));
  return JSON.parse(localStorage.getItem("product_cart") || "[]");
}
/** get the productCart from localStorage */
function getProductFromLocalStorage(product) {
  const products = JSON.parse(localStorage.getItem(product) || "[]");
  return products;
}

/** save the product in localStorage */
function saveProductFavToLocalStorage(productToSave) {
  let productFav = JSON.parse(localStorage.getItem("product_fav") || "[]");
  let productExist = isExisting(productFav, productToSave);
  if (!productExist) {
    productFav.push(productToSave);
    localStorage.setItem("product_fav", JSON.stringify(productFav));
    return productFav;
  } else {
    let productToUpdate = productFav
      .filter((product) => product.id === productToSave.id)
      .shift();
    productToUpdate.quantity++;
    const index = productFav.indexOf(productToUpdate);
    productFav.splice(index, 1);
    productFav.push(productToUpdate);
    localStorage.setItem("product_fav", JSON.stringify(productFav));
    return productFav;
  }
}

/** save the product with QTE in localStorage */
function addProductCartByQteToLocalStorage(
  productToSave,
  productQte,
  productSize
) {
  let quantity = productQte === undefined ? "1" : productQte;
  let size = productSize === undefined ? "S" : productSize;
  let productCart = JSON.parse(localStorage.getItem("product_cart") || "[]");
  let productExist = isExisting(productCart, productToSave);
  if (!productExist) {
    productToSave.quantity = parseInt(quantity);
    productCart.push(productToSave);
    localStorage.setItem("product_cart", JSON.stringify(productCart));
    return productCart;
  } else {
    let productToUpdate = productCart
      .filter((product) => product.id === productToSave.id)
      .shift();
    productToUpdate.quantity = parseInt(quantity);
    productToUpdate.size = size;
    const index = productCart.indexOf(productToUpdate);
    productCart.splice(index, 1);
    productCart.push(productToUpdate);
    localStorage.setItem("product_cart", JSON.stringify(productCart));
    return productCart;
  }
}

function isExisting(array, item) {
  let arrayId = array.map((item) => item.id);
  let found = arrayId.includes(item.id);
  if (found === true) {
    return true;
  }
  return false;
}
/** check if empty*/
function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return false;
  }
  return true;
}
