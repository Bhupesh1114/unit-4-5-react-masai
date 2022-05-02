import { ALL_DATA ,SORTED_DATA,FILTER_DATA} from "./actionTypes";
const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ALL_DATA: 
      return {
        ...state,
        products: payload
      }
    case SORTED_DATA: 
      return {
        ...state,
        products: payload
      }
    case FILTER_DATA: 
      return {
        ...state,
        filterData: payload
      }
    default: return state;
      }
};
export { reducer };
