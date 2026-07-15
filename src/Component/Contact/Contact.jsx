import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-left">
        <h1>
          If you didn’t find  products
          <br />
          you are interested in or have
        
          questions?
        </h1>
      </div>

      <div className="contact-right">

        <p>
          Just send us your contact email and we will contact you.
        </p>

        <div className="input-box">

          <div className="input-text">
            <span>YOUR EMAIL</span>
            <input
              type="email"
              placeholder="+1"
            />
          </div>

          <button>→</button>

        </div>

      </div>

    </section>
  );
}