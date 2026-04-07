"use client";

import Container from '@/components/Container'
import Section from '@/components/Section'
import ListingCard from '@/components/ListingCard'

export default function ListingsGrid() {
  return (
    <Section id="listings" muted>
      <Container>
        <h2 className="font-[Montserrat] text-3xl font-bold text-[#222222] md:text-4xl">Featured listings</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Beachfront', 'Family-friendly', 'Workcation', 'Pet-friendly'].map((filter) => (
            <span key={filter} className="rounded-full border border-[#EAEAEA] bg-white px-3 py-1 text-sm text-[#484848]">
              {filter}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ListingCard />
          <ListingCard
            title="Minimalist City Apartment"
            location="Tokyo, Japan"
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576895/site-images/corporate/10041266.jpg"
            pricePerNight="$198"
            reviews={97}
          />
          <ListingCard
            title="Alpine Cabin Retreat"
            location="Zermatt, Switzerland"
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576892/site-images/corporate/1181305.jpg"
            pricePerNight="$245"
            reviews={142}
          />
        </div>
      </Container>
    </Section>
  )
}
