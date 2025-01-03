import React from 'react';
import './index.css'; 

const CouponCounter = ({ title, count }) => {
  return (
    <div className="coupon-counter">
      <h3>{title}</h3>
      <span>{count}</span>
    </div>
  );
};

export default CouponCounter;