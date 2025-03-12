import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import faundation from "@/assets/foundation.webp";
import ContactForm from "./ContactForm";
import constact from "@/assets/reception.jpeg";

export default function Page() {
  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        {" "}
        Contact{" "}
        <em className="text-primary relative">
          Us
          <Image
            src={streak}
            alt="streak"
            className="absolute -top-10 right-0"
          />
        </em>
      </HeadingSec>
      <Image src={faundation} alt="faundation" className="w-full" />

      <div className="mx-auto max-w-7xl space-y-16 px-3">
        <div className="flex flex-col gap-5 space-y-6 md:flex-row">
          <div className="space-y-6 md:w-1/2">
            <ContactForm />
          </div>
          <div className="md:w-1/2">
            <Image src={constact} alt="" />
          </div>
        </div>
        <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
          {" "}
          Clinic{" "}
          <em className="text-primary relative">
            Location
            <Image
              src={streak}
              alt="streak"
              className="absolute -top-10 right-0"
            />
          </em>
        </HeadingSec>

        <div className="flex flex-col gap-5 sm:grid md:grid-cols-3">
          <div className="bg-card hover:border-primary space-y-6 rounded-md border p-3 text-center">
            <h6 className="text-2xl font-bold">Ranchi Clinic</h6>
            <p className="text-muted-foreground">
              Elixir Tower, Sethia Compound, Opp. Ranchi Club, Ranchi-834001
              (Jharkhand)
            </p>
            <p>
              <a
                href="tel:+919204439171"
                className="hover:text-primary font-bold"
              >
                +91 9204439171
              </a>
            </p>

            <p>
              <a
                href="tel:+91 651-2330818"
                className="hover:text-primary font-bold"
              >
                +91 651-2330818
              </a>
            </p>
            <p>
              <a
                href="mailto:abhihomoeo@gmail.com"
                className="hover:text-primary font-bold"
              >
                abhihomoeo@gmail.com
              </a>
            </p>
          </div>
          <div className="bg-card hover:border-primary space-y-6 rounded-md border p-3 text-center">
            <h6 className="text-2xl font-bold">Patna Clinic</h6>
            <p className="text-muted-foreground">
              ICICI BANK BUILDING, Abha Kunj, Gola Road, Near Shiv Mandir,
              Patna-801503 (Bihar)
            </p>
            <p>
              <a
                href="tel:+91 9153881402"
                className="hover:text-primary font-bold"
              >
                +91 9153881402
              </a>
            </p>

            <p>
              <a
                href="tel:+91 9153881403"
                className="hover:text-primary font-bold"
              >
                +91 9153881403
              </a>
            </p>

            <p>
              <a
                href="mailto:abhihomoeo[at]gmail.com"
                className="hover:text-primary font-bold"
              >
                abhihomoeo[at]gmail.com
              </a>
            </p>
          </div>
          <div className="bg-card hover:border-primary space-y-6 rounded-md border p-3 text-center">
            <h6 className="text-2xl font-bold">Delhi Clinic</h6>
            <p className="text-muted-foreground">
              Tower(K), Flat No. 92, 11th Avenue, Gaur City-2, Kishan Chowk,
              Sector-16-C, Greater Noida - 201009 (Uttar Pradesh)
            </p>
            <p>
              <a
                href="tel:+91 9234400007"
                className="hover:text-primary font-bold"
              >
                +91 9234400007
              </a>
            </p>

            <p>
              <a
                href="mailto:abhihomoeo[at]gmail.com"
                className="hover:text-primary font-bold"
              >
                abhihomoeo[at]gmail.com
              </a>
            </p>
          </div>
          <div className="bg-card hover:border-primary space-y-6 rounded-md border p-3 text-center">
            <h6 className="text-2xl font-bold">Spectrum@Metro Clinic</h6>
            <p className="text-muted-foreground">
              Shop No. C-11, 5th Floor, Tower C Spectrum@metro GH Eco City Plot
              C and D, Sector 75, Noida - 201304, Uttar Pradesh
            </p>
            <p>
              <a
                href="tel:+91 9263778607"
                className="hover:text-primary font-bold"
              >
                +91 9263778607
              </a>
            </p>

            <p>
              <a
                href="mailto:abhihomoeo[at]gmail.com"
                className="hover:text-primary font-bold"
              >
                abhihomoeo[at]gmail.com
              </a>
            </p>
          </div>
          <div className="bg-card hover:border-primary space-y-6 rounded-md border p-3 text-center">
            <h6 className="text-2xl font-bold">Kolkata Clinic</h6>
            <p className="text-muted-foreground">
              147/1, B.B. GANGULY STREET, PS-MUCHIPARA, SEALDAH, Kolkata-700012
              (West Bengal)
            </p>
            <p>
              <a
                href="tel:+91 9153881401"
                className="hover:text-primary font-bold"
              >
                +91 9153881401
              </a>
            </p>

            <p>
              <a
                href="mailto:abhihomoeo[at]gmail.com"
                className="hover:text-primary font-bold"
              >
                abhihomoeo[at]gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13927.011263803526!2d85.324268!3d23.352205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a61753603b%3A0x40e4a8e219ecc010!2sDr.%20Rajeev&#39;s%20Homeopathy%20Clinic!5e1!3m2!1sen!2sin!4v1741419055252!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0", width: "100%", height: "1000px" }}
        loading="lazy"
      ></iframe>
    </main>
  );
}
