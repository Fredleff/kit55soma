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

  mode: "image",
  theme: "carbon",
  eyebrow: "Weekend Send-Off / No. 003 / Live Friday through Sunday",
  headline: "The deadline did not slip on Friday.",
  body: `It slipped in every handoff beforehand.

No one missed the meeting.
No one missed the report.
No one missed their own target.

They only missed each other.

THE CALENDAR TOOK THE BLAME.
THE OPERATING MODEL EARNED IT.`,
  mediaUrl: "friday-sendoff-003-linkedin.svg",
  mediaAlt: "Weekend Send-Off No. 003 artwork showing completed tasks separated by broken handoffs before a missed Friday outcome.",
  posterUrl: "",
  ctaLabel: "Continue on LinkedIn ↗",
  ctaUrl: "https://www.linkedin.com/in/federico-leff-25b613108/",

  /*
    Replace ctaUrl with the direct LinkedIn post URL after publication.
    The profile link remains the truthful fallback until that URL exists.
  */
  calendarUrl: ""
};
