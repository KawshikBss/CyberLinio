const products = {
    sale: [
        {
            id: 0,
            title: "Macbook",
            images: [
                require("../assets/Macbook.jpg"),
                require("../assets/Macbook2.jpg"),
                require("../assets/Macbook3.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 100,
            rating: "4.0",
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: false,
        },
        {
            id: 1,
            title: "Bing Headphone",
            images: [
                require("../assets/Headphone.jpg"),
                require("../assets/Headphone2.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 130,
            rating: "3.0",
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: false,
        },
        {
            id: 2,
            title: "Iphone",
            images: [
                require("../assets/Iphone.jpg"),
                require("../assets/Iphone2.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 50,
            rating: "3.5",
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: false,
        },
        {
            id: 3,
            title: "Macbook",
            images: [
                require("../assets/Macbook.jpg"),
                require("../assets/Macbook2.jpg"),
                require("../assets/Macbook3.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 100,
            rating: "3.0",
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: false,
        },
        {
            id: 4,
            title: "Bing Headphone",
            images: [
                require("../assets/Headphone.jpg"),
                require("../assets/Headphone2.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 130,
            rating: "3.0",
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: false,
        },
        {
            id: 5,
            title: "Iphone",
            images: [
                require("../assets/Iphone.jpg"),
                require("../assets/Iphone2.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 50,
            rating: "3.0",
            discount: 20,
            tag: "Free shipping",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: false,
        },
    ],
    new: [
        {
            id: 2,
            title: "Iphone",
            images: [
                require("../assets/Iphone.jpg"),
                require("../assets/Iphone2.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 50,
            rating: "3.5",
            discount: 20,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: true,
        },
        {
            id: 0,
            title: "Macbook",
            images: [
                require("../assets/Macbook.jpg"),
                require("../assets/Macbook2.jpg"),
                require("../assets/Macbook3.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 100,
            rating: "4.0",
            discount: 20,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: true,
        },
        {
            id: 1,
            title: "Bing Headphone",
            images: [
                require("../assets/Headphone.jpg"),
                require("../assets/Headphone2.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 130,
            rating: "3.0",
            discount: 20,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: true,
        },
        {
            id: 5,
            title: "Iphone",
            images: [
                require("../assets/Iphone.jpg"),
                require("../assets/Iphone2.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 50,
            rating: "3.0",
            discount: 20,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: true,
        },
        {
            id: 3,
            title: "Macbook",
            images: [
                require("../assets/Macbook.jpg"),
                require("../assets/Macbook2.jpg"),
                require("../assets/Macbook3.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 100,
            rating: "3.0",
            discount: 20,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: true,
        },
        {
            id: 4,
            title: "Bing Headphone",
            images: [
                require("../assets/Headphone.jpg"),
                require("../assets/Headphone2.jpg"),
            ],
            description:
                "Esse adipisicing tempor occaecat magna nulla culpa consectetur. Incididunt ad incididunt nisi Lorem enim deserunt Lorem nostrud quis excepteur laborum cupidatat qui Lorem. Occaecat enim consectetur eiusmod nostrud sint velit Lorem Lorem aute. Nostrud tempor Lorem dolor fugiat laborum amet mollit consectetur id nisi. Laboris consequat qui sint non ipsum qui quis. Et incididunt magna voluptate sit exercitation consequat ea amet labore do deserunt id. In minim fugiat esse minim ea velit sint veniam voluptate reprehenderit occaecat.",
            price: 130,
            rating: "3.0",
            discount: 20,
            tag: "New",
            variants: ["#3F4343", "#CCC6BA", "#CFCFCF"],
            new: true,
        },
    ],
};

export default products;
