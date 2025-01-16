import React from "react";

export default function SlideAnimation(){
    return(
         <div className="bg-gray-800 w-full h-heightslider relative top-sliderheight overflow-hidden flex justify-center items-center">
          <ul className="flex animate-slide">
            {/* Liste originale des logos */}
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="WIS" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="EPSI" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="IDRACBS" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="IHEDREA" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="IET" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="IGEFI" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="ESAIL" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="IEFT" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="VIVA" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="SUPDECOM" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="IFAG" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="ICL" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="ILERI" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="EPSI" className="h-16" />
            </li>
            {/* Duplication de la liste des logos pour l'effet de boucle */}
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="WIS" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="EPSI" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="IDRACBS" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="IHEDREA" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="IET" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="IGEFI" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="ESAIL" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="IEFT" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="VIVA" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="SUPDECOM" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="IFAG" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux2.png" alt="ICL" className="h-16" />
            </li>
            <li className="mx-2 sm:mx-4 md:mx-7">
              <img src="LOGO_Bandeaux.png" alt="ILERI" className="h-16" />
            </li>
          </ul>
        </div>
    );
}