import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/supportSections/banner";
import FAQ from "sections/supportSections/faq";

export default function SupportPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Support" />
          <Banner />
          <FAQ />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
