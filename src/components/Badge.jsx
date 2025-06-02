import React from 'react';


function Badge({ label, color = '#9300ff' }) {
  return (
    <span className="badge" style={{ backgroundColor: color }}>
      {label}
    </span>
  );
}

export default Badge;
