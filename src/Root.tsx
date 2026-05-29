import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import { HowItWorks } from "./HowItWorks";
import { GoogleDashboard } from "./GoogleDashboard";
import { LinkedIn } from "./LinkedIn";
import { BusinessCard } from "./BusinessCard";
import { FideliteVideo } from "./FideliteVideo";
import { InstagramVideo } from "./InstagramVideo";
import { SnapchatVideo } from "./SnapchatVideo";
import { HotelVideo } from "./HotelVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="HelloWorld" component={HelloWorld} durationInFrames={150} fps={30} width={1920} height={1080} schema={myCompSchema} defaultProps={{ titleText: "Welcome to Remotion", titleColor: "#000000", logoColor1: "#91EAE4", logoColor2: "#86A8E7" }} />
      <Composition id="SnapchatVideo" component={SnapchatVideo} durationInFrames={510} fps={30} width={1920} height={1080} />
      <Composition id="InstagramVideo" component={InstagramVideo} durationInFrames={510} fps={30} width={1920} height={1080} />
      <Composition id="FideliteVideo" component={FideliteVideo} durationInFrames={600} fps={30} width={1920} height={1080} />
      <Composition id="BusinessCard" component={BusinessCard} durationInFrames={540} fps={30} width={1920} height={1080} />
      <Composition id="OnlyLogo" component={Logo} durationInFrames={150} fps={30} width={1920} height={1080} schema={myCompSchema2} defaultProps={{ logoColor1: "#91dAE2" as const, logoColor2: "#86A8E7" as const }} />
      <Composition id="HowItWorks" component={HowItWorks} durationInFrames={200} fps={30} width={1920} height={1080} />
      <Composition id="LinkedIn" component={LinkedIn} durationInFrames={540} fps={30} width={1920} height={1080} />
      <Composition id="GoogleDashboard" component={GoogleDashboard} durationInFrames={420} fps={30} width={1920} height={1080} />
<Composition id="HotelVideo" component={HotelVideo} durationInFrames={525} fps={30} width={1920} height={1080} />
<Composition id="HotelVideoVertical" component={HotelVideo} durationInFrames={525} fps={30} width={1080} height={1920} />
    </>
  );
};