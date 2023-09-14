import React from 'react'
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar'
import RightHandbar from '../Components/RightHandbar'
import ExploreTweets from '../ExploreTweet/ExploreTweets'
import { useSelector } from 'react-redux'
import Signin from '../Signin/Signin'
const Explore = () => {
  const  {currentUser}=useSelector((state)=>state.user);
  return (
    <>
    {!currentUser ?(
      <Signin/>
    ):(
      <div className='grid-grid-cols-1 md:grid-cols-4'>
      <div className='px-6'>
        <LeftSidebar/>
      </div>

      <div className='col-span-2 border-x-2 border-t-slate-800 px-6'>
        <ExploreTweets/>
      </div>
      <div className='px-6'>
        <RightHandbar/>
      </div>
      
    </div>
    )}
  
  </>
)}

export default Explore
