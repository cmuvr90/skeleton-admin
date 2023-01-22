import React, {useEffect} from 'react'
import {Card, Page, ResourceItem, ResourceList, Text} from '@shopify/polaris'
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../redux/actions/categoriesActions';

export const CategoriesPage = () => {
  const dispatch = useDispatch();

  const {categories, loading} = useSelector(store => store.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return <Page title={'Categories'}>
    <Card>
      <ResourceList
        loading={loading}
        resourceName={{singular: 'category', plural: 'categories'}}
        items={categories}
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
