import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { lang }
  } = req;
  const pageInfo: PageInfo = await sanityClient.fetch(
    groq`*[_type == "pageInfo" && __i18n_lang == '${lang}']{
      ...,
      sections[] ->
    }[0]`
  );
  res.status(200).json({ pageInfo });
}
