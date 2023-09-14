import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightHandbar from '../../Components/RightHandbar'
import MainTweet from '../../Components/MainTweet/MainTweet'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Signin from '../../Signin/Signin'
const Home = () => {
  const {currentUser}=useSelector((state)=>state.user)
  console.log("user",currentUser)

  return (
    <>
    {!currentUser?(
      <Signin/>
    ):(
      <div>
      <h1 className='grid grid-cols md:grid-cols-4'>home</h1>
      <div className='px-6'>
        <LeftSidebar/>
      </div>
      <div className='col-span-2 border-x-2 border-t-slate-800 px-6'>
            <MainTweet/>
      </div>
      <div className='px-6'>
        <RightHandbar/>
        
      </div>
    </div>
    )}
    </>
  )
}

export default Home
