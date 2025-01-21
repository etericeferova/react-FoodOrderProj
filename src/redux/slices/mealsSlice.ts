import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Meal {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
}

interface MealsState {
  items: Meal[];
  status: "loading" | "succeeded" | "failed";
}

const initialState: MealsState = {
  items: [],
  status: "loading",
};

export const fetchMeals = createAsyncThunk<Meal[], void>(
  "meals/fetchMeals",
  async () => {
    const response = await fetch("/db.json");
    const data = await response.json();
    return data.meals;
  }
);

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchMeals.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default mealsSlice.reducer;
