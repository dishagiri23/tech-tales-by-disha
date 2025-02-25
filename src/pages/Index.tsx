
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const categories = [
    {
      title: "AI TOOLS",
      posts: [
        { 
          id: 1, 
          title: "Getting Started with ChatGPT", 
          description: "Learn how to leverage ChatGPT for development", 
          isNew: true,
          slug: "getting-started-with-chatgpt"
        },
        { 
          id: 2, 
          title: "AI Code Review Tools", 
          description: "Best AI tools for code review and optimization",
          slug: "ai-code-review-tools"
        },
      ]
    },
    {
      title: "FULLSTACK PROJECT",
      posts: [
        { 
          id: 3, 
          title: "Building a Real-time Chat App", 
          description: "Step by step guide to create a chat application", 
          isNew: true,
          slug: "building-realtime-chat-app"
        },
        { 
          id: 4, 
          title: "Modern Authentication Solutions", 
          description: "Implementing secure authentication in your apps",
          slug: "modern-authentication-solutions"
        },
      ]
    },
    {
      title: "CAREER",
      posts: [
        { 
          id: 5, 
          title: "Mastering LinkedIn Profile", 
          description: "Optimize your LinkedIn presence for success",
          slug: "mastering-linkedin-profile"
        },
        { 
          id: 6, 
          title: "Perfect Tech Resume Guide", 
          description: "Create a standout software developer resume", 
          isNew: true,
          slug: "perfect-tech-resume-guide"
        },
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    posts: category.posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery) ||
      post.description.toLowerCase().includes(searchQuery)
    )
  })).filter(category => category.posts.length > 0);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Explore articles about development, career growth, and tech tools.
        </p>
      </div>

      {filteredCategories.map((category) => (
        <section key={category.title} className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.posts.map((post) => (
              <Card key={post.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    {post.isNew && (
                      <Badge variant="secondary">New</Badge>
                    )}
                  </div>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-sm text-primary hover:underline"
                  >
                    Read more →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {filteredCategories.length === 0 && searchQuery && (
        <div className="text-center py-8">
          <p className="text-lg text-muted-foreground">No posts found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default Index;
