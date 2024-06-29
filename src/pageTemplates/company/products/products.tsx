import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MockProducts } from "@/constants/mocks";
import { ProductsTableRow } from "./products-table-row";
import { useEffect, useState } from "react";
import { getProducts } from "@/api/product/get-product";

export const ProductsList = () => {
  const [products, setProducts] = useState<any>()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } 
    };
    fetchProducts();
  }, []);
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
            {MockProducts.map((product)=> (
  <ProductsTableRow  key={product.id} id={product.id} name={product.name} isActive={product.isActive} price={product.price} />
            ))}
         
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
