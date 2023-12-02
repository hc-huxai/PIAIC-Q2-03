interface Blog {
  publisher: Publisher;
  createdAt: string;
  interactions: Interactions,
  id: string;
  title: string;
  content: Content[];
}

interface Interactions {
  claps: number;
  response_count: number;
  responses: Response[];
}

interface Publisher {
  name: string;
  label: string;
  slug: string;
  author: Author;
}

interface Author {
  name: string;
  username: string;
  position: string;
}

interface Response {
  author: Author;
  createdAt: string;
  claps: number;
  reponse: string;
}

interface Content {
  type: 'image' | 'section';
  title?: string;
  value: string | SectionData[]
}

interface SectionData {
  type: 'plain-text';
  value: string;
}

const blogData: Blog[] = [
  {
    publisher: {
      name: "Airbnb",
      label: "The Airbnb Tech Blog",
      slug: "airbnb-tech",
      author: {
        name: "Clark Wright",
        username: "clark.j.wright",
        position: "Data & Analytics Engineer",
      },
    },
    createdAt: "30/11/2023",
    interactions: {
      claps: 695,
      response_count: 11,
      // TODO: insert Responses
      responses: [],
    },
    id: "7884016b-86b4-4954-a5af-2e114040f682",
    title: "Data Quality Score: The next chapter of data quality at Airbnb",
    content: [
      {
        type: "image",
        value: "https://miro.medium.com/v2/resize:fit:720/0*yg9o8VZ22wW_NRiZ",
      },
      {
        type: "section",
        title: "Introduction",
        value: [
          {
            type: "plain-text",
            value:
              "These days, as the volume of data collected by companies grows exponentially, we&apos;re all realizing that more data is not always better. In fact, more data, especially if you can&apos;t rely on its quality, can hinder a company by slowing down decision-making or causing poor decisions.",
          },
          {
            type: "plain-text",
            value:
              "With 1.4 billion cumulative guest arrivals as of year-end 2022, Airbnb&apos;s growth pushed us to an inflection point where diminishing data quality <u>began to hinder our data practitioners</u>. Weekly metric reports were difficult to land on time. Seemingly basic metrics like “Active Listings” relied on a web of upstream dependencies. Conducting meaningful data work required significant institutional knowledge to overcome hidden caveats in our data.",
          },
          {
            type: "plain-text",
            value:
              "To meet this challenge, we <u>introduced the “Midas” process to certify our data</u>. Starting in 2020, the Midas process, along with the work to re-architect our most critical data models, has brought a dramatic increase in data quality and timeliness to Airbnb&apos;s most critical data. However, achieving the full data quality criteria required by Midas demands significant cross-functional investment to design, develop, validate, and maintain the necessary data assets and documentation.",
          },
        ],
      },
    ],
  },
];
