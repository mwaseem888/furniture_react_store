import {React, useState,useMemo} from 'react'
import ProductListing from './product_listing';
import AppliedFilters from './applied_filter'
import { Container, Grid } from '@material-ui/core';
import Divider from "@material-ui/core/Divider";
import Searchbar from './searchbar';
import SortComponent from './sorting';
import PriceFilter from './pricing_filter';
import CategoryFilter from './style_filter';
import ViewChange from './view_change';
import RatingFilter from './rating_filter';
import PaginationComponent from './pagination'

import {getProducts} from '../../data/products'
import StoreHeader from '../store_header';

export default function Collection() {
  const [selectedCategories, setSelectedCategories] = useState([]);
   const [selectedPriceRange, setSelectedPriceRange] = useState({min: '', max: '', isApplied: false});
  const [selectedRating, setSelectedRating] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { products } = useMemo(
    () =>
      getProducts({
        selectedCategories,
        selectedPriceRange,
        selectedRating,
        sortBy
      }),
    [selectedCategories,selectedPriceRange,selectedRating,sortBy]
  );

   return (
    <>
    <StoreHeader/>
    <Grid container spacing={1} >
      <Grid item lg={12}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item lg={8}>
            <AppliedFilters
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
          </Grid>
          <Grid item sm={2}>
            <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
          </Grid>
          <Grid  item sm={2} >
            <ViewChange />
          </Grid>
        </Grid>
       
        <Divider style={{margin: "16px"}}/>
        <Grid container lg={12}>
        <Grid item sm={2}>
        <CategoryFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <PriceFilter
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
        />
        <RatingFilter
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
       </Grid>
       <Grid item lg={10}>
        <ProductListing 
          products={products}
        />
        </Grid>
        </Grid>
        <PaginationComponent />
      </Grid>
    </Grid>
   
    </>
  );
}
/*
    return (
    
       
        <Grid container spacing= {2}>
           <Grid Items lg={12}>
            <Searchbar
                /*placeholder="Search Furniture"
              handleSearch={handleSearch}
              searchItem={searchItem}
            />  </Grid>
            <Grid item sm={2}> 
            <CategoryFilter selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
            <PriceFilter selectedPriceRange={selectedPriceRange} setSelectedPriceRange={setSelectedPriceRange} />
            <RatingFilter selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
            </Grid>
           <Grid item sm={10}>
            <Grid container justify="space-between" alignItems="center">
            <AppliedFilters sm={8}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
            <Grid item sm={2}>
            <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
            </Grid>
            </Grid>
         
        <Divider style={{margin: "16px"}}/>
        <ProductListing products={products}  />
        <PaginationComponent/>
        </Grid>
        </Grid>
        
    )
}
*/