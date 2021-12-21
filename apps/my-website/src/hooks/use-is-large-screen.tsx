import { useMediaQuery } from 'react-responsive';

export const useIsLargeScreen = () => {
  return useMediaQuery({ minWidth: '2000px', orientation: 'landscape' });
};