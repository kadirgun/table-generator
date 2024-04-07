import { Table as MantineTable, MantineProvider } from "@mantine/core";
import styles from "@mantine/core/styles.css?inline";

export type Record = {
  color?: string;
  value: number | string;
};

export type TableProps = {
  columns: string[];
  rows: Record[][];
};

export const Table = () => {
  const data = location.hash.slice(1);
  console.log(decodeURI(data));
  const { columns, rows } = JSON.parse(atob(decodeURI(data))) as TableProps;

  return (
    <MantineProvider forceColorScheme="dark">
      <style>{styles}</style>
      <MantineTable striped>
        <MantineTable.Thead>
          <MantineTable.Tr>
            {columns.map((column, index) => (
              <MantineTable.Th key={index}>{column}</MantineTable.Th>
            ))}
          </MantineTable.Tr>
        </MantineTable.Thead>

        <MantineTable.Tbody>
          {rows.map((row, index) => (
            <MantineTable.Tr key={index}>
              {row.map((record, index) => (
                <MantineTable.Td key={index} style={{ color: record.color || "white" }}>
                  {record.value}
                </MantineTable.Td>
              ))}
            </MantineTable.Tr>
          ))}
        </MantineTable.Tbody>
      </MantineTable>
    </MantineProvider>
  );
};

export default Table;
