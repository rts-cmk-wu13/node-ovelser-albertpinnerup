basket = (function () {
    let items = [];

    return {
        items,

        addItem: function (item) {
            items.push(item)
        },
        removeITem: function (itemnametoremove) {
            let itemIndex = items.findIndex(item => item.name == itemnametoremove)

            items.splice(itemIndex, 1)
        },
        totalItems: function () {
            return items.length
        },
        totalPrice: function () {
            let totalPrice = items.reduce((prev, current) => prev + current.price, 0)

            return totalPrice
        },
    }
})()

module.exports = basket;