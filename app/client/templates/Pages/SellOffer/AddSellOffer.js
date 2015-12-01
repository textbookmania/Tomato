AutoForm.hooks({
    AddSellOfferForm: {
        onSuccess: function(formType, result) {
            Router.go('ListSellOffer');
        }
    }
});
