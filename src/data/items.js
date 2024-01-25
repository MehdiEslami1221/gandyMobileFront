const productList = [
    {
        id: 1,
        title: 'محصول یک',
        price: 10000,
        image: 'https://dkstatics-public.digikala.com/digikala-products/7dcffe4a7c034fe735efac4ff712bc5a45863181_1700901853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
        id: 2,
        title: 'محصول دو',
        price: 20000,
        image: 'https://dkstatics-public.digikala.com/digikala-products/7dcffe4a7c034fe735efac4ff712bc5a45863181_1700901853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
        id: 3,
        title: 'محصول سه',
        price: 30000,
        image: 'https://dkstatics-public.digikala.com/digikala-products/7dcffe4a7c034fe735efac4ff712bc5a45863181_1700901853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
        id: 4,
        title: 'محصول چهار',
        price: 40000,
        image: 'https://dkstatics-public.digikala.com/digikala-products/7dcffe4a7c034fe735efac4ff712bc5a45863181_1700901853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    }
]

function getProductData(id){
    return productList.find((item) => item.id === id);
}

export {productList,getProductData}