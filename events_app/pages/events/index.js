import EventsPage from "@/src/components/events/events-page";
import Image from "next/image";
import Link from "next/link";

const Events_page = ({ data }) => {
  return <EventsPage data={data} />;
};

export default Events_page;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
