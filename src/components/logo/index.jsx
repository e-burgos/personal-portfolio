import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import cn from "classnames";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const Logo = ({ className, image }) => {
    return (
        <div className={cn("logo", className)}>
            <Link to="/" className={"logo-container"}>
                {image?.src && (
                    <Image
                        src={image.src}
                        alt={image?.alt || "logo"}
                        className="rounded-circle w-50px"
                    />
                )}
                <h3 className="font-logo">Esteban Burgos</h3>
            </Link>
        </div>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
};

export default Logo;
