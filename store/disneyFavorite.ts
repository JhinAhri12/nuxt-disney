import { defineStore } from 'pinia';


export const store = defineStore(
    'store', () => {

        async function addFavorite() {
            try {
                await $fetch(
                `/api/disney/favorite`,
                {
                    method: 'POST'
                }
                );
            } catch (error) {
                console.error(error);
            }
        }
    }
);