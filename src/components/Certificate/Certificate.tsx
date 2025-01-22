import React from 'react';

interface CertificateProps {
  name: string;
  issuer: string;
  date: string;
  logo: string;
}

const CertificateCard: React.FC<CertificateProps> = ({ name, issuer, date, logo }) => (
  // <div className="flex items-center bg-white rounded-lg p-6 shadow-md">
  <div className="flex items-center bg-white rounded-lg p-6 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-transparent hover:border-blue-500">
    <img src={logo} alt={name} className="w-[100px] h-[100px] mr-6" />
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600">{issuer}</p>
      <p className="text-gray-500">{date}</p>
    </div>
  </div>
);

const Certificate: React.FC = () => {
  const certificates = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Issued Sep 2022 · Expires Sep 2025",
      logo: "/myportfolio-website/aws.png"
    },
    { 
      name: "AWS Certified Developer - Associate (In Progress)",
      issuer: "Amazon Web Services",
      date: "Expected July 2025",
      logo: "/myportfolio-website/aws.png"
    },

    // {
    //   name: "CompTIA Security+ (In Progress)",
    //   issuer: "CompTIA",
    //   date: "Expected January 2025",
    //   logo: "/myportfolio-website/CompTIA Security+.png"
    // }
   
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              name={cert.name}
              issuer={cert.issuer}
              date={cert.date}
              logo={cert.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;


// import React from 'react';

// interface CertificateProps {
//   name: string;
//   issuer: string;
//   date: string;
//   logo: string;
// }

// const CertificateCard: React.FC<CertificateProps> = ({ name, issuer, date, logo }) => (
//   <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-transparent hover:border-blue-500">
//     <img 
//       src={logo} 
//       alt={`${name} logo`} // More descriptive alt text
//       className="w-[100px] h-[100px] mr-6 border border-gray-200 rounded-lg shadow-sm" // Added border and shadow to logo
//     />
//     <div>
//       <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
//       <p className="text-gray-600">{issuer}</p>
//       <p className="text-gray-500">{date}</p>
//     </div>
//   </div>
// );

// const Certificate: React.FC = () => {
//   const certificates = [
//     {
//       name: "AWS Certified Cloud Practitioner",
//       issuer: "Amazon Web Services",
//       date: "Issued Sep 2022 · Expires Sep 2025",
//       logo: "/myportfolio-website/aws.png"
//     },
//     {
//       name: "CompTIA Security+ (In Progress)",
//       issuer: "CompTIA",
//       date: "Expected December 2025",
//       logo: "/myportfolio-website/CompTIA Security+.png"
//     },
//     {
//       name: "Microsoft Certified: Azure Fundamentals",
//       issuer: "Microsoft",
//       date: "Issued Aug 2023 · Expires Aug 2026",
//       logo: "/myportfolio-website/microsoft.png"
//     },
//     { 
//       name: "AWS Certified Developer - Associate",
//       issuer: "Amazon Web Services",
//       date: "Issued Aug 2023 · Expires Aug 2026",
//       logo: "/myportfolio-website/aws.png"
//     }
//   ];

//   return (
//     <section id="certifications" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Certifications</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {certificates.map((cert, index) => (
//             <CertificateCard
//               key={index}
//               name={cert.name}
//               issuer={cert.issuer}
//               date={cert.date}
//               logo={cert.logo}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificate;
