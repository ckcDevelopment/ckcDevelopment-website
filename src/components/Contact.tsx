"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { contactNeeds, site } from "@/content";
import { Reveal, SectionHeading } from "@/components/Reveal";

type Status = "idle" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const reduce = useReducedMotion();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="site-shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <SectionHeading
            index="04"
            kicker="Contact"
            title="Tell us what you want to own."
            body="Share a little context. This form is a front-end preview for now — messages are not forwarded yet. Email us directly and we will take it from there."
          />
          <Reveal delay={0.1} className="mt-10 space-y-5">
            <a
              href={`mailto:${site.email}`}
              className="group block rounded-2xl border border-white/10 bg-panel/70 p-5 transition hover:border-brass/40"
            >
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-muted uppercase">
                Email
              </p>
              <p className="mt-2 font-serif text-2xl text-brass-2 group-hover:text-brass">
                {site.email}
              </p>
            </a>
            <div className="rounded-2xl border border-white/10 bg-panel/70 p-5">
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-muted uppercase">
                Domain
              </p>
              <p className="mt-2 font-serif text-2xl text-stone">{site.domain}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-white/10 bg-panel/80 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[28rem] flex-col justify-center"
                >
                  <p className="eyebrow">Received locally</p>
                  <h3 className="mt-4 font-serif text-3xl text-stone">
                    Thank you — we have the outline.
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-muted">
                    This form is not wired to a backend yet. Please send the
                    same note to{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-brass underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>{" "}
                    so it reaches us.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 self-start rounded-full border border-brass/35 px-5 py-2.5 text-sm text-stone hover:border-brass"
                  >
                    Compose another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={onSubmit}
                  className="grid gap-5"
                >
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="Alex Rivera"
                      className="field-input"
                    />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="alex@company.com"
                        className="field-input"
                      />
                    </Field>
                    <Field label="Company" htmlFor="company">
                      <input
                        id="company"
                        name="company"
                        autoComplete="organization"
                        placeholder="Optional"
                        className="field-input"
                      />
                    </Field>
                  </div>
                  <Field label="What you need" htmlFor="need">
                    <select id="need" name="need" required defaultValue="" className="field-input">
                      <option value="" disabled>
                        Select a focus
                      </option>
                      {contactNeeds.map((need) => (
                        <option key={need.value} value={need.value}>
                          {need.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What you are running today, and what you want to own."
                      className="field-input resize-y min-h-[8rem]"
                    />
                  </Field>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-muted">
                      No mailing list. Placeholders only until this form is
                      connected.
                    </p>
                    <button
                      type="submit"
                      className="rounded-full bg-brass px-6 py-3 text-sm font-medium text-ink transition hover:bg-brass-2"
                    >
                      Send message
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
        {label}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
