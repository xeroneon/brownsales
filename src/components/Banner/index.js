import React, { useEffect, useState } from 'react';

const Banner = ({contentfulAPI}) => {
    const [bannerText, setBannerText] = useState();

    useEffect(() => {
        contentfulAPI.getEntries({content_type: 'banner'})
        .then(banner => {
            setBannerText(banner.items[banner.items.length - 1].fields.bannerText);
        })
    }, [])

    return (
        <>
            {bannerText &&
                // This will be limited to 500 characters
                <span>{bannerText}</span>
            }
        </>
    )
}

export default Banner;