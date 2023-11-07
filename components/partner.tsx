import Link from 'next/link'

function Partner({ href, src, alt, imgClass }: any) {
    return (
        <Link
            href={href}
            className="block"
            aria-label="aplos-partner">
            <img
                src={src}
                className={imgClass ?? 'h-10'}
                alt={alt} />
        </Link>
    )
}

export default Partner
