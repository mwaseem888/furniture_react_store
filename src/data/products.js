const productsDb = [
    {id: 1,
          image: '/images/Chair5.jpg',
          title: 'Chair5',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 1200,
          category:"Modern",
          rating: 4,
          date: new Date('2019-06-28') 
    },
    {id: 2,
          image: '/images/Chair1.jpg',
          title: 'Chair1',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2400,
          category:"Modern",
          rating: 1,
          date: new Date('2019-07-28') 
    },
    {id: 3,
          image: '/images/Chair2.jpg',
          title: 'Chair2',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 5,
          date: new Date('2019-08-28') 
    },
    {id: 4,
          image: '/images/Chair3.jpg',
          title: 'Chair3',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 2,
          date: new Date('2019-09-28') 
    },
    {id: 5,
          image: '/images/Chair4.jpg',
          title: 'Chair4',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 800,
          category:"Modern",
          rating: 3,
          date: new Date('2019-10-28') 
    },
    {id: 6,
          image: '/images/Light1.jpg',
          title: 'Light1',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 4,
          date: new Date('2021-04-03') 
    },
    {id: 7,
          image: '/images/Light2.jpg',
          title: 'Light2',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 5,
          date: new Date('2019-12-28') 
    },
    {id: 8,
          image: '/images/Light3.jpg',
          title: 'Light3',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 4,
          date: new Date('2019-04-28') 
    },
    {id: 9,
          image: '/images/Light4.jpg',
          title: 'Light4',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 2,
          date: new Date('2021-05-17') 
    },
    {id: 10,
          image: '/images/Light5.jpg',
          title: 'Light5',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 1,
          date: new Date('2018-06-28') 
    },
    {id: 11,
          image: '/images/Bed1.jpg',
          title: 'Bed1',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 1,
          date: new Date('2009-06-28') 
    },
    {id: 12,
          image: '/images/Bed2.jpg',
          title: 'Bed2',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 4,
          date: new Date('2013-06-28') 
    },
    {id: 13,
          image: '/images/Bed3.jpg',
          title: 'Bed3',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 3,
          date: new Date('2019-06-05') 
    },
    {id: 14,
          image: '/images/Bed4.jpg',
          title: 'Bed4',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Gate",
          rating: 5,
          date: new Date('2019-06-28') 
    },
    {id: 15,
          image: '/images/Bed5.jpg',
          title: 'Bed5',
          description: 'Manufacture by wrought iron  and Modern Design include deco paint and fitting & installation',
          price: 2500,
          category:"Modern",
          rating: 2,
          date: new Date('2019-01-28') 
    },
]
export default productsDb;
export const getProductById = (id) => {
  return productsDb.find(product => product.id === Number(id));
}



const getFilterData = (
  data,
  selectedCategories,
  selectedPriceRange,
  selectedRating
) => {
  return data.filter(product => {
    // category filter
    let categoryMatch = true;
    if (selectedCategories.length && product.Design)
      categoryMatch = selectedCategories.includes(product.Design);

    // price filter
    let priceMatch = true;
    const { min, max, isApplied } = selectedPriceRange;
    if (isApplied && product.price)
      priceMatch = product.price >= min && product.price <= max;

    // rating filter
    let ratingMatch = true;
    if (selectedRating && product.rating)
      ratingMatch = Number(product.rating) >= Number(selectedRating);

    return categoryMatch && priceMatch && ratingMatch;
  });
};

const getSortData = (data, sortBy) => {
  return data.sort((product1, product2) => {
    if (sortBy === "NewArrival") {
      return product2.date - product1.date;
    } else if (sortBy === "PriceLowToHigh") {
      return product1.price < product2.price ? -1 : 1;
    } else if (sortBy === "RatingHighToLow") {
      return product1.rating > product2.rating ? -1 : 1;
    }
    else if (sortBy === "RatingLowToHigh") {
      return product1.rating < product2.rating ? -1 : 1;
    }
    else if (sortBy === "AtoZ") {
      const result = (sortBy === "AtoZ") ? 1 : -1;
      return result*product1.title.localeCompare(product2.title) 
    }
    else if (sortBy === "ZtoA") {
      const result = (sortBy === "AtoZ") ? -1 : 1;
      return result*product2.title.localeCompare(product1.title)
    } else {
      // default PriceHighToLow
      return product1.price > product2.price ? -1 : 1;
    }
  });
};

const getPageData = (data, indexFrom, limit) => {
  return data.slice(indexFrom, indexFrom + limit);
};

export const getProducts = ({
  searchString,
  selectedCategories,
  selectedPriceRange,
  selectedRating,
  sortBy,
  indexFrom,
  limit,
}) => {
  let products = productsDb;
  

  if (
    selectedCategories.length ||
    selectedPriceRange.isApplied ||
    selectedRating
  )
    products = getFilterData(
      products,
      selectedCategories,
      selectedPriceRange,
      selectedRating
    );
  const total = products.length;

  products = getSortData(products, sortBy);

  if (indexFrom && limit) products = getPageData(products, indexFrom, limit);

  const hasMoreData = total > indexFrom + limit;
  return { products, total, hasMoreData };
};

const findPriceRange = () => {
  let min = productsDb[0].price;
  let max = 0;
  productsDb.forEach(p => {
    if (p.price < min) min = p.price;
    if (p.price > max) max = p.price;
  });
  return { min, max };
};

// get price range in an array i.e., [min, max]
export const priceRange = findPriceRange();