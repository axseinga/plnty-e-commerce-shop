import React from "react";
import { PlantsPageTitle, PlantsPageMain } from "@/styles/pages/plants.styles";
import { ProductFiltering } from "@/components/product-filtering/product-filtering";
import { ProductList } from "@/components/product-list/product-list";
import { Hero } from "@/components/hero/hero";
import { Spacer } from "@/styles/elements";
import { InferGetStaticPropsType } from "next";
import { apolloClient } from "@/services/graphql/apolloClient";
import { useQuery } from "@apollo/client";
import { GetAllProductsListDocument, GetAllProductsListQuery, GetFilteredProductsListDocument } from "../../../generated/graphql";
import useAppStateStore from "@/store/app-store";

const PlantsPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { filters } = useAppStateStore();
  const [productsList, setProductsList] = React.useState<GetAllProductsListQuery>();
  const { loading, data } = useQuery(GetFilteredProductsListDocument, {
    variables: {
      filters,
    },
  });

  React.useEffect(() => {
    if (products) setProductsList(products);
  }, [products]);

  React.useEffect(() => {
    if (filters.length !== 0 && !loading) {
      setProductsList(data);
    } else {
      setProductsList(products);
    }
  }, [filters, products, loading, data]);

  return (
    <>
      <Hero heroImage="/assets/plantspage-header.png" />
      <Spacer times={2} />
      <PlantsPageTitle>Shop our Indoor Plants</PlantsPageTitle>
      <Spacer times={2} />
      <PlantsPageMain>
        <ProductFiltering />
        {productsList && <ProductList items={productsList.products} variant="default"/>}
      </PlantsPageMain>
    </>
  );
};

export default PlantsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetAllProductsListQuery>({
    query: GetAllProductsListDocument,
    fetchPolicy: "no-cache",
  });

  if (!data || !data.products) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      products: data,
    },
  };
};
