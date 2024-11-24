import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const coins = 150; // This would come from your user state/context

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          EventHub
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/events">
            <Button variant="ghost">Events</Button>
          </Link>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Wallet className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="space-y-2">
                <h4 className="font-medium">Your Wallet</h4>
                <p className="text-sm text-muted-foreground">Available coins:</p>
                <p className="text-2xl font-bold text-primary">{coins} 🪙</p>
              </div>
            </PopoverContent>
          </Popover>

          <Link to="/auth">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;