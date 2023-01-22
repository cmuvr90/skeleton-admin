import React from 'react'
import {Navigation} from '@shopify/polaris'
import {
  ArrowLeftMinor,
  HomeMajor,
  OrdersMajor,
  ConversationMinor,
  CustomersMajor,
  InventoryMajor, CategoriesMajor, CollectionsMajor, TroubleshootMajor, ProductsMajor
} from '@shopify/polaris-icons'

export const NavigationMarkup = ({router}) => {
  return <Navigation location={router.pathname}>
    {
      // <Navigation.Section
      //   items={[
      //       {
      //           label: 'Back to Shopify',
      //           icon: ArrowLeftMinor,
      //       },
      //   ]}
      // />
    }
    <Navigation.Section
      items={[
        {
          label: 'Dashboard',
          icon: HomeMajor,
          url: '/dashboard'
        },
        {
          label: 'Users',
          icon: CustomersMajor,
          url: '/users'
        },
        {
          label: 'Brands',
          icon: InventoryMajor,
          url: '/brands'
        },
        {
          label: 'Categories',
          icon: CategoriesMajor,
          url: '/categories'
        },
        {
          label: 'Collections',
          icon: CollectionsMajor,
          url: '/collections'
        },
        {
          label: 'Options',
          icon: TroubleshootMajor,
          url: '/options'
        },
        {
          label: 'Products',
          icon: ProductsMajor,
          url: '/products'
        },
        {
          label: 'Test page',
          icon: OrdersMajor,
          url: '/test'
        },
      ]}
    />
  </Navigation>
}
