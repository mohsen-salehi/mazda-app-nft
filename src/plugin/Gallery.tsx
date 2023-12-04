import React from 'react';
import Image from "next/image";
import {IGallery} from "@/types/IGallery";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Gallery = (props: IGallery) => {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            loading='lazy'
            data-src={props.src}
            className={'lazyload'}
            width={20}
            height={21}/>
    );
};

export default Gallery;