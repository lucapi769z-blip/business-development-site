# 03 — Site Structure

## Document Status

Governing documents:

- docs/01_project_vision.md
- docs/02_target_audiences_and_services.md

This document defines the Information Architecture and UX Structure of Version 1.

Where this document and documents 01 or 02 appear to differ, documents 01 and 02 prevail.

This document does NOT contain:

- final marketing copy;
- typography or colour choices;
- the final brand name;
- application code.

Headlines, labels and CTA wording quoted in this document are conceptual placeholders, not approved copy, with one exception: the primary CTA label concept "Discuss an Opportunity" is approved (see section 19). Final copy belongs to documents 05 (Italian) and 06 (English).

During development, the missing brand name is represented by a neutral text placeholder, referred to here as **[Brand]**.

---

# 1. Purpose of the Site Structure Document

This document defines:

- which pages exist in V1 and how they are organised;
- how the two language versions are structured;
- what each page contains, section by section, and why;
- how visitors move through the site towards a qualified enquiry;
- how the dynamic contact form behaves;
- what happens after an enquiry is submitted;
- which utility and legal pages are reserved;
- how the architecture adapts to mobile and desktop;
- what must not appear in V1;
- how the architecture can grow without redesign.

Every section in the site must justify its presence. If a section does not help a visitor understand the brand, trust it, or decide to make a qualified enquiry, it does not belong in V1.

---

# 2. Audience Hierarchy

The six audiences are defined in document 02. This section defines their **structural priority** on the website, which determines what visitors see first.

## Priority 1 — Primary international audience

- A. International Companies Entering Italy
- B. Manufacturers, Product & Brand Owners (in particular foreign manufacturers and product owners seeking Italian partners)

These audiences correspond to the brand's primary direction, International → Italy (document 01, section 7).

An international visitor must understand within the first screen, or the section immediately following it, that the brand is relevant to companies evaluating or developing opportunities in Italy.

## Priority 2 — Secondary business audiences

- C. Italian Companies Seeking International Opportunities
- D. Entrepreneurs and Companies Developing New Initiatives
- B. Manufacturers, Product & Brand Owners (Italian manufacturers and brand owners exploring international opportunities)

These correspond to the secondary direction, Italy → International, and to general Business Development.

## Dedicated vertical — Publishing & Rights

- E. Publishers
- F. Authors

These audiences are served by a dedicated page and a dedicated Home feature, reached through their own primary navigation item. They are important, but publishing must NOT visually dominate the brand.

## Institutional readers

The site may also be read by:

- public-sector related organisations;
- para-ministerial bodies;
- chambers of commerce;
- industry and trade organisations;
- foundations;
- professional associations;
- institutional stakeholders;
- large established companies.

These readers are NOT an additional service audience and do not change the six-audience architecture of document 02.

They are an evaluating readership. The site must withstand their scrutiny: it must be precise, restrained, verifiable and free of exaggerated claims (see section 22).

## How audiences find their entry point

No audience receives its own page or navigation item in V1.

| Audience | Primary entry point | Supporting entry points |
|---|---|---|
| A. International companies entering Italy | Home §2 International / Market Entry Positioning | What We Do — Market Entry; Contact |
| B. Manufacturers, product & brand owners | Home §2 and §4 What We Do | What We Do — Partner Search, Market Entry |
| C. Italian companies seeking international opportunities | Home §2 (secondary direction) | What We Do — Business Development, Strategic Partnerships |
| D. Entrepreneurs and new initiatives | Home §4 What We Do | What We Do — Business Development |
| E. Publishers | Primary nav — Publishing & Rights | Home §7 Publishing Feature |
| F. Authors | Primary nav — Publishing & Rights | Home §7 Publishing Feature; Contact (author category) |

---

# 3. Language Architecture

## Principles

- Italian and English are both official launch languages (document 01, section 17).
- English is the principal international-facing language.
- Italian is a complete equivalent version, not a subset.
- The English version is professionally localised, not mechanically translated.
- Every public page exists in both languages.

## URL architecture

A symmetric bilingual architecture with a language prefix on every page.

| Page | English | Italian |
|---|---|---|
| Home | /en/ | /it/ |
| What We Do | /en/what-we-do | /it/cosa-facciamo |
| Publishing & Rights | /en/publishing-rights | /it/editoria-diritti |
| Founder | /en/founder | /it/fondatore |
| Contact | /en/contact | /it/contatti |

Utility and legal pages are also localised (see section 16). Their routes are provisional and will be confirmed in document 08 (SEO) and implementation.

