module.exports = function pizza() {
    var total = 0;
    var small = 0;
    var med = 0;
    var large = 0;
    var howManyLarge = 0;
    var howManyMed = 0;
    var howManySmall = 0;
    var orders = 0;
    const orderStore = [];
    // var cartClear;
    // var orderId;
    // var status;
    // var amount;


    // function clearCart(){
    //    var cartClear ={
    //     total:0,
    //     howManySmall:0,
    //     howManyMed:0,
    //     howManyLarge:0,
    //     large:0,
    //     small:0,
    //     med:0,

    //     }

    //     return cartClear;
    // }

    function add(pizzaType) {

        if (pizzaType === 'small') {

            total += 31.99;
            howManySmall += 1;
            small += 31.99;

        }
        else if (pizzaType === 'medium') {

            total += 58.99;
            howManyMed += 1;
            med += 58.99;
        }

        else if (pizzaType === 'large') {

            total += 87.99;
            howManyLarge += 1;
            large += 87.99;
        }
    }

    function getTotal() {
        return total.toFixed(2);
    }

    function getLarge() {
        return large.toFixed(2);;
    }

    function getSmall() {
        return small.toFixed(2);;
    }
    function getMedium() {
        return med.toFixed(2);;
    }

    function amountOfLarge() {
        return howManyLarge;
    }

    function amountOfSmall() {
        return howManySmall;
    }
    function amountOfMedium() {
        return howManyMed;
    }

    function order() {
        if (total > 0) {
            orderStore.push({
                orderId: orders += 1,
                status: "Payment due",
                amount: total.toFixed(2)
            });
        }
    }

    function getOrderId() {
        return orderStore;
    }

    function clearScreen() {
        console.log("value of amount: " + orderStore[0].amount);
        // orderStore[0].amount = 0;
        // orderStore.length = 0;
        // orderStore.map(x => orderStore[0].amount = 0);
        

        // orderStore.forEach(function (element) {
        //      orderStore.amount = 0;
        //     // orderStore.amount = 0;
        // });
    }

    function getClearScreen() {
        console.log("array :  " + JSON.stringify(orderStore));
        return orderStore;
    }

    // function statuses(){
    //     if (getOrderId().status == "Payment due"){
    //         return 'pay';
    //     }
    // }

    return {
        add,
        getTotal,
        getMedium,
        getLarge,
        getSmall,
        order,
        amountOfLarge,
        amountOfMedium,
        amountOfSmall,
        getOrderId,
        // clearCart,
        clearScreen,
        getClearScreen,
        // statuses
    }
}
