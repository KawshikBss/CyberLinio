const paymentMethods = [
    {
        name: 'Online Payment',
        sub: [
            {
                name: 'Google Pay',
                image: require('../assets/gpay.png'),
            },
            {
                name: 'PayPal',
                image: require('../assets/paypal.png'),
            },
            {
                name: 'Apple Pay',
                image: require('../assets/applepay.png'),
            },
        ],
    },
    {
        name: 'Credit / Debit Card',
        sub: [
            {
                name: 'American Xpress',
                image: require('../assets/amex.png'),
            },
            {
                name: 'Master',
                image: require('../assets/mastercard.png'),
            },
            {
                name: 'Visa',
                image: require('../assets/visa.png'),
            },
        ],
    },
    {
        name: 'Installment',
    },
    {
        name: 'Cash On Delivery',
    },
];

export default paymentMethods;
