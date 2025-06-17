/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "w-full", "w-1/4", "w-7/12", "w-9/12", "border-2", "border-4", "border-black", "text-center", "p-4", "my-4", "mx-auto", "rounded-md", "text-red-600", "text-cyan-600", "bg-indigo-200", "bg-lime-200", "bg-fuchsia-200", "grid", "grid-cols-1", "sm:grid-cols-2", "gap-x-4"
  ],
}
