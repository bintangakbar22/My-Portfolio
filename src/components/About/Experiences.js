import React from "react";

const Experiences = () => {
    return (
        <div>
            <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-sky-400 dark:text-indigo-900 mb-2 md:mb-4">
                Experiences
            </h1>
            <div className="text-justify mb-1 md:mb-2 lg:mb-4">
                <h1 className="font-semibold text-center">
                    [IT Support - AIA Group Limited]
                </h1>
                <li>
                    Configuring Networking using Mikrotik Router and Cisco Switch
                </li>
                <li>
                    Configuring Domain and VPN
                </li>
                <li>
                    Troubleshooting problematic computer systems or network components
                </li>
                <li>
                    Develop design documents, user guides, maintenance documents, project documentation, and release documents
                </li>
                <li>
                    Respond to all inquiries and requests in a timely manner
                </li>
            </div>
            <div className="text-justify">
                <h1 className="font-semibold text-center">
                    [ React Native Bootcamp - Binar Academy]
                </h1>
                <li>
                    Learn about React Native and other related based on Binar
                    Academy's React Native syllabus to be ready for work
                </li>
                <li>Learn to work together as a team to create projects</li>
                <li>Skill: Redux Thunk · React Hooks · Jest · ESLint · Redux.js · Front-End Development · React Native · Continuous Integration
and Continuous Delivery (CI/CD) · JavaScript</li>
            </div>
        </div>
    );
};

export default Experiences;
