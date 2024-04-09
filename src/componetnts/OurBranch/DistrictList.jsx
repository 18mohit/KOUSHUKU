import React, { useState } from "react";
// import "aos/dist/aos.css";

const data = [
  {
    district: "Anantapur",
    name: "John Doe",
    contactNumber: "123-456-7890",
    imageUrl:
      "https://cdn.luxe.digital/media/2019/09/12090457/business-professional-dress-code-men-james-bond-suit-style-luxe-digital.jpg",
  },
  {
    district: "Chittoor",
    name: "Jane Smith",
    contactNumber: "987-654-3210",
    imageUrl:
      "https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg",
  },
  {
    district: "East Godavari",
    name: "Bob Johnson",
    contactNumber: "555-123-4567",
    imageUrl: "https://s3.envato.com/files/433843130/344433374.jpg",
  },
  {
    district: "Tawang",
    name: "Bob Johnson",
    contactNumber: "555-123-3567",
    imageUrl: "https://s3.envato.com/files/433843130/344433374.jpg",
  },
  {
    district: "West Kameng",
    name: "Alice Williams",
    contactNumber: "123-456-7890",
    imageUrl:
      "https://previews.123rf.com/images/leungchopan/leungchopan1502/leungchopan150205278/36906390-professional-businessman.jpg",
  },
  {
    district: "Baksa",
    name: "David Brown",
    contactNumber: "987-654-3210",
    imageUrl:
      "https://as1.ftcdn.net/v2/jpg/02/10/46/94/1000_F_210469450_6X3Z936aFS95HAN5Lim6SSc6MLAiTqeP.jpg",
  },
  {
    district: "Araria",
    name: "Emily Jones",
    contactNumber: "555-123-4567",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583034_1280.jpg",
  },
  {
    district: "Balod",
    name: "Michael Davis",
    contactNumber: "123-456-7890",
    imageUrl:
      "https://media.istockphoto.com/id/897976892/photo/i-really-stood-my-ground-in-that-meeting.jpg?s=612x612&w=0&k=20&c=v27UruNr5-6hRlGTfAGghekwf0l95FKiJpTmdLmQ43s=",
  },
  {
    district: "North Goa",
    name: "Sarah Garcia",
    contactNumber: "987-654-3210",
    imageUrl:
      "https://img.freepik.com/free-photo/elegant-businessman-office_155003-9641.jpg",
  },
  {
    district: "South Goa",
    name: "John Smith",
    contactNumber: "555-123-4567",
    imageUrl:
      "https://media.istockphoto.com/id/1616831320/photo/smiling-mature-latin-or-indian-businessman-holding-smartphone-in-office-middle-aged-manager.webp?b=1&s=170667a&w=0&k=20&c=AwOMJB5e_TzhHQ1NuOqT4Wjrql0GnBRPum88zdTQTag=",
  },
  {
    district: "Ahmedabad",
    name: "Emily Johnson",
    contactNumber: "123-456-7890",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/005/912/369/non_2x/young-urban-businessman-professional-photo.jpg",
  },
  {
    district: "Ambala",
    name: "David Brown",
    contactNumber: "987-654-3210",
    imageUrl:
      "https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=OJk6U-oCZ31F3TGmarAAg2jVli8ZWTagAcF4P-kNIqA=",
  },
  {
    district: "Amreli",
    name: "Sarah Garcia",
    contactNumber: "555-123-4567",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbF2C9kaVGMHqrZjqdVXLxX9iSE_xgv6lJjbX2FC1gw&s",
  },
  {
    district: "Anand",
    name: "Michael Davis",
    contactNumber: "123-456-7890",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/025/474/573/non_2x/happy-satisfied-middle-aged-professional-business-man-ai-generated-photo.jpeg",
  },
];
function DistrictList({ selectedState, onSelectDistrict }) {
  const [selectedDistrict, setSelectedDistrict] = useState(data[0]);

  return (
    <div>
      <h2 className="sm:text-[2vw] text-[5vw] bg-gray-700 text-center font-serif font-bold ">
        Districts of {selectedState.name}
      </h2>
      <ul className="bg-gray-800 bg-opacity-95  ">
        <div className="flex">
          <div>
            {selectedState.districts.map((district, index) => (
              <li
                className="Distc hover:cursor-pointer hover:text-black text-[4vw] sm:text-[1.3vw] p-3 max-w-[10vw]  hover:translate-x-5 transition-all duration-700"
                key={index}
                onClick={() => {
                  
                  const selectedItem = data.find(
                    (item) => item.district === district
                  );
                  onSelectDistrict(district);
                  setSelectedDistrict(selectedItem);
                }}
              >
                {district}
              </li>
            ))}
          </div>
          <div className="infoDist">
            {selectedDistrict && (
              <ul className="sm:w-[50vw] w-[60vw] h-[60vw] sm:h-[20vw] mt-[0vw] sm:ml-[16vw] ml-[20vw]">
                <div className="sm:flex text-wrap font-serif sm:text-[1vw] text-[3.5vw] text-center">
                  <div>
                    <li className="border text-[5vw] sm:text-[1vw] sm:w-[10vw]  py-1 px-1 sm:px-4 sm:py-6 ">
                      District
                    </li>
                    <li className="border text-amber-200 text-[5vw] sm:text-[1vw] sm:w-[10vw] sm:h-[15vw] sm:px-4 px-1 py-1 sm:py-2 ">
                      {selectedDistrict.district}
                    </li>
                  </div>
                  <div>
                    <li className="border text-[5vw] sm:text-[1vw] sm:w-[10vw] py-1 px-1 sm:px-4 sm:py-6 ">
                      District Chif
                    </li>
                    <li className="border text-amber-200 text-[5vw] sm:text-[1vw] sm:w-[10vw] sm:h-[15vw] sm:px-4 px-1 py-1 sm:py-2 ">
                      {selectedDistrict.name}
                    </li>
                  </div>
                  <div>
                    <li className="border text-[5vw] sm:text-[1vw] sm:w-[10vw] py-1 px-1 sm:px-4 sm:py-6 ">
                      Contact Number
                    </li>
                    <li className="border text-amber-200 text-[5vw] sm:text-[1vw] sm:w-[10vw] sm:h-[15vw] sm:px-4 px-1 py-1 sm:py-2 ">
                      {selectedDistrict.contactNumber}
                    </li>
                  </div>
                  <div>
                    <li className="border text-[5vw] sm:text-[1vw] py-1 px-1 sm:px-4 sm:py-6 sm:w-[15vw]">
                      Image
                    </li>
                    <li className="border ">
                      <img
                        src={selectedDistrict.imageUrl}
                        alt={selectedDistrict.name}
                        className="sm:w-[15vw] w-[60vw] h-[50vw] sm:h-[15vw]"
                      />
                    </li>
                  </div>
                </div>
              </ul>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default DistrictList;
