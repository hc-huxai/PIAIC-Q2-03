import { StaticImageData } from "next/image";
import ClarkWrightImg from "@/assets/img/authors/clark-wright.jpg";
import AirbnbImg from "@/assets/img/publishers/airbnb.jpg";
import MediumImg from "@/assets/img/publishers/medium.png";
import AdrienneImg from "@/assets/img/authors/adrienne.jpg";

interface Blog {
  publisher: Publisher;
  createdAt: string;
  interactions: Interactions;
  id: string;
  title: string;
  slug: string;
  readingTime: string;
  content: Content[];
  link: string;
}

interface Interactions {
  claps: number;
  responses: Response[];
}

interface Publisher {
  name: string;
  label: string;
  slug: string;
  author: Author;
  profile_pic: StaticImageData;
}

interface Author {
  name: string;
  username: string;
  position: string;
  profile_pic: StaticImageData;
}

interface Response {
  author: Author;
  createdAt: string;
  claps: number;
  response: string;
}

interface Content {
  type: "image" | "section";
  title?: string;
  value?: string;
  values?: SectionData[];
}

interface SectionData {
  type: "plain-text" | "image" | "unordered-list";
  value?: string;
  values?: string[];
}

export const blogData: Blog[] = [
  {
    publisher: {
      name: "Airbnb",
      label: "The Airbnb Tech Blog",
      slug: "airbnb-tech",
      profile_pic: AirbnbImg,
      author: {
        name: "Clark Wright",
        username: "clark.j.wright",
        position: "Data & Analytics Engineer",
        profile_pic: ClarkWrightImg,
      },
    },
    readingTime: "9",
    createdAt: "30/11/2023",
    interactions: {
      claps: 695,
      // TODO: insert Responses
      responses: [],
    },
    id: "7884016b-86b4-4954-a5af-2e114040f682",
    title: "Data Quality Score: The next chapter of data quality at Airbnb",
    slug: "data-quality-score-the-next-chapter-of-data-quality-at-airbnb",
    link: "https://medium.com/airbnb-engineering/data-quality-score-the-next-chapter-of-data-quality-at-airbnb-851dccda19c3",
    content: [
      {
        type: "image",
        value: "https://miro.medium.com/v2/resize:fit:720/0*yg9o8VZ22wW_NRiZ",
      },
      {
        type: "section",
        title: "Introduction",
        values: [
          {
            type: "plain-text",
            value:
              "These days, as the volume of data collected by companies grows exponentially, we're all realizing that more data is not always better. In fact, more data, especially if you can't rely on its quality, can hinder a company by slowing down decision-making or causing poor decisions.",
          },
          {
            type: "plain-text",
            value:
              "With 1.4 billion cumulative guest arrivals as of year-end 2022, Airbnb's growth pushed us to an inflection point where diminishing data quality began to hinder our data practitioners. Weekly metric reports were difficult to land on time. Seemingly basic metrics like “Active Listings” relied on a web of upstream dependencies. Conducting meaningful data work required significant institutional knowledge to overcome hidden caveats in our data.",
          },
          {
            type: "plain-text",
            value:
              "To meet this challenge, we introduced the “Midas” process to certify our data. Starting in 2020, the Midas process, along with the work to re-architect our most critical data models, has brought a dramatic increase in data quality and timeliness to Airbnb's most critical data. However, achieving the full data quality criteria required by Midas demands significant cross-functional investment to design, develop, validate, and maintain the necessary data assets and documentation.",
          },
          {
            type: "plain-text",
            value:
              "While this made sense for our most critical data, pursuing such rigorous standards at scale presented challenges. We were approaching a point of diminishing returns on our data quality investments. We had certified our most critical assets, restoring their trustworthiness. However, for all of our uncertified data, which remained the majority of our offline data, we lacked visibility into its quality and didn’t have clear mechanisms for up-leveling it.",
          },
          {
            type: "plain-text",
            value:
              "How could we scale the hard-fought wins and best practices of Midas across our entire data warehouse?",
          },
          {
            type: "plain-text",
            value:
              "In this blog post, we share our innovative approach to scoring data quality, Airbnb’s Data Quality Score (“DQ Score”). We’ll cover how we developed the DQ Score, how it’s being used today, and how it will power the next chapter of data quality at Airbnb.",
          },
        ],
      },
      {
        type: "section",
        title: "Scaling Data Quality",
        values: [
          {
            type: "plain-text",
            value:
              "In 2022, we began exploring ideas for scaling data quality beyond Midas certification. Data producers were requesting a lighter-weight process that could provide some of the quality guardrails of Midas, but with less rigor and time investment. Meanwhile, data consumers continued to fly blind on all data that wasn’t Midas-certified. The brand around Midas-certified data was so strong that consumers started to question whether they should trust any uncertified data. Hesitant to dilute the Midas branding, we wanted to avoid introducing a lightweight version of certification that further stratified our data without truly unlocking long-term scalability.",
          },
          {
            type: "plain-text",
            value:
              "Considering these challenges, we decided to shift to a data quality strategy that pushed the incentives around data quality directly to data producers and consumers. We made the decision that we could no longer rely on enforcement to scale data quality at Airbnb, and we instead needed to rely on incentivization of both the data producer and consumer.",
          },
          {
            type: "plain-text",
            value:
              "To fully enable this incentivization approach, we believed it would be paramount to introduce the concept of a data quality score directly tied to data assets.",
          },
          {
            type: "plain-text",
            value: "We identified the following objectives for the score:",
          },
          {
            type: "unordered-list",
            values: [
              "Evolve our understanding of data quality beyond a simple binary definition (certified vs uncertified).",
              "Align on the input components for assessing data quality.",
              "Enable full visibility into the quality of our offline data warehouse and individual data assets. This visibility should 1) Create natural incentives for producers to improve the quality of the data they own, and 2) Drive demand for high-quality data from data consumers and enable consumers to decide if the quality is appropriate for their needs.",
            ],
          },
        ],
      },
    ],
  },
  {
    publisher: {
      name: "Medium",
      label: "The Medium Blog",
      slug: "the-medium-blog",
      profile_pic: MediumImg,
      author: {
        name: "Adrienne Gibbs",
        username: "adrienne",
        position: "Director",
        profile_pic: AdrienneImg,
      },
    },
    readingTime: "4",
    createdAt: "25/11/2023",
    interactions: {
      claps: 1624,
      // TODO: insert Responses
      responses: [],
    },
    id: "57dd9eea-5ffa-42b1-b886-71ef557060a4",
    title: "What We’re Reading: Are you busy or are you productive?",
    slug: "what-were-reading-are-you-busy-or-are-you-productive",
    link: "https://blog.medium.com/what-were-reading-are-you-busy-or-are-you-productive-5beca01c0f3b",
    content: [
      {
        type: "image",
        value:
          "https://miro.medium.com/v2/resize:fit:720/1*6n0WhfxBk3J01xsJVa4FLA.png",
      },
      {
        type: "section",
        values: [
          {
            type: "plain-text",
            value:
              "Is your to-do list the equivalent of an endless scroll? Contemplating the systems behind that question is at the heart of a Medium post about the difference between looking busy and being productive. Writer Anangsha Alammyan delves into this provocative debate as we enter the last few weeks of the year. In part, Alammyan reminds us that lists can sometimes be a stalling tactic.",
          },
          {
            type: "plain-text",
            value: `“I kept making goals, achieving them, reviewing progress, and setting new goals. But behind all this hustle, what was I trying to achieve?” she writes. “Completed to-do lists and exhausted journals don’t indicate productivity. They indicate you’ve been busy.”`,
          },
          {
            type: "plain-text",
            value:
              "Podcaster Christopher Robin’s recent approach to similar “must-do-things” anxieties is to meditate.",
          },
          {
            type: "plain-text",
            value: `“Long before I started a meditation practice, someone told me to take a breath and check in with my body,” Robin writes. “I had no idea what that meant, but it was worth a shot.”`,
          },
          {
            type: "plain-text",
            value: `That these stories are appearing as high-stakes holidays approach is no coincidence. Stress is at an all-time high — especially for Americans who bring their (legitimate) worries to holiday dinner, writes science journalist Robert Roy Britt. Britt’s experts, similar to Alammyan, recommend taking a step back and reevaluating attendance at an event if illness or questionable table conversation is a concern.`,
          },
          {
            type: "plain-text",
            value: `But what would you recommend? Different cultures and societies handle the end of the year in different ways. How do you prep for a season of major celebrations? I’d love to read your advice, insights and learnings. Let’s go deep.`,
          },
          {
            type: "plain-text",
            value: "Thanks for reading — and for writing.",
          },
        ],
      },
    ],
  },
];
