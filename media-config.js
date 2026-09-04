window.KIT55_MEDIA = {
  enabled: false,

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
  eyebrow: "Weekend Send-Off / No. 004 / Live Friday through Sunday",
  headline: "Your team isn't working the weekend.",
  body: `Every priority stayed urgent.
Every owner stayed optional.
Every conflict stayed unresolved.

So the calendar became the escalation plan.

BY FRIDAY, LEADERSHIP WENT HOME.
THE AMBIGUITY STAYED LATE.

BURNOUT IS OFTEN GOVERNANCE DEBT COLLECTED FROM THE PEOPLE WITH THE LEAST AUTHORITY.`,
  mediaUrl: "weekend-sendoff-004-linkedin.svg",
  mediaAlt: "Weekend Send-Off No. 004 artwork contrasting an empty executive boardroom with an operating level still absorbing unresolved decisions after Friday.",
  posterUrl: "",
  ctaLabel: "Continue on LinkedIn ↗",
  ctaUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7499261205677731840/",

  /*
    The open media window remains available. Keep it disabled between live
    dispatches, then update it with the current artwork and LinkedIn URL.
  */
  calendarUrl: ""
};
