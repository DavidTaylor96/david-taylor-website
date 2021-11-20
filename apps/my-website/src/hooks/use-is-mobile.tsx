import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  return useMediaQuery({ minWidth: '1350px', orientation: 'landscape' });
};