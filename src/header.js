import SearchBar from "./search";

const Header = ({ data }) => {
  return (
    <>
      {/* <h3>Welcome</h3> */}
      <div id="navbar">
        <div className="container">
          <div className="wrap-content-header">
            <div className="wrap-logo">
              <img className="logo" src="../image/fit.jpeg" alt="pic" />
            </div>
            <div className="wrap-search">
              <form
                id="searchbox"
                action=""
                style={{ float: "none", textAlign: "center" }}
              >
                <SearchBar data={data} />
                {/* <input id="submit" type="submit" value="Search" /> */}
              </form>
            </div>
            <div class="nav">
              <img className="pic" src="../image/pic.jpeg" alt="pic1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
