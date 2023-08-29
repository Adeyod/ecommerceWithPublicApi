import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const callProductListApi = createAsyncThunk(
  '/product/callproductlistapi',
  async function () {
    try {
      const apiResponse = await fetch('https://dummyjson.com/products');
      const result = await apiResponse.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  productLists: [],
  isLoading: false,
  isFailed: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [callProductListApi.pending]: (state) => {
      state.isLoading = true;
    },
    [callProductListApi.fulfilled]: (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.productLists = payload.products;
    },
    [callProductListApi.rejected]: (state) => {
      state.isLoading = false;
      state.isFailed = true;
    },
  },
});

export default productSlice.reducer;
