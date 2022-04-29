import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className=" p-2 font-semibold  text-decoration-none">
      <Link
        style={{color:"white", textDecoration:"none",borderBottom : match ?"2px solid orange": "" }}
        to={to}
       
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
