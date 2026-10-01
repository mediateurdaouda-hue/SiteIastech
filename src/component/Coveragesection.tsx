// Mets ton image de carte dans le dossier /public/ (ex : /public/carte-couverture.png)
// puis change le chemin ci-dessous si ton fichier porte un autre nom.
const MAP_IMAGE = "/carte-couverture.png.webp"

function CoverageSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-brand-cyan font-semibold text-sm mb-2">Zones de couverture Wi-Fi</p>
        <h2 className="text-3xl md:text-4xl font-bold text-telecom-navy mb-8">
          Nous opérons au Burkina Faso et en Afrique de l'Ouest
        </h2>

        <img
          src={MAP_IMAGE}
          alt="Carte de nos zones de couverture Wi-Fi au Burkina Faso et en Afrique de l'Ouest"
          loading="lazy"
          className="w-full max-w-3xl h-auto mx-auto"
        />

        <p className="mt-6 text-lg font-semibold text-telecom-navy max-w-xl mx-auto">
          Un réseau de partenaires, de fournisseurs et de clients dans toute la sous-région
        </p>
      </div>
    </section>
  )
}

export default CoverageSection