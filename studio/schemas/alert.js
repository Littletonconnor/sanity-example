export default {
  name: "alert",
  title: "Site Alert",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "For internal use only.",
    },
    {
      name: "text",
      title: "Alert text",
      type: "text",
    },
    {
      name: "callToAction",
      title: "Call to action",
      type: "object",
      options: {
        columns: 2,
      },
      fields: [
        {
          name: "text",
          title: "Link text",
          type: "string",
        },
        {
          name: "url",
          title: "Link URL",
          type: "url",
        },
      ],
    },
    {
      name: "style",
      title: "Banner style",
      type: "string",
      options: {
        list: ["Sale", "Promo", "Breaking"],
      },
    },
  ],
};
