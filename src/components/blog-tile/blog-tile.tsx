import {
  BlogTileWrapper,
  BlogTileImageWrapper,
  BlogTilePostContent,
} from "./blog-tile.styles";
import Image from "next/image";
import Link from "next/link";
import { BlogTileItem } from "@/types";

type BlogTileProps = {
  post: BlogTileItem;
};

export const BlogTile = ({ post }: BlogTileProps) => {
  return (
    <BlogTileWrapper>
      <Link href={post.slug}>
        <BlogTileImageWrapper>
          <Image src={post.image} alt="" width="900" height="450" />
        </BlogTileImageWrapper>
        <BlogTilePostContent>
          <h3>{post.title}</h3>
          <p>{post.shortDescription}</p>
        </BlogTilePostContent>
      </Link>
    </BlogTileWrapper>
  );
};
