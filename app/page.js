// app/user-type/page.js
import Link from 'next/link';
import Image from 'next/image';

// Updated to use local images from public folder
const studentImage = '/Group 35086.png';
const instituteImage = '/Group 35088.png';

export default function UserTypePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-2xl text-center px-4">
        <h1 className="text-2xl font-normal text-gray-800 mb-9">Choose Your UserType</h1>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Student Card */}
          <Link
            href="/student-signup"
            className="flex-1 group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <div className="relative h-48 w-full">
              <Image
                src={studentImage}
                alt="Student"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Institute Card */}
          <Link
            href="/institute-signup"
            className="flex-1 group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <div className="relative h-48 w-full">
              <Image
                src={instituteImage}
                alt="Institute"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>
        </div>

        <p className="text-xs text-center text-gray-500 mt-16">
          By using U Right Way you agree to our terms and policy
        </p>
      </div>
    </div>
  );
}