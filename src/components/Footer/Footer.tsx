import "./footer.css";

const Footer = (): JSX.Element => {
  return (
    <div className="footer-wrapper">
      Copyright&copy;{new Date().getFullYear()} Edwin Satya Yudistira
    </div>
  );
};

export default Footer;
