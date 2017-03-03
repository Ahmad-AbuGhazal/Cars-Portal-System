import React from 'react';
import MediaQuery from 'react-responsive';
import stl from './Header.css'
function Header() {
  return (

   <div className={stl.navHeader}>
           <MediaQuery minWidth={780}>
           <div className={stl.navHeaderBar}>
           <div className={stl.searchIcon}>
           <div className={stl.icon}>
           <i className="glyphicon glyphicon-search pull-right" aria-hidden="true"></i></div>
           </div></div>
         
          <div className={stl.navIcon}><div className={stl.icon}>
           <i className="glyphicon glyphicon-map-marker" aria-hidden="true">
           </i></div>
           </div>
            <div className={stl.navIcon}><div className={stl.icon}>
              <i className="glyphicon glyphicon-earphone" aria-hidden="true"></i></div>
           </div>
          
            <div className={stl.navIconTime}>
            <div className={stl.icon}>
           <i className="glyphicon glyphicon-time" aria-hidden="true">
           </i></div>
           </div>
       </MediaQuery>
        <MediaQuery maxWidth={780}>
          <div className={stl.navHeaderBarMobile}>
          </div>
          <div className={stl.navIconMobile}><div className={stl.iconMobile}>
              <i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i></div>
           </div>
           <div className={stl.navIconMobileLocation}><div className={stl.iconMobile}>
           <i className="glyphicon glyphicon-earphone" aria-hidden="true">
           </i></div>
           </div>
          
        </MediaQuery>
      </div>
    );
}
export default Header