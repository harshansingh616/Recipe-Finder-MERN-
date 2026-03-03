import React,{useState} from'react';

const SearchBar = ()=>
{
    const [query, setQuery]=useState('');

    const handleInputChange = (event)=>
    {

        setQuery(event.target.value);
    };

    const handleSubmit = (event)=>
    {
        event.preventDefault();

        if (query.trim()) {
      onSearch(query);
    }

        setQuery("");

    };
    return(

    <form onSubmit={handleSubmit}>
        <input type='Text' placeholder='Search recipe here' value={query} onChange={handleInputChange}/>
        <button className='btn btn-primary' type='Submit'>Search</button>
    </form>
    );
};

export default SearchBar;