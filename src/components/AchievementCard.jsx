import React from 'react';
import { Trophy, Award, Globe, BarChart3 } from 'lucide-react';

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Globe: Globe,
  BarChart3: BarChart3,
};

export default function AchievementCard({ achievement }) {
  const IconComponent = iconMap[achievement.iconName] || Trophy;

  return (
    <div className="bg-white rounded-3xl p-7 border border-[#EEF5E8] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden group">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF5E8] text-[#174D25] group-hover:bg-[#174D25] group-hover:text-[#B7D334] flex items-center justify-center transition-colors duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          {achievement.year && (
            <span className="bg-[#174D25] text-[#B7D334] text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
              {achievement.year}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-extrabold text-[#174D25] group-hover:text-[#3F7D20] transition-colors leading-snug">
            {achievement.title}
          </h3>
          <p className="text-xs font-semibold text-[#7FAF28] tracking-wide">
            {achievement.organizer}
          </p>
          <p className="text-sm text-[#667066] leading-relaxed pt-1">
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );
}
