import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const sortOptions = [
   { value: "PriceHighToLow", title: "Price High to Low" },
  { value: "PriceLowToHigh", title: "Price Low to High" },
  { value: "RatingHighToLow", title: "Rating High to Low" },
  { value: "RatingLowToHigh", title: "Rating Low to High" },
  { value: "AtoZ", title: "Alphabetically, A-Z" },
  { value: "ZtoA", title: "Alphabetically, Z-A" },
  { value: "NewArrival", title: "Newest Arrivals" },
];

export default function SortComponent(props) {
  const { sortBy, setSortBy } = props;

  return (
    <FormControl>
      <InputLabel id="sort-prods">Sort By: </InputLabel>
      <Select 
        labelId="sort-prods"
        value={sortBy || "PriceHighToLow"}
        onChange={e => setSortBy(e.target.value)}
      >
        {
          sortOptions.map(item => (
            <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}




