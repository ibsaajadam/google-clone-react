function Avatar({ url, className }) {
  return (
    <img
      loading="lazy" // rest of page can load if image isn't loaded
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="profile pic"
      />
  )
};

export default Avatar

// _rfce
