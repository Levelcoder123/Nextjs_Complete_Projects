import SingleEvent from "@/src/components/events/single-event";
import Image from "next/image";
const Event_page = ({ data }) => <SingleEvent data={data} />;

export default Event_page;

export async function getStaticPaths() {
  const { all_Events } = await import("/data/data.json");
  const all_Paths = all_Events.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: all_Paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);

  const id = context.params.id;

  const { all_Events } = await import("/data/data.json");
  const eventData = all_Events.find((ev) => id === ev.id);
  return { props: { data: eventData } };
}
