window.KIT55_MEDIA = {
  enabled: true,

  /*
    The media window is scheduled in Pacific Time so every visitor sees
    the same Friday-through-Sunday publication window.
  */
  schedule: {
    timeZone: "America/Los_Angeles",
    activeWeekdays: ["Fri", "Sat", "Sun"]
  },

  /*
    Modes:
    statement  Text only
    image      Image plus text
    video      Hosted MP4 or WebM plus text
    embed      YouTube, Vimeo, or another embeddable URL plus text

    Themes:
    carbon
    signal
    paper
  */

  mode: "statement",
  theme: "carbon",
  eyebrow: "Friday Send-Off | 002",
  headline: "An orchestra is fragmented by design.",
  body: `Different instruments.
Different timing.
Different responsibilities.

Harmony does not require everyone to play the same note.

It requires a score, a conductor, and accountability for the whole.

Business is no different.

Specialization creates the capability.
Governance determines whether it becomes performance.

Enough business for one week.

Let the orchestra rest.

See you Monday.

KIT55 Soma
kit55soma.com
info@kit55soma.com`,
  mediaUrl: "",
  posterUrl: "",
  ctaLabel: "Join the conversation on LinkedIn",
  ctaUrl: "https://www.linkedin.com/in/federico-leff-25b613108/",

  /*
    Add a scheduling URL here when available.
    The calendar link remains invisible while this value is blank.
  */
  calendarUrl: ""
};
