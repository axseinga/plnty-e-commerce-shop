import {
  PlantsPageTitle,
  PlantsPageMain,
  PlantsPageSearch,
} from "@/styles/pages/plants.styles";
import { ProductList } from "@/components/product-list/product-list";
import { Hero } from "@/components/hero/hero";
import { Spacer } from "@/styles/elements";
import { InferGetStaticPropsType } from "next";
import { gql } from "@apollo/client";
import { apolloClient } from "@/services/graphql/apolloClient";

const PlantsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero heroImage="/assets/plantspage-header.png" />
      <Spacer times={2} />
      <PlantsPageTitle>Shop our Indoor Plants</PlantsPageTitle>
      <Spacer times={2} />
      <PlantsPageMain>
        <PlantsPageSearch></PlantsPageSearch>
        <ProductList items={data.products} />
      </PlantsPageMain>
    </>
  );
};

export default PlantsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<any>({
    query: gql`
      query GetAllProducts {
        products(first: 100) {
          slug
          title
          name
          price
          reviewScore
          images(first: 1) {
            url
            width
            height
          }
        }
      }
    `,
  });

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
