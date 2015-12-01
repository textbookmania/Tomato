AutoForm.hooks({
    EditBuyOfferForm: {
        onSuccess: function(formType, result) {
            Router.go('ListBuyOffer');
        }
    }
});
