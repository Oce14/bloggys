/**
 * Footer Component that displays the footer of the application
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      © {currentYear} Oce&apos;s Blog. All rights (not) reserved.
    </footer>
  );
};

export default Footer;