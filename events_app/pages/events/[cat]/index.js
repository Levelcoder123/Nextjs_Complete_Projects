import Image from "next/image";
import Link from "next/link";
import { CatEvent } from "@/src/components/events/catEvent";

const EventsCatPage = ({data, pageName}) => (
  <CatEvent data={data} pageName={pageName} />
);

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const all_paths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(), // is toString() important here ?
      },
    };
  });

  console.log(all_paths);

  return {
    paths: all_paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);

  const id = context.params.cat;

  const { all_Events } = await import("/data/data.json");
  const data = all_Events.filter((ev) => ev.city === id);
  return { props: { data, pageName: id } };
}
