import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { URL } from '../utils/constants/url'

interface Props {
  window?: () => Window;
  forceUpdate: () => void
}

export default function HideOnScroll(props: Props) {
  const { window, forceUpdate } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const handleDelete = () => {
    const deleteData = async () => {
      await fetch(URL.delete, {
        method: 'DELETE'
      })
    }

    deleteData()
    forceUpdate()
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar color="secondary">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6" component="div">
            Scrapper data
          </Typography>
          {/* <Button variant="contained" color="error" onClick={handleDelete}>Delete All</Button> */}
        </Toolbar>
      </AppBar>
    </Slide>
  );
}