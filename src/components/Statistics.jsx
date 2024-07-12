import {
  Section,
  Title,
  Item,
  Label,
  List,
} from 'components/Statistics.styled';
import { getRandomHexColor } from 'js/getRandomHexColor';
import { getInvertRandomHexColor } from 'js/getInvertRandomHexColor';

export function Statistics({ title, stats }) {
  return (
    <Section class="statistics">
      {title && <Title class="title">Upload stats</Title>}

      <List>
        {stats.map(stat => {
          const color = getRandomHexColor();
          const invertColor = getInvertRandomHexColor(color);
          return (
            <Item key={stat.id} color={color} invertColor={invertColor}>
              <Label>{stat.label}:</Label>
              <Label>{stat.percentage}%</Label>
            </Item>
          );
        })}
      </List>
    </Section>
  );
}
