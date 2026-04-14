import { Users, QrCode, Gift, IndianRupee } from "lucide-react";
import StatCard from "../components/Statcard";

const Dashboard = () => {
  return (
    <div className="space-y-6">

      {/* ===== TOP STATS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <StatCard
          title="Customers"
          value="1,245"
          icon={<Users />}
          color="from-[#8B3DFF] to-[#5A6BFF]"
        />

        <StatCard
          title="QR Scans"
          value="3,210"
          icon={<QrCode />}
          color="from-[#5A6BFF] to-[#00C4CC]"
        />

        <StatCard
          title="Rewards Given"
          value="850"
          icon={<Gift />}
          color="from-[#00C4CC] to-[#22C55E]"
        />

        <StatCard
          title="Revenue"
          value="₹45,000"
          icon={<IndianRupee />}
          color="from-[#F59E0B] to-[#FBBF24]"
        />

      </div>

      {/* ===== MIDDLE SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Chart Section */}
        <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-800">
              Engagement Overview
            </h2>
            <span className="text-xs text-slate-500">Last 7 days</span>
          </div>

          <div className="h-64 flex items-center justify-center text-slate-400">
            Chart Coming Soon 📈
          </div>
        </div>

        {/* Rewards Insight */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Rewards Insights
          </h2>

          <div className="space-y-4 text-sm">
            
            <div className="flex justify-between">
              <span className="text-slate-500">Total Points</span>
              <span className="font-semibold text-emerald-600">12,450</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Top Reward</span>
              <span className="font-semibold text-slate-800">₹50 Cashback</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Redemption Rate</span>
              <span className="font-semibold text-[#8B3DFF]">68%</span>
            </div>

          </div>
        </div>

      </div>

      {/* ===== ACTIVITY ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-center justify-between">
            <span>Ravi scanned QR</span>
            <span className="text-emerald-600 font-medium">+50 points</span>
          </li>

          <li>Amit redeemed reward</li>
          <li>New customer registered</li>
          <li>Campaign "Festive Offer" performing well</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;