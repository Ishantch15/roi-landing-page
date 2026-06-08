import React, { useState, useEffect } from 'react';
import styles from './styles';
import { useJivoChat, useToast } from './hooks';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChallengesSection from './components/ChallengesSection';
import FrameworkSection from './components/FrameworkSection';
import FeaturesSection from './components/FeaturesSection';
import AEOSection from './components/AEOSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ComparisonSection from './components/ComparisonSection';
import RealResultsSection from './components/RealResultsSection';
import VideoSection from './components/VideoSection';
import CampaignSection from './components/CampaignSection';
import FAQSection from './components/FAQSection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';
import AuditModal from './components/AuditModal';
import { ToastContainer } from './components/Toast';

export default function ROISpectrum() {
  const [scrollY, setScrollY] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  useJivoChat();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleAuditSuccess = () => {
    addToast('Audit Request Received!', "We'll review your site and be in touch within 24 hours.");
  };

  return (
    <div>
      <style>{styles}</style>

      {modalOpen && <AuditModal onClose={closeModal} onSuccess={handleAuditSuccess} />}

      <ToastContainer toasts={toasts} onRemove={removeToast} />

      <Header
        scrollY={scrollY}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        openModal={openModal}
      />

      <main>
        <HeroSection
          subtitleVisible={subtitleVisible}
          buttonsVisible={buttonsVisible}
          openModal={openModal}
        />

        <ChallengesSection />

        <FrameworkSection openModal={openModal} />

        <FeaturesSection />

        <AEOSection />

        <CaseStudiesSection />

        <ComparisonSection />

        <RealResultsSection />

        <VideoSection />

        <CampaignSection />

        <FAQSection openFAQ={openFAQ} toggleFAQ={toggleFAQ} />

        <ProcessSection />

        <CTASection onAuditSuccess={handleAuditSuccess} />
      </main>
    </div>
  );
}
