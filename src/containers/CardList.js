import React from 'react'
import Cards from './Cards'



const CardList = ({ robots })=> {

	return (
		<div>
			{
				robots.map((user,i) => {
				return (<Cards 
						key={i} 
						id = {robots[i].id} 
						name = {robots[i].name} 
						email = {robots[i].email} 
						num = {robots[i].Num}
						/>);
				})
			}	
			

		</div>	

		);
}
export default CardList;