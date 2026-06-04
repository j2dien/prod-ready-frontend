import { Card } from "@/components/Card";
import { UserProfile } from "@/features/profile/components/UserProfile";
import { Link } from "@tanstack/react-router";

export function Playground() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <Link
        to="/composition"
        className="self-start bg-green-600 text-white px-4 py-2 rounded-md font-semibold"
      >
        Composition Challenge
      </Link>

      <div className="flex gap-8">
        <UserProfile
          name="John Doe"
          avatarUrl="https://i.pinimg.com/736x/8e/fd/a5/8efda581052d836d7d552acff8dc0e7b.jpg"
          role="Senior Architect"
          isAdmin={true}
        />
        <UserProfile
          name="AI Assistant"
          avatarUrl="https://ui-avatars.com/api/?name=AI+Assistant&size=200&background=random"
          role="Junior Developer"
        />

        <Card title="System Status">
          <p className="text-gray-600">All systems operational.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Run Diagnostic
          </button>
        </Card>
      </div>
    </div>
  );
}
