function Customer(utility) {
    this.CustomerName = `mrinal`;
    this.CustomerCode = `C001`;
    this.CustomerAmount = 100;
    //this.CustomerAmountColor = `Red`;
    this.SalesDateTime = utility.getDate();
    this.CalculateDiscount = function () {
        return 10;
    }
}

function CustomerGold(utility) {
    this.CustomerName = `mrinal`;
    this.CustomerCode = `C001`;
    this.CustomerAmount = 100;
    //this.CustomerAmountColor = `Red`;
    this.SalesDateTime = utility.getDate();
    this.CalculateDiscount = function () {
        return 20;
    }
}


function Factory() {
    return {
        CreateCustomer: function (type, utility) {
            if (type == 1) {
                return new Customer(utility);
            }
            else {
                return new CustomerGold(utility);
            }
            
        }
    }
}