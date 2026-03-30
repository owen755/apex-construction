export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">pins_pace</h3>
          <p className="text-gray-400">Building better renovation spaces with quality and care.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact</h4>
          <p className="text-gray-400">123 Renovation Way</p>
          <p className="text-gray-400">newtonmartin13@gmail.com</p>
          <p className="text-gray-400">0796222991</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Hours</h4>
          <p className="text-gray-400">Mon-Fri: 8am - 6pm</p>
          <p className="text-gray-400">Sat-Sun: Closed</p>
        </div>
      </div>
    </footer>
  );
}
