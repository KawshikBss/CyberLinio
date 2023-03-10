import { lazy } from "react";

const profileSections = [
    {
        title: 'Orders',
        items: [
            {
                name: 'All Orders',
                icon: lazy(() => import('react-native-vector-icons/Fontisto')),
                iconName: 'shopping-bag-1',
                route: {stack: 'OrdersStack', route: 'All'}
            },
            {
                name: 'Pending Orders',
                icon: lazy(() => import('react-native-vector-icons/MaterialIcons')),
                iconName: 'pending',
                route: {stack: 'OrdersStack', route: 'Pending'}
            },
            {
                name: 'Cancelled Orders',
                icon: lazy(() => import('react-native-vector-icons/MaterialCommunityIcons')),
                iconName: 'cancel',
                route: {stack: 'OrdersStack', route: 'Cancelled'}
            },
            {
                name: 'Waiting For Review',
                icon: lazy(() => import('react-native-vector-icons/MaterialIcons')),
                iconName: 'rate-review',
                route: {stack: 'OrdersStack', route: 'Delivered'}
            },
        ]
    },
    {
        title: 'Services',
        items: [
            {
                name: 'Notifications',
                icon: lazy(() => import('react-native-vector-icons/Ionicons')),
                iconName: 'notifications',
                route: {route: 'Notifications'}
            },
            {
                name: 'Reviews',
                icon: lazy(() => import('react-native-vector-icons/MaterialIcons')),
                iconName: 'rate-review',
                route: {route: 'Reviews'}
            },
            {
                name: 'Redeem Coupons',
                icon: lazy(() => import('react-native-vector-icons/MaterialIcons')),
                iconName: 'redeem',
                route: {route: 'Redeem'}
            },
            {
                name: 'Help Center',
                icon: lazy(() => import('react-native-vector-icons/Feather')),
                iconName: 'help-circle',
                route: {route: 'Help'}
            },
        ]
    },
];

export default profileSections;