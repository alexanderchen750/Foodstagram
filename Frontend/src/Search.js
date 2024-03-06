
import "./Search.css";
import Sidenav from './navigation/Sidenav';
import React, {useState} from 'react';
/*includes a empty bar to type and checkbox
indicating to search user or recipe, by name
and also another version by food items or category 
such as hallal or vegan*/


const Search = () =>  
{
/*include function to search thru given data in database*/
const[data,setData] =useState('');
/*includes search bar to type in */
return(
    <div className='search'>
        <div className='search__nav'>
            
        </div>
        <div className='search__timeline'>
            <h2>Search by users, recipes, or categories</h2>
            <input type="text" placeholder="Search..."/>
            <div>
                <input type="checkbox" id="users"name="users" value="users"/>
                <label>Users</label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="recipeNames" name="recipeNames" value="recipeNames"/>
                Recipe Names
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="vegan" name="vegan" value="vegan"/>
                Vegan
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian"/>
                Vegetarian
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="glutenFree" name="glutenFree" value="glutenFree"/>
                Gluten-Free
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="keto" name="keto" value="keto"/>
                Keto
                </label>
            </div>
            <div>
                <label>
                <input type="checkbox" id="halal" name="halal" value="halal"/>
                Halal
                </label>
            </div>
            <button type="submit">Search</button>
        </div>
    </div>
    );
}
export default Search;
