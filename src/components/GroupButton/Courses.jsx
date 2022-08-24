import React from "react";

const coursesData=[
  {
    Branch:[
      {
        name:"Computer Science And Engineering",
        seats:"120",
      },
      {
        name:"Information Science And Enginnering",
        seats:"120",
      },
      {
        name:"Electronics And Electrical Engineering",
        seats:"120",
      },
    ],
    coursename:"B.E",
  },
  {
    Branch:[
      {
        name:"Computer Science And Engineering",
        seats:"120",
      },
      {
        name:"Information Science And Enginnering",
        seats:"120",
      },
      {
        name:"Electronics And Electrical Engineering",
        seats:"120",
      },
    ],
    coursename:"B.E",
  },
]
const Courses = () => {
  return (
    <>
      <section className="main-content">
      <div className="container">
        <h1>Courses</h1>
          {
        coursesData.map((value)=>{
          return(
            <div className="card mt-3 mb-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Specialization</th>
                  <th>Seats</th>
                </tr>
              </thead>
              <tbody>
                  {
                    value.Branch.map((val)=>{
                      return(
                        <>
                        <tr>
                          <td >{value.coursename}</td>
                          <td>{val.name}</td>
                          <td>{val.seats}</td>
                        </tr>  
                        </>
                      )
                    })
                  }
              </tbody>
            </table>
        </div>
          )
        })
      }
      </div>
    </section>
    </>
  );
};

export default Courses;
