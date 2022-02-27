import React from 'react';
import { useRouter } from 'next/router';
import { Categories } from 'Data';
const KategoriDetay = ({ Content, params }) => {
    console.log(params);
    return (<div>Kategori Detay Sayfası</div>)
}
export default KategoriDetay;

export const getStaticProps = () => {
    return {
        props: {
            Content: {}
        }
    }
}

export const getStaticPaths = () => {
    const paths = Categories.map((item) => ({
        params: {
            slug: `${item.CategoryName}/${item.id}`
        }
    }));
    return {
        paths,
        fallback: false
    }
}