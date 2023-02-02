import { defineStore } from 'pinia';

export const useFavoriteStore = defineStore(
    'favoriteStore', () => {

        async function addFavorite () {

        const { data: favorite } =   await $fetch( `/api/disney/favorite`,
            {
                method: 'POST'
            }
        );
        }
        return {
            addFavorite
          };
    }
);