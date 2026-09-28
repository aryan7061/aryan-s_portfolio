export const EMAIL_OPTIONS_ID = "email-options";

export const supportsPopover =
  typeof HTMLElement !== "undefined" &&
  Object.prototype.hasOwnProperty.call(HTMLElement.prototype, "popover");

export function getEmailOptions(email) {
  const to = encodeURIComponent(email);
  return [
    {
      id: "gmail",
      label: "Gmail",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`,
      external: true,
    },
    {
      id: "outlook",
      label: "Outlook",
      href: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}`,
      external: true,
    },
    {
      id: "yahoo",
      label: "Yahoo Mail",
      href: `https://compose.mail.yahoo.com/?to=${to}`,
      external: true,
    },
    {
      id: "default",
      label: "Default mail app",
      href: `mailto:${email}`,
      external: false,
    },
  ];
}
