import { useEffect, useState, useReducer } from 'react'
import './App.css'
import MediaCard from './components/Card/Card'
import Grid from '@mui/material/Grid'
import ScrollTop from './components/BackToTop/BackToTop'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination';
import { URL } from './utils/constants/url'
import Container from '@mui/material/Container'
import HideOnScroll from './Layout/Navbar'

function App() {
  const [scraperData, setScraperData] = useState([])
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0)
  const fetchData = async () => {
    const res = await fetch(URL.base)
    const jsonRes = await res.json()

    setScraperData(jsonRes)
  }

  useEffect(() => {
    const timer = setInterval(fetchData, 10000)
    return () => clearInterval(timer)
  }, [])
  
  return (
    <>
      <HideOnScroll forceUpdate={forceUpdate} />
      <Container maxWidth="lg">
        {scraperData.length !== 0 && <Box
          sx={{
            margin: '5rem auto',
            padding: '0 2rem 2rem',
            backgroundColor: 'ghostwhite',
            height: '100%',
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {scraperData.map((item, index) => {
              // setTimeout(() => {
              //   <Grid item xs={2} sm={3} md={3} key={index}>
              //     <MediaCard item={item} />
              //   </Grid>
              // }, 1000)

              return (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <MediaCard item={item} />
                </Grid>
              )
            
            })}
          </Grid>
          <Pagination count={scraperData.length} shape="rounded" variant="outlined" sx={{ margin: '2rem auto', display: 'flex', justifyContent: 'center' }}/>
          <ScrollTop>
            <Fab size='small' aria-label='scroll back to top'>
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Box>}
      </Container>
    </>
  )
}

export default App
