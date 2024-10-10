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
        twitter: {
            card: "summary_large_image",
            title: "ARTICLLLE",
            description:
              "description of that article",
            images: [
              "https://previews.dropbox.com/p/thumb/ACYtyuDgTSBeQe2LfIvsESd1H9w-K9IkezYmohI1su4P-uJhgbuMiudGkfjAUhj98RlPysGaGvaPQdCz46Ge0XmnYUJxVJnePcMQTFMbodVFkP4nMTIDRgJLyXjcPi0Z7iiM4mNd8oDiPw7WKAGuiD28PmXHM7_WZbHcQ5bYQ-WSm4YAD4E-x6nFJpE2Iv0ogaJSQ9ci5u1RVZYZbPYw8jzld67IgejBVjMCCxq6XwNgHYJbISfLlBv4rfGtJ5hbfUBku3UZlP1Wd456a4pnG6MqpzhRd25qjK2u-yNEmDadvrm2mhhRAoBN1KwhODwG_eTYf8_GBKfpx_VidTXQlHXN/p.png",
            ],
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
