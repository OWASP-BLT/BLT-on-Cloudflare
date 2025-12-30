import Link from "next/link";

interface BlogPost {
  title: string;
  author: string;
  timeAgo: string;
  description: string;
  href: string;
}

interface BlogPostsSectionProps {
  posts?: BlogPost[];
}

export default function BlogPostsSection({
  posts,
}: BlogPostsSectionProps) {
  const defaultPosts: BlogPost[] = [
    {
      title: "Top 10 Security Vulnerabilities in 2024",
      author: "SecurityEditor",
      timeAgo: "3 days ago",
      description:
        "Explore the most critical security vulnerabilities discovered this year and learn how to protect your applications from these threats...",
      href: "/blog/top-10-security-vulnerabilities-2024",
    },
    {
      title: "Getting Started with Bug Bounty Programs",
      author: "BountyExpert",
      timeAgo: "1 week ago",
      description:
        "A comprehensive guide for beginners looking to start their journey in bug bounty hunting and ethical hacking...",
      href: "/blog/getting-started-bug-bounty",
    },
  ];

  const displayPosts = posts || defaultPosts;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden"
            >
              <div className="w-full h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                <i className="fas fa-newspaper text-gray-400 text-5xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-user" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-clock" />
                    {post.timeAgo}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <Link
                  href={post.href}
                  className="text-[#e74c3c] hover:text-[#c0392b] font-medium"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

