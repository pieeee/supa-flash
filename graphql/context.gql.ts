import { NextApiRequest, NextApiResponse } from "next";

export type ContextArgs = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export interface Context extends ContextArgs {}

export async function createContext({
  req,
  res,
}: ContextArgs): Promise<Context> {
  return {
    req,
    res,
  };
}
