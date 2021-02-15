function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="social-links">
          <a href="/"><i className="fa fa-facebook-square"></i></a>
          <a href="/"><i className="fa fa-twitter-square"></i></a>
          <a href="/"><i className="fa fa-instagram"></i></a>
        </div>
        <input type="text" placeholder="Email Address"/>
        <button type="submit">Subscribe</button>
      </div>

      <p className="copyright">&copy;2016 Sarah Holden</p>
    </footer>
  );
};

export default Footer;