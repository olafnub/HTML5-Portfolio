"use client"
import React, {useEffect, useState} from 'react'
import Link from "next/link"
import "./chains.css"

let modifiedCount = 10;

const FlexCenter: React.FC<{ children: React.ReactNode}> = ({ children }) => (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        {children}
    </div>
)

const cleanHref = (href: string) => {
    const split = href.split("/");
    return split[2];
}

// const Arrow = () => <span className="arrow">➜</span>;

const LinkItem: React.FC<{ href: string, text: string, extraInfo?: string, date: string, mediumType: string, index: number}> = ({ href, text, extraInfo, date, mediumType, index}) => {
    const cleanedHref = cleanHref(href);

    return (
        <div className="link-item">
            <p>
                <span style={{fontSize: "small"}}>{index}) </span><p style={{display: "inline"}}>{mediumType}: </p><Link style={{textDecoration: "underline"}} href={href}>{text}</Link> <span>({cleanedHref})</span> <span>{date}</span><br />
                <p style={{color: "#333b3e"}}><p style={{display: "inline", color: "gray"}}>Thoughts</p>: {extraInfo}</p>
            </p>
        </div>
    )
}

interface LinkInfo {
    title: string
    link: string
    type: string
    dateUploaded: string
    extraInfo: string
}

// Read Or Video

const allLinks: LinkInfo[] = [
    {
        title: "Bypass paywalls",
        link: "https://www.removepaywall.com/",
        type: "Read",
        dateUploaded: "Feb-9-2025",
        extraInfo: `Helps with medium articles, etc...`,
    },
    {
        title: "Check for Media Bias",
        link: "https://ground.news/",
        type: "Read",
        dateUploaded: "Feb-9-2025",
        extraInfo: ``,
    },
    {
        title: "BlogScroll",
        link: "https://blogscroll.com/",
        type: "Read",
        dateUploaded: "Feb-9-2025",
        extraInfo: `List of community portfolios, it's nice to look through other people's portfolios & find the blog or share section that they have. Usually can learn something since it's most likely topics they're interested in and can share their expertise in`,
    },
    {
        title: "How to study",
        link: "https://cse.buffalo.edu/~rapaport/howtostudy.html",
        type: "Read",
        dateUploaded: "Feb-9-2025",
        extraInfo: `said I was going to apply this spring semester...`,
    },
    {
        title: "Why it's almost impossible to make blue LED",
        link: "https://www.youtube.com/watch?v=AF8d72mA41M",
        type: "Video",
        dateUploaded: "Feb-9-2025",
        extraInfo: ``,
    },
    {
        title: "How to know when to stop",
        link: "https://www.lennysnewsletter.com/p/how-to-know-when-to-stop",
        type: "Read",
        dateUploaded: "Feb-9-2025",
        extraInfo: `has a cool video showing how stress and disease is correlated`,
    },
    {
        title: "Doom, Glory, or both?",
        link: "https://medium.com/@li002488/doom-glory-or-both-9cd2fbbfc2f5",
        type: "Read",
        dateUploaded: "Nov-27-2024",
        extraInfo: `After Trump\’s winning election and his promise to withdraw from the Paris agreement, is the progress towards climate change doomed? COP 29`,
    },
    {
        title: "footprintcalculator",
        link: "https://www.footprintcalculator.org",
        type: "Read",
        dateUploaded: "Nov-27-2024",
        extraInfo: `Reddit tells me to unplug devices that I no longer need to use / whenever I leave the house. 
        Ex: Lamps, chargers, Wifi (also helps with keeping me off my phone when I get home -- but it's only day 2 of trying this)`,
    },
    {
        title: "Artificial intelligence's thirst for electricity",
        link: "https://www.npr.org/2024/07/10/nx-s1-5028558/artificial-intelligences-thirst-for-electricity",
        type: "Read",
        dateUploaded: "Nov-27-2024",
        extraInfo: `"One query to ChatGPT uses approximately as much electricity as could light one lightbulb for about 20 minutes." Currently in an ethics class
        so i'm in my climate learning. Btw google searches is around the same but a bit less. Though, this doesn't mean to not use AI or any browsers.`,
    },
    {
        title: "How ta recycle",
        link: "https://www.minneapolismn.gov/resident-services/garbage-recycling-cleanup/recycling/accepted-recycling/",
        type: "Read",
        dateUploaded: "Nov-26-2024",
        extraInfo: "I'm always questioning whether I'm recycling the correct things or not. Recycling may be different on regions",
    },
    {
        title: "What Game Theory Reveals About Life, The Universe, and Everything",
        link: "https://youtu.be/mScpHTIi-kM?si=fOJJskls2g3BZE7Z",
        type: "Video",
        dateUploaded: "Oct-4-2024",
        extraInfo: "Remember not to click on random links (but you can trust me)",
    },
    {
        title: "What is the Deep Web",
        link: "https://www.techtarget.com/whatis/definition/deep-Web",
        type: "Read",
        dateUploaded: "Oct-4-2024",
        extraInfo: "",
    },
    {
        title: "Does Israel have the right to defend itself",
        link: "https://tree-trunks.notion.site/Israel-has-the-right-to-defend-itself-38e90b6209da4c59b40c9ad9cea02e60?pvs=4",
        type: "Read",
        dateUploaded: "Oct-27-2024",
        extraInfo: "",
    },
    {
        title: "Guide to long term investing — what is a compound interest, an index fund & an etf?",
        link: "https://medium.com/@li002488/guide-to-long-term-investing-what-is-compound-interest-index-funds-etfs-80ad46b91213",
        type: "Read",
        dateUploaded: "May-13-2024",
        extraInfo: "For this one you can ignore the advice I gave above",
    },
    {
        title: "How to trade memecoins @ UMN Blockchain",
        link: "https://www.youtube.com/watch?v=Y9KMkQwWXtY",
        type: "Video",
        dateUploaded: "Apr-17-2024",
        extraInfo: "Somewhat learn how to trade meme coins, a UMN Blockchain club presentation",
    },
]

const ShowLinks = () => {
    return (
        <ul>
            {allLinks.map((currentLink, index) => (
                <li key={index}>
                    <LinkItem href={currentLink.link} text={currentLink.title} date={currentLink.dateUploaded} extraInfo={currentLink.extraInfo} mediumType={currentLink.type} index={index}/>
                </li>
            )
            )}
        </ul>
    )
}


export default function Chains() {

    const [mainDocument, setMainDocument] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const main = document.getElementById("main");
        setMainDocument(main);
    }, [mainDocument]);

    // server side and is not interacted with client side - play with mysql with to learn how to pull and send data ;)
    // update list of db hashes
    // hash is based on the text

    return (
        <section id="main" style={{display: "flex", flexDirection: "column", gap: "16px"}}>

            <FlexCenter>
                <p style={{color: "#AA336A", fontWeight: "bolder"}}>List of videos and articles that I find interesting and helpful</p>
            </FlexCenter>
            
            <ShowLinks />

            <FlexCenter>
                <p>Inspo: <Link href="https://news.ycombinator.com/">https://news.ycombinator.com/</Link></p>
            </FlexCenter>
            <FlexCenter>
                <p># of times this website has been modified: <span className="modifiedCount">{modifiedCount}</span></p>
            </FlexCenter>
        </section>
    )
}