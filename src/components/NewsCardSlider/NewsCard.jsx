import React from "react";
const NewsCard = () => {
  return (
    <>
      <div className="car">
        <div className="card">
            <a href="/" className="Notification_Outer_link">
              <div className="Notification_innerbox">
                <div className="Notification_image_div">
                  <img
                    data-src="https://images.collegedunia.com/public/college_data/images/logos/NBE Logo.png?h=44&amp;w=44&amp;mode=stretch"
                    src="https://images.collegedunia.com/public/college_data/images/logos/NBE Logo.png?h=44&amp;w=44&amp;mode=stretch"
                    alt=""
                    height="44px"
                    className="Notification_image"
                  />
                </div>
                <span
                  className="Notification_Head"
                  >NEET PG 2022 Counselling Schedule released, Check Here</span>
              </div>
              <div className="Notification_Body">
                <p
                  className="Notification_Body"
                >
                  MCC has released NEET PG 2022 Counselling schedule on the official
                  website. Check complete schedule here.
                </p>
                <div className="Notification-height-footer-divider"></div>
                <div className="Notification-height-footer">
                  <hr className="Notification-hr" />
                  <p
                    className="Notification_Internal_Link"
                    >Read more
                    <svg
                      fill="#666"
                      xmlns="http://www.w3.org/2000/svg"
                      width="451.846"
                      height="451.847"
                      viewBox="0 0 451.846 451.847"
                      style={{width: "10px", height: "10px"}}
                    >
                      <path
                        d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
                      ></path>
                  </svg>
              </p>
              </div>
              </div>
          </a>

        </div>
    </div>
    </>
  );
};
export default NewsCard;
