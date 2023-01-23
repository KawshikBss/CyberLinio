import { lazy } from "react";

const profileSections = [
    {
        title: 'Orders',
        items: [
            {
                name: 'All Orders',
                icon: lazy(() => import('react-native-vector-icons/Fontisto')),
                iconName: 'shopping-bag-1',
                route: 'AllOrders'
            },
            {
                name: 'Pending Orders',
                icon: lazy(() => import('react-native-vector-icons/MaterialIcons')),
                iconName: 'pending',
                route: ''
            },
            {
                name: 'Cancelled Orders',
                icon: lazy(() => import('react-native-vector-icons/MaterialCommunityIcons')),
                iconName: 'cancel',
                route: ''
            },
            {
                name: 'Waiting For Review',
                icon: lazy(() => import('react-native-vector-icons/MaterialIcons')),
                iconName: 'rate-review',
                route: ''
            },
        ]
    },
    {
        title: 'Services',
        items: [
            {
                name: 'Messages',
                icon: lazy(() => import('react-native-vector-icons/MaterialCommunityIcons')),
                iconName: 'android-messages',
                route: ''
            },
            {
                name: 'Reviews',
                icon: lazy(() => import('react-native-vector-icons/MaterialIcons')),
                iconName: 'rate-review',
                route: ''
            },
            {
                name: 'Return',
                icon: lazy(() => import('react-native-vector-icons/MaterialCommunityIcons')),
                iconName: 'keyboard-return',
                route: ''
            },
            {
                name: 'Help Center',
                icon: lazy(() => import('react-native-vector-icons/Feather')),
                iconName: 'help-circle',
                route: ''
            },
        ]
    },
];

export default profileSections;