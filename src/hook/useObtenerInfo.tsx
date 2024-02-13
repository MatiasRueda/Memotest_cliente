import useSWR, { BareFetcher } from "swr";
import { PublicConfiguration } from "swr/_internal";
import useSWRImmutable from "swr/immutable";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function useObtenerInfo<T>(
  url: string,
  inmmutable: boolean,
  opciones?: Partial<PublicConfiguration<T, any, BareFetcher<T>>>
) {
  const { data, isValidating, isLoading, mutate, error } = inmmutable
    ? useSWRImmutable<T>(url, fetcher, opciones)
    : useSWR<T>(url, fetcher, opciones);

  return { data, isValidating, isLoading, mutate, error };
}
