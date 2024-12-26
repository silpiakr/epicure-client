import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {

    return (
        <div className='flex items-center justify-center mt-10
        '>
            <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="60"
            visible={true}
          />
          
        </div>
    );
};

export default Loader;