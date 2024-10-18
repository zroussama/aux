import React from 'react';
import {ThemeProvider} from "theme-ui";
import theme from "../theme";
import {StickyProvider} from "../contexts/app/app.provider";
import Layout from "../components/layout";

import Banner from "../sections/sdbaSections/banner";
import SEO from "../components/seo";
import SDBA from "../sections/sdbaSections/sdba";



export default function Sbda() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <StickyProvider>
                    <Layout>
                        <SEO title="SDBA" />
                       <Banner/>
                       <SDBA />
                    </Layout>
                </StickyProvider>
            </ThemeProvider>
        </>
    );
};
