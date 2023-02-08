import React from 'react';
import VideoView from './../components/VideoView';
import VideoItem from './../components/VideoItem';
import { useSearchParams } from "react-router-dom";
import {useSelector} from "react-redux";

const Watch = () => {
    const [query,setQuery]  = useSearchParams();
    const id=query.get('id')
    const channelId = query.get('channelId');
    //query는 어떤역할인지.
    const {data} = useSelector((state) => state.video);
    const videoData10 = data.filter((item,idx)=>idx<10)

    return (
        <section className='list content'>
            <VideoView id={id} channelId={channelId} />
            <ul className='watchList VideoRowList'>
                {
                    videoData10.map((item,idx)=>(
                        <VideoItem 
                            key={item.snippet.thumbnails.default.url} 
                            item={item.snippet} 
                            value={item}
                        />
                    ))
                }
                
            </ul>
        </section>
    );
};

export default Watch;