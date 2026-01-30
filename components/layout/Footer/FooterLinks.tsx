import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: Array<{ href: string; label: string }>;
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-orange-500">{title}</h3>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-gray-300 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
