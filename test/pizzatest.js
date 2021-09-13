const assert = require('assert');
const Pizza = require('../pizza');

describe('Pizza', function () {

    const pizza = Pizza();

    it('should be able reset values on screen', function () {
        pizza.add('small');
        pizza.order();

        assert([{
            orderId: 1,
            status: "Payment due"
            ,
            amount: 31.99
        }

        ], pizza.getOrderId());


    });

    it('should be able reset values on screen', function () {
        pizza.add('small');
        pizza.add('small');
        pizza.order();
        pizza.getOrderId();

        assert([{
            orderId: 1,
            status: "Payment due"
            ,
            amount: 0
        }

        ], pizza.clearScreen())


    });


    // it('make sure call cost and sms cost values that equal 0, do not get displayed', function () {
    //     const settingsBill = SettingsBill();
    //     settingsBill.setSettings({
    //         smsCost: 5,
    //         callCost: 0,
    //         warningLevel: 5,
    //         criticalLevel: 10
    //     });

    //     settingsBill.recordAction('sms');
    //     settingsBill.recordAction('call');

    //     assert.equal([{
    //         cost: 5,
    //         timestamp: " [Date: 2021-07-28T16:42:37.676Z]"
    //         ,
    //         type: 'sms'
    //     }
    //     ], settingsBill.actions());


    // });
});
