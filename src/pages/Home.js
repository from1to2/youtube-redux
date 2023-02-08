import React from 'react';
import VideoList from './../components/VideoList';
import SideMenu from './../components/SideMenu';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {videoListLayout} from './../store/video/videoSlice';

const Home = () => {
  const dispatch = useDispatch();
  const {listlayout} = useSelector((state) => state.video);
  useEffect(()=> {
    dispatch(videoListLayout('grid'))
  },[])
    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
           {listlayout && <VideoList display={listlayout} />}
          </section>
        </>
    );
};

export default Home;