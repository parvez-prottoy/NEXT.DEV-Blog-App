const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="mt-6">
      <div className="py-6 text-sm text-center text-secondary bg-background">
        © {date} Parvez Ahmed Prottoy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
