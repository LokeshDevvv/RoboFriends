import React from 'react';


const SearchBox = ({ SearchChange })=>{
	return (
		<div className="pa2">
			<input 
			className="pa2 ba b--blue" 
			type="search" placeholder="search"
			onChange={SearchChange} 
			/>
		</div>	

		);
}
export default SearchBox;