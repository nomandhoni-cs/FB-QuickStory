// import React from "react";
import RandomHeadline from "@/componets/RandomHeadline";
import {
  Download,
  Eye,
  // Brain,
  Activity,
  Settings,
  Heart,
  Shield,
  Zap,
  Timer,
  Clock,
  ListTodo,
  Github,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-4 overflow-x-hidden">
      <div className="max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(100px,auto)] gap-4">
          {/* Hero Message */}
          <div className="p-8 sm:col-span-2 lg:col-span-4 bg-gradient-to-r from-green-500 to-emerald-700 rounded-xl">
            <RandomHeadline />
            <p className="text-xl text-white/90 mb-6">
              Join 5,000+ professionals who trust Blink Eye for their digital
              wellness
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://blinkeye.app/en?ref=quick_story_whatnew"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center px-6 py-3 bg-white text-green-600 hover:bg-green-50 rounded-lg transition-colors font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Blink Eye
              </a>
              <a
                href="https://github.com/nomandhoni-cs/blink-eye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center px-6 py-3 bg-black/30 hover:bg-black/40 text-white rounded-lg transition-colors font-semibold border border-white/10"
              >
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="p-6 sm:col-span-2 lg:col-span-2 row-span-2 bg-zinc-900 rounded-xl border border-green-500/20">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YrLZ-eT9k78"
                title="Blink Eye Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
          {/* Eye Protection - Moved up */}
          <div className="p-6 sm:col-span-2 bg-zinc-900 rounded-xl border border-green-500/20">
            <Shield className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-white">
              Eye Protection First
            </h2>
            <p className="text-gray-300 mb-4 text-xl">
              Prevent Computer Vision Syndrome (CVS) with our scientifically
              proven approach to digital eye care. Our intelligent system helps
              you maintain healthy eyes during long computer sessions.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Reduce eye strain and fatigue
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Prevent long-term vision problems
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Stay productive without compromising eye health
              </li>
            </ul>
          </div>

          {/* Smart Break Reminders - Moved up */}
          <div className="p-6 bg-zinc-900 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
            <Eye className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-white">
              Smart Break Reminders
            </h3>
            <p className="text-gray-300 text-lg">
              Follow the 20-20-20 rule to prevent eye strain and maintain
              healthy vision
            </p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
            <Clock className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-white">
              Screen Time Tracking
            </h3>
            <p className="text-gray-300 text-lg">
              Monitor and manage your daily screen usage for better eye health
            </p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors row-span-2">
            <Activity className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-white">
              Track Your Progress
            </h3>
            <p className="text-gray-300 mb-4 text-xl">
              Comprehensive usage statistics to maintain a healthy digital
              balance
            </p>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-green-500" />
                Daily screen time tracking
              </li>
              <li className="flex items-center gap-2">
                <Chart className="w-4 h-4 text-green-500" />
                Weekly progress reports
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-green-500" />
                Productivity insights
              </li>
            </ul>
          </div>

          {/* TODO List Feature */}
          <div className="p-6 sm:col-span-2 bg-zinc-900 rounded-xl border border-green-500/20">
            <ListTodo className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-white">
              Task Management
            </h2>
            <p className="text-gray-300 mb-4 text-xl">
              Stay organized and productive with our built-in task management
              system. Create, track, and complete tasks while maintaining
              healthy screen time habits.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Create and manage tasks effortlessly
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Set task priorities and deadlines
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Track completion with visual progress indicators
              </li>
            </ul>
          </div>

          <div className="p-6 bg-zinc-900 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
            <Settings className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-white">
              Fully Customizable
            </h3>
            <p className="text-gray-300 text-lg">
              Personalize timers, themes, and notifications
            </p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
            <Heart className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-white">
              5,000+ Happy Users
            </h3>
            <p className="text-gray-300 text-lg">
              Join our growing community of healthy professionals
            </p>
          </div>

          {/* Open Source Section */}
          <div className="p-6 sm:col-span-2 bg-zinc-900 rounded-xl border border-green-500/20">
            <Github className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-white">
              Open Source and Free Forever
            </h2>
            <p className="text-gray-300 mb-4 text-xl">
              Blink Eye is proudly open source. Join our community, contribute,
              and help make digital wellness accessible to everyone.
            </p>
            <a
              href="https://github.com/nomandhoni-cs/blink-eye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
            >
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </a>
          </div>

          {/* Download Section */}
          <div className="p-8 sm:col-span-2 lg:col-span-4 bg-gradient-to-r from-green-500 to-emerald-700 rounded-xl">
            <h2 className="text-4xl font-bold mb-4 text-white text-center">
              Available on All Platforms
            </h2>
            <p className="text-gray-200 mb-4 text-center text-2xl">
              Download Blink Eye for your preferred operating system
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href="https://blinkeye.app/en?ref=quick_story_whatnew&platform=windows"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors border-2 border-amber-50 text-2xl"
              >
                <Download className="mr-2 h-4 w-4" />
                Windows
              </a>
              <a
                href="https://blinkeye.app/en?ref=quick_story_whatnew&platform=macos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors border-2 border-amber-50 text-2xl"
              >
                <Download className="mr-2 h-4 w-4" />
                macOS
              </a>
              <a
                href="https://blinkeye.app/en?ref=quick_story_whatnew&platform=linux"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors border-2 border-amber-50 text-2xl"
              >
                <Download className="mr-2 h-4 w-4" />
                Linux
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chart(props: any) {
  return <Activity {...props} />;
}