## Root behaviour

- `/` may route the visitor according to language preference.
- If no preference is available, English is the international fallback.
- The exact routing mechanism (redirect type, preference detection, stored preference) is an implementation decision.

## Language switching

- The visitor must always be able to switch manually between IT and EN.
- The language switch is visible in the header on every page, on mobile and desktop.
- Switching language leads to the **equivalent page** in the other language, not to the other Home.
- A manually chosen language takes precedence over automatic detection.
- The switch identifies languages by their own names or codes (IT / EN), not by flags.

## Localisation metadata

The following are documented here and implemented later:

- `hreflang` relationships between equivalent pages;
- a canonical strategy for each language version;
- a default / fallback reference for the root;
- the correct language declaration on every page.

Details belong to document 08 (SEO) and implementation.

---

# 4. Sitemap

## Primary content pages

```
/
├── /en/                         Home
│   ├── /en/what-we-do           What We Do
│   ├── /en/publishing-rights    Publishing & Rights
│   ├── /en/founder              Founder
│   └── /en/contact              Contact
│
└── /it/                         Home
    ├── /it/cosa-facciamo        Cosa facciamo
    ├── /it/editoria-diritti     Editoria & Diritti
    ├── /it/fondatore            Fondatore
    └── /it/contatti             Contatti
```

Italian page names shown above are working labels, not final copy.

## Utility / system pages

Both languages:

- Privacy Policy
- Cookie Policy, if required by the technologies actually used
- Legal Notice / Imprint, where appropriate
- 404 page
- Submission Confirmation / Success State

See section 16.

## Not in V1

- no individual service pages;
- no audience-specific landing pages;
- no blog, insights or articles;
- no case-study pages.

---

# 5. Primary Navigation

## Items

1. Home
2. What We Do
3. Publishing & Rights
4. Founder
5. Contact
6. IT / EN

## Rules

- The navigation is minimal and identical across all primary pages.
- "Home" may be represented by the brand name / placeholder, provided a clearly identifiable link to the Home exists.
- Contact is a normal navigation item. The primary CTA (section 19) may additionally appear in the header as a single, restrained action, provided it does not compete visually with page content.
- No audiences or individual services appear in the primary navigation.
- No drop-down or mega-menu in V1.
- The current page is clearly indicated.
- Publishing & Rights remains a dedicated navigation item because it is a dedicated vertical (document 01, section 9).

---

# 6. Footer Architecture

A professional, institutional footer present on every page, including utility pages.

## Content

The footer may contain:

- brand name ([Brand] placeholder until approved);
- a concise positioning line;
- primary navigation links;
- IT / EN language access;
- professional contact information;
- Founder reference where appropriate (for example "Founded by Luca Pistonesi");
- Privacy link;
- Cookies link, if applicable;
- Legal Notice / Imprint link, where applicable;
- copyright.

## Rules

- Corporate registration details, company numbers, VAT numbers or addresses must NOT be invented. They are added only when they exist and are approved.
- Professional contact information is limited to channels that actually exist and are approved.
- No social-media icons unless the corresponding profiles exist, are active and are approved.
- No newsletter sign-up in V1.
- No office lists, country lists or maps.

---

# 7. Home Page Structure

The Home follows this sequence:

1. Hero
2. International / Market Entry Positioning
3. Brand Positioning / Manifesto
4. What We Do
5. How an Opportunity Develops
6. Areas of Interest
7. Publishing & Rights Feature
8. Founder
9. Qualified Opportunities
10. Final CTA
11. Footer

The rhythm deliberately alternates large statements, concise information, whitespace, editorial transitions, selected visual moments, human / Founder content and a strong final CTA.

It must avoid the pattern: hero → card grid → card grid → testimonials → card grid → footer.

---

## 7.1 Hero

### Purpose

State what the brand does in one dominant message.

### Content elements

- one dominant message;
- one short supporting line;
- one primary CTA;
- at most one subtle secondary text link.

### Conceptual direction (not final copy)

- Headline concept: "Connecting businesses, markets and opportunities."
- Supporting concept: Business Development, Market Entry and selected partnerships between Italy and international markets.
- Primary CTA: "Discuss an Opportunity" → Contact (approved label concept, see section 19).
- Secondary link concept: "Explore What We Do" → What We Do.

### Constraints

- no carousel, slider or rotating headline;
- no multiple competing CTAs;
- no stock imagery;
- the supporting line should already reference Italy and international markets so that the international audience cue starts in the first screen.

---

## 7.2 International / Market Entry Positioning

### Purpose

