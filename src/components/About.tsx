const About = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Notre usine"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre Histoire
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Depuis notre création, nous nous sommes engagés à fournir des solutions d'aluminium de la plus haute qualité. Notre expertise et notre engagement envers l'excellence nous ont permis de devenir un leader dans l'industrie.
            </p>
            <p className="text-lg text-gray-600">
              Nous investissons continuellement dans les technologies les plus récentes et dans la formation de notre équipe pour garantir des produits qui dépassent les attentes de nos clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;