/**
 * Site-wide constants. Prefer importing from here over scattering literals.
 * Set `PUBLIC_CONTACT_EMAIL` in `.env` to override the default in builds.
 */
function resolveContactEmail(): string {
  const raw = import.meta.env.PUBLIC_CONTACT_EMAIL;
  if (typeof raw === "string" && raw.trim().length > 0) {
    return raw.trim();
  }
  return "aly.metwaly@outlook.com";
}

export const contactEmail = resolveContactEmail();

export const site = {
  contactEmail,
} as const;

export const contactMailtoHref = `mailto:${contactEmail}`;
