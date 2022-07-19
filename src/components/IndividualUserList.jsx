import { useQuery } from 'react-query';

import { sleep } from '../utils';

export default function IndividualUserList() {
  const { data: users, isLoading } = useQuery(['users', 'individual'], async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    await sleep(2000);
    return res.json();
  });

  if (isLoading) {
    return <div>user 리스트 로딩..</div>;
  }

  return (
    !isLoading &&
    users.map(({ id, name }) => {
      return <p key={id}>{name}</p>;
    })
  );
}
