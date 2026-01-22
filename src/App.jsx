import { useState } from "react";
import Landing from "./components/Landing";
import VideoPlayer from "./components/VideoPlayer";
import Choice from "./components/Choice";
import Ending from "./components/Ending";
import Thanks from "./components/Thanks";

import sceneA from "./assets/sceneA.mp4";
import sceneB from "./assets/sceneB.mp4";
import scene2 from "./assets/scene2.mp4";
import ending1 from "./assets/ending1.mp4";
import ending2 from "./assets/ending2.mp4";
import ending3 from "./assets/ending3.mp4";

export default function App() {
  const [step, setStep] = useState("landing");
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);

  switch (step) {
    case "landing":
      return <Landing onStart={() => setStep("prolog")} />;

    case "prolog":
      return <VideoPlayer src={"https://res.cloudinary.com/dztyjqhyt/video/upload/v1769066043/prolog_c3th9v.mp4"} onEnd={() => setStep("choice1")} />;

    case "choice1":
      return (
        <Choice
          text={`Raka menerima video dari nomor tak dikenal. Dari tampilannya, itu jelas CCTV kamar miliknya. Ia bingung dan curiga—bagaimana rekaman itu bisa bocor?
                A. Raka langsung membuka video tersebut.
                B. Raka mencari tahu dulu siapa pengirimnya.`}
          onA={() => {
            setChoice1("A");
            setStep("sceneA");
          }}
          onB={() => {
            setChoice1("B");
            setStep("sceneB");
          }}
        />
      );

    case "sceneA":
      return <VideoPlayer src={sceneA} onEnd={() => setStep("choice2")} />;

    case "sceneB":
      return <VideoPlayer src={sceneB} onEnd={() => setStep("choice2")} />;

    case "choice2":
      return (
        <Choice
          text={`Fikri adalah satu-satunya orang yang ia percaya, tapi melibatkannya bisa berarti menyeret sahabatnya ke bahaya. Di sisi lain, menghadapi semua ini sendirian terasa terlalu berat.
                A. Libatkan Fikri
                B. Tidak melibatkan Fikri`}
          onA={() => {
            setChoice2("A");
            setStep("ending1");
          }}
          onB={() => {
            setChoice2("B");
            setStep("scene2");
          }}
        />
      );

    case "scene2":
      return <VideoPlayer src={scene2} onEnd={() => setStep("choice3")} />;

    case "choice3":
      return (
        <Choice
          text={`Raka berdiri sendiri di tengah ketidakpastian.
                Pengirim video itu jelas terlibat sesuatu yang berbahaya.
                Kini hanya ada dua pilihan:
                A. Laporkan ke polisi
                B. Sebarkan ke publik`}
          onA={() => setStep("ending2")}
          onB={() => setStep("ending3")}
        />
      );

    case "ending1":
      return <Ending video={ending1} onFinish={() => setStep("thanks")} />;

    case "ending2":
      return <Ending video={ending2} onFinish={() => setStep("thanks")} />;

    case "ending3":
      return <Ending video={ending3} onFinish={() => setStep("thanks")} />;

    case "thanks":
      return <Thanks />;

    default:
      return null;
  }
}
