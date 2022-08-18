import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './Table.css'
const Table=()=>{
  return(
    <>
    <div className="table-container">
      
      <Typography className="heading" component="h1" variant="h5">
            Overall NIRF Ranking
          </Typography>
      <table className="table align-middle mb-0 bg-grey">
      <thead className="bg-light">
        <tr>
          <div className="ms-6">
          <th>Name of the Institute</th>
          </div>
          <th>State</th>
          <th>Score</th>
          <th>NIRF Ranking</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">Indian Institute of Technology Madras</p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Tamil Nadu</p>
           </td>
          <td>
            <p className="fw-normal mb-1">87.59</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">1</p>
        </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://iisc.ac.in/wp-content/uploads/2020/08/IISc_Master_Seal_Black_Transparent.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">Indian Institute of Science</p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Karnataka</p>
           </td>
          <td>
            <p className="fw-normal mb-1">83.57</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">2</p>
        </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">Indian Institute of Technology Bombay</p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Maharashtra</p>
           </td>
          <td>
            <p className="fw-normal mb-1">82.35</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">3</p>
        </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">Indian Institute of Technology Delhi</p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">New Delhi</p>
           </td>
          <td>
            <p className="fw-normal mb-1">82.22</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">4</p>
        </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/1200px-IIT_Kanpur_Logo.svg.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">Indian Institute of Technology Kanpur</p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Uttar Pradesh</p>
           </td>
          <td>
            <p className="fw-normal mb-1">77.83</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">5</p>
        </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">Indian Institute of Kharagpur</p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">West Bengal</p>
           </td>
          <td>
            <p className="fw-normal mb-1">75.94</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">6</p>
        </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Indian_Institute_of_Technology_Roorkee_logo.png/220px-Indian_Institute_of_Technology_Roorkee_logo.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">Indian Institute of Technology Roorkee</p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Uttarakhand</p>
           </td>
          <td>
            <p className="fw-normal mb-1">71.48</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">7</p>
        </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/IIT_Guwahati_Logo.svg/640px-IIT_Guwahati_Logo.svg.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">Indian Institute of Technology Guwahati</p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Assam</p>
           </td>
          <td>
            <p className="fw-normal mb-1">69.75</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">8</p>
        </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/All_India_Institute_of_Medical_Sciences%2C_Delhi.svg/1200px-All_India_Institute_of_Medical_Sciences%2C_Delhi.svg.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">All India Institute of Medical Sciences Delhi </p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Delhi</p>
           </td>
          <td>
            <p className="fw-normal mb-1">69.57</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">9</p>
        </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center ms-3">
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Jawaharlal_Nehru_University_Logo_vectorized.svg/1200px-Jawaharlal_Nehru_University_Logo_vectorized.svg.png"
                  alt=""
                  sx={{width: "45px", height: "45px"}}
                  className="rounded-circle"
                  />
              <div className="ms-3">
                <p className="fw-normal mb-1">Jawaharlal Nehru University</p>

              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Delhi</p>
           </td>
          <td>
            <p className="fw-normal mb-1">67.25</p>
          </td>
          <td>
            <p class name="fw-normal mb-1">10</p>
        </td>
        </tr>
      </tbody>
    </table>
    <div className="ms-5">
    <Link href="#" variant="body2">
                  {"Show More"}
                </Link>
                </div>
                
                </div>
    </>
  )
}

export default Table;