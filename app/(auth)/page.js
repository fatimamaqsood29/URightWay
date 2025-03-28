import UserTypeCard from '@/components/auth/UserTypeCard';

export default function UserTypePage() {
  // Local image paths
  const studentImage = '/images/Group 35086.png';
  const instituteImage = '/images/Group 35088.png';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-2xl text-center px-4">
        <h1 className="text-2xl font-normal text-gray-800 mb-9">Choose Your UserType</h1>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <UserTypeCard
            href="/student-signup"
            imageSrc={studentImage}
            altText="Student"
          />
          <UserTypeCard
            href="/institute-signup"
            imageSrc={instituteImage}
            altText="Institute"
          />
        </div>

        <p className="text-xs text-center text-gray-500 mt-16">
          By using U Right Way you agree to our terms and policy
        </p>
      </div>
    </div>
  );
}