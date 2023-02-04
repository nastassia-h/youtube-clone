import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { AppRoutes, Navbar } from './components'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: '#000' }}>
        <Navbar />
        <AppRoutes />
      </Box>
    </BrowserRouter>
  );
}

export default App;
