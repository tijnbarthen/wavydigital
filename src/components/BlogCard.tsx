import Link from "next/link";
import { Card } from "./ui/card";

interface BlogCardProps {
  title: string;
  date: string;
  image?: string;
  link: string;
}

const BlogCard = ({ title, date, image, link }: BlogCardProps) => {
  return (
    <Link href={link}>
      <article className="flex flex-col gap-4 p-2">
        <Card>
          <img
            src={
              image ||
              "https://images.unsplash.com/photo-1705522732948-d7514ec76b95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D"
            }
            alt={title}
            className="w-full h-80 object-cover rounded-lg"
          />
        </Card>
        <div className="flex flex-col gap-1">
          <p className="font-extralight">{date}</p>
          <h1 className="font-semibold text-2xl">{title}</h1>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
