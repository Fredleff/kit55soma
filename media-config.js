window.KIT55_MEDIA = {
  enabled: true,

  /*
    The weekend dispatch is scheduled in Pacific Time so every visitor sees
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
  theme: "signal",
  eyebrow: "Weekend Send-Off / No. 003 / Live Friday through Sunday",
  headline: "The deadline did not slip on Friday.",
  body: `It slipped in every handoff before it.

No one missed the meeting.
No one missed the report.
No one missed their own target.

They only missed each other.

THE CALENDAR TOOK THE BLAME.
THE OPERATING MODEL EARNED IT.`,
  mediaUrl: "",
  posterUrl: "",
  ctaLabel: "Continue on LinkedIn ↗",
  ctaUrl: "https://www.linkedin.com/in/federico-leff-25b613108/",

  /*
    Add a scheduling URL here when available.
    The calendar link remains invisible while this value is blank.
  */
  calendarUrl: ""
};
