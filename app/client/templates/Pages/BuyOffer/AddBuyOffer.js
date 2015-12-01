AutoForm.hooks({
    AddBuyOfferForm: {
        onSuccess: function(formType, result) {
            Router.go('ListBuyOffer');
        }
    }
});