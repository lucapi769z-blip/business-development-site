// English copy. Working draft written from docs/01–04: documents 05 (IT) and 06 (EN),
// which will hold the final approved copy, do not exist yet.
// [Brand] and [professional email on brand domain] are deliberate placeholders (docs/03 §21, docs/04 §23.1).

export type ServiceId =
  | "business-development"
  | "market-entry"
  | "partner-search"
  | "strategic-partnerships"
  | "publishing-rights"
  | "author-opportunities";

export type CategoryId = ServiceId | "other";

export const en = {
  brand: "[Brand]",
  email: "[professional email on brand domain]",

  meta: {
    home: {
      title: "[Brand] — Business development between Italy and international markets",
      description:
        "Independent, Founder-led business development: market entry into Italy, partner search, strategic partnerships and publishing & rights, developed on selected opportunities.",
    },
    whatWeDo: {
      title: "What We Do",
      description:
        "Business Development, Market Entry, Partner Search, Strategic Partnerships, Publishing & Rights Development and Author & Publishing Opportunities: scope, process and boundaries.",
    },
    publishing: {
      title: "Publishing & Rights",
      description:
        "Selected opportunities for publishers, authors, works and catalogues: international publishing opportunities, editorial partnerships, rights and licensing.",
    },
    founder: {
      title: "Founder — Luca Pistonesi",
      description:
        "Luca Pistonesi founded and leads [Brand]: a professional path from international trade to entrepreneurship, digital projects, publishing and business development.",
    },
    contact: {
      title: "Discuss an Opportunity",
      description:
        "Describe the opportunity in a structured enquiry. Each enquiry is evaluated case by case.",
    },
    thankYou: { title: "Enquiry received", description: "Your enquiry has been received." },
    privacy: { title: "Privacy Policy", description: "Privacy Policy of [Brand]." },
    cookies: { title: "Cookie Policy", description: "Cookie Policy of [Brand]." },
    legal: { title: "Legal Notice", description: "Legal Notice of [Brand]." },
    notFound: { title: "Page not found", description: "The page could not be found." },
  },

  a11y: {
    skip: "Skip to content",
    primaryNav: "Primary navigation",
    footerNav: "Footer navigation",
    legalNav: "Legal information",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    switchTo: "Switch to English",
    homeLink: "[Brand], home page",
    portrait: "Reserved place for a professional portrait of Luca Pistonesi",
    processList: "Steps of the development process",
  },

  nav: {
    home: "Home",
    whatWeDo: "What We Do",
    publishing: "Publishing & Rights",
    founder: "Founder",
    contact: "Contact",
  },

  cta: "Discuss an Opportunity",

  footer: {
    positioning:
      "Independent, Founder-led business development between Italy and international markets.",
    founded: "Founded by Luca Pistonesi",
    contactHeading: "Contact",
    navHeading: "Site",
    legalHeading: "Legal",
    privacy: "Privacy",
    cookies: "Cookies",
    legal: "Legal Notice",
    copyright: "[Brand]. All rights reserved.",
  },

  // Canonical public process (docs/03 §15). The same sequence is used everywhere.
  process: {
    steps: [
      {
        name: "Opportunity",
        short: "A short initial conversation to understand the opportunity at a high level.",
        detail:
          "The first conversation is brief and exploratory. Its only purpose is to understand what is being proposed, by whom, and with what objective.",
      },
      {
        name: "Qualification",
        short: "Is the request a fit, and can we realistically contribute?",
        detail:
          "We assess whether the request fits what we do, which service is relevant, and whether a formal engagement should be proposed. Many enquiries end at this stage.",
      },
      {
        name: "Scope & Engagement",
        short: "Brief, scope and terms are agreed in writing.",
        detail:
          "Objective, agreed activities, boundaries, expected outputs and assumptions are set out in an engagement brief, together with the terms. Substantive work begins only after this point.",
      },
      {
        name: "Assessment",
        short: "Evaluation of the opportunity and of our realistic role.",
        detail:
          "We evaluate the opportunity in more depth: its commercial logic, the relevant market context and the role we can realistically play.",
      },
      {
        name: "Target Definition",
        short: "Who the relevant counterparties are, and why.",
        detail:
          "We define the profile of the counterparties to be sought, then research and identify potential ones. This is identification, not due diligence.",
      },
      {
        name: "Selected Outreach",
        short: "Contact with selected counterparties, where agreed.",
        detail:
          "Where it is part of the engagement, we contact selected counterparties in our own professional capacity, without false identity or implied authority.",
      },
      {
        name: "Potential Business Conversation",
        short: "A first conversation, if the counterparty is interested.",
        detail:
          "When a counterparty shows interest, we facilitate a first conversation between the parties. Whether it happens depends on the third party.",
      },
      {
        name: "Development / Next Step",
        short: "Follow-up within scope, completion or a new engagement.",
        detail:
          "We support the follow-up of early conversations within the agreed scope. The engagement closes with an outcome summary, continues, or a new one is agreed.",
      },
    ],
    boundary: "Substantive work begins here",
    qualifier:
      "Outreach takes place only where agreed as part of an engagement. Any business conversation depends on the interest of the third party concerned: no introduction, meeting, partnership or result is guaranteed.",
  },

  services: {
    groups: {
      general: "General business development",
      publishing: "Publishing vertical",
    },
    items: [
      {
        id: "business-development",
        anchor: "business-development",
        number: "01",
        name: "Business Development",
        line: "Identifying, evaluating and developing selected commercial opportunities, and turning them into concrete business conversations.",
        question: "Is this opportunity worth developing, and who needs to be involved?",
        involves: [
          "clarifying the commercial objective;",
          "evaluating selected products, services and projects with commercial potential;",
          "identifying the types of parties needed to develop the opportunity;",
          "structuring the opportunity so it can be presented to potential counterparties;",
          "supporting early commercial discussions.",
        ],
        situations:
          "Entrepreneurs developing a new initiative, companies evaluating a new product or project, and Italian companies with a defined opportunity abroad.",
        excludes:
          "It does not include selling, negotiating or signing on the client's behalf, nor formal business plans or financial projections.",
        relation:
          "Business Development is the umbrella discipline. When an opportunity is not yet clear enough for a more specific service, it starts here.",
      },
      {
        id: "market-entry",
        anchor: "market-entry",
        number: "02",
        name: "Market Entry",
        line: "Supporting international companies in evaluating and approaching the Italian market and, in selected cases, Italian companies abroad.",
        question: "Can this product or service be relevant in Italy, and how should the market be approached?",
        involves: [
          "a preliminary evaluation of whether the market may be commercially relevant;",
          "desk research on the market context relevant to the opportunity;",
          "identifying possible entry routes: distributors, importers, commercial partners or licensees;",
          "defining the profile of target counterparties;",
          "supporting the start of selected business conversations.",
        ],
        situations:
          "International companies considering Italy, and foreign manufacturers or brand owners seeking an Italian commercial presence through partners.",
        excludes:
          "Research is preliminary: it is not a formal market study or due diligence, and it does not cover regulatory, customs, certification, tax or legal matters, or company set-up.",
        relation: "Market Entry frames where and how to approach a market. Partner Search often follows it.",
      },
      {
        id: "partner-search",
        anchor: "partner-search",
        number: "03",
        name: "Partner Search",
        line: "Identifying the counterparties relevant to a defined opportunity: distributors, importers, publishers, licensees and commercial partners.",
        question: "Who could be the right commercial or business counterparty?",
        involves: [
          "defining partner criteria with the client;",
          "researching and identifying potential counterparties;",
          "screening them against the agreed criteria;",
          "selected outreach, only where agreed;",
          "facilitating first conversations.",
        ],
        situations:
          "Manufacturers and brand owners seeking distributors or importers, companies entering Italy, Italian companies seeking partners abroad, publishers seeking rights counterparties.",
        excludes:
          "A shortlist is not a due-diligence report. Partner Search does not include negotiating or concluding contracts, and does not make us the client's agent or representative.",
        relation: "It may follow Market Entry or Business Development, and may lead to a Strategic Partnerships engagement.",
      },
      {
        id: "strategic-partnerships",
        anchor: "strategic-partnerships",
        number: "04",
        name: "Strategic Partnerships",
        line: "Developing collaborations between companies, professionals and organisations whose activities may create value together.",
        question: "What could the relevant parties build or develop together?",
        involves: [
          "understanding what each potential party brings and seeks;",
          "outlining possible collaboration models at a conceptual level;",
          "identifying potential partners, with Partner Search where needed;",
          "facilitating initial discussions between the parties;",
          "supporting the follow-up of early conversations.",
        ],
        situations:
          "Joint initiatives, co-development, commercial or editorial collaborations and complementary business relationships, including cross-border ones.",
        excludes:
          "It does not include drafting or negotiating partnership, joint-venture or licensing agreements, nor valuation or financial structuring.",
        relation: "Partner Search identifies a counterparty; Strategic Partnerships develops a collaboration.",
      },
      {
        id: "publishing-rights",
        anchor: "publishing-rights-development",
        number: "05",
        name: "Publishing & Rights Development",
        line: "Selected opportunities for publishers, works and catalogues: international publishing opportunities, rights, licensing and editorial partnerships.",
        question: "",
        involves: [],
        situations: "",
        excludes: "",
        relation: "",
      },
      {
        id: "author-opportunities",
        anchor: "author-publishing-opportunities",
        number: "06",
        name: "Author & Publishing Opportunities",
        line: "A selective evaluation of publishing opportunities for authors with a completed or well-defined work.",
        question: "",
        involves: [],
        situations: "",
        excludes: "",
        relation: "",
      },
    ] as {
      id: ServiceId;
      anchor: string;
      number: string;
      name: string;
      line: string;
      question: string;
      involves: string[];
      situations: string;
      excludes: string;
      relation: string;
    }[],
    labels: {
      question: "The question",
      involves: "What it may involve",
      situations: "Typical situations",
      excludes: "What it does not include",
      enquire: "Enquire about",
    },
  },

  home: {
    hero: {
      kicker: "Independent · Founder-led",
      title: "Connecting businesses, markets and opportunities.",
      body: "Business development, market entry and selected partnerships between Italy and international markets.",
      secondary: "Explore What We Do",
    },
    international: {
      label: "Italy and international markets",
      title: "For international companies approaching Italy, and selected Italian businesses developing abroad.",
      primary: {
        tag: "Primary direction",
        from: "International",
        to: "Italy",
        title: "Entering the Italian market",
        body: "For companies evaluating Italy: assessing whether the opportunity is realistic, defining which counterparties are relevant, from distributors and importers to commercial partners and licensees, and, where agreed, initiating selected business conversations.",
      },
      secondary: {
        tag: "Secondary direction",
        from: "Italy",
        to: "International",
        title: "Selected opportunities abroad",
        body: "For Italian companies, manufacturers and brand owners with a defined opportunity outside Italy: identifying potential partners and supporting early cross-border conversations.",
      },
      link: "Market Entry in detail",
    },
    manifesto: {
      label: "Approach",
      statement:
        "The value is not information alone. It is identifying the right opportunity, and bringing the right parties together.",
      body: "[Brand] is an independent business development brand, founded and led by Luca Pistonesi. Each opportunity is evaluated on its merits, the work is defined before it begins, and the Founder remains personally accountable for it.",
    },
    services: {
      label: "What we do",
      title: "Six services, one discipline.",
      intro: "The services can be combined, but every engagement has one clearly identified primary service.",
      link: "Explore What We Do",
      publishingLink: "Publishing & Rights",
    },
    process: {
      label: "How an opportunity develops",
      title: "One process, with a clear boundary.",
      link: "How we work",
    },
    areas: {
      label: "Areas of interest",
      title: "Where we are currently paying particular attention.",
      items: [
        { name: "Fitness & Wellness", text: "Selected equipment, products, services and business concepts." },
        { name: "Design & Hospitality", text: "Selected products and solutions for interiors, hospitality, contract and lifestyle." },
        { name: "Pet Care", text: "Selected products and innovative solutions for the pet sector." },
        { name: "Digital & Technology", text: "Digital products, software, platforms, educational technology and selected B2B services." },
        { name: "Selected Consumer & Lifestyle Products", text: "Products with potential for distribution or commercial development in new markets." },
      ],
      note: "These are areas of interest, not exclusive sectors. Selected opportunities in other industries are evaluated case by case.",
      publishingNote: "Publishing & Rights is treated as a dedicated vertical.",
      publishingLink: "See Publishing & Rights",
    },
    publishing: {
      label: "Publishing & Rights",
      title: "A dedicated vertical for publishers, authors, works and catalogues.",
      body: "The same discipline applied to publishing: recognising works, catalogues and rights with potential, identifying relevant publishing counterparties, and working to create the conditions for a serious editorial or rights conversation.",
      sides: [
        { name: "Publishers, works & catalogues", text: "International publishing opportunities, rights, licensing and editorial partnerships." },
        { name: "Authors", text: "A selective evaluation of publishing opportunities for completed or well-defined works." },
      ],
      link: "Explore Publishing & Rights",
    },
    founder: {
      label: "Founder",
      name: "Luca Pistonesi",
      role: "Founder",
      body: "Luca Pistonesi identifies and evaluates opportunities, initiates relationships, connects suitable parties and coordinates selected initiatives. Independent specialists are involved case by case when a project requires specific expertise.",
      path: ["International Trade", "Entrepreneurship & Commercial Development", "Digital", "Publishing", "Business Development"],
      pathLabel: "Professional path",
      link: "About the Founder",
    },
    qualified: {
      label: "Qualified opportunities",
      title: "Not every opportunity is the right opportunity.",
      body: "We work only where we can realistically contribute. An opportunity is a good fit when:",
      criteria: [
        "the company or person, and the offer, are clearly identifiable;",
        "the objective is realistic and the relevant market or counterparty can be identified;",
        "there is credible ownership of, or authority to discuss, the opportunity;",
        "expectations about our role are clear.",
      ],
      note: "Not every enquiry leads to an engagement.",
    },
    final: {
      title: "Have an opportunity worth discussing?",
      body: "Tell us about it.",
    },
  },

  whatWeDo: {
    hero: {
      label: "What We Do",
      title: "Business development, applied to selected opportunities.",
      body: "Six services in two groups. Business development and market entry form the general area; publishing and rights form a dedicated vertical. Each service can be combined with others, within a defined scope.",
    },
    publishingGroup: {
      intro: "The publishing vertical applies the same discipline to publishers, authors, works and catalogues.",
      link: "Publishing & Rights in detail",
    },
    distinction: {
      title: "Partner Search and Strategic Partnerships",
      caption: "Two distinct services",
      headers: ["", "Partner Search", "Strategic Partnerships"],
      rows: [
        ["Core question", "Who could be the right counterparty?", "What could the parties build together?"],
        ["Focus", "Identifying a counterparty", "Developing a collaboration"],
        ["Typical result", "Shortlist and introductions", "Collaboration concept and early discussions"],
      ],
    },
    how: {
      label: "How we work",
      title: "One canonical process.",
      body: "Every engagement follows the same sequence. The first conversation serves only to understand the opportunity and decide whether a formal engagement makes sense: substantive work begins once brief, scope and terms are agreed.",
    },
    boundaries: {
      label: "Engagement boundaries",
      title: "What we do not do, and do not promise.",
      body: "Stating limits clearly is part of working seriously.",
      items: [
        "We do not guarantee commercial success, sales or revenue.",
        "We do not guarantee that a distributor, importer, publisher, licensee or partner will respond or accept.",
        "Research and identification are not due diligence or formal market studies.",
        "We do not provide legal, tax, financial or regulatory advice; where needed, qualified professionals are involved.",
        "We do not act as the client's commercial agent, broker or legal representative, and we cannot bind or sign for the client.",
        "We have no offices or permanent representatives outside Italy.",
        "Final negotiation, commitments and signatures remain with the parties and their advisers.",
      ],
    },
    final: {
      title: "Have a defined opportunity in mind?",
      body: "Describe it briefly. Each enquiry is evaluated case by case.",
    },
  },

  publishing: {
    hero: {
      label: "Publishing & Rights",
      title: "Selected opportunities in publishing and rights.",
      body: "A dedicated vertical connected to the Founder's experience in publishing and editorial initiatives. It applies the same selective approach to publishers, authors, works and catalogues.",
    },
    publishers: {
      label: "For publishers",
      service: "Publishing & Rights Development",
      title: "For publishers with works, catalogues or rights with potential beyond their current market.",
      body: "For Italian publishers seeking international partners, and foreign publishers interested in the Italian market.",
      themes: [
        { name: "International Publishing Opportunities", text: "Identifying potentially relevant foreign or Italian publishers and licensees for selected works or catalogues." },
        { name: "Editorial Partnerships", text: "Exploring editorial collaborations and special publishing projects in selected cases." },
      ],
      involvesLabel: "What it may involve",
      involves: [
        "understanding the catalogue, works or project;",
        "identifying potentially relevant publishers, editorial partners or licensees;",
        "preparing presentation material together with the publisher;",
        "selected outreach and first discussions, where agreed.",
      ],
      cta: "Enquire as a publisher",
    },
    authors: {
      label: "For authors",
      service: "Author & Publishing Opportunities",
      title: "For selected authors with a completed or well-defined work.",
      body: "For authors, Italian or international, seeking a publisher, an editorial counterparty, or international and rights-related opportunities for existing works.",
      involvesLabel: "How it works",
      involves: [
        "a concise enquiry describing the work;",
        "an assessment of whether we can realistically contribute;",
        "where the opportunity is selected, a request for further material;",
        "identification of potentially relevant publishers or editorial counterparties, and contact where agreed.",
      ],
      excludes:
        "This is not author representation or a literary-agent role, and it does not include editing, ghostwriting, translation or self-publishing services.",
      cta: "Enquire as an author",
    },
    works: {
      label: "For works & catalogues",
      title: "For owners of books, catalogues or editorial intellectual property.",
      body: "Existing works and catalogues may hold further potential: rights, licensing, translation or new forms of development. We evaluate selected cases where the ownership and availability of rights are clear.",
    },
    evaluation: {
      label: "Evaluation",
      title: "How publishing opportunities are evaluated.",
      body: "Each opportunity is considered on its merits. We look for:",
      criteria: [
        "a work, catalogue or project that is complete or well defined;",
        "clear ownership and availability of the relevant rights;",
        "a realistic objective and an identifiable type of counterparty;",
        "a field in which we can realistically contribute.",
      ],
      decline:
        "Where rights are unclear or already committed, where guaranteed results are expected, or where we cannot contribute, we decline courteously.",
    },
    rules: {
      label: "Author enquiries",
      title: "How to submit an author enquiry.",
      items: [
        "Send a concise enquiry through the contact form, selecting “Author & Publishing Opportunities”.",
        "Do not send manuscripts: the form accepts only a short summary, and no file uploads.",
        "If the opportunity is selected, further material may be requested.",
        "Submitting an enquiry does not guarantee review, acceptance, introduction to a publisher or publication.",
      ],
    },
    final: {
      title: "A publishing opportunity worth discussing?",
      body: "Publishers and authors can describe it through the same structured enquiry.",
    },
  },

  founder: {
    hero: {
      label: "Founder",
      name: "Luca Pistonesi",
      role: "Founder",
      body: "[Brand] is founded and led by Luca Pistonesi. The Founder evaluates each opportunity, defines the work, initiates relationships, connects suitable parties and coordinates selected initiatives, and remains personally accountable for each engagement within its agreed scope.",
      roleLabel: "Role today",
      roles: ["Entrepreneur", "Business developer", "Project promoter", "Relationship builder", "Opportunity developer"],
    },
    chapters: {
      label: "Professional path",
      title: "An evolution, not a CV.",
      items: [
        {
          number: "01",
          name: "Beginnings — International Trade",
          text: "A family import-export activity involving countries of the former Soviet Union.",
        },
        {
          number: "02",
          name: "Entrepreneurship",
          text: "Independent entrepreneurial activities, including Dinamica Fitness.",
        },
        {
          number: "03",
          name: "Commercial Development",
          text: "Commercial roles, sales activity and the development of independent initiatives.",
        },
        {
          number: "04",
          name: "Digital",
          text: "LP Media Solution, social and web projects, and mobile application initiatives.",
        },
        {
          number: "05",
          name: "Publishing",
          text: "Centro Editoriale Ellepi and the development of publishing projects and editorial initiatives.",
        },
        {
          number: "06",
          name: "Today — Business Development",
          text: "The current evolution: market development, partnerships and selected commercial and publishing opportunities between Italy and international markets.",
        },
      ],
    },
    specialists: {
      label: "Working with specialists",
      title: "Specific expertise, involved case by case.",
      body: "The Founder is not presented as an expert in every sector. When a project requires specific expertise, independent professionals or sector specialists may be involved case by case. There is no permanent specialist network: the Founder remains responsible for the overall relationship within the agreed scope.",
    },
    final: {
      title: "Discuss an opportunity directly with the Founder.",
      body: "Every enquiry is read and evaluated case by case.",
    },
  },

  contact: {
    hero: {
      label: "Contact",
      title: "Discuss an opportunity.",
      body: "Describe the opportunity briefly. Each enquiry is evaluated case by case, and the first conversation serves to understand whether a formal engagement makes sense.",
    },
    include: {
      title: "What helps",
      items: [
        "who you are and which organisation you represent;",
        "what the opportunity is;",
        "which market or counterparty is relevant;",
        "what you are seeking.",
      ],
    },
    direct: "Professional contact",
  },

  form: {
    title: "Enquiry",
    requiredNote: "Fields marked “required” must be completed.",
    required: "required",
    optional: "optional",
    categoryPlaceholder: "Select a category",
    categories: [
      { id: "business-development", label: "Business Development" },
      { id: "market-entry", label: "Market Entry" },
      { id: "partner-search", label: "Partner Search" },
      { id: "strategic-partnerships", label: "Strategic Partnerships" },
      { id: "publishing-rights", label: "Publishing & Rights" },
      { id: "author-opportunities", label: "Author & Publishing Opportunities" },
      { id: "other", label: "Other" },
    ] as { id: CategoryId; label: string }[],
    fields: {
      category: { label: "Enquiry category", hint: "" },
      name: { label: "Name", hint: "" },
      email: { label: "Email", hint: "" },
      country: { label: "Country", hint: "Where you or your organisation are based." },
      company: { label: "Company / Organisation", hint: "" },
      targetMarket: { label: "Target market / country", hint: "The market or country the opportunity concerns." },
      description: {
        label: "Opportunity description",
        hint: "A concise description: what the opportunity is and what you are seeking.",
      },
      descriptionAuthor: {
        label: "Additional context",
        hint: "Anything relevant not covered above. Please do not paste the manuscript.",
      },
      workTitle: { label: "Work title", hint: "" },
      genre: { label: "Genre / category", hint: "" },
      publicationStatus: { label: "Publication status", hint: "" },
      existingPublisher: { label: "Existing publisher", hint: "If the work has already been published." },
      synopsis: {
        label: "Short synopsis",
        hint: "A short summary only. Further material may be requested if the opportunity is selected.",
      },
      rights: { label: "Rights information", hint: "Where known: who holds the rights, and which are available." },
      objective: { label: "Objective sought", hint: "For example a publisher, an international edition or a rights opportunity." },
    },
    publicationStatuses: [
      { id: "unpublished", label: "Unpublished, complete" },
      { id: "in-progress", label: "Well defined, in progress" },
      { id: "published", label: "Published" },
      { id: "self-published", label: "Self-published" },
    ],
    counter: (used: number, max: number) => `${used} of ${max} characters`,
    revealed: (category: string) => `Fields for ${category} are shown below.`,
    privacy: {
      before: "The information you provide is used only to evaluate your enquiry. See the ",
      link: "Privacy Policy",
      after: ".",
    },
    submit: "Send enquiry",
    sending: "Sending…",
    errors: {
      summary: "Please check the following fields:",
      required: (field: string) => `${field} is required.`,
      email: "Enter a valid email address, for example name@company.com.",
      tooLong: (field: string, max: number) => `${field} must be at most ${max} characters.`,
      submit:
        "The enquiry could not be sent because of a technical problem. Your information has been kept: please try again in a moment.",
    },
    honeypot: "Leave this field empty",
  },

  thankYou: {
    label: "Enquiry received",
    title: "Thank you. Your enquiry has been received.",
    body: [
      "Each enquiry is evaluated case by case. If the opportunity is selected for further discussion, further information may be requested.",
      "Submitting an enquiry does not guarantee acceptance, an engagement, a response from third parties or any commercial outcome.",
    ],
    back: "Continue",
    links: { home: "Home", whatWeDo: "What We Do", founder: "Founder" },
  },

  legalPages: {
    label: "Legal",
    placeholder: "[Text to be prepared separately before launch]",
    privacy: {
      title: "Privacy Policy",
      body: "This page will contain the Privacy Policy covering contact enquiries, author enquiries, confidential business information and personal data.",
    },
    cookies: {
      title: "Cookie Policy",
      body: "This page will contain the Cookie Policy, if required by the technologies actually used at launch.",
    },
    legal: {
      title: "Legal Notice",
      body: "This page will contain the legal entity details once they exist and are approved.",
    },
  },

  notFound: {
    label: "404",
    title: "This page could not be found.",
    body: "The address may be incorrect, or the page may have moved.",
    links: { home: "Home", whatWeDo: "What We Do", contact: "Contact" },
  },
};

export type Dict = typeof en;
