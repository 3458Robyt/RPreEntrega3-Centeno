import { SiTwitter, SiInstagram } from "react-icons/si";
import Etherscan from "../../assets/icons/etherscan.svg";
import Opensea from "../../assets/icons/opensea.svg";
import Streetlab from "../../assets/icons/streetlab.svg";

import "./Links.css";

export default function Links() {
  return (
    <div className="Links">
      <a href="https://www.streetlab.io/" target="_blank">
        <img src={Streetlab} className="iconSvg" />
      </a>
      <a href="https://twitter.com/terryurban" target="_blank">
        <SiTwitter />
      </a>
      <a href="https://www.instagram.com/terryurban" target="_blank">
        <SiInstagram />
      </a>
      <a
        href="https://etherscan.io/token/0x06b6553B18d9137CFfc481C48251c4B07579a70c"
        target="_blank"
      >
        <img src={Etherscan} className="iconSvg" />
      </a>
      <a
        href="https://opensea.io/collection/kooks-by-terry-urban"
        target="_blank"
      >
        <img src={Opensea} className="iconSvg" />
      </a>
    </div>
  );
}
