'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import MainLayout from 'src/layouts/main';

import HomePartners from '../home-partners';
import HomeSeo from '../home-seo';
import HomeTeam from '../home-team';
import HomeHero from '../home-hero';
import HomeWhyUs from '../home-whyUs';
import HomePricing from '../home-pricing';
import HomeHesitation from '../home-hesitation';
import HomeContactForm from '../home-contact-form';
import HomeClientsFeedback from '../home-clients-feedback';
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export default function HomeView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <MainLayout>
      <section id={'home'}>
        <HomeHero />
      </section>

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <section id={'why-us'}>
          <HomeWhyUs />
        </section>
        <section id={'clients'}>
          <HomeClientsFeedback />
        </section>
        {/* <section>
          <HomePartners />
        </section> */}

        <section id={'tarifs'}>
          <HomePricing />
        </section>
        <HomeHesitation />
        <section id={'team'}>
          <HomeTeam />
        </section>

        <section id={'contact-us'}>
          <HomeContactForm />
        </section>
        <HomeSeo />
      </Box>
    </MainLayout>
  );
}
