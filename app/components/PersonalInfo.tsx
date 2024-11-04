import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
            <div className="bg-blue border border-gray-300 rounded-lg shadow-md p-6">
                <p className="text-lg"><strong>Name:</strong> Muhammad Ridwan</p>
                <p className="text-lg"><strong>TTL:</strong> Cianjur, 05 Mei 2002</p>
                <p className="text-lg"><strong>Gender:</strong> Laki-laki</p>
                <p className="text-lg"><strong>Tinggi Badan:</strong> 169 cm</p>
                <p className="text-lg"><strong>Berat Badan:</strong> 69 kg</p>
                <p className="text-lg"><strong>Whatsapp:</strong> 0831-9576-8922</p>
                <p className="text-lg"><strong>Email:</strong> xwannnnd@gmail.com</p>
            </div>
        </div>
    );
};

export default PersonalInfo;
