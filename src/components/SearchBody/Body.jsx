import React from "react";
import Filters from "./Filters";
import CollegeCard from "../CollegeCardSlider/CollegeCard";
import useFetch from "../../api/UseFetch";
import { useSelector } from "react-redux";
const Body = () => {
  // const colleges = [
  //   {
  //     photos: [
  //       "https://www.smvit.in/Default/ClientPanel/media/smvit_slider1.jpg",
  //       "abc",
  //     ],
  //     name: "Sir M. Visversaraya Institute of Tecnology",
  //     accreditation: [{ provider: "AICTE" }, { provider: "UGC" }],
  //     rank: 250,
  //     course: [
  //       { coursename: "B.Tech" },
  //       { coursename: "B.Tech" },
  //       { coursename: "B.Tech" },
  //     ],
  //     city: "Bangalore",
  //     logo: "https://images.shiksha.com/mediadata/images/1651569550phpDG50QS.jpeg",
  //     median: "7 lakhs",
  //   },
  // ];

  const { searchQuery, sortBy } = useSelector((state) => state.search);

  const url = sortBy ? `/college?sortBy=${sortBy}&sortOrder=asc` : "/college";

  const { data: college } = useFetch(url);
  return (
    <>
      <div className="align-items: center; justify-center flex my-10">
        <div className="row w-11/12">
          <div className="col-3 ">
            <Filters />
          </div>
          <div className="col-9 flex flex-wrap">
            {college?.map((college) => (
              <span className="px-1 py-2">
                <CollegeCard collegeInfo={college} key={college._id} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
