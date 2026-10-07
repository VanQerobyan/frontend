"use server";

import { productModel } from "@/app/(lib)/ProductModel";
import { NextRequest } from "next/server";

type Params = {
  params: Promise<{ id: string }>;
};

export const GET = async (req: NextRequest, { params }: Params) => {
  const id = (await params).id;

  if (!id)
    return Response.json({ message: "id is not defined" }, { status: 400 });

  const products = await productModel.getAll().run();

  const product = products.rows.find((product) => product.id === Number(id));
  if (!product)
    return Response.json({ message: "Product doesn't exist" }, { status: 404 });

  return Response.json({ product });
};

export const PATCH = async (req: NextRequest, { params }: Params) => {
  const data = await req.json();
  const id = (await params).id;

  if (!id)
    return Response.json({ message: "id is not defined" }, { status: 400 });

  const products = await productModel.getAll().run();

  const index = products.rows.findIndex((product) => product.id === Number(id));

  if (index === -1)
    return Response.json({ message: "Product doesn't exist"}, { status: 404 });

  const updatedProduct = await productModel.update(Number(id), data).run();
  return Response.json({ updatedProduct });
};

export const DELETE = async (req: NextRequest, { params }: Params) => {
  const id = (await params).id;

  if (!id)
    return Response.json({ message: "id is not defined" }, { status: 400 });

  const products = await productModel.getAll().run();

  const index = products.rows.findIndex((product) => product.id === Number(id));

  if (index === -1)
    return Response.json({ message: "Index is not exist" }, { status: 400 });

  const deletedProduct = await productModel.delete(Number(id)).run();
  return Response.json({ message: "deleted successfully" });
};
