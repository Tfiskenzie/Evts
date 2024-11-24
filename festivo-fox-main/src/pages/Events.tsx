import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const [date, setDate] = useState<Date>();
  const [priceRange, setPriceRange] = useState([0]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Categories
  const categories = [
    "All", "Music", "Tech", "Cooking", "Arts", "Sports", "Business"
  ];

  // Mock events data with more events and categories
  const events = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "2024-07-15",
      price: 50,
      category: "Music",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      date: "2024-08-20",
      price: 150,
      category: "Tech",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 3,
      title: "Cooking Masterclass",
      date: "2024-06-10",
      price: 75,
      category: "Cooking",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    },
    {
      id: 4,
      title: "Art Exhibition",
      date: "2024-09-05",
      price: 25,
      category: "Arts",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    },
  ];

  const filteredEvents = events.filter(event => 
    (!selectedCategory || selectedCategory === "All" || event.category === selectedCategory)
  );

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Search events..." className="w-full" />
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">Price Range: ${priceRange[0]}</p>
              <Slider
                defaultValue={[0]}
                max={500}
                step={10}
                onValueChange={setPriceRange}
              />
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Link key={event.id} to={`/event/${event.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <Badge className="mb-2">{event.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="text-primary font-semibold">${event.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;