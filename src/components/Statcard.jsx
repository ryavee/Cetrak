const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition">

      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h2 className="text-xl font-semibold">{value}</h2>
      </div>

      <div className={`p-3 rounded-lg text-white ${color}`}>
        {icon}
      </div>

    </div>
  );
};

export default StatCard;