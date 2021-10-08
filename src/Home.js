import "./Home.css";
import Navbar from "./Navbar"
import {useState} from "react"
import {useHistory} from "react-router-dom"
import SideNav from "./SideNav";
let Home = () => {
   const [isProfileHoverContent, setIsProfileHoverContent] = useState(false);
  let history = useHistory();
  return (
    <div>
      <Navbar />
      <div className="profile_viewer">
        <div
          className="profile_viewer_display"
          onMouseEnter={() => setIsProfileHoverContent(true)}
          onMouseLeave={() => setIsProfileHoverContent(false)}
        ></div>
        {isProfileHoverContent && (
          <div className="hover_profile_info_home">
            <div className="post_viewer">
              <div className="post">
                <img src=" https://mir-s3-cdn-cf.behance.net/projects/115/5e21d266312309.Y3JvcCw2NDYsNTA1LDMwMywxNzM.jpg" />
                <img src=" https://mir-s3-cdn-cf.behance.net/projects/115/beeddd61980931.Y3JvcCw5MDAsNzA0LDMxLDI0.jpg" />
                <img src=" https://mir-s3-cdn-cf.behance.net/projects/115/81b31c50754593.Y3JvcCwxMTU0LDkwMywwLDEwNDA.jpg" />
              </div>
            </div>
            <div className="social-media-info-container">
              <div className="icon-container">
                <span class="material-icons outlined icon">thumb_up</span>
                <span className="like-info">8</span>
              </div>
              <div className="icon-container">
                <span class="material-icons icon">visibility</span>
                <span className="like-info">278</span>
              </div>
              <div className="icon-container">
                <span class="material-icons icon">chat_bubble</span>
                <span className="like-info">0</span>
              </div>
            </div>
          </div>
        )}
        <div className="profile_viewer_info">
          <span className="profile_viewer_text">
            Easyexports, Dashboard, Online Platform, Website Design
          </span>
          <span>Anestis Gaudas • Follow</span>
        </div>
      </div>

      <div className="home_container">
        <div className="sidenav">
          <SideNav />
        </div>
        <div className="home_content_container">
          <div className="home_content_image_container">
            <img
              className="image-display"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c507bd61980931.5a80ce5c610d8.jpg"
            ></img>
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_text_container">
            <span className="home_text_container text-1">
              Easyexports is a B2B web platform that connects exporters
            </span>
            <span className="home_text_container text-2">
              with buyers. Is the LinkedIn for trade partners.
            </span>
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="info-text">
            <span className="info-text-1">
              *** PROTOTYPING VERSION & UNDER DEVELOPMENT ***
            </span>
            <span className="info-text-2">
              2017-2018 / Web Design, UI/UX, Strategy / AGENCY: Virtual Square
            </span>
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="product-image-container">
            <div className="product-image">
              <img
                className="product-display"
                src=" https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0c638b61980931.5a80ce5b5dc18.jpg"
              />
            </div>
            <div className="product-image">
              <img
                className="product-display"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7f2c9e61980931.5a80ce5b5e142.jpg"
              />
            </div>
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="product-image-container">
            <div className="product-image">
              <img
                className="product-display"
                src=" https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/214f0461980931.5a80ce5be2e38.jpg"
              />
            </div>
            <div className="product-image">
              <img
                className="product-display"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44488961980931.5a80ce5be3366.jpg"
              />
            </div>
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_text_container-decor">
            <span className="text-decor-bold">What does Easyexport do: </span>
            <span className="text-decor-normal">
              Providing the appropriate leads generated from company data and
              preferences through a customized algorithm. Based on the
              information gathered (products, location, capacity, certificates,
              financials) users can instantly communicate for free. Each user
              can create a profile of their company. Users can then upload their
              products or tag the product they're looking for. The platform
              match makes the results and immediately users can easily start
              chatting with each other. It’s a no-brainer, transparent, easy and
              free communicating tool that endorses and builds business
              relationships
            </span>
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_single_image">
            <img
              className="image-display"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a68f7061980931.5a80ce5c62151.jpg"
            />
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_single_image">
            <img
              className="image-display"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/05117c61980931.5a80ce5c62913.jpg"
            />
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_text_container-decor">
            <span className="text-decor-normal">
              Exporters have products to offer that require buyers being able to
              find them. They can be found on Easyexports. The great thing about
              that is that exporters have no idea what buyers might be looking
              for and that is good for us. Anyone looking for a company by name
              or looking for a specific product, capacity, area, and information
              on that company can find it. Easyexports gives companies a way to
              easily find the right trade partner.
            </span>
            <br />
            <br />
            <span className="text-decor-bold">
              Easy, transparent, friendly to use and a total no brainer,
              Easyexports is a B2B web platform that connects exporters with
              buyers. Providing the appropriate leads generated from company
              data and preferences through a customized algorithm. Based on the
              information gathered (products, location, capacity, certificates,
              financials) users can instantly communicate for free.
            </span>
            <br />
            <br />
            <span className="text-decor-normal">
              Easyexpots' work is to improve the antiquated, fragmented food &
              beverages industry, a 20 Billion market.
            </span>
            <br />
            <br />
            <span className="text-decor-normal">
              The company has to do with people aged 30-65, 70% man 30% women,
              producers, exporters managers, import managers, wholesalers,
              distributors, deli-shop owners, horeca managers, brokers, agents,
              representatives.
            </span>
          </div>
          <div className="home_content_single_image">
            <img
              className="image-display"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1fdf6261980931.5a80ce5c60c0d.jpg"
            />
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_single_image">
            <img
              className="image-display"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/721e5a61980931.5a80ce5c6262e.gif"
            />
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_text_container-decor">
            <span className="text-decor-normal">
              Easyexports noticed that the right company/product information is
              an important concern in order to trade. The old way of doing this
              in international trade of food & beverages is inefficient now.
              People use B2B fairs, Chambers of Commerce, Bilateral Chambers of
              Commerce, trade representatives and other consulting agencies,
              paper or web directories, and personal referrals to get this
              information. Bringing together exporters with buyers is one of the
              main activities of the Chambers of Commerce. Fortunately they are
              not innovating the way they should so we are providing them a SaaS
              with Easyexports to organize & manage their database.
            </span>
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_single_image">
            <img
              className="image-display"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/311adf61980931.5a80ce5c61888.jpg"
            />
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_single_image">
            <img
              className="image-display"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/662b4b61980931.5a80ce5c606d2.jpg"
            />
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_text_container-decor">
            <span className="text-decor-normal">
              Building an organic growth through web based email campaigns and
              follow-up calls. The competitive advantage is that it provides
              affordable financial and performance information that help the
              companies decide with whom to trade. It is also getting in front
              of our competition by integrating the Chambers with exclusivity
              contracts as strategic partners.
            </span>
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="home_content_single_image">
            <img
              className="image-display"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a68f7061980931.5a80ce5c62151.jpg"
            />
          </div>
          <div className="home_content_image_container">
            <img
              className="image-display"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c507bd61980931.5a80ce5c610d8.jpg"
            ></img>
          </div>
          <div className="space module-separater">
            <div className="divider"></div>
          </div>
          <div className="profile-viewer">
            <div className="profile-viewer-info">
              <div className="thumbsup-container">
                <div className="thumbsup">
                  <span class="material-icons outlined">thumb_up</span>
                </div>
              </div>
              <div className="profile-viewer-header">
                <span className="profile-viewer-header_text">
                  Easyexports, Dashboard, Online Platform, Website Design
                </span>
              </div>
              <div className="social-media-info-container">
                <div className="icon-container">
                  <span class="material-icons outlined icon">thumb_up</span>
                  <span className="like-info">8</span>
                </div>
                <div className="icon-container">
                  <span class="material-icons icon">visibility</span>
                  <span className="like-info">278</span>
                </div>
                <div className="icon-container">
                  <span class="material-icons icon">chat_bubble</span>
                  <span className="like-info">0</span>
                </div>
              </div>
              <div className="publish-text-conatiner">
                <span className="publish-text">
                  Published: February 12th 2018
                </span>
              </div>
            </div>
            <div className="profile-viewer-slide">
              <div className="crousal-container">
                <div className="crousal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
