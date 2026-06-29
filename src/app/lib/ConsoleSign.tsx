"use client";

import { useEffect } from "react";
import { signing } from "@/app/lib/sign";

export default function ConsoleSignature() {
  useEffect(() => {
    signing();
  }, []);

  return null;
}