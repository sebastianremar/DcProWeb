import React from 'react';
import './button.css';

interface Props {
  text: string;
  onClick?: () => void;
  customStyle?: React.CSSProperties;
}

const CustomButton: React.FC<Props> = ({ text, onClick, customStyle }) => {
  return (
    <button onClick={onClick} style={customStyle} className="custom-button">
      {text}
    </button>
  );
};

export default CustomButton;