import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token, useCdn } from "../env";

export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  token,
  useCdn,
});

export const readClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
