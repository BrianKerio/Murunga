import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Background.</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Science - MS, Sustainable Development."
            subTitle="University of Sussex (2019 - 2022)"
            result="Distinction."
            des=""
          />
          <ResumeCard
            title="Certificate , Land Acquisition, Resettlement and Social Sustainability."
            subTitle="University of Croningen (2017 - 2017)"
            result="Distinction."
            des=""
          />
          <ResumeCard
            title="Bachelors of Science In Environmental Science."
            subTitle="Ergeton University (2005 - 2009)"
            result="Second Class Owners."
            des=""
          />
          <ResumeCard
            title="Kenya Certificate Of Secondary Education."
            subTitle="Chewoyet High School (2000 - 2003)"
            result="Passed."
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Job/Work Experience.</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ESG Consultant"
            subTitle="IBIS Consulting - (Jan 2017 - Present)"
            result="Nairobi, Kenya."
            des="As an ESG Consultant at IBIS East Africa in Nairobi, am tasked with following:
            -Business Development & preparation of bids for clients mostly in the Financial Sector (i.e. PE Firms/Fund Managers, Portfolio companies, DFIs)."
          />
          <ResumeCard
            title="Environmental and Social Safeguard Consultant."
            subTitle="Freelance Consultant - (Feb 2015 - Dec 2016)"
            result="Nairobi, Kenya."
            des=""
          />
           <ResumeCard
            title="Environmental Scientist."
            subTitle="Earth Systems - (Jan 2016 - Sep 2016)"
            result="Kigali, Rwanda."
            des="Conducting field research, analyzing data, assessing environmental impacts, and developing solutions to protect ecosystems and promote sustainability practices."
          />
           <ResumeCard
            title="Research Associate."
            subTitle="DAI - (Part-Time)"
            result="Kigali, Rwanda."
            des=""
          />
           <ResumeCard
            title="Senior Graduate Environmentalist."
            subTitle="GIBB Africa LTD - (Jun 2009 - Feb 2015)"
            result="Nairobi, Kenya."
            des=""
          />
          
          
        </div>
      </div>
    </motion.div>
  );
}

export default Education