import "./SideNav.css";
import { useState } from "react";
let SideNav = () => {
  const [isProfileHoverContent, setIsProfileHoverContent] = useState(false);
  const [isSaveHoverContent, setisSaveHoverContent] = useState(false);
  return (
    <div className="sideNav_container">
      <div className="user_Profile-contain">
        <div
          className="user_profile"
          onMouseEnter={() => setIsProfileHoverContent(true)}
          onMouseLeave={() => setIsProfileHoverContent(false)}
        >
          {isProfileHoverContent && (
            <div className="hover_profile_info">
              <div className="post_viewer">
                <div className="post">
                  <img
                    src=" https://mir-s3-cdn-cf.behance.net/projects/115/5e21d266312309.Y3JvcCw2NDYsNTA1LDMwMywxNzM.jpg"
                    alt=""
                  />
                  <img
                    src=" https://mir-s3-cdn-cf.behance.net/projects/115/beeddd61980931.Y3JvcCw5MDAsNzA0LDMxLDI0.jpg"
                    alt=""
                  />
                  <img
                    src=" https://mir-s3-cdn-cf.behance.net/projects/115/81b31c50754593.Y3JvcCwxMTU0LDkwMywwLDEwNDA.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="social-media-info-container">
                <div className="icon-container">
                  <span className="material-icons outlined icon">thumb_up</span>
                  <span className="like-info">8</span>
                </div>
                <div className="icon-container">
                  <span className="material-icons icon">visibility</span>
                  <span className="like-info">278</span>
                </div>
                <div className="icon-container">
                  <span className="material-icons icon">chat_bubble</span>
                  <span className="like-info">0</span>
                </div>
              </div>
            </div>
          )}

          <span className="material-icons outlined circle">add_circle</span>
        </div>
        <span className="text">Follow</span>
      </div>
      <div className="user_Profile-contain">
        <div className="user_profile">
          <span className="material-icons outlined email">email</span>
        </div>
        <span className="text">Message</span>
      </div>
      <div className="user_Profile-contain">
        <div className="user_profile">
          <img
            id="photshop"
            src="https://a5.behance.net/4f35a7f22fb262112e80a1e9d4d76c0f39b44b26/img/project/tools/photoshop.svg?cb=264615658" alt=""
          />
        </div>
        <span className="text">Tools</span>
      </div>
      <div className="user_Profile-contain">
        <div
          className="user_profile"
          onMouseEnter={() => {
            setisSaveHoverContent(true);
          }}
          onMouseLeave={() => {
            setisSaveHoverContent(false);
          }}
        >
          {isSaveHoverContent && (
            <div className="save_hover">
              <span className="save_hover_text">Add to MoodBoard</span>
            </div>
          )}

          <span className="material-icons outlined folder">folder</span>
        </div>
        <span className="text">Save</span>
      </div>
      <div className="user_Profile-contain">
        <div className="user_profile like">
          <span className="material-icons outlined likes">thumb_up</span>
        </div>
        <span className="text">Appreciation</span>
      </div>
    </div>
  );
};
export default SideNav;
