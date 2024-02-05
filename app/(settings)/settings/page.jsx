import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscriptions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import axios from "axios";
// import { useState } from "react";

const SettingsPage = async () => {

  const isPro = await checkSubscription();

  return (
    <>
      <Navbar />
      <SubscriptionButton isPro={isPro}/>
    </>
  );
}

export default SettingsPage;

