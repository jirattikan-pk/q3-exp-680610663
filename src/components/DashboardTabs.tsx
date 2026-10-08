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
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="byCategory">By Category</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          
          <CardContent className="text-sm text-muted-foreground">
            <OverviewCards/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="byCategory">
        <Card>
          <CardContent className="text-sm text-muted-foreground">
            <CategoryCards/>
          </CardContent>
        </Card>
      </TabsContent>
      
    </Tabs>

    </div>
  );
}
