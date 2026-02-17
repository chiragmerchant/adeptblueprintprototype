// data.js

const blueprint = {
  slides: [
    {
      title: "ADEPT: Advanced Dynamic Enhanced Presentation Tools",
      subtitle: "Accelerating Mission Critical Communication",
      presenter: "The Team | Date: Feb 28, 2026",
      oneLineProblem: "Bridging the gap between complex technical data and immediate leadership understanding.",
      visual: "A sleek, abstract visualization of data streams converging into a clear focal point."
    },
    {
      headline: "The Data-Decision Paradox",
      text: "World-class intelligence; Manual, inefficient delivery.",
      visual: "Split screen: Complex raw data vs. cluttered PowerPoint slide.",
      talkingPoints: [
        "Right now, DTRA generates some of the most sophisticated intelligence on the planet.",
        "But our 'last mile' of communication is broken.",
        "We take brilliant data and bury it in manual, cluttered slides.",
        "We call this the 'Data-Decision Paradox'—we have the truth, but we struggle to see it."
      ]
    },
    {
      headline: "The Subject Matter Expert",
      text: "Mission-driven. Time-constrained. Needs to focus on threats, not formatting.",
      visual: "Photo of a focused researcher in a command center.",
      talkingPoints: [
        "Think about our lead researchers.",
        "They are mission-driven and incredibly pressed for time.",
        "Every hour they spend aligning text boxes or choosing fonts is an hour they aren't analyzing threats.",
        "They want to tell their story, but the current tools fight them every step of the way."
      ]
    },
    {
      headline: "The Cost of Inefficiency",
      text: "Interpretation Delay = Strategy Gap.",
      visual: "Timeline showing 'Time to Decision' extending dangerously long.",
      talkingPoints: [
        "This isn't just an annoyance; it's a liability.",
        "When a briefing is unclear, leadership hesitates.",
        "That hesitation creates a 'Strategy Gap.'",
        "In our line of work, a delay in understanding isn't just lost time—it can mean a failure to act on a critical threat."
      ]
    },
    {
      headline: "Enter ADEPT",
      text: "Automated Narrative Intelligence. Intent-based design.",
      visual: "Sleek ADEPT logo/interface shot.",
      talkingPoints: [
        "This is why we built ADEPT.",
        "It is not just a template; it is an intelligent application.",
        "It automates the heavy lifting of design.",
        "But more importantly, it structures the story based on the user's intent—whether they need to inform you, persuade you, or get a decision."
      ]
    },
    {
      headline: "The Design Challenge",
      text: "Balancing Standardization (Speed) vs. Creativity (Engagement).",
      visual: "Diagram showing the tension between 'Rigid' and 'Flexible.'",
      talkingPoints: [
        "Building this wasn't easy.",
        "We faced a core conflict: How do we guarantee military-grade standardization without stifling the researcher's voice?",
        "We had to engineer a 'flex-rigid' system—rigid enough for speed, but flexible enough for complex storytelling."
      ]
    },
    {
      headline: "Convergence of Expertise",
      text: "Narrative Strategy + UX Design + Threat Analysis.",
      visual: "Icons representing the three pillars.",
      talkingPoints: [
        "We realized code alone couldn't solve this.",
        "We brought together three distinct disciplines: Narrative Strategists to build the logic, UX Designers to simplify the interface, and Threat Analysts to ensure the output speaks your language."
      ]
    },
    {
      headline: "The Narrative Engine",
      text: "1. Input Data -> 2. Select Framework -> 3. Generate Deck.",
      visual: "3-step process flow.",
      talkingPoints: [
        "Here is the magic.",
        "The user simply uploads their raw data and selects a narrative framework—like '3-Act Structure' or 'Situation-Complication-Resolution.'",
        "ADEPT does the rest.",
        "It instantly generates a deck that is visually stunning and logically sound."
      ]
    },
    {
      headline: "Recovered Time, Increased Clarity",
      text: "70% reduction in creation time. Higher comprehension scores.",
      visual: "Bar charts comparing 'Hours Spent' and 'Comprehension.'",
      talkingPoints: [
        "The results from our alpha tests are clear.",
        "We aren't just saving time—though a 70% reduction is massive.",
        "We are increasing comprehension.",
        "Leaders are understanding the 'so what' of technical briefings faster than ever before."
      ]
    },
    {
      headline: "A New Standard for Briefings",
      text: "Consistent, compelling, story-driven communication.",
      visual: "Mock-up of a high-tech briefing room.",
      talkingPoints: [
        "Imagine a future where every briefing you receive is this clear.",
        "Where you never have to decipher a slide, only decide on the content.",
        "That is the standard ADEPT establishes for the Agency."
      ]
    },
    {
      headline: "Deploy ADEPT",
      text: "Authorization requested for Pilot Rollout (Forward Threat Division).",
      visual: '"Launch" button or roadmap graphic.',
      talkingPoints: [
        "The tool is ready.",
        "The team is ready.",
        "We are asking for your authorization today to deploy the pilot program with the Forward Threat Division starting next quarter."
      ]
    },
    {
      headline: "Questions & Discussion",
      talkingPoints: [
        "Thank you.",
        "We're happy to discuss the rollout plan or demonstrate the narrative engine in real-time."
      ]
    }
  ]
};

