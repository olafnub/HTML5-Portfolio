"use client"
import React, {useEffect, useState} from 'react'
import Link from "next/link"
import Image from "next/image"

const FlexCenter: React.FC<{ children: React.ReactNode}> = ({ children }) => (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        {children}
    </div>
)

const Arrow = () => <span>➜</span>;

const LinkItem: React.FC<{ href: string, text: string, extraInfo?: string }> = ({ href, text, extraInfo }) => (
    <p>
        <Arrow /><Link style={{textDecoration: "underline"}} href={href}>{text}</Link><span> {extraInfo}</span>
    </p>
)

export default function Chains() {

    const [mainDocument, setMainDocument] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const main = document.getElementById("main");
        setMainDocument(main);
        console.log(mainDocument);
    }, [mainDocument]);

    // server side and is not interacted with client side - play with mysql with to learn how to pull and send data ;)
    // update list of db hashes
    // hash is based on the text

    return (
        <section id="main" style={{display: "flex", flexDirection: "column", gap: "48px"}}>

            <FlexCenter>
                <p style={{color: "#AA336A", fontWeight: "bolder"}}>List of videos and articles that I find interesting and helpful</p>
            </FlexCenter>

            <LinkItem href="https://www.techtarget.com/whatis/definition/deep-Web" text="What is the Deep Web"/>
            
            <div>
                <p><Arrow /><b>What Game Theory Reveals About Life, The Universe, and Everything</b> and remember not to click on random links so the title is right there for you if you want to search it up on youtube</p>
                <br></br>
                <FlexCenter>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mScpHTIi-kM?si=SpdC0gvXPJfOgn3d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </FlexCenter>
            </div>
        
            <LinkItem href="https://medium.com/@li002488/guide-to-long-term-investing-what-is-compound-interest-index-funds-etfs-80ad46b91213" text="guide to long term investing — what is compound interest, an index fund & an etf?" extraInfo="For this one you can ignore the advice I gave above" />

            <Image src="/chat.jpg" alt="chatgpt conversation" layout="responsive" width={500} height={600} />
            
            <LinkItem href="https://www.youtube.com/watch?v=Y9KMkQwWXtY" text="How to trade memecoins @ UMN Blockchain" />


        </section>
    )
}