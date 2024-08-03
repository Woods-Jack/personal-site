export interface CardRowProps {
  title: string;
  img: {
    src: string;
    alt: string;
  };
  ctaText?: string;
  href?: string;
  date?: string;
  desc?: string;
}
