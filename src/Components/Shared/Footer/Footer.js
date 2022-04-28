import React from "react";

const Footer = () => {
  return (
    <>
      <aside className="text-center bg-primary text-white py-3 mt-5">
        CopyRight &copy; Abdur Rahman {new Date().getFullYear()}
      </aside>
    </>
  );
};

export default Footer;
