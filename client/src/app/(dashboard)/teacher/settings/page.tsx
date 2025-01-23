import SharedNotificationSettings from "@/components/SharedNotificationSettings";
import React from "react";

const TeacherSettings = () => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings
        title="Coach Settings"
        subtitle="Manage your coach notification settings"
      />
    </div>
  );
};

export default TeacherSettings;
