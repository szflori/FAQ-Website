import React from 'react'

type Props = {
    size: string;
    children: React.ReactNode;
  };

const Card: React.FC<Props> = ({children, size}) => {
  return (
    <div className={`container ${size}`}>{children}</div>
  )
}

export default Card