import Users from '@/components/User';

async function fetchUsers () {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  console.log(data);
  return data.data;   
}

export default  async function IndexPage() {
  const users = await fetchUsers();
  return (
    <div>
      <Users users={users} />
    </div>
  )
}
