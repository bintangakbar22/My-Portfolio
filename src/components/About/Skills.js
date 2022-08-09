import React from "react";
import {
    SiCplusplus,
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiPhp,
    SiReact,
    SiRedux,
} from "react-icons/si";

const Skills = () => {
    const iconClass = "w-6 h-6 md:mr-1 lg:mb-1 lg:w-7 lg:h-7 xl:w-8 xl:h-8";

    const skills = [
        {
            id: 1,
            icon: <SiReact className={iconClass} />,
            title: "React Js",
            hover: "hover:text-sky-400 dark:hover:text-sky-400",
        },
        {
            id: 2,
            icon: <SiReact className={iconClass} />,
            title: "React Native",
            hover: "hover:text-sky-400 dark:hover:text-sky-400",
        },
        {
            id: 3,
            icon: <SiRedux className={iconClass} />,
            title: "Redux",
            hover: "hover:text-purple-500 dark:hover:text-purple-500",
        },
        {
            id: 4,
            icon: <SiJavascript className={iconClass} />,
            title: "Javascript",
            hover: "hover:text-yellow-400 dark:hover:text-yellow-400",
        },
        {
            id: 5,
            icon: <SiGit className={iconClass} />,

            title: "Git",
            hover: "hover:text-red-500 dark:hover:text-red-500",
        },
        {
            id: 6,
            icon: <SiMysql className={iconClass} />,
            title: "MySQL",
            hover: "hover:text-cyan-600 dark:hover:text-cyan-600",
        },
        {
            id: 7,
            icon: <SiHtml5 className={iconClass} />,
            title: "HTML",
            hover: "hover:text-orange-600 dark:hover:text-orange-600",
        },
        {
            id: 8,
            icon: <SiCss3 className={iconClass} />,
            title: "CSS",
            hover: "hover:text-sky-600 dark:hover:text-sky-600",
        },
        {
            id: 9,
            icon: <SiPhp className={iconClass} />,
            title: "PHP",
            hover: "hover:text-indigo-200 dark:hover:text-indigo-200",
        },
        {
            id: 10,
            icon: <SiCplusplus className={iconClass} />,
            title: "C++",
            hover: "hover:text-blue-500 dark:hover:text-blue-500",
        },
    ];

    return (
        <div className="w-full">
            <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-sky-400 dark:text-indigo-900 mb-2 md:mb-4">
                Skills
            </h1>
            <div className="w-full flex flex-wrap justify-evenly items-center">
                {skills.map(({ id, icon, title, hover }) => (
                    <div
                        key={id}
                        className={`w-3/12 mb-4 landscape:mb-2 md:landscape:mb-4 lg:landscape:mb-6 flex justify-center items-center text-slate-800 dark:text-slate-50 ${hover}`}
                    >
                        {icon}
                        <h1 className="text-xs lg:text-sm xl:text-base font-semibold md:flex hidden">
                            {title}
                        </h1>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default Skills;
