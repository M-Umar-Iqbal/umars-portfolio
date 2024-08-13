import { NextApiRequest, NextApiResponse } from "next";
import {isEmpty} from "lodash";
import { restHelper } from "../../services/rest-helper";
import { IBlogsData } from "../../utils/types/ResetHelper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query: payload } = req;
    const response = await restHelper<IBlogsData>(req, payload, "getRequest");
    if (!isEmpty(response?.data)) {
      res.status(200).json(response.data.blogs);
    } else {
      res.status(response?.status ?? 500).json(response);
    }
  } catch (err) {
    console.log(`Error fetching results ${err}`);
  }
};