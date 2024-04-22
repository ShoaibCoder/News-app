import { useState} from "react";
import './Navbar.css'


const Navbar = ({ setCategory }) => {
  const [activeLink, setActiveLink] = useState("general");
  const [isMenuOpen,setIsMenuOpen] = useState(false);


const handleButtonClick = () =>{
  setIsMenuOpen(!isMenuOpen);
}

  const handleCategoryChange = (category) => {
    setActiveLink(category);
    setCategory(category);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark" style={{ height: "100px", width: "100%", borderTop: "none",borderBottom:"1px solid black"}}>
      <div className="container-fluid " >
        <a className="navbar-brand" style={{marginBottom: "15px",borderBottomColor:"2px solid white" }}>
          <div className="logo-container" style={{display:"flex",flexWrap:"wrap"}}>
          <img src="high2.png" id="img-logo" alt="" height={"120px"} width={"200px"} style={{overflow:"hidden"}}/>
          </div>
          </a>
          <button className="navbar-toggler" type="button" 
          onClick={handleButtonClick}>
            <div className="animated-icon1" >
              <span></span>
              <span></span>
              <span></span>
            </div>
        </button>

        <div className={`collapse navbar-collapse "id="navbarNav"  ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav " style={{fontSize:"13px"}}>
            <li className="nav-item"  >
              <div className={`nav-link ${activeLink === "technology" ? "active" : ""}`} 
              onClick={() => handleCategoryChange("technology")} onMouseEnter={() => setActiveLink("technology")}  style={{ cursor: "pointer", borderBottomColor: activeLink === "technology" ? "#0443b9" : "transparent", borderBottomWidth: "5px", borderRadius: "10%", borderBottomStyle: "solid", color: activeLink === "technology" ? "#0443b9" : "white", fontWeight:"bolder"  }}>Technology</div>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <div className={`nav-link ${activeLink === "Business" ? "active" : ""}`} onClick={() => handleCategoryChange("Business")} onMouseEnter={() => setActiveLink("Business")} onMouseLeave={() => setActiveLink(activeLink)} style={{ cursor: "pointer", borderBottomColor: activeLink === "Business" ? "#0443b9" : "transparent", borderBottomWidth: "5px", borderRadius: "10%", borderBottomStyle: "solid", color: activeLink === "Business" ? "#0443b9" : "white", fontWeight:"bolder" }}>Business</div>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <div className={`nav-link ${activeLink === "Health" ? "active" : ""}`} onClick={() => handleCategoryChange("Health")} onMouseEnter={() => setActiveLink("Health")} onMouseLeave={() => setActiveLink(activeLink)} style={{ cursor: "pointer", borderBottomColor: activeLink === "Health" ? "#0443b9" : "transparent", borderBottomWidth: "5px", borderRadius: "10%", borderBottomStyle: "solid", color: activeLink === "Health" ? "#0443b9" : "white", fontWeight:"bolder" }}>Health</div>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <div className={`nav-link ${activeLink === "Sports" ? "active" : ""}`} onClick={() => handleCategoryChange("Sports")} onMouseEnter={() => setActiveLink("Sports")} onMouseLeave={() => setActiveLink(activeLink)} style={{ cursor: "pointer", borderBottomColor: activeLink === "Sports" ? "#0443b9" : "transparent", borderBottomWidth: "5px", borderRadius: "10%", borderBottomStyle: "solid", color: activeLink === "Sports" ? "#0443b9" : "white", fontWeight:"bolder" }}>Sports</div>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <div className={`nav-link ${activeLink === "Entertainment" ? "active" : ""}`} onClick={() => handleCategoryChange("Entertainment")} onMouseEnter={() => setActiveLink("Entertainment")} onMouseLeave={() => setActiveLink(activeLink)} style={{ cursor: "pointer", borderBottomColor: activeLink === "Entertainment" ? "#0443b9" : "transparent", borderBottomWidth: "5px", borderRadius: "10%", borderBottomStyle: "solid", color: activeLink === "Entertainment" ? "#0443b9" : "white", fontWeight:"bolder"}}>Entertainment</div>
            </li>
            
          </ul>
         
          
      </div>

      
        </div>
    </nav>
  );
};

export default Navbar;
