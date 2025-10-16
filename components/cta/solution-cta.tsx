"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const handleStartTrial = () => {
  // TODO: Implement trial signup flow
  console.log("Start Free Trial clicked");
  // This would typically navigate to signup or open a modal
};

const handleScheduleDemo = () => {
  // TODO: Implement demo scheduling
  console.log("Schedule Demo clicked");
  // This would typically open a scheduling modal or navigate to scheduling page
};

export function SolutionCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={handleStartTrial}>
        Start Free Trial
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-gray-100" onClick={handleScheduleDemo}>
        Schedule Demo
      </Button>
    </div>
  );
}