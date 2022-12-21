import React from "react";

function Header({count, handleCartRender}) {
  return (
    <div className="header-container shopping-cart">
      <div onClick={() => handleCartRender(false)} className="site-heading">E-commerce Website</div>
      
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlicbSm08vw7nwh1dDcW88j3T3_L3f6htfOAp-zM9CK5ydyWS2UjlGNgSwmAUIn9wDqPo&usqp=CAU" alt="" width={35} onClick={() => handleCartRender(true)} className="cart-image"/>
      <span style={{position:"relative",top:-31}} className="cart-count">{count}</span>
      </div>
    </div>
  );
}

export default Header;
