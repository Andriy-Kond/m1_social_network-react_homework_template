import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: solid black 2px;
`;

export const Title = styled.h2`
  padding: 20px;
  color: #555555;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
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

export const Label = styled.span`
  display: flex;
  padding: 5px;
`;
