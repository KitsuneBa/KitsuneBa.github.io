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

        <div className={styles.urlBarContainer} style={{ maxWidth: 760, margin: '2.5rem auto 0 auto' }}>
          <span className={styles.urlText}>{VPM_REPO_URL}</span>
          <button
            type="button"
            className="button button--sm button--secondary"
            onClick={handleCopy}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
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
            <span className={styles.tag}>VRChat</span>
          </div>
          <p className={styles.cardDescription}>
            Speeds up the creation of toggles for VRCFury and Modular Avatar.
            Quickly generate clothes, accessories, and prop toggles in seconds directly inside Unity.
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

        {/* VPM Package Repository */}
        <div className={styles.toolCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>📦</span>
            <Heading as="h3" className={styles.cardTitle}>
              VPM Repository
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>VCC</span>
            <span className={styles.tag}>ALCOM</span>
            <span className={styles.tag}>Auto-Updates</span>
          </div>
          <p className={styles.cardDescription}>
            Official package repository listing for Creator Companion and ALCOM.
            Install and receive automatic updates for all KitsuneBa tools in one centralized place.
          </p>
          <div className={styles.cardFooter}>
            <Link
              className="button button--sm button--primary"
              to="/docs/vpm-listing"
            >
              Install Guide
            </Link>
            <a
              className="button button--sm button--outline button--secondary"
              href={VCC_DEEP_LINK}
            >
              Add to VCC
            </a>
          </div>
        </div>

        {/* Non-Destructive Workflow */}
        <div className={styles.toolCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>🧩</span>
            <Heading as="h3" className={styles.cardTitle}>
              Non-Destructive Design
            </Heading>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Modular</span>
            <span className={styles.tag}>Clean Hierarchy</span>
            <span className={styles.tag}>Safe</span>
          </div>
          <p className={styles.cardDescription}>
            Built with modern non-destructive avatar design principles.
            Your original base FBX, animations, and controller structures remain clean and unaltered.
          </p>
          <div className={styles.cardFooter}>
            <Link
              className="button button--sm button--secondary"
              to="/docs/intro"
            >
              Explore Docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
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
