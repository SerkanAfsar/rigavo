import React from 'react';
import { useRouter } from 'next/router';
import { Categories } from 'Data';
import { CategoryNameList, friendlyUrl } from 'utilities';
const KategoriDetay = ({ slug }) => {
    console.log(slug);
    return (<div>Kategori Detay Sayfası</div>)
}
export default KategoriDetay;

export async function getStaticProps({ params }) {
    // Make sure params are what we expected
    console.log(params);
    return {
        props: {
            slug: params.slug,
        },
    };
}

export const getStaticPaths = async () => {
    const paths = Categories.map((item) => ({
        params: {
            slug: [`${friendlyUrl(item.CategoryName)}`, `${item.CategoryId}`]
        }
    }));

    return {
        paths,
        fallback: false
    }
}