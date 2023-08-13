export type ElementType = string | undefined | null;

export interface NewsData {
  title: string;
  articleUrl: string;
  sourceName: string;
  imageUrl: string;
  time: string;
}

export interface Options {
  searchQuery: string;
  prettyUrl?: boolean;
  timeframe?: "1h" | "1d" | "7d" | "1y";
  cache?: boolean;
  cacheTTL?: string | number;
  queryParams?: {
    hl?: string;
    gl?: string;
    ceid?: string;
  };
  proxy?: {
    host?: string;
    port?: number;
  };
  args?: [
    "--no-sandbox", // Disable sandboxing for better compatibility
    "--disable-setuid-sandbox", // Disable setuid sandbox
    "--disable-infobars", // Disable the infobar that displays browser automation
    "--single-process", // Use a single process (can reduce resource usage)
    "--no-zygote", // Do not use zygote process for spawning child processes
    "--no-first-run", // Skip first-run wizards (e.g., Chrome welcome page)
    "--window-position=0,0", // Set the initial window position
    "--ignore-certificate-errors", // Ignore certificate errors (useful for self-signed certificates)
    "--ignore-certificate-errors-skip-list", // Additional skip list for certificate error handling
    "--disable-dev-shm-usage", // Disable /dev/shm usage for better stability
    "--disable-accelerated-2d-canvas", // Disable GPU-accelerated 2D canvas
    "--disable-gpu", // Disable GPU acceleration for headless mode
    "--hide-scrollbars", // Hide scrollbars in the browser
    "--disable-notifications", // Disable notifications
    "--disable-background-timer-throttling", // Disable background timer throttling
    "--disable-backgrounding-occluded-windows", // Disable backgrounding of occluded windows
    "--disable-breakpad", // Disable crash reporting
    "--disable-component-extensions-with-background-pages", // Disable background pages for component extensions
    "--disable-extensions", // Disable browser extensions
    "--disable-features=TranslateUI,BlinkGenPropertyTrees", // Disable specific features
    "--disable-ipc-flooding-protection", // Disable IPC flooding protection
    "--disable-renderer-backgrounding", // Disable backgrounding of renderers
    "--metrics-recording-only", // Record metrics only
    "--mute-audio" // Mute audio
  ];
}

export interface Params {
  q?: string;
  hl?: string;
  gl?: string;
  ceid?: string;
}
