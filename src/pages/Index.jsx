import React from "react";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <header className="relative h-96 w-full">
        <img
          src="/images/austria-header.jpg"
          alt="Austria Scenic View"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Austria</h1>
          <p className="text-2xl mt-4">Discover the Heart of Europe</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-semibold">Introduction</h2>
        <p className="mt-4 text-lg">
          Austria, a landlocked country in Central Europe, is known for its rich
          history, stunning landscapes, and vibrant cultural heritage. From the
          majestic Alps to the historic cities, Austria offers a unique blend of
          natural beauty and cultural experiences.
        </p>
        <ul className="mt-4 space-y-2 text-lg">
          <li>Rich history and cultural heritage</li>
          <li>Beautiful landscapes and outdoor activities</li>
          <li>World-renowned music and arts</li>
        </ul>
      </section>

      {/* Main Attractions Section */}
      <section className="px-4">
        <h2 className="text-3xl font-semibold text-center">Main Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="text-center">
            <img
              src="/images/schonbrunn-palace.jpg"
              alt="Schönbrunn Palace"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Schönbrunn Palace</h3>
            <p className="mt-2">
              A former imperial summer residence located in Vienna, known for
              its beautiful gardens and historic significance.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/hallstatt.jpg"
              alt="Hallstatt"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Hallstatt</h3>
            <p className="mt-2">
              A picturesque village on Lake Hallstatt's western shore, famous
              for its stunning views and salt mines.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/austrian-alps.jpg"
              alt="Austrian Alps"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Austrian Alps</h3>
            <p className="mt-2">
              A paradise for outdoor enthusiasts, offering skiing, hiking, and
              breathtaking mountain views.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/vienna-state-opera.jpg"
              alt="Vienna State Opera"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Vienna State Opera</h3>
            <p className="mt-2">
              One of the most important opera houses in the world, renowned for
              its performances and architectural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Culture and Traditions Section */}
      <section className="px-4">
        <h2 className="text-3xl font-semibold text-center">Culture and Traditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="text-center">
            <img
              src="/images/austrian-music.jpg"
              alt="Austrian Music"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Music</h3>
            <p className="mt-2">
              Austria has a rich musical heritage, being the birthplace of
              famous composers like Mozart and Strauss.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/austrian-dance.jpg"
              alt="Austrian Dance"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Dance</h3>
            <p className="mt-2">
              Traditional Austrian dances, such as the waltz, are an integral
              part of the country's cultural identity.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/austrian-festival.jpg"
              alt="Austrian Festival"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Festivals</h3>
            <p className="mt-2">
              Austria hosts numerous festivals throughout the year, celebrating
              everything from music to food and traditions.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/austrian-food.jpg"
              alt="Austrian Food"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Cuisine</h3>
            <p className="mt-2">
              Austrian cuisine is known for its delicious pastries, hearty
              dishes, and world-famous coffee culture.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="mt-4">Email: info@austriaexplorer.com</p>
            <p className="mt-2">Phone: +43 123 456 789</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <div className="mt-4">
              <img
                src="/images/austria-map.jpg"
                alt="Map of Austria"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;