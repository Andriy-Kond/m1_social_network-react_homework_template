import {
  TransactionsTable,
  TableHead,
  TableRow,
  TableBody,
  TableHeadCell,
  TableCell,
} from 'components/TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionsTable>
      <TableHead>
        <TableRow>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </TransactionsTable>
  );
}
