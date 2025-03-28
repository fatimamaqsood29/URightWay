import Link from 'next/link';
import Image from 'next/image';

export default function UserTypeCard({ href, imageSrc, altText }) {
  return (
    <Link
      href={href}
      className="flex-1 group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
          priority
        />
      </div>
    </Link>
  );
}