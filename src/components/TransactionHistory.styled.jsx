import styled from '@emotion/styled';

const TransactionsTable = styled.table`
  width: 1000px;
  table-layout: fixed;
  font-size: 24px;

  border-collapse: collapse; /* Забезпечує правильне відображення ліній між стовпчиками */
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 1);
  padding: 40px;
  margin-bottom: 100px;
  border-radius: 10px;
  overflow: hidden;

  color: #615f5f;
`;
const TableHead = styled.thead`
  height: 60px;
  background-color: #4addf7ec;
`;
const TableHeadCell = styled.th`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  color: white;
  letter-spacing: 3px;

  :not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

const TableBody = styled.tbody``;
const TableRow = styled.tr`
  text-align: center;
  height: 40px;
  :nth-child(even) {
    background-color: #b6b5b594;
  }
`;

const TableCell = styled.td`
  :not(:last-child) {
    border-right: 1px solid #b6b5b594;
  }

  :first-child {
    text-align: left;
    padding-left: 100px;
    text-transform: capitalize;
  }

  :nth-child(2) {
    display: block;
    text-align: right;
    padding-right: calc(100% / 2 - 50px);
  }

  :last-child {
    text-transform: uppercase;
  }
`;

export {
  TransactionsTable,
  TableHead,
  TableRow,
  TableBody,
  TableHeadCell,
  TableCell,
};
