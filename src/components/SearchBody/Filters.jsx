import React, { useState } from "react";
import useFetch from "../../api/UseFetch";

const Filters = () => {
  const { data: streamChecklist, loading, error } = useFetch("/stream");

  const {
    data: courseChecklist,
    loading: isLoading,
    error: isError,
  } = useFetch("/course");

  const [checked, setChecked] = useState([]);

  // {}

  // const checkList4 = [
  //   "0-25K",
  //   "25-50K",
  //   "50-75K",
  //   "75K-1L",
  //   "1-2L",
  //   "Above 2L",
  // ];
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <div className="app">
      <div className="checkList">
        <div className="title">{`Applied Fiteres: ${checkedItems}`}</div>

        <div className="my-4">
          <div className="title">Stream:</div>
          <div className="list-container">
            {streamChecklist?.map((stream) => {
              return (
                <div key={stream?._id}>
                  <input
                    value={stream?.streamname}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span className={isChecked(stream?.streamname)}>
                    {stream?.streamname}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-4">
          <div className="title">Course:</div>
          <div className="list-container">
            {courseChecklist.map((course) => (
              <div key={course._id}>
                <input
                  value={course.coursename}
                  type="checkbox"
                  onChange={handleCheck}
                />
                <span className={isChecked(course.coursename)}>
                  {course.coursename}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="my-4">
          <div className="title">Avg. Fees per year(in Rupees):</div>
          <div className="list-container">
            {checkList4.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span className={isChecked(item)}>{item}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Filters;
