import qs from "qs";

export default function getQuery(key: string) {
  const { search } = window.location;
  const query = qs.parse(search.slice(1, search.length));
  return query[key];
}
