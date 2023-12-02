function Avatar({ src }: { src: string }) {
  return (
    <div className="w-36 h-36 my-4">
      <img
        src={src}
        alt="Avatar"
        className="w-full h-full object-cover max-w-full max-h-full"
      />
    </div>
  );
}

export default Avatar;
