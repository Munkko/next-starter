import React from 'react';

import Layout from '../common/UI/Layout';

const HomePage = () => {
    return (
        <Layout
            title="Home"
            metaContent="Portfolio of Peter de Guzman. Graphic Designer based in Chicago, IL"
        >
            <div
                style={{
                    textTransform: 'uppercase',
                    fontFamily: 'monospace',
                    textAlign: 'center',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                She WORKING :)
            </div>
        </Layout>
    );
};

export default HomePage;
