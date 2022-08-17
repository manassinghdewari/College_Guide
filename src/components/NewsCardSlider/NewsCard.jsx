import React from "react";
const NewsCard = () => {
  return (
    <>
      <div className="p-5">
        <div className="card bg-neutral-100 w-80">
          <div className="card-body">
            <h5 className="card-title head text-center">Topic</h5>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              dolorem ipsam delectus, enim aliquam officia optio voluptates vel
              quae soluta, consequatur unde alias harum laudantium sunt.
              Consequatur rerum tenetur magnam doloribus provident. Expedita
              neque magni dolore est ex. Eaque totam deleniti ab iusto?
            </div>
            <div className="text-center p-3">
              <a href="/" className="btn btn-primary bg-blue-700">
                Show More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsCard;
