const DOMAIN = import.meta.env.WP_DOMAIN;
const apiUrl = `${DOMAIN}/wp-json/wp/v2`;

export const getPageinfo = async ( slug:string ) => {
    const response = await fetch (`${ apiUrl }/pages?slug=${ slug }`);
    if ( !response.ok ) throw new Error ( 'La página falló realizando el Fetching de datos' );

    const [ data ] = await response.json();
    const { title: { rendered: title }, content: { rendered:content } } = data;

    return { title, content};
}

export const getLatestposts = async ({ perPage = 10 } : { perPage?: number } = {}) => {
    const response = await fetch (`${ apiUrl }/posts?per_page=${ perPage }&_embed`); 
    if ( !response.ok ) throw new Error ('La página falló realizando el Fetching de datos');

    const results = await response.json();
    if ( !results.length ) throw new Error ('No hay entradas');

    const posts = results.map (post =>{
        const { 
            title: { rendered: title }, 
            content: { rendered: content },
            excerpt: { rendered: excerpt }, 
            slug,
            date 
        } = post;

        const featuredImage = post._embedded['wp:featuredmedia'][0].source_url

        return { title, excerpt, content, date, slug, featuredImage };
    });
    
    return posts;
}

export const getAllPostsSlugs = async () => {
    const response = await fetch (`${ apiUrl }/posts?per_page=100`);
    if ( !response.ok ) throw new Error ('La página falló realizando el Fetching de datos');

    const results = await response.json();
    if ( !results.length ) throw new Error ('No hay entradas');

    const slugs = results.map ((post) => post.slug);
    
    return slugs;
}

export const getPostInfo = async ( slug:string ) => {
    const response = await fetch (`${ apiUrl }/posts?slug=${ slug }`);
    if ( !response.ok ) throw new Error ( 'La página falló realizando el Fetching de datos' );

    const [ data ] = await response.json();
    const { title: { rendered: title }, content: { rendered:content } } = data;

    return { title, content};
}