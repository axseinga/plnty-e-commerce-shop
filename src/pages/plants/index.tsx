import { PageLayout } from "@/components/page-layout/page-layout";
import { PlantsPageTitle, PlantsPageMain, PlantsPageSearch } from "@/styles/pages/plants.styles";
import { ProductList } from "@/components/product-list/product-list";
import { Hero } from "@/components/hero/hero";
import { Spacer } from "@/styles/elements";

export default function PlantsPage() {
  return (
    <PageLayout>
      <Hero heroImage="/assets/plantspage-header.png" />
      <Spacer times={2}/>
      <PlantsPageTitle>Shop our Indoor Plants</PlantsPageTitle>
      <Spacer times={2}/>
      <PlantsPageMain>
        <PlantsPageSearch>

        </PlantsPageSearch>
        <ProductList />
      </PlantsPageMain>
    </PageLayout>
  );
}
