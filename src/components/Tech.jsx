import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../higher-order-components';
import { technologies } from '../constants';


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>Tech
    </div>
  );
};

export default SectionWrapper(Tech,'');