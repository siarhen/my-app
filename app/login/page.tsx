/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
    { params }: { params: {shortUrl: string} }, parent: ResolvingMetadata
): Promise<Metadata> {
    // const currentArticle: Article = await getEntityShortUrl(params.shortUrl, entityValue.articles);
    const previousOGImages = (await parent).openGraph?.images || [];
    const previousTwitterImages = (await parent).twitter?.images || [];
    return {
        title: 'ARTICLLLE',
        description: 'description of that article',
        openGraph: {
            title: 'ARTICLLLE',
            description: 'description of that article',
            images: ['https://cdn.devreality.ru/assets/466.jpg', ...previousOGImages]
        },
        twitter: {
            card: "summary_large_image",
            title: "ARTICLLLE",
            description:
              "description of that article",
            images: [
              "https://cdn.devreality.ru/assets/466.jpg", ...previousTwitterImages
            ],
          },
    };
}

const Page = () => {
    return (
        <div>
           <h1>LOGIN</h1>
           <h1>EMAIL</h1>
           <h1>ПАРОЛЬ</h1>
        </div>
    );
}

export default Page;
