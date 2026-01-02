// Fix: Remove the reference to vite/client as the type definition cannot be found.
// The manual definitions below provide the necessary types for ImportMeta and ImportMetaEnv.

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
