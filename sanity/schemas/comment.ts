export const comment = {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
      readOnly: true,
    },
    {
      name: "post",
      title: "Post",
      type: "reference",
      readOnly: true,
      to: [{ type: "post" }],
    },
  ],
};
