import React, {useEffect} from 'react'
import {Page, Card, ResourceList, ResourceItem, Text} from '@shopify/polaris'
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../redux/actions/usersActions';

export const UsersPage = () => {
  const dispatch = useDispatch();

  const {users, loading} = useSelector(store => store.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <Page title={'Users'}>
    <Card>
      <ResourceList
        loading={loading}
        resourceName={{singular: 'user', plural: 'users'}}
        items={users}
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