Ensure that an international visitor understands immediately that the Italian market is a core part of the proposition.

This early section is intentional.

### Content elements

- an early audience cue, conceptually: "For international companies approaching Italy and selected Italian businesses developing abroad." (structural guidance, not final copy);
- the two directions, with clear hierarchy:
  - primary: International → Italy;
  - secondary: Italy → International;
- a short indication of what this may involve (for example identifying partners, distributors or importers, and initiating selected business conversations);
- a text link to Market Entry within What We Do.

### Constraints

- Market Entry must not be hidden among generic consulting language;
- no separate Market Entry page in V1;
- no flags, globes, generic world maps or pins;
- no implication of offices, teams or representatives in foreign markets;
- the secondary direction must be visibly secondary, not equal.

---

## 7.3 Brand Positioning / Manifesto

### Purpose

Explain why the brand exists and how it thinks.

### Content elements

- a short editorial statement around the core idea of document 01: identifying the right opportunity and bringing the right parties together;
- a clear indication that the brand is independent and Founder-led.

### Constraints

- concise, one statement plus at most a short supporting paragraph;
- no superlatives or claims listed as forbidden in document 01, section 15;
- "we" must not imply a team, offices or resources that do not exist.

---

## 7.4 What We Do

### Purpose

Present the six services with editorial hierarchy.

### Structure

Two groups, numbered:

General Business Development

- 01 Business Development
- 02 Market Entry
- 03 Partner Search
- 04 Strategic Partnerships

Publishing Vertical

- 05 Publishing & Rights Development
- 06 Author & Publishing Opportunities

Each service shows its name and one concise line. Detail lives on the What We Do page.

### Constraints

- NOT six identical cards in a uniform grid;
- the two groups must be visually distinguished;
- the general business group comes first;
- Market Entry must be clearly legible as a core service, not buried;
- link to What We Do; publishing items may link to Publishing & Rights.

---

## 7.5 How an Opportunity Develops

### Purpose

Show, in a simplified visual form, the canonical process defined in section 15.

### Content elements

- the canonical sequence, visually simplified;
- the clear marker that substantive work begins only after Scope & Engagement;
- a short qualifier that outreach happens only where agreed and that third-party conversations depend on third-party interest;
- link to "How We Work" on the What We Do page.

### Constraints

- must map directly to the canonical process; no alternative methodology;
- must not suggest that introductions, meetings, partnerships or results are guaranteed.

---

## 7.6 Areas of Interest

### Purpose

Show the sectors where the brand is currently paying particular attention, without claiming universal expertise.

### Content elements

- Fitness & Wellness
- Design & Hospitality
- Pet Care
- Digital & Technology
- Selected Consumer & Lifestyle Products
- a short statement that these are areas of interest, not exclusive operating sectors, and that selected opportunities in other industries may be evaluated case by case;
- a short reference that Publishing & Rights is treated as a dedicated vertical (linking to section 7.7 or the Publishing & Rights page).

### Constraints

- Publishing is NOT repeated here as an equal item; document 01 still governs the full list of areas of interest;
- presented as "Areas of Interest", never as "Industries we serve" or "Sectors of expertise";
- no sector icons in a generic card grid;
- no stock imagery per sector.

---

## 7.7 Publishing & Rights Feature

### Purpose

Introduce the Publishing & Rights vertical as a distinct editorial moment and lead to its dedicated page.

### Content elements

- a short editorial statement on the vertical;
- the two sides it serves: publishers / works and catalogues, and authors;
- one link to the Publishing & Rights page.

### Constraints

- one dedicated section on the Home, visually distinct but not dominant over the brand;
- no claim of representation or agency (document 01 sections 2 and 9; document 02 section 2.6);
- no reference to unverified publishing collaborations.

---

## 7.8 Founder

### Purpose

Give the brand a human, accountable face and show credible real-world experience.

### Content elements

- "Luca Pistonesi — Founder";
- the simplified professional evolution:
  International Trade → Entrepreneurship & Commercial Development → Digital → Publishing → Business Development;
- a short statement of the Founder's role today (document 01, section 5);
- reserved place for a professional Founder portrait;
- link to the Founder page.

### Constraints

- no full CV;
- no unverified claims, names or results.

---

## 7.9 Qualified Opportunities

### Purpose

Communicate selectivity, credibility and realistic engagement criteria.

### Content elements

- conceptual idea: "Not every opportunity is the right opportunity.";
- a short indication of what makes an opportunity a good fit: evaluation, fit, clarity, realistic objectives;
- a statement that not every enquiry is accepted.

