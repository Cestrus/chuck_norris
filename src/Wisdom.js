import React from "react";
import './Wisdom.css';

export default (props) => {
	let classes = (props.isClick)? 'Wisdom': 'Wisdom-hidden';
	return (<div className={classes}>
				<p>{props.textWisdom}</p>
			</div>
	)
}
