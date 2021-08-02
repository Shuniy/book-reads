import React, {useState} from 'react'

function SearchBooksInput(props) {

    const [value, setValue] = useState('')

    function handleChange(event){
        const val = event.target.value
        setValue(val)
        props.onSearch(val)
    }

    return (
        <div className='search-books-input-wrapper'>
        <input type="text" value={value} placeholder='Search by title or author...' onChange={handleChange} autoFocus />
            
        </div>
    )
}

export default SearchBooksInput
