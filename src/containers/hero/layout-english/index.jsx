import React from "react";
import PropTypes from "prop-types";
import Typed from "react-typed";
import Social, { SocialLink } from "@ui/social";
import Image from "@ui/image";
import { GitHub, PenTool } from "react-feather";
import Icon from "@ui/icon";
import {
    ImageType,
    HeadingType,
    TextType,
    SocialType,
    SkillType,
} from "@utils/types";

const HeroArea = ({ data, id }) => {
    return (
        <div id={id} className="rn-slider-area">
            <div className="slide slider-style-1">
                <div className="container">
                    <div className="order-2 order-lg-1 col-lg-12 mt_md--50 mt_sm--50 mt_lg--50">
                        <div className="content">
                            <div className="inner">
                                {data?.headings?.[0] && (
                                    <span className="subtitle">
                                        {data.headings[0].content}
                                    </span>
                                )}

                                {data?.headings?.[1] && (
                                    <h1 className="title">
                                        <span
                                            className="title-main"
                                            dangerouslySetInnerHTML={{
                                                __html: data.headings[1]
                                                    .content,
                                            }}
                                        />
                                        <br />
                                        {data?.animated_texts && (
                                            <span
                                                className="header-caption"
                                                id="page-top"
                                            >
                                                <span className="cd-headline clip is-full-width">
                                                    <span>a </span>{" "}
                                                    <Typed
                                                        className="animated-texts"
                                                        strings={
                                                            data.animated_texts
                                                        }
                                                        typeSpeed={50}
                                                        backSpeed={50}
                                                        backDelay={1}
                                                        loop
                                                        smartBackspace
                                                    />
                                                </span>
                                            </span>
                                        )}
                                    </h1>
                                )}
                                {data?.texts?.[0] && (
                                    <div>
                                        <p className="description">
                                            {data.texts[0].content}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
                                    {data?.socials && (
                                        <div className="social-share-inner-left">
                                            <span className="title">
                                                find with me
                                            </span>
                                            <Social>
                                                {data.socials.map((social) => (
                                                    <SocialLink
                                                        key={social.id}
                                                        path={social.path}
                                                    >
                                                        {social.icon ===
                                                        "Github" ? (
                                                            <GitHub />
                                                        ) : social.icon ===
                                                          "Blog" ? (
                                                            <PenTool />
                                                        ) : (
                                                            <Icon
                                                                name={
                                                                    social.icon
                                                                }
                                                            />
                                                        )}
                                                    </SocialLink>
                                                ))}
                                            </Social>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        animated_texts: PropTypes.arrayOf(PropTypes.string),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        skills: PropTypes.arrayOf(PropTypes.shape(SkillType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
