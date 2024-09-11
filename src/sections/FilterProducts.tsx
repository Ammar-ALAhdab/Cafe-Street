import { useEffect, useState } from "react";
import { ProductsProps, actionsType } from "./Hero";
import FilteredProductCardBox from "../components/FilteredProductBox";
import LoadingSpinner from "../components/LoadingSpinner";

type propsType = { actions: actionsType } & ProductsProps;

function FilterProducts({ products, actions }: propsType) {
  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(products?.map((product) => product.parent_category))
    );
    setCategories(uniqueCategories);
  }, [products]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const subCategoriesForSelected = Array.from(
      new Set(
        products
          .filter((product) => product.parent_category === category)
          .map((product) => product.sub_category)
      )
    );
    setSubCategories(subCategoriesForSelected);
    // Reset selected subcategories and reset page  when category changes
    setSelectedSubCategories([]);
  };

  const handleSubCategoryChange = (subCategory: string) => {
    if (selectedSubCategories.includes(subCategory)) {
      const updatedSubCategories = selectedSubCategories.filter(
        (item) => item !== subCategory
      );
      setSelectedSubCategories(updatedSubCategories);
    } else {
      setSelectedSubCategories([...selectedSubCategories, subCategory]);
    }
  };

  useEffect(() => {
    if (selectedCategory && selectedSubCategories.length > 0) {
      const filtered = products.filter(
        (product) =>
          product.parent_category === selectedCategory &&
          selectedSubCategories.includes(product.sub_category)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [selectedCategory, selectedSubCategories, products]);

  return (
    <section className="w-full relative my-before-filterProducts">
      <div className="w-full min-h-[500px] py-[20px] relative z-30 flex max-md:flex-col max-md:gap-8 gap-4 justify-between items-center max-sm:px-4 sm:px-10 xl:px-20">
        <div className="max-md:w-full w-fit flex flex-col justify-center items-start gap-6">
          <h2 className="text-[32px] font-semibold">Filter Product</h2>
          <div>
            <select
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="max-sm:w-full w-[232px] h-10 outline-none bg-[#FFCB7C] text-lg font-[500] rounded-lg"
            >
              <option value="">Select a Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {/* Show it when select parent categories */}
            {selectedCategory && (
              <div className="flex md:flex-col justify-between items-start flex-wrap gap-4 mt-10 md:mt-5">
                {subCategories.map((subCategory, index) => (
                  <div key={index} className="text-sm max-small420:text-xs">
                    <input
                      type="checkbox"
                      value={subCategory}
                      checked={selectedSubCategories.includes(subCategory)}
                      onChange={() => handleSubCategoryChange(subCategory)}
                      id={subCategory}
                      className="mr-2 cursor-pointer"
                    />
                    <label htmlFor={subCategory} className="cursor-pointer">
                      {subCategory}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 small420:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
          {!actions.loading &&
            !actions.error &&
            filteredProducts.map((product) => (
              <div
                className="w-full flex justify-start items-center max-small420:justify-center"
                key={product.id}
              >
                <FilteredProductCardBox product={product} />
              </div>
            ))}
        </div>
        {actions.loading && <LoadingSpinner w="60px" h="60px" />}
      </div>
    </section>
  );
}

export default FilterProducts;
