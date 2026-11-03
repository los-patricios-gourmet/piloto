import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { isCountry, markets, categoryNames } from "@/data/markets";

export function generateStaticParams() {
  return [{ country: "pe" }, { country: "cl" }];
}
export default async function MarketHome({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  if (!isCountry(country)) notFound();
  const market = markets[country];
  const lead = market.products[0];
  return (
    <main>
      <section className="market-hero">
        <div className="market-hero-image">
          <img
            src={
              country === "pe"
                ? "/images/trufas-piloto.png"
                : "/images/caviar-piloto.png"
            }
            alt="Fotografía gourmet provisional"
          />
        </div>
        <div className="market-hero-overlay" />
        <div className="market-hero-copy">
          <Reveal>
            <p className="eyebrow gold">
              LOS PATRICIOS GOURMET · {market.name.toUpperCase()}
            </p>
            <h1>
              INGREDIENTES
              <br />
              <em>QUE INSPIRAN.</em>
            </h1>
            <p>
              {market.subtitle} Una invitación a disfrutar lo extraordinario,
              con tiempo y atención al detalle.
            </p>
            <Link className="outline-action" href={`/${country}/catalogo`}>
              DESCUBRIR LA COLECCIÓN <span>↗</span>
            </Link>
          </Reveal>
        </div>
        <div className="hero-side-label">
          UNA NUEVA EXPERIENCIA GOURMET — PILOTO 2026
        </div>
        <div className="hero-index">01 / 04</div>
      </section>
      <div className="marquee">
        <div>
          TRADICIÓN <span>✦</span> CALIDAD <span>✦</span> EXCLUSIVIDAD{" "}
          <span>✦</span> TRADICIÓN <span>✦</span> CALIDAD <span>✦</span>{" "}
          EXCLUSIVIDAD <span>✦</span>
        </div>
      </div>
      <section className="editorial-intro section-pad">
        <Reveal>
          <p className="eyebrow">EL UNIVERSO LOS PATRICIOS</p>
          <div className="intro-grid">
            <h2>
              LA <em>EXCELENCIA</em>
              <br />
              ESTÁ EN LOS
              <br />
              DETALLES.
            </h2>
            <div>
              <p>
                Cada ingrediente merece un lugar especial. Creamos un espacio
                para explorar, elegir y dar forma a momentos memorables
                alrededor de la mesa.
              </p>
              <span className="fine-line" />
              <p className="small-note">
                Explora una experiencia visual piloto. Productos, fotografías y
                precios finales están pendientes de confirmación.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="category-section section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow gold">DESCUBRE LA COLECCIÓN</p>
            <h2>
              UN MUNDO DE <em>SABORES.</em>
            </h2>
          </div>
          <Link className="text-arrow" href={`/${country}/catalogo`}>
            VER TODA LA COLECCIÓN ↗
          </Link>
        </div>
        <div
          className={`category-mosaic category-count-${market.products.length}`}
        >
          {market.products.map((item, i) => (
            <Reveal
              key={item.slug}
              className={`category-tile category-tile-${i}`}
              delay={i * 0.07}
            >
              <Link href={`/${country}/producto/${item.slug}`}>
                <img
                  src={item.image}
                  alt={`Imagen provisional de ${categoryNames[item.category]}`}
                />
                <div className="category-shade" />
                <div className="category-text">
                  <span>0{i + 1} / COLECCIÓN</span>
                  <h3>{categoryNames[item.category]}</h3>
                  <span>
                    EXPLORAR <b>↗</b>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="spotlight">
        <div className="spotlight-image">
          <img src={lead.image} alt={`Imagen provisional de ${lead.name}`} />
        </div>
        <div className="spotlight-copy">
          <Reveal>
            <p className="eyebrow gold">UNA ELECCIÓN ESPECIAL</p>
            <h2>
              EL LUJO DE
              <br />
              <em>DISFRUTAR.</em>
            </h2>
            <p>
              Descubre cada presentación, su precio piloto y un recorrido de
              compra diseñado para sentirse natural desde el primer momento.
            </p>
            <Link
              className="filled-action"
              href={`/${country}/producto/${lead.slug}`}
            >
              EXPLORAR {categoryNames[lead.category].toUpperCase()}{" "}
              <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="featured section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECCIÓN DESTACADA</p>
            <h2>
              PARA <em>DESCUBRIR.</em>
            </h2>
          </div>
          <p>Una colección de muestra para recorrer la futura tienda.</p>
        </div>
        <div className="featured-grid">
          {market.products.map((item, i) => (
            <ProductCard
              key={item.slug}
              country={country}
              product={item}
              index={i}
            />
          ))}
        </div>
      </section>
      <section className="closing-cta">
        <Reveal>
          <p className="eyebrow gold">LOS PATRICIOS GOURMET</p>
          <h2>
            LO EXTRAORDINARIO
            <br />
            <em>EMPIEZA AQUÍ.</em>
          </h2>
          <Link className="outline-action" href={`/${country}/catalogo`}>
            EXPLORAR PRODUCTOS <span>↗</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
