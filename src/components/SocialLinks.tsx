import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config';

import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillYoutube, AiOutlineX } from "react-icons/ai";

const { publicRuntimeConfig } = getConfig();
const appConfig = publicRuntimeConfig.appConfig;

function SocialLinks() {
    const { github, linkedin, instagram, stackOverflow } = appConfig?.socialLinks;
    return (
        <>
            <Link href={github} target="_blank">
                <AiFillGithub size={20} />
            </Link>
            <Link href={linkedin} target="_blank">
                <AiFillLinkedin size={20} />
            </Link>
            <Link href={instagram} target="_blank">
                <AiFillInstagram size={20} />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
                <AiFillYoutube size={20} />
            </Link>
            <Link href="https://x.com/thegitcoder" target="_blank">
                <AiOutlineX size={20} />
            </Link>
        </>
    )
}

export default SocialLinks;