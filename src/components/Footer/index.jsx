import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-white text-gray-800">
      <div className="max-w-12/12 mx-auto px-4 flex flex-col gap-80 md:flex-row justify-between">
        {/* Hakkımızda Bölümü */}
        <div className="md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 font-custom">
            ShopyZone Hakkında
          </h3>
          <p>
            ShopyZone, ihtiyacınız olan her şeyi güvenle bulabileceğiniz online
            alışveriş mağazanızdır.
          </p>
        </div>

        {/* Müşteri Hizmetleri Bölümü */}
        <div className="md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Müşteri Hizmetleri</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Yardım Merkezi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kargo Bilgileri
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                İade & Değişim
              </a>
            </li>
          </ul>
        </div>

        {/* Bizi Takip Edin Bölümü */}
        <div className="md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Bizi Takip Edin</h3>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Alt Bölüm */}
      <div className="text-center text-sm mt-14 bg-gray-100 shadow-xl rounded-md">
        <p>&copy; 2025 ShopyZone. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
