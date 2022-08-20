import React from 'react';
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
const Alumni=()=> {
    return (
        <section className="main-content">
		<div className="container">
			<h1>Notable Alumni</h1>

			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Profession</th>
						<th>Working at</th>
						<th><div className='flex items-center'>LinkedIn<div className='px-1 text-2xl'><FaLinkedin/></div></div></th>
						<th><div className='flex items-center justify-center '>Twitter<div className='px-1 text-2xl'><FaTwitter/></div></div></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className="user-info">
								<div className="user-info__img">
									<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="User Img" />
								</div>
								<div className="user-info__basic">
									<h5 className="mb-0">John Doe</h5>
								</div>
							</div>
						</td>
						<td>
							Founder
						</td>
						<td>
							<h6 className="mb-0">Grey-Slone Memorial Hospital</h6>
						</td>
						<td>
							<a href="https://www.linkedin.com/company/john-doe/">john-doe</a>
						</td>
						<td>
							<a href="https://twitter.com/johndoefromX">johndoefromX</a>
						</td>
					</tr>
					<tr>
						<td>
							<div className="user-info">
								<div className="user-info__img">
									<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="User Img" />
								</div>
								<div className="user-info__basic">
									<h5 className="mb-0">John Doe</h5>
								</div>
							</div>
						</td>
						<td>
							Founder
						</td>
						<td>
							<h6 className="mb-0">Grey-Slone Memorial Hospital</h6>
						</td>
						<td>
							<a href="https://www.linkedin.com/company/john-doe/">john-doe</a>
						</td>
						<td>
							<a href="https://twitter.com/johndoefromX">johndoefromX</a>
						</td>
					</tr>
					<tr>
						<td>
							<div className="user-info">
								<div className="user-info__img">
									<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="User Img" />
								</div>
								<div className="user-info__basic">
									<h5 className="mb-0">John Doe</h5>
								</div>
							</div>
						</td>
						<td>
							Founder
						</td>
						<td>
							<h6 className="mb-0">Grey-Slone Memorial Hospital</h6>
						</td>
						<td>
							<a href="https://www.linkedin.com/company/john-doe/">john-doe</a>
						</td>
						<td>
							<a href="https://twitter.com/johndoefromX">johndoefromX</a>
						</td>
					</tr>
					<tr>
						<td>
							<div className="user-info">
								<div className="user-info__img">
									<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="User Img" />
								</div>
								<div className="user-info__basic">
									<h5 className="mb-0">John Doe</h5>
								</div>
							</div>
						</td>
						<td>
							Founder
						</td>
						<td>
							<h6 className="mb-0">Grey-Slone Memorial Hospital</h6>
						</td>
						<td>
							<a href="https://www.linkedin.com/company/john-doe/">john-doe</a>
						</td>
						<td>
							<a href="https://twitter.com/johndoefromX">johndoefromX</a>
						</td>
					</tr>
					
				</tbody>
			</table>

		</div>
		<div className='flex items-center justify-center'>

			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item"><a className="page-link" href="/">Previous</a></li>
					<li className="page-item"><a className="page-link" href="/">1</a></li>
					<li className="page-item"><a className="page-link" href="/">2</a></li>
					<li className="page-item"><a className="page-link" href="/">3</a></li>
					<li className="page-item"><a className="page-link" href="/">Next</a></li>
				</ul>
			</nav>
		</div>

	    </section>
	
    );
}

export default Alumni;