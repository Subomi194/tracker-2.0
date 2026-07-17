import SettingsSidebarLink from "@/components/settings/SettingsSidebarLink"

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto">

      {/* Page heading */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <p className="text-sm text-gray-400 mt-1">Manage your account and preferences</p>
      </div>

      {/* Mobile: tabs on top, content below. Desktop: sidebar left, content right */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
        <SettingsSidebarLink />
        <main className="flex-1 w-full bg-white border border-gray-100 rounded-2xl shadow-sm p-5 min-h-48">
          {children}
        </main>
      </div>

    </div>
  )
}