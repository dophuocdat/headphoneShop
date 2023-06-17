import React from 'react'

const Tab = ({active, onClick,children}) => {
  return (
    <div className={`${active ? 'bg-gray-500':'bg-white' } cursor-pointer rounded-lg p-2`}
    onClick={onClick}>
        {children}
    </div>
  )
}

export default Tab