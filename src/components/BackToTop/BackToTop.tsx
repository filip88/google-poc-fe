// @ts-nocheck
import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

interface Props {
  children: React.ReactElement;
}

export default function ScrollTop(props: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 150,
  });

  const handleTop = () => {
    if (!ref.current) throw Error("ref is not assigned");

    ref.current.scrollTop = 0;
    setPos(false);
  };

  const handleScroll = () => {
    if (ref.current.scrollTop > 50) {
      if (!pos) setPos(true);
    } else {
      if (pos) setPos(false);
    }
  };

  React.useEffect(() => {
    let temp = ref.current;
    if (!temp) throw Error("ref is not assigned");
    temp.addEventListener("scroll", handleScroll);
    return () => temp.removeEventListener("scroll", handleScroll);
  });

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleTop}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        ref={ref}
      >
        {props.children}
      </Box>
    </Fade>
  );
}