### Constraints

- derived from document 02, sections 10 and 11, in simplified public form;
- must not be arrogant or exclusionary in tone;
- not a full list of decline reasons.

---

## 7.10 Final CTA

### Purpose

Close the page with one clear invitation.

### Content elements

- conceptual direction: "Have an opportunity worth discussing? Tell us about it.";
- one primary action to Contact: "Discuss an Opportunity".

### Constraints

- one action only;
- the primary CTA label is consistent across the site (see section 19);
- "Start a Conversation" may appear as secondary supporting copy if appropriate, but not as the action label.

---

## 7.11 Footer

See section 6.

---

# 8. What We Do Page Structure

## Purpose

Explain the six services in detail, the canonical process, and the boundaries of an engagement.

## Sections

1. **Hero**
   - page title and one short introduction;
   - no CTA competition: at most one link to Contact.

2. **Business Development group**
   - Business Development
   - Market Entry
   - Partner Search
   - Strategic Partnerships

3. **Publishing group**
   - Publishing & Rights Development
   - Author & Publishing Opportunities
   - link to the Publishing & Rights page for detail.

4. **How We Work**
   - the canonical process in full public form (section 15);
   - same sequence and principles as the Home version.

5. **Engagement Boundaries**
   - public summary of what the brand does not do and does not promise (document 02, sections 1 and 12);
   - written in a calm, professional register, not as a legal disclaimer.

6. **CTA**
   - primary CTA to Contact.

## Per-service structure

Each service block may contain, in public form derived from document 02 section 2:

- service name and number;
- the question or need it addresses;
- what it may involve;
- typical counterparties or situations, where useful;
- what it does not include, where clarifying;
- relationship to other services, where useful.

## Requirements

- Market Entry must be clearly identifiable and directly linkable from the Home (for example via a page anchor).
- Partner Search and Strategic Partnerships must be presented with the distinction defined in document 02, section 2.4.
- "Publishing & Rights" is the shorter public label; the formal service name "Publishing & Rights Development" may be used as the service title on this page.
- Each service must be individually addressable within the page (anchors), so that future individual service pages can replace them without changing navigation.

---

# 9. Publishing & Rights Page Structure

## Purpose

Present the dedicated vertical for publishers, authors, and works and catalogues.

## Sections

1. **Hero**
   - page title and short introduction to the vertical.

2. **For Publishers**
   - based on document 02, audience E and service 2.5;
   - International Publishing Opportunities and Editorial Partnerships may appear as sub-themes.

3. **For Authors**
   - based on document 02, audience F and service 2.6;
   - service name: Author & Publishing Opportunities.

4. **For Works & Catalogues**
   - based on the typical client of service 2.5: owners of books, catalogues or editorial intellectual property;
   - rights, licensing and new forms of development.

5. **How publishing opportunities are evaluated**
   - public summary of evaluation criteria, consistent with document 02, sections 10 and 11, and the publishing-specific decline reasons (for example unclear rights).

6. **Author enquiry rules**
   - V1 is NOT an open unsolicited full-manuscript submission platform;
   - authors may submit a concise enquiry through the contact form;
   - no manuscripts through the form; further material may be requested later if the opportunity is selected;
   - submission does not guarantee review, acceptance, introduction to a publisher or publication.

7. **CTA**
   - primary CTA to Contact, ideally preselecting the relevant enquiry category (see section 12).

## Constraints

- must not use "Author Representation" or imply literary-agent, rights-agent or other regulated representation roles;
- the directional publishing examples of document 01, section 9, are internal strategic examples and may only be used in cautious public form;
- no unverified references to past publishing collaborations.

---

# 10. Founder Page Structure

## Purpose

Present the Founder as the accountable person behind the brand, through narrative chapters rather than a chronological CV.

## Sections

1. **Introduction**
   - Luca Pistonesi, Founder;
   - the Founder's role in the brand today (document 01, section 5);
   - reserved place for a professional portrait.

2. **Narrative chapters**
   The full professional evolution must be preserved:
   - 01 Beginnings — International Trade
   - 02 Entrepreneurship
   - 03 Commercial Development
   - 04 Digital
   - 05 Publishing
   - 06 Today — Business Development

   Chapter titles are working titles, not final copy.

3. **Selected Professional Background** (reserved)
   - a later section for verified selected activities, projects and collaborations;
   - populated only with facts verified before publication (document 01, section 6).

