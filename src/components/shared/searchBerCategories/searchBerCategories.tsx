import Categories from '../categories/categories';
import SearchBer from '../searchBer/searchBer';
import ThemeSwitcher from './theme-switcher';



function SearchBerCategories() {
    return (
        <div className='bg-[#E6EEF6] dark:bg-[#482D721A] py-[10px]'>
            <div className='container  gap-8 flex items-center justify-between'>
               
                    <Categories />
                    <SearchBer />
                
                    <ThemeSwitcher />
            </div>
        </div>
    )
}

export default SearchBerCategories