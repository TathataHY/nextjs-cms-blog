import { post } from "@/sanity/schemas/post";
import { tag } from "@/sanity/schemas/tag";
import { type SchemaTypeDefinition } from "sanity";
import { comment } from "./schemas/comment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, comment],
};
