import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import useFetch, { BASE_URL } from '../../api/UseFetch';
import millify from "millify";

// const {placementData}=await axios.get(`${BASE_URL}/placement/`)

// const placementData =
// 	{
// 		average:millify(2259090, {
// 			precision: 1,  
// 			decimalSeparator: ","
// 		  }),
// 		median:millify(2259090, {
// 			precision: 1,  
// 			decimalSeparator: ","
// 		  }),
// 		highest:millify(2259090, {
// 			precision: 1,  
// 			decimalSeparator: ","
// 		  }),
// 	}


const Placement=()=> {
	const {collegeData}= useSelector((state) => state.college);
	console.log("this is from placement page",collegeData);
	const {data:placementData,loading,error}=useFetch(`/college/placement/${collegeData?._id}`)
	console.log("this is from placement page",placementData);
    return (
        <section class="main-content">
		<div class="container">
			<h1>Placements</h1>

			<table class="table">
				<tbody>
					<tr>
						<th>Highest Package</th>
						<td>{
						millify(placementData.highest)
						}
						</td>
					</tr>
					<tr>
						<th>Average Package</th>
						<td>
						{millify(placementData.average)}
						</td>
					</tr>
					<tr>
						<th>Median Package</th>
						<td>
						{millify(placementData.median)}
						</td>
					</tr>
				</tbody>
			</table>

		</div>
		<div className='flex items-center justify-center text-center'>
            <img src={placementData.images} alt="" width='50%' />
		</div>

	</section>
    );
}

export default Placement;