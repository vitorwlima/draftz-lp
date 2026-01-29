"use client";

import {
  LucidePencil,
  LucideSparkles,
  LucideFileText,
  LucideArrowRight,
} from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary">
              <LucidePencil className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Draftz</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="https://app.draftz.pro/sign-in"
              target="_blank"
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="https://app.draftz.pro/sign-up"
              target="_blank"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/4 right-0 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <LucideSparkles className="size-4" />
              AI-Powered Writing Assistant
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Write smarter,{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                publish faster
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Draftz is your modern content creation workspace. Write, edit, and
              manage your posts with an AI assistant.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://app.draftz.pro/sign-up"
                target="_blank"
                className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                Start Writing for Free
                <LucideArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative mt-20">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-b from-primary/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/10">
              {/* Window header */}
              <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-destructive/70" />
                  <div className="size-3 rounded-full bg-status-draft/70" />
                  <div className="size-3 rounded-full bg-status-published/70" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  draftz.app
                </div>
              </div>
              {/* App content mockup */}
              <div className="flex h-[420px] sm:h-[520px]">
                {/* Sidebar */}
                <div className="hidden w-64 shrink-0 flex-col border-r border-border/50 bg-sidebar sm:flex">
                  {/* Sidebar Header */}
                  <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary shadow-sm">
                        <LucidePencil className="size-4 text-primary-foreground" />
                      </div>
                      <span className="text-lg font-semibold tracking-tight">
                        Draftz
                      </span>
                    </div>
                  </div>

                  {/* New Post Button */}
                  <div className="border-b border-border/50 px-3 py-4">
                    <div className="flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm">
                      <LucidePencil className="size-4" />
                      New Post
                    </div>
                  </div>

                  {/* Posts List */}
                  <div className="flex-1 overflow-hidden px-3 py-3">
                    <p className="px-2 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/50">
                      Your Posts
                    </p>
                    <div className="space-y-1">
                      {[
                        {
                          title: "Why AI Will Transform Content Creation",
                          status: "published",
                          time: "2h ago",
                          active: true,
                        },
                        {
                          title: "Q1 Marketing Strategy",
                          status: "draft",
                          time: "5h ago",
                          active: false,
                        },
                        {
                          title: "Product Launch Announcement",
                          status: "scheduled",
                          time: "1d ago",
                          active: false,
                        },
                      ].map((post) => (
                        <div
                          key={post.title}
                          className={`group flex items-start gap-3 rounded-lg p-2.5 transition-all ${
                            post.active ? "bg-sidebar-accent shadow-sm" : ""
                          }`}
                        >
                          <div
                            className={`flex size-8 shrink-0 items-center justify-center rounded-md ${
                              post.active
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground/60"
                            }`}
                          >
                            <LucideFileText className="size-4" />
                          </div>
                          <div className="flex min-w-0 flex-1 flex-col gap-1">
                            <span
                              className={`truncate text-sm font-medium leading-tight ${
                                post.active
                                  ? "text-foreground"
                                  : "text-foreground/80"
                              }`}
                            >
                              {post.title}
                            </span>
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={`rounded px-1.5 py-0.5 text-[10px] font-medium capitalize ${
                                  post.status === "published"
                                    ? "bg-status-published/15 text-status-published"
                                    : post.status === "draft"
                                    ? "bg-status-draft/15 text-status-draft"
                                    : "bg-status-scheduled/15 text-status-scheduled"
                                }`}
                              >
                                {post.status}
                              </span>
                              <span className="text-[11px] text-muted-foreground/50">
                                {post.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* User Footer */}
                  <div className="border-t border-border/50 p-3">
                    <div className="flex items-center gap-2.5 rounded-lg px-2 py-1.5">
                      <div className="size-7 rounded-full bg-primary/20" />
                      <span className="text-sm text-muted-foreground">
                        Jane Cooper
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editor */}
                <div className="flex flex-1 flex-col overflow-hidden">
                  {/* Editor Header */}
                  <div className="flex items-center gap-3 border-b border-border/50 bg-card/50 px-5 py-2.5">
                    <div className="flex-1">
                      <input
                        type="text"
                        defaultValue="Why AI Will Transform Content Creation"
                        className="w-full bg-transparent text-xl font-semibold text-foreground outline-none placeholder:text-muted-foreground/50"
                        readOnly
                      />
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-sm">
                      <div className="size-3.5 rounded-full bg-status-published" />
                      <span className="text-muted-foreground">Published</span>
                    </div>
                  </div>

                  {/* Editor Content */}
                  <div className="flex-1 overflow-auto p-6">
                    <div className="prose prose-sm max-w-none text-foreground/90">
                      <p className="text-base leading-relaxed">
                        The way we create content is about to change forever.
                        With AI-powered writing assistants becoming increasingly
                        sophisticated, content creators now have access to tools
                        that can help them write faster, better, and more
                        consistently than ever before.
                      </p>
                      <h2 className="mt-6 text-lg font-semibold text-foreground">
                        The Rise of AI Writing Tools
                      </h2>
                      <p className="leading-relaxed">
                        In the past year alone, we&apos;ve seen remarkable
                        advances in AI language models. These tools can now
                        understand context, maintain consistent tone, and even
                        adapt to different writing styles. For content teams,
                        this means:
                      </p>
                      <ul className="mt-3 space-y-2 text-foreground/80">
                        <li>
                          <strong className="text-foreground">
                            Faster drafting
                          </strong>{" "}
                          — First drafts that used to take hours now take
                          minutes
                        </li>
                        <li>
                          <strong className="text-foreground">
                            Better consistency
                          </strong>{" "}
                          — AI helps maintain brand voice across all content
                        </li>
                        <li>
                          <strong className="text-foreground">
                            Enhanced creativity
                          </strong>{" "}
                          — More time for strategic thinking and ideation
                        </li>
                      </ul>
                      <h2 className="mt-6 text-lg font-semibold text-foreground">
                        What This Means for Writers
                      </h2>
                      <p className="leading-relaxed">
                        Rather than replacing human creativity, AI serves as a
                        powerful amplifier. Writers can now focus on what they
                        do best—crafting compelling narratives and connecting
                        with audiences—while AI handles the heavy lifting of
                        grammar, structure, and initial ideation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Sidebar */}
                <div className="hidden w-80 shrink-0 flex-col border-l border-border/50 bg-sidebar lg:flex">
                  {/* AI Header */}
                  <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <LucideSparkles className="size-4 text-primary" />
                      AI Assistant
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 space-y-4 overflow-auto p-4">
                    {/* User message */}
                    <div className="flex gap-3">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <span className="text-xs font-medium">J</span>
                      </div>
                      <div className="rounded-2xl rounded-tl-md bg-muted/50 px-4 py-3 text-sm">
                        Can you make the introduction more engaging? I want to
                        hook readers immediately.
                      </div>
                    </div>

                    {/* AI message */}
                    <div className="flex gap-3">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/20 to-primary/30 text-primary">
                        <LucideSparkles className="size-3.5" />
                      </div>
                      <div className="flex-1 rounded-2xl rounded-tl-md border border-border/50 bg-muted/50 px-4 py-3 text-sm">
                        <p className="mb-2 text-foreground/90">
                          Your introduction is currently a bit generic. &quot;The
                          way we create content is about to change
                          forever&quot; is a common opener that doesn&apos;t
                          grab attention.
                        </p>
                        <p className="mb-3 text-foreground/90">
                          It could be stronger by starting with a bold claim or
                          a relatable scenario. Here&apos;s a suggestion:
                        </p>
                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
                          <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-primary">
                            <LucideFileText className="size-3" />
                            Suggested Content
                          </div>
                          <p className="text-xs text-foreground/80">
                            Imagine cutting your content creation time in
                            half...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="border-t border-border/50 p-4">
                    <div className="flex items-end gap-2">
                      <div className="flex-1 rounded-lg border border-border/50 bg-background/50 px-3 py-2 text-sm text-muted-foreground">
                        Ask AI anything...
                      </div>
                      <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <LucideArrowRight className="size-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in seconds and let AI supercharge your writing.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create a post",
                description:
                  "Start with a blank canvas or import existing content.",
              },
              {
                step: "02",
                title: "Write with AI",
                description:
                  "As you write, ask the AI for help. Get suggestions, fix grammar, or completely rewrite sections.",
              },
              {
                step: "03",
                title: "Publish anywhere",
                description:
                  "When you're ready, publish or share your polished content.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 2 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-linear-to-r from-primary/50 to-transparent lg:block lg:w-1/2 lg:translate-x-1/2" />
                )}
                <div className="relative h-full rounded-2xl border border-border/50 bg-card p-8">
                  <span className="mb-4 inline-block text-4xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-linear-to-b from-primary/5 to-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16">
            {/* Background pattern */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-1/2 -left-1/2 h-full w-full rounded-full bg-black/10 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
                Ready to transform your writing?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
                Join thousands of writers who are creating better content faster
                with Draftz.
              </p>
              <Link
                href="https://app.draftz.pro/sign-up"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
              >
                Get Started for Free
                <LucideArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <LucidePencil className="size-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Draftz</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Draftz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
