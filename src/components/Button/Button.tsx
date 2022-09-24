import React from 'react';

import css from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode,
  onClick?: () => void,
  accent?: boolean, 
  type?: 'button' | 'submit',
}

function Button({ children, onClick, accent, type='button' }: ButtonProps) { 
  const stylesBtn = !accent ? css.default : css.accent;

  return (
    <button onClick={onClick} className={stylesBtn} type={type}>{children}</button>
  )
}

export default Button;