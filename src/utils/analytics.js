// Analytics utility for tracking SEO performance and user engagement

// Google Analytics 4 setup (replace with your GA4 measurement ID)
export const initGA = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "GA_MEASUREMENT_ID", {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views for SPA
export const trackPageView = (path) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "GA_MEASUREMENT_ID", {
      page_path: path,
      page_title: document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track project clicks
export const trackProjectClick = (projectName) => {
  trackEvent("click", "project", projectName);
};

// Track contact form submissions
export const trackContactSubmit = () => {
  trackEvent("submit", "contact", "contact_form");
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent("click", "social", platform);
};

// Performance monitoring
export const trackPerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType("navigation")[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;

        if (window.gtag) {
          window.gtag("event", "timing_complete", {
            name: "load",
            value: Math.round(loadTime),
          });
        }
      }, 0);
    });
  }
};

// SEO performance tracking
export const trackSEO = () => {
  // Track if page is indexed by search engines
  const referrer = document.referrer;
  if (referrer.includes("google.com") || referrer.includes("bing.com")) {
    trackEvent("search_visit", "seo", "organic_search");
  }
};

// Initialize all tracking
export const initAnalytics = () => {
  initGA();
  trackPerformance();
  trackSEO();
};
