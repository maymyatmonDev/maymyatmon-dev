"use client";

const TextGradient = ({ text, textStyles }) => {
  return (
    <p
      className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-modern-purple from-8% via-modern-blue via-90% to-modern-purple to-2% ${textStyles}`}
    >
      {text}
    </p>
  );
};

export default TextGradient;
