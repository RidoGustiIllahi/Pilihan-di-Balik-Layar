import VideoPlayer from "./VideoPlayer";

export default function Ending({ video, onFinish }) {
  return <VideoPlayer src={video} onEnd={onFinish} />;
}
