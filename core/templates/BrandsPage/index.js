import React, {useEffect} from 'react'
import {Page, Card, ResourceList, ResourceItem, Text} from '@shopify/polaris'
import {useDispatch, useSelector} from 'react-redux';
import {getBrands} from '/core/redux/actions/brandsActions'

export const BrandsPage = () => {
  const dispatch = useDispatch();

  const {brands, loading} = useSelector(store => store.brands);

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  return <Page title={'Brands'}>
    <Card>
      <ResourceList
        loading={loading}
        resourceName={{singular: 'brand', plural: 'brands'}}
        items={brands}
        renderItem={(item) => {
          const {id, name} = item;
          return (
            <ResourceItem
              id={id}
            >
              <Text variant="bodyMd" fontWeight="bold" as="h3">
                {name}
              </Text>
            </ResourceItem>
          );
        }}
      />
    </Card>
  </Page>
}
