import React from 'react'


const Cards = (props) =>{
	return(
	<div className="bg-light-green dib br3 pa3 ma2 grow">
		<img alt='' src={`https://robohash.org/${props.id}?50x50`}/>
		<h1>{props.name}</h1>
		<div>
			<p>{props.num}</p>
			<p>{props.email	}</p>
		</div>
	</div>
	);
}

export default Cards