import React from "react";
import './styles.css';
import Status from'./Status.js';

class Container extends React.Component{

	state = {
		//set status value to true to see the change
		info :[
			{
				status: 'true',
				date: '12 MAY',
				info1: 'You have taken test drive',
				info2: '2010 WHite Alto LXI and 2 Others',
			},
			{
				status: '',
				date: '14 MAY',
				info1: 'Pay token',
				info2: 'for 2010 WHite Alto LXI',
			},
			{
				status: '',
				date: '14 MAY',
				info1: 'Processing your loan',
				info2: 'Usually takes 3-6 days for different banks',
			},
			{
				status: '',
				date: '',
				info1: 'Take Car Delivery',
				info2: 'From our Mumbai Showroom',
			},
			{
				status: '',
				date: '',
				info1: 'Start Ownership Transfer Process',
				info2: 'Please bring the list of document at the time of delivery',
			}

		],
	};

	render(){
		return(
			<div className="parent">
			    {this.state.info.map((car)=>
			    		<Status currentStatus={car.status}
			    				date={car.date}
			    				info1={car.info1}
			    				info2={car.info2}
			    		/>
			    	)}
			</div>
		);
	}

}

export default Container;