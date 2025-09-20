import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState<UserData>({
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: "",
        },
        },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
    });
    
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        if (name.startsWith("address.")) {
            const key = name.split(".")[1];
            setFormData({
                ...formData,
                address: { ...formData.address, [key]: value },
            });
        } else if (name.startsWith("company.")) {
            const key = name.split(".")[1];
            setFormData({
                ...formData,
                company: { ...formData.company, [key]: value },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = () => {
        onSubmit(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-semibold mb-44">Add New User</h2>

                <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-3 border rounded"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 mb-3 border rounded"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full p-2 mb-3 border rounded"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="website"
          placeholder="Website"
          className="w-full p-2 mb-3 border rounded"
          value={formData.website}
          onChange={handleChange}
        />

        {/* Company */}
        <input
          type="text"
          name="company.name"
          placeholder="Company Name"
          className="w-full p-2 mb-3 border rounded"
          value={formData.company.name}
          onChange={handleChange}
        />

        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;