
// import React from 'react';
// import './Navbar.css'

// const defaultImage = "https://png.pngtree.com/thumb_back/fh260/background/20220114/pngtree-no-image-available-available-wooden-blackboard-photo-image_4846882.jpg"; 

// const NewsItem = ({ author, title, description, src, url, date}) => {
//   const imageUrl = src ? src : defaultImage;

//   return (
//     <div className="container mt-3" style={{minHeight:"50vh"}} >
//       <div className="card text-dark" style={{borderBottom:"4px solid black",boxShadow:"5px 15px 18px grey"}}>
       
//         <div className="row g-0">
//           <div className="col-md-4 card-content" style={{ padding: 0 }}>
//             <img src={imageUrl} className="img-fluid" alt="..." style={{ height: "100%", width: "100%", objectFit: "cover" }} />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h6 className='author' style={{ color: "whitesmoke" }}>{author}</h6>
//               <h5 className="card-title" style={{ fontSize: "1.25rem", lineHeight: "1.4", marginBottom: "0.5rem" }}>{title.slice(0, 86)}</h5>
//               <small className="card-title" style={{ marginBottom: "0.5rem" }}>{date.slice(0, 10)}</small>
//               <a href={url} style={{ textDecoration: 'transparent', color: 'black', textOverflow: "ellipsis" }} >
//                 <p className="card-text" style={{ fontSize: "0.875rem", lineHeight: "1.6", marginBottom: "1rem" }}>{description ? description.slice(0, 120) : "News is not visible due to some technical issues click on Read More "}</p>
//               </a>
//               <a href={url} className="text" style={{ textDecorationColor: 'transparent', fontFamily: "monospace", fontStyle: "italic",fontWeight:"bolder",color:"blue" }}>Click here for Full News</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;

import React from 'react';
import './Navbar.css';

const defaultImage = "https://png.pngtree.com/thumb_back/fh260/background/20220114/pngtree-no-image-available-available-wooden-blackboard-photo-image_4846882.jpg";

const NewsItem = ({ author, title, description, src, url, date, isLoading }) => {
  const imageUrl = src ? src : defaultImage;

  if (isLoading) {
    return (
      <div className="container mt-3" style={{ minHeight: "50vh" }}>
        <div className="loader">Loading...</div>
      </div>
    );
  }
  return (
    <div className="container mt-3" style={{ minHeight: "50vh" }}>
      <div className="card text-dark" style={{ borderBottom: "4px solid black",border:" 1px solid grey",boxShadow:"2px 15px 10px gray ", borderRadius:"40px" }}>

        <div className="row g-0">
          <div className="col-md-4 card-content" style={{ padding: 0 }}>
            <div className="image-container" style={{ height: "100%", width: "100%", overflow: "hidden", borderRadius:"30px",borderTopRightRadius:"14px",borderBottomRightRadius:"14px",borderTopLeftRadius:"14px", borderBottomLeftRadius:"14px",boxShadow:"4px grey",overflow:'hidden'}}>
              <img src={imageUrl} className="img-fluid" alt="..." style={{ height: "40vh", width: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className='author' style={{ color: "whitesmoke" }}>{author}</h6>
              <h5 className="card-title" style={{ fontSize: "1.25rem", lineHeight: "1.4", marginBottom: "0.5rem" }}>{title.slice(0, 86)}</h5>
              <small className="card-title" style={{ marginBottom: "0.5rem" }}>{date.slice(0, 10)}</small>
              <a href={url} style={{ textDecoration: 'transparent', color: 'black', textOverflow: "ellipsis" }} >
                <p className="card-text" style={{ fontSize: "0.875rem", lineHeight: "1.6", marginBottom: "1rem" }}>{description ? description.slice(0, 120) : "News is not visible due to some technical issues click on Read More "}</p>
              </a>
              <a href={url} className="text" style={{ textDecorationColor: 'transparent', fontFamily: "monospace", fontStyle: "italic", fontWeight: "bolder", color: "blue" }}>Click here for Full News</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

