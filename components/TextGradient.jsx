"use client";

const TextGradient = ({ text, textStyles, link }) => {
  return link ? (
    <a
      href={link}
      target="_blank"
      className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-modern-purple from-8% via-modern-blue via-90% to-modern-purple to-2% ${textStyles}`}
    >
      {text}
    </a>
  ) : (
    <span
      className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-modern-purple from-8% via-modern-blue via-90% to-modern-purple to-2% ${textStyles}`}
    >
      {text}
    </span>
  );
};

export default TextGradient;
