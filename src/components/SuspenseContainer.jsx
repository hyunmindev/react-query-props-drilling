import { useQuery } from 'react-query';

import SuspensePostList from './SuspensePostList';
import SuspenseUserList from './SuspenseUserList';

import { sleep } from '../utils';

export default function SuspenseContainer() {
  const { data: posts } = useQuery(
    ['posts', 'suspense'],
    async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      await sleep(4000);
      return res.json();
    },
    {
      suspense: true,
    },
  );

  const { data: users } = useQuery(
    ['users', 'suspense'],
    async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      await sleep(2000);
      return res.json();
    },
    {
      suspense: true,
    },
  );

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ backgroundColor: '#eea' }}>
        <h5>{posts.length} 개의 post가 있습니다.</h5>
        <SuspensePostList />
      </div>
      <div style={{ backgroundColor: '#aee' }}>
        <h5>{users.length} 개의 user가 있습니다.</h5>
        <SuspenseUserList />
      </div>
    </div>
  );
}
