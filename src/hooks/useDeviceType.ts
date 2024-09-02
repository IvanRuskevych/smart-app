import { useMediaQuery } from 'react-responsive';

type SizeType = {
  mobile: number;
  tablet: number;
  laptop: number;
  desktop: number;
};

const size: SizeType = {
  mobile: 360,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

type DeviceType = {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};

// For components
export const useDeviceType = (): DeviceType => {
  const isMobile = useMediaQuery({
    maxWidth: size.tablet - 0.02,
  });
  const isTablet = useMediaQuery({
    minWidth: size.tablet,
    maxWidth: size.laptop - 0.02,
  });
  const isLaptop = useMediaQuery({
    minWidth: size.laptop,
    maxWidth: size.desktop - 0.02,
  });
  const isDesktop = useMediaQuery({ minWidth: size.desktop });

  return { isMobile, isTablet, isLaptop, isDesktop };
};

// For styles
export const DEVICE_TYPE = {
  mobile: `(max-width: ${size.tablet - 0.02}px)`,
  tablet: `(min-width: ${size.tablet}px) and (max-width: ${size.laptop - 0.02}px)`,
  laptop: `(min-width: ${size.laptop}px) and (max-width: ${size.desktop - 0.02}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};
