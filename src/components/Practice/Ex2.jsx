import React, { useState } from 'react'

const Ex2 = () => {

    const arr = ["play cricket", "play video games", "read book"]

    const [arrCopy, setArrCopy] = useState(arr)

    const [check, setCheck] = useState(false)

    const [currIndex, setCurrIndex] = useState()

    const handleDelete = (itemIndex) => {
        let newArr = arrCopy
        let filteredArr = newArr.filter((element, deletingItem) => {
            return deletingItem !== itemIndex
        })
        setArrCopy(filteredArr)
    }

    const handleCheckBox = (value, i) => {
        setCheck(!check)
        setCurrIndex(i)
    }

    return (
        <>
            <div className='list'>
                <ul>
                    {arrCopy.map((element, i) => {
                        return (
                            <div>
                                <li >
                                    <input
                                        type="checkbox"
                                        onChange={(e, i) => handleCheckBox(!e.target.value, i)} />
                                    {element}
                                    {check && currIndex == i &&
                                        <button onClick={() => handleDelete(i)}>Delete Item</button>
                                    }
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Ex2