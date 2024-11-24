import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Discover Amazing Events
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find and book tickets for the best events in your area. Earn rewards with every purchase!
          </p>
          <Link to="/events">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Events
            </Button>
          </Link>
        </div>

        {/* Featured Events Preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Featured Event {i}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Earn Rewards</h3>
              <p className="text-gray-600">Get cashback coins with every ticket purchase</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Easy Booking</h3>
              <p className="text-gray-600">Simple and secure ticket booking process</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Exclusive Events</h3>
              <p className="text-gray-600">Access to premium and exclusive events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;