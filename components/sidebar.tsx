import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const tabs = [
  { label: "Template", value: "template", icon: "" },
  { label: "User Details", value: "user-details", icon: "" },
  { label: "Work Experience", value: "work-experience", icon: "" },
  { label: "Education", value: "education", icon: "" },
  { label: "Certifications", value: "certifications", icon: "" },
  { label: "Skills", value: "skills", icon: "" },
  { label: "Summary", value: "summary", icon: "" },
];

export function Sidebar() {
  return (
    <aside>
      <div>
        <div>Logo</div>

        <nav>
          <Tabs defaultValue="template" orientation="vertical">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </nav>
      </div>
    </aside>
  );
}
