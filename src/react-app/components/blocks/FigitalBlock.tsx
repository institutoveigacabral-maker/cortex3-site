import Section from "@/react-app/components/ui/Section";
import Heading from "@/react-app/components/ui/Heading";
import Text from "@/react-app/components/ui/Text";
import Card from "@/react-app/components/ui/Card";
import Grid from "@/react-app/components/ui/Grid";
import Stack from "@/react-app/components/ui/Stack";
import Link from "@/react-app/components/ui/Link";

interface FigitalCard {
  title: string;
  body: string;
}

interface FigitalBlockProps {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  cards: FigitalCard[];
  linkText: string;
  linkHref: string;
}

export default function FigitalBlock({
  heading,
  paragraph1,
  paragraph2,
  cards,
  linkText,
  linkHref,
}: FigitalBlockProps) {
  return (
    <Section id="figital" variant="dark">
      <div className="max-w-6xl mx-auto">
        <Grid cols={2} gap={12}>
          {/* Coluna Esquerda */}
          <div>
            <Heading className="mb-8">{heading}</Heading>
            <Stack>
              <Text>{paragraph1}</Text>
              <Text>{paragraph2}</Text>
            </Stack>
          </div>

          {/* Coluna Direita - Cards */}
          <Stack>
            {cards.map((card, index) => (
              <Card key={index}>
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{card.body}</p>
              </Card>
            ))}
          </Stack>
        </Grid>

        <div className="mt-10 text-center">
          <Link href={linkHref}>{linkText}</Link>
        </div>
      </div>
    </Section>
  );
}
