import { Table as MantineTable, MantineProvider, Text } from "@mantine/core";
import styles from "@mantine/core/styles.css?inline";
import type { HTMLAttributeAnchorTarget } from "react";

export type Record = {
  color?: string;
  value: number | string;
  link?: {
    href: string;
    target: HTMLAttributeAnchorTarget;
  };
};

export type TableProps = {
  columns: string[];
  rows: Record[][];
  theme?: "light" | "dark";
};

export const Table = () => {
  const data = location.hash.slice(1);
  const { columns, rows, theme } = JSON.parse(atob(decodeURI(data))) as TableProps;

  return (
    <MantineProvider forceColorScheme={theme || "dark"}>
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
                  {record.link ? (
                    <Text size="sm" fw={700} component="a" href={record.link.href} target={record.link.target}>
                      {record.value}
                    </Text>
                  ) : (
                    record.value
                  )}
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
