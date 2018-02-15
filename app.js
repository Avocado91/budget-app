var budgetController = (function() {

    //some code

})();



var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value, //item name
            value: document.querySelector(DOMstrings.inputValue).value //item value
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();



//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    function ctrlAddItem() {
        //get the filled input data
        var input = UIController.getInput();
        console.log(input);

       //add the item to the budget controller

       //add the new item to the UI

       //calculate budget

       //display the budget to the UI

    }

   document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

   document.addEventListener('keypress', function(e) {
       if (e.keycode === 13 || e.which === 13) {
           ctrlAddItem();
       }

   });

})(budgetController, UIController);