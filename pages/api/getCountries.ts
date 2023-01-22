import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Country } from "../../typings";

type Data = {
  countries: Country[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const countries: Country[] = await sanityClient.fetch(
    groq`*[_type == "country"]`
  );
  res.status(200).json({ countries });
}
