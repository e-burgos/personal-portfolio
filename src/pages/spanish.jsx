import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-english";
import PortfolioArea from "@containers/portfolio/layout-01";
import ResumeArea from "@containers/resume/layout-01";
import ClientArea from "@containers/client/layout-01";
import ContactArea from "@containers/contact/layout-01";
import EducationArea from "@containers/education/layout-01";
import ExperienceArea from "@containers/experience/layout-01";

const IndexPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout pageTitle="Esteban Burgos">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper">
                <HeroArea
                    data={{
                        ...content["hero-section"],
                        socials: data.site.siteMetadata.socials,
                    }}
                />
                <ResumeArea data={content["resume-section"]}>
                    <EducationArea data={content["education-section"]} />
                    <ExperienceArea data={content["experience-section"]} />
                </ResumeArea>
                <PortfolioArea data={content["portfolio-section"]} />
                <ClientArea data={content["client-section"]} />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        socials: data.site.siteMetadata.socials,
                        phone: data.site.siteMetadata?.contact?.phone,
                        email: data.site.siteMetadata?.contact?.email,
                        getform_url: data.site.siteMetadata?.getform_url,
                    }}
                />
            </main>
            <Footer data={{ ...data.footer }} className="section-separator" />
        </Layout>
    );
};

export const query = graphql`
    query SpanishPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-english" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-english" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-english" }) {
            ...Footer01
        }
        homePage(title: { eq: "default-english" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 3) {
            nodes {
                ...Article
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default IndexPage;
