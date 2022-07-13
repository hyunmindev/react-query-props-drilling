import { useQuery } from 'react-query';

import { sleep } from '../utils';

export default function SuspensePostList() {
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

  return posts.map(({ id, title }) => {
    return <p key={id}>{title}</p>;
  });
}
