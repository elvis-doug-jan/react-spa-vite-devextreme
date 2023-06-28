export const navigation = [
  {
    text: 'Dashboard',
    path: '/dashboard',
    icon: 'fa-regular fa-chart-line-up',
  },
  {
    text: 'Orders',
    icon: 'fa-regular fa-pot-food',
    items: [
      {
        text: 'Orders',
        icon: 'fa-regular fa-cart-shopping',
        path: '/orders',
      },
    ],
  },
  {
    text: 'Paymaent',
    path: '/payment',
    icon: 'fa-regular fa-money-check-dollar-pen',
  },
  {
    text: 'Setting',
    path: '/setting',
    icon: 'fa-regular fa-gears',
  },
]
