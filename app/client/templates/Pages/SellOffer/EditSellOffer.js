AutoForm.hooks({
    EditSellOfferForm: {
        onSuccess: function(formType, result) {
            Router.go('ListSellOffer');
        }
    }
});
