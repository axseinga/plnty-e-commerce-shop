import {
  BlogTeaserGrid,
  BlogTeaserHeader,
  BlogTeaserGridLeft,
  BlogTeaserGridRight,
} from "./blog-teaser.styles";
import { BlogTileItem } from "@/types";
import { BlogTile } from "@/components/blog-tile/blog-tile";
import { Button, ButtonVariantType } from "@/components/button/button";
import Link from "next/link";

type BlogTeaserProps = {
  posts: BlogTileItem[];
};

export const BlogTeaser = ({ posts }: BlogTeaserProps) => {
  return (
    <BlogTeaserGrid>
      <BlogTeaserGridLeft>
        <BlogTeaserHeader>
          <h2>Our blog</h2>
          <p>
            Unlock the secrets to a green thumb and become a master plant parent
            with our expert plant care tips.
          </p>
        </BlogTeaserHeader>
        {posts.map((post, i) => {
          if (i % 2 === 0)
            return <BlogTile key={`blog_${post.slug}_${i}`} post={post} />;
        })}
      </BlogTeaserGridLeft>
      <BlogTeaserGridRight>
        {posts.map((post, i) => {
          if (i % 2 !== 0)
            return <BlogTile key={`blog_${post.slug}_${i}`} post={post} />;
        })}
        <Link href="/blog">
          <Button type="button" variant={ButtonVariantType.dark}>
            See more
          </Button>
        </Link>
      </BlogTeaserGridRight>
    </BlogTeaserGrid>
  );
};
