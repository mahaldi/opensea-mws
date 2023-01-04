import React, { useState } from 'react'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './layouts'
import Home from './pages/home'
import Profile from './pages/profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import initialState from 'redux/initialState'
import configureStore from 'redux/configureStore'

const store = configureStore(initialState)

function App() {
	const [mode, setMode] = useState('dark')
	const onChangeTheme = (value) => {
		setMode(value)
	}
	const currentTheme = theme(mode)
	return (
		<Provider store={store}>
			<BrowserRouter basename='/'>
				<ThemeProvider theme={currentTheme}>
					<CssBaseline />
					<Layout mode={mode} onChangeTheme={onChangeTheme}>
						<Routes>
							<Route path="/" exact element={<Home />} />
							<Route path="/profile" exact element={<Profile />} />
						</Routes>
					</Layout>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
