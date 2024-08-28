import { defineStore } from "pinia";
import axios from '@/utils/axios';

export const useCarStore = defineStore('carStore', {
    state: () => ({
        cars: [] as string[] // TODO: create a car model
    }),
    getters: {

    },
    actions: {
        async fetchCars() {
            // TODO: implement fetch cars request and populate state cars
        }
    }
});