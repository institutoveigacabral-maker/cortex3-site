import Section from "@/react-app/components/ui/Section";
import Heading from "@/react-app/components/ui/Heading";
import Text from "@/react-app/components/ui/Text";
import List, { ListItem } from "@/react-app/components/ui/List";
import Grid from "@/react-app/components/ui/Grid";
import Stack from "@/react-app/components/ui/Stack";
import Link from "@/react-app/components/ui/Link";

interface GovernanceBlockProps {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  listHeading: string;
  listItems: string[];
  linkText: string;
  linkHref: string;
}

export default function GovernanceBlock({
  heading,
  paragraph1,
  paragraph2,
  listHeading,
  listItems,
  linkText,
  linkHref,
}: GovernanceBlockProps) {
  const colors = ["purple", "orange", "indigo"] as const;

  return (
    <Section id="governance" variant="dark">
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

          {/* Coluna Direita */}
          <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              {listHeading}
            </h3>
            <List>
              {listItems.map((item, index) => (
                <ListItem key={index} color={colors[index % colors.length]}>
                  {item}
                </ListItem>
              ))}
            </List>

            <div className="mt-8">
              <Link href={linkHref}>{linkText}</Link>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
