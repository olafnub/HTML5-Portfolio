import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Andy Li",
  initials: "AL",
  url: "https://andys-magic-portfolio.vercel.app/",
  location: "Minneapolis, MN",
  locationLink: "https://www.google.com/maps/place/minneapolis",
  description:
    "Junior Computer Science @ The University of Minnesta - Twin Cities",
  summary:
    "Built a couple of one page websites during senior year of high school -> decided to go through [The Odin Project](https://www.theodinproject.com/) while studying at community college -> now an advocate in the web3 space studying @ UMN with over 10+ projects.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "MongoDB",
    "Java",
    "C",
    "Nginx/pm2/ngrok",
    "PHP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "li002488@umn.edu",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/olafnub",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andyli2026/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/360beez",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "li002488@umn.edu",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "TSI Inc.",
      href: "https://tsi.com/",
      badges: [],
      location: "Shoreview, MN",
      title: "Software Engineer Intern",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqOr3uo2aG2Z10AaouN9vLKP2sj29GjUJyQ&s",
      start: "May 2024",
      end: "Aug 2024",
      description: "Developed a back-end API using Go to enhance MongoDB data handling. Improved website performance by optimizing an algorithm and ensured efficient code testing through Jenkins and Jest."
    },
    {
      company: "DAuth Network",
      badges: [],
      href: "https://www.dauth.network/",
      location: "Remote",
      title: "Full Stack Intern",
      logoUrl: "https://avatars.githubusercontent.com/u/126406679?s=200&v=4",
      start: "Feb 2024",
      end: "May 2024",
      description: "Simplified the purchase process with React and Ngrok, boosting revenue. Fostered better communication among interns by creating a group chat."
    },
    {
      company: "LinkUp",
      href: "https://www.linkup.com/",
      badges: [],
      location: "Minneapolis, MN",
      title: "Web Programming Intern",
      logoUrl: "https://mms.businesswire.com/media/20240417189275/en/2100650/23/LinkUp_Logo_RGB.jpg",
      start: "Aug 2023",
      end: "Feb 2024",
      description: "Scraped job listings to improve a massive 275-million-record database. Strengthened code reliability by addressing edge cases and fixing proxy issues."
    },
  ],
  leadership: [
    {
      company: "Enterprise Ethereum Alliance",
      href: "https://entethalliance.org/",
      badges: [],
      location: "New York, NY",
      title: "Student Board Intern",
      logoUrl: "https://entethalliance.org/wp-content/uploads/2022/10/EEA-Design_Logo-1.png",
      start: "Jun 2024",
      end: "Present",
      description: "Collaborated with blockchain leaders like Microsoft and JPMC to drive Ethereum adoption. Worked on initiatives that promote enterprise blockchain solutions."
    },
    {
      company: "UMN Blockchain Club",
      href: "https://www.umnbc.org",
      badges: [],
      location: "Minneapolis, MN",
      title: "President",
      logoUrl: "https://www.umnbc.org/icon.ico?e52bc4e31327f274",
      start: "Jan 2024",
      end: "Present",
      description: "Led a team of 6 to teach blockchain concepts and grow the club. Oversaw 500+ members in our Discord community, organizing events and workshops."
    }
  ],
  education: [
    {
      school: "University Of Minnesota - Twin Cities",
      href: "",
      degree: "Bachelor of Arts in Computer Science",
      logoUrl: "https://i.pinimg.com/736x/c6/8b/8b/c68b8b12ff46e35bcd57194caf668222.jpg",
      start: "Sep 2023",
      end: "May 2026"
    }
  ], 
  projects: [
    {
      title: "QFTip",
      href: "https://qftip.com",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Blinkathon 2024, learned what quadratic funding was and wanted to try to implement it using blink actions",
      technologies: [
        "Next.js",
        "Typescript",
        "Magic UI",
        "TailwindCSS",
        "web3.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://qftip.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Wallet Discover",
      href: "https://www.walletdiscover.com/",
      dates: "June 2024 - Aug 2024",
      active: true,
      description:
        "Participated in Onchain Base Summer Hackathon, found a problem with not being able to see PnL on crypto wallets so I built this with a fellow UMN student",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Basescan",
        "Solscan",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.walletdiscover.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "UMN Blockchain Landing Page",
      href: "https://umnblockchain.xyz",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Led the development of the UMN Blockchain's club landing page, worked with 3 other students to launch the website",
      technologies: [
        "React",
        "Javascript",
        "Node.js",
        "TailwindCSS",
        "Nginx",
        "Pm2",
        "CryptoPanic API",
        "Discord API",
      ],
      links: [
        {
          type: "Website",
          href: "https://umnblockchain.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/olafnub/UMNBC_Website",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "",
    },
    {
      title: "MultiChain Wallet Verifcation",
      href: "https://devfolio.co/projects/multichain-wallet-ownership-verification-b793",
      dates: "February 2023 - August 2023",
      active: true,
      description:
        "LionHack 2023, The idea was to make sure a single user could prove their ownership of different wallets on other ecosystems.",
      technologies: [
        "React",
        "Node.js",
        "Axelar SDK",
        "1st Place Axelar Network",
        "2nd Place Ava Labs"
      ],
      links: [
        {
          type: "Source",
          href: "https://devfolio.co/projects/multichain-wallet-ownership-verification-b793",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Cardano Natives",
      href: "https://github.com/olafnub/cardano2",
      dates: "February 2023 - August 2023",
      active: true,
      description:
        "Developed an E-commerce website to sell project base merch in the cardano ecosystem",
      technologies: [
        "HTML/EJS",
        "CSS/SCSS",
        "Typescript",
        "Bcrypt.js",
        "Node.js",
        "Stripe API",
        "CoinGecko Api",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/olafnub/cardano2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Instagram Captions API",
      href: "https://youtu.be/RI4d2TeTFws?si=m9EM3ZTzNWdkLDGJ",
      dates: "February 2023 - August 2023",
      active: true,
      description:
        "Helped local Photographer see a list of past client Instagram captions all on one page",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Meta (Facebook) API"
      ],
      links: [
        {
          type: "Source",
          href: "https://youtu.be/RI4d2TeTFws?si=m9EM3ZTzNWdkLDGJ",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
