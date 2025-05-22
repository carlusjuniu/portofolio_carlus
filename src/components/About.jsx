import { Github, Linkedin, Mail } from 'lucide-react';
import carlosPhoto from '../assets/carlospf.jpg';


export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <div className="flex items-center justify-between mb-6">
          {/* Profile picture and name */}
          <div className="flex items-center gap-4">
          <img src={carlosPhoto} alt="Carlos Junior" className="w-20 h-20 rounded-full object-cover" />
          <div>
              <h1 className="text-lg font-semibold">Carlos Junior</h1>
              <p className="text-sm text-gray-400">Frontend Developer</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="text-white hover:text-gray-400 transition">
              <Github size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-base font-semibold mb-2">About</h2>
          <p className="text-l text-gray-400 leading-relaxed space-y-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod sem. 
            Maecenas facilisis neque sed posuere auctor. Integer ac posuere risus. Pellentesque nec 
            viverra risus, nec finibus ante. Nullam congue lorem et velit gravida congue. Maecenas 
            pellentesque auctor eleifend.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod sem. 
            Maecenas facilisis neque sed posuere auctor. Integer ac posuere risus. Pellentesque nec 
            viverra risus, nec finibus ante. Nullam congue lorem et velit gravida congue. Maecenas 
            pellentesque auctor eleifend.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod sem. 
            Maecenas facilisis neque sed posuere auctor. Integer ac posuere risus. Pellentesque nec 
            viverra risus, nec finibus ante. Nullam congue lorem et velit gravida congue. Maecenas 
            pellentesque auctor eleifend.
          </p>
        </div>
      </div>
    </div>
  );
}
