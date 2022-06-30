import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit =(e)=>{
        e.preventDefault()

        if(inputValue.trim().length < 1) return

        setInputValue('')
        onNewCategory(inputValue.trim())
    }

  return (
    <form onSubmit={onSubmit}>
        <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        />
    </form>
    )
}
