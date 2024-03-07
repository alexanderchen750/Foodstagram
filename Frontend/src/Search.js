
import "./Search.css";
import {useState} from 'react';
/*includes a empty bar to type and checkbox
indicating to search user or recipe, by name
and also another version by food items or category 
such as hallal or vegan*/


const Search = () =>  
{
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
const [searchInput, setSearchInput] = useState('');
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
        const handleSubmit = (event) => {
            event.preventDefault();
            // Implement your search logic here using `searchInput` and `filters`
            console.log("Search Input:", searchInput);
            console.log("Filters:", filters);
        };
    
/*includes search bar to type in */
return(
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
            <div>
                <input type="checkbox" id="users"name="users" value={searchInput} onChange={handleCheckboxChange}/>
                <label>Users</label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="recipeNames" name="recipeNames" value={searchInput} onChange={handleCheckboxChange}/>
                Recipe Names
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="vegan" name="vegan" value={searchInput} onChange={handleCheckboxChange}/>
                Vegan
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="vegetarian" name="vegetarian" value={searchInput} onChange={handleCheckboxChange}/>
                Vegetarian
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="glutenFree" name="glutenFree" value={searchInput} onChange={handleCheckboxChange}/>
                Gluten-Free
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="keto" name="keto" value={searchInput} onChange={handleCheckboxChange}/>
                Keto
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="halal" name="halal" value={searchInput} onChange={handleCheckboxChange}/>
                Halal
                </label>
            </div>
            <button type="submit">Search</button>
            </form>
        </div>
    </div>
    );
}
export default Search;
