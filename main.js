const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getOrders: function () {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"
}

const burgerMeal = {
    sandwichType: "hamburger",
    fries: false,
    drinkSize: "small"
}

const tendiesMeal = {
    sandwichType: "nah sandwich - tendies",
    fries: true,
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder(tendiesMeal);
restaurant.placeOrder(burgerMeal);
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerMeal);
restaurant.placeOrder(burgerMeal);

// Invoke the function to return the list of all orders
restaurant.getOrders();

// Output all orders to the console using console.table()
console.table(restaurant.getOrders());