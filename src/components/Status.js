import React from "react";
import './styles.css';

class Status extends React.Component{
	render(){
		const {currentStatus, date, info1, info2} = this.props;
		return(
			<div>
					<table className="block">
					{ currentStatus ?
						(<tr> 
							<td className="side">
								<div className="circle_green"></div>
								<div className="line_green"></div>
							</td>
						<td className="text">
							<tr className="date_black">{date}</tr>
							<tr className="info1_black">{info1}</tr>
							<tr className="info2_black">{info2}</tr>
						</td>
						</tr>
						) : 
						(<tr>
						<td className="side">
							<div className="circle_grey"></div>
							<div className="line_grey"></div>
						</td>
						<td className="text">
							<tr className="date_grey">{date}</tr>
							<tr className="info1_grey">{info1}</tr>
							<tr className="info2_grey">{info2}</tr>
						</td>
						</tr>
						)
					}
					</table>
				</div>
		);
	}
}
export default Status;