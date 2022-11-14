import Head from 'next/head';
import React from 'react';

const Seo = ({ title, metaContent }) => {
    return (
        <Head>
            <title>{`PDG Portfolio - ${title}`}</title>
            <meta name="description" content={metaContent} />
        </Head>
    );
};

export default Seo;
