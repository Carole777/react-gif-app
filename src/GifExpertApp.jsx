import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const KEY = '9eq74WvhIkMWILXXEcIfkAfqqutN9ozP';
    const [ categories, setCategories ] = useState([ 'Manchester United' ]);
    
    const onAddCategory = ( newCategory ) =>{
      // Valorant
      if( categories.includes(newCategory) ) return;
      setCategories( [ newCategory, ...categories ] );
    }
  return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory 
          onNewCategory = { event => onAddCategory(event) } 
        />

        {
          categories.map( category =>(
                <GifGrid
                  key={ category }
                  category={ category }/>
              ) 
          ) 
        }
        
    </>
  )
}
