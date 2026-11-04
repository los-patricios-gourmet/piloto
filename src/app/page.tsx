import { ArrowUpRight } from "@/components/arrow-up-right";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Reveal } from "@/components/reveal";

export default function CountryEntry() {
  return (
    <main className="entry-page">
      <div className="entry-photo">
        <img
          src="/images/caviar-piloto.png"
          alt="Fotografía provisional de caviar"
        />
      </div>
      <div className="entry-grain" />
      <div className="entry-top">
        <BrandLogo light />
        <span>UNA EXPERIENCIA GOURMET</span>
      </div>
      <div className="entry-content">
        <Reveal>
          <p className="eyebrow gold">TRADICIÓN · CALIDAD · EXCLUSIVIDAD</p>
          <h1>
            EL ARTE DE
            <br />
            <em>LO EXCEPCIONAL.</em>
          </h1>
          <p className="entry-description">
            Una nueva forma de descubrir ingredientes únicos. Elige tu país para
            explorar la colección.
          </p>
          <div className="entry-country-grid">
            <Link href="/pe">
              <span>01 / PERÚ</span>
              <strong>
                Perú{" "}
                <b>
                  <ArrowUpRight />
                </b>
              </strong>
              <small>Caviar · Trufas</small>
            </Link>
            <Link href="/cl">
              <span>02 / CHILE</span>
              <strong>
                Chile{" "}
                <b>
                  <ArrowUpRight />
                </b>
              </strong>
              <small>Caviar · Trufas · Wagyu · Foie gras</small>
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="entry-bottom">
        <span>PILOTO VISUAL · IMÁGENES Y PRECIOS PROVISIONALES</span>
        <Link href="/admin-demo">
          Explorar vista administrativa <ArrowUpRight />
        </Link>
      </div>
    </main>
  );
}
