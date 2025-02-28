import React from 'react';
import config from './config/index.json';
import Divider from './Divider';

const Product = ({ webData }) => {
  const product = webData?.about_us || config.product; // Use webData if available, else fallback to config
  const items = product?.items || [];
  const [firstItem, secondItem] = items;


  return (
    <section className="bg-background py-8" id="product">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
          {"Sobre Nosotros".split(' ').map((word, index) => (
            <span key={index} className={index % 2 ? 'text-primary' : 'text-border'}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        
        {/* First Product Item */}
        {
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6 mt-20">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                {webData?.about_us.titulo}
              </h3>
              <p className="text-gray-600">{webData?.about_us.texto}</p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img className="h-6/6" src={webData?.about_us.imagen} alt={webData?.about_us.titulo} />
            </div>
          </div>
        }

        {/* Second Product Item */}
        {
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6">
              <img className="h-6/6" src={webData?.home.imagen || '/assets/images/logo.png'} alt={webData?.about_us.titulo} />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-20">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  {webData?.members.titulo}
                </h3>
                <p className="text-gray-600 mb-8">{webData?.members.texto}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default Product;
