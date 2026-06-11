import { useState } from 'react';

const PLACEHOLDER = (
  <div className="about-photo-placeholder" aria-hidden="true">
    <span>DT</span>
  </div>
);

export const AboutPhoto = () => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return PLACEHOLDER;
  }

  return (
    <img
      className="about-photo"
      src="/about-photo.jpg"
      alt="Portrait of Dhairya Trivedi"
      width={280}
      height={280}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
};
