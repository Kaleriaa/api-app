import React, { useState } from 'react'
import AppHeader from '../app-header'
import styled from 'styled-components'
import RandomChar from '../random-char'
import CharacterPage from '../pages/characters'
import HousePage from '../pages/houses'
import BookPage from '../pages/books'
import Fox from '../../img/fox.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BooksItem from '../pages/books/booksItem'
import HousesItem from '../pages/houses/housesItem'

function App() {
	const [toggle, setRandomChar] = useState(true)
	const onToggleRandom = () => {
		setRandomChar((prev) => !prev)
	}
	const WelcomeBlock = (
		<Container>
			<WelcomeImg width={200} height={200} src={Fox} />
			<WelcomeMessage>Welcome to GoT DB</WelcomeMessage>
		</Container>
	)
	return (
		<BrowserRouter>
			<Container>
				<AppHeader />
			</Container>
			<Container>
				<Wrapper>
					{toggle && <RandomChar />}
				</Wrapper>
				<ButtonToggle onClick={onToggleRandom}>Toggle Random Char</ButtonToggle>
			</Container>
			<Container>
				<Routes>
					<Route index element={WelcomeBlock} />
					<Route path='/characters' element={<CharacterPage />} />
					<Route path='/books' exact element={<BookPage />} />
					<Route path='/books/:id' element={<BooksItem />} action={({params}) => {}} />
					<Route path='/houses' element={<HousePage />} />
					<Route path='/houses/:id' element={<HousesItem />} action={({params}) => {}} />
				</Routes>
			</Container>
		</BrowserRouter>
	)
}
const WelcomeMessage = styled.h2`
	text-align: center;
	color: #fff;
	font-size: 28px;
`
const WelcomeImg = styled.img`
	display: block;
	margin: 10px auto;
`
const Container = styled.div`
	width: 800px;
	margin: 0 auto;
`
const ButtonToggle = styled.button`
	cursor: pointer;
	margin-top: 15px;
	background-color: #3651d7;
	width: 150px;
	height: 40px;
	border-radius: 5px;
	color: #fff;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export default App
