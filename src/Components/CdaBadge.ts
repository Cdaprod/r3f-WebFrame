import React from 'react';

interface CdaBadgeProps {
  label?: string;
}

export const CdaBadge: React.FC<CdaBadgeProps> = ({ label = 'Cda Brand' }) => {
  return (
    <div 
      style={{ 
        border: '1px solid black', 
        padding: '5px', 
        position: 'fixed', 
        bottom: '10px', 
        right: '10px' 
      }}>
      {label}
    </div>
  );
};
