import { useQuery } from 'react-query';

import { sleep } from '../utils';

export default function IndividualPostList() {
  const { data: posts, isLoading } = useQuery(['posts', 'individual'], async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    await sleep(4000);
    return res.json();
  });

  if (isLoading) {
    return <div>유저 리스트 로딩..</div>;
  }

  return (
    !isLoading &&
    posts.map(({ id, title }) => {
      return <p key={id}>{title}</p>;
    })
  );
}
