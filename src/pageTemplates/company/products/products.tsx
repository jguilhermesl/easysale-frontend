import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductsTableRow } from "./products-table-row";

export const ProductsList = () => {
  return (
    <div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Identificador</TableHead>
              <TableHead>Nome do produto</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return <ProductsTableRow key={i} />;
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
