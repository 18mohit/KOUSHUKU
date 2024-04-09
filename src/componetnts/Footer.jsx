import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="footer bg-gray-700 bg-opacity-100 w-full ">
        <div className="text-center sm:text-left sm:grid sm:grid-cols-5 justify-around text-wrap font-light">
          <div>
            <h3 className="font-bold mb-2">KOUSHUKU ON WEB</h3>
            <ul className="space-y-1">
              <li className="flex items-center hover:text-white cursor-pointer">
                <FiYoutube className="mr-2" />
                Our YouTube Official Channel.
              </li>
              <li className="flex items-center hover:text-white cursor-pointer">
                <FaInstagram className="mr-2" />
                Instagram
              </li>
              <li className="flex items-center hover:text-white cursor-pointer">
                <RiFacebookCircleLine className="mr-2" />
                Facebook
              </li>
              <li className="flex items-center hover:text-white cursor-pointer">
                <RiTwitterXFill className="mr-2" />X
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">CHAMPIONSHIPS</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">
                WORLD CHAMPIONSHIPS
              </li>
              <li className="hover:text-white cursor-pointer">KARATE 1</li>
              <li className="hover:text-white cursor-pointer">RANKING</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">CONTINENTAL FEDERATIONS</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">AKF</li>
              <li className="hover:text-white cursor-pointer">AIKF</li>
              <li className="hover:text-white cursor-pointer">KAI</li>
              <li className="hover:text-white cursor-pointer">OKF</li>
              <li className="hover:text-white cursor-pointer">UFAK</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">PARTNERS</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">ADIDAS</li>
              <li className="hover:text-white cursor-pointer">ARAWAZA</li>
              <li className="hover:text-white cursor-pointer">BEST SPORT</li>
              <li className="hover:text-white cursor-pointer">BUDO-NORD</li>
              <li className="hover:text-white cursor-pointer">DAEDO</li>
              <li className="hover:text-white cursor-pointer">HAYASHI</li>
              <li className="hover:text-white cursor-pointer">ISHII</li>
              <li className="hover:text-white cursor-pointer">PUNOK</li>
              <li className="hover:text-white cursor-pointer">SHUREIDO</li>
              <li className="hover:text-white cursor-pointer">SMAI</li>
              <li className="hover:text-white cursor-pointer">TAISHAN</li>
              <li className="hover:text-white cursor-pointer">TATAMIX</li>
              <li className="hover:text-white cursor-pointer">TOKAIDO</li>
              <li className="hover:text-white cursor-pointer">TROCELLEN</li>
              <li className="hover:text-white cursor-pointer">WACOKU</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">USEFULL LINKS</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">I.O.C</li>
              <li className="hover:text-white cursor-pointer">I.P.C</li>
              <li className="hover:text-white cursor-pointer">
                WORLD GAME ASSOCIATION
              </li>
              <li className="hover:text-white cursor-pointer">W.A.D.A</li>
              <li className="hover:text-white cursor-pointer">SPORTACORD</li>
              <li className="hover:text-white cursor-pointer">A.R.I.A.S.F</li>
              <li className="hover:text-white cursor-pointer">PEACE&SPORT</li>
              <li className="hover:text-white cursor-pointer">SPORTDATA</li>
              <li className="hover:text-white cursor-pointer">VIRTUS</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
