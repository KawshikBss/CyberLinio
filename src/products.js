const products = {
    sale: [
        {
            id: 0,
            title: "Aliquip",
            image: require("../assets/Product.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 100,
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 1,
            title: "Exercitation",
            image: require("../assets/Product2.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 130,
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 2,
            title: "Eiusmod",
            image: require("../assets/Product3.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 50,
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 3,
            title: "Veniam",
            image: require("../assets/Product.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 190,
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 4,
            title: "Est minim",
            image: require("../assets/Product2.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 200,
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 5,
            title: "Ea ullamco",
            image: require("../assets/Product3.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 105,
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 6,
            title: "Commodo",
            image: require("../assets/Product.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 40,
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
    ],
    new: [
        {
            id: 0,
            title: "Aliquip",
            image: require("../assets/Product.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 100,
            discount: 0,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 1,
            title: "Exercitation",
            image: require("../assets/Product2.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 130,
            discount: 0,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 2,
            title: "Eiusmod",
            image: require("../assets/Product3.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 50,
            discount: 0,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 3,
            title: "Veniam",
            image: require("../assets/Product.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 190,
            discount: 0,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 4,
            title: "Est minim",
            image: require("../assets/Product2.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 200,
            discount: 0,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 5,
            title: "Ea ullamco",
            image: require("../assets/Product3.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 105,
            discount: 0,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
        {
            id: 6,
            title: "Commodo",
            image: require("../assets/Product.png"),
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 40,
            discount: 0,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
        },
    ],
};

export default products;
