"use client";

import { BotIcon, GitBranch, Inbox, XIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <footer className="w-full flex items-center  justify-center bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company Name</h3>
            <p className="text-sm">Building amazing experiences for the modern web.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-white transition-colors"
                    tabIndex={0}
                    aria-label={`Navigate to ${item} page`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <GitBranch />, url: "https://github.com", label: "GitHub" },
                { icon: <XIcon />, url: "https://twitter.com", label: "Twitter" },
                { icon: <Inbox />, url: "https://linkedin.com", label: "LinkedIn" },
              ].map(({ icon: Icon, url, label }) => (
                <button
                  key={label}
                  onClick={() => handleSocialClick(url)}
                  className="p-2 hover:text-white transition-colors"
                  tabIndex={0}
                  aria-label={`Visit our ${label} profile`}
                >
                  <BotIcon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>© {currentYear} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
