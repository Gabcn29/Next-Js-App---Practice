async function getUserDetails (id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json()
  console.log(data)
  return data.data
}

export default async function UsersPage({params}) {
  const user = await getUserDetails(params.id)
  return (
    <div>
      <div
      className='row'>
        <div
        className='col-md-6 offset-md-3'>
          <div
          className='card'>
            <div
            className='card-header text-center'>
              <img src={user.avatar}v alt={user.email} />

            </div>
            <div
            className='card-body'>
                <h3>{user.id} {user.first_name} {user.last_name} </h3>
                <p>{user.email}</p>        
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
