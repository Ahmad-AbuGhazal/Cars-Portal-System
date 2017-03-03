import React from 'react'
import stl from './Footer.css';
function Footer() {
 return (
    <div className={stl.footer}>
      <h4 className={stl.footer_tag}>About Us <strong>/</strong> Terms <strong>/</strong> Privacy Policy</h4>
      <p className={stl.space}>PLS is a registered service mark and other marks are service marks of PLS Financial Services, Inc. &copy; 2016</p>
    </div>
  );
}
export default Footer