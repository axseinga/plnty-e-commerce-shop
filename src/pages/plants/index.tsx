import {
  PlantsPageTitle,
  PlantsPageMain,
  PlantsPageSearch,
} from "@/styles/pages/plants.styles";
import { ProductList } from "@/components/product-list/product-list";
import { Hero } from "@/components/hero/hero";
import { Spacer } from "@/styles/elements";
import { InferGetStaticPropsType } from "next";
import { apolloClient } from "@/services/graphql/apolloClient";
import {
  GetAllProductsListDocument,
  GetAllProductsListQuery,
} from "../../../generated/graphql";

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
        {data && <ProductList items={data.products} />}
      </PlantsPageMain>
    </>
  );
};

export default PlantsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetAllProductsListQuery>({
    query: GetAllProductsListDocument,
  });

  if (!data || !data.products) {
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
