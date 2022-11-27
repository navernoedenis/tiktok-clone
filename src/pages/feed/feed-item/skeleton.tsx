import React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';
import MuiBox from '@mui/material/Box';
import MuiStack from '@mui/material/Stack';

function FeedItemSkeleton(): JSX.Element {
  return (
    <MuiBox
      sx={{
        borderBottom: '1px solid #ccc',
        maxWidth: '580px',
        width: '100%',
        display: 'flex',
        padding: '30px 0',
      }}
    >
      <MuiSkeleton
        variant="circular"
        sx={{ height: '50px', width: '50px', flexShrink: '0' }}
      />
      <MuiBox sx={{ marginLeft: '10px', width: '100%' }}>
        <MuiSkeleton sx={{ width: '120px' }} />
        <MuiSkeleton sx={{ width: '300px' }} />
        <MuiSkeleton sx={{ width: '340px' }} />
        <MuiBox sx={{ display: 'flex' }}>
          <MuiSkeleton
            sx={{ height: '604px', width: '339px', transform: 'none' }}
          />
          <MuiStack
            direction="column"
            gap="43px"
            sx={{
              marginLeft: '20px',
              display: 'flex',
              flexDirection: 'column-reverse',
            }}
          >
            {[1, 2, 3].map((key) => (
              <MuiSkeleton
                key={key}
                sx={{ height: '50px', width: '50px' }}
                variant="circular"
              />
            ))}
          </MuiStack>
        </MuiBox>
      </MuiBox>
    </MuiBox>
  );
}

export default FeedItemSkeleton;
