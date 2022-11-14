import Head from 'next/head';
import React from 'react';

const Seo = (title) => {
    const metaContent = 'Portfolio of a web developer';

    return (
        <Head>
            <title>Peter.DG | {title}</title>
            <meta name="description" content={metaContent} />
        </Head>
    );
};

export default Seo;
