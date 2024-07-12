import { getRandomHexColor } from 'js/getRandomHexColor';
import { getInvertRandomHexColor } from 'js/getInvertRandomHexColor';
import {
  Section,
  Title,
  Item,
  Label,
  List,
} from 'components/Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          const color = getRandomHexColor();
          const invertColor = getInvertRandomHexColor(color);
          return (
            <Item key={id} color={color} invertColor={invertColor}>
              <Label>{label}:</Label>
              <Label>{percentage}%</Label>
            </Item>
          );
        })}
      </List>
    </Section>
  );
}
