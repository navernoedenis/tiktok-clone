import React from 'react';
import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';

function VideoPlayerCommenntSkeleton(): JSX.Element {
  return (
    <MuiBox sx={{ display: 'flex', alignItems: 'center' }}>
      <MuiSkeleton variant="circular" sx={{ width: '45px', height: '45px' }} />
      <MuiBox sx={{ marginLeft: '10px' }}>
        <MuiSkeleton sx={{ width: '80px' }} />
        <MuiSkeleton sx={{ width: '100px' }} />
      </MuiBox>
    </MuiBox>
  );
}

export default VideoPlayerCommenntSkeleton;