4. **How the Founder works with specialists**
   - independent professionals or sector specialists may be involved case by case when a project requires specific expertise;
   - no established or permanent specialist network is implied;
   - the Founder remains responsible for the overall opportunity-development relationship within the agreed scope.

5. **CTA**
   - primary CTA to Contact.

## Constraints

- not a conventional chronological CV;
- no invented names, results, numbers or endorsements;
- the Founder is not presented as a technical expert in every sector.

---

# 11. Contact Page Structure

## Purpose

Enable a qualified, structured professional enquiry and set realistic expectations.

## Sections

1. **Introduction**
   - short invitation to describe the opportunity;
   - short statement that enquiries are evaluated case by case.

2. **What to include**
   - brief guidance on what makes an enquiry useful (who you are, what the opportunity is, which market or counterparty is relevant, what you are seeking);
   - its purpose is to help visitors submit concise, useful information;
   - it must remain short and welcoming, and must not make the Contact page feel bureaucratic or overly demanding.

3. **Dynamic contact form**
   - see sections 12 and 13.

4. **Privacy notice placement**
   - a privacy notice / acknowledgement adjacent to the submit action, linking to the Privacy Policy;
   - legal text is NOT written in this document.

5. **Alternative professional contact** (optional)
   - only if an approved professional contact channel exists.

## Constraints

- no promise of response time unless formally approved;
- no file uploads in V1;
- no public opportunity-submission platform or marketplace language.

---

# 12. Dynamic Form Logic

## Principles

- ONE dynamic contact form for all enquiries (document 02, section 8).
- The selected enquiry category determines which additional fields are displayed.
- Fields that are irrelevant to the selected category are hidden, not merely optional.
- Changing category may temporarily retain user-entered values in the interface, so that a visitor who switches back does not lose their input.
- Fields that are hidden because they are not relevant to the currently selected enquiry category must NOT be submitted to the backend, unless they become relevant again before submission.
- Unnecessary hidden personal data must not be retained or transmitted.

## Enquiry categories

- Business Development
- Market Entry
- Partner Search
- Strategic Partnerships
- Publishing & Rights
- Author & Publishing Opportunities
- Other

"International Opportunity" is not a category. International context is captured through Country, Target market / country and the Opportunity description.

## Permanent fields

Shown for every category:

- Name
- Email
- Country
- Enquiry category
- Opportunity description

## Context-dependent fields

- Company / Organisation
- Target market / country
- Work title
- Genre / category
- Publication status
- Existing publisher
- Rights information
- Objective sought
- Short synopsis

## V1 field matrix (approved UX default)

R = required · O = optional · — = hidden

| Field | Business Development | Market Entry | Partner Search | Strategic Partnerships | Publishing & Rights | Author & Publishing Opportunities | Other |
|---|---|---|---|---|---|---|---|
| Name | R | R | R | R | R | R | R |
| Email | R | R | R | R | R | R | R |
| Country | R | R | R | R | R | R | R |
| Company / Organisation | R | R | R | R | O | O | O |
| Target market / country | O | R | R | O | O | O | O |
| Opportunity description | R | R | R | R | R | R* | R |
| Work title | — | — | — | — | — | R | — |
| Genre / category | — | — | — | — | — | R | — |
| Publication status | — | — | — | — | — | R | — |
| Existing publisher | — | — | — | — | — | O | — |
| Short synopsis | — | — | — | — | — | R | — |
| Rights information | — | — | — | — | O | O | — |
| Objective sought | — | — | — | — | — | R | — |

\* For Author & Publishing Opportunities, the general Opportunity description may be presented as brief additional context, since the synopsis and objective carry the main information. Exact labelling belongs to content documents.

This matrix is the approved V1 UX default.

However:

- final validation rules may be refined during Content, Privacy and Implementation work;
- legal / privacy requirements may alter which fields can or must be collected;
- this document defines information architecture, not final technical validation.

Any refinement must respect these fixed rules:

- Company / Organisation is never mandatory for individual authors;
- Target market / country is never mandatory where it is irrelevant.

## Length limits

- All free-text fields have sensible length limits.
- The Opportunity description must be concise and must not invite manuscript-length submissions.
- The Short synopsis has a reasonable length limit.
- Exact limits are defined in content / implementation specifications.

## Category preselection

Contextual CTAs may open the Contact page with a category preselected (for example from the Publishing & Rights page). The visitor can always change the category.

## Validation and errors

- errors are shown clearly next to the relevant field and summarised;
- entered data is preserved when validation fails;
- a submission failure (for example a technical error) shows a clear, non-alarming message and does not lose the visitor's input.

## Spam protection

