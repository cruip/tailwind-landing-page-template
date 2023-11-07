import Link from 'next/link'
import PropTypes from "prop-types";

function Partner({ href, src, alt }: any) {
    return (
        <Link
            href={href}
            className="block"
            aria-label="aplos-partner">
            <img
                src={src}
                className="h-10"
                alt={alt} />
        </Link>
    )
}

Partner.propTypes = {
    href: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
}

export default Partner
