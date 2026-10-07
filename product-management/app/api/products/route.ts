"use server";

import { productModel } from "@/app/(lib)/ProductModel";
import { NextRequest } from "next/server";

export const GET = async () => {
  const products = await productModel.getAll().run();
  return Response.json(products.rows);
};

export const POST = async (req: NextRequest) => {
  const product = await req.json();

  const result = await productModel.add(product).run();
  return Response.json(result.rows[0]);
};
