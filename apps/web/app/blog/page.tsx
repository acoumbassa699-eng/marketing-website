import { notFound } from "next/navigation";

export const dynamic = "force-static";

export default function BlogPage() {
  // Blog is disabled - this workspace doesn't have blog content
  return notFound();
}
