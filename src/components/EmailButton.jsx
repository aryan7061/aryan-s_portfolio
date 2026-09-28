import { profile } from "../data/portfolio";
import { EMAIL_OPTIONS_ID, supportsPopover } from "../lib/email";

export default function EmailButton({ className, children }) {
  if (!supportsPopover) {
    return (
      <a className={className} href={`mailto:${profile.email}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      popoverTarget={EMAIL_OPTIONS_ID}
    >
      {children}
    </button>
  );
}
