"use client";

const GlassCard = ({ children, className }) => {
  return (
    <div
      className={`w-full glassmorphism relative overflow-hidden border-4 rounded-xl overflow-hidden ${className} `}
    >
      <div className="w-full rounded-xl overflow-hidden">{children}</div>
    </div>
  );
};

export default GlassCard;
