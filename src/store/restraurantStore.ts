import Restaurant from "@/interface/Restaurant";
import { create } from "zustand";

type RestaurantState = {
  restaurants:Restaurant[];
  setRestaurants : (rests:Restaurant[]) => void;
}

export const restaurantStore = create<RestaurantState>((set) => ({
  restaurants:[],
  setRestaurants:(rests) => set({restaurants:rests})
}))