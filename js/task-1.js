'use strict';
const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance; // Get current balance
  },
  getDiscount() {
    return this.discount; // Get current discount
  },
  setDiscount(value) {
    this.discount = value; // Set new velue of discount
  },
  getOrders() {
    return this.orders; // Get currnet orders
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order); // Add new order and calculate new value of current balance
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
