document.querySelector('#card_number').oninput = function () {
    var foo = this.value.split(" ").join("");
    if (foo.length > 0) {
        foo = foo.match(new RegExp('.{1,4}', 'g')).join(" ");
    }
    this.value = foo;
};

(function() {
    var ccName = $('input.cc-name'),
        ccNumber = $('input.cc-number'),
        ccExpiry = $('input.cc-expiry'),
        ccCVC = $('input.cc-cvc')
    
    $('[data-numeric]').payment('restrictNumeric');
    
    
    ccExpiry.payment('formatCardExpiry');
   
    
//
})();