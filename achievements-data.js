// Edit this file to add, remove, reorder, or change achievements shown on
// the homepage timeline. No HTML knowledge needed -- just edit the fields
// below. Order in this array = display order (top to bottom).
//
// Fields:
//   icon         - an emoji shown until a real photo is added (see photos/README.md)
//   photo        - path to the photo file for this achievement (doesn't need to
//                  exist yet -- the icon keeps showing until it does)
//   photoCaption - optional short caption shown under the photo (e.g. "Graduation
//                  day, Stuttgart"). Leave as "" for no caption.
//   title        - the heading
//   meta         - the small line under the heading (organization / place / dates)
//   text         - the description paragraph. Keep it roughly 150 words or less.
//                  Use \n\n between lines if you want a paragraph break (rare).

const ACHIEVEMENTS = [
  {
    icon: "🎓",
    photo: "photos/masters.jpg",
    photoCaption: "",
    title: "M.Sc. in Computational Linguistics",
    meta: "University of Stuttgart, Germany &middot; 2022 &ndash; 2025",
    text: `After years of working with language professionally as a translator, I went back
      to university to understand it computationally. My studies focused on Natural
      Language Processing, computational language modeling, and applied data science,
      with courses spanning Computational Linguistics, Deep Learning for Speech and
      Language Processing, and Machine Translation. For my thesis, "Framing Power and
      Agency through Passive Voice," I combined linguistics and NLP to analyze how news
      coverage of the Israel&ndash;Palestine conflict uses passive voice to shape who is
      portrayed as responsible and who as affected. This degree is the bridge between my
      linguistic background and the data/software work I do today.`,
  },
  {
    icon: "💼",
    photo: "photos/tutor.jpg",
    photoCaption: "The meme wall outside our computer pool, always nice to see after a long day of debugging. :)",
    title: "Tutor, Institute for Natural Language Processing (IMS)",
    meta: "University of Stuttgart, Germany &middot; Apr &ndash; Sep 2024",
    text: `Alongside my master's studies, I worked as a tutor at the Institute for Natural
      Language Processing, supporting undergraduate students with coursework and guiding
      them through their own projects. I held regular sessions, answered questions on
      programming and NLP concepts, and kept track of attendance and progress. It was a
      good reminder that explaining a concept clearly is its own skill -- one that
      pushed me to understand the material even better myself.`,
  },
  {
    icon: "💼",
    photo: "photos/zenshu.jpg",
    photoCaption: "",
    title: "Japanese Translator",
    meta: "Zenshu Publishing Co., Ltd. &middot; Bangkok, Thailand &middot; 2021 &ndash; 2022",
    text: `Before moving into computational linguistics, I translated Japanese publications
      into Thai for Zenshu Publishing. The work demanded precision and cultural
      sensitivity in equal measure -- finding the Thai phrasing that stayed faithful to
      the source while still reading naturally to a Thai audience. It sharpened my eye
      for the small linguistic choices that change how a text is understood, an instinct
      that still shapes how I think about language today, including in my NLP work.`,
  },
  {
    icon: "💼",
    photo: "photos/sap.jpg",
    photoCaption: "",
    title: "SAP Consultant",
    meta: "Japan System Techniques Co., Ltd. &middot; Osaka, Japan &middot; 2019 &ndash; 2021",
    text: `As an SAP consultant in Osaka, I analyzed clients' existing workflows and
      identified gaps between their processes and SAP best practices. A large part of my
      role involved data migration -- mapping, cleansing, and validating data -- and
      making sure information stayed consistent across integrated SAP modules. This is
      where I first got hands-on with structured data at scale, and where I developed
      the attention to data quality and system thinking I still rely on.`,
  },
  {
    icon: "🎓",
    photo: "photos/bachelor.jpg",
    photoCaption: "",
    title: "B.A. in Japanese",
    meta: "Chulalongkorn University &middot; Bangkok, Thailand &middot; 2012 &ndash; 2017",
    text: `My academic journey with language started here. I specialized in Japanese
      language, literature, and culture, building advanced proficiency in reading,
      writing, and speaking, and graduated with a final grade of 1.3. Along the way, I
      applied linguistic analysis to text-based research projects -- early practice,
      without knowing it yet, for the computational text analysis I'd return to years
      later in my master's. This degree also opened the door to my first jobs as a
      Japanese translator.`,
  },
  {
    icon: "💼",
    photo: "photos/luckpim.jpg",
    photoCaption: "",
    title: "Japanese Translator",
    meta: "Luckpim Publishing Co., Ltd. &middot; Bangkok, Thailand &middot; 2013 &ndash; 2017",
    text: `While still an undergraduate, I worked as a Japanese translator for Luckpim
      Publishing, translating Japanese texts into Thai for publication. Balancing this
      work alongside my studies taught me how to manage deadlines and maintain
      translation quality under pressure, and gave me real-world experience applying the
      language skills I was building in the classroom well before I graduated.`,
  },
  {
    icon: "🌏",
    photo: "photos/mext.jpg",
    photoCaption: "",
    title: "MEXT Scholarship &mdash; Exchange Program",
    meta: "Chiba University &middot; Chiba, Japan &middot; 2014 &ndash; 2015",
    text: `I spent a year in Japan on a full MEXT scholarship, studying Japanese language and
      culture at Chiba University. Living and studying abroad pushed me to adapt quickly
      -- navigating a new academic system, a new culture, and daily life entirely in
      Japanese. Beyond the language gains, this year taught me the intercultural
      communication skills that later became essential in my work as a translator and,
      eventually, as an international student and professional in Germany.`,
  },
];
