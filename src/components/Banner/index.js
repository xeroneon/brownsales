import React, { useEffect, useState } from 'react';

const Banner = ({contentfulAPI}) => {
    const [bannerText, setBannerText] = useState();

    useEffect(() => {
        contentfulAPI.getEntries({content_type: 'banner'})
        .then(banner => {
            setBannerText(banner.items.length > 0 ? banner.items[banner.items.length - 1].fields.bannerText : 'Welcome to Brown Sales!');
        })
    }, [])

    return (
        <>
            {bannerText &&
                // This will be limited to 500 characters
                <span className="banner">{bannerText}</span>
            }
        </>
    )
}

export default Banner;