import Container from "./container";

const Footer = () => {
  return (
    <footer className="static bg-[#fbfaf4] py-5 md:py-8">
      <Container>
        <div className="grid md:grid-cols-5 gap-5 md:justify-items-center">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-lg font-bold">Fiber</h1>
            <p className="text-sm leading-6 text-muted-foreground">
              With Fiber, you can setup your own personal portfolio in minutes
              with dozen of premade, beutiful templates.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by Netherland.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Sitemap</h1>
            <h3 className="text-sm text-muted-foreground">Homepage</h3>
            <h3 className="text-sm text-muted-foreground">Pricing</h3>
            <h3 className="text-sm text-muted-foreground">Testimonials</h3>
            <h3 className="text-sm text-muted-foreground">Features</h3>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Resources</h1>
            <h3 className="text-sm text-muted-foreground">Support</h3>
            <h3 className="text-sm text-muted-foreground">Contact</h3>
            <h3 className="text-sm text-muted-foreground">FAQ</h3>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Company</h1>
            <h3 className="text-sm text-muted-foreground">About</h3>
            <h3 className="text-sm text-muted-foreground">Customers</h3>
            <h3 className="text-sm text-muted-foreground">Blog</h3>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Portfolios</h1>
            <h3 className="text-sm text-muted-foreground">Sarah Andrews</h3>
            <h3 className="text-sm text-muted-foreground">Mathew Higgins</h3>
            <h3 className="text-sm text-muted-foreground">Janice Dave</h3>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
