import {
  FiActivity,
  FiMapPin,
  FiHome,
  FiClock,
  FiAirplay,
  FiCoffee,
  FiSun,
  FiStar,
} from "react-icons/fi";

const TripDaySummary = ({ dayLabel, stats, sections }) => {
  return (
    <section className="space-y-3">
      {/* Day header */}
      <div className="flex items-center justify-between text-sm text-gray-900">
        <p className="font-semibold">{dayLabel}</p>

        {/* Right-side compact stats */}
        <div className="flex items-center gap-4 text-xs text-gray-600">
          {typeof stats.activities === "number" && (
            <span className="inline-flex items-center space-x-1">
              <FiActivity size={12} />
              <span>{stats.activities}</span>
            </span>
          )}
          {typeof stats.hotels === "number" && (
            <span className="inline-flex items-center space-x-1">
              <FiHome size={12} />
              <span>{stats.hotels}</span>
            </span>
          )}
          {typeof stats.transfers === "number" && (
            <span className="inline-flex items-center space-x-1">
              <FiMapPin size={12} />
              <span>{stats.transfers}</span>
            </span>
          )}
          {typeof stats.flights === "number" && stats.flights > 0 && (
            <span className="inline-flex items-center space-x-1">
              <FiAirplay size={12} />
              <span>{stats.flights}</span>
            </span>
          )}
        </div>
      </div>

      {/* Body blocks */}
      <div className="space-y-3 text-sm text-gray-800">
        {sections.map((section, idx) => {
          const {
            type, // "transfer" | "hotel" | "activity" | "meal" | "note" | "flight"
            title,
            label,
            lines,
            meta,
            text,
          } = section;

          const iconMap = {
            transfer: FiMapPin,
            activity: FiActivity,
            hotel: FiHome,
            meal: FiCoffee,
            note: FiSun,
            flight: FiAirplay,
          };

          const Icon = iconMap[type] || FiActivity;

          // Note / leisure block
          if (type === "note") {
            return (
              <div
                key={idx}
                className="mt-1 rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-800 flex items-center space-x-2"
              >
                <Icon className="flex-shrink-0" />
                <span>{title}</span>
              </div>
            );
          }

          // Flight block with meta info
          if (type === "flight") {
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="px-4 py-2 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center space-x-1 text-gray-700">
                    <Icon size={14} />
                    <span className="font-medium">{title}</span>
                  </span>
                  {meta?.duration && (
                    <span className="inline-flex items-center space-x-1">
                      <FiClock size={12} />
                      <span>{meta.duration}</span>
                    </span>
                  )}
                </div>
                {meta && (
                  <div className="px-4 py-3 grid grid-cols-2 text-xs text-gray-600">
                    <div>
                      <p className="uppercase tracking-wide text-[11px] text-gray-500">
                        Starts At
                      </p>
                      <p className="mt-0.5 font-medium text-gray-800">
                        {meta.start}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="uppercase tracking-wide text-[11px] text-gray-500">
                        Ends
                      </p>
                      <p className="mt-0.5 font-medium text-gray-800">
                        {meta.end}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          }

          // Default block (transfer, activity, hotel, meal)
          return (
            <div key={idx} className="flex items-start space-x-2">
              <Icon className="mt-0.5 text-gray-500 flex-shrink-0" />
              <div className="space-y-1">
                {(label || text) && (
                  <p>
                    {label && <span className="font-semibold">{label}</span>}
                    {text && (
                      <>
                        {" "}
                        <span>{text}</span>
                      </>
                    )}
                  </p>
                )}
                {Array.isArray(lines) && lines.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {lines.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TripDaySummary;