"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header";

type UserSetting = {
  label: string;
  value: string | boolean;
  type: "text" | "toggle";
};

const mockSettings: UserSetting[] = [
  { label: "Username", value: "john_doe", type: "text" },
  { label: "Email", value: "john.doe@example.com", type: "text" },
  { label: "Notification", value: true, type: "toggle" },
  { label: "Dark Mode", value: false, type: "toggle" },
  { label: "Language", value: "English", type: "text" },
];

const Settings = () => {
  const [userSettings, setUserSettings] = useState<UserSetting[]>(mockSettings);

  const handleToggleChange = (index: number) => {
    const settingsCopy = [...userSettings];
    settingsCopy[index].value = !settingsCopy[index].value as boolean;
    setUserSettings(settingsCopy);
  };

  return (
    <div className="w-full">
      <Header name="User Settings" />
      <div className="overflow-x-auto mt-5 shadow-md rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-900">
          <thead className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            <tr>
              <th className="text-left py-4 px-6 uppercase font-semibold text-sm border-b-2 border-gray-200 dark:border-gray-700">
                Setting
              </th>
              <th className="text-left py-4 px-6 uppercase font-semibold text-sm border-b-2 border-gray-200 dark:border-gray-700">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {userSettings.map((setting, index) => (
              <tr
                className="hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 transition-colors"
                key={setting.label}
              >
                <td className="py-4 px-6 font-medium">{setting.label}</td>
                <td className="py-4 px-6">
                  {setting.type === "toggle" ? (
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={setting.value as boolean}
                        onChange={() => handleToggleChange(index)}
                      />
                      <div className="relative w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-blue-500"></div>
                    </label>
                  ) : (
                    <input
                      type="text"
                      className="px-4 py-2 border-2 rounded-lg text-gray-900 bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:focus:ring-blue-400"
                      value={setting.value as string}
                      onChange={(e) => {
                        const settingsCopy = [...userSettings];
                        settingsCopy[index].value = e.target.value;
                        setUserSettings(settingsCopy);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
