
import React,{useEffect,useState} from 'react'
import getProducts from "../../data/products";
import {SRLWrapper} from 'simple-react-lightbox'
import "./our_project.css"

function GalleryProject() {
    const[category,setCategory] = useState("all")
        const[filteredItem, setFilteredItem] = useState([])
        useEffect(() => {
            category === 'all' ? setFilteredItem(getProducts) : setFilteredItem(getProducts.filter(pic=> pic.category === category))
            
        }, [category])
    return (
        
        <div className="container">
             <div className="heading">Our Portfolio</div>
            <div handleSetTag ={setCategory}>
            <div className="filter_btn">
              <FilterButton name="all" handleSetTag ={setCategory} btnActive={category === 'all' ? true :false}/>
            <FilterButton name="Gate" handleSetTag ={setCategory} btnActive={category === 'Gate' ? true :false}/>
            <FilterButton name="Modern" handleSetTag ={setCategory} btnActive={category === 'Modern' ? true :false}/>
            <FilterButton name="Railing" handleSetTag ={setCategory} btnActive={category === 'Railing' ? true :false}/>
            <FilterButton name="Balcony" handleSetTag ={setCategory} btnActive={category === 'Balcony' ? true :false}/>
            <FilterButton name="Safety Grill" handleSetTag ={setCategory} btnActive={category === 'Safety Grill' ? true :false}/>
            <FilterButton name="Furniture" handleSetTag ={setCategory} btnActive={category === 'Furniture' ? true :false}/>
            <hr/>
            </div>
           <SRLWrapper>
            <div  className="container_1" >
                      {filteredItem.map(pic =>
                          <div className="image-card" key={pic.id}>
                          <a href={pic.image}>
                           <img className="image" src={pic.image}/>
                           </a>
                          </div>
                      )}
             </div>
             </SRLWrapper>
            </div>
        </div>
    )
   
}
 const FilterButton=({name,handleSetTag,btnActive})=>{
        return(
            <button className={"btn1 ${btnActive ? 'active':null}" } onClick={()=>handleSetTag(name)}>{name.toUpperCase()}</button>
        )

    }

export default GalleryProject;
        
       
        
        
