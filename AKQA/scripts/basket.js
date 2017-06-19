$(document).ready(function(){
    basket.renderItems();
    basket.subTotal();
});

var basket = {
    productItems:[
        {item:'Cotton T-Shirt, Medium', price:'1.99', quantity: 1, cost:'1.99'},
        {item:'Baseball Cap, One Size', price:'2.99', quantity: 2, cost:'5.99'},
        {item:'Swim Shorts, Medium', price:'3.99', quantity: 3, cost:'3.99'}
    ],

    currencySymbol: "£",
    SubTotalAmount: 0,
    VatAmount : 0,
    TotalAmount : (this.SubTotalAmount + this.VatAmount),
    
    RemoveItem: function(index){
        if(confirm('Are you sure you want to delete this item?')){
            $("#row_" + index).remove();
            if($(".basket tr.basket-row").length < 1){
                $("#btnSubmit").addClass('btn-disabled');
            }
            else{
                $("#btnSubmit").removeClass('btn-disabled');
            }
            this.subTotal();
        }        
    },
    
    calculateCost: function (index, price, quantity)
    {
        var quantityUpdated = $("#txtQuantity_" + (index + 1)).val();

        $("#row_"+ (index+1)).find(".cost").html(basket.currencySymbol + parseFloat((quantityUpdated * parseFloat(price)).toFixed(2)));
        this.subTotal();
    },

    subTotal:function() {
        var subTotal = 0;
    
        $(".basket").find("td.cost").each(function(i, item){
            subTotal += parseFloat($(item).html().replace(basket.currencySymbol, ''));
        });
        
        this.SubTotalAmount = parseFloat(parseFloat(subTotal).toFixed(2));
        this.VatAmount = parseFloat((this.SubTotalAmount * 20) / 100).toFixed(2);
        this.TotalAmount = (parseFloat(this.SubTotalAmount) + parseFloat(this.VatAmount)).toFixed(2);
        
        $("#subTotal").html(basket.currencySymbol + this.SubTotalAmount);
        $("#vatAmount").html(basket.currencySymbol + this.VatAmount);
        $("#totalAmount").html(basket.currencySymbol + this.TotalAmount);
    },

    renderItems:  function(){
        var html = "<tbody>";
        $.each(this.productItems, function(index, itm){
            html += '<tr class="basket-row" id="row_'+ (index + 1) + '">';
            html += '<td scope="row" data-label="Product" class="item-col prod">'+ itm.item +'</td>';
            html += '<td data-label="Price" class="item-col price">' + basket.currencySymbol + itm.price+'</td>';
            html += '<td data-label="Qty" class="item-col qty"><input id="txtQuantity_' + (index + 1) + '" type="number" value="'+itm.quantity+'" min="1" max="10" onchange="basket.calculateCost('+ index+','+ itm.price+','+ itm.quantity+')"/></td>';
            html += '<td data-label="Cost" class="item-col cost">'+ basket.currencySymbol + itm.cost + '</span>';
            html += '<td class="item-col remove"><span onclick="basket.RemoveItem(' + (index + 1) + ')"><img src="images/delete.png" alt="delete the item"/></span></td>';
            html += '</tr>';
        });
        html += "</tbody>";
        $(".basket").append(html);
    }
}

