
"use client";

import { useState, useEffect } from "react";
import { Wifi, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function OnlineStatusIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // This function will only run on the client
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Set initial status after mount
    updateOnlineStatus();

    // Add event listeners for online/offline events
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge
            variant={isOnline ? "outline" : "destructive"}
            className="flex items-center gap-1.5"
          >
            {isOnline ? (
              <Wifi className="h-3.5 w-3.5" />
            ) : (
              <WifiOff className="h-3.5 w-3.5" />
            )}
            <span className="hidden sm:inline">{isOnline ? "Online" : "Offline"}</span>
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isOnline ? "You are connected to the internet." : "You are offline. Changes will sync when you reconnect."}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
