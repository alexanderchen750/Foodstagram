
import "./Search.css";
import {useState} from 'react';
//import { useEffect } from 'react'
import PostList from './PostList';
//import Timeline from './Timeline';
/*includes a empty bar to type and checkbox
indicating to search user or recipe, by name
and also another version by food items or category 
such as hallal or vegan*/


const Search = () =>  
{
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChanges = (event) => {
        setSearchInput(event.target.value);
    };

    // Handle changing of checkboxes
    const handleCheckboxChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.checked,
        });
    };
    
    // State for selected filters
    const [filters, setFilters] = useState({
        users: false,
        recipeNames: false,
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        keto: false,
        halal: false,});
        
    
        // Handle form submission
        const handleSubmit = async (event) => {
            event.preventDefault();

            // Encode the searchInput to ensure special characters are correctly processed in the URL
            const encodedSearchInput = encodeURIComponent(searchInput);

            // Construct the URL with the search term
            const searchUrl = `http://localhost:4000/api/posts/search?searchTerm=${encodedSearchInput}`;

            try {
                // Make the fetch request to the backend search endpoint
                const response = await fetch(searchUrl);
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`); // or handle error more gracefully
                }

                // Parse the JSON response from the backend
                const results = await response.json();
                setSearchResults(results)
                // Do something with the searchResults here, like updating the state to render the results
                console.log("Search Results:", searchResults);
            } catch (error) {
                console.error("Failed to fetch search results:", error);
            }
        };

    
/*includes search bar to type in */
return (
    <>
        <div className='search'>
            <div className='search__nav'>
            </div>
            <div className='search__timeline'>
                <h2>Search by users, recipes, or categories</h2>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..."
                value={searchInput}
                onChange={handleInputChanges}
                />
                <div className="checkbox-container">
                    <div className="checkbox-group">
                        <div>
                            <input type="checkbox" id="users" name="users" onChange={handleCheckboxChange}/>
                            <label>Users</label>
                        </div>
                        <div>
                        </div>
                        <div>
                            <label>
                            <input type="checkbox" id="vegan" name="vegan" onChange={handleCheckboxChange}/>
                            Vegan
                            </label>
                        </div>
                        <div>
                            <label>
                            <input type="checkbox" id="vegetarian" name="vegetarian" onChange={handleCheckboxChange}/>
                            Vegetarian
                            </label>
                        </div>
                    </div>
                    <div className="checkbox-group">
                        <div>
                            <label>
                            <input type="checkbox" id="glutenFree" name="glutenFree" onChange={handleCheckboxChange}/>
                            Gluten-Free
                            </label>
                        </div>
                        <div>
                            <label>
                            <input type="checkbox" id="keto" name="keto" onChange={handleCheckboxChange}/>
                            Keto
                            </label>
                        </div>
                        <div>
                            <label>
                            <input type="checkbox" id="halal" name="halal" onChange={handleCheckboxChange}/>
                            Halal
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit">Search</button>
                </form>
        </div>
            </div>
            <div className="postlist">
                <PostList posts={searchResults}/>
            </div>
        </>
    );
}  
export default Search;
