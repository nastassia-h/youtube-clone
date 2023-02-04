import React from 'react'
import { Stack, Box } from '@mui/material';
import { ChannelCard, VideoCard, Loader } from './'

const Videos = ({ videos }) => {

   if (!videos?.length) return <Loader />
   return (
      <div
         className='videosContainer'
      >
         {videos.map((item, i) =>
            <Box key={i}>
               {item.id.videoId && <VideoCard video={item} />}
            </Box>
         )}
      </div>
   )
}

export default Videos