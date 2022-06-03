import { ContainerEl } from "../Container/ContainerElement";
import { ImageEl } from "../Image/ImageElement";
import {
  HeroBtn,
  HeroClientsList,
  HeroClientsListItem,
  HeroClientsListLink,
  HeroContent,
  HeroContentColLeft,
  HeroContentColRight,
  HeroHeading,
  HeroText,
  HeroWrapper,
} from "./HeroElements";
import HeroDesktopImage from "../../images/image-hero-desktop.png";
import HeroMobileImage from "../../images/image-hero-mobile.png";
import ClientAudiophile from "../../images/client-audiophile.svg";
import ClientDatabiz from "../../images/client-databiz.svg";
import ClientMaker from "../../images/client-maker.svg";
import ClientMeet from "../../images/client-meet.svg";

const Hero = () => {
  const clients = [ClientDatabiz, ClientAudiophile, ClientMeet, ClientMaker];

  return (
    <>
      <HeroWrapper>
        <ContainerEl>
          <HeroContent>
            <HeroContentColLeft>
              <HeroHeading>Make remote work</HeroHeading>
              <HeroText>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </HeroText>
              <HeroBtn to="learn-more">Learn more</HeroBtn>
              <HeroClientsList>
                {clients.map((client, i) => {
                  return (
                    <HeroClientsListItem key={i}>
                      <HeroClientsListLink href="#" target="_blank">
                        <ImageEl src={client} alt="" />
                      </HeroClientsListLink>
                    </HeroClientsListItem>
                  );
                })}
              </HeroClientsList>
            </HeroContentColLeft>
            <HeroContentColRight>
              <ImageEl src={HeroDesktopImage} className="deskto-img" />
            </HeroContentColRight>
          </HeroContent>
        </ContainerEl>
      </HeroWrapper>
    </>
  );
};

export default Hero;
