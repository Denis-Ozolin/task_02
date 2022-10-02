import React from 'react';

interface ButtonProps {
  children: React.ReactNode,
  onClick?: () => void,
  accent?: boolean, 
  type?: 'button' | 'submit',
}

function Button({ children, onClick, accent, type='button' }: ButtonProps) { 
  return (
    <button onClick={onClick} className={`bg-white border-black rounded-sm border-solid border cursor-pointer text-xs p-1 hover:bg-bgc-hex ${!accent? '': 'font-medium text-base py-2 px-8'}`} type={type}>{children}</button>
  )
}

export default Button;