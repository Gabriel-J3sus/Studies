import axios from 'axios';
import { useRouter } from 'next/router';

function Profile({ user }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </div>
  )
}

//SSG - When I build my application the pages 1, 2 and 3 will already be loaded, if the user wants to see another page, it will load in real time
export async function getStaticProps(context) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users', {params: {id: context.params.id}});

  const user = await response.data[0];

  return {
    props: {
      user,
      revalidate: 10 //ISG - if the api has any new feature, it will run in the background compare, if it has changes, after 10 seconds it will show the new data
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } }, //already loaded in a static way
      { params: { id: '2' } }, //already loaded in a static way
      { params: { id: '3' } }, //already loaded in a static way
    ],
    fallback: true //if true it is not loaded, it will search for the data and then will load in real time
  }
}

export default Profile;
