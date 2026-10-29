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
            ⚡ Add to VCC / ALCOM
          </a>

          <button
            type="button"
            className={clsx('button button--secondary', styles.buttonSecondary)}
            onClick={handleCopy}
          >
            {copied ? '✅ Copied VPM URL!' : '📋 Copy VPM URL'}
          </button>

          <Link
            className={clsx('button button--outline button--secondary', styles.buttonSecondary)}
            to="/docs/intro"
          >
            📖 Read Docs
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
            <span className={styles.cardIcon}>⚡</span>
            <Heading as="h3" className={styles.cardTitle}>
              Toggle Accelerator
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>VRCFury</span>
            <span className={styles.tag}>Modular Avatar</span>
            <span className={styles.tag}>Standalone</span>
          </div>
          <p className={styles.cardDescription}>
            Speeds up the creation of toggles, radial puppets, material swaps, blendshapes, and world-space freezes for VRCFury, Modular Avatar, or standalone animator setups.
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
            <span className={styles.cardIcon}>📊</span>
            <Heading as="h3" className={styles.cardTitle}>
              Optimization Helper
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Performance</span>
            <span className={styles.tag}>VRAM & Materials</span>
            <span className={styles.tag}>Analysis</span>
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

        {/* Import Highlighter */}
        <div className={styles.toolCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>✨</span>
            <Heading as="h3" className={styles.cardTitle}>
              Import Highlighter
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Project Window</span>
            <span className={styles.tag}>Asset Tracking</span>
            <span className={styles.tag}>Workflow</span>
          </div>
          <p className={styles.cardDescription}>
            Automatically highlights newly imported, moved, or deleted folders and files directly in the Unity Project window with smooth fade-out timers and instant ping navigation.
          </p>
          <div className={styles.cardFooter}>
            <Link
              className="button button--sm button--primary"
              to="/docs/import-highlighter"
            >
              Learn More
            </Link>
            <a
              className="button button--sm button--outline button--secondary"
              href="https://github.com/KitsuneBa/ImportHighlighter"
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
            <span className={styles.cardIcon}>💾</span>
            <Heading as="h3" className={styles.cardTitle}>
              Auto Backup
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Scene Safety</span>
            <span className={styles.tag}>Auto-Archive</span>
            <span className={styles.tag}>Unity Utility</span>
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
