import { NextApiRequest, NextApiResponse } from "next";
import { restHelper } from "../../services/rest-helper";
import { IAboutResponse } from "../../utils/types/ResetHelper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query: payload } = req;
    const response = await restHelper<IAboutResponse>(req, payload, "getAbout");
    if (response?.status === 200) {
      res.status(200).json(response.data.about);
    } else {
      res.status(response?.status ?? 500).json(response);
    }
  } catch (err) {
    console.log(`Error fetching results ${err}`);
  }
};