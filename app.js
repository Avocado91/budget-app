var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, desc, val) {
            var newItem, ID;

            //Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);           
            }
            //Push it into data structure
            data.allItems[type].push(newItem);

            //Return the new element
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    };

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
            type: document.querySelector(DOMstrings.inputType).value,                   //will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,     //item name
            value: document.querySelector(DOMstrings.inputValue).value                  //item value
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    function setupEventListeners() {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(e) {
            if (e.keycode === 13 || e.which === 13) {
                ctrlAddItem();
            }

        });
    }

    function ctrlAddItem() {
        var input, newItem;
        //get the filled input data
        input = UIController.getInput();
        //add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        //add the new item to the UI

        //calculate budget

         //display the budget to the UI

    };

    return {
        init: function() {
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();