import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
    return (
        <div className="order rounder-lg shadow-md p- bg-white">
            <h2 className="text-xl font-seminold mb-1">{name}</h2>
            <p className="text-gray-600">@{company.name}</p>
            <p className="text-sm text-gray-500">{email}</p>
            <p className="text-sm text-gray-500">{phone}</p>
            <p className="text-sm text-gray-500">{website}</p>
            <p className="text-sm mt-2">{address.city}, {address.street}</p>
        </div>
    );
};

export default UserCard;