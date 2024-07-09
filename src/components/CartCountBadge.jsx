import React from 'react'

const CartCountBadge = ({size}) => {
    return(
        <div className={`absolute bg-red-600 text-white rounded-full text-[13px] ${size} -right-3 -top-1 flex justify-center items-center`}>
            3
        </div>
    )
}

export default CartCountBadge