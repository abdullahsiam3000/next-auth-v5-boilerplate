"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Poppins } from "next/font/google";
import React from "react";
import { Button } from "../ui/button";

import Link from "next/link";
import { Header } from "./header";
import { SocialButtons } from "./social-buttons";

const font = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

interface CardWrapperProps {
  children: React.ReactNode;
  description: string;
  socials?: boolean;
  backButtonHref: string;
  backButtonText?: string;
}
export const CardWrapper = ({
  children,
  backButtonHref,
  backButtonText,
  description,
  socials,
}: CardWrapperProps) => {
  return (
    <Card className="sm:w-[400px] w-full shadow-md">
      <CardHeader>
        <Header description={description} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {socials && (
        <CardFooter>
          <SocialButtons />
        </CardFooter>
      )}
      <CardFooter>
        <Button className="w-full" variant={"link"} asChild>
          <Link href={backButtonHref}>{backButtonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
