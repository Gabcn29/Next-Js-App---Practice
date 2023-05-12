'use client'
import {useRouter} from 'next/navigation'

export default function Users( {users} ) {

    const router = useRouter();

  return (
    <ul className='list-group'>
        { users.map( (u) => (
            <li key={u.id}
                className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'
                onClick={() => {
                    router.push(`/users/${u.id}`)
                }}
            >  
                <div>
                    <h5>{u.id} {u.first_name} {u.last_name}</h5>
                    <p>Email: {u.email}</p>
                </div>
                    <img src={u.avatar} alt='avatar'
                    style={{borderRadius: '50%'}}
                    />
            </li>
        )) }
    </ul>
  )
}
