"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Container from "./Container";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full md:py-20">
      <Container className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl mt-4 md:text-6xl font-bold text-[#6D63FF]">
            Hey, I'm Junaid Syed 👋
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mt-2">
            Software Developer
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto md:mx-0">
            I'm passionate about building interactive web applications with
            modern technologies like React, Next.js, and Tailwind CSS. I share
            my insights and learnings through blogs to help others in their
            coding journey.
          </p>
          <Link href="/blogs">
            <Button className="my-4 md:mt-6 text-lg px-6 py-3 rounded-lg bg-[#6D63FF] hover:bg-[#5c4cd2] text-white transition-all duration-300">
              Read My Blogs
            </Button>
          </Link>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Image
            src="/right.png"
            alt="Image"
            width={500}
            height={400}
            className="shadow-xl rounded-lg"
          />
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-4 animate-bounce"
      >
        <span className="text-xl text-[#6D63FF]">↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;
