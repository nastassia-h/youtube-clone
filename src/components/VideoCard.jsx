import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, CardContent, CardMedia, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle, demoThumbnailUrl, demoVideoUrl, demoProfilePicture, demoVideoTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
   return (
      <Card style={{ minHeight: '100%' }} sx={{ width: { md: '320px', sx: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url}
               alt={snippet?.title}
               sx={{ width: '100%', height: 180 }}
            />
         </Link>
         <CardContent sx={{ background: '#1e1e1e' }}>
            <Box style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 15, marginBottom: 10 }}>
               <img
                  style={{ borderRadius: '50%', height: '35px', width: '35px', border: '1px solid #e3e3e3' }}
                  src={snippet?.thumbnails?.high?.url || demoProfilePicture}
                  alt={snippet?.title}
               />
               <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                  <Typography variant='subtitle' fontWeight={"bold"} color='#fff'>
                     {`${snippet?.title.slice(0, 60)}...` || `${demoVideoTitle.slice(0, 60)}...`}
                  </Typography>
               </Link>
            </Box>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
               <Typography variant='subtitle2' fontWeight={'bold'} color='#fff'>
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
               </Typography>
            </Link>
         </CardContent>
      </Card >
   )
}

export default VideoCard