Some form of spam protection is expected. It must not create significant accessibility barriers. The method is an implementation decision.

---

# 13. Author Enquiry Logic

When the visitor selects **Author & Publishing Opportunities**, the form reveals:

- Work title
- Genre / category
- Publication status
- Existing publisher, if any
- Short synopsis
- Relevant rights information, where known
- Objective sought

## Rules

- the author enquiry is part of V1 and lives inside the single dynamic form;
- there is no separate author submission platform;
- there is no full manuscript upload and no file upload of any kind in V1;
- the Opportunity description and Short synopsis must not become a way to paste an entire manuscript;
- concise guidance near these fields explains that only a short summary is expected and that further material may be requested if the opportunity is selected;
- the form and the Publishing & Rights page both state that submitting an enquiry does not guarantee review, acceptance, introduction to a publisher or publication.

---

# 14. Post-Submission Experience

## Success state

After a successful submission, the visitor sees a clear success state or a dedicated confirmation page, in the language of the form.

It communicates, without legalistic or hostile language, that:

- the enquiry has been received;
- submission does not guarantee acceptance or engagement;
- submission does not guarantee any third-party response or commercial outcome;
- further information may be requested if the opportunity is selected for further discussion.

## Rules

- no response time is promised unless one is later formally approved;
- the success state offers a calm way back into the site (for example Home, What We Do or Founder);
- no upsell, newsletter prompt or social-media prompt;
- whether an automatic confirmation email is sent is an implementation decision; if one is sent, it follows the same principles.

## Implementation option

The success state may be an in-page state or a dedicated confirmation URL in each language. If a dedicated URL is used, it must not be indexed by search engines.

---

# 15. Canonical Engagement / Process Presentation

There is ONE canonical business-development process across the website.

## Canonical public process

Opportunity
→ Qualification
→ Scope & Engagement
→ Assessment
→ Target Definition
→ Selected Outreach
→ Potential Business Conversation
→ Development / Next Step

## Governing principles

- substantive work does NOT begin before Scope & Engagement has been agreed;
- Selected Outreach happens only where it is part of the agreed engagement;
- a Potential Business Conversation depends on the interest and response of the relevant third party;
- no introduction, response, meeting, partnership or commercial result is guaranteed.

## Mapping to the internal process (document 02, section 7)

| Public step | Internal steps (document 02) | Phase |
|---|---|---|
| Opportunity | Initial Conversation | Phase 1 — no professional fee may apply |
| Qualification | Opportunity Qualification | Phase 1 |
| Scope & Engagement | Brief (Engagement Brief / Scope) | Boundary between Phase 1 and Phase 2 |
| Assessment | Assessment | Phase 2 |
| Target Definition | Target Definition; Research / Identification | Phase 2 |
| Selected Outreach | Selected Outreach (where agreed) | Phase 2 |
| Potential Business Conversation | Introduction / Business Conversation | Phase 2 |
| Development / Next Step | Follow-up / Development; Completion, continuation or new mandate | Phase 2 |

## Presentation rules

- **Home** (section 7.5): a visually simplified version of the same sequence. Steps may be visually grouped, but none may be renamed into a different methodology, and the Scope & Engagement boundary must remain visible.
- **What We Do — How We Work** (section 8): the same sequence explained in greater detail.
- No other page may introduce a different process model.
- The process is not presented as a guaranteed pipeline.

---

# 16. Utility / Legal Pages

## Reserved pages

| Page | Purpose | Provisional English route | Provisional Italian route |
|---|---|---|---|
| Privacy Policy | Privacy framework for enquiries and personal data (document 02, section 13) | /en/privacy | /it/privacy |
| Cookie Policy | Only if required by the technologies actually used | /en/cookies | /it/cookie |
| Legal Notice / Imprint | Where appropriate | /en/legal-notice | /it/note-legali |
| Submission Confirmation | Success state, if a dedicated URL is used | /en/contact/thank-you | /it/contatti/grazie |
| 404 | Page not found | — | — |

These routes are a provisional architecture. They remain provisional until document 08 (SEO) and the implementation documents confirm them. The exact Italian utility-page slugs in particular are NOT final.

## Rules

- utility pages do not appear in the primary navigation;
- they are reached from the footer or system flows;
- they are localised in both languages;
- legal and privacy text is NOT invented; it will be prepared separately before launch;
- the need for a Cookie Policy and cookie consent depends on the technologies actually used and will be decided at implementation;
- the 404 page is localised, calm and offers a route back to the Home and main pages.

---

# 17. Mobile Information Architecture

