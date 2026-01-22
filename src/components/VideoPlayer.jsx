export default function VideoPlayer({ src, onEnd }) {
  return (
    <video
      className="fullscreen"
      src={src}
      autoPlay
      controls={false}
      onEnded={onEnd}
    />
  );
}
