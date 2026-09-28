import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import {
  EMAIL_OPTIONS_ID,
  getEmailOptions,
  supportsPopover,
} from "../lib/email";
import "./EmailOptions.css";

const COPY_LABELS = {
  idle: "Copy address",
  copied: "Copied ✓",
  failed: "Couldn't copy — select the address above",
};

export default function EmailOptions() {
  const popoverRef = useRef(null);
  const [copyStatus, setCopyStatus] = useState("idle");

  useEffect(() => {
    if (copyStatus === "idle") return undefined;
    const timer = setTimeout(() => setCopyStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [copyStatus]);

  if (!supportsPopover) return null;

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  }

  function close() {
    popoverRef.current?.hidePopover();
  }

  return (
    <div
      ref={popoverRef}
      id={EMAIL_OPTIONS_ID}
      popover="auto"
      role="dialog"
      aria-labelledby="email-options-title"
      className="email-options"
    >
      <div className="email-options__head">
        <p id="email-options-title" className="email-options__title">
          Email me
        </p>
        <button
          type="button"
          className="email-options__close"
          popoverTarget={EMAIL_OPTIONS_ID}
          popoverTargetAction="hide"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      <p className="email-options__address">{profile.email}</p>

      <ul className="email-options__list">
        {getEmailOptions(profile.email).map((option) => (
          <li key={option.id}>
            <a
              className="email-options__item"
              href={option.href}
              target={option.external ? "_blank" : undefined}
              rel={option.external ? "noopener noreferrer" : undefined}
              onClick={close}
            >
              {option.label}
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="email-options__item"
            onClick={copyAddress}
          >
            {COPY_LABELS[copyStatus]}
          </button>
        </li>
      </ul>

      <p role="status" className="visually-hidden">
        {copyStatus === "copied" ? "Email address copied" : ""}
      </p>
    </div>
  );
}
