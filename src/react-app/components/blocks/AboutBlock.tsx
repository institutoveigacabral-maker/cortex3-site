import Section from "@/react-app/components/ui/Section";
import Heading from "@/react-app/components/ui/Heading";
import Text from "@/react-app/components/ui/Text";
import List, { ListItem } from "@/react-app/components/ui/List";
import Grid from "@/react-app/components/ui/Grid";

interface AboutBlockProps {
  heading: string;
  body: string;
  listItems: string[];
}

export default function AboutBlock({
  heading,
  body,
  listItems,
}: AboutBlockProps) {
  const colors = ["purple", "orange", "indigo"] as const;

  return (
    <Section id="about" variant="medium">
      <div className="max-w-6xl mx-auto">
        <Grid cols={2} gap={12} className="items-center">
          {/* Coluna Esquerda */}
          <div>
            <Heading className="mb-6">{heading}</Heading>
            <Text>{body}</Text>
          </div>

          {/* Coluna Direita */}
          <div>
            <List>
              {listItems.map((item, index) => (
                <ListItem key={index} color={colors[index % colors.length]}>
                  {item}
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
