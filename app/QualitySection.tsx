
'use client';

export default function QualitySection() {
  const qualityFeatures = [
    'FREE FROM RUST, DUST, HAIRS AND PIMPLES',
    'PROPERLY CLEANED',
    'STRONG TEXTURE',
    'EXACT ASSORTMENT',
    'SKILLED WORKERS/SELECTORS',
    'HYGIENICALLY PACKED',
    'IN TIME SHIPMENT',
    'FAMOUS SHAHEEN QUALITY'
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our merchandise are well known within and outside the country. We supply fresh casings with strong texture, 
              well selected and assorted, accurate length and free from human or foreign articles.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <i className="ri-shield-check-line text-green-500 mr-3"></i>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Hank Length:</strong> 72, 90 & 91 Meters (as per importer needs)</p>
                <p><strong>Strands per Hank:</strong> 7 to 22 Strands (as buyer wants)</p>
                <p><strong>Minimum Piece Length:</strong> 2 to 7 Meters (as importer desires)</p>
                <p><strong>Color:</strong> Natural white without chemicals or bleach</p>
                <p><strong>Origin:</strong> Pakistani, Afghani & Australian Sheep Casings</p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Quality%20control%20inspection%20in%20meat%20processing%20facility%2C%20skilled%20workers%20examining%20natural%20casings%2C%20hygienically%20clean%20environment%2C%20professional%20quality%20assurance%20testing%2C%20food%20safety%20standards%2C%20ISO%20certified%20facility%2C%20white%20uniforms%2C%20modern%20equipment%2C%20precision%20measurement%20tools&width=600&height=500&seq=quality1&orientation=landscape"
              alt="Quality Control Process"
              className="rounded-xl shadow-lg w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
