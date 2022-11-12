import * as React from 'react';

const Navbar = ({ elements }) => {
  return (
    <div>
      {
        elements.map((element: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal) =>
          <div>{element}</div>
        )
      }
    </div>
  );
};

export default Navbar;
