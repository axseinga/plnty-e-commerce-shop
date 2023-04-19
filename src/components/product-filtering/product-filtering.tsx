import React from "react";
import {
  ProductFilteringWrapper,
  ProductFilterHeading,
  ProductFilterCategoriesWrapper,
  ProductFilterCategories,
  ProductFiltersCheckboxesGroup,
} from "./product-filtering.styles";
import { Checkbox } from "@/components/form/elements/checkbox/checkbox";
import { Button, ButtonVariantType } from "@/components/button/button";
import useAppStateStore from "@/store/app-store";
import { FILTER_FIELDS } from "@/utils/const";

export const ProductFiltering = () => {
  const [checkboxes, setCheckboxes] = React.useState(FILTER_FIELDS);
  const { setFilters } = useAppStateStore();

  const handleChange = (
    event: React.FormEvent<HTMLInputElement>,
    name: string
  ) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes.find((obj) => {
      if (obj.name === name) {
        return obj.categories.map((cat) => {
          if (cat.slug === (event.target as HTMLInputElement).name) {
            cat.isChecked = !cat.isChecked;
          }
        });
      }
    });
    setCheckboxes(updatedCheckboxes);
  };

  React.useEffect(() => {
    let newFilters: string[] = [];
    checkboxes.forEach((el) =>
      el.categories.forEach((cat) => {
        if (cat.isChecked === true) {
          newFilters.push(cat.slug);
        }
      })
    );
    setFilters(newFilters);
  }, [checkboxes, setFilters]);

  const handleResetFilters = () => {
    let updatedCheckboxes = checkboxes;
    updatedCheckboxes.map((el) => {
      return el.categories.map((cat) => (cat.isChecked = false));
    });
    setCheckboxes([...updatedCheckboxes]);
  };

  return (
    <ProductFilteringWrapper>
      <ProductFilterHeading>
        <h2>Filter</h2>
        <Button
          type="button"
          variant={ButtonVariantType.dark}
          onClick={handleResetFilters}
        >
          Reset
        </Button>
      </ProductFilterHeading>

      <ProductFilterCategoriesWrapper>
        {checkboxes.map((filter, i) => (
          <ProductFilterCategories key={`${i}_heading_${filter.name}`}>
            <p>{filter.name}</p>
            <ProductFiltersCheckboxesGroup>
              {filter.categories.map((category, i) => (
                <Checkbox
                  key={`${i}_cat_${category.slug}`}
                  name={category.slug}
                  label={category.label}
                  value={category.slug}
                  isChecked={category.isChecked}
                  handleChange={(e: React.FormEvent<HTMLInputElement>) =>
                    handleChange(e, filter.name)
                  }
                />
              ))}
            </ProductFiltersCheckboxesGroup>
          </ProductFilterCategories>
        ))}
      </ProductFilterCategoriesWrapper>
    </ProductFilteringWrapper>
  );
};
