// All copy in one place so Jamie (or Claude, in a live vibe-coding session)
// can rewrite the pack in natural language without touching components.

export const pack = {
  brand: {
    name: "First",
    domain: "first.cx",
    tagline: "Be first in the race for talent.",
  },
  role: {
    title: "Founding Engineer",
    location: "Farringdon, EC1V\n(Tuesday and Thursday)",
    employmentType: "Full-time",
    reportsTo: "Luke Morton, Founder & CEO",
    equity: "You'd be employee #6",
    startDate: "ASAP · flexible for notice",
    holiday: "28 days + bank holidays",
    benefits: [
      {
        title: "£1,500 L&D / year",
        body: "No approval, no forms, just spend it",
      },
      {
        title: "Private healthcare",
        body: "Full cover via Vitality",
      },
      {
        title: "Pension matched 5%",
        body: "From day one, no vesting period",
      },
      {
        title: "£2k kit budget",
        body: "MacBook, monitor, chair - you pick",
      },
    ],
    hiringManagerFirstName: "Luke",
    snapshot:
      "Ship product end-to-end at an AI hiring platform that's actually changing how recruiters work. You'll pair with Orsi on architecture, own meaningful surface area, and get close enough to customers that what you build is shaped by real pain, not a Jira ticket.",
  },
  hero: {
    eyebrow: "Our Founding Engineer Job Pack",
    line1: "Hi, we're hiring a",
    line2: "Founding Engineer",
    line3: "at First.",
    subhead:
      "We built this page to cover what you'd need to know to make an educated decision about whether you think we could be the right move for you.",
    ctaPrimary: "Jump to the process",
    ctaSecondary: "Read the role",
  },
  company: {
    heading: "About First",
    body:
      "We're an AI-powered hiring platform for enterprise talent teams. We screen every candidate as they apply, going beyond the CV with smart and customisable AI to manage pipelines - so recruiters can get back to recruiting. Check it out in this video!",
    metrics: [
      { value: "250k+", label: "Applicants processed" },
      { value: "4.6 / 5", label: "Candidate satisfaction" },
      { value: "80%", label: "Less time managing CVs" },
      { value: "2×", label: "More data per applicant" },
    ],
    trustedBy: ["Wayve", "Made Tech", "Axmed", "QuantumBase", "and more!"],
  },
  responsibilities: {
    heading: "What you'll actually do",
    items: [
      "Ship product end-to-end. You write it, you ship it, you own it in production. There's no platform or DevOps team to throw things over the wall to.",
      "Co-decide technical direction with Orsi. You're a peer, not a consultant - if you think a system should be designed differently, you argue for it and she listens.",
      "Translate customer pain into product, directly. Watch sessions, read the support Slack, sit in on calls. We don't filter customer pain through PMs.",
      "Help us hire. Build the rubric and run the technical stages for the engineers who join after you - Orsi shouldn't own every interview forever.",
      "Be the sharpest user of our own AI tools. Claude, Cursor, our own product - push the limits and feed back what's working.",
      "Raise the engineering bar. Code review, technical writing, demo culture. Lead by example.",
    ],
  },
  youAre: {
    heading: "You'll thrive here if…",
    items: [
      "You've shipped product end-to-end at a startup or scale-up before. You've been the one, not part of a team of fifty. You've felt the chaos.",
      "You're full-stack. Comfortable across the whole stack, even if you've got a stronger half.",
      "You care about the user experience as much as the code quality. Technically beautiful but unusable doesn't count as beautiful here.",
      "You're opinionated about good engineering. You have a point of view on testing, architecture and code review - and you can defend it.",
      "You're excited by AI tooling. Claude, Cursor, whatever - not snobby about it, not afraid of it. You want to use it to do the best work of your career.",
      "You're a generalist at heart. The JD is a starting point, not a ceiling.",
    ],
  },
  team: {
    heading: "Meet the team",
    subhead:
      "The people you'll work with from day one.",
    members: [
      {
        name: "Luke Morton",
        role: "Founder & CEO",
        photo: "/luke.jpg",
        bio: "Coding since 13. Previously CTO at Made Tech PLC through to IPO in 2021, growing and leading a team of 500. Built software for 7 startups. Founded First to fix hiring from first principles. Runs on coffee.",
        linkedin: "https://www.linkedin.com/in/lukemorton/",
      },
      {
        name: "Jamie Jay Lyons",
        role: "Founding Growth",
        photo: "/jamie.jpg",
        bio: "Ex-agency recruiter turned in-house TA, now on the founding team at First. Obsessed with candidate experience, structured hiring, and teaching recruiters to vibe code. Plays chess in his downtime.",
        linkedin: "https://www.linkedin.com/in/jamiejaylyons/",
      },
      {
        name: "Orsolya Belasitz",
        role: "Founding Engineer",
        photo: "/orsi.jpg",
        bio: "Full-stack engineer shipping features from day one. Cares about the people using what she builds, and believes the job isn't writing code, it's understanding people. Volunteers with the RNLI, and loves a good board game night.",
        linkedin: "https://www.linkedin.com/in/orsolyabelasitz/",
      },
      {
        name: "Danny Cuaces",
        role: "Founding Customer Success",
        photo: "/danny.jpg",
        bio: "Ex-Apple. Experienced the broken side of hiring first-hand as a candidate, now works to fix it from the inside. Spends his days helping hiring teams make sense of AI and turning customer pain into product wins. Loves to travel, and always has the next trip booked.",
        linkedin: "https://www.linkedin.com/in/dannycuaces/",
      },
    ],
  },
  process: {
    heading: "The interview process",
    subhead:
      "Four touchpoints. Roughly 2–3 weeks end-to-end. You'll know exactly where you stand, what we're assessing for, and how to prep - for every single stage.",
    stages: [
      {
        step: "01",
        title: "Intro call",
        duration: "30 min",
        format: "Video call · Google Meet",
        with: "Jamie, Founding Growth",
        teaser:
          "A real conversation. Mutual signal. No whiteboard nonsense.",
        what:
          "A real conversation - no live coding, no whiteboard, no quiz. We'll share more on First, the role, and why we think you could be great. You'll share what you're optimising for in your next move.",
        assessing: [
          "Clarity on what you're looking for next (and why)",
          "How you talk about the craft of building",
          "Mutual signal: is there something here worth both our time?",
        ],
        prep:
          "Have a version of your story ready - where you've been, what you've learned, and what you want from your next move. Bring three questions you'd genuinely want answered.",
        decision: "Go / no-go within 24 hours, by email. Written feedback either way.",
      },
      {
        step: "02",
        title: "Technical deep-dive",
        duration: "60 min",
        format: "Video call · Google Meet",
        with: "Orsi, Founding Engineer",
        teaser:
          "Orsi digs into real systems you've built. You do the same back to her.",
        what:
          "Not a live coding test. Orsi walks through real systems you've shipped - why you made the choices you did, what you'd do differently now. She'll open a real piece of code you wrote and dig into the specifics. We want to see that you wrote it and you know it cold.",
        assessing: [
          "Depth of engineering judgement - real systems, real choices",
          "How you think about trade-offs - speed vs. quality, build vs. buy, perfect vs. shipped",
          "Code-level fluency on a real piece of code you wrote",
          "Willingness to disagree with Orsi when she's wrong (she sometimes is)",
        ],
        prep:
          "Pick 2–3 projects you're proud of, including at least one that didn't go well. Bring code we can look at if it's open. We care about the how, not the title.",
        decision: "Go / no-go within 3 working days. Orsi writes the feedback.",
      },
      {
        step: "03",
        title: "The working session",
        duration: "90 min (48 hrs async prep + 60 min live)",
        format: "Async brief + live walkthrough",
        with: "Luke and Orsi",
        teaser:
          "A real problem we're working on. 48 hours to design it. £150 for your time. No gotchas.",
        what:
          "We'll send you a real problem we're working on right now - an API design, a data model, a tricky migration, whatever's live for us that week. You'll have 48 hours to prep a design, then we walk through it together, live.",
        assessing: [
          "System design instinct - where you start, and whether you ask the right clarifying questions before diving in",
          "Prioritisation under time pressure - 48 hours, not 48 days. What's the MVP, what's nice-to-have",
          "Written clarity - can another engineer pick up your design from the doc alone",
          "How you handle new information mid-conversation - we may throw curveballs in the live session",
        ],
        prep:
          "We send the brief, the rubric we'll score against, and a £150 voucher to cover your time - before you start. Use whatever tools you'd actually use on the job. AI included, obviously - assessing engineers in 2026 without it tests the wrong skill.",
        decision: "Go / no-go within 5 working days. You'll receive your scorecard with feedback.",
      },
      {
        step: "04",
        title: "Founder close",
        duration: "30 min",
        format: "Video or in-person (your choice)",
        with: "Luke, Founder & CEO",
        teaser:
          "Final check both ways. Scorecard shared with you. Bring the hard questions.",
        what:
          "A final conversation to make sure we're both excited. We'll talk through the first 90 days, share our scorecard from the process, and give you space to ask anything you still want answered.",
        assessing: [
          "Long-term alignment - are we building the same thing for the next three to five years?",
          "Ambition fit - is this the size of the bet you want to take?",
          "Genuine curiosity about the business, not just the role",
        ],
        prep:
          "Bring the hard questions. Runway, strategy, recent misses, how technical decisions actually get made, what happens when you and Orsi disagree. Nothing's off limits.",
        decision: "Offer or no-offer within 24 hours. Written feedback either way, every time.",
      },
    ],
  },
  scorecard: {
    heading: "How we decide",
    subhead:
      "Every interviewer scores you against the same four competencies, on the same 1–5 rubric. No vibes. No secret rooms.",
    competencies: [
      {
        name: "Craft",
        body:
          "Depth of engineering judgement. Can you design a system, ship it end-to-end, and explain why you made the choices you did?",
      },
      {
        name: "Judgement",
        body:
          "Quality of the trade-offs you make. Speed vs. quality, build vs. buy, perfect vs. shipped.",
      },
      {
        name: "Collaboration",
        body:
          "How you pair with Orsi on architecture, push back when she's wrong, and stay close to customers instead of building in a vacuum.",
      },
      {
        name: "Drive",
        body:
          "Ownership, bias to action, and the instinct to go one step further than the ticket asks.",
      },
    ],
    rubric: [
      { score: "5", label: "Exceeds bar", note: "Would raise the bar of the team" },
      { score: "4", label: "Meets bar", note: "Clear hire on this competency" },
      { score: "3", label: "Partial", note: "Signal of the competency, but gaps" },
      { score: "2", label: "Below bar", note: "Unlikely to clear the bar in this area" },
      { score: "1", label: "Concern", note: "Active concern - blocker to offer" },
    ],
    decisionProcess:
      "Scores go into a shared scorecard that the hiring team debriefs together after your final stage. We'd rather talk for 90 minutes and get it right than decide in 10 minutes and get it wrong. You can request your full scorecard (with names redacted) at any point - before or after the process ends.",
  },
  pledge: {
    heading: "Our promise to you",
    subhead:
      "Things we won't do. Things you can hold us to. Screenshot it, forward it back to us if we slip.",
    wontDo: [
      {
        title: "We won't ghost you",
        body:
          "Every stage has a decision SLA. If we miss it, {hiringManager} will personally tell you why and what's holding things up.",
      },
      {
        title: "We won't ask brain-teaser questions",
        body:
          "No manhole covers. No weight of the Empire State Building. Nothing that doesn't reflect what this job actually is.",
      },
      {
        title: "We won't do unpaid take-homes",
        body:
          "We pay £150 for your time in stage 3. Every candidate, every time. No exceptions, even if we don't move forward.",
      },
      {
        title: "We won't surprise you on compensation",
        body:
          "The band is published on this page. We'll talk numbers properly in stage 1, not as a surprise on the offer call.",
      },
      {
        title: "We won't hide behind 'culture fit'",
        body:
          "If we say no, we'll tell you what was missing against the rubric. Specifically. No 'culture fit', no vague reasons.",
      },
      {
        title: "We won't pressure-close you",
        body:
          "Take the offer home. Sleep on it. Ask for another conversation. We want a yes you mean, not a yes you regret.",
      },
    ],
  },
  ai: {
    heading: "AI in the process - ours and yours",
    subhead:
      "We're an AI hiring platform. So we're going to be upfront about where we use AI, where we don't, and where you're welcome to use it too.",
    ours: {
      title: "Our side",
      items: [
        {
          name: "Screening applications",
          body: "Our product scores every application against the scorecard. A human reviews every shortlist before anyone is rejected.",
        },
        {
          name: "Consented notetaking",
          body: "A notetaker joins interviews so the panel can look you in the eye. You'll see it in the call - ask us to turn it off anytime.",
        },
        {
          name: "Debrief summaries",
          body: "AI drafts a first-pass summary for the hiring team. Humans read it critically and overwrite it before any decision.",
        },
      ],
    },
    oursNot: {
      title: "Where we don't",
      items: [
        "No AI ever makes the final decisions. Humans do, on the record.",
        "No AI personality scoring or culture-fit assessments. Just signal against the scorecard.",
        "No AI summaries sent without a human first reading and editing them.",
      ],
    },
    yours: {
      title: "Your side",
      items: [
        {
          name: "Prep & research",
          body: "Use Claude, ChatGPT, whatever. Draft answers, pressure-test stories, research us. We'd be suspicious if you didn't.",
        },
        {
          name: "The working session",
          body: "Use every tool you'd use on the job. Your editor, your AI assistant, your usual stack. We test the engineer, not the memory.",
        },
        {
          name: "Better questions for us",
          body: "Use AI to generate questions for our founders. The hardest ones we've had were clearly co-written with a model. We loved them.",
        },
      ],
    },
    yoursNot: {
      title: "Where we'll ask you not to",
      items: [
        "Don't route live interviews through real-time answer-generation tools. We want to hear you, not your copilot.",
        "Don't fabricate a CV or a project. The technical deep-dive will catch it.",
        "Don't paste our brief into a model without adding your own judgement. The interesting bit is you.",
      ],
    },
  },
  prep: {
    heading: "How to prepare",
    items: [
      {
        title: "Read the room",
        body: "Spend 10 minutes on first.cx. You don't need to memorise it - we want your instincts, not a recital.",
      },
      {
        title: "Bring stories",
        body: "We're structured interviewers. Come with 3–4 real, specific examples from your engineering work - good and bad.",
      },
      {
        title: "Ask hard questions",
        body: "The best candidates interview us right back. Runway, culture, roadmap, missteps - nothing is off limits.",
      },
      {
        title: "Don't dress up for us",
        body: "Wear whatever you'd wear on a regular Tuesday. We hire adults.",
      },
    ],
  },
  comp: {
    heading: "Compensation & benefits",
    headline: "£100,000 – £130,000 base · meaningful equity",
    items: [
      { label: "Base salary", value: "£100,000 – £130,000 depending on experience" },
      { label: "Equity", value: "Meaningful stake - you're early" },
      { label: "Pension", value: "Matched to 5%" },
      { label: "Holiday", value: "28 days + bank holidays" },
      { label: "Work setup", value: "Hybrid from Farringdon - Tuesday + Thursday in office" },
      { label: "Kit", value: "Whatever hardware helps you do your best work" },
      { label: "L&D", value: "£1,500 / year, no approval needed" },
      { label: "Health", value: "Private healthcare via Vitality" },
    ],
  },
  glassdoor: {
    heading: "What people say about working here",
    subhead:
      "From Glassdoor - the people currently on the other side of this pack.",
    overall: {
      rating: 4.7,
      reviews: 43,
      recommend: 96,
      ceoApproval: 98,
    },
    categories: [
      { name: "Culture & Values", score: 4.9 },
      { name: "Diversity & Inclusion", score: 4.7 },
      { name: "Work / Life Balance", score: 4.6 },
      { name: "Senior Management", score: 4.8 },
      { name: "Compensation & Benefits", score: 4.5 },
      { name: "Career Opportunities", score: 4.8 },
    ],
    reviews: [
      {
        rating: 5,
        role: "Senior Software Engineer",
        employment: "Current Employee · London",
        date: "February 2026",
        headline: "The best hiring process I've ever been on, from both sides",
        pros:
          "Direct line to founders. Ambitious roadmap that's actually real. The candidate experience they gave me is the same care I've seen them give employees every week since I joined. My offer conversation lasted 45 minutes and no one rushed me.",
        cons:
          "Growing fast so some processes are being built as you go. If you need heavy structure from day one, this isn't it yet - you'll help build it.",
      },
      {
        rating: 5,
        role: "Founding Sales",
        employment: "Current Employee · Remote UK",
        date: "January 2026",
        headline: "Every function actually talks to every other function",
        pros:
          "I've never worked somewhere product, recruiting, and GTM all talk this much. Comp is genuinely fair. Equity is real. Leadership shares the full picture at every all-hands - revenue, runway, headcount plans.",
        cons:
          "High standards. You feel them. If you're not into being held to them, it'll feel intense.",
      },
      {
        rating: 4,
        role: "Customer Success Manager",
        employment: "Current Employee · London",
        date: "March 2026",
        headline: "Radical transparency isn't a marketing line here",
        pros:
          "Every quarter they share the numbers with the whole team. Benefits are thoughtful, not box-ticking. The founders are remarkably accessible - I've never waited more than a day for a 1:1.",
        cons:
          "The office is hot-desk and sometimes fills up on Tuesdays. Minor.",
      },
    ],
    disclaimer:
      "Reviews shown above are illustrative examples created for this demo page. On a live pack, we'd embed real reviews from glassdoor.co.uk/first.",
  },
  next: {
    heading: "What happens next",
    body:
      "If you like what you've read, book a call and we'll take it from there. No pressure, no hard sell - just a conversation to see if there's a fit. We sent you this and my Calendly because we're keen to talk. Ball's in your court.",
    ctaLabel: "Book your call",
    ctaHref: "/book",
  },
} as const;

export type Pack = typeof pack;
