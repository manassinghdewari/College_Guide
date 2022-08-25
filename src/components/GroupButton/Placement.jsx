import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../api/UseFetch';
import millify from "millify";

// const {placementData}=await axios.get(`${BASE_URL}/placement/`)

const placementData =
	{
		average:millify(2259090, {
			precision: 1,  
			decimalSeparator: ","
		  }),
		median:millify(2259090, {
			precision: 1,  
			decimalSeparator: ","
		  }),
		highest:millify(2259090, {
			precision: 1,  
			decimalSeparator: ","
		  }),
	}

const Placement=()=> {
	const { collegeData } = useSelector((state) => state.college);
    return (
        <section class="main-content">
		<div class="container">
			<h1>Placements</h1>

			<table class="table">
				<tbody>
					<tr>
						<th>Highest Package</th>
						<td>
							{placementData.highest}
						</td>
					</tr>
					<tr>
						<th>Average Package</th>
						<td>
						{placementData.average}
						</td>
					</tr>
					<tr>
						<th>Median Package</th>
						<td>
						{placementData.median}
						</td>
					</tr>
				</tbody>
			</table>

		</div>
		<div className='flex items-center justify-center text-center'>
            <img src="data:image/png;base64,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" alt="" width='50%' />
		</div>

	</section>
    );
}

export default Placement;