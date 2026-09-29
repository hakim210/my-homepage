import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae outline",
};

type Entry = {
  period: string;
  title: string;
  org: string;
  points: string[];
};

type Section = {
  id: string;
  heading: string;
  entries: Entry[];
};

const contact = {
  name: "Your Name",
  location: "City, Country",
  email: "you@example.com",
  links: ["github.com/your-handle", "linkedin.com/in/your-handle"],
};

const summary =
  "Write two or three sentences: who you are, what you work on, and what you are looking for next.";

const sections: Section[] = [
  {
    id: "education",
    heading: "Education",
    entries: [
      {
        period: "20XX – 20XX",
        title: "Degree, Major",
        org: "Institution name",
        points: ["GPA: 0.00 / 4.5 (optional)", "Relevant coursework: ..."],
      },
    ],
  },
  {
    id: "experience",
    heading: "Experience",
    entries: [
      {
        period: "20XX.00 – 20XX.00",
        title: "Job title",
        org: "Company or lab name",
        points: [
          "What you did, written as an action + result.",
          "Add a number when you can: users, speed, size, time.",
        ],
      },
    ],
  },
  {
    id: "projects",
    heading: "Projects",
    entries: [
      {
        period: "20XX",
        title: "Project name",
        org: "Role · Tech stack",
        points: [
          "One line on the problem it solves.",
          "One line on what you built and the outcome.",
        ],
      },
    ],
  },
  {
    id: "skills",
    heading: "Skills",
    entries: [
      {
        period: "",
        title: "Languages & tools",
        org: "",
        points: [
          "Languages: ...",
          "Frameworks: ...",
          "Tools: ...",
          "Languages you speak: ...",
        ],
      },
    ],
  },
  {
    id: "awards",
    heading: "Awards & Activities",
    entries: [
      {
        period: "20XX",
        title: "Award, scholarship, or activity",
        org: "Issuer or organization",
        points: ["One line on why it matters."],
      },
    ],
  },
];

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <li className="flex flex-col gap-1">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="font-medium">{entry.title}</p>
        {entry.period ? (
          <p className="shrink-0 text-sm text-gray-500 dark:text-gray-400">
            {entry.period}
          </p>
        ) : null}
      </div>
      {entry.org ? (
        <p className="text-sm text-gray-600 dark:text-gray-400">{entry.org}</p>
      ) : null}
      <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
        {entry.points.map((point) => (
          <li key={point} className="break-words">
            {point}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function CvPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-5 py-12 sm:px-8">
      <Link
        href="/"
        className="text-sm text-gray-500 hover:underline dark:text-gray-400"
      >
        ← Back to home
      </Link>

      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {contact.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{contact.location}</p>
        <p className="break-words text-gray-600 dark:text-gray-400">
          {contact.email}
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm break-words text-gray-600 dark:text-gray-400">
          {contact.links.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </p>
      </header>

      <p className="border-l-2 border-gray-300 pl-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
        Outline only — replace every placeholder with your own details before
        publishing. Do not include your full name, student ID, phone number, or
        home address if the site is public.
      </p>

      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">{summary}</p>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="flex flex-col gap-4">
          <h2 className="border-b border-gray-200 pb-2 text-xl font-semibold dark:border-gray-800">
            {section.heading}
          </h2>
          <ul className="flex flex-col gap-5">
            {section.entries.map((entry) => (
              <EntryBlock key={entry.title} entry={entry} />
            ))}
          </ul>
        </section>
      ))}

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Optional sections you can add later: Certifications, Publications,
        Talks, Volunteering, References.
      </p>
    </main>
  );
}
