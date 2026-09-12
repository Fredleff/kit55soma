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
  eyebrow: "September 11, 2001 / In Remembrance",
  headline: "We remember.",
  body: `Twenty-five years later, we remember the 2,977 lives taken on September 11, 2001, the families who continue to carry that loss, and the first responders and recovery workers whose courage and sacrifice endured long after that morning.

We remember.`,
  mediaUrl: "september-11-remembrance.webp",
  mediaAlt: "American flag before the New York City skyline and Tribute in Light, with the words September 11, 2001. We remember.",
  posterUrl: "",
  ctaLabel: "",
  ctaUrl: "",

  /*
    No business call to action during the September 11 remembrance.
  */
  calendarUrl: ""
};
