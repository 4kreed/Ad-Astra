import { getCollection } from "astro:content";

async function getPosts() {
    const posts = (await getCollection("posts")).sort(
        (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
    );
    // Here we return the fields of the posts but not the content to optimize it.
    // return posts;
    return posts.map((post) => ({
        title: post.data.title,
        slug: post.slug,
        description: post.data.description,
        tags: post.data.tags,
        pubDate: post.data.pubDate,
        updatedDate: post.data.updatedDate,
        image: post.data.image,
    }));
}

export async function GET() {
    return new Response(JSON.stringify(await getPosts()), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
