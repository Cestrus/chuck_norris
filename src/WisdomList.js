import React from "react";
import './WisdomList.css';
// import Wisdom from 'Wisdom';

function WisdomList(props) {
	let classes = (props.isClick)? 'WisdomList': 'WisdomList-hidden';
	return(
		<div className={classes}>
			<p>The Wisdom list</p>
			<div>
				<ul >
					{props.arrWisdom.map(el =>{
						return(
							<li key={new Date()+Math.random()}>{el}</li>
						)
					})}
				</ul>
			</div>
		</div>

	)
}

export default WisdomList;