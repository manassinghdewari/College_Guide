import axios from "axios";
import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import useFetch from "../api/UseFetch";
import { BASE_URL } from "../api/UseFetch";

const FacultyData = ({ id }) => {
  const { data } = useFetch(`/faculty/${id}`);
console.log(data)
  return (
    <div className="col-xl-3 col-sm-6 mb-2.5 mt-2.5">
      <div className="bg-white rounded shadow-sm py-5 px-4">
        <div className="flex items-center justify-center">
          <img
            src={data.photo}
            alt=""
            width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
        </div>
        <div className="text-xl font-bold mb-0 text-center ">
          {data.name}
        </div>
        <div className="  text-uppercase font-semibold text-slate-400">
        {data.designation}
        </div>
        <div className="small text-uppercase text-muted font-semibold">
          {data.company}
        </div>
        <div className="small text-muted">Computer Science and Engineering</div>
        <div>Research on:-NLP</div>
        <div className="flex justify-evenly text-lg">
          <a href="https://www.linkedin.com/company/john-doe/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/johndoefromX">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacultyData;
