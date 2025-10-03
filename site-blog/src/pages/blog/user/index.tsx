import Image from "next/image";
import Link from 'next/link'

export default function UserPage() {
  return (
    <div>
      <h2>User</h2>
      <Link href="/" replace>
        Home
      </Link>
      <Image
        src="/assets/images.jpeg"
        width={300}
        height={168}
        alt="Picture of the author"
      />
    </div>
  );
}
