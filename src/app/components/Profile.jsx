import { socials, about } from "@/data/data";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
    return (
        <>
            <img
                src="/McCulloughHeadshot.jpg"
                className="w-[70px] h-[70px] rounded-[50%] object-cover object-center"
                alt={`${about.name}'s profile`}
            />
            <div className="flex gap-[5px] items-center mt-1">
                <h1 className="text-2xl font-semibold">{about.name}</h1>
            </div>
            <div className="mt-1.5 flex items-center gap-1">
                <p className="text-base text-base-content/60">{about.role} </p>
                
            </div>
            <div className="flex items-center mt-3 gap-4">
                <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub size={22} />
                </a>

                <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={22} />
                </a>

                <a
                    href={socials.email}
                    aria-label="Email"
                >
                    <Mail size={22} />
                </a>

                <a
                    href={socials.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Resume"
                >
                    <FileText size={22} />
                </a>
            </div>
        </>
    );
}
