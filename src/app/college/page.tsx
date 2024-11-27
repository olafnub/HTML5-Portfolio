import React from 'react'

const url = "https://coinmarketcap.com/";

const decodeUrl = decodeURIComponent(url)

const layout = () => {
  return <></>
}

export default layout

// https://upstash.com/

// link redirecting
// return <meta httpEquiv="refresh" content={`0; url=${url}`} />;

// cloacked url
// return <iframe src={url} className="min-h-screen w-full border-none" />;
// https://github.com/dubinc/dub/tree/main/apps/web/app/cloaked/%5Burl%5D