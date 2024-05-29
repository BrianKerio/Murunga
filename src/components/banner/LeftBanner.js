import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["ESG Consultant.", "Environmental Scientist.", "Freelance Consultant.", "Research Associate."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Alfrick Murunga</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Highly motivated and experienced ESG Consultant with over a decade of experience in sustainable finance and transaction advisory in Africa. Adept at conducting ESG due diligence, developing sustainability strategies and initiatives, and providing financial structuring advice on investment transactions. Possesses a deep understanding of the African business landscape, regional regulations, and investment climate. Proven track record of designing innovative solutions to help clients navigate complex sustainability challenges while achieving positive outcomes for their businesses.
        With a comprehensive understanding of ESG principles and leading industry best practices, I bring an integrated approach to sustainability management. A believer in shared value creation, I'm committed to helping organizations build resilient strategies that benefit both our planet and our people.
        Core skills:
                 • Sustainable Finance & Investment Advisory 
                 • ESG Due Diligence & Compliance 
                 • Stakeholder Engagement & Consultation
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner