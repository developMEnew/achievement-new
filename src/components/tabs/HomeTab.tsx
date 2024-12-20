import { Button } from "@/components/ui/button";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { StatCard } from "@/components/ui/stat-card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function HomeTab() {
  return (
    <ScrollArea className="h-full bg-blue-50">
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="bg-blue-500 rounded-3xl p-6 text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-sm opacity-80 mb-1">LABEL</p>
              <h2 className="text-lg font-medium">Label</h2>
            </div>
            <p className="text-sm">JAN</p>
          </div>
          
          <div className="text-4xl font-semibold mb-4">45,890</div>
          
          <ProgressIndicator 
            progress={45} 
            className="bg-white/20 h-1.5" 
          />
          
          <div className="flex justify-between text-sm mt-2">
            <span>45,890</span>
            <span>100%</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            label="Available Working days"
            value="22"
          />
          <StatCard
            label="percentage"
            value="22.56"
            subLabel="%"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Daily</p>
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              label="need for 100%"
              value="6544"
            />
            <StatCard
              label="daily percentage"
              value="67.56"
              subLabel="%"
            />
          </div>
        </div>

        {/* Add Button */}
        <Button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-6"
        >
          ADD NEW CLIP
        </Button>
      </div>
    </ScrollArea>
  );
}