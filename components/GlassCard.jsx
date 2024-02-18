"use client";

const GlassCard = ({ children }) => {
  return (
    <div className="w-full glassmorphism relative overflow-hidden border-4 rounded-xl overflow-hidden">
      <div className="w-full min-h-[200px] rounded-xl overflow-hidden p-8">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
