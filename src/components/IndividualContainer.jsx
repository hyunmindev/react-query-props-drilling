import { useQuery } from 'react-query';

import IndividualPostList from './IndividualPostList';
import IndividualUserList from './IndividualUserList';

import { sleep } from '../utils';

export default function IndividualContainer() {
  const { data: posts, isLoading: isPostsLoading } = useQuery(['posts', 'individual'], async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    await sleep(4000);
    return res.json();
  });

  const { data: users, isLoading: isUsersLoading } = useQuery(['users', 'individual'], async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    await sleep(2000);
    return res.json();
  });

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ backgroundColor: '#eea' }}>
        {isPostsLoading ? <h5>post 개수 로딩..</h5> : <h5>{posts.length} 개의 post가 있습니다.</h5>}
        <IndividualPostList />
      </div>
      <div style={{ backgroundColor: '#aee' }}>
        {isUsersLoading ? <h5>user 개수 로딩..</h5> : <h5>{users.length} 명의 user가 있습니다.</h5>}
        <IndividualUserList />
      </div>
    </div>
  );
}
