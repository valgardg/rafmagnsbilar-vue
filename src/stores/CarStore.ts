import { defineStore } from "pinia";
import axios from '@/utils/axios';
import type { Car } from '@/types/car';

export const useCarStore = defineStore('carStore', {
    state: () => ({
        cars: [] as Car[] // TODO: create a car model
    }),
    getters: {

    },
    actions: {
        async fetchCars() {
            // TODO: implement fetch cars request and populate state cars
            const response = await axios.get(`cars/`);
            console.log('cars:', response.data);
            this.cars = response.data;
        }
    }
});