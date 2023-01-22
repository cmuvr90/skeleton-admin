import React, {useEffect} from 'react'
import {Card, Page, ResourceItem, ResourceList, Text} from '@shopify/polaris'
import {useDispatch, useSelector} from 'react-redux';
import {getCollections} from '../../redux/actions/collectionsActions';

export const CollectionsPage = () => {
  const dispatch = useDispatch();

  const {collections, loading} = useSelector(store => store.collections);

  useEffect(() => {
    dispatch(getCollections());
  }, []);

  return <Page title={'Collections'}>
    <Card>
      <ResourceList
        loading={loading}
        resourceName={{singular: 'collection', plural: 'collections'}}
        items={collections}
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
