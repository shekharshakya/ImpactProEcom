const ProductFilterReducer = (state, action) => {
  switch (action.type) {
    case "load Filter Data":
      let Price = action.payload.map((curEle) => {
        return curEle.price;
      });
      let maxPrice = Math.max(...Price);

      return {
        ...state,
        filterData: [...action.payload],
        all_filterData: [...action.payload],
        filter: {
          ...state.filter,
          max: maxPrice,
          price: maxPrice,
        },
      };

    case "select sorting product":
      var userSelectValue = document.getElementById("sortproduct");
      var selectedValue =
        userSelectValue.options[userSelectValue.selectedIndex].value;

      return {
        ...state,
        sortingValue: selectedValue,
      };

    case "Sorting product Data":
      let newSortingData;
      let tempSortData = [...action.payload];

      if (state.sortingValue === "a-z") {
        newSortingData = tempSortData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      if (state.sortingValue === "z-a") {
        newSortingData = tempSortData.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      if (state.sortingValue === "lower") {
        newSortingData = tempSortData.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (state.sortingValue === "Highest") {
        newSortingData = tempSortData.sort((a, b) => {
          return b.price - a.price;
        });
      }

      return {
        ...state,
        filterData: newSortingData,
      };

    case "Get Filter Value":
      const { name, value } = action.payload;

      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    case "Get Filter product Data":
      const { all_filterData } = state;
      let temparyFilterData = [...all_filterData];
      const { category, company, color, max, min, price } = state.filter;

      if (category !== "all") {
        temparyFilterData = temparyFilterData.filter((curEle) => {
          return curEle.category === category;
        });
      }

      if (company !== "all") {
        temparyFilterData = temparyFilterData.filter((curEle) => {
          return curEle.company === company;
        });
      }

      if (color !== "all") {
        temparyFilterData = temparyFilterData.filter((curEle) => {
          return curEle.colors.includes(color);
        });
      }

      if (price) {
        temparyFilterData = temparyFilterData.filter((curEle) => {
          return curEle.price <= price;
        });
      }

      return {
        ...state,
        filterData: temparyFilterData,
      };

    default:
      return {
        state,
      };
  }
};

export default ProductFilterReducer;
