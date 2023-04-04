import { PageLayout } from "@/components/page-layout/page-layout";
import { Hero } from "@/components/hero/hero";
import { ProductList } from "@/components/product-list/product-list";

export default function Home() {
  return (
    <PageLayout>
      <Hero/>
      <ProductList/>
    </PageLayout>
  );
}
