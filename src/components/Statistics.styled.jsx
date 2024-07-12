import styled from '@emotion/styled';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: solid black 2px;
`;

const Title = styled.h2`
  padding: 20px;
  color: #555555;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 120px;
  padding: 5px;
  background-color: ${props => props.color};
  color: ${props => props.invertColor};
  mix-blend-mode: difference;
`;

const Label = styled.span`
  display: flex;
  padding: 5px;
`;

export { Section, Title, List, Item, Label };
