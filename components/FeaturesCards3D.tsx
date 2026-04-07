"use client";
import React from "react";
import { Plane, Globe, Briefcase, Map, Compass, Camera, Star, Home, Image, Wallet, Handshake } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Home, Image, Wallet, Handshake, 
  Plane,
  Globe,
  Briefcase,
  Map,
  Compass,
  Camera,
  Star,
};

export default function FeaturesCards3D({
  badge = "Why Travel With Us",
  headline = "Everything you need for seamless adventures",
  subheadline = "We combine local expertise, smart planning, and 24/7 support so every trip feels effortless.",
  features = [],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-24 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="card-hover relative group/card border-border w-auto h-auto rounded-xl p-6 border bg-background">
                  <CardItem translateZ="50" className="mb-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="text-muted-foreground mt-2 text-sm">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
