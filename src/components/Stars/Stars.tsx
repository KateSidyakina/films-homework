import React from "react";
import Star from "../Star/Star";

interface StarsProps {
  count: number;
}
export default function Stars({count = 0}: StarsProps): JSX.Element | undefined {
	if (!count || count < 1 || count > 5 || typeof count !== 'number') {
		return;
	}

	return (
		<ul className='card-body-stars'>
			{[...new Array(count)].map((_, index) => {
				return <Star key={index}/>
			})}
		</ul>
	)
}