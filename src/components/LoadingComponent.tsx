import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

const LoadingComponent = () => {
    return (
        <div className='flex  justify-center items-center'>
            <RefreshIcon className=' animate-spin' style={{height:'30px',width:'30px'}}/>
        </div>
    );
};

export default LoadingComponent;