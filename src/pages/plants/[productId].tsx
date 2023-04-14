import { apolloClient } from "@/services/graphql/apolloClient";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Hero } from "@/components/hero/hero";
import { Product } from "@/components/product/product";
import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "../../../generated/graphql";

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero heroImage="/assets/plantspage-header.png" />
      {data && <Product data={data} />}
    </>
  );
};

export default ProductPage;

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  interface Product {
    slug: string;
  }

  return {
    paths: data.products.map((product: Product) => {
      return {
        params: {
          productId: product.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { data } = await apolloClient.query<GetProductDetailsBySlugQuery>({
    variables: {
      slug: params.productId,
    },
    query: GetProductDetailsBySlugDocument,
    fetchPolicy: "no-cache",
  });

  if (!data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
      },
    },
  };
};
