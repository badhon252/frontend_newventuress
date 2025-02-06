import React from 'react'
import SearchBer from '../searchBer/searchBer';
import Categories from '../categories/categories';



function SearchBerCategories() {
    return (
        <div className='bg-primary-light pt-[9px] lg:py-[10px]'>
            <div className='container md:flex flex-1 lg:items-center lg:justify-center gap-8'>
                <div>
                    <Categories />
                </div>
                <div className='hidden md:block'>
                    <SearchBer />
                </div>
            </div>
        </div>
    )
}

export default SearchBerCategories