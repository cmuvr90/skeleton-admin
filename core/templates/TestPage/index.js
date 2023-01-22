import React from 'react'
import {Page, Layout, Stack, Button, TextStyle} from '@shopify/polaris'
import {useDispatch, useSelector} from 'react-redux';
import {asyncIncrement, asyncDecrement} from '../../redux/actions/testActions';
import {getUsers} from '../../redux/actions/usersActions';

export const TestPage = () => {

  const count = useSelector(store => store.test.count);
  const {users, loading} = useSelector(store => store.users);
  const posts = useSelector(store => store.test.posts);
  const dispatch = useDispatch();

  return <Page title={'REDUX SAGA'}>
    <Layout>
      <Layout.AnnotatedSection title={'Counter'}>
        <Stack alignment={'center'}>
          <Button onClick={() => dispatch(asyncDecrement())}>-</Button>
          <TextStyle>{count}</TextStyle>
          <Button onClick={() => dispatch(asyncIncrement())}>+</Button>
        </Stack>
      </Layout.AnnotatedSection>
      <Layout.AnnotatedSection title={'Get Users'}>
        <Stack vertical spacing={'tight'}>
          <TextStyle variation={'strong'}>USERS: </TextStyle>
          <Stack vertical>
            {
              users.map(i => <TextStyle key={i.id}>{i.email}</TextStyle>)
            }
          </Stack>
          <TextStyle variation={'strong'}>POSTS: </TextStyle>
          <Stack vertical>
            {
              posts.map(i => <TextStyle key={i.id}>{i.title}</TextStyle>)
            }
          </Stack>
          <Button onClick={() => dispatch(getUsers())} loading={loading}>Get data</Button>
        </Stack>

      </Layout.AnnotatedSection>
    </Layout>
  </Page>
}
