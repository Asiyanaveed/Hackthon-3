// schemas/review.ts
import { Rule } from "sanity"; // Import the Rule type from Sanity

export const review = {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: Rule) => Rule.min(1).max(5), // Use Rule type here
    },
    {
      name: "reviewText",
      title: "Review Text",
      type: "text",
    },
    {
      name: "userName",
      title: "User Name",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
  ],
};

  