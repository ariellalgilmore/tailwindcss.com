import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export function FooterSitemap({ className }: { className?: string }) {
  return (
    <footer style={{ backgroundColor: 'var(--cds-layer-01, #ffffff)', color: 'var(--cds-text-primary, #161616)', fontSize: '0.875rem', lineHeight: '1.5' }}>
      <div style={{ display: 'flex', gap: 'var(--cds-spacing-05, 1rem)', padding: 'var(--cds-spacing-05, 1rem)' }} className={className}>
        <div style={{ display: 'flex', flex: '1', flexDirection: 'column', gap: 'var(--cds-spacing-07, 2.5rem)' }}>
          <div>
            <TailwindCSS />
          </div>
          <div>
            <Resources />
          </div>
        </div>
        <div style={{ display: 'flex', flex: '1', flexDirection: 'column', gap: 'var(--cds-spacing-07, 2.5rem)' }}>
          <div>
            <TailwindPlus />
          </div>
          <div>
            <Community />
          </div>
        </div>
      </div>
      <div style={{ margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--cds-spacing-05, 1rem)' }} className={className}>
        <div style={{ borderLeft: '1px solid var(--cds-border-subtle-01, #e0e0e0)', borderRight: '1px solid var(--cds-border-subtle-01, #e0e0e0)', borderBottom: '1px solid var(--cds-border-subtle-01, #e0e0e0)', paddingTop: 'var(--cds-spacing-07, 2.5rem)', paddingBottom: 'var(--cds-spacing-07, 2.5rem)', paddingLeft: 'var(--cds-spacing-03, 0.5rem)' }}>
          <TailwindCSS />
        </div>
        <div style={{ borderLeft: '1px solid var(--cds-border-subtle-01, #e0e0e0)', borderRight: '1px solid var(--cds-border-subtle-01, #e0e0e0)', borderBottom: '1px solid var(--cds-border-subtle-01, #e0e0e0)', paddingTop: 'var(--cds-spacing-07, 2.5rem)', paddingBottom: 'var(--cds-spacing-07, 2.5rem)', paddingLeft: 'var(--cds-spacing-03, 0.5rem)' }}>
          <TailwindPlus />
        </div>
        <div style={{ borderLeft: '1px solid var(--cds-border-subtle-01, #e0e0e0)', borderRight: '1px solid var(--cds-border-subtle-01, #e0e0e0)', borderBottom: '1px solid var(--cds-border-subtle-01, #e0e0e0)', paddingTop: 'var(--cds-spacing-07, 2.5rem)', paddingBottom: 'var(--cds-spacing-07, 2.5rem)', paddingLeft: 'var(--cds-spacing-03, 0.5rem)' }}>
          <Resources />
        </div>
        <div style={{ borderLeft: '1px solid var(--cds-border-subtle-01, #e0e0e0)', borderRight: '1px solid var(--cds-border-subtle-01, #e0e0e0)', paddingTop: 'var(--cds-spacing-07, 2.5rem)', paddingBottom: 'var(--cds-spacing-07, 2.5rem)', paddingLeft: 'var(--cds-spacing-03, 0.5rem)' }}>
          <Community />
        </div>
      </div>
    </footer>
  );
}

export function FooterMeta({ className }: { className?: string }) {
  return (
    <div style={{ padding: 'var(--cds-spacing-07, 2.5rem) var(--cds-spacing-03, 0.5rem) var(--cds-spacing-10, 6rem)' }}>
      <div style={{ margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--cds-spacing-06, 1.5rem)' }} className={className}>
        <ThemeToggle />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cds-spacing-05, 1rem)', fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--cds-text-secondary, #525252)' }}>
          <span>Copyright ©&nbsp;{new Date().getFullYear()}&nbsp;Tailwind Labs Inc.</span>
          <span>&middot;</span>
          <Link href="/brand" style={{ textDecoration: 'none', color: 'inherit' }}>
            Trademark Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

function TailwindCSS() {
  return (
    <>
      <h3 style={{ fontWeight: '600' }}>Tailwind CSS</h3>
      <ul style={{ marginTop: 'var(--cds-spacing-05, 1rem)', display: 'grid', gap: 'var(--cds-spacing-05, 1rem)', listStyle: 'none', padding: 0 }}>
        <li>
          <Link href="/docs" style={{ textDecoration: 'none', color: 'inherit' }}>
            Documentation
          </Link>
        </li>
        <li>
          <Link href="https://play.tailwindcss.com/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Playground
          </Link>
        </li>
        <li>
          <Link href="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/showcase" style={{ textDecoration: 'none', color: 'inherit' }}>
            Showcase
          </Link>
        </li>
        <li>
          <Link href="/sponsor" style={{ textDecoration: 'none', color: 'inherit' }}>
            Sponsor
          </Link>
        </li>
      </ul>
    </>
  );
}

function TailwindPlus() {
  return (
    <>
      <h3 style={{ marginBottom: 'var(--cds-spacing-03, 0.5rem)', fontWeight: '600' }}>
        <a href="/plus?ref=footer" style={{ textDecoration: 'none', color: 'inherit' }}>
          Tailwind Plus
        </a>
      </h3>
      <ul style={{ marginTop: 'var(--cds-spacing-05, 1rem)', display: 'grid', gap: 'var(--cds-spacing-05, 1rem)', listStyle: 'none', padding: 0 }}>
        <li>
          <a href="/plus/ui-blocks?ref=footer" style={{ textDecoration: 'none', color: 'inherit' }}>
            UI Blocks
          </a>
        </li>
        <li>
          <a href="/plus/templates?ref=footer" style={{ textDecoration: 'none', color: 'inherit' }}>
            Templates
          </a>
        </li>
        <li>
          <a href="/plus/ui-kit?ref=footer" style={{ textDecoration: 'none', color: 'inherit' }}>
            UI Kit
          </a>
        </li>
      </ul>
    </>
  );
}

function Resources() {
  return (
    <>
      <h3 style={{ fontWeight: '600' }}>Resources</h3>
      <ul style={{ marginTop: 'var(--cds-spacing-05, 1rem)', display: 'grid', gap: 'var(--cds-spacing-05, 1rem)', listStyle: 'none', padding: 0 }}>
        <li>
          <Link href="https://www.refactoringui.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            Refactoring UI
          </Link>
        </li>
        <li>
          <Link href="https://headlessui.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            Headless UI
          </Link>
        </li>
        <li>
          <Link href="https://heroicons.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            Heroicons
          </Link>
        </li>
        <li>
          <Link href="https://heropatterns.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            Hero Patterns
          </Link>
        </li>
      </ul>
    </>
  );
}

function Community() {
  return (
    <>
      <h3 style={{ fontWeight: '600' }}>Community</h3>
      <ul style={{ marginTop: 'var(--cds-spacing-05, 1rem)', display: 'grid', gap: 'var(--cds-spacing-05, 1rem)', listStyle: 'none', padding: 0 }}>
        <li>
          <Link href="https://github.com/tailwindlabs/tailwindcss" style={{ textDecoration: 'none', color: 'inherit' }}>
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/sponsor#insiders" style={{ textDecoration: 'none', color: 'inherit' }}>
            Discord
          </Link>
        </li>
        <li>
          <Link href="https://x.com/tailwindcss" style={{ textDecoration: 'none', color: 'inherit' }}>
            X
          </Link>
        </li>
      </ul>
    </>
  );
}