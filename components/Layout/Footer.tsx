import Container from "@shared/Container";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <footer
        className="min-h-[200px] border-t border-gray-400 flex flex-col sm:flex-row
       items-center sm:space-x-6 lg:space-x-12 space-y-4 sm:space-y-0 py-6 sm:p-0"
      >
        <span className="text-2xl text-gray-500 font-semibold">Supaflash</span>
        <span className="text-gray-400">Privacy</span>
        <span className="text-gray-400">Terms</span>
        <span className="text-gray-400">About Supaflash</span>
        <span className="text-gray-400">Supaflash Producs</span>
      </footer>
    </Container>
  );
};

export default Footer;
