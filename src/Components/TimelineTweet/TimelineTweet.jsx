/*\
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const TimelineTweet = () => {
        const [timeline,setTimeline]=useEffect();
        const {currentUser}=useSelector ((state)=>state.user);
        useEffect(()=>{
            const fetchData=async()=>{
             try{
                const timelineTweets=await axios.get(`/tweets/timeline/${currentUser._id}`);
              setTimeline(timelineTweets.data); 
            }
             catch(err){
               console.log(err)
             }
            };
            fetchData();
        },[currentUser._id])
        console.log("time line",timeline)
        return <div>TimelineTweet</div>
    
}

export default TimelineTweet
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Tweet from '../Tweet/Tweet';

const TimelineTweet = () => {
    const [timeline, setTimeline] = useState([]); // Initialize timeline as an empty array
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const timelineTweets = await axios.get(`/tweets/timeline/${currentUser._id}`);
                setTimeline(timelineTweets.data); 
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [currentUser._id]);

    console.log("time line", timeline);

    return <div class="mt-6"> 
        {
            timeline && timeline.map((tweet)=>{
                return(
                    <div key={tweet._id} className='p-2'>
                        <Tweet tweet={tweet} setData={setTimeline}/>
                    </div>
                )
            })
        }
    </div>;
};

export default TimelineTweet;
