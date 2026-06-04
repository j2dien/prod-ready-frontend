import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/features/dashboard/components/StatCard";
import VideoTable from "@/features/dashboard/components/VideoTable";
import RecentCommentList from "@/features/dashboard/components/RecentComment";
import { useDashboardData } from "@/features/dashboard/hooks/useDashboardData";

export default function CreatorDashboard() {
  const { stats, videos, comments, isLoading, error } = useDashboardData();

  if (isLoading)
    return <div className="p-10 text-center text-xl">Loading Dashboard...</div>;
  if (error) return <div className="text-red-500 p-10">{error}</div>;

  return (
    <div className="flex bg-gray-100 text-gray-900 min-h-screen">
      {/* Sidebar Navigation */}
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <Header />

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>

        {/* Data Table & Comments - All mashed together */}
        <div className="grid grid-cols-3 gap-8">
          <VideoTable videos={videos} />
          <RecentCommentList comments={comments} />
        </div>
      </div>
    </div>
  );
}
