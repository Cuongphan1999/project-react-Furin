import { createSelector } from "@reduxjs/toolkit"

export const productListSelector = (state) => state.productList.products
export const productListStateSelector = (state) => state.productList.status
export const searchTextSelector = (state) => state.filters.searchText
export const recommendedSelector = (state) => state.filters.recommended
export const categorySelector = (state) => state.filters.category
export const PriceSelector = (state) => state.filters.price
export const cartSelector = (state) => state.cart

export const remainProducts = createSelector(
    productListSelector,
    searchTextSelector,
    categorySelector,
    recommendedSelector,
    PriceSelector,
    (productList, searchText, category, recommended, price) => {
        let filtersProduct = [...productList]
        if(searchText) {
            filtersProduct = filtersProduct.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        if(recommended !== 'All') {
            filtersProduct = filtersProduct.filter((p) => p.company.toLowerCase().includes(recommended.toLowerCase()))
        }
        if(category !== 'All') {
            filtersProduct = filtersProduct.filter((p) => p.category.toLowerCase().includes(category.toLowerCase()))
        }
        if(price !== '0,0') {
            const [min, max] = price.split(',')
            if(min !== max){
                filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min) && p.newPrice <= Number(max))
            }else {
                filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min))
            }
        }
       
        return filtersProduct;
    }

)