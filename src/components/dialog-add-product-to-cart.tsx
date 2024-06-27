import Image from 'next/image';
import { FormInputField } from './form-input-field';
import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';
import { Heading } from './ui/heading';
import Counter from './counter';
import { useFormik } from 'formik';

export const DialogAddProductToCart = ({ product }) => {
  const { addProductToCart } = useCart();

  const handleAddProductCart = (values) => {
    addProductToCart({
      ...product,
      quantity: values.quantity,
      description: values.description,
    });
  };

  const handleAddQuantityProduct = () => {
    setFieldValue('quantity', values.quantity + 1);
  };

  const handleDecreaseQuantityProduct = () => {
    if (values.quantity > 1) {
      setFieldValue('quantity', values.quantity - 1);
    }
  };

  const { handleSubmit, setFieldValue, values, getFieldProps } = useFormik({
    initialValues: {
      description: '',
      quantity: 1,
    },
    onSubmit: handleAddProductCart,
  });

  return (
    <DialogContent className="max-w-[95%] md:max-w-[70%] lg:max-w-[50%] w-full p-4">
      <DialogHeader>
        <DialogTitle>
          <Heading className="text-base mt-6 lg:mt-0">
            Adicionar {product.name} ao carrinho
          </Heading>
        </DialogTitle>
      </DialogHeader>
      <div className="flex flex-col lg:flex-row ">
        <div className="p-4 lg:p-0 lg:w-1/2">
          <Image
            src={product.photo}
            className="object-cover rounded-lg"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <form
          className="lg:w-1/2 flex flex-col justify-between items-end h-full mt-4 lg:mt-0"
          onSubmit={handleSubmit}
        >
          <FormInputField
            {...getFieldProps('description')}
            onChange={(e) => setFieldValue('description', e.target.value)}
            label="Detalhes"
            placeholder="Adicione detalhes ao pedido"
            className="w-full"
          />

          <div className="flex items-center justify-between gap-4">
            <Counter
              count={values.quantity}
              increment={handleAddQuantityProduct}
              decrement={handleDecreaseQuantityProduct}
            />
            <DialogClose>
              <Button type="submit" className="bg-red-600 ml-4">
                Adicionar ao carrinho
              </Button>
            </DialogClose>
          </div>
        </form>
      </div>
    </DialogContent>
  );
};
