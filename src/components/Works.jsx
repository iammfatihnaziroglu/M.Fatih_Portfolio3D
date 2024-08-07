import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { linkedinicon, spotifyicon, instagramicon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  icon,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-hero-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-neutral-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={icon}
                alt="project_icon"
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>The name of this chapter:</p>
       
        {/* <div className="w-full flex opacity-50">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="pt-1 ml-0 text-[#ede0d4] text-[15px] max-w-3xl leading-[30px]"
        >
          Social Media Accounts
        </motion.p>
      </div> */}

        <h2 className={`${styles.sectionHeadText}`}>The Me</h2>
      </motion.div>

     

      <div className="mt-16 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index} {...project}
          projectIcon={project.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "me");
