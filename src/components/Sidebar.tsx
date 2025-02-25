
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to blog page with search query
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      toast({
        title: "Searching...",
        description: `Results for "${searchQuery}"`,
      });
    }
  };

  return (
    <aside className="h-screen w-64 glass fixed left-0 top-0 border-r">
      <div className="flex flex-col h-full p-4">
        <div className="flex-shrink-0 mb-8">
          <h1 className="text-2xl font-bold tracking-tight animate-fade-in">
            Disha Giri
          </h1>
        </div>
        
        <form onSubmit={handleSearch} className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search posts..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <nav className="space-y-2 flex-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-2 px-4 py-2 rounded-md transition-colors",
                isActive
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-secondary/80"
              )
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-2 px-4 py-2 rounded-md transition-colors",
                isActive
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-secondary/80"
              )
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-2 px-4 py-2 rounded-md transition-colors",
                isActive
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-secondary/80"
              )
            }
          >
            About
          </NavLink>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </aside>
  );
};
