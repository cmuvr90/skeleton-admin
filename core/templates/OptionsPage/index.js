import React, {useEffect} from 'react'
import {Card, Page, ResourceItem, ResourceList, Text} from '@shopify/polaris'
import {useDispatch, useSelector} from 'react-redux';
import {getOptions} from '../../redux/actions/optionsActions';

export const OptionsPage = () => {
  const dispatch = useDispatch();

  const {options, loading} = useSelector(store => store.options);

  useEffect(() => {
    dispatch(getOptions());
  }, []);

  return <Page title={'Options'}>
    <Card>
      <ResourceList
        loading={loading}
        resourceName={{singular: 'option', plural: 'options'}}
        items={options}
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
