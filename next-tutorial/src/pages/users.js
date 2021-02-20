import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

//CSR Client Side Rendering - the page will render on the user browser - Reactjs
// export default function Users() {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = useCallback(async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
    
//     setUsers(data)
    
//   }, [])

//   console.log(users)
  
//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   return (
//     <div>
//       {users.map(user => {
//         <div>{user.name}</div>
//       })}
//     </div>
//   )
// }

// ==================================================


//SSR - Server Side Rendering - the page will run the API data on the server not the user browser
// function Users({ users }) {
  
//   return (
//     <div>
//       {users.map(user => {       
//         return (
//           <div key={user.id}>{user.name}</div>
//         )
//       })}
//     </div>
//   )
// }

// export async function getServerSideProps(context) {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//   const data = await response.data;
  
//   return {
//     props: {
//       users: data, //will be passed to the page component
//     },
//   }
// }

//SSG - When I build my application this page will already be loaded
function Users({ users }) {
  
  return (
    <div>
      {users.map(user => {       
        return (
          <div key={user.id}>
            {/*client side navigation*/}
            <Link href='/profile/[id]' as={`/profile/${user.id}`}><a>{user.name}</a></Link>
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps(context) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = await response.data;
  
  return {
    props: {
      users: data, //will be passed to the page component
    },
  }
}

export default Users;
