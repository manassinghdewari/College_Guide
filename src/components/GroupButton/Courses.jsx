import React from 'react';

const Courses=()=> {
    return (
        <section className="main-content">
		<div className="container">
			<h1>Courses</h1>

			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Specialization</th>
						<th>Seats</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowSpan="3">B.E</td>
						<td>
							Computer Science And Engineering
						</td>
						<td>
							120
						</td>
					</tr>
					<tr>
						<td>Information Science And Enginnering</td>
						<td>120
		
						</td>
					</tr>
					<tr>
						<td>Electronics And Electrical Engineering</td>
						<td>60</td>
	
					</tr>
					
					<tr>
						<td rowSpan="3">M.Tech</td>
						<td>
							Computer Science And Engineering
						</td>
						<td>
							120
						</td>
					</tr>
					<tr>
						<td>Information Science And Enginnering</td>
						<td>120
		
						</td>
					</tr>
					<tr>
						<td>Electronics And Electrical Engineering</td>
						<td>60</td>
	
					</tr>
					
				</tbody>
			</table>

		</div>

	</section>
    );
}

export default Courses;