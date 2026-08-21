const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
setHeader();
addEventListener('scroll', setHeader, { passive: true });

const mediaConfig = window.KIT55_MEDIA || {};
const mediaScreen = document.querySelector('[data-media-screen]');

const isMediaWindowActive = (config) => {
  if (!config.enabled) return false;

  const schedule = config.schedule;
  if (!schedule?.activeWeekdays?.length) return true;

  try {
    const weekday = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      timeZone: schedule.timeZone || 'America/Los_Angeles'
    }).format(new Date());

    return schedule.activeWeekdays.includes(weekday);
  } catch {
    return false;
  }
};

const createMediaAsset = (config) => {
  if (!config.mediaUrl || config.mode === 'statement') return null;

  if (config.mode === 'image') {
    const image = document.createElement('img');
    image.src = config.mediaUrl;
    image.alt = config.mediaAlt || config.headline || 'KIT55 Soma media';
    image.loading = 'lazy';
    return image;
  }

  if (config.mode === 'video') {
    const video = document.createElement('video');
    video.src = config.mediaUrl;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    if (config.posterUrl) video.poster = config.posterUrl;
    return video;
  }

  if (config.mode === 'embed') {
    const frame = document.createElement('iframe');
    frame.src = config.mediaUrl;
    frame.title = config.headline || 'KIT55 Soma media';
    frame.loading = 'lazy';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    return frame;
  }

  return null;
};

if (mediaScreen && isMediaWindowActive(mediaConfig)) {
  const eyebrow = mediaScreen.querySelector('[data-media-eyebrow]');
  const headline = mediaScreen.querySelector('[data-media-headline]');
  const body = mediaScreen.querySelector('[data-media-body]');
  const cta = mediaScreen.querySelector('[data-media-cta]');
  const assetContainer = mediaScreen.querySelector('[data-media-asset]');

  if (eyebrow) eyebrow.textContent = mediaConfig.eyebrow || '';
  if (headline) headline.textContent = mediaConfig.headline || '';
  if (body) body.textContent = mediaConfig.body || '';

  if (cta && mediaConfig.ctaLabel && mediaConfig.ctaUrl) {
    cta.textContent = mediaConfig.ctaLabel;
    cta.href = mediaConfig.ctaUrl;
    cta.target = '_blank';
    cta.rel = 'noopener';
    cta.hidden = false;
  }

  const asset = createMediaAsset(mediaConfig);
  if (asset && assetContainer) {
    if (mediaConfig.mode === 'image' && mediaConfig.ctaUrl) {
      const assetLink = document.createElement('a');
      assetLink.className = 'media-screen-asset-link';
      assetLink.href = mediaConfig.ctaUrl;
      assetLink.target = '_blank';
      assetLink.rel = 'noopener';
      assetLink.setAttribute('aria-label', 'Open Weekend Send-Off No. 003 on LinkedIn');
      assetLink.append(asset);
      assetContainer.replaceChildren(assetLink);
    } else {
      assetContainer.replaceChildren(asset);
    }
    assetContainer.hidden = false;
  } else {
    mediaScreen.classList.add('media-screen-statement');
  }

  mediaScreen.classList.add(`theme-${mediaConfig.theme || 'carbon'}`);
  mediaScreen.hidden = false;

  if (location.hash === '#weekend-sendoff') {
    requestAnimationFrame(() => mediaScreen.scrollIntoView({ block: 'start' }));
  }
}

const calendarLink = document.querySelector('[data-calendar-link]');
if (calendarLink && mediaConfig.calendarUrl) {
  calendarLink.href = mediaConfig.calendarUrl;
  calendarLink.target = '_blank';
  calendarLink.rel = 'noopener';
  calendarLink.hidden = false;
}

const reveal = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      reveal.unobserve(entry.target);
    }
  }
}, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });

document.querySelectorAll(
  '.chapter .prose > *, .method-step, .engagement-grid article, .receipt, .evidence-row, .move-copy > *, .media-screen-copy > *, .media-screen-asset'
).forEach((element) => {
  element.classList.add('reveal');
  reveal.observe(element);
});
