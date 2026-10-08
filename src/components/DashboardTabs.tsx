import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
export function DashboardTabs() {
  return (
    <div className="w-full">
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="byCategory">By Category</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          {/* <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="text-sm text-muted-foreground">
            <OverviewCards/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="byCategory">
        <Card>
          {/* <CardHeader>
            <CardTitle>By Category</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="text-sm text-muted-foreground">
            <CategoryCards/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and download your detailed reports. Export data in
              multiple formats for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            You have 5 reports ready and available to export.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your account preferences and options. Customize your
              experience to fit your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Configure notifications, security, and themes.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    </div>
  );
}
