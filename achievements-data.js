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
//   showPhoto    - optional. Set to false to hide the photo/icon box entirely
//                  for this entry (text takes the full width instead). Leave
//                  out, or set to true, to show it as normal.
//   title        - the heading
//   meta         - the small line under the heading (organization / place / dates)
//   text         - the description paragraph. Keep it roughly 150 words or less.
//                  Leave a blank line between two chunks of text to start a new
//                  paragraph. Single line breaks (just wrapping text for
//                  readability in this file) are ignored, as usual in HTML.
//                  You can use <strong>bold</strong> or <em>italic</em> to
//                  highlight words.

const ACHIEVEMENTS = [
  {
    icon: "🎓",
    photo: "photos/masters.jpg",
    photoCaption: "",
    title: "M.Sc. in Computational Linguistics",
    meta: "University of Stuttgart, Germany &middot; 2022 &ndash; 2025",
    text: `After years of working with language professionally as a translator, 
    I went back to university to understand it computationally. My coursework covered NLP, 
    deep learning for speech and language processing, and machine translation, alongside 
    applied data science.

    For my thesis, <strong> "Framing Power and Agency through Passive Voice" </strong>, I analysed how news 
    coverage of the Israel–Palestine conflict uses passive voice to shape who is portrayed 
    as responsible and who as affected. 
    
    Before any of the linguistics could happen, I had to collect articles from several outlets, 
    then clean and store them in a form I could actually analyse. It was slow, manual work, 
    and it was what pointed me toward data engineering, where automating the data pipeline 
    delivers real value to downstream tasks like data analysis and model training.
    
    `,
  },
  {
    icon: "💼",
    photo: "photos/tutor.jpg",
    photoCaption: "The meme wall outside our computer pool, always nice to see after a long day of debugging. :)",
    title: "Tutor, Institute for Natural Language Processing (IMS)",
    meta: "University of Stuttgart, Germany &middot; Apr &ndash; Sep 2024",
    text: `Alongside my master's studies, I worked as a tutor at the Institute for Natural Language Processing, 
    supporting graduate students through their own projects in the <em>Computational Linguistics Team Laboratory</em>. 
    Most of what they needed wasn't technical. It was help shaping a research question: what was worth asking, 
    what was feasible in the time they had, and how my own project had approached similar problems. 
    It was a good reminder that explaining a concept clearly is its own skill, one that pushed me to understand 
    the material even better myself.`,
  },
  {
    icon: "💼",
    photo: "photos/zenshu.jpg",
    showPhoto: false,
    photoCaption: "",
    title: "Japanese Translator",
    meta: "Luckpim Publishing &amp; Zenshu Publishing &middot; Bangkok, Thailand &middot; 2013 &ndash; 2022",
    text: `<strong>Luckpim Publishing Co., Ltd. (2013&ndash;2017)</strong><br>
      While still an undergraduate, I worked as a Japanese translator for Luckpim
      Publishing, translating Japanese books into Thai for publication. Balancing this
      work alongside my studies taught me how to manage deadlines and maintain
      translation quality under pressure, and gave me real-world experience applying the
      language skills I was building in the classroom well before I graduated.

      <strong>Zenshu Publishing Co., Ltd. (2021&ndash;2022)</strong><br>
      Before moving into computational linguistics, I translated Japanese publications
      into Thai for Zenshu Publishing. It sharpened my eye
      for the small linguistic choices that change how a text is understood, an instinct
      that still shapes how I think about language today, including in my NLP work.`,
  },
  {
    icon: "💼",
    photo: "photos/sap.jpg",
    photoCaption: "",
    title: "SAP Consultant",
    meta: "Japan System Techniques Co., Ltd. &middot; Osaka, Japan &middot; 2019 &ndash; 2021",
    text: `As an SAP consultant in Osaka, I analyzed clients' existing workflows and identified gaps 
    between their processes and SAP best practices. A large part of my role involved data migration 
    — mapping, cleansing, and validating data — and making sure information stayed consistent across 
    integrated SAP modules. This is where I first got hands-on with structured data at scale, 
    and where I developed the attention to data quality and system thinking I still rely on.`,
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
    icon: "🌏",
    photo: "photos/mext.jpg",
    photoCaption: "",
    title: "MEXT Scholarship &mdash; Exchange Program",
    meta: "Chiba University &middot; Chiba, Japan &middot; 2014 &ndash; 2015",
    text: `I spent a year in Japan on a full MEXT scholarship, studying Japanese language and culture at Chiba University.
     Living and studying abroad pushed me to adapt quickly, navigating a new academic system, a new culture, and daily life 
     entirely in Japanese. Beyond the language gains, this year taught me intercultural skills that stayed useful in my first job in Japan, 
     and later again when I moved to Germany to study and work.`,
  },
];
