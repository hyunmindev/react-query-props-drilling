import { useQuery } from 'react-query';

import { sleep } from '../utils';

export default function SuspenseUserList() {
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

  return users.map(({ id, name }) => {
    return <p key={id}>{name}</p>;
  });
}
