import React, { Component } from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

export class ReactVideo2 extends Component {
	render() {
		return (
			<div>
				<Player>
					<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
				</Player>
			</div>
		)
	}
}

export default ReactVideo2;

