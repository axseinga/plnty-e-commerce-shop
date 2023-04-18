import React from "react";
import {
  ProductFilteringWrapper,
  ProductFilterHeading,
  ProductFilterCategoriesWrapper,
  ProductFilterCategories,
} from "./product-filtering.styles";
import { Checkbox } from "@/components/form/elements/checkbox/checkbox";
import { Button, ButtonVariantType } from "@/components/button/button";
import useAppStateStore from "@/store/app-store";

export const ProductFiltering = () => {
  const fields = [
    {
      name: "New",
      categories: [{ label: "New in", slug: "new", isChecked: false }],
    },
    {
      name: "Care Level",
      categories: [
        { label: "Easy", slug: "easy", isChecked: false },
        { label: "Medium", slug: "medium", isChecked: false },
        { label: "Hard", slug: "hard", isChecked: false },
      ],
    },
    {
      name: "Light Level",
      categories: [
        { label: "Direct sun", slug: "direct-sun", isChecked: false },
        { label: "Light and shade", slug: "light-and-shade", isChecked: false },
        { label: "Shade", slug: "shade", isChecked: false },
      ],
    },
    {
      name: "Room",
      categories: [
        { label: "Bedroom", slug: "bedroom", isChecked: false },
        { label: "Living Room", slug: "living-room", isChecked: false },
        { label: "Kitchen", slug: "kitchen", isChecked: false },
        { label: "Bathroom", slug: "bathroom", isChecked: false },
      ],
    },
    {
      name: "Safety",
      categories: [
        { label: "Pet safe", slug: "pet-safe", isChecked: false },
        { label: "Child safe", slug: "child-safe", isChecked: false },
      ],
    },
  ];
  const [checkboxes, setCheckboxes] = React.useState(fields);
  const { setFilters } = useAppStateStore();

  const handleChange = (event: any, name: string) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes.find((obj) => {
      if (obj.name === name) {
        return obj.categories.map((cat) => {
          if (cat.slug === event.target.name) {
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

  return (
    <ProductFilteringWrapper>
      <ProductFilterHeading>
        <h2>Filter</h2>
        <Button type="button" variant={ButtonVariantType.dark}>
          Reset
        </Button>
      </ProductFilterHeading>

      <ProductFilterCategoriesWrapper>
        {checkboxes.map((filter, i) => (
          <ProductFilterCategories key={`${i}_heading_${filter.name}`}>
            <p>{filter.name}</p>
            {filter.categories.map((category, i) => (
              <Checkbox
                key={`${i}_cat_${category.slug}`}
                name={category.slug}
                label={category.label}
                value={category.slug}
                isChecked={category.isChecked}
                handleChange={(e: any) => handleChange(e, filter.name)}
              />
            ))}
          </ProductFilterCategories>
        ))}
      </ProductFilterCategoriesWrapper>
    </ProductFilteringWrapper>
  );
};

/*             <p>Light</p>
            <p>Care level</p>
            <p>Room</p>
            <p>Safety</p>
            <p>Plant type</p>
            <p>Water care</p> */
