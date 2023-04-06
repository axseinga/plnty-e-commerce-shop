import { gql } from "@apollo/client";
import { apolloClient } from "@/services/graphql/apolloClient";
import { InferGetStaticPropsType } from "next";
import { Hero } from "@/components/hero/hero";
import { Product } from "@/components/product/product";

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero heroImage="/assets/plantspage-header.png" />
      <Product data={data} />
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
  const { data } = await apolloClient.query<any>({
    query: gql`
      query GetProductsSlugs {
        products(first: 100) {
          slug
        }
      }
    `,
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

export const getStaticProps = async ({ params }: any) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { data } = await apolloClient.query<any>({
    variables: {
      slug: params.productId,
    },
    query: gql`
      query GetProductDetailsBySlug($slug: String) {
        product(where: { slug: $slug }) {
          id
          slug
          title
          name
          price
          reviewScore
          images {
            url
            height
            width
          }
          description
          longDescription
          categories {
            title
          }
          cares {
            title
            description
            icon {
              url
              width
              height
            }
          }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });

  if (!data.product || !data.product.longDescription) {
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
