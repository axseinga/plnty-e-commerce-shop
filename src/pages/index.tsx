import { PageLayout } from "@/components/page-layout/page-layout";
import { Hero } from "@/components/hero/hero";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero heroImage="/assets/homepage-bg.png" />
      <div>content</div>
    </PageLayout>
  );
}
