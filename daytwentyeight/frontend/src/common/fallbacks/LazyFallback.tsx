import {useEffect} from 'react';
import useAuth from '@hooks/useAuth';

import SpinningCircle from './SpinningCircle';

import "@css/fallbacks.css";

const LazyFallback = () => {
    const {setIsHome} = useAuth();
    useEffect(() => {
        setIsHome(false);
    }, [])
  return (
    <div className='lazyfallback-main-container'>
        <SpinningCircle />
    </div>
  )
}

export default LazyFallback