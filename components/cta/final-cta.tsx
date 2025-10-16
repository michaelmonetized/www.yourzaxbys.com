"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones } from "lucide-react";

const handleGetStarted = () => {
  // TODO: Implement signup flow
  console.log("Get Started Today clicked");
  // This would typically navigate to signup or onboarding
};

export function FinalCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <Button size="lg" className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700 text-white" onClick={handleGetStarted}>
        Get Started Today
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <div className="flex items-center text-gray-300">
        <Headphones className="h-5 w-5 mr-2" />
        <span>Need help? Call (555) 123-ZAXBYS</span>
      </div>
    </div>
  );
}