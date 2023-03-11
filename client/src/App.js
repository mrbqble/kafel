import './App.css';
import Admin from './components/Admin';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { Footer } from './components/Footer';
import { AddItemForm } from './components/AddItemForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import React, { useState } from 'react';
import { DefaultContext } from "./Context";
import Item from './components/Item';

function App() {

	const [items, setItems] = useState();
	const [item, setItem] = useState({
        name: "",
        size: "",
        thick: "",
        cost: 0,
        producer: "",
        img: ""
    });
	const [edit, setEdit] = useState(false);

	return (
		<div>
			<DefaultContext.Provider value={{edit, setEdit, items, setItems, item, setItem}}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main/>}/>
						<Route path="/login" element={<Login/>}/>
						<Route path='/items/:index' element={<Item/>}/>
						{localStorage.getItem("Token") && <>
							<Route path="/admin" element={<Admin/>}/>
							<Route path="/addItem" element={<AddItemForm/>}/>
						</>}
						<Route path="*" element={<NotFound/>}/>
					</Routes>
					<Footer/>
				</BrowserRouter>
			</DefaultContext.Provider>
		</div>
	);
}

export default App;
