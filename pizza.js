module.exports = function pizza() {
var total = 0;
var small = 0;
var med = 0;
var large = 0;

    function getPizzaVal(pizzaType){
        if (pizzaType === 'small') {

            small += 31.99;

        }
        else if (pizzaType === 'medium') {

         med += 58.99;
        }

        else if (pizzaType === 'large') {

         large += 87.99;
        }
    }

    function add(pizzaType) {

        if (pizzaType === 'small') {

            total += 31.99;

        }
        else if (pizzaType === 'medium') {

            total += 58.99;
        }

        else if (pizzaType === 'large') {

            total += 87.99;
        }
    }

    function getTotal(){
        return total;
    }

    function getLarge(){
        return large;
    }

    function getSmall(){
        return small;
    }
    function getMedium(){
        return med;
    }

    function order(){
        const order = {
            orderId : 32,
            status : "Payment due",
            amount : total
          }

    }

    return {
        add,
        getPizzaVal,
        getTotal,
        getMedium,
        getLarge,
        getSmall,
        order
    }
}