- Content order on mobile is the same as on desktop. No section is removed on mobile.
- The primary navigation collapses into an accessible menu.
- The IT / EN switch remains directly reachable in the header without opening a deep menu.
- The primary CTA remains easily reachable without crowding the header.
- Process sequences are presented vertically and remain readable as a sequence.
- Grouped content (services, areas of interest) stacks into a clear single-column reading order.
- The contact form is single-column; conditional fields appear inline, directly after the category selection.
- Touch targets are comfortably sized.
- Long pages (What We Do, Publishing & Rights, Founder) allow quick orientation, for example through clear section headings and in-page anchors.
- No horizontal scrolling of page content.
- Performance on mobile networks is a priority (document 01, section 19).

---

# 18. Desktop Information Architecture

- Rigorous grid with generous but controlled whitespace.
- Editorial hierarchy through scale, position and typographic contrast, not through decoration.
- Process sequences may be presented horizontally or in an editorial layout, while preserving reading order.
- Service groups use editorial hierarchy, not uniform card grids.
- Comfortable line lengths for long-form text.
- Header remains minimal; persistent (sticky) behaviour, if used, must be unobtrusive.
- Animation is minimal and subtle; content is never hidden behind animation.
- Novelty must never reduce credibility.

---

# 19. CTA Hierarchy

## Primary CTA

- one primary action across the site: start a qualified enquiry, leading to Contact;
- approved primary institutional CTA label concept: **"Discuss an Opportunity"**;
- this label is used consistently across the site (Hero, page CTAs, Final CTA, header action if used);
- "Start a Conversation" is NOT the primary site-wide CTA; it may appear later as secondary supporting copy if appropriate;
- the Italian equivalent is defined in document 05.

## Secondary links

Text-level links, visually subordinate to the primary CTA:

- Explore What We Do;
- Publishing & Rights;
- About the Founder;
- links to specific services within What We Do (for example Market Entry).

## Contextual CTAs

- Publishing & Rights page CTA may preselect the Publishing & Rights or Author & Publishing Opportunities category;
- What We Do service blocks may preselect the corresponding category.

## Rules

- at most one primary CTA per section;
- no competing primary CTAs in the Hero;
- no pop-ups, timed modals or sticky banners promoting contact;
- CTA wording must not promise outcomes.

---

# 20. Accessibility Considerations (Architecture Level)

Official project accessibility target: conformance with **WCAG 2.2 level AA**.

This target is approved. Document 07 (Design System) defines the design-system implementation requirements needed to meet it.

At architecture level:

- each page has one main heading and a logical heading hierarchy;
- page landmarks (header, navigation, main, footer) are used consistently;
- a "skip to content" link is available;
- every page declares its language; the language switch is clearly labelled;
- the whole site is fully keyboard-operable, with visible focus;
- the mobile menu is accessible to keyboard and assistive technologies;
- form fields have persistent visible labels, not placeholder-only labels;
- conditional form fields are revealed in a way that is announced to assistive technologies and keeps a logical focus order;
- errors are described in text, not only by colour;
- process sequences and groupings are understandable without visual layout (for example as ordered lists);
- meaningful images have text alternatives; decorative graphics are hidden from assistive technologies;
- animation respects reduced-motion preferences;
- spam protection must not block users of assistive technologies;
- link and button text is meaningful out of context.

---

# 21. Asset Assumptions

## The architecture does not depend on stock photography

The site must remain visually credible using primarily:

- typography;
- grid;
- whitespace;
- subtle graphic systems;
- restrained abstract elements.

## Forbidden imagery

- handshakes;
- corporate meetings;
- skyscrapers;
- flags;
- business people smiling at laptops;
- generic global maps.

## Reserved places for future assets

- a professional Founder portrait (Home §7.8, Founder page);
- verified publishing / project materials (Publishing & Rights, Founder — Selected Professional Background);
- original editorial imagery;
- original brand graphics.

These assets may be added later. Every section must work without them.

## Brand name

The missing final brand name does not block the architecture. A neutral text placeholder ([Brand]) is assumed during development.

## Design references

- any Behance or other references are inspiration only;
- they may inform high-level principles: hierarchy, editorial rhythm, whitespace, typography contrast, clarity, restrained premium presentation;
- layouts, components, colour palettes, typography, animation, section composition and distinctive visual motifs must never be closely reproduced;
- originality is required.

---

# 22. Institutional Credibility Requirements

This is a governing requirement.

The site must balance:

CONTEMPORARY EDITORIAL QUALITY
+
INTERNATIONAL BUSINESS CLARITY
+
INSTITUTIONAL CREDIBILITY