const STORAGE_KEY = 'adept_blueprint_edits_3ti';

const alternatives = {
  // Slide 0
  "0-title": [
    "ADEPT: Advanced Dynamic Enhanced Presentation Tools", // original
    "ADEPT – Intelligent Tools for Mission-Critical Briefings",
    "ADEPT: From Complex Data to Instant Leadership Clarity",
    "ADEPT: Next-Generation Strategic Communication Platform"
  ],
  "0-subtitle": [
    "Accelerating Mission Critical Communication", // original
    "Faster Clarity for High-Stakes Decisions",
    "Turning Intelligence into Instant Understanding",
    "Empowering Leadership with Clear, Rapid Insight"
  ],
  "0-presenter": [
    "The Team | Date: Feb 28, 2026", // original
    "ADEPT Development Team | February 2026",
    "Forward Threat Analysis Group | February 2026",
    "DTRA Presentation Team | 2026"
  ],
  "0-oneLineProblem": [
    "Bridging the gap between complex technical data and immediate leadership understanding.", // original
    "World-class intelligence lost in slow, cluttered delivery.",
    "Brilliant analysis buried under manual slide formatting burdens.",
    "High-value threat data fails to reach decision-makers quickly and clearly."
  ],
  "0-visual": [
    "A sleek, abstract visualization of data streams converging into a clear focal point.", // original
    "Dynamic flow of chaotic data narrowing into a sharp, illuminated decision point",
    "Futuristic digital streams merging into a single bright insight icon",
    "Abstract bridge connecting messy data clouds to a crystal-clear target"
  ],

  // Slide 1
  "1-headline": [
    "The Data-Decision Paradox", // original
    "World-Class Data, Third-World Delivery",
    "The Last-Mile Intelligence Failure",
    "Buried Truth: Great Analysis, Poor Communication"
  ],
  "1-text": [
    "World-class intelligence; Manual, inefficient delivery.", // original
    "Elite analysis trapped in outdated, manual slide creation",
    "Sophisticated intel lost in formatting and clutter",
    "Brilliant insights undermined by slow, messy presentation tools"
  ],
  "1-visual": [
    "Split screen: Complex raw data vs. cluttered PowerPoint slide.", // original
    "Left: clean data waterfall → Right: chaotic, over-animated slide mess",
    "Contrast: elegant data visualization vs. bullet-point overload nightmare",
    "Before/after: pristine intelligence feed vs. slide graveyard"
  ],
  "1-talkingPoints-0": [
    "Right now, DTRA generates some of the most sophisticated intelligence on the planet.", // original
    "Today DTRA produces extremely high-quality, world-leading intelligence.",
    "DTRA creates some of the most advanced threat analysis available anywhere.",
    "Our agency generates cutting-edge intelligence of global significance."
  ],
  "1-talkingPoints-1": [
    "But our 'last mile' of communication is broken.", // original
    "Yet the final step — communicating it — is failing badly.",
    "However, our delivery mechanism (the last mile) is critically flawed.",
    "But getting that insight to decision-makers is where we fall short."
  ],
  "1-talkingPoints-2": [
    "We take brilliant data and bury it in manual, cluttered slides.", // original
    "We bury exceptional analysis under manual, overcrowded slides.",
    "Outstanding data gets lost in hand-crafted, cluttered presentations.",
    "We hide brilliant insights behind tedious, messy slide decks."
  ],
  "1-talkingPoints-3": [
    "We call this the 'Data-Decision Paradox'—we have the truth, but we struggle to see it.", // original
    "We named it the Data-Decision Paradox: truth exists, but clarity is missing.",
    "This is our 'Data-Decision Paradox': perfect intel, imperfect delivery.",
    "The paradox: we possess the truth, yet decision-makers can't easily see it."
  ],

  // Slide 2
  "2-headline": [
    "The Subject Matter Expert", // original
    "The Overburdened SME",
    "Researchers vs. PowerPoint",
    "Mission Focus vs. Slide Wars"
  ],
  "2-text": [
    "Mission-driven. Time-constrained. Needs to focus on threats, not formatting.", // original
    "Brilliant minds forced to fight formatting instead of threats.",
    "Mission-critical experts wasting hours on slide alignment instead of analysis.",
    "Time-starved researchers battling tools instead of adversaries."
  ],
  "2-visual": [
    "Photo of a focused researcher in a command center.", // original
    "Intense analyst at workstation, surrounded by screens and data",
    "Serious scientist in high-tech ops room, deep in concentration",
    "Command-center expert reviewing threat displays"
  ],
  "2-talkingPoints-0": [
    "Think about our lead researchers.", // original
    "Consider our top analysts and subject matter experts.",
    "Picture the scientists and engineers leading our threat work.",
    "Think of the highly skilled researchers driving our mission."
  ],
  "2-talkingPoints-1": [
    "They are mission-driven and incredibly pressed for time.", // original
    "They are deeply committed but severely time-constrained.",
    "These experts are mission-focused and under constant time pressure.",
    "Highly motivated professionals working against tight deadlines."
  ],
  "2-talkingPoints-2": [
    "Every hour they spend aligning text boxes or choosing fonts is an hour they aren't analyzing threats.", // original
    "Time spent on slide formatting is time stolen from threat analysis.",
    "Hours lost to text alignment = hours not spent on national security.",
    "Font selection and box tweaking directly reduces threat-detection time."
  ],
  "2-talkingPoints-3": [
    "They want to tell their story, but the current tools fight them every step of the way.", // original
    "They want to communicate clearly, but tools actively hinder them.",
    "Their goal is effective storytelling — current software resists.",
    "They need to convey insight, but tools create friction at every turn."
  ],

  // Slide 3
  "3-headline": [
    "The Cost of Inefficiency", // original
    "Inefficiency = Delayed Decisions = Increased Risk",
    "The Hidden Cost of Poor Presentation Tools",
    "When Slide Clutter Creates Strategic Delay"
  ],
  "3-text": [
    "Interpretation Delay = Strategy Gap.", // original
    "Delayed understanding → delayed action → widened strategy gap.",
    "Unclear slides create hesitation and strategic vulnerability.",
    "Slow comprehension = dangerous pause in decision-making."
  ],
  "3-visual": [
    "Timeline showing 'Time to Decision' extending dangerously long.", // original
    "Red timeline stretching far past the threat window",
    "Extended hourglass with decision point far in the future",
    "Clock ticking while leadership waits for clarity"
  ],
  "3-talkingPoints-0": [
    "This isn't just an annoyance; it's a liability.", // original
    "This goes beyond frustration — it creates real operational risk.",
    "Far more than inconvenience: this is a security vulnerability.",
    "Not mere irritation — this inefficiency is a strategic liability."
  ],
  "3-talkingPoints-1": [
    "When a briefing is unclear, leadership hesitates.", // original
    "Ambiguous slides cause decision-makers to pause.",
    "Unclear communication leads to leadership indecision.",
    "Poor clarity triggers hesitation at the highest levels."
  ],
  "3-talkingPoints-2": [
    "That hesitation creates a 'Strategy Gap.'", // original
    "Hesitation widens the dangerous strategy gap.",
    "This pause opens a critical gap in our strategic posture.",
    "Indecision from unclear briefings creates strategic vulnerability."
  ],
  "3-talkingPoints-3": [
    "In our line of work, a delay in understanding isn't just lost time—it can mean a failure to act on a critical threat.", // original
    "In our domain, delayed comprehension can equal missed threat response.",
    "Here, time lost to confusion can translate to threats left unaddressed.",
    "In threat analysis, slow understanding risks catastrophic inaction."
  ],

  // Slide 4
  "4-headline": [
    "Enter ADEPT", // original
    "Introducing ADEPT",
    "Welcome to ADEPT",
    "Now Comes ADEPT"
  ],
  "4-text": [
    "Automated Narrative Intelligence. Intent-based design.", // original
    "Intelligent automation + user-intent-driven structure",
    "Automated storytelling powered by user intent",
    "Smart narrative engine with intent-aware design"
  ],
  "4-visual": [
    "Sleek ADEPT logo/interface shot.", // original
    "Clean ADEPT dashboard with elegant interface elements",
    "Modern ADEPT UI showing intelligent slide generation",
    "Polished ADEPT application screenshot"
  ],
  "4-talkingPoints-0": [
    "This is why we built ADEPT.", // original
    "That's exactly why ADEPT exists.",
    "This problem drove the creation of ADEPT.",
    "ADEPT was developed precisely to solve this."
  ],
  "4-talkingPoints-1": [
    "It is not just a template; it is an intelligent application.", // original
    "ADEPT isn't merely a template — it's a smart system.",
    "This goes beyond templates: ADEPT is truly intelligent software.",
    "Far more than a slide deck — ADEPT is an intelligent tool."
  ],
  "4-talkingPoints-2": [
    "It automates the heavy lifting of design.", // original
    "It handles the tedious design work automatically.",
    "ADEPT takes care of layout, formatting, and polish.",
    "All the design drudgery is fully automated."
  ],
  "4-talkingPoints-3": [
    "But more importantly, it structures the story based on the user's intent—whether they need to inform you, persuade you, or get a decision.", // original
    "Even more critically, it organizes content around your goal: inform, persuade, or decide.",
    "Most importantly: story structure adapts to your intent — inform, convince, or drive action.",
    "Key advantage: narrative shaped by purpose — to inform, persuade, or secure a decision."
  ],

  // Slide 5
  "5-headline": [
    "The Design Challenge", // original
    "Balancing Speed vs. Flexibility",
    "Standardization vs. Creativity",
    "Rigid Structure vs. Expressive Storytelling"
  ],
  "5-text": [
    "Balancing Standardization (Speed) vs. Creativity (Engagement).", // original
    "Standardization for speed vs. flexibility for engagement",
    "Military-grade consistency vs. compelling storytelling",
    "Fast templates vs. researcher voice and creativity"
  ],
  "5-visual": [
    "Diagram showing the tension between 'Rigid' and 'Flexible.'", // original
    "Balance scale: rigid templates on one side, creative expression on the other",
    "Spectrum graphic from 'Rigid Military Standard' to 'Flexible Narrative Freedom'",
    "Tension diagram: speed/consistency vs. engagement/voice"
  ],
  "5-talkingPoints-0": [
    "Building this wasn't easy.", // original
    "This was not a simple project.",
    "Development was challenging.",
    "Creating ADEPT required significant effort."
  ],
  "5-talkingPoints-1": [
    "We faced a core conflict: How do we guarantee military-grade standardization without stifling the researcher's voice?", // original
    "Central dilemma: enforce standardization without silencing the expert's unique perspective.",
    "Key tension: military consistency vs. preserving researcher narrative voice.",
    "Core challenge: rigid standards that don't crush individual storytelling."
  ],
  "5-talkingPoints-2": [
    "We had to engineer a 'flex-rigid' system—rigid enough for speed, but flexible enough for complex storytelling.", // original
    "Solution: a 'flex-rigid' architecture — fast and standardized, yet adaptable for rich narratives.",
    "We built a hybrid: rigid for efficiency, flexible for sophisticated communication.",
    "Engineered balance: military-grade speed with storytelling freedom."
  ],

  // Slide 6
  "6-headline": [
    "Convergence of Expertise", // original
    "Three Pillars United",
    "Expertise Convergence",
    "Multidisciplinary Breakthrough"
  ],
  "6-text": [
    "Narrative Strategy + UX Design + Threat Analysis.", // original
    "Storytelling logic + intuitive interface + domain expertise",
    "Narrative engineering + user experience + threat knowledge",
    "Strategic communication + UX + real-world threat insight"
  ],
  "6-visual": [
    "Icons representing the three pillars.", // original
    "Three interlocking icons: story structure, UI simplicity, threat analysis symbol",
    "Triad diagram showing narrative, design, and intelligence convergence",
    "Three connected pillars: narrative, UX, threat expertise"
  ],
  "6-talkingPoints-0": [
    "We realized code alone couldn't solve this.", // original
    "Pure software engineering wasn't enough.",
    "This problem required more than just coding.",
    "Technology by itself couldn't address the full challenge."
  ],
  "6-talkingPoints-1": [
    "We brought together three distinct disciplines: Narrative Strategists to build the logic, UX Designers to simplify the interface, and Threat Analysts to ensure the output speaks your language.", // original
    "Solution: combined narrative experts for story logic, UX specialists for ease-of-use, and threat analysts for domain-accurate language.",
    "We united three fields: narrative strategists for structure, UX designers for simplicity, threat analysts for authentic voice.",
    "Multidisciplinary team: story architects, interface experts, and intelligence professionals working in harmony."
  ],

  // Slide 7
  "7-headline": [
    "The Narrative Engine", // original
    "ADEPT's Narrative Intelligence Core",
    "The Story Generation Engine",
    "Intelligent Narrative Builder"
  ],
  "7-text": [
    "1. Input Data -> 2. Select Framework -> 3. Generate Deck.", // original
    "Upload data → Choose narrative structure → Instant polished deck",
    "Raw input → Framework selection → Automatically generated presentation",
    "Data in → Intent/framework → Beautiful, logical slides out"
  ],
  "7-visual": [
    "3-step process flow.", // original
    "Clean three-step horizontal flow diagram: input → framework → output",
    "Simple numbered process graphic: 1. Data, 2. Structure, 3. Deck",
    "Elegant pipeline visualization of the narrative engine workflow"
  ],
  "7-talkingPoints-0": [
    "Here is the magic.", // original
    "This is where the real power lies.",
    "Now comes the transformative part.",
    "This is the breakthrough moment."
  ],
  "7-talkingPoints-1": [
    "The user simply uploads their raw data and selects a narrative framework—like '3-Act Structure' or 'Situation-Complication-Resolution.'", // original
    "Users upload data and pick a proven structure (3-Act, SCR, etc.).",
    "Just upload content and choose from established narrative models.",
    "Simple: upload raw information, select storytelling framework."
  ],
  "7-talkingPoints-2": [
    "ADEPT does the rest.", // original
    "ADEPT handles everything else automatically.",
    "The system takes over from there.",
    "ADEPT generates the complete deck instantly."
  ],
  "7-talkingPoints-3": [
    "It instantly generates a deck that is visually stunning and logically sound.", // original
    "Produces beautiful, coherent slides in seconds.",
    "Creates visually compelling and structurally perfect presentations.",
    "Delivers stunning design + airtight logical flow — instantly."
  ],

  // Slide 8
  "8-headline": [
    "Recovered Time, Increased Clarity", // original
    "Time Saved, Understanding Amplified",
    "70% Faster Creation + Better Comprehension",
    "Reclaimed Hours + Sharper Leadership Insight"
  ],
  "8-text": [
    "70% reduction in creation time. Higher comprehension scores.", // original
    "70% less time building decks + significantly improved understanding",
    "Cut creation time by 70% while boosting comprehension metrics",
    "Massive time savings + measurably clearer briefings"
  ],
  "8-visual": [
    "Bar charts comparing 'Hours Spent' and 'Comprehension.'", // original
    "Side-by-side bar graph: old hours vs. new hours + comprehension lift",
    "Before/after bars showing time reduction and clarity improvement",
    "Dual-axis chart: time saved (left) + comprehension gain (right)"
  ],
  "8-talkingPoints-0": [
    "The results from our alpha tests are clear.", // original
    "Alpha testing delivered unambiguous results.",
    "Early tests produced decisive outcomes.",
    "Pilot results speak for themselves."
  ],
  "8-talkingPoints-1": [
    "We aren't just saving time—though a 70% reduction is massive.", // original
    "Time savings alone are huge (70%), but that's not the whole story.",
    "70% faster creation is impressive — but there's more.",
    "Massive time savings (70%) are only part of the benefit."
  ],
  "8-talkingPoints-2": [
    "We are increasing comprehension.", // original
    "We're dramatically improving audience understanding.",
    "Comprehension scores are significantly higher.",
    "Leaders grasp the message much faster and clearer."
  ],
  "8-talkingPoints-3": [
    "Leaders are understanding the 'so what' of technical briefings faster than ever before.", // original
    "Decision-makers now quickly grasp the key takeaway.",
    "Leadership extracts the 'so what' almost immediately.",
    "Technical content becomes instantly actionable for leaders."
  ],

  // Slide 9
  "9-headline": [
    "A New Standard for Briefings", // original
    "The Future of Agency Briefings",
    "Setting the New Briefing Standard",
    "Redefining How We Communicate Threats"
  ],
  "9-text": [
    "Consistent, compelling, story-driven communication.", // original
    "Uniform, engaging, narrative-focused presentations",
    "Standardized yet powerful, story-centered delivery",
    "Reliable, captivating, purpose-driven briefings"
  ],
  "9-visual": [
    "Mock-up of a high-tech briefing room.", // original
    "Futuristic briefing room with large clear displays",
    "Modern command center with sleek, readable slides",
    "High-tech ops room showing crisp, professional presentation"
  ],
  "9-talkingPoints-0": [
    "Imagine a future where every briefing you receive is this clear.", // original
    "Picture every briefing being this transparent and effective.",
    "Envision a world of consistently clear, high-impact briefings.",
    "Imagine leadership never struggling to understand slides again."
  ],
  "9-talkingPoints-1": [
    "Where you never have to decipher a slide, only decide on the content.", // original
    "No more decoding slides — just make decisions.",
    "Slides become transparent; only the decision remains.",
    "Focus shifts from understanding slides to acting on them."
  ],
  "9-talkingPoints-2": [
    "That is the standard ADEPT establishes for the Agency.", // original
    "This is the new benchmark ADEPT sets Agency-wide.",
    "ADEPT defines the future standard for DTRA briefings.",
    "This clarity becomes the Agency norm with ADEPT."
  ],

  // Slide 10
  "10-headline": [
    "Deploy ADEPT", // original
    "Time to Deploy ADEPT",
    "Roll Out ADEPT Now",
    "Authorize ADEPT Pilot"
  ],
  "10-text": [
    "Authorization requested for Pilot Rollout (Forward Threat Division).", // original
    "Requesting approval for Forward Threat Division pilot",
    "Seeking authorization to launch pilot in Forward Threat",
    "Pilot deployment authorization requested – Forward Threat Division"
  ],
  "10-visual": [
    "\"Launch\" button or roadmap graphic.", // original
    "Prominent green 'Launch ADEPT' button with timeline",
    "Roadmap graphic showing pilot rollout phases",
    "Stylized launch button with deployment timeline"
  ],
  "10-talkingPoints-0": [
    "The tool is ready.", // original
    "ADEPT is fully prepared and tested.",
    "The system is complete and ready for use.",
    "ADEPT stands ready for deployment."
  ],
  "10-talkingPoints-1": [
    "The team is ready.", // original
    "Our team is prepared and eager to deploy.",
    "Development team is standing by for rollout.",
    "The ADEPT team is fully mobilized."
  ],
  "10-talkingPoints-2": [
    "We are asking for your authorization today to deploy the pilot program with the Forward Threat Division starting next quarter.", // original
    "We respectfully request authorization today to begin the Forward Threat Division pilot next quarter.",
    "Today we seek your approval to launch the pilot in Forward Threat next quarter.",
    "We request immediate authorization for next-quarter pilot deployment in Forward Threat Division."
  ],

  // Slide 11
  "11-headline": [
    "Questions & Discussion", // original
    "Q&A and Next Steps",
    "Open Floor for Questions",
    "Discussion & Path Forward"
  ],
  "11-talkingPoints-0": [
    "Thank you.", // original
    "Thank you for your time and attention.",
    "Appreciate you joining us today.",
    "Thank you for considering ADEPT."
  ],
  "11-talkingPoints-1": [
    "We're happy to discuss the rollout plan or demonstrate the narrative engine in real-time.", // original
    "Happy to walk through the rollout plan or show a live demo.",
    "We're ready to discuss deployment details or run a real-time demo.",
    "Open to questions on rollout or live narrative engine demonstration."
  ]
};