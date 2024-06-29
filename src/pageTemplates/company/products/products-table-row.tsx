import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Edit, Trash, X } from "lucide-react";
import { useRouter } from "next/router";





interface productsProps{
  id: string,
  name: string,
  description?: string,
  isActive: boolean,
  price: number
}
export const ProductsTableRow = (products: productsProps ) => {

  const router = useRouter()


  return (
    <TableRow>
      <TableCell className="font-mono">{products.id}</TableCell>
      <TableCell className="font-medium">{products.name}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${products.isActive == true ? 'bg-green-500' : 'bg-red-500'}`} />
        <span className={`font-medium ${products.isActive == true? 'text-green-500' : 'text-red-500'}`}>
        {products.isActive? 'Ativo' : 'Inativo'}
        </span>
        </div>
      </TableCell>
      <TableCell className="font-medium">R$ {products.price}</TableCell>
      <TableCell>
        <Button variant="outline" size="sm" onClick={()=> router.push("/company/edit-product")} >
          <Edit className="mr-2 h-3 w-3"  />
          Editar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <Trash className="mr-2 h-3 w-3" />
          Deletar
        </Button>
      </TableCell>
    </TableRow>
  );
};
