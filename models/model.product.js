class ProductModel {
  id: string;
  product_name: string;
  price: number;
  quantity: number;

  constructor(product_name, price, quantity) {
    this.id = null;
    this.product_name = product_name;
    this.price = price;
    this.quantity = quantity;
  }
}

module.exports = ProductModel;
