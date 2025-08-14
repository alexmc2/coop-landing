
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link className="block" href="/">
      <div className=" rounded-2xl p-2 flex items-center justify-center">
        <Image src="/badge.svg" alt="Logo" width={100} height={100} />
      </div>
    </Link>
  );
}
