import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const VPM_REPO_URL = 'https://kitsuneba.github.io/KitsuneBaTools/index.json';
const VCC_DEEP_LINK = `vcc://vpm/addRepo?url=${VPM_REPO_URL}`;

function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(VPM_REPO_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img
          src="/img/favicon.ico"
          alt="KitsuneBa Logo"
          className={styles.heroLogo}
        />
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          {siteConfig.tagline}
        </p>

        <div className={styles.heroButtons}>
          <a
            className={clsx('button', styles.buttonVcc)}
            href={VCC_DEEP_LINK}
          >
            Add to VCC / ALCOM
          </a>

          <button
            type="button"
            className={clsx('button button--secondary', styles.buttonSecondary)}
            onClick={handleCopy}
          >
            {copied ? 'Copied VPM URL' : 'Copy VPM URL'}
          </button>

          <Link
            className={clsx('button button--outline button--secondary', styles.buttonSecondary)}
            to="/docs/intro"
          >
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProductCards() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionHeader}>
        <Heading as="h2" className={styles.sectionTitle}>
          Tools & Workflows
        </Heading>
        <p className={styles.sectionSubtitle}>
          Focused editor extensions built to reduce repetitive tasks and save you time.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {/* Toggle Accelerator */}
        <div className={styles.toolCard}>
          <div className={styles.cardHeader}>
            <svg className={styles.cardIconSvg} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
              <circle cx="16" cy="12" r="3" />
            </svg>
            <Heading as="h3" className={styles.cardTitle}>
              Toggle Accelerator
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Standalone</span>
            <span className={styles.tag}>Modular Avatar</span>
            <span className={styles.tag}>VRCFury</span>
          </div>
          <p className={styles.cardDescription}>
            Build toggles, exclusive outfit sets, radial puppets, material swaps, and world freezes with smart gating, parameter compression, and zero manual animator wiring.
          </p>
          <div className={styles.cardFooter}>
            <Link
              className="button button--sm button--primary"
              to="/docs/toggle-accelerator"
            >
              Learn More
            </Link>
            <a
              className="button button--sm button--outline button--secondary"
              href="https://github.com/KitsuneBa/ToggleAccelerator"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Optimization Helper */}
        <div className={styles.toolCard}>
          <div className={styles.cardHeader}>
            <svg className={styles.cardIconSvg} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 20V10" />
              <path d="M12 20V4" />
              <path d="M6 20v-6" />
            </svg>
            <Heading as="h3" className={styles.cardTitle}>
              Optimization Helper
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Performance</span>
            <span className={styles.tag}>VRAM & Materials</span>
            <span className={styles.tag}>Diagnostics</span>
          </div>
          <p className={styles.cardDescription}>
            Analyze avatar components, Animator Controllers, texture & mesh VRAM footprint, and optimize materials with one-click cleanup and compression tools.
          </p>
          <div className={styles.cardFooter}>
            <Link
              className="button button--sm button--primary"
              to="/docs/optimization-helper"
            >
              Learn More
            </Link>
            <a
              className="button button--sm button--outline button--secondary"
              href="https://github.com/KitsuneBa/OptimizationHelper"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* File Highlighter */}
        <div className={styles.toolCard}>
          <div className={styles.cardHeader}>
            <svg className={styles.cardIconSvg} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
              <path d="M12 11v6" />
              <path d="M9 14h6" />
            </svg>
            <Heading as="h3" className={styles.cardTitle}>
              File Highlighter
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Project Window</span>
            <span className={styles.tag}>Asset Tracking</span>
            <span className={styles.tag}>Organization</span>
          </div>
          <p className={styles.cardDescription}>
            Automatically highlights newly imported, moved, or deleted folders and files directly in the Unity Project window with smooth fade-out timers and native folder coloring.
          </p>
          <div className={styles.cardFooter}>
            <Link
              className="button button--sm button--primary"
              to="/docs/file-highlighter"
            >
              Learn More
            </Link>
            <a
              className="button button--sm button--outline button--secondary"
              href="https://github.com/KitsuneBa/FileHighlighter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Auto Backup */}
        <div className={styles.toolCard}>
          <div className={styles.cardHeader}>
            <svg className={styles.cardIconSvg} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <Heading as="h3" className={styles.cardTitle}>
              Auto Backup
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Scene Safety</span>
            <span className={styles.tag}>Auto-Archive</span>
            <span className={styles.tag}>Utility</span>
          </div>
          <p className={styles.cardDescription}>
            Automatically archives timestamped copies of your Unity scenes whenever you save, organized cleanly by project, scene name, and date with configurable cooldowns.
          </p>
          <div className={styles.cardFooter}>
            <Link
              className="button button--sm button--primary"
              to="/docs/auto-backup"
            >
              Learn More
            </Link>
            <a
              className="button button--sm button--outline button--secondary"
              href="https://github.com/KitsuneBa/AutoBackup"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Tools and assets for VRChat avatar creators by KitsuneBa"
    >
      <HomepageHero />
      <main>
        <ProductCards />
      </main>
    </Layout>
  );
}
