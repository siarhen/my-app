/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
    { params }: { params: {shortUrl: string} }, parent: ResolvingMetadata
): Promise<Metadata> {
    // const currentArticle: Article = await getEntityShortUrl(params.shortUrl, entityValue.articles);
    const previousImages = (await parent).openGraph?.images || [];
    
    return {
        title: 'ARTICLLLE',
        description: 'description of that article',
        openGraph: {
            title: 'ARTICLLLE',
            description: 'description of that article',
            images: ['https://cdn.devreality.ru/assets/466.jpg', ...previousImages]
        },
    };
}

const Page = () => {
    return (
        <div>
            LOOOOL is it page
        </div>
    );
}

export default Page;