## The site must feel

- authoritative;
- international;
- precise;
- restrained;
- contemporary;
- professional;
- selective;
- trustworthy.

## The site must NOT feel like

- a creative agency website;
- a startup landing page;
- an influencer site;
- a luxury-fashion website;
- an experimental portfolio;
- a generic consulting template.

## Structural implications

- strong typography, rigorous grids and excellent readability;
- generous but controlled whitespace;
- subtle transitions and minimal animation;
- document-like clarity: a reader from an institution should be able to understand, cite and verify what the brand does;
- every factual statement must be verifiable;
- clear identification of the Founder and, once available, of the legal entity and approved contact details;
- legal and privacy pages present and reachable before launch;
- no exaggerated claims, superlatives or invented proof;
- accessibility and performance treated as signs of professional seriousness.

---

# 23. What Must NOT Appear in V1

- individual service pages;
- audience-specific landing pages;
- testimonials or quotes from clients;
- client or partner logos;
- statistics, counters or success rates;
- case studies;
- invented clients, partnerships, offices, teams or endorsements;
- maps, office lists, country lists or flags implying presence;
- stock business imagery;
- carousels or rotating hero messages;
- multiple competing CTAs in the Hero;
- pop-ups or timed modals;
- pricing;
- blog, insights or articles;
- newsletter sign-up;
- public opportunity marketplace or opportunity listings;
- file or manuscript uploads;
- a separate author submission platform;
- "Author Representation" as a service;
- "International Opportunity" as a contact category;
- language implying regulated agency, brokerage or representation roles;
- chatbots or live chat;
- social-media feeds or embeds;
- invented legal, registration or corporate details;
- promised response times, unless formally approved.

---

# 24. Future Expansion Boundaries

The V1 architecture must allow the following future additions without redesign. None of them is a V1 requirement (document 01, section 18).

| Possible future addition | Architectural provision in V1 |
|---|---|
| Individual service pages | Each service is an addressable anchor in What We Do; future pages can sit under the same path (for example /en/what-we-do/market-entry) |
| Additional languages | Symmetric language prefixes allow new prefixes without restructuring |
| Case studies | Reserved space on the Founder page for verified background; a future section can be added to the navigation |
| Insights / articles | A future section can be added without changing existing URLs |
| Partner or specialist network presentation | Only once such a network actually exists |
| International collaborators or local market specialists | Only once they actually exist |
| Public opportunity submission | Would be a separate future system; the V1 form is not designed as one |
| Newsletter | Footer can accommodate it later |
| Private opportunity area | Separate future system |
| CRM integration | The structured form categories and fields are designed to map cleanly to future CRM records |

## Boundaries

- Future features must not be pre-announced in V1 copy (no "coming soon" sections).
- Primary navigation should remain minimal even as content grows.

---

# 25. Open Decisions That Belong to Later Documents

| Decision | Belongs to |
|---|---|
| Final brand name, logo and wordmark | Brand naming / 04 Brand Positioning |
| Final positioning line for Hero and footer | 04 Brand Positioning |
| Italian equivalent of the approved primary CTA "Discuss an Opportunity" | 05 Content IT |
| Final copy for all pages, in Italian and English | 05 Content IT, 06 Content EN |
| Final Italian page names and navigation labels | 05 Content IT |
| Founder chapter titles and verified Founder facts | 05 / 06, after Founder verification |
| Form field labels, help text and exact length limits | 05 / 06 and implementation specification |
| Final required / optional status of form fields | 05 / 06 and implementation specification |
| Post-submission and error message copy | 05 / 06 |
| Typography, colour, grid, spacing, motion | 07 Design System |
| Design-system implementation requirements for the approved WCAG 2.2 AA target | 07 Design System |
| Visual treatment of process, services and areas of interest | 07 Design System |
| Slugs of utility pages, hreflang, canonical and fallback strategy | 08 SEO |
| Page titles and meta descriptions | 08 SEO |
| Root language routing mechanism | Implementation |
| Form backend, data storage and retention | Implementation, with privacy review |
| Spam protection method | Implementation |
| Automatic confirmation email | Implementation |
| Cookie Policy necessity and consent mechanism | Implementation, depending on technologies used |
| Analytics, if any | Implementation, with privacy review |
| Legal entity details, Legal Notice / Imprint and Privacy Policy text | Separate legal / privacy preparation before launch |
| Approved professional contact channels | Founder decision before launch |
| Response-time commitment, if any | Founder decision |
