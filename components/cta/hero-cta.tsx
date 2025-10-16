"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const handleStartTrial = () => {
  // TODO: Implement trial signup flow
  console.log("Start Free Trial clicked");
  // This would typically navigate to signup or open a modal
};

const handleWatchDemo = () => {
  // TODO: Implement demo modal or video
  console.log("Watch Demo clicked");
  // This would typically open a demo modal or navigate to demo page
};

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <Button size="lg" className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700 text-white" onClick={handleStartTrial}>
        Start Free Trial
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={handleWatchDemo}>
        Watch Demo
      </Button>
    </div>
  );
}