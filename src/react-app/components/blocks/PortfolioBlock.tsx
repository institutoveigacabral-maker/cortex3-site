import Section from "@/react-app/components/ui/Section";
import Heading from "@/react-app/components/ui/Heading";
import Card from "@/react-app/components/ui/Card";
import Grid from "@/react-app/components/ui/Grid";
import Link from "@/react-app/components/ui/Link";

interface Brand {
  overline: string;
  title: string;
  body: string;
}

interface PortfolioBlockProps {
  heading: string;
  brands: Brand[];
  linkText: string;
  linkHref: string;
}

export default function PortfolioBlock({
  heading,
  brands,
  linkText,
  linkHref,
}: PortfolioBlockProps) {
  return (
    <Section id="portfolio-section" variant="medium">
      <div className="max-w-6xl mx-auto">
        <Heading centered className="mb-12">
          {heading}
        </Heading>

        <Grid cols={2} gap={6}>
          {brands.map((brand, index) => (
            <Card
              key={index}
              overline={brand.overline}
              title={brand.title}
              body={brand.body}
            />
          ))}
        </Grid>

        <div className="mt-12 text-center">
          <Link href={linkHref}>{linkText}</Link>
        </div>
      </div>
    </Section>
  );
}
