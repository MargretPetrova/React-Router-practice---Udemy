import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../utils/authentication';

function RootLayout() {
 
  const token = useLoaderData('root');

  const submit = useSubmit();
  useEffect(()=>{
    if(!token){
      return;
    }

    // const tokenDuration = getTokenDuration();
    if (token === 'EXPIRED') {
      submit(null, {action:'/logout', method:'post'});
     
    }
   
    // if (tokenDuration >= 0) {
    //   submit(null, {action:'/logout', method:'post'});
    // }
    const timeout = setTimeout(()=>{
      submit(null, {action:'/logout', method:'post'});
    }, 3600000)
    return () => {
      clearTimeout(timeout);
    };
  
  },[token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;



