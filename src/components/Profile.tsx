"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface UserProfileProps {
  name: string;
  email: string;
  phone: string;
  bio?: string;
  imageUrl?: string;
}

export default function UserProfile({
  name = "John Doe",
  email = "john.doe@example.com",
  phone = "+1 234 567 890",
  bio = "A passionate developer.",
  imageUrl = "/profile-placeholder.png",
}: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name,
    email,
    phone,
    bio,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    // Here, you can make an API call to save the data
    console.log("Updated User Data:", formData);
    setIsEditing(false);
  };

  return (
    <Card className="max-w-lg mx-auto mt-8 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
            <Image
              src={imageUrl}
              alt="User Profile Picture"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-medium">{formData.name}</h2>
          <p className="text-gray-600 text-center sm:text-lg md:text-xl">{formData.bio}</p>
        </div>
        <Separator className="my-4" />
        <div>
          {isEditing ? (
            <form className="space-y-4">
              <div>
                <label className="block text-sm sm:text-base font-medium mb-1">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium mb-1">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium mb-1">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium mb-1">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Write something about yourself..."
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <Button className="w-full mt-4" onClick={handleSave}>
                Save Changes
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm sm:text-base text-gray-600">Email</p>
                <p className="text-sm sm:text-base font-medium">{formData.email}</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-600">Phone</p>
                <p className="text-sm sm:text-base font-medium">{formData.phone}</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-600">Bio</p>
                <p className="text-sm sm:text-base font-medium">{formData.bio}</p>
              </div>
              <Button variant="outline" className="w-full" onClick={handleEditToggle}>
                Edit Profile
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
