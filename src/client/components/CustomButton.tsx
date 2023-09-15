import React from 'react';
import './button.css';

interface Props {
  text: string;
  onClick?: () => void;
  customStyle?: React.CSSProperties;
  className?: String;
}

const CustomButton: React.FC<Props> = ({ text, onClick, customStyle, className }) => {
  return (
    <button onClick={onClick} style={customStyle} className={`custom-button ${className}`}>
      {text}
    </button>
  );
};

export default CustomButton;