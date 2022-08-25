import React from "react";
import { Link } from "react-router-dom";
const CollegeCard = () => (
  <>
    <Link to="/institutepage">
    <div className="card rounded-3 wid22">
        <img
          className="card-img rounded-3 hei18"
          src="https://www.smvit.in/Default/ClientPanel/media/smvit_slider1.jpg"
          alt="Sir M. Visversaraya Institute of Tecnology"
        />
      <div className="card-img-overlay rounded-3 h-1/2">
        <div className="row">
          <div className="col">
            <a href="/" className="btn2 btn btn-primary rounded-3">
              Brochure
            </a>
          </div>
          <div className="col tar">
            <button type="button" className="btn lik btn-link">
              <span className="bi bi-heart"></span>
            </button>
          </div>
        </div>
        <div className="ran">
          <span className="rank rounded-4">Rank:250</span>
        </div>
      </div>
      <div className="card-body">
        <div className="row p4">
          <div className="col">Bangalore,IN</div>
          <div className="col col-4">
            <a href="/" className="btn3 btn btn-primary rounded-3">
              Compare
            </a>
          </div>
        </div>
        <div>
          <div className="title row p4">
            <div className="col-5">
              <img
                src="https://images.shiksha.com/mediadata/images/1651569550phpDG50QS.jpeg"
                alt="Logo"
                width="75"
                height="75"
              />
            </div>
            <div className="col">
              Sir M. Visversaraya Institute of Tecnology
            </div>
          </div>
        </div>
        <div className="row p4">
          <div className="col acc">AICTE,UGC Approved</div>
          <div className="col est">ESTD.1935</div>
        </div>
        <hr />
        <div className="row p4">
          <div className="col rate">&#9733; Rating:</div>
          <div className="col">8/10</div>
        </div>
      </div>
    </div>
    </Link>
  </>
);

export default CollegeCard;
