/**
 * =========================================================================
 * జాతి రత్నాలు — JATHI RATNALU
 * =========================================================================
 * Lahari, Vedha & Keerthi
 * Stanley College of Engineering • B.Tech Life • Endless Friendship
 * =========================================================================
 */

export const siteConfig = {
  // Global Meta & Identity
  meta: {
    teluguTitle: "జాతి రత్నాలు",
    englishTitle: "JATHI RATNALU",
    tagline: "THE THREE RATHNALU",
    subline: "Three Rathnalu. One B.Tech timeline. In the end, we just need each other.",
    hashtag: "#TheThreeRathnalu",
    browserTitle: "French Wine with English Subtitles? 🍷",
    
    // OFFICIAL INSTAGRAM DETAILS
    instagram: {
      handle: "@professionallylostt",
      url: "https://www.instagram.com/professionallylostt/",
      buttonLabel: "OPEN OUR INSTAGRAM ↗",
      subtext: "",
    },
  },

  // -------------------------------------------------------------------------
  // IMAGE ASSET PATHS & PLACEHOLDERS
  // Place your photos in /public/images/ with these names or update the paths.
  // -------------------------------------------------------------------------
  images: {
    hero: "/images/hero.jpg",
    friend1: "/images/friend-1.jpg",
    friend2: "/images/friend-2.jpg",
    friend3: "/images/friend-3.jpg",
    jathiRatnalu: "/images/jathi-ratnalu.jpg",
    moments: [
      { id: "moment-1", src: "/images/moment-1.jpg", caption: "That day.", placeholderKey: "MOMENT_01" },
      { id: "moment-2", src: "/images/moment-2.jpg", caption: "Don't ask.", placeholderKey: "MOMENT_02" },
      { id: "moment-3", src: "/images/moment-3.jpg", caption: "Good decision. Probably.", placeholderKey: "MOMENT_03" },
      { id: "moment-4", src: "/images/moment-4.jpg", caption: "always aagam.", placeholderKey: "MOMENT_04" },
      { id: "moment-5", src: "/images/moment-5.jpg", caption: "Still together.", placeholderKey: "MOMENT_05" },
      { id: "moment-6", src: "/images/moment-6.jpg", caption: "One more memory.", placeholderKey: "MOMENT_06" },
    ]
  },

  placeholders: {
    HERO_IMAGE_PLACEHOLDER: "HERO_IMAGE_PLACEHOLDER",
    FRIEND_1_IMAGE: "FRIEND_1_IMAGE",
    FRIEND_2_IMAGE: "FRIEND_2_IMAGE",
    FRIEND_3_IMAGE: "FRIEND_3_IMAGE",
    JATHI_RATNALU_IMAGE: "JATHI_RATNALU_IMAGE",
  },

  // -------------------------------------------------------------------------
  // HERO SECTION
  // -------------------------------------------------------------------------
  hero: {
    teluguTitle: "జాతి రత్నాలు",
    englishTitle: "JATHI RATNALU",
    subline: "We just need each other.",
    notes: [
      { text: "B.Tech survivors", rotate: "-rotate-3", pos: "top-2 -left-4 sm:-left-8" },
      { text: "Professional procrastinators", rotate: "rotate-2", pos: "top-8 -right-3 sm:-right-8" },
      { text: "Cinema enthusiasts", rotate: "-rotate-1", pos: "-top-3 left-1/3" },
      { text: "We just need each other", rotate: "rotate-1", pos: "top-14 -left-3 sm:-left-6" },
      { text: "telidhu gurtu ledhu marchipoya", rotate: "-rotate-2", pos: "-bottom-4 left-4 sm:left-8" },
      { text: "Three Rathnalu", rotate: "-rotate-3", pos: "bottom-12 -right-4 sm:-right-8" }
    ],
    tags: [
      "B.Tech survivors",
      "Professional procrastinators",
      "Cinema enthusiasts",
      "We just need each other",
      "Three Rathnalu"
    ]
  },

  // -------------------------------------------------------------------------
  // CAST SECTION — "THE MAIN CHARACTERS"
  // (NO fake job titles; exact names and character quotes)
  // -------------------------------------------------------------------------
  cast: [
    {
      id: "lahari",
      rathnamNo: "RATHNAM 01",
      name: "LAHARI",
      quote: "Plan unda? Okay.\nPlan ledha? Okay, chusukundam.\nMaha ayte em aytadi?\nNenu nijam ga Arjun Reddy ra.",
      image: "/images/friend-1.jpg",
      placeholderKey: "FRIEND_1_IMAGE",
      objectPosition: "center 45%",
      rotation: "sm:-rotate-1"
    },
    {
      id: "vedha",
      rathnamNo: "RATHNAM 02",
      name: "VEDHA",
      quote: "Maha ayte em aytadi le.\n\nI can speak English fluent ga, dynamic ga, magnetic ga.\n\nNuvvu Arjun Reddy kadu... Mallikarjun Reddy ra",
      image: "/images/friend-2.jpg",
      placeholderKey: "FRIEND_2_IMAGE",
      objectPosition: "center 28%",
      rotation: "sm:rotate-1"
    },
    {
      id: "keerthi",
      rathnamNo: "RATHNAM 03",
      name: "KEERTHI",
      quote: "Goa podam.\nRahu kaalam lo putti unta nenu.\nNa valla problem ayte vellipotha ra nenu.",
      image: "/images/friend-3.jpg",
      placeholderKey: "FRIEND_3_IMAGE",
      objectPosition: "center 35%",
      rotation: "sm:-rotate-0.5"
    }
  ],

  // -------------------------------------------------------------------------
  // JATHI RATNALU MOVIE-INSPIRED SECTION
  // -------------------------------------------------------------------------
  jathiRatnalu: {
    title: "JATHI RATNALU",
    year: "2021",
    teluguTitle: "జాతి రత్నాలు",
    dialogue: `Paruvu aa emi cheeskuntaaru saar Paruvu tooni
Okka 10th class Donga Certificate aynaa konagalaraa`,
    handwrittenNote: "Aa job cheyyoddu ee job cheyyoddu Anna narrow mind em ledu Maava",
    image: "/images/jathi-ratnalu.jpg",
    placeholderKey: "JATHI_RATNALU_IMAGE",
    objectPosition: "center",
    buttonLabel: "ENTER JOGIPET MODE",
    buttonResult: "Life anedi Zindagi aipoyindi.",
  },

  // -------------------------------------------------------------------------
  // FRIENDSHIP MAP (HOW WE GOT HERE / THREE ROUTES. ONE STORY.)
  // Scrapbook travel map with three pinned polaroids converging at Stanley
  // -------------------------------------------------------------------------
  friendshipMap: {
    heading: "HOW WE GOT HERE",
    subtitle: "Different places. Somehow, the same destination.",
    friends: [
      {
        id: "f-1",
        name: "LAHARI",
        image: "/images/friend-1.jpg",
        placeholderKey: "FRIEND_1_IMAGE",
        objectPosition: "center 45%"
      },
      {
        id: "f-2",
        name: "VEDHA",
        image: "/images/friend-2.jpg",
        placeholderKey: "FRIEND_2_IMAGE",
        objectPosition: "center 28%"
      },
      {
        id: "f-3",
        name: "KEERTHI",
        image: "/images/friend-3.jpg",
        placeholderKey: "FRIEND_3_IMAGE",
        objectPosition: "center 35%"
      }
    ],
    destination: {
      name: "STANLEY COLLEGE OF ENGINEERING",
      annotation1: "And somehow, we all ended up here."
    }
  },

  // -------------------------------------------------------------------------
  // MOMENTS SECTION — EXACT TITLE: "MOMENTS OF US"
  // -------------------------------------------------------------------------
  moments: {
    heading: "MOMENTS OF US",
    subtitle: "Memories, bad decisions, and days that make zero sense in retrospect.",
    items: [
      { id: "m-1", placeholderKey: "MOMENT_01", image: "/images/moment-1.jpg", caption: "That day.", rotation: "sm:-rotate-1", objectPosition: "center" },
      { id: "m-2", placeholderKey: "MOMENT_02", image: "/images/moment-2.jpg", caption: "Don't ask.", rotation: "sm:rotate-1", objectPosition: "center" },
      { id: "m-3", placeholderKey: "MOMENT_03", image: "/images/moment-3.jpg", caption: "Good decision. Probably.", rotation: "sm:-rotate-0.5", objectPosition: "center 60%" },
      { id: "m-4", placeholderKey: "MOMENT_04", image: "/images/moment-4.jpg", caption: "always aagam.", rotation: "sm:rotate-1.5", objectPosition: "center" },
      { id: "m-5", placeholderKey: "MOMENT_05", image: "/images/moment-5.jpg", caption: "Still together.", rotation: "sm:-rotate-1", objectPosition: "center 45%" },
      { id: "m-6", placeholderKey: "MOMENT_06", image: "/images/moment-6.jpg", caption: "One more memory.", rotation: "sm:rotate-0.5", objectPosition: "center" },
    ]
  },

  // -------------------------------------------------------------------------
  // THINGS WE ACTUALLY SAY (CHAT ARCHIVES)
  // -------------------------------------------------------------------------
  thingsWeSay: [
    {
      id: "say-1",
      chat: [
        { sender: "Lahari", text: "Bro movie chuddam." },
        { sender: "Vedha", text: "Which movie?" },
        { sender: "Keerthi", text: "Any good one." }
      ],
      annotation: "Every Friday evening"
    },
    {
      id: "say-2",
      chat: [
        { sender: "Keerthi", text: "Plan enti?" },
        { sender: "Lahari", text: "Plan ledu ra." },
        { sender: "Vedha", text: "Chusukundam, lite." }
      ],
      annotation: "Our entire B.Tech strategy"
    },
    {
      id: "say-3",
      chat: [
        { sender: "Lahari", text: "First half super." },
        { sender: "Vedha", text: "Second half?" },
        { sender: "Keerthi", text: "Mana life laga." }
      ],
      annotation: "Honest movie review"
    },
    {
      id: "say-4",
      chat: [
        { sender: "Keerthi", text: "Goa podama?" },
        { sender: "Vedha", text: "Rahu kaalam start ayindi." },
        { sender: "Lahari", text: "Maha ayte em aytadi ra?" }
      ],
      annotation: "The unexecuted trip"
    },
    {
      id: "say-5",
      chat: [
        { sender: "Lahari", text: "Nenu Arjun Reddy ra." },
        { sender: "Vedha", text: "Nuvvu Mallikarjun Reddy ra." },
        { sender: "Keerthi", text: "Na valla problem ayte nenu vellipotha." }
      ],
      annotation: "Debate summary"
    },
    {
      id: "say-6",
      chat: [
        { sender: "Vedha", text: "I'm always positive." },
        { sender: "Keerthi", text: "Ante hell or heaven?" },
        { sender: "Lahari", text: "Both together only." }
      ],
      annotation: "Core philosophy"
    }
  ],

  // -------------------------------------------------------------------------
  // "DID YOU START FOLLOWING US?" (NEW SECTION REPLACING "ARE YOU IN THE GROUP?")
  // -------------------------------------------------------------------------
  didYouFollow: {
    heading: "DID YOU START FOLLOWING US?",
    subtext: "Then you're officially part of the story.",
    buttonLabel: "YES, I DID ↗",
    url: "https://www.instagram.com/professionallylostt/",
    messageSuccess: "Good decision. Welcome."
  },

  // -------------------------------------------------------------------------
  // OUR UNOFFICIAL RULES (GENUINE FRIENDSHIP CODE)
  // -------------------------------------------------------------------------
  unofficialRules: [
    "Whatever we do, we do it together.",
    "Good or bad, we face it together.",
    "Even if it fails, it's fine. We'll figure it out together.",
    "We listen to each other's opinions.",
    "We adjust everywhere.",
    "We keep things simple.",
    "Nobody gets left behind.",
    "At the end of the day, we just need each other."
  ],

  // -------------------------------------------------------------------------
  // NO NAZAR CHARM
  // -------------------------------------------------------------------------
  noNazar: {
    title: "🧿 NO NAZAR",
    subtext: "Touch wood."
  },

  // -------------------------------------------------------------------------
  // FOOTER & CREDITS
  // -------------------------------------------------------------------------
  footer: {
    teluguTitle: "జాతి రత్నాలు",
    englishTitle: "JATHI RATNALU",
    names: "Lahari • Vedha • Keerthi",
    college: "Stanley College of Engineering",
    line: "Made with , aagam  & questionable decisions.",
    subline: "© 2026 — Jathi Ratnalu. End credits rolling.",
    note: "Please don't leave yet. We just need each other."
  }
};
