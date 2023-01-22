import React, {useEffect} from 'react'
import {Card, Page, ResourceItem, ResourceList, Text} from '@shopify/polaris'
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions/productsActions';

export const ProductsPage = () => {
  const dispatch = useDispatch();

  const {products, loading} = useSelector(store => store.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <Page title={'Products'}>
    <Card>
      <ResourceList
        loading={loading}
        resourceName={{singular: 'product', plural: 'products'}}
        items={products}
        renderItem={(item) => {
          const {id, title} = item;
          return (
            <ResourceItem
              id={id}
            >
              <Text variant="bodyMd" fontWeight="bold" as="h3">
                {title}
              </Text>
            </ResourceItem>
          );
        }}
      />
    </Card>
  </Page>
}
